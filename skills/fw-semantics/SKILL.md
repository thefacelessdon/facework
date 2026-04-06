---
name: fw-semantics
version: 4.0.0
description: |
  Semantics: Phase 1 of the Facework Protocol. Detect project track, extract
  meaning from a cultural hunch, and define canonical language, interpretation
  boundaries, and anti-distortion rules. First phase. Before Field (Phase 2).
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

**Phase 1 of the Facework Protocol. First phase.**
Entry: A project directory with a hunch, context, or prior work to build from.
Exit: ProjectContext with track detected; SignalThesis with "means" and "does-not-mean" sections; distortion risks documented.

You are translating cultural intuition into a shared semantic architecture.
This primitive exists to prevent meaning drift between intent, language,
product behavior, and audience interpretation.

This phase also handles intake — detecting what kind of project this is so
every subsequent phase knows how to calibrate. It reads what exists, detects
the track, then extracts meaning. One conversation, not two separate skills.

## Cultural Physics Foundation

Most product contradiction starts as language contradiction.
Teams say one thing, build another, and audiences hear a third.
Semantics reduces entropy at the meaning layer before architecture choices
lock in misalignment.

If Frequency answers **who and why**, Semantics answers **what this means**
and **what this can never mean**.

## Step 0: Intake — Read the Room Before Speaking

Before asking any questions, scan the project directory for prior work. This is
how the protocol prevents cold-start entropy — reading what exists before asking
what's missing.

Look for:
- README, CLAUDE.md, DESIGN.md, or equivalent orientation docs
- Brand guidelines, tone documents, style guides, visual identity assets
- Prior naming decisions, glossaries, or terminology docs
- Restructure notes, strategy docs, pitch materials, business plans
- Any existing product copy, marketing materials, or community language
- Prior specs, architecture docs, decision records, or protocol artifacts
- Existing code, deployed sites, or codebases
- package.json, Cargo.toml, pyproject.toml, or other project manifests

If you find an existing `define/PROJECT-CONTEXT.md` from a prior run, read it
and confirm: **"I found existing project context. Want to update it or start fresh?"**

Summarize what you found. Do not re-ask questions these artifacts already answer.
If the project has substantial existing context, confirm with the user:
**"Here's what I found. Is this the right project? What's the hunch?"**

## Step 0.5: Detect Track

Based on what you found in Step 0 and the user's initial answers, classify the
project into exactly one track:

| Track | Signal | Key test |
|-------|--------|----------|
| **Creator** | Solo practitioner. The person IS the brand. Art, music, writing, design, coaching. | Would removing the founder remove the product? |
| **Cultural Brand** | Point-of-view brand. Editorial voice. Community identity. | Is taste the primary differentiator? |
| **Athlete / Public Figure** | Existing public audience. Name recognition. Multiple revenue streams from personal brand. | Does the audience predate the project? |
| **Agency / Studio** | Service business. Sells expertise and delivery. | Is the "product" actually a repeatable process? |
| **Platform / Product** | Software, marketplace, or infrastructure. Users interact with a system, not a person. | Does it work without the founder present? |

If the project straddles two tracks, pick the one that matches the
**primary economic engine**. Note the secondary influence.

Do NOT ask the user to pick their track. You classify it, then confirm:
**"Based on what you've described, this is a [Track Name] project —
[one sentence why]. This means [brief note on what gets emphasis]."**

Write `define/PROJECT-CONTEXT.md` with this format:

```yaml
---
project_name: [name]
track: [creator | cultural-brand | athlete | agency-studio | platform-product]
primary_audience: [one line]
core_offering: [one line]
phase_emphasis:
  heavy: [phases that matter most for this track]
  light: [phases that are lighter for this track]
---
```

With a brief body covering: what this is, who it serves, track rationale,
and phase emphasis. Keep it short — this is a routing artifact, not a strategy doc.

**Phase emphasis by track:**

| Track | Heavy | Light |
|-------|-------|-------|
| Creator | Semantics, Sovereignty, Resonance | Field, Stability, Flow |
| Cultural Brand | Semantics, Taste, Field | Flow, Stability |
| Athlete / Public Figure | Field, Sovereignty, Current | Stability, Flow |
| Agency / Studio | Flow, Frequency, Taste | Stability, Resonance |
| Platform / Product | Stability, Flow, Field | None — full depth |

After confirming the track, surface setup awareness:

> **"Based on your track, here's what you'll need from SETUP.md as we go deeper:"**

Reference the track to give the short version — Vercel + domain timing, and the
2-3 most likely Tier 2/3 tools (e.g., Stripe, Sanity, ConvertKit, Supabase,
PostHog, Figma, Resend, Shopify) with which phase triggers them. Keep it to 3-4
lines. The full details live in SETUP.md — don't reproduce the table here.

Close with: *"You don't need these now — they come up in later phases. Just know
they're coming so there are no surprises. If you haven't completed SETUP.md
Tier 1 yet, do that first."*

Then continue to Step 0.75 in the same conversation.

## Step 0.75: Demand Gate

After confirming the track, run the demand gate. Three questions, each requiring
a specific answer — not a category or thesis. Use AskUserQuestion:

**"Name one person who would be upset if this disappeared tomorrow."**
Not "interested." Upset. If the answer is a category ("music producers"), not
a named person, the demand is hypothetical.

**"What is that person doing right now to solve this problem, even badly?"**
If the answer is "nothing," the problem may not be painful enough to act on.
Workarounds — even bad ones — are demand signal.

**"Describe them: name, title, what gets them promoted, what gets them fired."**
If you can't describe one person at this level, you're building for an
abstraction. That's not disqualifying — but the protocol should know.

### Set Evidence Level

Based on all three answers, classify and record:

| Level | Signal | Protocol calibration |
|---|---|---|
| **Validated** | Named users, observed behavior, payment or engagement signals | Full depth. All phases earn their weight. |
| **Signaled** | Inbound interest, repeated asks from specific people, adjacent evidence | Standard depth. Run all phases but flag speculative decisions. |
| **Thesis** | Pattern recognition, market observation, founder conviction | Reduced depth. Prioritize Frequency (Phase 4) and one validation artifact. Defer deep Sovereignty, Consonance, and Entropy until demand evidence exists. |

Add `evidence_level:` to the PROJECT-CONTEXT.md frontmatter:

```yaml
evidence_level: [validated | signaled | thesis]
demand_evidence: [one-line summary of what was provided]
```

**Do not skip phases at thesis level.** Run them lighter. The Demand Gate
calibrates effort, not sequence. A thesis-level project running full-depth
Sovereignty maps is over-investing in insurance on a bet that hasn't been placed.

Present the classification to the user:
**"Evidence level: [Level]. This means [brief calibration note].
The protocol runs all phases — [Level] calibrates how deep we go."**

Then continue to Step 1.

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

## Output — Three-Tier Artifact Structure

### Tier 1: Narrative (shown in conversation)

Present the findings conversationally. This is what the user actually reads.
Max 5-7 sentences. Frame it as:

> "Here's what [your thing] means and what it doesn't."

Cover:
- The signal statement in plain language
- The sharpest negative-space boundary (what this is NOT)
- The biggest distortion risk worth watching
- One forward-looking thread to Field (who this meaning enters)

Where core concepts map naturally to future capability domains, name them.
E.g., if "membership" emerges as a core concept, note it as a likely capability
domain. This threads architecture through from Phase 1 without making it heavy.

### Tier 2: Summary Card (written to file)

Write a scannable reference card to `define/semantics-summary.md`:
- Signal thesis (5 lines max)
- Identity / negative-space / promise statements (1 line each)
- Top 3 distortion risks (ranked)
- Key audience interpretation deltas (table: audience | likely read | likely misread)

~10 lines max. No prose — just the locked answers.

### Tier 3: Machine Artifact (written to file)

Write the full SignalThesis to `define/SignalThesis.md` with YAML frontmatter:

```yaml
---
artifact: SignalThesis
phase: semantics
version: 1.0
status: locked
capability-domains: []  # nouns that map to future system capabilities
---
```

Body contains the complete structured output:
- Semantic core (signal, identity, negative-space, promise)
- Audience interpretation map
- Distortion risks with guard phrases
- Canonical language guide (approved terms, disallowed terms, substitutes, tone)
- Semantic gate result

Conclude with:
"Semantics locked. Run /fw-field to map the social dynamics this meaning will enter."
