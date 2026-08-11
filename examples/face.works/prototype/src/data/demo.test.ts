import { describe, it, expect } from "vitest";
import { protocolDocs } from "./canon";

// Mirror of the categoryLabels keys used by the protocol doc reader at
// src/app/protocol/[slug]/page.tsx. If that set changes, this must change too.
const CATEGORY_KEYS = new Set([
  "theory",
  "discipline",
  "practice",
  "governance",
]);

describe("protocolDocs (canonical)", () => {
  it("has unique slugs", () => {
    const slugs = protocolDocs.map((doc) => doc.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses only category keys the app can render", () => {
    for (const doc of protocolDocs) {
      expect(CATEGORY_KEYS.has(doc.category)).toBe(true);
    }
  });

  it("serves the full canonical document, never an excerpt", () => {
    for (const doc of protocolDocs) {
      expect(doc.excerpt).toBeUndefined();
      expect(doc.sourcePath).toBeTruthy();
      expect(doc.sourceSha).toBeTruthy();
      // The GPT-era excerpts were ~2KB. Every canon doc is substantially
      // larger; the smallest (standards/README.md) is ~2.8KB of source.
      expect(doc.content.length).toBeGreaterThan(2000);
    }
  });

  it("carries the canon passages the excerpts silently omitted", () => {
    const culturalPhysics = protocolDocs.find(
      (doc) => doc.slug === "cultural-physics"
    );
    expect(culturalPhysics).toBeDefined();
    expect(culturalPhysics!.content).toContain("Stability");
    expect(culturalPhysics!.content).toContain("constructs of Coherence");
    expect(culturalPhysics!.content).toContain("Dual Worlds");

    const constitution = protocolDocs.find((doc) => doc.slug === "constitution");
    expect(constitution).toBeDefined();
    expect(constitution!.content).toContain("Article XIII — Transmission");
  });

  it("strips loader-handled framing but keeps the body verbatim", () => {
    for (const doc of protocolDocs) {
      expect(doc.content).not.toContain("DERIVED COPY");
      expect(doc.content.startsWith("# ")).toBe(false);
      expect(doc.content.startsWith("---\ntitle:")).toBe(false);
    }
  });
});
