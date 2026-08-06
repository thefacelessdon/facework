# Project Retrospective: Runtime Ports Validation Program (Buzz → Letta → OpenAI)

**Date:** 2026-08-05
**Duration:** Single session
**Phases completed:** N/A — this was **toolkit/spec development** (a system-loop
iteration on Facework itself), not a protocol run on a project. Landed as PRs
#16–#19 (v0.0.15 → 0.0.18).

> **This retro is different on purpose** (like 006's outside-in mode and 007's
> loop-instrumented re-pass). It reflects on a **methodology-development session**,
> not a client run. Its job is to capture *how* a spec gets hardened against
> external reality — the repeatable loop, what made the findings real, and where
> the process leaked. It is the second observable instance (after 007) of the
> system loop closing on the toolkit itself, and the first triggered by a plain
> user question rather than a run.

---

## What the session was

The user asked how to think about using **Buzz** (block/buzz), an external agent
runtime. That opening question became a program: validate Facework's **Runtime
Ports (§9)** against three external runtime shells the practice did not design —
**Buzz** (collaboration/audit), **Letta** (memory/context), **OpenAI's hosted
surface** (hosted/rented) — chosen to span the space. Each comparison produced a
port-by-port gap note; each surfaced a distinct spec refinement; all landed as
additive canon (§9.11, Phase-7 gate, FS-400.1–.6) plus a promoted FS-400 source
memo. §9.2's three-reference-tenant bar was met.

---

## The method that worked (the reusable loop)

Every runtime went through the same loop, and it converged cleanly each time:

1. **Pick an opposite-corner runtime** — not one that confirms the last, one that
   stresses the *opposite* ports.
2. **Two-stage subagent research** — a broad technical brief, then a
   **source-verification pass** against actual source files.
3. **Port-by-port gap note** in `methodology/`, framed explicitly against the
   prior runtimes.
4. **Additive spec refinement** — §9/§9.11/Phase-7, calibrated to never break
   existing conformance.
5. **PR → review → merge → resync → memory.**

This is a **named procedure worth keeping**: *Runtime Validation Pass.* It turned
a vague "should I use this tool?" into spec canon three times without drama.

### What worked

- **Opposite-corner selection is why 3 runtimes gave 3 findings, not 3
  restatements.** Buzz established the partition; Letta (chosen as the inverse)
  surfaced *boundary-is-behavioral* + *governance-splits*; OpenAI (chosen to fail
  sovereignty) surfaced *shell-is-a-dependency*. Selecting for maximum contrast is
  the whole trick — a confirming third runtime would have taught nothing.
- **The compile-down reframe was the governing insight.** Moving the user's
  question up a layer — from "adopt Buzz?" to "Facework is the authoring layer
  that compiles down to runtimes it doesn't own" — made all three comparisons
  coherent and produced a better answer than a yes/no ever could.
- **Additive + calibrated changes let four PRs land fast.** No change touched
  existing conformance; the Phase-7 gate line was explicitly a no-op when no
  Runtime Shell is declared. Nothing had to be relitigated.

### What didn't (friction, honestly)

- **First-pass research had a wrong conclusion that the source pass caught.** The
  broad Buzz brief led me to write "the memory boundary is moot on Buzz." The
  source-verification pass found agent engrams (`KIND_AGENT_ENGRAM=30174`) and
  **overturned it** — the boundary actually maps. That claim would have shipped as
  canon without the second pass. **Prose docs are not spec-grade; source is.**
- **`gh pr merge --delete-branch` left local `main` behind on #17** (ref-lock
  during post-merge sync). Recovered with `fetch` + `merge --ff-only`. Predictable
  after the first time; worth always resyncing explicitly.
- **A version-drift detour (#17).** Mid-program I found `PROTOCOL.md`'s header
  hardcoded `Version: 0.0.8`, ~7 releases stale. Fixing it cost a side-PR — but
  the recursion is instructive (see teaching #3).
- **A memory category didn't fit.** "Update the run history" didn't map cleanly:
  this was a system-loop iteration, not a client run. Resolved by filing it under
  the memory's "system loop is real" claim rather than the client-run list.

---

## What the session teaches the methodology

1. **Spec-grade external claims require a source-verification pass.** The "boundary
   is moot" miss is the proof. For any claim that becomes canon, cite source
   files, not summarized docs. Add to build discipline.
2. **Validate against the space, not against agreement.** When testing a spec
   against external instances, pick instances to span the corners. This is the
   single highest-leverage move of the session and generalizes to any "is our
   model right?" validation.
3. **Forbid the *silent* version, not the thing itself — and it recurs.** FS-400.6
   says: don't forbid a rented runtime, forbid a *silently* rented one (make the
   ownership decision explicit at the Phase-7 gate). The version-drift the session
   also fixed was the *same pathology* — a silently-drifted number. The principle
   ("make the ownership/state decision explicit; kill silent defaults") almost
   certainly generalizes to other spec areas. Watch for it.
4. **The system loop ran on the toolkit, triggered by a question.** 007 showed the
   loop closing on a client re-pass. This session shows it closing on
   *self-development*, kicked off by an ordinary user prompt — external signal →
   four PRs of canon. Second observable instance; the "self-improving system loop"
   claim is now shown in two distinct modes.

---

## Methodology updates

### Add to methodology
- **"Runtime Validation Pass"** as a named procedure (opposite-corner selection →
  two-stage source-verified research → port-by-port note → additive refinement →
  PR). Candidate to encode as an `/fw-*` or operating skill.
- **Source-verification requirement** for any externally-sourced claim that lands
  as canon (cite source files, flag prose-only claims as provisional).

### Modify in methodology
- **Ship guidance for docs/spec repos.** gstack `/ship` aborted (on `main`) and its
  code-pipeline gates (tests, coverage, package.json version CLI) don't fit a
  spec repo. The git-native adaptation used here (branch → stage *only* the
  session's files, never `git add -A` in a tree with `personal/`/client dirs →
  PR, single `VERSION` semver + `methodology/CHANGELOG.md`) should be the
  documented path for this repo.

### Remove from methodology
- Nothing. No step proved counterproductive.

### Agent encoding progress
- Used `general-purpose` research subagents in a **broad-then-source-verify** pair;
  no new skills created this session. The Runtime Validation Pass above is the
  clearest encode-next candidate — the loop was manual but identical each time.

---

## Top 3 things to carry forward

1. **Pick validation instances to span the space, not to confirm.** Opposite-corner
   selection is why three runtimes produced three distinct findings instead of one
   finding restated three times.
2. **Source-verify before canon.** The broad brief's "boundary is moot" was wrong;
   only the source pass caught it. A summarized doc is a lead, not evidence.
3. **Kill silent defaults.** FS-400.6 (no silent rented runtime) and the
   version-drift fix (no silent stale number) are the same lesson. Whenever the
   spec lets a consequential state go unrecorded, that's a gap — make the decision
   explicit.

---

## Note for the next session

The Runtime Ports validation program is **complete and banked** (three-tenant bar
met; FS-400.1–.6 in canon; full record in `[[reference-buzz-runtime-shell]]` and
the three `methodology/runtime-ports-*-gap-*` notes). The open thread is the
**v0.1.0 universal-MUST pass** — but that is a *spec-design* session, not a
validation one, and it is gated on a real-world input the validations can't
supply: an actual tenant bound to one of these runtimes, which turns the
conformance-profile format from theory into something about to be used. Don't
start it cold; start it when a tenant is in view.
