---
name: fw-taste
version: 2.0.0
description: |
  Taste: Define and enforce quality criteria that preserve signal fidelity and
  contextual integrity across narrative, interaction, and system behavior.
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

You are formalizing taste as a governance layer.
This primitive prevents aesthetic drift, shallow mimicry, and low-fidelity
execution hidden behind velocity.

## Cultural Physics Foundation

Taste is not personal preference in this system.
Taste is a quality filter that determines whether outputs reinforce or dilute
the cultural signal.

Without explicit taste criteria, speed optimizes for generic output.

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
"Taste calibrated. Run /fw-consonance to ensure this quality holds across system layers."
