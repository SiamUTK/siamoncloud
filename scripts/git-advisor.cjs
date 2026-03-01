#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

const CONFIG = {
  debounceMs: 3000,
  pollIntervalMs: 15000,
  suppressDuplicateMs: 120000,
  tinyEditFileThreshold: 1,
  commitFileThreshold: 3,
  warningFileThreshold: 10,
  longSinceCommitMinutes: 180,
  pushReminderMinutes: 45,
  pushStableMinutes: 2,
  inProgressWindowMs: 20000,
  quietWindowMs: 8000,
};

const IGNORE_DIRS = [".git", "node_modules", "dist", "build", ".next", ".vite"];
const PREFIX = "[Git Advisor]";

const repoRoot = process.cwd();

let debounceTimer = null;
let isEvaluating = false;
let pendingEvaluation = false;
let lastFsEventAt = 0;
let lastAdviceKey = "";
let lastAdviceAt = 0;

function log(message) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp} ${PREFIX} ${message}`);
}

function runGit(args) {
  return new Promise((resolve, reject) => {
    execFile(
      "git",
      args,
      {
        cwd: repoRoot,
        windowsHide: true,
        maxBuffer: 1024 * 1024,
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr?.trim() || error.message));
          return;
        }
        resolve((stdout || "").trim());
      },
    );
  });
}

function parseBranchAb(line) {
  const match = line.match(/\+(\d+)\s+\-(\d+)/);
  if (!match) {
    return { ahead: 0, behind: 0 };
  }

  return {
    ahead: Number(match[1] || 0),
    behind: Number(match[2] || 0),
  };
}

function parseStatusPorcelainV2(raw) {
  const lines = raw.split(/\r?\n/).filter(Boolean);

  let ahead = 0;
  let behind = 0;
  let staged = 0;
  let unstaged = 0;
  let untracked = 0;
  let conflicted = 0;
  const changedFiles = new Set();

  for (const line of lines) {
    if (line.startsWith("# branch.ab")) {
      const branchInfo = parseBranchAb(line);
      ahead = branchInfo.ahead;
      behind = branchInfo.behind;
      continue;
    }

    if (line.startsWith("u ")) {
      conflicted += 1;
      const parts = line.split(" ");
      const maybePath = parts[parts.length - 1];
      if (maybePath) changedFiles.add(maybePath);
      continue;
    }

    if (line.startsWith("? ")) {
      untracked += 1;
      const filePath = line.slice(2).trim();
      if (filePath) changedFiles.add(filePath);
      continue;
    }

    if (line.startsWith("1 ") || line.startsWith("2 ")) {
      const parts = line.split(" ");
      const xy = parts[1] || "..";
      const x = xy[0];
      const y = xy[1];

      if (x && x !== ".") staged += 1;
      if (y && y !== ".") unstaged += 1;

      const fallbackPath = parts[parts.length - 1];
      const tabPath = line.includes("\t")
        ? line.split("\t")[line.split("\t").length - 1]
        : "";
      const filePath = tabPath || fallbackPath;
      if (filePath) changedFiles.add(filePath);
    }
  }

  return {
    ahead,
    behind,
    staged,
    unstaged,
    untracked,
    conflicted,
    changedFileCount: changedFiles.size,
  };
}

async function getCommitTimestamp(ref) {
  try {
    const raw = await runGit(["log", "-1", "--format=%ct", ref]);
    const ts = Number(raw);
    return Number.isFinite(ts) ? ts : null;
  } catch {
    return null;
  }
}

async function getSnapshot() {
  const statusRaw = await runGit(["status", "--porcelain=2", "--branch"]);
  const parsed = parseStatusPorcelainV2(statusRaw);

  const headCommitTs = await getCommitTimestamp("HEAD");
  const lastCommitTs = headCommitTs;
  const upstreamCommitTs = await getCommitTimestamp("@{u}");

  return {
    ...parsed,
    headCommitTs,
    lastCommitTs,
    upstreamCommitTs,
  };
}

function minutesSince(unixSeconds) {
  if (!unixSeconds) return Infinity;
  return (Date.now() / 1000 - unixSeconds) / 60;
}

function emitAdvice({ type, code, message }) {
  const adviceKey = `${type}:${code}:${message}`;
  const now = Date.now();

  if (
    adviceKey === lastAdviceKey &&
    now - lastAdviceAt < CONFIG.suppressDuplicateMs
  ) {
    return;
  }

  lastAdviceKey = adviceKey;
  lastAdviceAt = now;

  log(`${type.toUpperCase()}: ${message}`);
}

function evaluateAdvice(snapshot) {
  const dirtyFiles = snapshot.changedFileCount;
  const dirty = dirtyFiles > 0;
  const sinceLastCommit = minutesSince(snapshot.lastCommitTs);
  const sinceHeadCommit = minutesSince(snapshot.headCommitTs);
  const sinceUpstreamCommit = minutesSince(snapshot.upstreamCommitTs);
  const sinceLastFsEvent = lastFsEventAt
    ? Date.now() - lastFsEventAt
    : Infinity;
  const inProgress = sinceLastFsEvent <= CONFIG.inProgressWindowMs;
  const quiet = sinceLastFsEvent >= CONFIG.quietWindowMs;

  if (snapshot.conflicted > 0) {
    return {
      type: "warning",
      code: "merge-conflict",
      message:
        "Merge conflicts detected. Resolve conflicts before commit or push.",
    };
  }

  if (
    dirtyFiles >= CONFIG.warningFileThreshold ||
    (dirtyFiles >= CONFIG.commitFileThreshold &&
      sinceLastCommit >= CONFIG.longSinceCommitMinutes)
  ) {
    return {
      type: "warning",
      code: "large-uncommitted",
      message: "You have many uncommitted changes. Consider committing soon.",
    };
  }

  if (
    snapshot.ahead > 0 &&
    !dirty &&
    sinceHeadCommit >= CONFIG.pushStableMinutes &&
    sinceUpstreamCommit >= CONFIG.pushReminderMinutes
  ) {
    return {
      type: "suggested",
      code: "push",
      message: "Recommended: Push your commits to remote for backup.",
    };
  }

  if (
    snapshot.staged > 0 &&
    snapshot.unstaged === 0 &&
    snapshot.untracked === 0 &&
    snapshot.conflicted === 0 &&
    quiet
  ) {
    return {
      type: "suggested",
      code: "commit",
      message:
        "Suggested: Commit your changes — looks like a completed logical update.",
    };
  }

  if (
    dirty &&
    snapshot.staged === 0 &&
    dirtyFiles <= CONFIG.tinyEditFileThreshold &&
    inProgress
  ) {
    return {
      type: "hold",
      code: "mid-edit",
      message:
        "Hold on — changes look in progress. Consider committing after finishing this block.",
    };
  }

  return {
    type: "info",
    code: "stable",
    message: "No immediate git action recommended.",
  };
}

async function evaluateNow(trigger) {
  if (isEvaluating) {
    pendingEvaluation = true;
    return;
  }

  isEvaluating = true;

  try {
    const snapshot = await getSnapshot();
    const advice = evaluateAdvice(snapshot);
    emitAdvice(advice);

    if (trigger === "startup") {
      log(
        `Watching ${repoRoot} | debounce=${CONFIG.debounceMs}ms | poll=${CONFIG.pollIntervalMs}ms`,
      );
    }
  } catch (error) {
    emitAdvice({
      type: "warning",
      code: "git-check-failed",
      message: `Git Advisor could not read repository state (${error.message}).`,
    });
  } finally {
    isEvaluating = false;

    if (pendingEvaluation) {
      pendingEvaluation = false;
      evaluateNow("pending");
    }
  }
}

function shouldIgnore(filename) {
  if (!filename) return true;
  const normalized = filename.replace(/\\/g, "/");
  return IGNORE_DIRS.some(
    (dir) =>
      normalized.includes(`/${dir}/`) || normalized.startsWith(`${dir}/`),
  );
}

function scheduleEvaluation(trigger) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    evaluateNow(trigger);
  }, CONFIG.debounceMs);
}

function startWatcher() {
  try {
    const watcher = fs.watch(
      repoRoot,
      { recursive: true },
      (_eventType, filename) => {
        if (!filename || shouldIgnore(filename)) {
          return;
        }

        lastFsEventAt = Date.now();
        scheduleEvaluation("fs-watch");
      },
    );

    watcher.on("error", (error) => {
      emitAdvice({
        type: "warning",
        code: "watcher-error",
        message: `File watcher error: ${error.message}`,
      });
    });
  } catch (error) {
    emitAdvice({
      type: "warning",
      code: "watcher-init-failed",
      message: `Watcher not available (${error.message}). Polling mode remains active.`,
    });
  }
}

function startPolling() {
  setInterval(() => {
    scheduleEvaluation("poll");
  }, CONFIG.pollIntervalMs);
}

async function main() {
  log("Starting advisory-only monitor (no auto-commit, no auto-push).");

  startWatcher();
  startPolling();
  await evaluateNow("startup");
}

main();
