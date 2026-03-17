---
name: fw-coherence
version: 2.0.0
description: |
  Coherence: Integrate into a unified whole. Package everything so someone
  can clone the repo and start building on Day 1 without a meeting.
  README, review brief, project tracker, engineering guide, clean repo.
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

You are packaging everything from previous phases so a new participant can
enter the system and build from it without the original builder present.
If they can — the system is coherent. If they can't — it isn't.

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
- Can someone clone this repo and run the prototype in under 5 minutes?
- Can they find any spec within 30 seconds using the README?
- Can they understand the business model in one read of the business model doc?
- Can they start building a feature using only the engineering guide?
- Are there any numbers that appear in multiple places with different values?

If any answer is no — fix it before declaring coherence.

## Output

"Coherence integrated. Repo is at [URL]. Handoff-ready.
Run /fw-diagnostic to capture learnings and evolve the practice."
