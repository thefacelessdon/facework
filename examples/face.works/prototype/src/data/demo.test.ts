import { describe, it, expect } from "vitest";
import { protocolDocs } from "./canon";
import { publicSections, workBuckets, postures } from "./knowledge";

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

  it("surfaces the status each source declares for itself", () => {
    // Honesty gate: a Working Draft must read as a Working Draft on the page.
    const conformance = protocolDocs.find((d) => d.slug === "conformance-model");
    expect(conformance?.sourceStatus).toBe("Working Draft");

    const constitution = protocolDocs.find((d) => d.slug === "constitution");
    expect(constitution?.sourceStatus).toBe("Canonical");

    // The frontmatter never leaks into the served body.
    for (const doc of protocolDocs) {
      expect(doc.content.startsWith("---")).toBe(false);
    }
  });
});

describe("The Work taxonomy (working-canon shape)", () => {
  // Ratified in methodology/decisions/
  // DECISION-002-standards-first-experience-language.md.
  const RETIRED_ROUTES = [
    "/field-notes",
    "/models",
    "/frameworks",
    "/experiments",
    "/conversations",
    "/library",
  ];

  it("browses by the six ratified buckets, in canon order", () => {
    expect(workBuckets.map((b) => b.title)).toEqual([
      "Constitution",
      "Theories",
      "Protocol",
      "Postures",
      "Runs & Evidence",
      "Methodology",
    ]);
    // Single-doc buckets link straight to the served canonical document.
    expect(workBuckets.find((b) => b.title === "Constitution")?.href).toBe(
      "/protocol/constitution"
    );
    expect(workBuckets.find((b) => b.title === "Protocol")?.href).toBe("/protocol");
  });

  it("carries a canon-anchored epigram on every bucket", () => {
    for (const bucket of workBuckets) {
      expect(bucket.note.length).toBeGreaterThan(20);
    }
  });

  it("no record links into a retired type route", () => {
    const hrefs = [
      ...Object.values(publicSections).flatMap((s) => s.records.map((r) => r.href)),
      ...workBuckets.map((b) => b.href),
    ];
    for (const href of hrefs) {
      for (const retired of RETIRED_ROUTES) {
        expect(href === retired || href.startsWith(`${retired}/`)).toBe(false);
      }
    }
  });

  it("documents all eight Postures", () => {
    expect(postures).toHaveLength(8);
    for (const p of postures) {
      expect(p.name).toBeTruthy();
      expect(p.purpose).toBeTruthy();
    }
  });
});
