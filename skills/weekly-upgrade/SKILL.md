---
name: weekly-upgrade
version: 1.0.0
description: |
  Convert weekly learnings into system upgrades across rules, commands, and skills.
  Use in retrospectives to evolve operating quality over time.
  Trigger phrases: "weekly retro", "what should we improve", "system upgrade",
  "what to keep/fix/remove", "process improvements this week".
  User-style cues: "please do", "go for it", "lets do it", "what else can I do",
  "make workflow better".
  Do NOT trigger when: user asks for immediate one-off fixes, fresh MVP scoping,
  or release-day go/no-go checks.
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

# /weekly-upgrade

Run a weekly system upgrade loop: learn -> decide -> codify.

## Steps
1. Review what shipped, what slipped, and what repeated.
2. Extract three patterns: win, failure, friction.
3. Promote one pattern into a reusable artifact.
4. Remove one stale or low-signal process artifact.
5. Define one experiment for next week.

## Output
- `Keep`
- `Fix`
- `Promote`
- `Remove`
- `Next-week experiment`
