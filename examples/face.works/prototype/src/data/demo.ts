import type { CaseStudy, CoherenceSnapshot, NavItem } from "./schema";

// --- Navigation ---

// Two-mode spine (DESIGN.md §10). The Work is the Record register (published
// readings); The Practice is the Field register (how to work with Facework —
// currently /engage, rebuilt in a later pass). The Work browses by the
// working-canon shape (Constitution · Theories · Protocol · Postures ·
// Runs & Evidence · Methodology) — sub-surfaces reached from The Work.
// Status / Privacy / Accessibility live in the Footer.
export const navigation: NavItem[] = [
  { label: "The Work", href: "/", description: "The published record" },
  { label: "The Practice", href: "/engage", description: "Work with Facework" },
  { label: "About", href: "/about", description: "Practice and institution" },
];

// --- Protocol Docs ---
// The protocol docs are the FULL canonical documents, served from committed
// derived copies of the canon files. They moved to src/data/canon.ts
// (server-only, reads content/canon/ at build time) so this module stays
// importable from client components (Nav). See scripts/sync-canon.mjs.

// --- Case Studies ---

export const caseStudies: CaseStudy[] = [
  {
    slug: "gamut",
    title: "GAMUT",
    creator: "Audit pending",
    domain: "Creator Commerce Infrastructure",
    status: "audit-complete",
    conformanceLevel: 3,
    summary:
      "Creator commerce infrastructure giving established creators the operational layer to sell physical products at national retail scale. Built with the Facework methodology and AI-agent teams, then retroactively audited to Level 3 (Sovereignty-Verified) in a self-audit authorized by Decision 003.",
    structuralChanges: [
      {
        title: "Governance became explicit",
        detail:
          "Core economic, rights, and ownership decisions were locked before implementation, reducing downstream drift and negotiation-by-surprise.",
      },
      {
        title: "Operations became portable",
        detail:
          "Architecture specs and workflow playbooks turned tacit founder knowledge into a handoff-ready operating layer another builder can pick up quickly.",
      },
      {
        title: "Retail scale stopped depending on improvisation",
        detail:
          "The system moved from concept pressure to buildable structure: channel logic, product operations, and prototype flows were specified as one coherent stack.",
      },
    ],
    practicalImpact: [
      {
        label: "Faster handoff",
        detail:
          "A new engineer can enter through specs and playbooks instead of reconstructing founder logic from meetings and scattered context.",
      },
      {
        label: "Cleaner decision-making",
        detail:
          "Strategic debates move upstream into explicit governance and direction, which reduces rework once execution begins.",
      },
      {
        label: "More credible scale path",
        detail:
          "Retail expansion becomes a designed operating path rather than a fragile ambition held together by improvisation.",
      },
    ],
    handoffReadiness: [
      {
        label: "Decision trail exists",
        detail:
          "A replacement builder can see why core choices were made instead of inheriting conclusions without reasoning.",
      },
      {
        label: "Operational ownership is legible",
        detail:
          "Workflows, responsibilities, and system boundaries are documented clearly enough for another operator to step in.",
      },
      {
        label: "Build entry is immediate",
        detail:
          "Specs, playbooks, and prototype flows reduce the need for founder-led oral transfer before execution can start.",
      },
    ],
    artifacts: {
      governanceDocs: 6,
      decisionRecords: 20,
      architectureSpecs: 14,
      playbooks: 9,
      prototypePages: 51,
      routes: 66,
      components: 89,
      testFiles: 42,
      testCases: 174,
    },
    extractionCheckPassed: true,
    publicReference: false,
    date: "2026-03",
  },
  {
    slug: "14th-and-co",
    title: "14th & Co",
    creator: "14th & Co",
    domain: "People & operations infrastructure firm",
    status: "case-study",
    conformanceLevel: 3,
    provenance: "facework-run",
    conformanceNote:
      "Full Facework protocol run (8/8 gates). Level 3 is self-reported by the practice and pending client ratification; one runtime sub-gate remains open.",
    summary:
      "A people-and-operations firm rebuilt as an owned operating system: a live client workbench plus a governed specification layer that turns tacit founder knowledge into handoff-ready infrastructure.",
    structuralChanges: [
      "Governance became explicit — 17 numbered decision records with rationale, alternatives, and owner sign-off replaced negotiation-by-surprise.",
      "Operations became portable — 14 architecture specs and 8 playbooks turned founder knowledge into a handoff-ready operating layer.",
      "Client sovereignty was designed in — a sovereignty map specifies per-asset ownership and a clean, open-format exit path.",
    ],
    practicalImpact: [
      "A replacement builder can enter through specs and playbooks instead of reconstructing logic from meetings.",
      "Strategic debates move upstream into explicit governance, reducing rework during execution.",
      "Enterprise engagement content is held privately; only the operating system itself is exposed.",
    ],
    handoffReadiness: [
      "Decision trail exists with reasoning, not just conclusions.",
      "Operational ownership and boundaries are documented for another operator.",
      "A live client workbench shipped, backed by a small automated test suite.",
    ],
    artifacts: {
      governanceDocs: 4,
      decisionRecords: 17,
      architectureSpecs: 14,
      playbooks: 8,
      prototypePages: 23,
      routes: 28,
      components: 53,
      testFiles: 5,
      testCases: 24,
    },
    extractionCheckPassed: false,
    publicReference: false,
    date: "",
    linesCaption:
      "~43,000 lines of governed specification + a ~26,000-line client workbench application",
  },
  {
    slug: "hue-unlimited",
    title: "HUE Unlimited",
    creator: "HUE Unlimited",
    domain: "Embedded creative partner / cultural agency OS",
    status: "case-study",
    provenance: "facework-run",
    conformanceNote:
      "Built through a phase-tagged Facework run (Frequency through Coherence) with entropy audits. Conformance is self-reported; no formal Level assigned.",
    summary:
      "A creative agency's cultural authority encoded into a governed operating system — codifying founder taste into schema, guaranteeing talent sovereignty, and taking a prototype to a production platform.",
    structuralChanges: [
      "Founder taste was codified into 23 governed content schemas so quality could scale beyond the founders.",
      "Talent and community sovereignty were made contractual through explicit exit-guarantee and governance documents.",
      "11 strategic decisions were locked with rationale, including hard sub-brand and architecture calls that removed hidden coupling.",
    ],
    practicalImpact: [
      "Award-winning cultural campaigns (multiple Telly Awards and a Gold Clio) sit behind the practice as pre-existing public proof of the team's craft.",
      "A documented prototype became a real auth-gated production platform.",
      "Quality review became a defined gate rather than founder intuition.",
    ],
    handoffReadiness: [
      "A 35-minute orientation brief plus per-app engineering guides let a new builder continue without live context.",
      "A single canonical task and pricing source keeps numbers from drifting.",
      "Phase-tagged tracker records what was done and why at each stage.",
    ],
    artifacts: {
      governanceDocs: 3,
      decisionRecords: 11,
      architectureSpecs: 33,
      playbooks: 11,
      prototypePages: 37,
      routes: 46,
      components: 105,
      testFiles: 13,
      testCases: 0,
    },
    extractionCheckPassed: false,
    publicReference: false,
    date: "",
    linesCaption:
      "~24,000 lines of governed specification + ~30,000 lines of application across three products",
  },
];

// --- Coherence Tracker ---

export const coherenceSnapshot: CoherenceSnapshot = {
  date: "2026-08-06",
  monthsSinceFirstEngagement: null,
  stages: [
    {
      stage: "mvp",
      label: "MVP — Services Phase",
      status: "active",
      description:
        "Running the Facework practice directly for creators and cultural brands.",
      exitCriteria: [
        {
          description: "Revenue at $5K+/month for 3 consecutive months",
          status: "not-started",
        },
        {
          description: "3 completed practice engagements with documented outcomes",
          status: "not-started",
          evidence:
            "GAMUT conformance audit complete (Level 3, retroactive self-audit) — a self-audit is not a paid practice run. Practice runs: 0 of 3.",
        },
        {
          description: "At least 1 public reference",
          status: "not-started",
        },
      ],
    },
    {
      stage: "beta",
      label: "Beta — Transfer Phase",
      status: "upcoming",
      description:
        "The practice becomes transferable. Studios license the method and can run it without founder dependence.",
      exitCriteria: [
        {
          description:
            "1 studio successfully running the practice under license",
          status: "not-started",
        },
        {
          description:
            "Studio produces conformant system without founder involvement",
          status: "not-started",
        },
        {
          description: "Revenue includes both services and licensing",
          status: "not-started",
        },
      ],
    },
    {
      stage: "scale",
      label: "Scale — Standard Phase",
      status: "upcoming",
      description:
        "The practice has matured into a recognized standard with certification and ecosystem support.",
      exitCriteria: [
        {
          description: "Certification program launched and operational",
          status: "not-started",
        },
        {
          description: "Multiple studios licensed",
          status: "not-started",
        },
        {
          description:
            "'Facework Protocol Conformant' has market recognition",
          status: "not-started",
        },
      ],
    },
  ],
  noGoLines: [
    {
      type: "hard",
      description:
        "12 months from first engagement, revenue below $5K/month for 3+ months",
      status: "clear",
      detail: "Clock starts at first paid engagement (not yet started)",
    },
    {
      type: "hard",
      description: "Non-negotiable violated and not restored",
      status: "clear",
    },
    {
      type: "hard",
      description:
        "Author remains the sole source of practice credibility after 12 months",
      status: "clear",
      detail: "Clock starts at first paid engagement",
    },
    {
      type: "soft",
      description: "6 months with no paid engagement",
      status: "clear",
    },
    {
      type: "soft",
      description: "First 3 engagements produce no referrals",
      status: "clear",
    },
  ],
  metrics: {
    completedRuns: 0,
    targetRuns: 3,
    publicReferences: 0,
    targetReferences: 1,
    revenueFloorMet: false,
    monthsAtFloor: 0,
    targetMonthsAtFloor: 3,
  },
  nonNegotiables: [
    "The protocol stays open — theory, discipline, and core method remain freely available",
    "Creator sovereignty is absolute — they own all output, exit is clean",
    "No lock-in — deliverables in open formats, no proprietary dependencies",
    "Conduits, not containers — Facework never controls creator infrastructure",
    "Energy transfer within 12 months — the practice must not depend solely on the author",
  ],
};
