/**
 * Block + inline tokenizer for the protocol-doc markdown renderer.
 *
 * Pure string → token parsing, extracted from src/components/Markdown.tsx in
 * the same dependency-free style as markdown-table.ts so the parser is
 * testable in the node vitest environment. The Markdown component owns the
 * element tree; this module owns the reading of the source.
 *
 * Grown from the excerpt-era parser to carry the FULL canonical documents
 * (theories/, CONSTITUTION.md, PROTOCOL.md, …): h3/h4, horizontal rules,
 * hard-wrapped paragraphs and list continuation lines, ordered + nested
 * lists, multi-line blockquotes (parsed recursively, so quoted tables work),
 * links, and *emphasis*.
 */

import { parseTableRow } from "./markdown-table";

// --- Inline tokens ---

export type InlineToken =
  | { type: "text"; text: string }
  | { type: "code"; text: string }
  | { type: "strong"; children: InlineToken[] }
  | { type: "em"; children: InlineToken[] }
  | { type: "link"; children: InlineToken[]; href: string };

/**
 * Map a canon-relative markdown link target to a site route, or null when the
 * target has no surface on the site (rendered as plain text, not a dead link).
 * Absolute http(s) URLs pass through unchanged.
 */
export function resolveCanonHref(href: string): string | null {
  if (/^https?:\/\//.test(href)) return href;
  const base = href.split("#")[0].split("/").pop() ?? "";
  const routes: Record<string, string> = {
    "cultural-physics.md": "/protocol/cultural-physics",
    "coherence-design.md": "/protocol/coherence-design",
    "the-coherence-operating-system.md": "/protocol/coherence-operating-system",
    "PROTOCOL.md": "/protocol/protocol-v1",
    "CONSTITUTION.md": "/protocol/constitution",
  };
  return routes[base] ?? null;
}

/**
 * Single leftmost scan; among alternatives at the same position the earlier
 * alternative wins: code span → link → strong → em. Links and emphasis may
 * CONTAIN code spans (canon writes `**\`governance[]\`**` and
 * `[\`VERSION\`](VERSION)`), so spans admit backtick-paired content and
 * children are parsed recursively; a code span reached first stays atomic
 * (glob literals like `` `**` `` never open emphasis). A closing `***`
 * (bold ending in italic, CommonMark-style) keeps the inner `*` so the
 * recursive pass can balance it.
 */
const INLINE_RE =
  /(`[^`]+`)|(\[[^\]\n]+\]\([^)\s]+\))|(\*\*(?:[^*`]|`[^`]*`|\*(?!\*))+?\*{2,3})|(\*(?![\s*])(?:[^*`]|`[^`]*`)+?\*)/g;

export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_RE)) {
    const index = match.index ?? 0;
    if (index > last) {
      tokens.push({ type: "text", text: text.slice(last, index) });
    }
    const [full, code, link, strong, em] = match;
    if (code) {
      tokens.push({ type: "code", text: code.slice(1, -1) });
    } else if (link) {
      const m = link.match(/^\[([^\]\n]+)\]\(([^)\s]+)\)$/);
      if (m) {
        tokens.push({ type: "link", children: parseInline(m[1]), href: m[2] });
      } else {
        tokens.push({ type: "text", text: link });
      }
    } else if (strong) {
      tokens.push({ type: "strong", children: parseInline(strong.slice(2, -2)) });
    } else if (em) {
      tokens.push({ type: "em", children: parseInline(em.slice(1, -1)) });
    }
    last = index + full.length;
  }
  if (last < text.length) {
    tokens.push({ type: "text", text: text.slice(last) });
  }
  return tokens;
}

// --- Block tokens ---

export type Block =
  | { type: "code"; lang: string; code: string }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "quote"; children: Block[] }
  | { type: "term-item"; term: string; detail: string }
  | { type: "list-item"; marker: string; nested: boolean; text: string }
  | { type: "strongline"; text: string }
  | { type: "em-p"; text: string }
  | { type: "hr" }
  | { type: "gap" }
  | { type: "p"; text: string };

const NESTED_ITEM = /^\s{2,}-\s+(.*)$/;
const ORDERED_ITEM = /^(\d+)\.\s+(.*)$/;

/** A full-line bold statement (the excerpt-era "strongline"): the whole line
 * is one ** span. (The excerpt-era check `!line.includes("**", 2)` always
 * matched the closing marker, so the branch was dead; interior `**` is what
 * actually disqualifies.) */
function isStrongline(line: string): boolean {
  return (
    line.length > 4 &&
    line.startsWith("**") &&
    line.endsWith("**") &&
    !line.slice(2, -2).includes("**")
  );
}

/** A line that begins a new block (so it must not fold into the previous one). */
function startsBlock(line: string): boolean {
  return (
    line.startsWith("```") ||
    line.startsWith("|") ||
    line.startsWith("#") ||
    line.startsWith("> ") ||
    line === ">" ||
    line.startsWith("- ") ||
    line.trim() === "" ||
    line.trim() === "---" ||
    isStrongline(line) ||
    NESTED_ITEM.test(line) ||
    ORDERED_ITEM.test(line)
  );
}

/**
 * Fold hard-wrapped continuation lines (the canon files wrap at ~80 cols)
 * into the block that started at lines[i]. Returns [text, nextIndex].
 */
function foldContinuation(
  lines: string[],
  i: number,
  first: string
): [string, number] {
  let text = first;
  let j = i + 1;
  while (j < lines.length && !startsBlock(lines[j])) {
    text += " " + lines[j].trim();
    j++;
  }
  return [text, j];
}

export function parseBlocks(content: string): Block[] {
  const lines = content.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // closing fence
      blocks.push({ type: "code", lang, code: codeLines.join("\n") });
      continue;
    }

    // Table
    if (line.startsWith("|") && lines[i + 1]?.match(/^\|[\s-:|]+\|/)) {
      const header = parseTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", header, rows });
      continue;
    }

    // Headings (## / ### / ####; a stray # renders at h2 weight)
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const level = Math.max(2, Math.min(4, heading[1].length)) as 2 | 3 | 4;
      blocks.push({ type: "heading", level, text: heading[2] });
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Blockquote — gather the run, dequote, parse recursively (quoted
    // tables/lists in the canon docs render as real structure).
    if (line.startsWith("> ") || line === ">") {
      const inner: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || lines[i] === ">")) {
        inner.push(lines[i] === ">" ? "" : lines[i].slice(2));
        i++;
      }
      blocks.push({ type: "quote", children: parseBlocks(inner.join("\n")) });
      continue;
    }

    // Term item (- **Bold** — detail)
    if (line.startsWith("- **")) {
      const [folded, next] = foldContinuation(lines, i, line);
      const match = folded.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
      if (match) {
        blocks.push({ type: "term-item", term: match[1], detail: match[2] });
        i = next;
        continue;
      }
    }

    // Unordered list item (+ hard-wrapped continuation)
    if (line.startsWith("- ")) {
      const [folded, next] = foldContinuation(lines, i, line.slice(2));
      blocks.push({ type: "list-item", marker: "·", nested: false, text: folded });
      i = next;
      continue;
    }

    // Nested list item (indented dash)
    const nested = line.match(NESTED_ITEM);
    if (nested) {
      const [folded, next] = foldContinuation(lines, i, nested[1]);
      blocks.push({ type: "list-item", marker: "·", nested: true, text: folded });
      i = next;
      continue;
    }

    // Ordered list item (+ hard-wrapped continuation)
    const ordered = line.match(ORDERED_ITEM);
    if (ordered) {
      const [folded, next] = foldContinuation(lines, i, ordered[2]);
      blocks.push({
        type: "list-item",
        marker: `${ordered[1]}.`,
        nested: false,
        text: folded,
      });
      i = next;
      continue;
    }

    // Standalone bold line
    if (isStrongline(line)) {
      blocks.push({ type: "strongline", text: line.slice(2, -2) });
      i++;
      continue;
    }

    // Italic paragraph (epigraphs, editorial notes: *…* spanning the whole
    // paragraph, possibly hard-wrapped, possibly containing links/bold).
    if (line.startsWith("*") && !line.startsWith("**")) {
      const [folded, next] = foldContinuation(lines, i, line.trim());
      if (folded.endsWith("*") && !folded.endsWith("**") && folded.length > 2) {
        blocks.push({ type: "em-p", text: folded.slice(1, -1) });
        i = next;
        continue;
      }
    }

    // Empty line — preserved as rhythm
    if (line.trim() === "") {
      blocks.push({ type: "gap" });
      i++;
      continue;
    }

    // Paragraph (+ hard-wrapped continuation)
    {
      const [folded, next] = foldContinuation(lines, i, line.trim());
      blocks.push({ type: "p", text: folded });
      i = next;
    }
  }

  return blocks;
}
