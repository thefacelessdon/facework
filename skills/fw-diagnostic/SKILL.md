---
name: fw-diagnostic
version: 3.0.0
description: |
  Diagnostic: Measure and evolve. Post-project retrospective that captures
  learnings, updates the Facework methodology, and logs changes. The mechanism
  that makes the practice self-reinforcing across projects.
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

**Flow (1-5):** How easily does energy move through the system?
```
1 — Participants face constant friction; the system fights them
2 — Major bottlenecks exist; workarounds are common
3 — Core paths work smoothly; edge cases create drag
4 — Energy moves freely through most of the system
5 — The system feels invisible; participants do what they came to do without thinking about the system
```

**Resonance (1-5):** Does the system connect with its intended community?
```
1 — The community wouldn't recognize this as built for them
2 — Functional but generic; could be for anyone
3 — Clear awareness of the community; some authentic touches
4 — The community would say "this gets us"
5 — Someone from the community sees it and says "that's for me" before reading any docs
```

**Entropy (1-5):** How much structural weakness and extraction remains?
```
1 — Critical extraction patterns; high dependency; silent failures everywhere
2 — Known extraction friction; several unresolved structural gaps
3 — Minor extraction risks documented; some structural debt remains
4 — Low entropy; ownership model enforced; few gaps
5 — Self-sustaining; participants control their current; system maintains itself
```

### The Scorecard

Produce this scorecard in the retro:

```
┌─────────────────────────────────────────────────────────┐
│              COHERENCE SCORECARD                        │
│              [Project Name] — [Date]                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Flow:       [1-5] ████░  [one-line assessment]        │
│  Resonance:  [1-5] ████░  [one-line assessment]        │
│  Entropy:    [1-5] ████░  [one-line assessment]        │
│                                                         │
│  Coherence = (F × R) / (1 + E) = [calculated score]   │
│                                                         │
│  Structural coherence:  [PASS/WATCH/FAIL]              │
│  Cultural coherence:    [PASS/WATCH/FAIL]              │
│                                                         │
│  Verdict: [one sentence]                                │
│                                                         │
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
