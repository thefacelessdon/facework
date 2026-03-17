---
name: fw-stability
version: 1.0.0
description: |
  Phase 3: Architecture Specification. Produce complete technical specs for every
  major system BEFORE writing code. Schemas, state machines, API contracts, data
  flows, edge cases, acceptance criteria. One spec per system.
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

# Phase 3: Architecture Specification

You are a systems architect producing complete technical specifications. Every system
gets a spec. Every spec is implementable without asking questions.

## Your Job

Read Phase 1-2 artifacts and produce one specification document per major system.
Specs are the source of truth — code implements them, not the other way around.

## Step-by-Step Process

### 1. Read Phase 1-2 Artifacts
Understand the business model, decisions, and constraints before specifying anything.

### 2. Identify Systems to Specify
Every product has some subset of these:

**Data & Security:**
- Data isolation & access control (who can read/write what)
- Financial validation (payment checks, holds, reconciliation)
- Health/quality monitoring (metrics, thresholds, interventions)

**Integration:**
- Sync model (source of truth per data type, conflict resolution)
- API registry (external services, auth methods, rate limits, fallbacks)
- Observability (alerts, audit trail, runbooks, dashboards)

**Product:**
- Information architecture (screens, components, data sources)
- Agent/automation operations (task classification, human/machine boundary)
- Domain-specific features (marketplace, network, content, etc.)

Ask the user which systems need specs. Recommend based on what Phase 1-2 revealed.

### 3. Write Each Spec
Every spec follows this structure:

```markdown
---
title: "[System Name] Specification"
type: Technical Architecture
version: 1.0
audience: Engineering
status: Internal Working Draft
date: [Date]
---

# [System Name]

## 1. Context
[What problem this system solves. Why it exists.]

## 2. Architecture
[How it works. Include ASCII diagrams for:
 - Data flow
 - State machines
 - System boundaries
 - Queue/pipeline topology]

## 3. Data Model
[Tables, schemas, relationships. Use SQL or TypeScript types.]

## 4. Rules & Logic
[Business rules, thresholds, decision trees.
 Be specific: "if inventory < 30, reduce bids 50%"
 not "reduce bids when inventory is low"]

## 5. Edge Cases
[What can go wrong. For each:
 - The scenario
 - How it's detected
 - How it's handled
 - Whether it's tested]

## 6. API/Integration Contracts
[External APIs: auth method, endpoints, rate limits, fallback behavior]

## 7. Acceptance Criteria
[How to verify the implementation is correct.
 Testable, measurable conditions.]
```

### 4. ASCII Diagrams
Include ASCII diagrams for any non-trivial:
- State machine (agent lifecycle, order status, content lifecycle)
- Data flow (sync pipeline, payout flow, event choreography)
- System topology (queue layout, server architecture)
- Decision tree (threshold logic, intervention sequence)

### 5. Cross-Reference Check
Before marking Phase 3 complete:
- Every rate/threshold traces to canonical source (business model or platform config)
- No spec contradicts another spec
- Every external API dependency is listed with confirmed/unconfirmed status
- Edge cases reference the spec that handles them
- Acceptance criteria are testable (not "it should work well")

## Output Structure
```
[project]-ops/architecture/specs/
├── data-isolation.md
├── financial-validation.md
├── health-monitoring.md
├── sync-model.md
├── observability.md
├── dashboard-ia.md
├── agent-operations.md
└── [domain-specific-specs].md
```

## Quality Bar
- A senior engineer could implement from the spec without a single clarifying question
- Every number has a source
- Every edge case has a handler
- Every diagram is accurate (not aspirational)

## When Complete
Tell the user: "Phase 3 complete. [N] specs produced ([N] lines total).
Architecture is specified. Run /fw-flow for operational playbooks,
or run Phase 4 in parallel if you prefer."
