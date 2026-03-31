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
  category: "theory" | "methodology" | "spec" | "conformance";
  order: number;
  content: string; // markdown
}

// --- Proof / Case Studies ---

export interface CaseStudy {
  slug: string;
  title: string;
  creator: string;
  domain: string;
  status: "audit-complete" | "case-study" | "in-progress";
  conformanceLevel: 1 | 2 | 3 | 4;
  summary: string;
  artifacts: ArtifactCount;
  extractionCheckPassed: boolean;
  publicReference: boolean;
  date: string; // ISO 8601
}

export interface ArtifactCount {
  governanceDocs: number;
  decisionRecords: number;
  architectureSpecs: number;
  playbooks: number;
  prototypePages: number;
  tests: number;
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
