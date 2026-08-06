import { describe, it, expect } from "vitest";
import { protocolDocs } from "./demo";

// Mirror of the categoryLabels keys used by the protocol doc reader at
// src/app/protocol/[slug]/page.tsx. If that set changes, this must change too.
const CATEGORY_KEYS = new Set([
  "theory",
  "discipline",
  "practice",
  "governance",
]);

describe("protocolDocs", () => {
  it("has unique slugs", () => {
    const slugs = protocolDocs.map((doc) => doc.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses only category keys the app can render", () => {
    for (const doc of protocolDocs) {
      expect(CATEGORY_KEYS.has(doc.category)).toBe(true);
    }
  });
});
