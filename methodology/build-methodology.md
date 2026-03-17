---
title: "Build Methodology: From Idea to Handoff-Ready Architecture"
type: Internal Reference
version: 2.0
author: The Faceless Don
date: March 2026
status: Living Document
---

# Build Methodology

How to take an idea from zero to a fully architected, spec'd, prototyped, and handoff-ready
product using Claude Code as an operating partner. This methodology was developed and validated
building GAMUT (creator commerce infrastructure) across 4 days.

This is not a theory document. Every step below was executed, and the artifacts exist in the
GAMUT repo as proof. The methodology is designed to be:

1. **Reusable** — apply to any new product idea
2. **Encodable** — the steps can become agent instructions
3. **Demonstrable** — bring this to any collaboration as your operating system

## The Cultural Physics Foundation

This methodology exists because the default way things get built reproduces extraction.

The history of creative industries — jazz, hip hop, fashion, social media — follows the same
physics: communities generate the cultural energy, and external systems capture the current.
The infrastructure was never designed to sustain the source. Products built without coherence
thinking reproduce this pattern by accident, because the build process never asks: **whose
energy powers this system, and who controls the infrastructure it flows through?**

Faceworks's build sequence is the counter-architecture. Every phase carries the Cultural Physics
question forward. Frequency asks who generates the energy. Current decides who controls the
conduits. Stability builds architecture that implements those ownership decisions. Flow designs
workflows that circulate energy rather than extract it. Resonance makes the system transmissible
to the community it serves. Entropy catches extraction patterns alongside technical debt.
Coherence packages it so the community can operate independently.

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

The build sequence IS this equation, executed in order.

---

## The Seven Phases

```
PHASE 1        PHASE 2          PHASE 3         PHASE 4
Governance  →  Strategic     →  Architecture  → Operational
& Foundation   Pressure         Specification   Playbooks
               Testing

PHASE 5        PHASE 6          PHASE 7
Platform   →   Technical    →   Handoff &
Prototype      Spine            Packaging
               Hardening
```

Each phase produces artifacts that the next phase depends on. Skip a phase and
the downstream work is built on assumptions instead of decisions.

---

## Phase 1: Governance & Foundation

**Purpose:** Establish the business rules, economics, and legal boundaries before
anything gets designed or built. These are the constraints everything else operates within.

**The extraction check:** Before anything else, identify who generates the energy in
this system and whether the economics serve them or extract from them. This is not a
moral exercise — extraction is high entropy, and high-entropy foundations collapse
under downstream weight.

**What you produce:**
- Business model (revenue structure, pricing, unit economics, qualification criteria)
- Energy source identification (who generates the value, how the system sustains them)
- Ownership & control structure (what participants own, what they take when they leave)
- Rate structure (who gets what percentage of what)
- Fund governance (if applicable — segregated funds, permitted uses, reporting)
- Agreement templates (what creators/partners sign)
- Exit guarantees (what happens when someone leaves)
- Identity/verification requirements (who gets access)

**The gate structure:**
```
GATE 1 — Before first conversation with a customer
  Must have: Rate structure resolved, fund governance documented

GATE 2 — Before first agreement signed
  Must have: Agreement template, exit guarantee, verification protocol

GATE 3 — Before first transaction
  Must have: Data isolation, financial validation, health monitoring
```

**Why gates matter:** They prevent you from having a conversation you're not ready for.
Every gate item is a blocker — nothing past the gate happens until everything in the
gate is complete. This is security-first sequencing.

**Tools used:**
- Claude Code for document generation and cross-referencing
- CEO plan review (`/plan-ceo-review` from [gstack](https://github.com/garrytan/gstack)) for challenging assumptions

**GAMUT example artifacts:**
- Business Model v1.0 (revenue, SOM, qualification)
- CMAP rate structure (9/3/3 split)
- Cultural Marketing Fund governance instrument
- Creator agreement template
- Creator exit guarantee
- Identity verification protocol

**Time:** 1-2 days for a focused operator

---

## Phase 2: Strategic Pressure Testing

**Purpose:** Surface the hard questions that will derail you later if left unresolved.
Force yourself to make decisions now, not when you're mid-build.

**Method:** Use `/plan-ceo-review` in SCOPE EXPANSION mode. The CEO review's job is to:
- Challenge every premise
- Ask "what's the 10-star version?"
- Find the questions you're avoiding
- Force decisions with reasoning, not deferral

**Mandatory ownership dilemma:** Every project must explicitly resolve whether the system
builds conduits (participants control their own current) or containers (the platform controls
it). This is not automatically wrong either way — but it must be a conscious decision with
its implications named and recorded.

**What you produce:**
- A set of **dilemmas** — genuine strategic questions with multiple valid answers
- **Decision records** — the answer chosen, alternatives rejected, and reasoning
- **Coherence impact** per decision — does this sustain or extract?

**Decision record format:**
```
Decision: [What was decided]
Alternatives considered: [What was rejected and why]
Reasoning: [Why this path, not the others]
Implications: [What this decision unblocks or constrains]
Coherence impact: [Does this sustain or extract from the energy source?]
Status: RESOLVED
Date: [When it was locked]
```

**Key principle:** Once a decision is resolved, it's resolved. Record it and move on.
New team members read the decision record instead of re-litigating.

**GAMUT example decisions:**
- Creator OS is an operations capability (Amplifier Program), not a product
- Vertical generalization via Platform Narrative + Appendices, not document rewrites

**Time:** 1 day (often runs in parallel with Phase 1)

---

## Phase 3: Architecture Specification

**Purpose:** Specify every technical system before writing code. The spec IS the source
of truth — the code implements it, not the other way around.

**What you produce:** One spec per major system, each containing:
- Context (what problem it solves)
- Complete specification (schemas, state machines, rules, thresholds)
- Ownership & control (who owns this data, what happens on exit)
- ASCII diagrams (data flow, state transitions, queue topology)
- Edge cases (what can go wrong, how it's handled)
- Acceptance criteria (how to verify the implementation is correct)

**Spec categories for a typical product:**
```
DATA & SECURITY
├── Data isolation & access control (RLS, scoping, permissions)
├── Financial validation (checks, holds, reconciliation)
└── Health monitoring (metrics, thresholds, interventions)

INTEGRATION
├── Sync model (source of truth, conflict resolution)
├── API registry (confirmed vs unconfirmed, fallbacks)
└── Observability (alerts, audit trail, runbooks)

PRODUCT
├── Information architecture (screens, components, data sources)
├── Agent operations (task classification, automation boundaries)
└── Creative/network features (if applicable)
```

**Key principle:** Every number in a spec has a canonical source. Rates come from the
business model. Thresholds come from the ops playbook. Never hardcode values that
live somewhere else. Ownership structures must implement the decisions from Phase 2 —
the architecture enforces the ownership model, it doesn't override it.

**Tools used:**
- Claude Code for spec generation (provide context docs, get structured specs back)
- Engineering review (`/plan-eng-review` from [gstack](https://github.com/garrytan/gstack)) for pressure testing specs

**GAMUT example:** 10 architecture specs, 6,500+ lines total

**Time:** 1-2 days (highly parallelizable)

---

## Phase 4: Operational Playbooks

**Purpose:** Document every human workflow the platform supports. Playbooks are the
"what actually happens" layer — they sit between strategy (Phase 1-2) and
implementation (Phase 5-6).

**What you produce:**
- Step-by-step operational playbooks for every workflow
- Each playbook maps to agent automation (what the agent does vs what the human does)
- Specific thresholds, timelines, and decision trees
- Energy flow checks per workflow (does this circulate or extract?)

**Playbook structure:**
```
Title + Audience
Trigger (what starts this workflow)
Steps (numbered, specific, actionable)
Decision points (if X, do Y; if Z, do W)
Thresholds (at what numbers do actions change)
Escalation path (when does a human get involved)
Energy flow check (does this serve the participant or the platform?)
Completion criteria (how do you know it's done)
```

**Key principle:** If you can't write the playbook, you don't understand the operation
well enough to automate it. Playbooks are pre-automation documentation. If the playbook
is extractive, the agent will be extractive at scale.

**GAMUT example:** 9 operational playbooks (supply chain, onboarding, marketing,
billing failure, low-velocity response, creative ops, amplifier program, GTM, contingency)

**Time:** 1-2 days (often runs in parallel with Phase 3)

---

## Phase 5: Platform Prototype

**Purpose:** Build a working prototype that demonstrates the product without
requiring live infrastructure. Demo mode proves the UX before you connect real data.

**Method:**
1. Define a typed schema (this IS your database, even before the database exists)
2. Create a DataSource adapter interface (demo data and live data implement the same interface)
3. Build the UI against the interface (components never know if data is real or demo)
4. Use lifecycle-aware rendering (components adapt to the user's phase)
5. Write tests against the interface (tests work in both modes)
6. Carry the frequency (the prototype reflects the community it serves, not generic SaaS)

```
DATA SOURCE ADAPTER PATTERN
────────────────────────────────────────────
              DataSource Interface
             /                    \
    DemoDataSource          SupabaseDataSource
    (hardcoded data)        (real queries + RLS)
             \                    /
              Components use interface
              (don't know which source)

Toggle: NEXT_PUBLIC_DATA_SOURCE=demo|supabase
Demo mode stays permanently available.
```

**Key principle:** Demo mode is not a shortcut — it's a permanent feature.
Sales demos, testing, onboarding walkthroughs, and development all use demo mode.
You never lose it. The prototype should resonate with the community it was built
for — someone from that community should look at it and say "that's for me"
before reading any documentation.

**What you produce:**
- Working dashboard (creator + operator views)
- Public pages (if applicable)
- Auth flow (even if using magic link stub)
- Typed schema (Supabase types or equivalent)
- Test suite (unit + component)
- Design system (tokens, components, patterns)

**Tools used:**
- Claude Code for rapid UI generation
- Design consultation (`/design-consultation` from [gstack](https://github.com/garrytan/gstack)) for establishing the design system before building — typography, color, spacing, motion. Can run in parallel with early prototype work
- Design review (`/plan-design-review` from [gstack](https://github.com/garrytan/gstack)) for designer's eye audit of the prototype once it's standing
- Browser (`/browse` from [gstack](https://github.com/garrytan/gstack)) for visually verifying the prototype as you build
- Vitest + React Testing Library for test suite

**GAMUT example:** Next.js 15 app with 4 lifecycle phases, role-based views,
public pages (opportunities board, fund dashboard), 28 passing tests

**Time:** 1-2 days

---

## Phase 6: Technical Spine Hardening

**Purpose:** Pressure-test the architecture from Phase 3 against the prototype
from Phase 5. Identify gaps, resolve open questions, and produce implementation-ready
specs for the engineer who will build it.

**Method:** Use `/plan-eng-review` (from [gstack](https://github.com/garrytan/gstack)) across 5 domains:
1. Agentic Architecture & Orchestration
2. Tool Design & Integration
3. Configuration & Workflows
4. Prompt Engineering & Structured Output
5. Context Management & Reliability

Plus the **extraction review** domain:
6. Ownership & Control Verification (does the implementation match the ownership
   decisions? are there lock-in patterns? data portability gaps? exit friction?)

**The eng review process:**
```
Step 0: Scope Challenge
  → What already exists? What's the minimum change set?
  → Complexity check (>8 files or >2 new classes = smell)

Section 1: Architecture Review (up to 8 issues)
  → Each issue: options, recommendation, reasoning
  → Resolve before moving on

Section 2: Code Quality Review
  → DRY violations, error handling, organization
  → Resolve before moving on

Section 3: Test Review
  → Diagram ALL codepaths and branching
  → Verify test coverage for each
  → Resolve before moving on

Section 4: Performance Review
  → Scaling, rate limits, token costs, caching
  → Resolve before moving on

Section 5: Extraction Review
  → Data portability, exit automation, ownership enforcement
  → Resolve before moving on

Output: Failure modes, NOT-in-scope, TODOs
```

**What you produce:**
- Agent Implementation Spec (lifecycle, queues, events, fallbacks)
- Tool Registry (typed schemas for every tool agents can call)
- Prompt & Output Spec (system prompts, Zod schemas, eval framework)
- Engineering CLAUDE.md (the "Day 1" doc for whoever builds it)
- Code quality improvements (DRY refactors, adapter patterns)
- Ownership enforcement spec (if extraction gaps found)

**Additional tools for this phase:**
- Code review (`/review` from [gstack](https://github.com/garrytan/gstack)) for structural audit of the prototype code — race conditions, trust boundaries, missing invariants
- QA (`/qa` from [gstack](https://github.com/garrytan/gstack)) for systematic testing of the running prototype — health score, screenshots, repro steps
- Design QA (`/qa-design-review` from [gstack](https://github.com/garrytan/gstack)) for iteratively fixing visual issues with before/after verification

**Key principle:** The eng review is interactive — every issue gets options,
a recommendation, and your decision. The output reflects YOUR decisions, not
generic best practices.

**GAMUT example:** 22 issues resolved, 5 critical failure gaps identified and
fixed, 4 major deliverables produced (agent spec, MCP registry, prompt spec,
engineering guide)

**Time:** 2-4 hours (intensive, interactive)

---

## Phase 7: Handoff & Packaging

**Purpose:** Make it so someone can clone the repo and start building on Day 1
without a single meeting. Make it so the community this serves can operate
independently.

**What you produce:**
1. **README** — orientation, stack, who this serves, how to run
2. **Review Brief** — structured onboarding (read order, what to review, feedback template,
   ownership model summary so new builders don't accidentally introduce extraction)
3. **Project Tracker** — every work item with context packets
4. **Engineering CLAUDE.md** — code conventions, patterns, ownership patterns, test expectations
5. **GitHub repo** — clean commit history, no sensitive files

**Context packets per work item:**
```
What to do:         Step-by-step actions
Read first:         Exact file paths to specs and docs
Files to touch:     What will be created or modified
Dependencies:       What must be done first (done/blocker status)
Acceptance criteria: How to verify it's complete
Note:               Warnings, timing, upstream decisions
```

**Tools for this phase:**
- Ship (`/ship` from [gstack](https://github.com/garrytan/gstack)) for the last mile — sync main, run tests, push, open PR
- Document release (`/document-release` from [gstack](https://github.com/garrytan/gstack)) for syncing README, CHANGELOG, and guides to match what shipped
- Retro (`/retro` from [gstack](https://github.com/garrytan/gstack)) for engineering retrospective — feeds into `/fw-diagnostic`

**Key principle:** A TODO without context is worse than no TODO. Every work item
should be startable without asking questions. And the coherence test is not just
"can an engineer build from this" — it's "can the community this serves achieve
independence through this system?"

**GAMUT example:** 75+ work items with full context packets, visual card grid
dashboard, side panel drill-down, review brief with structured feedback template

**Time:** Half a day

---

## The Full Artifact Map

```
Phase 1: Governance
├── Business model
├── Energy source identification
├── Ownership & control structure
├── Rate structure
├── Fund governance
├── Agreement template
├── Exit guarantee
└── Verification protocol

Phase 2: Pressure Testing
├── Dilemmas identified (including mandatory ownership dilemma)
├── Decision records (with reasoning and coherence impact)
└── Extraction risks documented

Phase 3: Architecture
├── Data isolation spec (with ownership enforcement)
├── Financial validation spec
├── Health monitoring spec
├── Sync model spec
├── API registry spec
├── Observability spec
├── Dashboard IA spec
├── Agent operations spec
└── Feature-specific specs

Phase 4: Playbooks
├── Onboarding playbook
├── Supply chain playbook
├── Marketing playbook
├── Billing failure playbook
├── Low-velocity response playbook
├── Creative operations playbook
└── [Domain-specific playbooks]
(Each with energy flow check)

Phase 5: Prototype
├── Typed schema (database types with ownership fields)
├── DataSource adapter
├── Dashboard UI (lifecycle-aware, frequency-carrying)
├── Public pages
├── Test suite
└── Design system

Phase 6: Technical Spine
├── Agent implementation spec
├── Tool registry (MCP/API schemas)
├── Prompt & output spec
├── Engineering guide
├── Code quality fixes
└── Ownership enforcement spec (if needed)

Phase 7: Handoff
├── README (including who this serves)
├── Review brief (including ownership model summary)
├── Project tracker + context packets
└── GitHub repo (clean, push-ready)
```

---

## How This Becomes an Agent

Each phase can be encoded as an agent workflow:

**Phase 1 Agent: Governance Builder**
```
Input:  Product idea + target market + revenue model sketch
Tools:  Document generation, cross-reference checking
Output: Business model, energy source ID, ownership structure,
        rate structure, fund governance, agreement template, exit guarantee
Guard:  All gate items present + extraction check passed
```

**Phase 2 Agent: Strategic Pressure Tester**
```
Input:  Phase 1 artifacts
Tools:  CEO review prompts, dilemma identification
Output: List of dilemmas, decision records with reasoning + coherence impact
Guard:  All dilemmas resolved, ownership dilemma addressed
```

**Phase 3 Agent: Architecture Specifier**
```
Input:  Phase 1-2 artifacts + domain requirements
Tools:  Spec generation, schema design, state machine design
Output: Complete architecture specs with diagrams, ownership sections, and acceptance criteria
Guard:  Cross-reference consistency check + ownership model implemented
```

**Phase 4 Agent: Playbook Writer**
```
Input:  Phase 1-3 artifacts
Tools:  Workflow documentation, threshold definition
Output: Operational playbooks with agent automation mapping + energy flow checks
Guard:  Every workflow maps to either agent or human owner, no extractive workflows
```

**Phase 5 Agent: Prototype Builder**
```
Input:  Phase 3 specs (schemas, IA, component specs)
Tools:  Code generation, test generation, design system
Output: Working prototype with demo data, typed schema, test suite
Guard:  All tests pass, demo mode functional, frequency carried
```

**Phase 6 Agent: Architecture Hardener**
```
Input:  Phase 3 specs + Phase 5 prototype
Tools:  Eng review prompts, gap analysis, failure mode analysis
Output: Implementation specs, tool registry, prompt specs, engineering guide,
        ownership enforcement spec
Guard:  All critical gaps addressed, extraction review complete
```

**Phase 7 Agent: Handoff Packager**
```
Input:  All previous phase artifacts
Tools:  README generation, context packet assembly, project tracking
Output: Complete handoff package (README, review brief, tracker, repo)
Guard:  Technical coherence + cultural coherence verified
```

---

## What Makes This Different

**Traditional approach:**
```
Idea → Wireframes → Hire engineer → Start building → Discover gaps →
Rewrite → Argue about architecture → Ship something → Pray
```

**This methodology:**
```
Idea → Govern → Pressure test → Specify everything → Write playbooks →
Prototype with demo data → Harden the spine → Package for handoff →
Engineer builds from specs, not meetings
```

The difference: by the time anyone writes production code, every decision is
made, every edge case is documented, every workflow is specified, and a working
prototype proves the UX. The engineer's job is implementation, not architecture.

**The deeper difference:** most build processes are culturally neutral — which in
practice means they default to extraction. This methodology carries the Cultural
Physics question through every phase: whose energy powers this, and who controls
the current? By the time someone builds from this handoff, the ownership model
is locked into the architecture, the extraction checks are documented, and
introducing extraction would require overriding explicit decisions.

**Collaboration value:** When you show up with this methodology, you're not bringing
an idea. You're bringing a system. The person on the other side of the table sees
that you've already done the hard thinking — they just need to execute.

---

## Metrics (GAMUT as proof)

| Metric | Value |
|--------|-------|
| Idea to handoff-ready | 4 days |
| Architecture specs produced | 10 (6,500+ lines) |
| Operational playbooks | 9 (3,500+ lines) |
| Strategic decisions resolved | 7 |
| Platform prototype | Working dashboard (28 tests passing) |
| Agent tasks specified | 53 (18 automated + 35 LLM-assisted) |
| Work items tracked | 75+ with full context packets |
| Prompts + schemas defined | 35 system prompts + Zod schemas |
| Critical gaps found and fixed | 5 |
| Lines of specification | 36,000+ |

---

## Cultural Physics in Practice: GAMUT

GAMUT is creator commerce infrastructure — a system that gives established creators
the operational layer to sell physical products at national retail scale. Here's how
the Cultural Physics concepts map to specific GAMUT artifacts:

**Extraction check → CMAP rate structure (9/3/3 split)**
The rate structure puts the largest share (9%) with the creator — the person
generating the energy. The Cultural Marketing Fund (3%) is governed so marketing
spend benefits the creator's brand, not the platform. The extraction check would
have surfaced this as the structural mechanism that ensures creators control their
commerce current.

**Ownership dilemma → "Partner, not a dependency"**
The most consequential decision in Phase 2 was resolving that creators' operations
are self-contained. If the platform disappeared, the creator's supply chain, retail
relationships, and brand would survive. This is the conduit-vs-container question
answered explicitly: GAMUT builds conduits.

**Exit guarantee → Clean exit as coherence proof**
The exit guarantee was produced in Phase 1 — creators leave with their data,
relationships, supplier contacts, and economic history. In extraction systems, exit
is punitive. In GAMUT, exit is clean. This single artifact is the clearest signal
of whether the system serves or extracts.

**Energy flow checks → Playbook design**
The 9 operational playbooks were designed so creators retain control at every step.
The onboarding playbook doesn't lock creators into proprietary tools. The supply
chain playbook doesn't create dependencies on GAMUT-only vendors. Each workflow
circulates energy rather than capturing it.

These mappings validate that the Cultural Physics concepts aren't theoretical —
they produce specific, testable artifacts that structurally prevent extraction.

---

## Living Document

This methodology evolves. After each project, update:
- New patterns discovered
- Phase timings (what took longer/shorter than expected)
- Tool effectiveness (which Claude Code skills were most valuable)
- Agent encoding progress (which phases have been automated)
- Cultural Physics learnings (did the extraction checks work? what slipped through?)
