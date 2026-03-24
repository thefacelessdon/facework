---
name: decision-log
version: 1.0.0
description: |
  Capture strategic and technical decisions with clear rationale and implications.
  Use when resolving dilemmas, changing direction, or preventing repeated
  re-litigation of previously solved questions.
  Trigger phrases: "decide this", "document decision", "we keep re-arguing",
  "choose between options", "lock direction", "decision record".
  User-style cues: "pilot vs beta confusion", "faulty thinking", "not backward-looking",
  "current ways of working", "what should we lock now".
  Do NOT trigger when: user explicitly asks for direct implementation, debugging,
  or release execution without unresolved strategic choices.
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

# /decision-log

Turn ambiguous choices into durable decisions.

## Steps
1. Define the decision question and constraints.
2. Record options considered and why one path wins.
3. Capture tradeoffs, risks, and downstream implications.
4. Note review trigger conditions (what evidence would reopen this decision).

## Output
- `Decision statement`
- `Rationale`
- `Tradeoffs`
- `Implications`
- `Revisit trigger`
