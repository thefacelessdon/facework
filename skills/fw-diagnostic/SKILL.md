---
name: fw-diagnostic
version: 2.0.0
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

## Step 1: Gather Context

Read the project's artifacts:
- Git log (commits, timeline, scope of work)
- All specs, playbooks, decision records produced
- Project tracker (what's done vs pending)
- The Facework methodology doc (to compare against)

## Step 2: Walk Each Primitive

For each of the 7 primitives, ask the user (one at a time via AskUserQuestion):

**Frequency:** "Did the governing truth hold? Were the economics right?
Did any number change during the build? Were the gates useful?"

**Current:** "Did the decisions hold? Were any revisited? Were there dilemmas
you wish you'd surfaced earlier?"

**Stability:** "Were the specs accurate? Which ones matched reality? Which
needed rework? What should have been specified but wasn't?"

**Flow:** "Did the playbooks match reality? Did the automation mapping hold?
What workflows played out differently than documented?"

**Resonance:** "Was demo mode useful? Did the prototype survive to production?
What was prototyped but thrown away?"

**Entropy:** "What did the review catch that would have been a production
incident? What was over-engineered? What was missed?"

**Coherence:** "Could the builder start from the handoff? What questions did
they still have? What was missing from the packaging?"

## Step 3: Write Retro

Look for a retro template. If one exists in the project's methodology
directory, use it. If not, create a retro file with:

- Project name, date, duration, phases completed
- Per-primitive learnings (what worked, what didn't, what was missing)
- Methodology updates proposed
- Phase timing (expected vs actual)
- Top 3 things to carry forward

Save to the project's methodology/retros/ directory.

## Step 4: Update Methodology

Based on retro findings, propose specific changes. For each, use AskUserQuestion:

- "Add to methodology: [new pattern]. Should we add this?"
- "Remove from methodology: [unnecessary step]. Should we remove this?"
- "Modify in methodology: [adjusted step]. Should we update this?"

Apply approved changes to the Facework methodology doc
(either in the project repo or in the Facework repo if accessible).

## Step 5: Update Changelog

Add entry to methodology/CHANGELOG.md:
```
## vX.Y — [Date] ([Project Name])
**What changed:**
- [List each change]
**Triggered by:** Retro finding: [which learning drove the change]
```

## Step 6: Update Skills (if needed)

If any /fw- skill needs adjustment:
- Propose the specific change
- Apply if approved
- Note in changelog

## Step 7: Summary

Tell the user:
- How many methodology changes were made
- Which primitives were updated
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
