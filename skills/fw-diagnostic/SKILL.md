---
name: fw-diagnostic
version: 4.0.0
description: |
  Diagnostic: Phase 9 of the Facework Protocol (Evolution). Post-project
  retrospective that captures learnings, updates the Facework methodology,
  and logs changes. The mechanism that makes the practice self-reinforcing
  across projects. Runs after Integration (Phase 8). Final phase of the loop.
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

# /fw-diagnostic — Measure and Evolve

**Phase 9 of the Facework Protocol (Evolution). Final phase.**
Entry: HandoffPackage exists; community can operate independently (Phase 8 gate).
Exit: DiagnosticReport with concrete methodology updates; coherence scorecard produced.

You are facilitating a retrospective that feeds back into the Facework practice.
This is the mechanism that makes the methodology self-reinforcing.

## The Cultural Physics Foundation

Diagnostic is the force that closes the loop. The governing equation —
`Coherence = (Flow × Resonance) / (1 + Entropy)` — is not static. Every
project changes the variables. Diagnostic measures what actually happened
to coherence during the build and feeds those learnings back into the practice.

This phase evaluates the project against both dimensions of coherence:

**Structural coherence:** Did the system hold its shape? Were the specs accurate?
Did the gates prevent premature action? Did the playbooks match reality?

**Cultural coherence:** Did this project increase coherence in the Cultural Physics
sense? Does the finished system sustain the people generating the energy, or does
it extract from them? Did the extraction checks in Frequency and Current actually
prevent extractive patterns, or did they slip through?

The diagnostic is where the practice proves it's not just a build process — it's
a coherence practice that serves the communities it builds for.

## Step 0: Read Existing Artifacts

Before facilitating the retrospective, scan the project for all outputs:
- All artifacts from Phases 0–8 — Diagnostic evaluates the full run
- Prior retros or diagnostic reports (if this is a re-run)
- The Facework methodology doc (to compare against current practice)
- Git history and commit timeline (to understand the build arc)

Summarize what you found. The diagnostic evaluates what happened — reading everything first
prevents re-asking questions the artifacts already answer.

## Step 1: Gather Context

Read the project's artifacts:
- Git log (commits, timeline, scope of work)
- All specs, playbooks, decision records produced
- Project tracker (what's done vs pending)
- The Facework methodology doc (to compare against)

## Step 2: Walk Each Primitive

For each of the 7 primitives, ask the user (one at a time via AskUserQuestion):

**Frequency:** "Did the governing truth hold? Were the economics right?
Did any number change during the build? Were the gates useful?
Did the extraction check surface anything that changed how you built?"

**Current:** "Did the decisions hold? Were any revisited? Were there dilemmas
you wish you'd surfaced earlier? Did the ownership dilemma resolution hold
up in practice?"

**Stability:** "Were the specs accurate? Which ones matched reality? Which
needed rework? What should have been specified but wasn't? Did the ownership
and control sections get implemented as designed?"

**Flow:** "Did the playbooks match reality? Did the automation mapping hold?
What workflows played out differently than documented? Did the energy flow
checks reveal friction that needed to be redesigned?"

**Resonance:** "Was demo mode useful? Did the prototype survive to production?
What was prototyped but thrown away? Did the prototype carry the frequency
of the community it was built for?"

**Entropy:** "What did the review catch that would have been a production
incident? What was over-engineered? What was missed? Did the extraction
review surface patterns the other phases missed?"

**Coherence:** "Could the builder start from the handoff? What questions did
they still have? What was missing from the packaging? Could the community
this serves understand and operate the system independently?"

## Step 3: Produce Coherence Scorecard

After walking each primitive, produce a scored coherence assessment using
the governing equation. This is not abstract — use the rubric below.

### Scoring Rubric

Score three dimensions. Each is assessed from evidence, not aspiration.

**Flow (1-5):** How easily does energy move through the system?
```
1 — Participants face constant friction; the system fights them
2 — Major bottlenecks exist; workarounds are common
3 — Core paths work smoothly; edge cases create drag
4 — Energy moves freely through most of the system
5 — The system feels invisible; participants do what they came to do
```

**Resonance (1-5):** Does the system connect with its intended community?
```
1 — The community wouldn't recognize this as built for them
2 — Functional but generic; could be for anyone
3 — Clear awareness of the community; some authentic touches
4 — The community would say "this gets us"
5 — Someone from the community sees it and says "that's for me" before reading docs
```

**Structural Integrity (1-5):** How strong is the system's foundation?
```
1 — Critical extraction patterns; high dependency; silent failures everywhere
2 — Known extraction friction; several unresolved structural gaps
3 — Minor extraction risks documented; some structural debt remains
4 — Ownership model enforced; few gaps; dependencies documented
5 — Self-sustaining; participants control their current; system maintains itself
```

### Computing the Score

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Entropy is derived from Structural Integrity (not scored directly):
```
Entropy = 6 - Structural Integrity
```

This preserves the physics: higher entropy → lower coherence. A system with
strong structural integrity (score 5) has low entropy (1). A system falling
apart (score 1) has high entropy (5).

### Interpreting the Score

The coherence score ranges from 0.17 (worst) to 12.5 (best).

```
SCORE RANGE    ZONE        MEANING
──────────────────────────────────────────────────────────────
0.2 – 1.0      RED         System is incoherent. Contradictions between
                            layers. Extraction patterns present. Energy
                            leaks faster than it's produced. Stop building
                            and fix the foundation.

1.0 – 2.5      AMBER       System holds but under strain. Core paths work
                            but edge cases create drag. Community awareness
                            exists but transmission hasn't happened. Some
                            structural debt. Operational — but fragile
                            under pressure.

2.5 – 5.0      GREEN       System is coherent. Energy flows freely.
                            Community recognizes it as theirs. Structural
                            integrity is high. Can absorb pressure without
                            losing shape. Ready for handoff and scaling.

5.0 – 12.5     DEEP GREEN  System is self-reinforcing. Coherence compounds.
                            The community operates independently. The system
                            sustains the people generating the energy without
                            external intervention. Rare — this is the target,
                            not the baseline.
```

**What the zones tell you:**

- **RED:** Don't ship. Don't scale. Fix the governing truth first.
- **AMBER:** Operational for MVP. Proceed with awareness of where it's
  fragile. Most first-pass projects land here. The goal is to identify
  what moves it toward GREEN, not to wait for perfection.
- **GREEN:** Ship with confidence. The system holds its shape under
  handoff, scaling, and time pressure.
- **DEEP GREEN:** The system is self-sustaining. This usually requires
  multiple iterations and real-world validation.

**What moves the score:**

- Flow increases when friction is removed and participants can do what
  they came to do without fighting the system.
- Resonance increases when the community validates the output — not when
  the builder thinks it's good, but when the community says "that's for me."
- Structural Integrity increases when contradictions are resolved, ownership
  is enforced, and the system survives pressure testing.

The score is a diagnostic tool, not a grade. A project at 1.8 (AMBER) with
a clear path to GREEN is healthier than a project at 3.0 (GREEN) that got
there by skipping the extraction check.

### The Scorecard

Produce this scorecard in the retro:

```
┌─────────────────────────────────────────────────────────┐
│              COHERENCE SCORECARD                        │
│              [Project Name] — [Date]                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Flow:                [1-5] ████░  [assessment]        │
│  Resonance:           [1-5] ████░  [assessment]        │
│  Structural Integrity:[1-5] ████░  [assessment]        │
│                                                         │
│  Entropy = 6 - SI = [value]                            │
│  Coherence = (F × R) / (1 + E) = [score]              │
│  Zone: [RED / AMBER / GREEN / DEEP GREEN]              │
│                                                         │
│  Verdict: [one sentence]                                │
│  Key finding: [the single most important learning]     │
│  Carry forward: [what the next project must do]        │
└─────────────────────────────────────────────────────────┘
```

Use AskUserQuestion for each score — present the rubric, state your
recommended score based on the primitive walkthrough, and let the user
adjust. The scores should reflect honest assessment, not aspiration.

## Step 4: Write Retro

Look for a retro template. If one exists in the project's methodology
directory, use it. If not, create a retro file with:

- Project name, date, duration, phases completed
- Per-primitive learnings (what worked, what didn't, what was missing)
- Cultural Physics assessment (flow, resonance, entropy, coherence verdict)
- Methodology updates proposed
- Phase timing (expected vs actual)
- Top 3 things to carry forward

Save to the project's methodology/retros/ directory.

## Step 5: Update Methodology

Based on retro findings, propose specific changes. For each, use AskUserQuestion:

- "Add to methodology: [new pattern]. Should we add this?"
- "Remove from methodology: [unnecessary step]. Should we remove this?"
- "Modify in methodology: [adjusted step]. Should we update this?"

Apply approved changes to the Facework methodology doc
(either in the project repo or in the Facework repo if accessible).

## Step 6: Update Changelog

Add entry to methodology/CHANGELOG.md:
```
## vX.Y — [Date] ([Project Name])
**What changed:**
- [List each change]
**Triggered by:** Retro finding: [which learning drove the change]
```

## Step 7: Update Skills (if needed)

If any /fw- skill needs adjustment:
- Propose the specific change
- Apply if approved
- Note in changelog

## Step 8: Summary

Tell the user:
- How many methodology changes were made
- Which primitives were updated
- Cultural Physics assessment (one sentence: did this project increase
  or decrease coherence for the community it serves?)
- What the next project should do differently
- Cumulative project count and methodology version

## The Loop

```
Project → /fw-diagnostic → Methodology Update → Changelog
   ↑                                                |
   └──── Next project uses updated practice ←───────┘
```

Every project makes the practice better. Every retro is a version bump.
Every learning compounds.
