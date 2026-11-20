/**
 * Coverage gate for unlisted static pages.
 *
 * reports/a11y-audit.sh derives its routes from the sitemap, and pages shared
 * by link (noindex, never in the sitemap) would silently fall outside the axe
 * gate. The script's UNLISTED_ROUTES list closes that gap; this test keeps the
 * list honest: every .html page in an unlisted static directory must be in it,
 * and every listed route must exist. Add a page without auditing it, and this
 * fails.
 */

import fs from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";

// Static directories under public/ that are shared by link and kept out of the sitemap.
const UNLISTED_DIRS = ["delta-futurism", "hue-soundcloud"];

const root = process.cwd();
const script = fs.readFileSync(path.join(root, "reports", "a11y-audit.sh"), "utf8");

function listedRoutes(): string[] {
  const block = script.match(/UNLISTED_ROUTES=\(([\s\S]*?)\)/);
  if (!block) throw new Error("UNLISTED_ROUTES=( … ) not found in reports/a11y-audit.sh");
  return block[1]
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((s) => s.startsWith("/"));
}

function pagesOnDisk(dir: string): string[] {
  return fs
    .readdirSync(path.join(root, "public", dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => `/${dir}/${f}`);
}

describe("unlisted static pages are covered by the a11y audit", () => {
  const listed = listedRoutes();

  for (const dir of UNLISTED_DIRS) {
    it(`audits every page in public/${dir}/`, () => {
      const pages = pagesOnDisk(dir);
      expect(pages.length).toBeGreaterThan(0);
      const missing = pages.filter((p) => !listed.includes(p));
      expect(missing, `add to UNLISTED_ROUTES in reports/a11y-audit.sh: ${missing.join(", ")}`).toEqual([]);
    });
  }

  it("lists only routes that exist", () => {
    const gone = listed.filter((r) => !fs.existsSync(path.join(root, "public", r)));
    expect(gone, `remove from UNLISTED_ROUTES: ${gone.join(", ")}`).toEqual([]);
  });

  it("keeps unlisted pages out of the sitemap", () => {
    const sitemap = fs.readFileSync(path.join(root, "src", "app", "sitemap.ts"), "utf8");
    for (const dir of UNLISTED_DIRS) expect(sitemap.includes(`/${dir}`)).toBe(false);
  });
});
