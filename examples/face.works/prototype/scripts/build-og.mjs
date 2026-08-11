// Regenerate the OpenGraph / share images from the locked identity.
//
//   node scripts/build-og.mjs
//
// Emits src/app/opengraph-image.png + twitter-image.png (Record register, the
// site default) and src/app/engage/{opengraph,twitter}-image.png (Field register,
// The Practice). Both are 1200×630, built from the font-independent Coherence
// Mark + Register wordmark vectors plus the locked type trio embedded from
// @fontsource (so the render is brand-accurate on any machine). Rendered pixel-
// exact via headless Chrome — set CHROME=/path/to/chrome to override detection.
//
// Colors are the locked Reading Room tokens (reading-room.css §4) resolved to
// sRGB for a standalone export. Keep them in sync if the palette changes.

import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const PROTO = join(HERE, "..");
const APP = join(PROTO, "src", "app");
const FONTS = join(PROTO, "node_modules");

const b64 = (p) => readFileSync(p).toString("base64");
const literata = b64(join(FONTS, "@fontsource-variable/literata/files/literata-latin-wght-normal.woff2"));
const spline = b64(join(FONTS, "@fontsource-variable/spline-sans-mono/files/spline-sans-mono-latin-wght-normal.woff2"));

// Locked identity (reading-room.css §4) → sRGB for standalone export.
const RECORD = { paper: "#F5F3ED", ink: "#221C15", meta: "#7A736A", rule: "#CBC5B9", verd: "#2F8A80" };
const FIELD  = { paper: "#191712", ink: "#ECE9E1", meta: "#A49D90", rule: "#3A362F", verd: "#5FB5AA" };

// Coherence Mark — locked 230×176 open-center geometry (one wing + mirror).
const wing = [
  "M8 16C46 21 80 31 106 46V57C78 44 44 35 9 31Z",
  "M16 47C50 53 82 62 106 76V87C80 74 50 65 21 62Z",
  "M28 79C58 85 84 94 106 106V117C82 104 58 96 36 94Z",
  "M18 150C58 138 92 120 104 100V112C90 122 56 150 16 160Z",
].map((d) => `<path d="${d}"/>`).join("");

function svgFor(reg) {
  const c = reg === "field" ? FIELD : RECORD;
  const mark = `<g fill="${c.ink}"><g>${wing}</g><g transform="translate(230 0) scale(-1 1)">${wing}</g></g>`;
  const wordmark = `<g fill="none" stroke="${c.ink}" stroke-width="8" stroke-linecap="square" stroke-linejoin="miter">
<path d="M8 70V10H50M8 39H43"/><path d="M67 70L90 10L113 70M76 47H104"/>
<path d="M183 22C176 13 168 10 157 10C140 10 131 21 131 40C131 59 140 70 157 70C168 70 176 67 183 58"/>
<path d="M207 10V70M207 10H251M207 39H245M207 70H251"/><path d="M273 10L284 70L305 38L326 70L337 10"/>
<path d="M382 10C365 10 356 21 356 40C356 59 365 70 382 70C399 70 408 59 408 40C408 21 399 10 382 10Z"/>
<path d="M433 70V10H458C473 10 481 18 481 30C481 42 473 49 458 49H433M458 49L484 70"/>
<path d="M509 10V70M551 10L509 48M526 33L554 70"/></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<title>Facework — a public record of coherence</title>
<desc>The Coherence Mark and Register wordmark with the practice line: it doesn&#8217;t decorate, it reads.</desc>
<style>
@font-face{font-family:'Literata';font-weight:200 900;src:url(data:font/woff2;base64,${literata}) format('woff2');}
@font-face{font-family:'Spline Sans Mono';font-weight:300 700;src:url(data:font/woff2;base64,${spline}) format('woff2');}
.serif{font-family:'Literata',Georgia,serif;}.mono{font-family:'Spline Sans Mono',ui-monospace,monospace;}
</style>
<rect width="1200" height="630" fill="${c.paper}"/>
<line x1="90" y1="96" x2="1110" y2="96" stroke="${c.rule}" stroke-width="1.5"/>
<line x1="90" y1="534" x2="1110" y2="534" stroke="${c.rule}" stroke-width="1.5"/>
<g transform="translate(90 52)"><g transform="scale(0.204)">${mark}</g></g>
<g transform="translate(150 55) scale(0.36)">${wordmark}</g>
<rect x="90" y="146" width="10" height="10" fill="${c.verd}"/>
<text x="112" y="156" class="mono" font-size="19" letter-spacing="2.5" fill="${c.meta}">A PUBLIC RECORD OF COHERENCE</text>
<text x="88" y="326" class="serif" font-size="72" font-weight="560" fill="${c.ink}">It doesn&#8217;t</text>
<text x="88" y="414" class="serif" font-size="72" font-weight="560" fill="${c.ink}">decorate. It reads.</text>
<text x="90" y="576" class="mono" font-size="20" letter-spacing="1.5" fill="${c.meta}">face.works</text>
<text x="1110" y="576" text-anchor="end" class="mono" font-size="18" letter-spacing="2.5" fill="${c.verd}">THE READING ROOM</text>
</svg>`;
}

const wrap = (svg) => `<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:1200px;height:630px;overflow:hidden}svg{display:block}</style>${svg}`;

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];
  for (const c of candidates) { try { readFileSync(c); return c; } catch {} }
  throw new Error("Headless Chrome not found — set CHROME=/path/to/chrome");
}

const chrome = findChrome();
const tmp = mkdtempSync(join(tmpdir(), "fw-og-"));

const targets = [
  { reg: "record", dir: APP },
  { reg: "field", dir: join(APP, "engage") },
];

for (const { reg, dir } of targets) {
  const html = join(tmp, `${reg}.html`);
  const out = join(dir, "opengraph-image.png");
  writeFileSync(html, wrap(svgFor(reg)));
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--window-size=1200,630", "--default-background-color=00000000",
    `--screenshot=${out}`, `file://${html}`,
  ], { stdio: "ignore" });
  // twitter-image is the same render
  writeFileSync(join(dir, "twitter-image.png"), readFileSync(out));
  console.log(`${reg} → ${out.replace(PROTO + "/", "")} (+ twitter-image.png)`);
}
console.log("Done. Alt text lives beside each image in *.alt.txt (edit by hand).");
