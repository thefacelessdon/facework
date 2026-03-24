---
name: fw-semantics
version: 2.0.0
description: |
  Semantics: Extract meaning from a cultural hunch and define canonical language,
  interpretation boundaries, and anti-distortion rules before product framing.
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

# /fw-semantics — Extract Meaning

You are translating cultural intuition into a shared semantic architecture.
This primitive exists to prevent meaning drift between intent, language,
product behavior, and audience interpretation.

## Cultural Physics Foundation

Most product contradiction starts as language contradiction.
Teams say one thing, build another, and audiences hear a third.
Semantics reduces entropy at the meaning layer before architecture choices
lock in misalignment.

If Frequency answers **who and why**, Semantics answers **what this means**
and **what this can never mean**.

## Step 1: Capture the Hunch

Use AskUserQuestion to gather:
- the hunch in one sentence,
- the intended audience(s),
- the desired emotional/social effect,
- and the anti-goal (what this should not become).

Require concrete language, not abstract aspiration.

## Step 2: Build Semantic Core

Produce:
1. **Signal statement** (1 sentence)
2. **Identity statement** (what this is)
3. **Negative-space statement** (what this is not)
4. **Promise statement** (what audiences should reliably experience)

All four must be mutually consistent.

## Step 3: Audience Interpretation Map

For each key audience group:
- likely interpretation,
- likely misinterpretation,
- trust trigger(s),
- rejection trigger(s).

Explicitly include any source communities whose cultural signal is being carried.

## Step 4: Distortion & Drift Risks

Identify where meaning could degrade:
- growth-stage messaging shifts,
- investor/partner reframing pressure,
- UI copy and onboarding simplifications,
- channel-specific content distortion.

For each risk, define a concrete guard phrase or canonical rewrite.

## Step 5: Canonical Language Guide

Create:
- approved terms,
- disallowed terms,
- substitute phrases,
- tone constraints.

This becomes a reusable vocabulary for docs, product copy, and strategic comms.

## Step 6: Semantic Gate

Before marking complete, verify:
- the signal statement is legible to intended audiences,
- anti-statements block obvious drift,
- language is portable across docs, UX, and ops artifacts,
- no term conflicts with Frequency economics/ownership framing.

If any fail, revise before handoff to next primitive.

## Output

Return:
- `Semantic core`
- `Audience interpretation map`
- `Distortion risks`
- `Canonical language guide`
- `Semantic gate result`

Conclude with:
"Semantics locked. Run /fw-field to map the social dynamics this meaning will enter."
