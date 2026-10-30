#!/usr/bin/env node
// Stamps the ONE Berdia masthead + colophon into every page under public/berdia/.
// The pages are static HTML, so the chrome is copied in; this script is its single
// source. Edit MASTHEAD / COLOPHON here, then run `npm run berdia-chrome`.
// `--check` exits 1 if any page has drifted (enforced by src/app/berdia-chrome.test.ts).
// `--root <dir>` stamps another tree: the family-only pages (plan, trust, ops) live in the
// private berdia-trust source, never in this public repo — see src/proxy.ts.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = fileURLToPath(new URL("../public/berdia/", import.meta.url));

export const MASTHEAD = `<a class="skip" href="#main">Skip to content</a>
<header class="bm">
  <div class="bm-plate">
    <a class="bm-lockup" href="/berdia/portal/" aria-label="Berdia family trust — Home"><span class="bm-mark" aria-hidden="true">B</span><span class="bm-word" aria-hidden="true">BERDIA</span></a>
    <span class="bm-sub">Family Trust</span>
    <p class="bm-meta"><span>Private family record</span></p>
  </div>
  <nav class="bm-nav" aria-label="Berdia">
    <a href="/berdia/portal/">Home</a>
    <a href="/berdia/intake.html">Tasks</a>
    <a href="/berdia/portal/trust.html">Trust</a>
    <a href="/berdia/plan/index.html">Plan</a>
    <a href="/berdia/portal/documents.html">Documents</a>
  </nav>
</header>
<script src="/berdia/nav.js" defer></script>`;

export const COLOPHON = `<footer class="colophon"><div><span><b>BERDIA</b>&ensp;Family trust · Instance 01</span><span>Private family records. Please don’t forward your link.</span></div></footer>`;

const block = (name, body) => `<!-- berdia:${name} -->\n${body}\n<!-- /berdia:${name} -->`;
const region = (name) => new RegExp(`<!-- berdia:${name} -->[\\s\\S]*?<!-- /berdia:${name} -->`);

export function pages(dir = ROOT) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? pages(p) : p.endsWith(".html") ? [p] : [];
  });
}

export function stamp(html) {
  let out = html;
  for (const [name, body] of [["masthead", MASTHEAD], ["colophon", COLOPHON]]) {
    if (!region(name).test(out)) throw new Error(`missing <!-- berdia:${name} --> markers`);
    out = out.replace(region(name), block(name, body));
  }
  return out;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes("--check");
  const at = process.argv.indexOf("--root");
  const root = at > -1 ? process.argv[at + 1] : ROOT;
  let drift = 0;
  for (const p of pages(root)) {
    const html = readFileSync(p, "utf8");
    if (/http-equiv="refresh"/.test(html)) continue; // redirect stubs carry no chrome
    let next;
    try { next = stamp(html); } catch (e) { drift++; console.error(`${relative(root, p)}: ${e.message}`); continue; }
    if (next === html) continue;
    drift++;
    if (check) console.error(`drift: ${relative(root, p)}`);
    else writeFileSync(p, next);
  }
  if (check && drift) process.exit(1);
  console.log(check ? "berdia chrome: in sync" : `berdia chrome: stamped ${drift} page(s)`);
}
