// Regenerate the FVA-400 social content templates from the locked identity.
//
//   node scripts/build-social.mjs
//
// Writes three reference templates (font-named, for the spec) to
// visual-system/applications/social/ — statement 1:1, evidence 4:5,
// sequence 16:9 — and renders font-embedded preview PNGs to REVIEW_DIR so the
// brand type shows accurately without the fonts installed system-wide.
//
// Identity: locked Coherence Mark + Reading Room palette (reading-room.css §4).
// Accent rule — verdigris carries brand EMPHASIS (accent rules, current-step,
// eyebrow bullet); status colors carry genuine STATE only (the DEVELOPING chip
// → attention/amber). See FVS-600.

import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const PROTO = join(HERE, "..");
const REPO = join(PROTO, "..", "..", "..");
const SOCIAL = join(REPO, "visual-system", "applications", "social");
const REVIEW_DIR = process.env.REVIEW_DIR || tmpdir();
const FONTS = join(PROTO, "node_modules");
const b64 = (p) => readFileSync(p).toString("base64");
const literata = b64(join(FONTS, "@fontsource-variable/literata/files/literata-latin-wght-normal.woff2"));
const spline = b64(join(FONTS, "@fontsource-variable/spline-sans-mono/files/spline-sans-mono-latin-wght-normal.woff2"));

// Locked palette (reading-room.css §4) → sRGB.
const C = {
  paper:"#F5F3ED", ink:"#221C15", meta:"#7A736A", rule:"#CBC5B9", body:"#3B342B", verd:"#2F8A80",
  field:"#191712", ftext:"#ECE9E1", fmute:"#A49D90", fline:"#3A362F", fverd:"#5FB5AA",
  attention:"#B0812E", // status: developing / needs attention (AA text-tier on paper)
};

const wing = [
  "M8 16C46 21 80 31 106 46V57C78 44 44 35 9 31Z",
  "M16 47C50 53 82 62 106 76V87C80 74 50 65 21 62Z",
  "M28 79C58 85 84 94 106 106V117C82 104 58 96 36 94Z",
  "M18 150C58 138 92 120 104 100V112C90 122 56 150 16 160Z",
].map((d) => `<path d="${d}"/>`).join("");
// mark glyph at a given top-left + pixel height, in color `fill`
const mark = (x, y, h, fill) => {
  const s = h / 176;
  return `<g transform="translate(${x} ${y}) scale(${s.toFixed(4)})"><g fill="${fill}"><g>${wing}</g><g transform="translate(230 0) scale(-1 1)">${wing}</g></g></g>`;
};

const fontStyle = `<style>
@font-face{font-family:'Literata';font-weight:200 900;src:url(data:font/woff2;base64,${literata}) format('woff2');}
@font-face{font-family:'Spline Sans Mono';font-weight:300 700;src:url(data:font/woff2;base64,${spline}) format('woff2');}
.serif{font-family:'Literata',Georgia,serif;}.mono{font-family:'Spline Sans Mono',ui-monospace,monospace;}
</style>`;
// font-named (no embed) for the committed reference SVG
const fontNamed = `<style>.serif{font-family:'Literata Variable',Georgia,serif;}.mono{font-family:'Spline Sans Mono Variable',ui-monospace,monospace;}</style>`;

// ---- template bodies (identical geometry; {FONTS} slot swapped per output) ----

const statement = () => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" role="img" aria-labelledby="t d">
<title id="t">Facework statement social template</title><desc id="d">A square paper field presents one statement with source and status on a strict left datum.</desc>
{FONTS}
<rect width="1080" height="1080" fill="${C.paper}"/>
<path d="M72 72h936M72 1008h936" stroke="${C.ink}" stroke-width="2"/>
${mark(72, 92, 30, C.ink)}
<text x="122" y="114" class="mono" font-size="20" letter-spacing="2" fill="${C.meta}">FACEWORK / FIELD NOTE 027</text>
<rect x="946" y="94" width="14" height="14" fill="${C.attention}"/><text x="936" y="108" text-anchor="end" class="mono" font-size="17" fill="${C.attention}">DEVELOPING</text>
<text x="72" y="360" class="serif" font-size="70" font-weight="520" letter-spacing="-1" fill="${C.ink}"><tspan x="72" dy="0">A system becomes</tspan><tspan x="72" dy="86">trustworthy when its</tspan><tspan x="72" dy="86">decisions remain visible</tspan><tspan x="72" dy="86">after its author leaves.</tspan></text>
<line x1="72" y1="804" x2="1008" y2="804" stroke="${C.rule}" stroke-width="2"/>
<rect x="72" y="843" width="10" height="10" fill="${C.verd}"/><text x="94" y="853" class="mono" font-size="18" letter-spacing="1.5" fill="${C.meta}">OBSERVATION → MODEL</text>
<text x="72" y="968" class="serif" font-size="26" fill="${C.body}">Read the full record at face.works/notes/027</text>
<text x="1008" y="968" text-anchor="end" class="mono" font-size="18" fill="${C.meta}">01 / 01</text>
</svg>`;

const evidence = () => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350" role="img" aria-labelledby="t d">
<title id="t">Facework evidence social template</title><desc id="d">A portrait Field-register card keeps an observation, test, and limitation visibly connected.</desc>
{FONTS}
<rect width="1080" height="1350" fill="${C.field}"/>
${mark(72, 78, 28, C.ftext)}
<text x="120" y="98" class="mono" font-size="19" letter-spacing="2" fill="${C.fmute}">FACEWORK / EVIDENCE FIELD</text>
<text x="72" y="258" class="serif" font-size="64" font-weight="520" letter-spacing="-1" fill="${C.ftext}"><tspan x="72">What changes when</tspan><tspan x="72" dy="74">lineage is visible?</tspan></text>
<line x1="72" y1="420" x2="1008" y2="420" stroke="${C.fverd}" stroke-width="6"/>
<text x="72" y="486" class="mono" font-size="18" letter-spacing="1.5" fill="${C.fverd}">01 / OBSERVED</text><text x="72" y="540" class="serif" font-size="31" fill="${C.ftext}"><tspan x="72">Decisions disappear inside polished</tspan><tspan x="72" dy="42">deliverables.</tspan></text>
<line x1="72" y1="626" x2="1008" y2="626" stroke="${C.fline}" stroke-width="2"/>
<text x="72" y="692" class="mono" font-size="18" letter-spacing="1.5" fill="${C.fmute}">02 / TESTING</text><text x="72" y="746" class="serif" font-size="31" fill="${C.ftext}"><tspan x="72">Place status, source, and dependency</tspan><tspan x="72" dy="42">at the point of use.</tspan></text>
<line x1="72" y1="832" x2="1008" y2="832" stroke="${C.fline}" stroke-width="2"/>
<text x="72" y="898" class="mono" font-size="18" letter-spacing="1.5" fill="${C.fmute}">03 / LIMIT</text><text x="72" y="952" class="serif" font-size="31" fill="${C.ftext}"><tspan x="72">Transparency cannot replace judgment</tspan><tspan x="72" dy="42">or stewardship.</tspan></text>
<line x1="72" y1="1128" x2="1008" y2="1128" stroke="${C.fline}" stroke-width="2"/>
<text x="72" y="1190" class="mono" font-size="18" letter-spacing="1.5" fill="${C.fmute}">FN-027 / DEVELOPING / 06 AUG 2026</text><text x="72" y="1274" class="serif" font-size="25" fill="${C.ftext}">face.works/notes/027</text>
</svg>`;

const sequence = () => `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" role="img" aria-labelledby="t d">
<title id="t">Facework sequence social template</title><desc id="d">A landscape frame shows observation becoming a durable standard through a five-step knowledge path.</desc>
{FONTS}
<rect width="1920" height="1080" fill="${C.paper}"/>
${mark(96, 60, 30, C.ink)}
<text x="148" y="82" class="mono" font-size="22" letter-spacing="2" fill="${C.meta}">FACEWORK / KNOWLEDGE PATH / 03 OF 05</text>
<text x="96" y="300" class="serif" font-size="88" font-weight="520" letter-spacing="-1.5" fill="${C.ink}"><tspan x="96">Ideas should earn</tspan><tspan x="96" dy="96">permanence.</tspan></text>
<g transform="translate(96 640)"><line x1="0" y1="0" x2="1728" y2="0" stroke="${C.ink}" stroke-width="3"/>
<circle cx="0" cy="0" r="11" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
<circle cx="432" cy="0" r="11" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
<rect x="853" y="-11" width="22" height="22" fill="${C.verd}"/>
<circle cx="1296" cy="0" r="11" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
<circle cx="1728" cy="0" r="11" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
<g class="mono" font-size="19" letter-spacing="1" fill="${C.meta}"><text x="0" y="56">OBSERVATION</text><text x="432" y="56">FIELD NOTE</text><text x="864" y="56" text-anchor="middle" fill="${C.verd}">MODEL</text><text x="1296" y="56">FRAMEWORK</text><text x="1728" y="56" text-anchor="end">STANDARD</text></g></g>
<line x1="96" y1="928" x2="1824" y2="928" stroke="${C.rule}" stroke-width="2"/>
<text x="96" y="988" class="serif" font-size="27" fill="${C.body}">Each transition records what changed, why, and what remains.</text>
<text x="1824" y="988" text-anchor="end" class="mono" font-size="20" fill="${C.meta}">face.works</text>
</svg>`;

const templates = [
  { name: "statement-square", w: 1080, h: 1080, body: statement },
  { name: "evidence-portrait", w: 1080, h: 1350, body: evidence },
  { name: "sequence-landscape", w: 1920, h: 1080, body: sequence },
];

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  for (const c of [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome", "/usr/bin/chromium",
  ]) { try { readFileSync(c); return c; } catch {} }
  return null;
}
const chrome = findChrome();
const tmp = mkdtempSync(join(tmpdir(), "fw-social-"));

for (const t of templates) {
  const raw = t.body();
  // committed reference SVG — font-named
  writeFileSync(join(SOCIAL, `${t.name}.svg`), raw.replace("{FONTS}", fontNamed) + "\n");
  // preview PNG — font-embedded, exact size via Chrome
  if (chrome) {
    const embedded = raw.replace("{FONTS}", fontStyle);
    const html = join(tmp, `${t.name}.html`);
    const png = join(REVIEW_DIR, `social-${t.name}.png`);
    writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:${t.w}px;height:${t.h}px;overflow:hidden}svg{display:block}</style>${embedded}`);
    execFileSync(chrome, ["--headless=new","--disable-gpu","--hide-scrollbars","--force-device-scale-factor=1",`--window-size=${t.w},${t.h}`,"--default-background-color=00000000",`--screenshot=${png}`,`file://${html}`], { stdio: "ignore" });
    console.log(`${t.name} → reference SVG + preview ${png}`);
  } else {
    console.log(`${t.name} → reference SVG (no Chrome; skipped preview)`);
  }
}
