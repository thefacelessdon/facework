---
name: fw-coherence
version: 4.0.0
description: |
  Coherence: Phase 8 of the Facework Protocol (Integration). Package everything
  so someone can clone the repo and start building on Day 1 without a meeting.
  README, review brief, project tracker, engineering guide, clean repo. Runs
  after Integrity (Phase 7), before Evolution (Phase 9).
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

**Phase 8 of the Facework Protocol (Integration).**
Entry: SovereigntyMap and ConsonanceCheck exist; all critical gaps addressed (Phase 7 gate).
Exit: HandoffPackage; new builder can start without the original builder present.

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
- All artifacts from Phases 0–7 — Coherence needs the complete picture
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

## Output

"Coherence integrated. Repo is at [URL]. Handoff-ready.
Run /fw-diagnostic to capture learnings and evolve the practice."
