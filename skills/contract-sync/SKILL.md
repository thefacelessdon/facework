---
name: contract-sync
version: 1.0.0
description: |
  Keep implementation, API expectations, and documentation contracts aligned.
  Use when features ship fast and docs/contracts risk drifting from behavior.
  Trigger phrases: "sync contracts", "docs are stale", "API drift",
  "code vs docs mismatch", "frontend-backend mismatch", "contract drift".
  User-style cues: "docs may be stale", "discrepancies in defining stages",
  "contract baseline", "readiness mismatch".
  Do NOT trigger when: user asks primarily for architecture redesign,
  launch operations, or open-ended brainstorming without contract artifacts.
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

# /contract-sync

Detect and resolve drift between code behavior and documented contracts.

## Steps
1. Compare source-of-truth contracts to current implementation.
2. Flag mismatches by severity and user impact.
3. Propose the smallest coherent sync patch (code and/or docs).
4. Add one check to prevent the same drift pattern.

## Output
- `Critical drift`
- `Medium drift`
- `Sync patch order`
- `Prevention check`
