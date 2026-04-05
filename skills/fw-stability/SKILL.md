---
name: fw-stability
version: 4.0.0
description: |
  Stability: Phase 5 of the Facework Protocol (with /fw-flow). Build the
  architectural foundation. Produce complete technical specs for every major
  system before writing code. Adapts spec categories to the product type.
  Runs after Strategy Lock (Phase 4), alongside Flow.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
  - Agent
---

# /fw-stability — Build the Foundation

**Phase 5 of the Facework Protocol (Architecture & Flow — with /fw-flow).**
Entry: DecisionLedger and WedgeSpec exist; no unresolved strategic contradictions (Phase 4 gate).
Exit: SystemArchitecture implementable without founder context.
Co-skill: /fw-flow runs alongside this phase to document operational workflows.
Note: For services/methodology businesses, Flow runs BEFORE Stability. For pure
software products, the original order may still apply.

You are a systems architect producing specifications that carry weight.
Every major system gets a spec. Every spec is implementable without
clarifying questions.

## The Cultural Physics Foundation

Stability is the force that doesn't appear in the Cultural Physics equation
by name — it's the infrastructure that makes Flow possible. You can't have
current without a conductor. You can't have flow without architecture.

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Every spec you write either increases the system's capacity for flow (energy
moves freely through well-designed architecture) or increases entropy (energy
gets trapped in poorly designed systems, leaks through edge cases, contradicts
itself across boundaries). A spec that contradicts the business model is entropy.
A spec that assumes an API exists without confirming it is entropy. A spec that
gives the platform control over data the creator should own is entropy.

Stability specs should be evaluated not just for structural soundness but for
whether they build conduits (energy flows through) or containers (energy gets trapped).

## Step 0: Read Existing Artifacts

Before specifying architecture, scan the project for prior work:
- All artifacts from Phases 1–4 (SignalThesis through DecisionLedger)
- Existing architecture docs, system diagrams, or technical specs
- Existing codebase (if any) — read the structure, not just docs about it
- API documentation, integration guides, or dependency registries
- Prior security audits, performance reports, or infrastructure reviews

Read `define/PROJECT-CONTEXT.md` if it exists. Read the `track:` field from its
YAML frontmatter. Adapt depth, spec categories, and CapabilityMap format to the
track (see Track Emphasis below). If it doesn't exist, proceed normally.

Summarize what you found. Do not re-specify systems these artifacts already cover.

### Track Emphasis

The project track determines architectural depth:

| Track | Stability emphasis |
|-------|-------------------|
| Creator | Light — platform-hosted capabilities. Focus on: integration map (which platforms own what), data portability, content ownership. Skip: database schemas, migration sequences. CapabilityMap = integration surface. |
| Cultural Brand | Standard — own site + integrations. CMS spec, commerce integration, community tooling, content pipeline architecture. CapabilityMap = owned + rented capabilities. |
| Athlete / Public Figure | Standard — mixed ownership. Merch fulfillment, content distribution, booking system, endorsement tracking. CapabilityMap = heavy on sovereignty classification. |
| Agency / Studio | Light-to-Standard — methodology > infrastructure. Delivery system spec, client portal requirements, project tracking, reporting. CapabilityMap = delivery capabilities + client-facing tools. |
| Platform / Product | Heavy — full architecture. Database schemas, migration sequence, DataSource contract, event vocabulary, API surface, auth model. CapabilityMap = full capability audit with owned/rented/deferred. |

If no track is set, infer from artifacts and confirm with the user.

## Step 1: Read Frequency + Current Artifacts

Understand the business model, decisions, and constraints before specifying.
The specs must be consistent with what's already been established.

Pay particular attention to the Ownership & Control section of the business model
and any ownership dilemmas resolved in Current. The architecture must implement
the ownership decisions — if creators own their data, the data isolation spec
must enforce that structurally, not just promise it in documentation.

## Step 2: Identify What Needs Specs

Ask the user what's being built technically, then determine which specs apply.
Not every product needs every category:

**Data & Security** (most products need these):
- Data isolation / access control — who can read/write what
- Authentication / authorization model
- Financial validation — if money flows through the system

**Integration** (if connecting to external systems):
- Sync model — source of truth per data type, conflict resolution
- API registry — external services, auth methods, rate limits, confirmed/unconfirmed status
- Observability — alerts, logging, monitoring, runbooks

**Product** (adapt to what's being built):
- Information architecture — screens, views, components, data sources
- Automation / agent operations — if the system has automated behavior
- Domain-specific features — whatever is unique to this product

Use AskUserQuestion: "Based on what you're building, which of these systems
need formal specs?" Recommend based on what Frequency and Current revealed.

## Step 3: Write Each Spec

Every spec follows this structure:
```markdown
---
title: "[System] Specification"
type: Technical Architecture
version: 1.0
status: Working Draft
---

# [System Name]

## Context
What problem this solves. Why this system exists.

## Architecture
How it works. Include ASCII diagrams for:
- Data flow (how information moves between components)
- State machines (if the system has lifecycle states)
- System boundaries (what's inside vs outside this system)

## Data Model
Tables, schemas, types. Use SQL, TypeScript types, or whatever
matches the project's stack. Be precise — these become the
database schema.

## Ownership & Control
Who owns this data? Who can access it? What happens to it
if the participant leaves? This section implements the ownership
decisions from Current at the architectural level.

## Rules & Logic
Business rules with specific values:
  "If X drops below 30, do Y" — not "if X is low, consider Y"
Thresholds, conditions, decision trees. Specific and testable.

## Edge Cases
What can go wrong. For each:
- The scenario
- How it's detected
- How it's handled
- What the user sees

## External Dependencies
APIs, services, third-party systems. For each:
- Auth method
- Key endpoints
- Rate limits (confirmed or estimated)
- Fallback if unavailable

## Acceptance Criteria
How to verify the implementation is correct.
Testable, measurable conditions. Not aspirational.
```

## Step 4: Diagrams

Include ASCII diagrams for any non-trivial:
- State machine (lifecycle states, transitions, guards)
- Data flow (sync pipelines, event flows, processing sequences)
- System topology (queue layout, service architecture)
- Decision tree (threshold logic, branching behavior)

## Step 5: Capability Map

After specs are written, produce a `CapabilityMap` — the contract that
Resonance (Phase 6) will compose interfaces from. This is the bridge
between architecture and working interfaces.

The CapabilityMap declares what the system can do. Every interface built
in Resonance must trace to a declared capability. If a capability doesn't
exist here, Resonance cannot build an interface that depends on it.

**For Platform/Product projects:**
```markdown
# Capability Map

## Owned Capabilities
| Capability | Domain | Status | Contract Surface | Events Emitted |
|-----------|--------|--------|-----------------|----------------|
| e.g. Tenant isolation | Core | Built | RLS via tenant_id | tenant.created |
| e.g. Order processing | Commerce | Specified | create_order RPC | order.placed |

## Rented Capabilities (platform dependencies)
| Capability | Provider | Integration Status | Fallback |
|-----------|----------|-------------------|----------|
| e.g. Payments | Stripe | Connected | Manual invoice |

## Deferred Capabilities (known gaps — backlog for future phases)
| Capability | Why Deferred | What Depends On It |
|-----------|-------------|-------------------|
| e.g. Analytics | Below MVP threshold | Operator dashboard |
```

**For Creator/Brand/Athlete projects:**
```markdown
# Capability Map

## Platform Capabilities (rented — the integration surface)
| Capability | Platform | What It Provides | API/Connection |
|-----------|----------|-----------------|----------------|
| e.g. Product catalog | Shopify | Products, inventory, checkout | Storefront API |
| e.g. Email delivery | ConvertKit | Sequences, broadcasts, subscribers | REST API |

## Owned Capabilities (what you control directly)
| Capability | Where It Lives | What It Provides |
|-----------|---------------|-----------------|
| e.g. Content | Own site / CMS | Portfolio, blog, about |
| e.g. Brand identity | DESIGN.md | Visual system, tone, voice |

## Gaps (no platform covers this yet)
| Need | Options Considered | Decision |
|------|-------------------|----------|
```

**For Agency/Studio projects:**
```markdown
# Capability Map

## Delivery Capabilities (the methodology as infrastructure)
| Capability | Tool/Process | Status |
|-----------|-------------|--------|
| e.g. Intake | Typeform + Notion | Live |
| e.g. Scoping | Internal template | Manual |
| e.g. Delivery tracking | Linear | Live |

## Client-Facing Capabilities
| Capability | Surface | Status |
|-----------|---------|--------|
| e.g. Client portal | Custom app | Needs build |
| e.g. Reporting | Notion export | Manual |
```

The CapabilityMap is a **required artifact** for Phase 5 gate. Resonance
will not produce grounded interfaces without it.

## Step 6: Cross-Reference

- Every rate/threshold traces to canonical source in business model
- No spec contradicts another spec
- External API dependencies listed with confirmed/unconfirmed status
- Edge cases reference the spec that handles them
- Acceptance criteria are testable
- Ownership and control structures in the architecture match the
  decisions made in Frequency and Current — the architecture implements
  the ownership model, it doesn't override it
- CapabilityMap covers every domain referenced in specs

## Output

### Tier 1 — Narrative (shown in conversation)

Present a 5–7 sentence summary: "Here's the architecture and what the system
can do." Cover stack decisions, key specs produced, and the capability surface
(owned vs rented vs deferred). This is what the user reads immediately.

### Tier 2 — Summary Card (written to file)

Write to `define/stability-summary.md`:
- Specs produced (count and names)
- Capability count (owned / rented / deferred)
- Key architecture decisions
- One summary table

### Tier 3 — Machine Artifact (written to file)

Write the full SystemArchitecture + CapabilityMap to `define/stability-specs.md`
with YAML frontmatter:
```yaml
---
artifact: SystemArchitecture
phase: stability
track: [track from PROJECT-CONTEXT.md or "unset"]
version: 1.0
status: Working Draft
---
```

Close with: "Stability built. [N] specs produced ([N] lines total). CapabilityMap
declares [N] capabilities ([N] owned, [N] rented, [N] deferred).
Every major system is specified. Run /fw-flow for operational playbooks,
or run it in parallel if you prefer. Run /fw-resonance to compose
interfaces from declared capabilities."
