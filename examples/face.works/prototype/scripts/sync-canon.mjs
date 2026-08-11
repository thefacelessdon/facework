#!/usr/bin/env node
/**
 * sync-canon.mjs — derived-copy sync for the canonical protocol documents.
 *
 * The site must serve the FULL canonical documents (Standards Architecture,
 * not GPT-era excerpts), but Vercel only uploads examples/face.works/prototype/.
 * So the canon files are copied into content/canon/ as DERIVED COPIES and
 * committed (hermetic builds), following the repo's source-authority pattern
 * (cf. FVP-100, bin/validate-tokens).
 *
 *   npm run sync-canon           # regenerate content/canon/*.md from sources
 *   npm run sync-canon -- --check  # exit non-zero if any copy's BODY drifted
 *
 * The first line of each copy is a generated header carrying provenance
 * (repo-relative source path + git short SHA of the last commit touching the
 * source). --check ignores that header line and compares bodies only, so a
 * SHA-only difference is not drift.
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PROTOTYPE_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const REPO_ROOT = path.resolve(PROTOTYPE_ROOT, "../../..");
const OUT_DIR = path.join(PROTOTYPE_ROOT, "content", "canon");

/** slug → repo-relative canonical source. Keep in sync with src/data/canon.ts. */
export const CANON_SOURCES = {
  "cultural-physics": "theories/cultural-physics.md",
  "coherence-design": "theories/coherence-design.md",
  "coherence-operating-system": "theories/the-coherence-operating-system.md",
  constitution: "CONSTITUTION.md",
  "protocol-v1": "PROTOCOL.md",
  "build-methodology": "methodology/build-methodology.md",
  "conformance-model":
    "examples/face.works/define/architecture/conformance-model.md",
  "standards-track": "standards/README.md",
};

function gitShortSha(repoRelPath) {
  try {
    const sha = execFileSync(
      "git",
      ["log", "-n", "1", "--format=%h", "--", repoRelPath],
      { cwd: REPO_ROOT, encoding: "utf8" }
    ).trim();
    if (!sha) return "uncommitted";
    const dirty = execFileSync(
      "git",
      ["status", "--porcelain", "--", repoRelPath],
      { cwd: REPO_ROOT, encoding: "utf8" }
    ).trim();
    return dirty ? `${sha}+dirty` : sha;
  } catch {
    return "unknown";
  }
}

function header(repoRelPath, sha) {
  return `<!-- DERIVED COPY — do not edit. Source: ${repoRelPath} @ ${sha}. Regenerate: npm run sync-canon -->\n`;
}

/** Body of a derived copy = everything after the generated header line. */
function bodyOf(copyText) {
  const nl = copyText.indexOf("\n");
  return nl === -1 ? "" : copyText.slice(nl + 1);
}

const checkMode = process.argv.includes("--check");
let failed = false;

if (!checkMode) fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [slug, repoRelPath] of Object.entries(CANON_SOURCES)) {
  const sourcePath = path.join(REPO_ROOT, repoRelPath);
  const outPath = path.join(OUT_DIR, `${slug}.md`);

  if (!fs.existsSync(sourcePath)) {
    console.error(`✗ ${slug}: source missing: ${repoRelPath}`);
    failed = true;
    continue;
  }
  const source = fs.readFileSync(sourcePath, "utf8");

  if (checkMode) {
    if (!fs.existsSync(outPath)) {
      console.error(`✗ ${slug}: derived copy missing (content/canon/${slug}.md)`);
      failed = true;
      continue;
    }
    const copy = fs.readFileSync(outPath, "utf8");
    if (bodyOf(copy) !== source) {
      console.error(
        `✗ ${slug}: content/canon/${slug}.md has drifted from ${repoRelPath} — run: npm run sync-canon`
      );
      failed = true;
    } else {
      console.log(`✓ ${slug}: in sync with ${repoRelPath}`);
    }
    continue;
  }

  const next = header(repoRelPath, gitShortSha(repoRelPath)) + source;
  const prev = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : null;
  if (prev === next) {
    console.log(`= ${slug}: unchanged`);
  } else {
    fs.writeFileSync(outPath, next);
    console.log(`✓ ${slug}: wrote content/canon/${slug}.md from ${repoRelPath}`);
  }
}

if (failed) process.exit(1);
