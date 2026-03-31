---
name: fw-intake
version: 1.0.0
description: |
  Intake: Phase 0 of the Facework Protocol. Capture the hunch, context,
  constraints, and assets before the protocol begins. Scans for existing
  artifacts and prior work. Produces an IntakeRecord. Gates on an explicit,
  bounded problem/opportunity statement.
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

# /fw-intake — Capture Context Before the Protocol Begins

**Phase 0 of the Facework Protocol.**

You are setting the foundation for a protocol run. Before any meaning is
extracted, any field is mapped, or any economics are modeled, the project's
existing context must be understood. Intake prevents the protocol from
re-asking questions that prior work has already answered.

## Cultural Physics Foundation

Every protocol run enters a field that is not empty. There are existing
documents, brand assets, restructure notes, prior specs, half-built
prototypes, and accumulated decisions. Ignoring this prior work creates
entropy — the protocol asks questions that have answers, produces artifacts
that contradict existing ones, and wastes the energy of the person running it.

Intake is the force that prevents cold-start entropy. It reads the room
before speaking.

## Step 0: Read Existing Artifacts

Before asking any questions, scan the project directory for prior work:

- README, CLAUDE.md, DESIGN.md, or equivalent orientation docs
- Brand guidelines, style guides, visual identity assets
- Prior specs, architecture docs, or technical documentation
- Decision records or strategy documents
- Existing prototypes, deployed sites, or codebases
- Business plans, pitch decks, or financial models
- Restructure notes, meeting notes, or brainstorm docs

Read what exists. Summarize what you found. Do not ask questions that
the existing artifacts already answer.

## Step 1: Confirm the Target

Use AskUserQuestion:

**"What project are we running the protocol on?"**
- Project name
- Working directory (confirm or establish)
- Is this a new project or does prior work exist?

**"What is the hunch?"**
- The core idea, opportunity, or problem in one sentence
- Why now? What changed or what was noticed?

## Step 2: Understand the Context

Use AskUserQuestion to gather what Step 0 didn't already answer:

**"Who is involved?"**
- Team composition (solo founder, team, collaborators)
- Who makes final decisions?
- Who builds? (human, agent, both — what's the operating model?)

**"What constraints exist?"**
- Timeline pressure or deadlines
- Budget or resource limits
- Technical constraints (existing stack, platform requirements)
- Regulatory, legal, or compliance requirements
- Dependencies on external parties

**"What assets already exist?"**
- Existing brand, audience, community, reputation
- Existing code, designs, or infrastructure
- Existing relationships (partners, customers, distribution)
- Prior protocol runs or methodology artifacts

## Step 3: Scope the Run

Determine which phases the project needs:

- **Full run (Phases 0–9):** New project, no prior protocol work
- **Partial run:** Prior phases completed, resuming from a specific phase
- **Targeted run:** Specific phase needed (e.g., just Entropy review)

If prior protocol artifacts exist, verify they're still current. Stale
artifacts are worse than no artifacts — they create false confidence.

## Step 4: Produce the IntakeRecord

Write the IntakeRecord to the project's ops directory:

```markdown
# IntakeRecord

## Project
- Name: [project name]
- Working directory: [path]
- Date: [date]

## The Hunch
[One sentence — the core opportunity or problem]

## Context
[Why now. What changed. What was noticed.]

## Team
[Who is involved, who decides, who builds]

## Existing Assets
[What already exists — docs, code, brand, audience, relationships]

## Constraints
[Timeline, budget, technical, regulatory, dependencies]

## Prior Work Summary
[What was found in Step 0 — existing artifacts and their relevance]

## Protocol Scope
[Full run / partial / targeted — and which phases]

## Problem/Opportunity Statement
[Explicit and bounded — this is the gate]
```

## Step 5: Intake Gate

Before marking complete, verify:

- The problem/opportunity statement is explicit (not vague aspiration)
- The problem/opportunity statement is bounded (has edges, not "everything")
- Existing artifacts have been read and summarized
- Team composition and decision authority are clear
- Constraints are documented (even if the constraint is "none")
- Protocol scope is determined

If the problem/opportunity statement is vague or unbounded, push back.
"Make something cool" is not a bounded statement. "Build a platform for
independent musicians to sell directly to fans" is.

## Output

Tell the user what was captured, what existing artifacts were found, and:

"Intake complete. Context captured, prior work reviewed. Run /fw-semantics
to extract meaning from the hunch and define canonical language."
