// Regenerate the FVA-300 identity-reference deck from the LOCKED identity.
//
//   node scripts/build-deck.mjs
//
// This deck SHOWCASES the identity, so fidelity is the point. Each of the eight
// slides is built as a 1920×1080 SVG from the font-independent Coherence Mark +
// Register wordmark vectors and the locked Reading Room palette (reading-room.css
// §4), with the type trio embedded from @fontsource so the render is brand-exact
// on any machine. Slides are rendered pixel-exact to PNG via headless Chrome, then
// assembled into a .pptx (one full-bleed image per slide + speaker notes) with
// pptxgenjs. Set CHROME=/path/to/chrome to override detection.
//
// Registers alternate per FVA-300 ("Quiet Paper frames alternate with Field
// thresholds"): 1 Field, 2 Paper, 3 Field, 4 Paper, 5 Field, 6 Paper, 7 Field,
// 8 Field (dark bookends open and close the argument).

import { readFileSync, writeFileSync, mkdtempSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const PROTO = join(HERE, "..");
const REPO = join(PROTO, "..", "..", "..");
const OUT_PPTX = join(REPO, "visual-system", "applications", "presentations", "facework-identity-reference.pptx");
const FONTS = join(PROTO, "node_modules");
const require = createRequire(import.meta.url);

const b64 = (p) => readFileSync(p).toString("base64");
const literata = b64(join(FONTS, "@fontsource-variable/literata/files/literata-latin-wght-normal.woff2"));
const spline = b64(join(FONTS, "@fontsource-variable/spline-sans-mono/files/spline-sans-mono-latin-wght-normal.woff2"));

// Locked identity (reading-room.css §4) → sRGB for a standalone export.
const RECORD = { bg: "#F5F3ED", ink: "#221C15", meta: "#7A736A", rule: "#CBC5B9", body: "#3B342B", verd: "#2F8A80" };
const FIELD  = { bg: "#191712", ink: "#ECE9E1", meta: "#A49D90", rule: "#3A362F", body: "#CFC9BE", verd: "#5FB5AA" };

// ---- Coherence Mark: locked 230×176 open-center geometry (one wing + mirror) ----
const wing = [
  "M8 16C46 21 80 31 106 46V57C78 44 44 35 9 31Z",
  "M16 47C50 53 82 62 106 76V87C80 74 50 65 21 62Z",
  "M28 79C58 85 84 94 106 106V117C82 104 58 96 36 94Z",
  "M18 150C58 138 92 120 104 100V112C90 122 56 150 16 160Z",
].map((d) => `<path d="${d}"/>`).join("");
// mark glyph at a top-left + pixel height, in color `fill`. Width = h * 230/176.
const markW = (h) => h * (230 / 176);
const mark = (x, y, h, fill) => {
  const s = h / 176;
  return `<g transform="translate(${x} ${y}) scale(${s.toFixed(4)})"><g fill="${fill}"><g>${wing}</g><g transform="translate(230 0) scale(-1 1)">${wing}</g></g></g>`;
};

// ---- Register wordmark: locked stroke logotype (viewBox 0 0 560 80) ----
const WORDMARK_PATHS = `<path d="M8 70V10H50M8 39H43"/><path d="M67 70L90 10L113 70M76 47H104"/>
<path d="M183 22C176 13 168 10 157 10C140 10 131 21 131 40C131 59 140 70 157 70C168 70 176 67 183 58"/>
<path d="M207 10V70M207 10H251M207 39H245M207 70H251"/><path d="M273 10L284 70L305 38L326 70L337 10"/>
<path d="M382 10C365 10 356 21 356 40C356 59 365 70 382 70C399 70 408 59 408 40C408 21 399 10 382 10Z"/>
<path d="M433 70V10H458C473 10 481 18 481 30C481 42 473 49 458 49H433M458 49L484 70"/>
<path d="M509 10V70M551 10L509 48M526 33L554 70"/>`;
// wordmark at top-left, sized to pixel width `w`, stroked in `stroke`.
const wordmark = (x, y, w, stroke) => {
  const s = w / 560;
  return `<g transform="translate(${x} ${y}) scale(${s.toFixed(4)})"><g fill="none" stroke="${stroke}" stroke-width="8" stroke-linecap="square" stroke-linejoin="miter">${WORDMARK_PATHS}</g></g>`;
};

// ---- canonical diagram glyphs (FVI-300 symbol library, 24×24), scaled ----
// each returns a group centered on (cx,cy) at pixel size `px`.
const glyph = (kind, cx, cy, px, stroke, accent) => {
  const s = px / 24;
  const sw = (1.5 / s).toFixed(3); // keep 1.5u stroke after scaling
  const inner = {
    observation: `<circle cx="12" cy="12" r="7" fill="none" stroke="${stroke}" stroke-width="${sw}"/><circle cx="12" cy="12" r="2.25" fill="${stroke}"/>`,
    artifact: `<path d="M4 4H20V20H4ZM8 8H16" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="square"/>`,
    connection: `<path d="M5 12H19" fill="none" stroke="${stroke}" stroke-width="${sw}"/><circle cx="4" cy="12" r="2" fill="${stroke}"/><circle cx="20" cy="12" r="2" fill="${stroke}"/>`,
    dependency: `<path d="M5 12H19M15 8L19 12L15 16" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="square" stroke-linejoin="miter"/><circle cx="4" cy="12" r="2" fill="${stroke}"/>`,
  }[kind];
  return `<g transform="translate(${cx - px / 2} ${cy - px / 2}) scale(${s.toFixed(4)})">${inner}</g>`;
};

// ---- font + helper styles ----
const fontStyle = `<style>
@font-face{font-family:'Literata';font-weight:200 900;src:url(data:font/woff2;base64,${literata}) format('woff2');}
@font-face{font-family:'Spline Sans Mono';font-weight:300 700;src:url(data:font/woff2;base64,${spline}) format('woff2');}
.serif{font-family:'Literata',Georgia,serif;}.mono{font-family:'Spline Sans Mono',ui-monospace,monospace;}
text{ -webkit-font-smoothing:antialiased; }
</style>`;

const W = 1920, H = 1080, MX = 120, RX = 1800;

// shared frame: bg, top/bottom rules, eyebrow (small mark + section tag + optional
// right tag), footer (FVA-300 / IDENTITY REFERENCE + zero-padded page). `inner` is
// the slide-specific body SVG.
function frame({ reg, page, section, right = null, inner }) {
  const c = reg === "field" ? FIELD : RECORD;
  const pageStr = String(page).padStart(2, "0");
  const rightTag = right
    ? `<text x="${RX}" y="98" text-anchor="end" class="mono" font-size="20" letter-spacing="2.5" fill="${c.verd}">${right}</text>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
${fontStyle}
<rect width="${W}" height="${H}" fill="${c.bg}"/>
${mark(MX, 66, 30, c.ink)}
<text x="${MX + markW(30) + 22}" y="98" class="mono" font-size="22" letter-spacing="2.5" fill="${c.meta}">${section}</text>
${rightTag}
<line x1="${MX}" y1="126" x2="${RX}" y2="126" stroke="${c.rule}" stroke-width="1.5"/>
<line x1="${MX}" y1="962" x2="${RX}" y2="962" stroke="${c.rule}" stroke-width="1.5"/>
<text x="${MX}" y="1010" class="mono" font-size="19" letter-spacing="2" fill="${c.meta}">FVA-300 / IDENTITY REFERENCE</text>
<text x="${RX}" y="1010" text-anchor="end" class="mono" font-size="19" letter-spacing="2" fill="${c.meta}">${pageStr}</text>
${inner(c)}
</svg>`;
}

// tspan helper for multi-line serif blocks
const lines = (x, arr, dy) => arr.map((t, i) => `<tspan x="${x}" ${i ? `dy="${dy}"` : ""}>${t}</tspan>`).join("");

// ============================ THE EIGHT SLIDES ============================

const slides = [
  // 1 — TITLE (Field)
  {
    reg: "field", page: 1, section: "FACEWORK / CANONICAL IDENTITY REFERENCE",
    notes: "Source: FVA-000 identity program; FVI-001 Coherence Mark; FVI-100 Register. Spoken bridge: \"This is not a brand guide. It is an open ledger — every identity decision is recorded so a discipline can be seen, questioned, and carried forward. The identity program has open gates; nothing here claims to be finished.\"",
    inner: (c) => `
${mark(MX, 286, 132, c.ink)}
${wordmark(MX + markW(132) + 60, 328, 430, c.ink)}
<text x="${MX}" y="672" class="serif" font-size="112" font-weight="560" letter-spacing="-2" fill="${c.ink}">Identity as protocol</text>
<text x="${MX}" y="762" class="serif" font-size="34" fill="${c.body}">An open ledger of the decisions that make a discipline visible.</text>`,
  },

  // 2 — 01 / THE QUESTION (Paper)
  {
    reg: "record", page: 2, section: "01 / THE QUESTION",
    notes: "Source: FVA-000 program premise; Constitution Art. I (coherence over decoration). Spoken bridge: \"Every mark, every letterform, every interval had to answer one question before it earned its place.\"",
    inner: (c) => `
<text x="${MX}" y="392" class="serif" font-size="92" font-weight="540" letter-spacing="-1.5" fill="${c.ink}">${lines(MX, ["What would identity", "look like if nothing", "were arbitrary?"], 108)}</text>`,
  },

  // 3 — 02 / THE COHERENCE MARK (Field) — renamed from "AXIS EXCHANGE"
  {
    reg: "field", page: 3, section: "02 / THE COHERENCE MARK", right: "FVI-001 / CANONICAL MARK",
    notes: "Source: FVI-001 Coherence Mark derivation. Renamed from the working title \"Axis Exchange\" to \"The Coherence Mark\". Spoken bridge: \"Two wings meet and turn without touching. The center is never closed — the interval is the point.\"",
    inner: (c) => `
${mark(1236, 350, 372, c.ink)}
<text x="${MX}" y="404" class="serif" font-size="62" font-weight="540" letter-spacing="-1" fill="${c.ink}">${lines(MX, ["The mark holds", "counterparts without", "erasing the interval."], 76)}</text>
<line x1="${MX}" y1="676" x2="1060" y2="676" stroke="${c.verd}" stroke-width="4"/>
<text x="${MX}" y="742" class="serif" font-size="31" fill="${c.body}">${lines(MX, ["Paired forces. Controlled tension.", "A visible change of direction.", "The center remains open."], 46)}</text>`,
  },

  // 4 — 03 / REGISTER (Paper)
  {
    reg: "record", page: 4, section: "03 / REGISTER", right: "FVI-100 / LOGOTYPE",
    notes: "Source: FVI-100 Facework logotype. Spoken bridge: \"The wordmark turns at the same point the name turns — where an idea becomes a practice. One name, three registers.\"",
    inner: (c) => `
${wordmark(MX, 292, 760, c.ink)}
<line x1="${MX}" y1="470" x2="${RX}" y2="470" stroke="${c.rule}" stroke-width="1.5"/>
<text x="${MX}" y="596" class="serif" font-size="58" font-weight="540" letter-spacing="-1" fill="${c.ink}">${lines(MX, ["The name changes direction", "where identity becomes practice."], 72)}</text>
<g transform="translate(0 754)">
  <text x="${MX}" y="0" class="serif" font-size="42" fill="${c.ink}">Facework</text>
  <text x="${MX}" y="44" class="mono" font-size="18" letter-spacing="1.5" fill="${c.meta}">PROPER NAME</text>
  <text x="720" y="0" class="serif" font-size="42" letter-spacing="1" fill="${c.ink}">FACEWORK</text>
  <text x="720" y="44" class="mono" font-size="18" letter-spacing="1.5" fill="${c.meta}">LOGOTYPE</text>
  <text x="1320" y="0" class="serif" font-size="42" fill="${c.ink}">face.works</text>
  <text x="1320" y="44" class="mono" font-size="18" letter-spacing="1.5" fill="${c.meta}">PUBLIC INTERFACE</text>
</g>`,
  },

  // 5 — 04 / SPATIAL PROTOCOL (Field)
  {
    reg: "field", page: 5, section: "04 / SPATIAL PROTOCOL", right: "FVI-200 / SIGNATURE",
    notes: "Source: FVI-200 lockups & spatial protocol. Spoken bridge: \"One interval — the open center — sets the clear space and governs every lockup. Protect the interval and the signature holds at any size.\"",
    inner: (c) => {
      const mh = 250, mx0 = (W - markW(mh)) / 2, my0 = 508;
      const mw = markW(mh);
      const pad = 80;
      const cx = mx0 + mw / 2, cy = my0 + mh / 2;
      return `
<text x="${MX}" y="300" class="serif" font-size="72" font-weight="540" letter-spacing="-1" fill="${c.ink}">${lines(MX, ["One open interval", "governs the signature."], 88)}</text>
<rect x="${mx0 - pad}" y="${my0 - pad}" width="${mw + pad * 2}" height="${mh + pad * 2}" fill="none" stroke="${c.rule}" stroke-width="2" stroke-dasharray="8 10"/>
${mark(mx0, my0, mh, c.ink)}
<g stroke="${c.verd}" stroke-width="3"><line x1="${cx - 15}" y1="${cy - 15}" x2="${cx + 15}" y2="${cy + 15}"/><line x1="${cx - 15}" y1="${cy + 15}" x2="${cx + 15}" y2="${cy - 15}"/></g>
<text x="${cx}" y="${my0 + mh + pad + 34}" text-anchor="middle" class="mono" font-size="19" letter-spacing="2" fill="${c.verd}">OPEN INTERVAL</text>
<text x="${mx0 - pad}" y="${my0 - pad - 16}" class="mono" font-size="18" letter-spacing="2" fill="${c.meta}">CLEAR SPACE — MINIMUM</text>`;
    },
  },

  // 6 — 05 / DIAGRAM GRAMMAR (Paper)
  {
    reg: "record", page: 6, section: "05 / DIAGRAM GRAMMAR", right: "FVI-300 / SYMBOLS",
    notes: "Source: FVI-300 symbol & diagram grammar (canonical symbol library). Spoken bridge: \"The system separates kind from meaning. The glyph tells you what type of thing this is; the label tells you which one. Shape is never decorative.\"",
    inner: (c) => {
      const glyphs = [
        ["observation", "OBSERVATION"],
        ["artifact", "ARTIFACT"],
        ["connection", "CONNECTION"],
        ["dependency", "DEPENDENCY"],
      ];
      const xs = [372, 756, 1140, 1524];
      const gy = 640;
      const row = glyphs.map(([k, label], i) =>
        `${glyph(k, xs[i], gy, 84, c.ink)}<text x="${xs[i]}" y="${gy + 92}" text-anchor="middle" class="mono" font-size="20" letter-spacing="1.5" fill="${c.meta}">${label}</text>`
      ).join("\n");
      return `
<text x="${MX}" y="332" class="serif" font-size="72" font-weight="540" letter-spacing="-1" fill="${c.ink}">${lines(MX, ["Symbols identify kind.", "Labels identify meaning."], 88)}</text>
${row}`;
    },
  },

  // 7 — 06 / EXCHANGE RESOLVE (Field)
  {
    reg: "field", page: 7, section: "06 / EXCHANGE RESOLVE", right: "FVI-400 / MOTION",
    notes: "Source: FVI-400 Exchange Resolve motion signature. Spoken bridge: \"The one sanctioned motion is a controlled deceleration that resolves to the open-center resting mark — and reduced-motion users see that resolved state directly.\"",
    inner: (c) => {
      const mh = 300, mx0 = (W - markW(mh)) / 2, my0 = 388;
      const cx = mx0 + markW(mh) / 2;
      return `
<text x="${MX}" y="300" class="serif" font-size="72" font-weight="540" letter-spacing="-1" fill="${c.ink}">Motion reveals relationship through time.</text>
${mark(mx0, my0, mh, c.ink)}
<path d="M ${mx0 - 150} ${my0 + mh} C ${mx0 - 40} ${my0 + mh} ${mx0 - 20} ${my0 + 20} ${mx0} ${my0}" fill="none" stroke="${c.verd}" stroke-width="3"/>
<text x="${cx}" y="900" text-anchor="middle" class="mono" font-size="20" letter-spacing="1.5" fill="${c.meta}">520 MS &#183; CONTROLLED DECELERATION &#183; RESOLVED OPEN-CENTER STATE FOR REDUCED MOTION</text>`;
    },
  },

  // 8 — 07 / INHERITANCE (Field, closing)
  {
    reg: "field", page: 8, section: "07 / INHERITANCE",
    notes: "Source: FVA-000 program close; Constitution (derivability standard). Spoken bridge: \"The test of this identity is not whether it looks finished, but whether someone else can reconstruct every decision from the record. Nothing is designed until it can be derived.\"",
    inner: (c) => `
<text x="${MX}" y="366" class="serif" font-size="78" font-weight="540" letter-spacing="-1.5" fill="${c.ink}">${lines(MX, ["The identity is complete", "when someone else can", "carry it forward."], 92)}</text>
<line x1="${MX}" y1="700" x2="760" y2="700" stroke="${c.verd}" stroke-width="4"/>
<text x="${MX}" y="792" class="serif" font-style="italic" font-size="46" fill="${c.verd}">Nothing is designed until it can be derived.</text>
${mark(W / 2 - markW(40) / 2, 862, 40, c.ink)}`,
  },
];

// ---------------------------- render + assemble ----------------------------

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  for (const p of [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome", "/usr/bin/chromium",
  ]) { try { readFileSync(p); return p; } catch {} }
  throw new Error("Headless Chrome not found — set CHROME=/path/to/chrome");
}
const chrome = findChrome();

const outDir = process.env.DECK_PNG_DIR || mkdtempSync(join(tmpdir(), "fw-deck-"));
mkdirSync(outDir, { recursive: true });
const htmlTmp = mkdtempSync(join(tmpdir(), "fw-deck-html-"));

const pngPaths = [];
for (const s of slides) {
  const svg = frame(s);
  const html = join(htmlTmp, `slide-${s.page}.html`);
  const png = join(outDir, `slide-${String(s.page).padStart(2, "0")}.png`);
  writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:${W}px;height:${H}px;overflow:hidden}svg{display:block}</style>${svg}`);
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    `--window-size=${W},${H}`, "--default-background-color=00000000",
    `--screenshot=${png}`, `file://${html}`,
  ], { stdio: "ignore" });
  pngPaths.push(png);
  console.log(`slide ${s.page} → ${png}`);
}

// assemble the .pptx — one full-bleed image per slide + speaker notes
const PptxGenJS = require("pptxgenjs");
const pres = new PptxGenJS();
pres.defineLayout({ name: "FW", width: 13.333, height: 7.5 });
pres.layout = "FW";
pres.author = "Facework";
pres.title = "Facework — Identity Reference (FVA-300)";
slides.forEach((s, i) => {
  const slide = pres.addSlide();
  slide.addImage({ path: pngPaths[i], x: 0, y: 0, w: "100%", h: "100%" });
  slide.addNotes(s.notes);
});
await pres.writeFile({ fileName: OUT_PPTX });
console.log(`\nWrote ${OUT_PPTX} (${slides.length} slides)`);
console.log(`PNG dir: ${outDir}`);
