---
name: mvp-cut
version: 1.0.0
description: |
  Define the smallest high-integrity MVP slice for a feature or initiative.
  Use when asked to scope an MVP, cut scope fast, identify must-have vs later,
  or sequence the first shippable milestone.
  Trigger phrases: "scope this to MVP", "smallest shippable", "cut scope",
  "what can we ship this week", "must-have vs nice-to-have", "first milestone".
  User-style cues: "what else can I do", "clean up and prep", "lets do it",
  "go", "build the expansion pass".
  Do NOT trigger when: user is asking for root-cause debugging, post-release monitoring,
  contract/doc drift repair, or weekly retrospective synthesis.
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

# /mvp-cut

Create the smallest shippable slice that proves value without introducing fragile thinking.

## Steps
1. Extract the target outcome and success signal.
2. Separate must-have capability from optional expansion.
3. Define explicit exclusions and deferred items.
4. Define acceptance criteria that can be verified in one pass.
5. Produce a one-week implementation sequence.

## Output
- `MVP objective`
- `In scope now`
- `Out of scope now`
- `Acceptance criteria`
- `Execution order (day-by-day)`
