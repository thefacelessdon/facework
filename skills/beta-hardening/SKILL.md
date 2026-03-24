---
name: beta-hardening
version: 1.0.0
description: |
  Harden an MVP into beta-ready reliability and observability.
  Use when moving from MVP to beta, reducing breakage risk, or validating
  operational confidence before broader rollout.
  Trigger phrases: "beta readiness", "harden this", "stability pass",
  "add observability", "reduce breakage", "before wider rollout".
  User-style cues: "potential bugs and discrepancies", "mixed up code state",
  "not connected to a database", "going in circles", "this feels off".
  Do NOT trigger when: user only wants MVP scope reduction, decision logging,
  or a launch command sequence without reliability analysis.
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

# /beta-hardening

Convert working features into stable beta systems.

## Steps
1. Identify fragility points (data, state, integrations, error handling).
2. Add or tighten observability and explicit failure modes.
3. Validate user-critical flows end to end.
4. Add regression checks for highest-risk branches.
5. Document beta readiness and open risks.

## Output
- `Hardening findings`
- `Stability upgrades`
- `Observability upgrades`
- `Residual risks`
- `Beta readiness verdict`
