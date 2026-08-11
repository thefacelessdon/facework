import { describe, it, expect } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ShapeMarker } from "./ShapeMarker";
import { LedgerLegend, HoldingsLine, CanonAnchor } from "./Ledger";

describe("LedgerLegend (the grammar teaches itself)", () => {
  it("renders both shape-law states with the EXACT glyph the rows use", () => {
    const legend = renderToStaticMarkup(createElement(LedgerLegend));
    // ShapeMarker is the single rendering of the shape law; the legend must
    // contain its exact markup for both states, so legend and record rows
    // (which render the same component) can never drift.
    const open = renderToStaticMarkup(
      createElement(ShapeMarker, { state: "open" })
    );
    const settled = renderToStaticMarkup(
      createElement(ShapeMarker, { state: "settled" })
    );
    expect(legend).toContain(open);
    expect(legend).toContain(settled);
    expect(legend).toContain("under observation");
    expect(legend).toContain("issued");
  });

  it("shape law: square = open, circle = settled", () => {
    expect(
      renderToStaticMarkup(createElement(ShapeMarker, { state: "open" }))
    ).toContain("rr-marker--open");
    expect(
      renderToStaticMarkup(createElement(ShapeMarker, { state: "settled" }))
    ).toContain("rr-marker--settled");
  });
});

describe("HoldingsLine (the ledger counts itself)", () => {
  it("renders derived counts in ink within a record-voice line", () => {
    const html = renderToStaticMarkup(
      createElement(HoldingsLine, {
        parts: [
          { n: 3, unit: "records" },
          { n: 2, unit: "settled" },
          { n: 1, unit: "open" },
        ],
      })
    );
    expect(html).toContain("<strong>3</strong> records");
    expect(html).toContain("<strong>2</strong> settled");
    expect(html).toContain("<strong>1</strong> open");
    // The verdigris tick square leads it (classification).
    expect(html).toContain("rr-label__tick");
    // No dates — records carry none.
    expect(html).not.toMatch(/\b20\d\d\b/);
  });
});

describe("CanonAnchor", () => {
  it("renders the citation eyebrow and the epigram", () => {
    const html = renderToStaticMarkup(
      createElement(CanonAnchor, {
        citation: "Constitution · Art. VI",
        epigram:
          "Every meaningful action performed through the practice produces persistent evidence.",
      })
    );
    expect(html).toContain("Constitution · Art. VI");
    expect(html).toContain("persistent evidence");
    expect(html).toContain("rr-ledger-anchor__epigram");
  });
});
