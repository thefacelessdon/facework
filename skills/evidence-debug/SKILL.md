---
name: evidence-debug
version: 1.0.0
description: |
  Debug with reproducible evidence and prevention-first closure.
  Use when behavior is unclear, repro is unstable, or fixes are being proposed
  without hard runtime evidence.
  Trigger phrases: "debug this", "issue reproduced", "root cause analysis",
  "need evidence", "can't reproduce reliably", "fix keeps failing".
  User-style cues: "issue reproduced, please proceed", "we are going in circles",
  "this is not a live app", "what is actually broken".
  Do NOT trigger when: user asks for pure planning, contract documentation updates,
  or high-level strategy choices without an active defect symptom.
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

# /evidence-debug

No guesswork. Collect evidence before root cause and fix.

## Steps
1. Define the symptom and expected behavior.
2. Capture reproducible evidence (logs, screenshots, traces, API responses).
3. Identify root-cause candidates ranked by evidence strength.
4. Implement smallest safe fix and verify repro closure.
5. Add a regression check to prevent recurrence.

## Output
- `Evidence captured`
- `Most likely cause`
- `Fix applied`
- `Verification result`
- `Regression prevention`
