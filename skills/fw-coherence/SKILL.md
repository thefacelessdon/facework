---
name: fw-coherence
version: 4.0.0
description: |
  Coherence: Phase 8 of the Facework Protocol (Integration). Final phase.
  Package everything so someone can clone the repo and start building on Day 1
  without a meeting. README, review brief, project tracker, engineering guide,
  clean repo. Closes with diagnostic — coherence scorecard, retro, and
  methodology evolution. Runs after Integrity (Phase 7).
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

# /fw-coherence — Integrate Into a Unified Whole

**Phase 8 of the Facework Protocol (Integration). Final phase.**
Entry: SovereigntyMap and ConsonanceCheck exist; all critical gaps addressed (Phase 7 gate).
Exit: HandoffPackage; coherence scorecard; DiagnosticReport; methodology updated.

You are packaging everything from previous phases so a new participant can
enter the system and build from it without the original builder present.
If they can — the system is coherent. If they can't — it isn't.

## The Cultural Physics Foundation

Coherence is the output of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

This is where everything integrates. Flow has been designed, resonance has been
built, entropy has been reduced. Coherence is the proof that the system holds
its shape when handed to someone who wasn't there when it was built.

But coherence in Cultural Physics means more than clean documentation. It means
the system is transmissible to the community it was built for — not just to
engineers, but to the people whose energy it's designed to sustain. If a creator
can look at the handoff package and understand what this system does for them,
how it protects their interests, and how they maintain control — that's coherence.

The deepest test: **can the community this was built for operate this without
depending on the original builder?** Not just "can an engineer implement from
these specs" — but can the people this serves achieve true independence through
this system? That's the difference between technical coherence and cultural coherence.
This phase demands both.

## Step 0: Read Existing Artifacts

Before packaging, scan the project for everything produced across all phases:
- All artifacts from Phases 1–7 — Coherence needs the complete picture
- Existing README, CLAUDE.md, or orientation documents
- Prior handoff packages or onboarding docs
- Git history to understand the build arc

This step IS the audit — Coherence reads everything. Step 1 structures what you find.

## Step 1: Audit What Exists

Read the full project directory. Catalog:
- All specs (from /fw-stability and /fw-entropy)
- All playbooks (from /fw-flow)
- All decision records (from /fw-current)
- All governance docs (from /fw-frequency)
- The prototype (from /fw-resonance)
- Any engineering guides already written

## Step 2: README

Create README.md at project root:
- What this is (2-3 sentences — no jargon)
- Who this serves and how (the energy source, not just "target market")
- The business model (key numbers only)
- Architecture overview (directory structure)
- Technology stack (table)
- How to run locally (copy-pasteable commands)
- Key documents index (links to specs, playbooks, guides)
- Current status (what's done, what's next)

## Step 3: Review Brief (if handoff to another builder)

Create REVIEW-BRIEF.md:
- Read order with time estimates (orientation → architecture → code → playbooks)
- What feedback is needed (provide structured template)
- Key decisions that are LOCKED (don't relitigate — read the decision records)
- Ownership model summary (who controls what — so the builder doesn't accidentally
  introduce extraction patterns the decisions phase explicitly rejected)
- Repo structure quick reference

## Step 4: Project Tracker

Create a tracker showing all work items:
- Completed work (what's been done)
- Pending work organized by priority
- Each pending item should have enough context to start without asking questions:
  - What to do (steps)
  - What to read first (file paths)
  - What files to create or modify
  - What depends on what
  - How to verify it's done

## Step 5: Engineering Guide

Ensure the platform directory has a CLAUDE.md (or equivalent):
- Architecture overview
- Code conventions and naming
- Data patterns (how queries work, how auth works)
- Ownership patterns (how data portability works, how exit works)
- How to add a new feature (step by step)
- Test expectations (what must be tested, how to run)
- Canonical numbers (where rates/thresholds come from — never hardcode)

## Step 6: Git Hygiene

- .gitignore covers secrets, node_modules, env files
- No sensitive files in the repo
- Commit history has descriptive messages
- Push to GitHub (ask user: public or private?)
- Set up collaborator access if needed

## Step 7: Coherence Test

Before marking complete, ask yourself:

**Technical coherence:**
- Can someone clone this repo and run the prototype in under 5 minutes?
- Can they find any spec within 30 seconds using the README?
- Can they understand the business model in one read of the business model doc?
- Can they start building a feature using only the engineering guide?
- Are there any numbers that appear in multiple places with different values?

**Cultural coherence:**
- Can the community this was built for understand what the system does for them?
- Does the ownership model protect the people generating the energy?
- Could a new builder accidentally introduce extraction patterns? If so, are there
  guardrails in the engineering guide and specs to prevent it?
- Does the system enable independence — or does it create a new dependency?

If any answer is no — fix it before declaring coherence.

## Step 8: Diagnostic — Measure and Evolve

The protocol closes by measuring what happened and feeding learnings back into
the practice. This is the mechanism that makes Facework self-reinforcing.

### Walk Each Primitive

For each of the 12 primitives, ask the user (via AskUserQuestion, one at a time):

**Semantics:** "Did the canonical language hold? Were there naming contradictions?"
**Field:** "Did the social dynamics play out as mapped? Any surprises?"
**Taste:** "Did the quality bar hold through the build? Where did it slip?"
**Frequency:** "Did the governing truth hold? Were the economics right?
Did any number change during the build? Did the extraction check surface anything?"
**Current:** "Did the decisions hold? Were any revisited? Were there dilemmas
you wish you'd surfaced earlier?"
**Flow:** "Did the playbooks match reality? What workflows played out differently?"
**Stability:** "Were the specs accurate? Which ones needed rework?"
**Resonance:** "Was demo mode useful? Did the prototype carry the frequency
of the community it was built for?"
**Entropy:** "What did the review catch that would have been a production incident?"
**Sovereignty:** "Did the ownership model hold? Any lock-in risks that slipped through?"
**Consonance:** "Were there cross-layer contradictions the review missed?"
**Coherence:** "Could the builder start from the handoff? What was missing?"

### Produce Coherence Scorecard

Score three dimensions from evidence, not aspiration.

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

**Computing the score:**
```
Entropy = 6 - Structural Integrity
Coherence = (Flow × Resonance) / (1 + Entropy)
```

**Interpreting the score:**
```
0.2 – 1.0   RED          Incoherent. Stop building, fix the foundation.
1.0 – 2.5   AMBER        Holds but fragile. Operational for MVP.
2.5 – 5.0   GREEN        Coherent. Ready for handoff and scaling.
5.0 – 12.5  DEEP GREEN   Self-reinforcing. Rare — the target, not the baseline.
```

Present recommended scores to the user via AskUserQuestion and let them adjust.

### Scorecard Output

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

### Write Retro

Save to methodology/retros/:
- Project name, date, duration, phases completed
- Per-primitive learnings (what worked, what didn't, what was missing)
- Coherence scorecard
- Methodology updates proposed
- Top 3 things to carry forward

### Update Methodology

Propose specific changes based on retro findings. For each:
- "Add to methodology: [new pattern]. Should we add this?"
- "Remove from methodology: [unnecessary step]. Should we remove this?"
- "Modify in methodology: [adjusted step]. Should we update this?"

Apply approved changes. Update CHANGELOG.md with version bump.

## Output

Tell the user:
- Handoff status (repo URL, what's ready)
- Coherence scorecard (score and zone)
- How many methodology changes were made
- What the next project should do differently

```
Project → /fw-coherence → Handoff + Diagnostic → Methodology Update
   ↑                                                        |
   └──── Next project uses updated practice ←───────────────┘
```

Every project makes the practice better. Every run is a version bump.
