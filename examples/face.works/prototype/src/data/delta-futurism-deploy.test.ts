/**
 * Gate for deltafuturism.com.
 *
 * initiatives/delta-futurism/deploy/vercel.json routes the clean URLs (/, /built-to-stay, /sources)
 * to the static pages in public/delta-futurism, and every page carries a link-preview card. This test
 * fails if a route points at a page that doesn't exist, if a page loses its share tags, or if a page's
 * og:image card is missing from public/delta-futurism/share.
 */

import fs from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";

const repo = path.resolve(__dirname, "../../../../..");
const site = path.join(repo, "examples/face.works/prototype/public/delta-futurism");
const deploy = path.join(repo, "initiatives/delta-futurism/deploy");

type Route = { source: string; destination: string; has?: unknown[] };
const config = JSON.parse(fs.readFileSync(path.join(deploy, "vercel.json"), "utf8")) as {
  rewrites: Route[];
  redirects: Route[];
  headers: { source: string; headers: { key: string; value: string }[] }[];
};

describe("deltafuturism.com deploy", () => {
  it("rewrites every clean URL to a page that exists", () => {
    const want = new Map([["/built-to-stay", "/proposal.html"], ["/sources", "/sources.html"], ["/built-to-stay/apex", "/partner-apex.html"], ["/built-to-stay/uapb", "/partner-uapb.html"]]);
    for (const [src, dest] of want) {
      const r = config.rewrites.find((x) => x.source === src);
      expect(r?.destination, `${src} rewrite`).toBe(dest);
      expect(fs.existsSync(path.join(site, dest)), `${dest} exists`).toBe(true);
    }
  });

  it("redirects old paths and www to the canonical clean URLs", () => {
    const plain = config.redirects.filter((r) => !r.has).map((r) => `${r.source}->${r.destination}`);
    expect(plain).toEqual(
      expect.arrayContaining(["/index.html->/", "/proposal.html->/built-to-stay", "/sources.html->/sources", "/partner-apex.html->/built-to-stay/apex", "/partner-uapb.html->/built-to-stay/uapb"]),
    );
    expect(config.redirects.some((r) => r.has && r.destination.startsWith("https://deltafuturism.com/"))).toBe(true);
  });

  it("keeps the site out of search engines", () => {
    const all = config.headers.find((h) => h.source === "/(.*)");
    expect(all?.headers.find((h) => h.key === "X-Robots-Tag")?.value).toContain("noindex");
  });

  for (const page of ["index.html", "proposal.html", "sources.html", "partner-apex.html", "partner-uapb.html"]) {
    it(`${page} has share tags and its card exists`, () => {
      const html = fs.readFileSync(path.join(site, page), "utf8");
      for (const tag of ['property="og:title"', 'property="og:description"', 'property="og:url"', 'name="twitter:card"', 'rel="canonical"']) {
        expect(html, `${page} ${tag}`).toContain(tag);
      }
      const img = html.match(/property="og:image" content="https:\/\/deltafuturism\.com\/(share\/[^"?]+)/)?.[1];
      expect(img, `${page} og:image`).toBeTruthy();
      expect(fs.existsSync(path.join(site, img!)), `${img} exists`).toBe(true);
    });
  }
});
