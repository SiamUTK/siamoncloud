#!/usr/bin/env ts-node
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import ts from "typescript";

const ROOT = process.cwd();
const DATE_STAMP = new Date().toISOString().slice(0, 10).replaceAll("-", "");
const BACKUP_DIR = path.join(ROOT, `_cleanup_backup_${DATE_STAMP}`);

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const c = {
  red: (s: string) => `${ANSI.red}${s}${ANSI.reset}`,
  yellow: (s: string) => `${ANSI.yellow}${s}${ANSI.reset}`,
  green: (s: string) => `${ANSI.green}${s}${ANSI.reset}`,
  cyan: (s: string) => `${ANSI.cyan}${s}${ANSI.reset}`,
  gray: (s: string) => `${ANSI.gray}${s}${ANSI.reset}`,
  bold: (s: string) => `${ANSI.bold}${s}${ANSI.reset}`,
};

type Mode = "dry" | "run";
type Reason =
  | "orphan-module"
  | "dead-css"
  | "unused-asset"
  | "old-backup-file"
  | "duplicate-asset"
  | "empty-folder"
  | "uncertain-dynamic-import"
  | "outside-safe-scope"
  | "protected";

type Item = { file: string; reason: Reason; detail?: string };

type ScanResult = {
  safeToMove: Item[];
  reviewRequired: Item[];
  protected: Item[];
  reachable: Set<string>;
  allFiles: string[];
};

const FILE_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".scss",
  ".sass",
  ".html",
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".ico",
];

const CODE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"];
const STYLE_EXTENSIONS = [".css", ".scss", ".sass"];
const ASSET_EXTENSIONS = [
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".ico",
  ".avif",
];
const OLD_FILE_EXTENSIONS = [".old", ".bak", ".tmp"];

const WHITELIST_PATTERNS = [
  "src/config/**",
  "src/lib/i18n/**",
  "src/routes/**",
  "public/images/AI-Mascot/**",
  "**/*bindee*",
  "**/locales/**",
  "**/en.json",
  "**/th.json",
  "src/i18n/**",
];

const NEVER_TOUCH_PATTERNS = [
  "node_modules/**",
  ".git/**",
  "dist/**",
  "build/**",
  "coverage/**",
  "**/_cleanup_backup_*/**",
  "_cleanup_backup_*/**",
  "deploy-static/**",
  "server/**",
  "supabase/**",
  "scripts/cleanup-unused.ts",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
];

const SAFE_AUTOMOVE_SCOPES = [
  "src/**",
  "styles/**",
  "assets/**",
  "components/**",
  "js/**",
];

const SOURCE_TEXT_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".scss",
  ".sass",
  ".html",
  ".md",
  ".txt",
];

function toPosix(relativePath: string) {
  return relativePath.split(path.sep).join("/");
}

function fromRoot(relativePath: string) {
  return path.join(ROOT, relativePath);
}

function stripLeadingSlash(input: string) {
  return input.startsWith("/") ? input.slice(1) : input;
}

function escapeRegex(input: string) {
  return input.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
}

function globToRegex(pattern: string) {
  const normalized = pattern.replaceAll("\\", "/");
  let result = "^";

  for (let i = 0; i < normalized.length; i += 1) {
    const char = normalized[i];

    if (char === "*") {
      const next = normalized[i + 1];
      if (next === "*") {
        result += ".*";
        i += 1;
      } else {
        result += "[^/]*";
      }
      continue;
    }

    result += escapeRegex(char);
  }

  result += "$";
  return new RegExp(result, "i");
}

const WHITELIST_REGEX = WHITELIST_PATTERNS.map(globToRegex);
const NEVER_TOUCH_REGEX = NEVER_TOUCH_PATTERNS.map(globToRegex);
const SAFE_AUTOMOVE_REGEX = SAFE_AUTOMOVE_SCOPES.map(globToRegex);

function isWhitelisted(relativeFile: string) {
  return WHITELIST_REGEX.some((rule) => rule.test(relativeFile));
}

function isNeverTouch(relativeFile: string) {
  return NEVER_TOUCH_REGEX.some((rule) => rule.test(relativeFile));
}

function isInSafeAutoMoveScope(relativeFile: string) {
  return SAFE_AUTOMOVE_REGEX.some((rule) => rule.test(relativeFile));
}

function hasFileExtension(file: string, extensions: string[]) {
  const ext = path.extname(file).toLowerCase();
  return extensions.includes(ext);
}

async function pathExists(targetPath: string) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function walkDirectory(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const relative = toPosix(path.relative(ROOT, full));

    if (entry.isDirectory()) {
      if (isNeverTouch(`${relative}/`)) {
        continue;
      }
      files.push(...(await walkDirectory(full)));
    } else {
      if (isNeverTouch(relative)) {
        continue;
      }
      files.push(full);
    }
  }

  return files;
}

async function readUtf8Safe(filePath: string) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

function getScriptKindByExt(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".tsx") return ts.ScriptKind.TSX;
  if (ext === ".ts") return ts.ScriptKind.TS;
  if (ext === ".jsx") return ts.ScriptKind.JSX;
  if (ext === ".js" || ext === ".mjs" || ext === ".cjs")
    return ts.ScriptKind.JS;
  return ts.ScriptKind.Unknown;
}

function isLocalSpec(specifier: string) {
  return (
    specifier.startsWith("./") ||
    specifier.startsWith("../") ||
    specifier.startsWith("@/") ||
    specifier.startsWith("/")
  );
}

async function resolveImportSpecifier(
  fromFile: string,
  specifier: string,
): Promise<string | null> {
  if (!isLocalSpec(specifier)) {
    return null;
  }

  if (specifier.startsWith("/")) {
    const publicCandidate = fromRoot(
      path.join("public", stripLeadingSlash(specifier)),
    );
    if (await pathExists(publicCandidate)) return publicCandidate;

    const rootCandidate = fromRoot(stripLeadingSlash(specifier));
    if (await pathExists(rootCandidate)) return rootCandidate;

    return null;
  }

  const basePath = specifier.startsWith("@/")
    ? fromRoot(path.join("src", specifier.slice(2)))
    : path.resolve(path.dirname(fromFile), specifier);

  const hasExt = path.extname(basePath).length > 0;
  const candidates = hasExt
    ? [basePath]
    : [
        ...FILE_EXTENSIONS.map((ext) => `${basePath}${ext}`),
        ...FILE_EXTENSIONS.map((ext) => path.join(basePath, `index${ext}`)),
      ];

  for (const candidate of candidates) {
    if (await pathExists(candidate)) {
      return candidate;
    }
  }

  return null;
}

function collectHtmlReferences(source: string) {
  const refs: string[] = [];
  const attrRegex = /(?:src|href)\s*=\s*["']([^"']+)["']/gi;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(source)) !== null) {
    const value = match[1]?.trim();
    if (
      !value ||
      value.startsWith("http") ||
      value.startsWith("mailto:") ||
      value.startsWith("tel:") ||
      value.startsWith("#")
    ) {
      continue;
    }
    refs.push(value);
  }

  return refs;
}

function collectCssReferences(source: string) {
  const refs: string[] = [];
  const urlRegex = /url\(([^)]+)\)/gi;
  const importRegex = /@import\s+["']([^"']+)["']/gi;

  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(source)) !== null) {
    const raw = (match[1] ?? "").trim().replace(/^['"]|['"]$/g, "");
    if (!raw || raw.startsWith("data:") || raw.startsWith("http")) continue;
    refs.push(raw);
  }

  while ((match = importRegex.exec(source)) !== null) {
    const value = (match[1] ?? "").trim();
    if (!value || value.startsWith("http")) continue;
    refs.push(value);
  }

  return refs;
}

function collectTextPathHints(source: string) {
  const hints: string[] = [];
  const pathLikeRegex =
    /["'`]((?:\.?\.?\/|\/)?(?:images|assets|public|locales)\/[\w./-]+)["'`]/g;
  let match: RegExpExecArray | null;

  while ((match = pathLikeRegex.exec(source)) !== null) {
    if (match[1]) hints.push(match[1]);
  }

  return hints;
}

async function parseCodeReferences(filePath: string, source: string) {
  const refs: string[] = [];
  const uncertainDynamicImports: string[] = [];

  const scriptKind = getScriptKindByExt(filePath);
  if (scriptKind === ts.ScriptKind.Unknown) {
    return { refs, uncertainDynamicImports };
  }

  const sf = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  );

  const visit = (node: ts.Node) => {
    if (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      refs.push(node.moduleSpecifier.text);
    }

    if (
      ts.isExportDeclaration(node) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      refs.push(node.moduleSpecifier.text);
    }

    if (ts.isCallExpression(node)) {
      if (node.expression.kind === ts.SyntaxKind.ImportKeyword) {
        const arg = node.arguments[0];
        if (arg && ts.isStringLiteral(arg)) {
          refs.push(arg.text);
        } else if (arg && ts.isNoSubstitutionTemplateLiteral(arg)) {
          refs.push(arg.text);
        } else {
          uncertainDynamicImports.push(node.getText(sf));
        }
      }

      if (
        ts.isIdentifier(node.expression) &&
        node.expression.text === "require" &&
        node.arguments.length >= 1
      ) {
        const arg = node.arguments[0];
        if (ts.isStringLiteral(arg)) {
          refs.push(arg.text);
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sf, visit);
  return { refs, uncertainDynamicImports };
}

async function resolvePathHints(
  fromFile: string,
  hint: string,
): Promise<string | null> {
  const clean = hint.split("?")[0].split("#")[0];
  if (!clean) return null;

  if (clean.startsWith("/")) {
    const publicCandidate = fromRoot(
      path.join("public", stripLeadingSlash(clean)),
    );
    if (await pathExists(publicCandidate)) return publicCandidate;

    const rootCandidate = fromRoot(stripLeadingSlash(clean));
    if (await pathExists(rootCandidate)) return rootCandidate;

    return null;
  }

  const fromDirCandidate = path.resolve(path.dirname(fromFile), clean);
  if (await pathExists(fromDirCandidate)) return fromDirCandidate;

  const rootCandidate = fromRoot(clean);
  if (await pathExists(rootCandidate)) return rootCandidate;

  const fromPublic = fromRoot(path.join("public", clean));
  if (await pathExists(fromPublic)) return fromPublic;

  return null;
}

async function collectEntryPoints(allRelativeFiles: string[]) {
  const preferredRoots = [
    "index.html",
    "contact.html",
    "stats.html",
    "src/main.tsx",
    "src/main.jsx",
    "src/main.ts",
    "src/main.js",
    "src/App.tsx",
    "src/App.jsx",
    "js/main.js",
    "js/contact.js",
    "js/contact-ui.js",
    "server/index.js",
  ];

  const roots = new Set<string>();

  for (const root of preferredRoots) {
    if (allRelativeFiles.includes(root) && !isNeverTouch(root)) {
      roots.add(root);
    }
  }

  const packageJsonPath = fromRoot("package.json");
  const packageSource = await readUtf8Safe(packageJsonPath);
  try {
    const pkg = JSON.parse(packageSource);
    const scripts = Object.values<string>(pkg?.scripts ?? {});
    const scriptPathRegex = /([\w./-]+\.(?:[cm]?js|ts|jsx|tsx))/g;

    for (const script of scripts) {
      let match: RegExpExecArray | null;
      while ((match = scriptPathRegex.exec(script)) !== null) {
        const rel = toPosix(match[1]);
        if (allRelativeFiles.includes(rel) && !isNeverTouch(rel)) {
          roots.add(rel);
        }
      }
    }
  } catch {
    // no-op
  }

  const supabaseEntry = allRelativeFiles.filter((file) =>
    /^supabase\/functions\/.+\/index\.ts$/i.test(file),
  );

  for (const rel of supabaseEntry) {
    if (!isNeverTouch(rel)) {
      roots.add(rel);
    }
  }

  return Array.from(roots);
}

async function computeDuplicateAssets(allRelativeFiles: string[]) {
  const candidates = allRelativeFiles.filter((file) =>
    hasFileExtension(file, ASSET_EXTENSIONS),
  );
  const hashBuckets = new Map<string, string[]>();

  for (const rel of candidates) {
    const full = fromRoot(rel);
    try {
      const buffer = await fs.readFile(full);
      const hash = crypto.createHash("sha256").update(buffer).digest("hex");
      const current = hashBuckets.get(hash) ?? [];
      current.push(rel);
      hashBuckets.set(hash, current);
    } catch {
      // no-op
    }
  }

  const duplicates: [string, string[]][] = [];
  for (const [hash, files] of hashBuckets.entries()) {
    if (files.length > 1) {
      duplicates.push([hash, files]);
    }
  }

  return duplicates;
}

async function scan(): Promise<ScanResult> {
  const allFilesAbs = await walkDirectory(ROOT);
  const allRelativeFiles = allFilesAbs.map((f) =>
    toPosix(path.relative(ROOT, f)),
  );

  const textFiles = allRelativeFiles.filter((file) =>
    hasFileExtension(file, SOURCE_TEXT_EXTENSIONS),
  );

  const edges = new Map<string, Set<string>>();
  const uncertainImportItems: Item[] = [];
  const protectedItems = new Map<string, Item>();

  for (const rel of allRelativeFiles) {
    if (isWhitelisted(rel)) {
      protectedItems.set(rel, {
        file: rel,
        reason: "protected",
        detail: "matched whitelist",
      });
    }
  }

  for (const rel of textFiles) {
    const full = fromRoot(rel);
    const source = await readUtf8Safe(full);
    const refs = new Set<string>();

    if (hasFileExtension(rel, CODE_EXTENSIONS)) {
      const codeRefs = await parseCodeReferences(full, source);
      for (const spec of codeRefs.refs) {
        const resolved = await resolveImportSpecifier(full, spec);
        if (resolved) {
          refs.add(toPosix(path.relative(ROOT, resolved)));
        }
      }

      if (codeRefs.uncertainDynamicImports.length > 0) {
        uncertainImportItems.push({
          file: rel,
          reason: "uncertain-dynamic-import",
          detail: "contains non-literal dynamic import()",
        });

        if (source.includes("./locales/") || source.includes("locales/")) {
          const dynamicLocaleDir = toPosix(
            path.join(path.dirname(rel), "locales"),
          );
          if (
            allRelativeFiles.some((f) => f.startsWith(`${dynamicLocaleDir}/`))
          ) {
            for (const localeFile of allRelativeFiles.filter((f) =>
              f.startsWith(`${dynamicLocaleDir}/`),
            )) {
              protectedItems.set(localeFile, {
                file: localeFile,
                reason: "protected",
                detail: "dynamic import locale path",
              });
            }
          }
        }
      }
    }

    if (hasFileExtension(rel, STYLE_EXTENSIONS)) {
      for (const ref of collectCssReferences(source)) {
        const resolved = await resolvePathHints(full, ref);
        if (resolved) {
          refs.add(toPosix(path.relative(ROOT, resolved)));
        }
      }
    }

    if (path.extname(rel).toLowerCase() === ".html") {
      for (const ref of collectHtmlReferences(source)) {
        const resolved = await resolvePathHints(full, ref);
        if (resolved) {
          refs.add(toPosix(path.relative(ROOT, resolved)));
        }
      }
    }

    for (const hint of collectTextPathHints(source)) {
      const resolved = await resolvePathHints(full, hint);
      if (resolved) {
        refs.add(toPosix(path.relative(ROOT, resolved)));
      }
    }

    if (refs.size > 0) {
      edges.set(rel, refs);
    }
  }

  const entryPoints = await collectEntryPoints(allRelativeFiles);
  const reachable = new Set<string>(entryPoints);
  const queue = [...entryPoints];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const refs = edges.get(current);
    if (!refs) continue;

    for (const next of refs) {
      if (!reachable.has(next)) {
        reachable.add(next);
        queue.push(next);
      }
    }
  }

  const duplicateAssets = await computeDuplicateAssets(allRelativeFiles);

  const safeToMove: Item[] = [];
  const reviewRequired: Item[] = [...uncertainImportItems];

  for (const rel of allRelativeFiles) {
    if (isNeverTouch(rel)) continue;

    const protectedItem = protectedItems.get(rel);
    if (protectedItem) {
      continue;
    }

    const ext = path.extname(rel).toLowerCase();
    const isOldBackup =
      OLD_FILE_EXTENSIONS.includes(ext) || /\.(old|bak|tmp)\./i.test(rel);

    if (isOldBackup) {
      if (isInSafeAutoMoveScope(rel) || rel.startsWith("src/")) {
        safeToMove.push({
          file: rel,
          reason: "old-backup-file",
          detail: "legacy backup/temp file",
        });
      } else {
        reviewRequired.push({
          file: rel,
          reason: "outside-safe-scope",
          detail: "old backup file outside app scope",
        });
      }
      continue;
    }

    if (reachable.has(rel)) {
      continue;
    }

    if (isWhitelisted(rel)) {
      continue;
    }

    const isCode = hasFileExtension(rel, CODE_EXTENSIONS);
    const isStyle = hasFileExtension(rel, STYLE_EXTENSIONS);
    const isAsset = hasFileExtension(rel, ASSET_EXTENSIONS);

    if (!isInSafeAutoMoveScope(rel)) {
      reviewRequired.push({
        file: rel,
        reason: "outside-safe-scope",
        detail: "unreferenced but outside conservative auto-move scope",
      });
      continue;
    }

    if (isCode) {
      safeToMove.push({
        file: rel,
        reason: "orphan-module",
        detail: "not reachable from entrypoints",
      });
      continue;
    }

    if (isStyle) {
      safeToMove.push({
        file: rel,
        reason: "dead-css",
        detail: "stylesheet not referenced",
      });
      continue;
    }

    if (isAsset) {
      safeToMove.push({
        file: rel,
        reason: "unused-asset",
        detail: "asset not referenced",
      });
      continue;
    }
  }

  for (const [, dupFiles] of duplicateAssets) {
    const [keeper, ...others] = dupFiles.sort();
    for (const dupe of others) {
      if (isWhitelisted(dupe)) {
        continue;
      }
      reviewRequired.push({
        file: dupe,
        reason: "duplicate-asset",
        detail: `same hash as ${keeper}`,
      });
    }
  }

  const folders = new Set<string>();
  for (const rel of allRelativeFiles) {
    let current = path.dirname(rel);
    while (current && current !== ".") {
      folders.add(toPosix(current));
      current = path.dirname(current);
    }
  }

  for (const folder of Array.from(folders)) {
    if (isNeverTouch(`${folder}/`) || isWhitelisted(`${folder}/placeholder`)) {
      continue;
    }

    const hasAnyFiles = allRelativeFiles.some((f) =>
      f.startsWith(`${folder}/`),
    );
    if (!hasAnyFiles) {
      reviewRequired.push({
        file: `${folder}/`,
        reason: "empty-folder",
        detail: "folder appears empty",
      });
    }
  }

  for (const [file, item] of protectedItems.entries()) {
    if (allRelativeFiles.includes(file)) {
      // keep
    }
  }

  const protectedList = Array.from(protectedItems.values()).sort((a, b) =>
    a.file.localeCompare(b.file),
  );

  const uniqueByFileReason = (items: Item[]) => {
    const seen = new Set<string>();
    const result: Item[] = [];
    for (const item of items) {
      const key = `${item.file}::${item.reason}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
    return result.sort((a, b) => a.file.localeCompare(b.file));
  };

  return {
    safeToMove: uniqueByFileReason(safeToMove),
    reviewRequired: uniqueByFileReason(reviewRequired),
    protected: protectedList,
    reachable,
    allFiles: allRelativeFiles,
  };
}

async function ensureDir(target: string) {
  await fs.mkdir(target, { recursive: true });
}

async function moveFile(relativeFile: string) {
  const from = fromRoot(relativeFile);
  const to = path.join(BACKUP_DIR, relativeFile);
  await ensureDir(path.dirname(to));

  try {
    await fs.rename(from, to);
  } catch {
    await fs.copyFile(from, to);
    await fs.unlink(from);
  }
}

function printSection(
  title: string,
  colorize: (x: string) => string,
  items: Item[],
) {
  console.log(`\n${colorize(c.bold(title))} ${c.gray(`(${items.length})`)}`);
  if (items.length === 0) {
    console.log(c.gray("  - none"));
    return;
  }

  for (const item of items) {
    const detail = item.detail ? ` ${c.gray(`- ${item.detail}`)}` : "";
    console.log(`  - ${item.file}${detail}`);
  }
}

function parseMode(): Mode {
  const args = new Set(process.argv.slice(2));
  if (args.has("--run")) return "run";
  return "dry";
}

async function main() {
  const mode = parseMode();
  const result = await scan();

  console.log(c.cyan(c.bold("Siam On Cloud Cleanup Scanner")));
  console.log(
    c.gray(
      `Mode: ${mode === "run" ? "RUN (moves files)" : "DRY RUN (no file changes)"}`,
    ),
  );
  console.log(c.gray(`Workspace: ${ROOT}`));

  printSection("SAFE TO MOVE", c.green, result.safeToMove);
  printSection("REVIEW REQUIRED", c.yellow, result.reviewRequired);
  printSection("PROTECTED", c.red, result.protected);

  const summary = [
    `Reachable files: ${result.reachable.size}`,
    `Total files scanned: ${result.allFiles.length}`,
    `Safe to move: ${result.safeToMove.length}`,
    `Review required: ${result.reviewRequired.length}`,
    `Protected: ${result.protected.length}`,
  ];

  console.log(`\n${c.bold("Summary")}`);
  for (const line of summary) {
    console.log(`  - ${line}`);
  }

  if (mode === "dry") {
    console.log(`\n${c.cyan("Dry run complete. No files moved.")}`);
    console.log(
      c.gray(
        "Run with --run to move SAFE TO MOVE items into the dated backup folder.",
      ),
    );
    return;
  }

  if (result.safeToMove.length === 0) {
    console.log(`\n${c.cyan("No SAFE TO MOVE items found. Nothing moved.")}`);
    return;
  }

  await ensureDir(BACKUP_DIR);

  for (const item of result.safeToMove) {
    await moveFile(item.file);
  }

  console.log(`\n${c.green(c.bold("Move complete"))}`);
  console.log(
    c.gray(`Backup folder: ${toPosix(path.relative(ROOT, BACKUP_DIR))}`),
  );
  console.log(c.gray(`Moved files: ${result.safeToMove.length}`));
}

main().catch((error) => {
  console.error(c.red(c.bold("Cleanup scan failed")));
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
