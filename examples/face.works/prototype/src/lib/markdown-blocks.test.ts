import { describe, it, expect } from "vitest";
import {
  parseBlocks,
  parseInline,
  resolveCanonHref,
  type Block,
} from "./markdown-blocks";

function types(blocks: Block[]): string[] {
  return blocks.map((b) => b.type);
}

describe("parseBlocks — excerpt-era behavior preserved", () => {
  it("parses a fenced code block with language", () => {
    const [block] = parseBlocks("```yaml\na: 1\nb: 2\n```");
    expect(block).toEqual({ type: "code", lang: "yaml", code: "a: 1\nb: 2" });
  });

  it("parses a table", () => {
    const [block] = parseBlocks("| A | B |\n|---|---|\n| 1 | 2 |");
    expect(block).toEqual({
      type: "table",
      header: ["A", "B"],
      rows: [["1", "2"]],
    });
  });

  it("parses h2, term items, plain list items, stronglines, gaps", () => {
    const blocks = parseBlocks(
      "## Head\n- **Term** — detail\n- plain item\n**All bold line.**\n\ndone"
    );
    expect(types(blocks)).toEqual([
      "heading",
      "term-item",
      "list-item",
      "strongline",
      "gap",
      "p",
    ]);
    expect(blocks[0]).toMatchObject({ level: 2, text: "Head" });
    expect(blocks[1]).toMatchObject({ term: "Term", detail: "detail" });
  });
});

describe("parseBlocks — full-canon extensions", () => {
  it("parses h3 and h4", () => {
    const blocks = parseBlocks("### 9.2 Conformance\n#### 1) Entry");
    expect(blocks).toEqual([
      { type: "heading", level: 3, text: "9.2 Conformance" },
      { type: "heading", level: 4, text: "1) Entry" },
    ]);
  });

  it("parses a horizontal rule", () => {
    expect(parseBlocks("---")).toEqual([{ type: "hr" }]);
  });

  it("folds hard-wrapped paragraph lines into one paragraph", () => {
    const blocks = parseBlocks(
      "Facework exists to reduce structural contradiction before complexity\ncompounds it across time."
    );
    expect(blocks).toEqual([
      {
        type: "p",
        text: "Facework exists to reduce structural contradiction before complexity compounds it across time.",
      },
    ]);
  });

  it("folds list-item continuation lines (canon files wrap at ~80 cols)", () => {
    const blocks = parseBlocks(
      "- **Ecosystem** — how multiple participants inhabit it without\n  dilution."
    );
    expect(blocks).toEqual([
      {
        type: "term-item",
        term: "Ecosystem",
        detail: "how multiple participants inhabit it without dilution.",
      },
    ]);
  });

  it("parses ordered list items with numeric markers and continuations", () => {
    const blocks = parseBlocks(
      "1. **Meaning before structure.** A system can only be as coherent as the\n   language through which it understands itself.\n2. Second."
    );
    expect(blocks).toHaveLength(2);
    expect(blocks[0]).toMatchObject({
      type: "list-item",
      marker: "1.",
      text: "**Meaning before structure.** A system can only be as coherent as the language through which it understands itself.",
    });
    expect(blocks[1]).toMatchObject({ type: "list-item", marker: "2." });
  });

  it("parses nested list items", () => {
    const blocks = parseBlocks("- top\n   - *Physical:* embodied, sensory, human");
    expect(blocks[0]).toMatchObject({ type: "list-item", nested: false });
    expect(blocks[1]).toMatchObject({
      type: "list-item",
      nested: true,
      text: "*Physical:* embodied, sensory, human",
    });
  });

  it("parses multi-line blockquotes recursively, including quoted tables", () => {
    const blocks = parseBlocks(
      "> **Note:** the protocol\n> evolved.\n>\n> | A | B |\n> |---|---|\n> | 1 | 2 |"
    );
    expect(blocks).toHaveLength(1);
    const quote = blocks[0];
    if (quote.type !== "quote") throw new Error("expected quote");
    expect(types(quote.children)).toEqual(["p", "gap", "table"]);
    expect(quote.children[0]).toMatchObject({
      text: "**Note:** the protocol evolved.",
    });
  });

  it("parses a full-span italic paragraph (epigraph) across wrapped lines", () => {
    const blocks = parseBlocks(
      "*The discipline of designing systems that hold their shape across time,\nand transmission.*"
    );
    expect(blocks).toEqual([
      {
        type: "em-p",
        text: "The discipline of designing systems that hold their shape across time, and transmission.",
      },
    ]);
  });

  it("does not treat a paragraph ending in bold as an italic paragraph", () => {
    const blocks = parseBlocks("*at what timescale* runs, and **what closes it.**");
    expect(blocks[0].type).toBe("p");
  });
});

describe("parseInline — full-canon extensions", () => {
  it("parses links with text children", () => {
    const tokens = parseInline("see [Cultural Physics](cultural-physics.md) §IV");
    expect(tokens).toMatchObject([
      { type: "text", text: "see " },
      { type: "link", href: "cultural-physics.md" },
      { type: "text", text: " §IV" },
    ]);
  });

  it("parses *emphasis* and keeps code spans atomic", () => {
    const tokens = parseInline("the *what*; run `/fw-frequency` first");
    expect(tokens).toMatchObject([
      { type: "text", text: "the " },
      { type: "em" },
      { type: "text", text: "; run " },
      { type: "code", text: "/fw-frequency" },
      { type: "text", text: " first" },
    ]);
  });

  it("parses emphasis nested inside bold, including a *** closing", () => {
    const tokens = parseInline(
      "**an agent may *recommend* an exit, but must never *record it as decided.***"
    );
    expect(tokens).toHaveLength(1);
    const strong = tokens[0];
    if (strong.type !== "strong") throw new Error("expected strong");
    const kinds = strong.children.map((t) => t.type);
    expect(kinds.filter((k) => k === "em")).toHaveLength(2);
    expect(
      strong.children.some(
        (t) => "text" in t && typeof t.text === "string" && t.text.includes("*")
      )
    ).toBe(false);
  });

  it("parses bold nested inside an italic epigraph via em-p + inline", () => {
    const [block] = parseBlocks(
      "*Where [Cultural Physics](cultural-physics.md) explains **why** systems cohere.*"
    );
    if (block.type !== "em-p") throw new Error("expected em-p");
    const tokens = parseInline(block.text);
    expect(tokens.some((t) => t.type === "link")).toBe(true);
    expect(tokens.some((t) => t.type === "strong")).toBe(true);
  });
});

describe("resolveCanonHref", () => {
  it("passes absolute URLs through", () => {
    expect(resolveCanonHref("https://face.works")).toBe("https://face.works");
  });

  it("maps canon-relative doc links to site routes", () => {
    expect(resolveCanonHref("cultural-physics.md")).toBe(
      "/protocol/cultural-physics"
    );
    expect(resolveCanonHref("the-coherence-operating-system.md")).toBe(
      "/protocol/coherence-operating-system"
    );
    expect(resolveCanonHref("../PROTOCOL.md")).toBe("/protocol/protocol-v1");
  });

  it("returns null for targets with no surface on the site", () => {
    expect(resolveCanonHref("../ROADMAP.md")).toBeNull();
    expect(resolveCanonHref("VERSION")).toBeNull();
    expect(resolveCanonHref("#anchor")).toBeNull();
  });
});
