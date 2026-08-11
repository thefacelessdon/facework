/**
 * Facework Protocol — Site Schema
 *
 * Typed data model for face.works. This schema defines the structure
 * for protocol docs, proof/case studies, and the coherence tracker.
 * Demo data and live data implement the same interface.
 */

// --- Protocol Docs ---

export interface ProtocolDoc {
  slug: string;
  title: string;
  subtitle: string;
  category: "theory" | "discipline" | "practice" | "governance";
  order: number;
  content: string; // markdown — the FULL canonical document, not an excerpt
  /**
   * Repo-relative path of the canonical source document this page serves
   * (e.g. "theories/cultural-physics.md"). Present on every doc whose content
   * is a derived copy synced from canon (scripts/sync-canon.mjs).
   */
  sourcePath?: string;
  /** Git short SHA of the last commit touching the canonical source. */
  sourceSha?: string;
  /**
   * The status the canonical source declares for ITSELF in its YAML
   * frontmatter (e.g. "Canonical", "Living Document", "Working Draft").
   * Surfaced verbatim on the doc page — the record does not upgrade a
   * source's own claim. Absent when the source declares no frontmatter status.
   */
  sourceStatus?: string;
  /**
   * True only when a doc has NO canonical source document and its content is
   * site-authored summary text. Canon-backed docs omit this. Rendered as an
   * honest disclosure, never silently.
   */
  excerpt?: boolean;
}

// --- Proof / Case Studies ---

export interface CaseStudy {
  slug: string;
  title: string;
  creator: string;
  domain: string;
  status: "audit-complete" | "case-study" | "in-progress";
  /**
   * Assigned conformance Level. Optional: not every case carries a ratified
   * Level (e.g. a Facework run whose conformance is self-reported, or a case
   * where no Level is claimed at all).
   */
  conformanceLevel?: 1 | 2 | 3 | 4;
  /**
   * How the system relates to Facework:
   * - "self-audit": already-built system audited retroactively against the model
   * - "facework-run": built through a full/partial Facework protocol run
   * - "facework-informed": built with the Facework discipline, not a formal run
   */
  provenance?: "self-audit" | "facework-run" | "facework-informed";
  /** Short honest disclosure about what the conformance claim does and does not mean. */
  conformanceNote?: string;
  /** Human-readable caption for the lines-of-work summary shown on the proof card. */
  linesCaption?: string;
  summary: string;
  // Object rows carry an explicit title/label + detail (as GAMUT does).
  // Plain strings carry a single self-contained statement, rendered verbatim.
  structuralChanges: Array<StructuralChange | string>;
  practicalImpact: Array<PracticalImpact | string>;
  handoffReadiness: Array<HandoffReadiness | string>;
  artifacts: ArtifactCount;
  extractionCheckPassed: boolean;
  publicReference: boolean;
  date: string; // ISO 8601 (empty string when no date is claimed)
}

export interface StructuralChange {
  title: string;
  detail: string;
}

export interface PracticalImpact {
  label: string;
  detail: string;
}

export interface HandoffReadiness {
  label: string;
  detail: string;
}

export interface ArtifactCount {
  governanceDocs: number;
  decisionRecords: number;
  architectureSpecs: number;
  playbooks: number;
  prototypePages: number;
  routes: number;
  components: number;
  testFiles: number;
  testCases: number;
}

// --- Coherence Tracker ---

export interface StageStatus {
  stage: "mvp" | "beta" | "scale";
  label: string;
  status: "active" | "upcoming" | "complete";
  description: string;
  exitCriteria: GateItem[];
}

export interface GateItem {
  description: string;
  status: "complete" | "in-progress" | "not-started";
  evidence?: string;
}

export interface NoGoLine {
  type: "hard" | "soft";
  description: string;
  status: "clear" | "approaching" | "triggered";
  detail?: string;
}

export interface CoherenceSnapshot {
  date: string;
  monthsSinceFirstEngagement: number | null;
  stages: StageStatus[];
  noGoLines: NoGoLine[];
  metrics: {
    completedRuns: number;
    targetRuns: number;
    publicReferences: number;
    targetReferences: number;
    revenueFloorMet: boolean;
    monthsAtFloor: number;
    targetMonthsAtFloor: number;
  };
  nonNegotiables: string[];
}

// --- Navigation ---

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}
