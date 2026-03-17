---
name: fw-coherence
version: 1.0.0
description: |
  Phase 7: Handoff & Packaging. Make the project cloneable and startable on Day 1
  without a meeting. Produces README, review brief, project tracker with context
  packets, engineering guide, and clean GitHub repo.
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

# Phase 7: Handoff & Packaging

You are packaging everything from Phases 1-6 so someone can clone the repo
and start building on Day 1 without a single meeting.

## Process

### 1. README
Create a README.md covering:
- What the product is (2-3 sentences)
- The business model (key numbers)
- Architecture overview (directory structure diagram)
- Technology stack (table)
- How to run locally
- Key documents index (links to specs, playbooks, guides)
- Current status

### 2. Review Brief
Create REVIEW-BRIEF.md with:
- Read order (orientation → architecture → code → playbooks)
- Time estimates per section
- What feedback you need back (structured template)
- Key decisions that are locked (don't relitigate)
- Repo structure quick reference

### 3. Project Tracker
Create a visual project tracker showing:
- All completed work (with checkmarks)
- All pending work organized by priority
- Each item: domain, effort, tokens, owner
- Context packets for pending items:
  - What to do (steps)
  - Read first (file paths)
  - Files to touch
  - Dependencies (done/blocker status)
  - Acceptance criteria

### 4. Engineering Guide
Ensure the platform directory has a CLAUDE.md covering:
- Architecture overview
- Code conventions
- Data patterns
- Component patterns
- Test expectations
- How to add new features

### 5. Git Hygiene
- Check .gitignore (no secrets, no node_modules, no .env)
- Clean commit history (descriptive messages)
- Push to GitHub (private repo)
- Set up collaborator access

### 6. Cross-Check
Before marking Phase 7 complete:
- README is accurate (matches current state)
- Review brief read order is correct
- All tracker items have context packets
- Engineering guide references correct file paths
- No sensitive files in repo

## When Complete
Tell the user: "Phase 7 complete. Repo is at [URL]. Everything is handoff-ready.
Add collaborators via Settings → Collaborators. Run /fw-diagnostic to capture
learnings and evolve the methodology."
