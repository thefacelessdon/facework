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

Summarize what you found. Do not re-specify systems these artifacts already cover.

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

## Step 5: Cross-Reference

- Every rate/threshold traces to canonical source in business model
- No spec contradicts another spec
- External API dependencies listed with confirmed/unconfirmed status
- Edge cases reference the spec that handles them
- Acceptance criteria are testable
- Ownership and control structures in the architecture match the
  decisions made in Frequency and Current — the architecture implements
  the ownership model, it doesn't override it

## Output

"Stability built. [N] specs produced ([N] lines total). Every major
system is specified. Run /fw-flow for operational playbooks, or run
it in parallel if you prefer."
