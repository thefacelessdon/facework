// Regenerate the FVA-200 publication reference — the Facework field note — as a
// native, editable .docx on the locked identity.
//
//   node scripts/build-fieldnote.mjs
//
// A durable knowledge object (FVA-200): Literata reading voice, Spline Sans Mono
// for metadata/labels/tables, the open-center Coherence Mark + Register wordmark
// in the header, verdigris for emphasis only. Real headings, page numbers,
// selectable text, a repeated table header, image alt text — usable in
// monochrome at office-print quality. Output overwrites the stale reference.

import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import {
  Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType,
  BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType, Header, Footer,
  PageNumber, LevelFormat, PositionalTab, PositionalTabAlignment, PositionalTabLeader,
} from "docx";

const HERE = dirname(fileURLToPath(import.meta.url));
const PROTO = join(HERE, "..");
const REPO = join(PROTO, "..", "..", "..");
const OUT = join(REPO, "visual-system", "applications", "publications", "facework-field-note-reference.docx");

// ---- locked palette (sRGB, no #) ----
const INK = "221C15", META = "7A736A", VERD = "2F8A80", RULE = "CBC5B9", BODY = "3B342B";
const SERIF = "Literata", MONO = "Spline Sans Mono";

// ---- render the mark + wordmark to ink-on-transparent PNG via headless Chrome ----
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const tmp = mkdtempSync(join(tmpdir(), "fw-fn-"));
const wing = [
  "M8 16C46 21 80 31 106 46V57C78 44 44 35 9 31Z",
  "M16 47C50 53 82 62 106 76V87C80 74 50 65 21 62Z",
  "M28 79C58 85 84 94 106 106V117C82 104 58 96 36 94Z",
  "M18 150C58 138 92 120 104 100V112C90 122 56 150 16 160Z",
].map((d) => `<path d="${d}"/>`).join("");
function renderPng(name, svg, w, h) {
  const html = join(tmp, `${name}.html`);
  const png = join(tmp, `${name}.png`);
  writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:${w}px;height:${h}px}svg{display:block}</style>${svg}`);
  execFileSync(chrome, ["--headless=new","--disable-gpu","--hide-scrollbars","--force-device-scale-factor=1",`--window-size=${w},${h}`,"--default-background-color=00000000",`--screenshot=${png}`,`file://${html}`], { stdio: "ignore" });
  return readFileSync(png);
}
const markPng = renderPng("mark", `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="704" viewBox="0 0 230 176"><g fill="#${INK}"><g>${wing}</g><g transform="translate(230 0) scale(-1 1)">${wing}</g></g></svg>`, 920, 704);
const wordmarkPng = renderPng("wordmark", `<svg xmlns="http://www.w3.org/2000/svg" width="2240" height="320" viewBox="0 0 560 80"><g fill="none" stroke="#${INK}" stroke-width="8" stroke-linecap="square" stroke-linejoin="miter"><path d="M8 70V10H50M8 39H43"/><path d="M67 70L90 10L113 70M76 47H104"/><path d="M183 22C176 13 168 10 157 10C140 10 131 21 131 40C131 59 140 70 157 70C168 70 176 67 183 58"/><path d="M207 10V70M207 10H251M207 39H245M207 70H251"/><path d="M273 10L284 70L305 38L326 70L337 10"/><path d="M382 10C365 10 356 21 356 40C356 59 365 70 382 70C399 70 408 59 408 40C408 21 399 10 382 10Z"/><path d="M433 70V10H458C473 10 481 18 481 30C481 42 473 49 458 49H433M458 49L484 70"/><path d="M509 10V70M551 10L509 48M526 33L554 70"/></g></svg>`, 2240, 320);

// ---- content helpers ----
const mono = (text, opts = {}) => new TextRun({ text, font: MONO, size: opts.size ?? 16, color: opts.color ?? META, characterSpacing: opts.cs ?? 20, bold: opts.bold, allCaps: opts.caps });
const serif = (text, opts = {}) => new TextRun({ text, font: SERIF, size: opts.size ?? 21, color: opts.color ?? BODY, italics: opts.italics, bold: opts.bold });

const sectionMark = (label) => new Paragraph({ spacing: { before: 520, after: 120 }, children: [mono(label, { color: VERD, caps: true, cs: 30 })] });
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, outlineLevel: 0, spacing: { after: 180 }, children: [new TextRun({ text, font: SERIF, size: 40, color: INK, bold: false })] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, outlineLevel: 1, spacing: { before: 320, after: 120 }, children: [new TextRun({ text, font: SERIF, size: 26, color: INK, bold: true })] });
const body = (text) => new Paragraph({ spacing: { after: 160, line: 300 }, children: [serif(text)] });

// callout: a verdigris left-border block with a mono label + serif line
const callout = (label, text) => new Paragraph({
  spacing: { before: 200, after: 200 }, indent: { left: 360 },
  border: { left: { style: BorderStyle.SINGLE, size: 18, color: VERD, space: 240 } },
  children: [ mono(label + "  ", { color: VERD, bold: true, caps: true }), new TextRun({ text, font: SERIF, size: 21, color: INK, break: 1 }) ],
});

const derivedItem = (text) => new Paragraph({ numbering: { reference: "derived", level: 0 }, spacing: { after: 60 }, children: [mono(text, { color: BODY, cs: 10 })] });

// expression table (repeated header row)
function expressionTable() {
  const W = 9360, cols = [1800, 1800, 5760];
  const cell = (runs, o = {}) => new TableCell({ width: { size: o.w, type: WidthType.DXA }, shading: o.shad ? { type: ShadingType.CLEAR, fill: o.shad, color: "auto" } : undefined, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: runs })] });
  const head = (t, w) => cell([mono(t, { color: INK, bold: true, caps: true })], { w, shad: "EFEDE6" });
  const td = (t, w, m) => cell([m ? mono(t, { color: BODY, cs: 6 }) : serif(t, { size: 19 })], { w });
  const rows = [
    new TableRow({ tableHeader: true, children: [head("Expression", cols[0]), head("Minimum", cols[1]), head("Use", cols[2])] }),
    new TableRow({ children: [td("Primary", cols[0]), td("24 px", cols[1], true), td("First encounters and wide fields", cols[2])] }),
    new TableRow({ children: [td("Stacked", cols[0]), td("48 px", cols[1], true), td("Square, portrait, or ceremonial fields", cols[2])] }),
    new TableRow({ children: [td("Word", cols[0]), td("18 px", cols[1], true), td("Mark already present or narrow horizontal field", cols[2])] }),
    new TableRow({ children: [td("Mark", cols[0]), td("32 px core", cols[1], true), td("Identity established through adjacency or convention", cols[2])] }),
  ];
  return new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows,
    borders: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE }, insideVertical: { style: BorderStyle.NONE } } });
}

const ruleP = () => new Paragraph({ spacing: { before: 120, after: 240 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 4 } }, children: [] });

// ---- document ----
const children = [
  // masthead
  new Paragraph({ spacing: { after: 120 }, children: [new ImageRun({ type: "png", data: wordmarkPng, transformation: { width: 300, height: 43 }, altText: { title: "Facework", desc: "The custom Register FACEWORK logotype", name: "wordmark" } })] }),
  new Paragraph({ spacing: { after: 240 }, children: [mono("FIELD NOTE 014  /  CANONICAL REFERENCE", { color: VERD, caps: true, cs: 24 })] }),
  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "Identity as protocol", font: SERIF, size: 52, color: INK })] }),
  new Paragraph({ spacing: { after: 240 }, children: [serif("An open ledger of the decisions that make Facework recognizable, usable, and transmissible.", { size: 24, color: BODY })] }),
  new Paragraph({ spacing: { after: 60 }, children: [mono("STATUS   CANONICAL      VERSION   0.1      DATE   2026-08-10", { color: META, cs: 16 })] }),
  ruleP(),
  // mark + caption
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 80 }, children: [new ImageRun({ type: "png", data: markPng, transformation: { width: 150, height: 115 }, altText: { title: "The Coherence Mark", desc: "Four paired structural strands sweep toward an open center; the lowest strand crosses under tension. Bilateral, open-centered.", name: "coherence-mark" } })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [mono("THE COHERENCE MARK — PAIRED FORCES HELD AROUND AN OPEN CENTER", { color: META, cs: 16 })] }),

  // 01
  sectionMark("01 / FIELD NOTE 014"),
  h1("The identity had to be discovered."),
  body("Facework did not need a symbol applied to an idea. It needed a visible behavior that could be traced to the discipline itself."),
  body("The program began by recovering the historic butterfly mark as evidence rather than treating it as an untouchable answer. Its bilateral structure, layered forces, and open center were isolated, tested, and rebuilt as the Coherence Mark."),
  body("That distinction matters. A logo can be selected because it looks appropriate. A protocol identity must show why its form belongs, how it behaves, and what future practitioners are allowed to change."),
  callout("Governing claim", "Nothing is designed until it can be derived."),
  h2("What the mark preserves"),
  body("The Coherence Mark preserves paired forces, controlled tension, open intervals, and a visible change of direction. It removes literal insect behavior and the expectation that coherence means perfect fusion."),

  // 02
  sectionMark("02 / FIELD NOTE 014"),
  h1("The name needed its own behavior."),
  body("A distinctive mark cannot compensate for an anonymous or rented wordmark. Register was constructed to make the name an owned artifact."),
  body("Register is a custom uppercase construction with no runtime font dependency. The central W changes direction between FACE and WORK, linking identity and practice without inserting the mark into the letters."),
  callout("Name architecture", "Facework is the proper name. FACEWORK is the logotype. face.works is the public domain and interface."),
  h2("Supporting type remains separate"),
  body("Spline Sans Mono carries identifiers, navigation, captions, and technical structure. Literata carries sustained reading. Register appears only as identity. This separation prevents the entire system from becoming logo-shaped."),

  // 03
  sectionMark("03 / FIELD NOTE 014"),
  h1("A signature is a responsive relationship."),
  body("Primary, stacked, word-only, and mark-only expressions are selected by context and legibility — not preference."),
  expressionTable(),
  h2("One interval governs the field"),
  body("The central interval of the Coherence Mark is x. Clear space, mark-to-word separation, descriptor distance, and co-branding space all derive from x. Translation can change configuration before it loses meaning; it cannot simply shrink a preferred lockup below its minimum."),

  // 04
  sectionMark("04 / FIELD NOTE 014"),
  h1("The grammar makes relationships legible."),
  body("Seven diagram symbols distinguish observation, artifact, boundary, connection, dependency, exchange, and transformation."),
  body("The symbols are deliberately small in number. They identify kind; adjacent labels identify meaning. Lines declare whether a relationship is asserted, conditional, contextual, directional, reciprocal, or transformative."),
  callout("Accessibility", "Every diagram requires a subject title, a consequential short description, a structured text alternative, and a non-color signal for every state."),
  h2("Identity stays outside the model"),
  body("The Coherence Mark may identify the publisher, but it never becomes a generic node or a shorthand for “coherence achieved.” The grammar shares behaviors with the mark without borrowing its silhouette."),

  // 05
  sectionMark("05 / FIELD NOTE 014"),
  h1("Motion reveals relation through time."),
  body("Exchange Resolve shows two legible counterparts approaching a shared axis and settling without merging."),
  body("The four phases are Available, Approach, Exchange, and Resolve. The sequence lasts 520 milliseconds, uses controlled deceleration, and changes only transform and opacity. Register enters as one name, never letter by letter."),
  callout("Reduced motion", "Render the resolved geometry immediately. Preserve state and accessible naming. Remove travel, pulse, drawing, and ambient loops."),
  h2("The final test"),
  body("The identity succeeds when another person can recognize it, use it, inspect its derivation, challenge its rules, and carry it into a new medium without depending on the original creator."),

  // 06
  sectionMark("06 / FIELD NOTE 014"),
  h1("Lineage is part of the artifact."),
  body("This field note is itself a reference implementation of FVA-200. Its page behavior is derived from the same system it describes."),
  h2("Derived from"),
  derivedItem("FVS-400 Composition"),
  derivedItem("FVS-500 Typography"),
  derivedItem("FVS-900 Applications"),
  derivedItem("FVI-001 Coherence Mark"),
  derivedItem("FVI-100 Facework Logotype"),
  derivedItem("FVI-200 Spatial Protocol"),
  derivedItem("FVI-300 Diagram Grammar"),
  derivedItem("FVI-400 Motion Signature"),
  callout("Preservation note", "The source specifications remain authoritative. This publication demonstrates one conforming translation and does not replace them."),
  ruleP(),
  new Paragraph({ spacing: { before: 120 }, children: [serif("Nothing is designed until it can be derived.", { italics: true, color: INK, size: 22 })] }),
];

const doc = new Document({
  creator: "Facework", title: "Facework Field Note 014 — Identity as protocol", description: "FVA-200 publication reference",
  styles: { default: { document: { run: { font: SERIF, size: 21, color: BODY } } } },
  numbering: { config: [{ reference: "derived", levels: [{ level: 0, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT, style: { run: { color: VERD }, paragraph: { indent: { left: 360, hanging: 200 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({ tabStops: [], spacing: { after: 0 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } }, children: [ mono("FACEWORK  /  FIELD NOTE 014", { color: META, cs: 16 }), new TextRun({ children: [new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: "margin", leader: PositionalTabLeader.NONE })], font: MONO }), mono("FVA-200 / IDENTITY REFERENCE", { color: META, cs: 16 }) ] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } }, children: [ mono("face.works", { color: META, cs: 16 }), new TextRun({ children: [new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: "margin", leader: PositionalTabLeader.NONE }), new TextRun({ children: [PageNumber.CURRENT] })], font: MONO, size: 16, color: META }) ] })] }) },
    children,
  }],
});

const buf = await Packer.toBuffer(doc);
writeFileSync(OUT, buf);
console.log(`Wrote ${OUT} (${(buf.length / 1024).toFixed(0)} KB)`);
