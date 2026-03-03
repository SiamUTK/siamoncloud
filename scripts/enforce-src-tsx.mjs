import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const srcDir = join(root, "src");

function walk(dirPath, result = []) {
  const entries = readdirSync(dirPath);

  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, result);
      continue;
    }

    if (entry.endsWith(".jsx")) {
      result.push(relative(root, fullPath).replace(/\\/g, "/"));
    }
  }

  return result;
}

const jsxFiles = walk(srcDir);

if (jsxFiles.length > 0) {
  console.error("❌ Convention check failed: .jsx files found under src/");
  for (const filePath of jsxFiles) {
    console.error(` - ${filePath}`);
  }
  process.exit(1);
}

console.log("✅ Convention check passed: no .jsx files under src/");
