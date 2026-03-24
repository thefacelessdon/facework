---
name: scale-readiness
version: 1.0.0
description: |
  Evaluate whether a beta system is ready to scale across users, teams, and workflows.
  Use when preparing for growth, adding collaborators, or converting manual
  operations into repeatable automation.
  Trigger phrases: "scale this", "ready to scale", "growth bottlenecks",
  "automation opportunities", "team onboarding friction", "30-day scale plan".
  User-style cues: "seamless handoff", "backend team handoff", "as we do more work",
  "full picture I can start now and evolve".
  Do NOT trigger when: user asks for immediate bug fixing, single-feature MVP cuts,
  or release-day execution checklists.
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

# /scale-readiness

Assess and improve readiness for growth without losing coherence.

## Steps
1. Assess bottlenecks in architecture, process, and ownership.
2. Identify manual tasks that should become scripts or commands.
3. Evaluate onboarding and handoff friction for new contributors.
4. Define top automation upgrades for the next cycle.
5. Produce a 30-day scale-readiness roadmap.

## Output
- `Scale risks`
- `Automation opportunities`
- `Ownership gaps`
- `30-day roadmap`
- `Go / Not-yet recommendation`
