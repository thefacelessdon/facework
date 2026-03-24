---
name: launch-ops
version: 1.0.0
description: |
  Execute a high-velocity launch flow from readiness check to post-release verification.
  Use when preparing to ship, coordinating release steps, and validating health
  immediately after launch.
  Trigger phrases: "ship this", "launch today", "release checklist",
  "go live", "post-release check", "launch coordination".
  User-style cues: "ready to handoff", "ready to ship", "what is left before release",
  "can we move now".
  Do NOT trigger when: user is still defining MVP scope, resolving major architecture
  uncertainty, or debugging unresolved critical defects.
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

# /launch-ops

Ship with confidence and immediate post-release evidence.

## Steps
1. Confirm release scope and stage criteria.
2. Run critical validation checks and tests.
3. Execute release sequence with explicit checkpoints.
4. Verify post-release health and user-critical flows.
5. Capture launch notes and follow-up actions.

## Output
- `Launch readiness`
- `Checks executed`
- `Release result`
- `Post-release health`
- `Follow-ups`
