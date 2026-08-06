import type {
  ProtocolDoc,
  CaseStudy,
  CoherenceSnapshot,
  NavItem,
} from "./schema";

// --- Navigation ---

// Two-mode spine (DESIGN.md §10). The Work is the Record register (published
// readings); The Practice is the Field register (how to work with Facework —
// currently /engage, rebuilt in a later pass). Type routes (field notes,
// models, frameworks, experiments) are sub-surfaces reached from The Work.
// Status / Privacy / Accessibility live in the Footer.
export const navigation: NavItem[] = [
  { label: "The Work", href: "/", description: "The published record" },
  { label: "The Practice", href: "/engage", description: "Work with Facework" },
  { label: "About", href: "/about", description: "Practice and institution" },
];

// --- Protocol Docs ---

export const protocolDocs: ProtocolDoc[] = [
  {
    slug: "cultural-physics",
    title: "The Theory of Cultural Physics",
    subtitle:
      "A framework for designing across systems of creativity and culture",
    category: "theory",
    order: 1,
    content: `Everything vibrates. Every sound, color, gesture, or idea is energy taking form. When those vibrations align, culture emerges. When they clash or decay, culture fragments into noise.

The creative world runs on borrowed power. Platforms own the distribution. Corporations own the channels. Creators supply the energy but rarely control the current.

**When the people who generate the energy do not control the infrastructure through which it flows, the energy is extracted. Always. Without exception.**

This is not a grievance. This is a diagnosis. The physics are clear.

## The Governing Equation

\`\`\`
Coherence = (Flow × Resonance) / (1 + Entropy)
\`\`\`

When Flow increases, energy moves freely. When Resonance increases, that energy amplifies and spreads. When Entropy decreases, energy is preserved.

## The Paradigm Shift

The old paradigm treats culture as a resource to be mined. Discover a generative community. Extract the aesthetic. Scale it through infrastructure you own. Discard the source when the trend moves.

The new paradigm treats culture as an energy system to be sustained. An extraction model is high entropy — it degrades the source and requires constant new energy. A coherence model is low entropy — the source community controls the frequency, owns the current, and the system sustains itself.

**The shift is not moral. It is architectural.**`,
  },
  {
    slug: "coherence-design",
    title: "Coherence Design",
    subtitle:
      "The discipline of designing systems that preserve identity under growth, pressure, and handoff",
    category: "discipline",
    order: 2,
    content: `Coherence Design is the discipline that sits between theory and execution. Cultural Physics explains why energy is extracted or preserved. Coherence Design translates that understanding into build rules.

## What the Discipline Does

A coherent system must:

- preserve identity as it scales
- keep strategic decisions legible
- make ownership visible
- survive handoff without losing its governing signal
- reject growth paths that depend on extraction

## Design Questions

Every serious build should be answerable at the design layer before implementation begins:

1. What signal is irreducible here?
2. Where does the system derive its energy?
3. Who controls the current, and who only rents access to it?
4. Which structures preserve coherence under pressure?
5. Which dependencies increase entropy even if they increase convenience?

## Why This Layer Matters

Without a design discipline, theory stays abstract and operations become improvised. The job of Coherence Design is to make structure intentional before it becomes expensive to change.`,
  },
  {
    slug: "coherence-operating-system",
    title: "The Coherence Operating System",
    subtitle:
      "Maintaining structural alignment inside systems that would otherwise fracture under pressure",
    category: "practice",
    order: 3,
    content: `Every product, company, and system lives or dies by its structural alignment. When coherence is present, the system holds its shape under pressure. When coherence is missing, the system drifts, contradicts itself, and eventually collapses.

## The Primitive Stack

Seven forces govern the coherence of any system being built:

**Frequency** — The irreducible signal. What the system IS when everything performative falls away. Business model, economics, rights, obligations, governance.

**Current** — The directional force. Where the system is going, and which paths it is NOT going. Strategic decisions locked with reasoning.

**Stability** — The foundational infrastructure. Architecture specifications, schemas, data models — the conductor through which current flows.

**Flow** — The adaptive intelligence. Operational playbooks for every workflow, with automation mapping and energy flow checks.

**Resonance** — The transmission force. A working prototype that carries the frequency of the community it serves.

**Entropy** — The diagnostic force. Finding every structural weakness before it becomes a collapse point.

**Coherence** — The integrating force. Packaging everything so the system holds its shape when handed to someone who wasn't there when it was built.`,
  },
  {
    slug: "constitution",
    title: "Constitution",
    subtitle:
      "The governing boundaries that keep the practice aligned when conditions change",
    category: "practice",
    order: 4,
    content: `The Constitution defines what Facework will and will not do in practice. It exists so speed does not override principle and commercial pressure does not silently rewrite the work.

## What It Governs

- sovereignty boundaries
- extraction refusals
- quality and taste obligations
- openness commitments
- how protocol work is separated from commercial implementation

## Why It Exists

Protocols can evolve. A constitution exists so the practice does not mutate every time the market asks it to. It keeps the work coherent across engagements, collaborators, and future versions of the system.

## Practical Effect

If a request produces short-term output at the cost of long-term coherence, the Constitution is the mechanism that says no.`,
  },
  {
    slug: "protocol-v1",
    title: "Facework Protocol v1",
    subtitle:
      "An open standard for turning cultural signal into coherent, ownable business systems",
    category: "practice",
    order: 5,
    content: `## Design Principles

- Signal before scale.
- Taste is governance, not decoration.
- Coherence over output volume.
- Sovereignty by design (audience, data, distribution, infrastructure).
- Human-agent interoperability for every phase output.

## Canonical Objects

A conforming implementation produces these artifacts:

- **SignalThesis** — canonical meaning boundaries
- **AudienceFieldMap** — actors, dynamics, incentives
- **TasteContract** — testable quality governance
- **DecisionLedger** — locked strategic direction
- **WedgeSpec** — audience, offer, channel, economic logic
- **SystemArchitecture** — implementable specifications
- **WorkflowPlaybooks** — operational workflows with ownership
- **LaunchPlan** — activation sequencing
- **SovereigntyMap** — dependency classification
- **DiagnosticReport** — lessons and method evolution

## Lifecycle Phases

Phase 0: Intake → Phase 1: Semantics → Phase 2: Field → Phase 3: Taste → Phase 4: Strategy Lock → Phase 5: Architecture + Flow → Phase 6: Activation → Phase 7: Integrity → Phase 8: Evolution

Each phase has required outputs and pass/fail gates. A project is minimally conformant only if all phases are complete, all gates pass, and sovereignty risks are documented with mitigation.`,
  },
  {
    slug: "build-methodology",
    title: "Build Methodology",
    subtitle: "From idea to handoff-ready architecture in days, not months",
    category: "practice",
    order: 6,
    content: `## The Human + Agent Operating Model

This methodology was developed and validated building GAMUT (creator commerce infrastructure) with the Facework methodology and AI-agent teams. The agent runs the protocol. The human provides taste, judgment, relationship, and extraction checks.

## The Seven Phases

\`\`\`
Governance → Pressure Testing → Architecture → Playbooks →
Prototype → Hardening → Handoff
\`\`\`

Each phase produces artifacts the next phase depends on. Skip a phase and downstream work is built on assumptions instead of decisions.

## What Makes This Different

By the time anyone writes production code, every decision is made, every edge case is documented, every workflow is specified, and a working prototype proves the UX.

The deeper difference: most build processes are culturally neutral — which in practice means they default to extraction. This methodology carries the Cultural Physics question through every phase: whose energy powers this, and who controls the current?

## Metrics (GAMUT as proof)

| Metric | Value |
|--------|-------|
| Architecture specs | 14 |
| Operational playbooks | 9 |
| Decision records | 20 |
| App Router pages | 51 (66 routes) |
| Components | 89 |
| Tests | 174 across 42 files |
| Lines of specification | 36,000+ |

Line count is the curated corpus: architecture + decisions + playbooks + governance + platform docs + briefs.`,
  },
  {
    slug: "conformance-model",
    title: "Conformance Model",
    subtitle: "What 'Facework Protocol Conformant' means — and how it's verified",
    category: "governance",
    order: 7,
    content: `## Conformance Levels

**Level 1: Phase-Complete** — All required canonical objects exist.

**Level 2: Gate-Passed** — All phase gates pass with documented evidence.

**Level 3: Sovereignty-Verified** — Level 2 + extraction check passed, ownership model implemented, exit guarantee enforceable.

**Level 4: Fully Conformant** — Level 3 + coherence test passed (handoff test, exit test, frequency test).

## The Extraction Check

Every system audited against 4 tests:

1. **Energy Audit** — Can you name who generates the value? Are they stakeholders, not just users?
2. **Current Ownership** — Does the system build conduits or containers?
3. **Exit Test** — Can value generators leave with their work, data, and relationships?
4. **Proportionality Test** — Does the economic model return value proportionally to who generates it?

If any answer reveals extraction, it's flagged as a structural concern. Extraction is high entropy. High entropy systems require constant new energy because they degrade the ones they have.

## Who Can Audit

Anyone can audit their own system against this model — the conformance criteria are open. The commercial layer is Facework running the audit and issuing the "Facework Protocol Conformant" mark.`,
  },
  {
    slug: "standards-track",
    title: "Standards Track",
    subtitle:
      "How formal standards fit into the system, and why that layer is intentionally deferred",
    category: "governance",
    order: 8,
    content: `Facework distinguishes between the working practice and the formal standards layer. The practice is active now. The standards track exists to stabilize what should become auditable, transferable, and eventually certifiable.

## Current Status

The standards layer is deferred by design. The protocol, constitution, and conformance model need to prove themselves through repeated use before they are frozen into a broader standards architecture.

## What Eventually Belongs Here

- canonical terminology
- standards taxonomy
- conformance pathways
- evidence requirements
- mark / certification rules

## Why Defer It

Premature standardization turns live practice into paperwork. Facework only wants to standardize what has already survived real projects, real pressure, and real handoff conditions.`,
  },
];

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
