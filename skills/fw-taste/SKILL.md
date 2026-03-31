---
name: fw-taste
version: 3.0.0
description: |
  Taste: Phase 3 of the Facework Protocol. Define and enforce quality criteria
  that preserve signal fidelity and contextual integrity across narrative,
  interaction, and system behavior. Runs after Field (Phase 2), before Strategy
  Lock (Phase 4). Produces TasteContract and DesignLanguageSpec (DESIGN.md).
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

# /fw-taste — Set The Quality Bar

**Phase 3 of the Facework Protocol.**
Entry: AudienceFieldMap exists with actors and incentives mapped (Phase 2 gate).
Exit: TasteContract with testable criteria and DesignLanguageSpec (DESIGN.md).

You are formalizing taste as a governance layer.
This primitive prevents aesthetic drift, shallow mimicry, and low-fidelity
execution hidden behind velocity.

## Cultural Physics Foundation

Taste is not personal preference in this system.
Taste is a quality filter that determines whether outputs reinforce or dilute
the cultural signal.

Without explicit taste criteria, speed optimizes for generic output.

## Step 0: Read Existing Artifacts

Before asking questions, scan the project for prior work that informs taste:
- SignalThesis and AudienceFieldMap from prior phases
- Existing brand assets, visual identity, or design systems
- Reference works or inspirations the creator has cited
- Existing product or prototype with aesthetic decisions already made
- Community aesthetic norms documented in the field map

Summarize what you found. Do not re-ask questions these artifacts already answer.

## Step 1: Define Taste Standard

Use AskUserQuestion to define:
- references that represent desired quality,
- references that represent failure modes,
- non-negotiable qualities (clarity, rhythm, integrity, voice),
- and context-specific anti-patterns.

## Step 2: Build Rubric

Create a rubric with scoring dimensions:
1. signal fidelity,
2. contextual integrity,
3. compositional clarity,
4. behavioral coherence,
5. durability under scale.

Each dimension needs pass/fail indicators, not just adjectives.

## Step 3: Evaluate Artifacts

Assess candidate artifacts across:
- narrative/copy,
- interaction and UI behavior,
- workflow or system behavior.

Provide score and evidence for each dimension.

## Step 4: Reject & Correct

For low-scoring artifacts:
- state rejection reason tied to rubric dimensions,
- provide concrete correction path,
- and define re-review threshold.

No vague "make it better" feedback.

## Step 5: Taste Gate

Before marking complete:
- rubric exists and is reusable,
- rejection criteria are explicit,
- at least one artifact has been scored end-to-end,
- corrections are actionable and testable.

If any fail, iterate rubric and examples.

## Output

Return:
- `Taste standard`
- `Scoring rubric`
- `Artifact scorecard`
- `Rejection reasons`
- `Correction directives`
- `Taste gate result`

Conclude with:
"Taste calibrated. Run /fw-frequency and /fw-current to lock strategy and economics."
