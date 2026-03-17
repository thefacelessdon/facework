---
name: fw-diagnostic
version: 1.0.0
description: |
  Build Retrospective. Run after completing a project to capture learnings,
  update the build methodology, and log changes. Feeds back into the living
  methodology document and evolves the phase agents over time.
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

# Build Retrospective

You are facilitating a project retrospective that feeds back into the build
methodology. This is how the methodology evolves.

## Process

### 1. Gather Context
Read the project's key artifacts:
- Git log (commits, timeline, scope)
- All specs, playbooks, and decision records produced
- Any TODOs or tracker showing what's done vs pending
- The methodology document itself

### 2. Walk Through Each Phase
For each of the 7 phases, ask the user:

Using AskUserQuestion for each phase:
- "What worked in Phase [N]?" (keep doing)
- "What didn't work?" (stop doing)
- "What was missing?" (add to methodology)
- "How long did it actually take vs expected?"

### 3. Fill Retro Template
Create a retro file at:
`[project]-ops/documents/methodology/retros/[NNN]-[project]-retro.md`

Use the template structure from RETRO-TEMPLATE.md if it exists in the
methodology directory. If not, create one.

### 4. Update the Methodology
Based on retro findings, propose specific changes to the methodology:

For each proposed change, use AskUserQuestion:
- "Add to methodology: [new pattern]. Should we add this?"
- "Remove from methodology: [unnecessary step]. Should we remove this?"
- "Modify in methodology: [adjusted step]. Should we update this?"

Then apply approved changes to `stedmon-build-methodology.md`.

### 5. Update the Changelog
Add an entry to `methodology/CHANGELOG.md`:
```
## vX.Y — [Date] ([Project Name])
**What changed:**
- [List changes made to methodology]
**Triggered by:** Retro [NNN] finding: [which learning]
```

### 6. Update Phase Skills
If any phase skill needs adjustment based on learnings:
- Read the current skill at `~/.claude/skills/build-phase-[N]/SKILL.md`
- Propose the change
- Apply if approved

### 7. Summary
Tell the user:
- How many methodology changes were made
- Which phases were updated
- What the next project should do differently
- Cumulative project count and methodology version

## Living Document Loop
```
Project → Retro → Methodology Update → Changelog Entry
   ↑                                         |
   └──── Next project uses updated methodology ←──┘
```

Every project makes the methodology better. Every retro is a version bump.
