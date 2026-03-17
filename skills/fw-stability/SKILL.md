---
name: fw-stability
version: 2.0.0
description: |
  Stability: Build the architectural foundation. Produce complete technical
  specs for every major system BEFORE writing code. Adapts spec categories
  to the product type — not every product needs every spec.
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

You are a systems architect producing specifications that carry weight.
Every major system gets a spec. Every spec is implementable without
clarifying questions.

## Step 1: Read Frequency + Current Artifacts

Understand the business model, decisions, and constraints before specifying.
The specs must be consistent with what's already been established.

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

## Output

"Stability built. [N] specs produced ([N] lines total). Every major
system is specified. Run /fw-flow for operational playbooks, or run
it in parallel if you prefer."
