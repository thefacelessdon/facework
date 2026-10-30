import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { pages, stamp } from "../../scripts/berdia-chrome.mjs";

// One logo, one nav, on every Berdia page. A page that drifts from the stamped
// masthead (or ships a second brand bar) fails here.
const all: string[] = pages().filter((p: string) => !/http-equiv="refresh"/.test(readFileSync(p, "utf8")));

describe("berdia chrome", () => {
  it.each(all)("%s carries the canonical masthead and colophon", (p) => {
    const html = readFileSync(p, "utf8");
    expect(stamp(html)).toBe(html);
    expect(html.match(/class="bm"/g)).toHaveLength(1);
  });

  it.each(all)("%s has no leftover brand bars", (p) => {
    const html = readFileSync(p, "utf8");
    expect(html).not.toMatch(/class="(family-nav|nav|nav-top|session-bar)"/);
    expect(html).not.toMatch(/Faceworks/i);
    expect(html).not.toMatch(/<style[\s>]/);
  });
});
