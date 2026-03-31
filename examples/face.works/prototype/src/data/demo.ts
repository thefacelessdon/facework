import type {
  ProtocolDoc,
  CaseStudy,
  CoherenceSnapshot,
  NavItem,
} from "./schema";

// --- Navigation ---

export const navigation: NavItem[] = [
  { label: "Protocol", href: "/protocol", description: "The open standard" },
  { label: "Proof", href: "/proof", description: "Case studies and audits" },
  { label: "Status", href: "/status", description: "Live coherence tracker" },
  { label: "Engage", href: "/engage", description: "Work with Facework" },
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
    slug: "coherence-operating-system",
    title: "The Coherence Operating System",
    subtitle:
      "Maintaining structural alignment inside systems that would otherwise fracture under pressure",
    category: "theory",
    order: 2,
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
    slug: "protocol-v1",
    title: "Facework Protocol v1",
    subtitle:
      "An open standard for turning cultural signal into coherent, ownable business systems",
    category: "spec",
    order: 3,
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
    category: "methodology",
    order: 4,
    content: `## The Human + Agent Operating Model

This methodology was developed and validated building GAMUT (creator commerce infrastructure) across 4 days. The agent runs the protocol. The human provides taste, judgment, relationship, and extraction checks.

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
| Idea to handoff-ready | 4 days |
| Architecture specs | 10 (6,500+ lines) |
| Operational playbooks | 9 (3,500+ lines) |
| Strategic decisions resolved | 7 |
| Tests passing | 28 |
| Lines of specification | 36,000+ |`,
  },
  {
    slug: "conformance-model",
    title: "Conformance Model",
    subtitle: "What 'Facework Protocol Conformant' means — and how it's verified",
    category: "conformance",
    order: 5,
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
];

// --- Case Studies ---

export const caseStudies: CaseStudy[] = [
  {
    slug: "gamut",
    title: "GAMUT",
    creator: "Audit pending",
    domain: "Creator Commerce Infrastructure",
    status: "audit-complete",
    conformanceLevel: 2,
    summary:
      "Creator commerce infrastructure giving established creators the operational layer to sell physical products at national retail scale. Built using the Facework methodology in 4 days. Retroactive conformance audit in progress.",
    artifacts: {
      governanceDocs: 6,
      decisionRecords: 7,
      architectureSpecs: 10,
      playbooks: 9,
      prototypePages: 12,
      tests: 28,
    },
    extractionCheckPassed: true,
    publicReference: false,
    date: "2026-03",
  },
];

// --- Coherence Tracker ---

export const coherenceSnapshot: CoherenceSnapshot = {
  date: "2026-03-23",
  monthsSinceFirstEngagement: null,
  stages: [
    {
      stage: "mvp",
      label: "MVP — Services Phase",
      status: "active",
      description:
        "Running the protocol directly for creators and cultural brands.",
      exitCriteria: [
        {
          description: "Revenue at $5K+/month for 3 consecutive months",
          status: "not-started",
        },
        {
          description: "3 completed protocol runs with documented outcomes",
          status: "in-progress",
          evidence: "GAMUT audit in progress (1 of 3)",
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
        "The protocol becomes transferable. Studios license the methodology.",
      exitCriteria: [
        {
          description:
            "1 studio successfully running protocol under license",
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
        "The protocol is a recognized standard with certification and ecosystem.",
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
        "Author sole source of protocol credibility after 12 months",
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
    "Protocol stays open — theory, methodology, spec always freely available",
    "Creator sovereignty is absolute — they own all output, exit is clean",
    "No lock-in — deliverables in open formats, no proprietary dependencies",
    "Conduits, not containers — Facework never controls creator infrastructure",
    "Energy transfer within 12 months — protocol must not depend solely on author",
  ],
};
