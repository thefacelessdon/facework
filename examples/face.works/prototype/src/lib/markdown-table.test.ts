import { describe, it, expect } from "vitest";
import { parseTableRow } from "./markdown-table";

describe("parseTableRow", () => {
  it("parses a normal row", () => {
    expect(parseTableRow("| A | B | C |")).toEqual(["A", "B", "C"]);
  });

  it("parses a two-cell row identically to the old behavior", () => {
    expect(parseTableRow("| A | B |")).toEqual(["A", "B"]);
  });

  it("preserves an interior empty cell", () => {
    const cells = parseTableRow("| a || c |");
    expect(cells).toEqual(["a", "", "c"]);
    expect(cells).toHaveLength(3);
  });

  it("treats a whitespace-only cell as empty", () => {
    expect(parseTableRow("| a |   | c |")).toEqual(["a", "", "c"]);
  });

  it("preserves a trailing empty cell", () => {
    expect(parseTableRow("| a | b ||")).toEqual(["a", "b", ""]);
  });
});
