# Berd orchestration — findings from the first real run (Gitwit)

Date: 2026-08-19
Status: Draft finding (methodology note)
Scope: `bin/fw-berd-bootstrap` and `bin/fw-berd-launch`, exercised on the first
external protocol run (Gitwit — Bentonville studio operating infrastructure).
Companion: `methodology/retros/011-the-unenforced-enforcer.md` (the worktree
isolation this depends on), `methodology/runtime-ports-berd-gap-2026-08-18.md`.

---

## Why this note exists

The tools were built deliberately thin — bootstrap and launcher only, with the
phase-state reader deferred "until a real run shows which state is worth
checking." One run produced three findings, and the third is the state reader's
specification. That is the plan working, recorded so the next person does not
re-derive it.

---

## Finding 1 — content is not a command line

**Symptom.** The first real bootstrap created a Berd project whose instructions
were silently mangled: `` `define/` `` and `` `AGENTS.md` `` were gone.

**Cause.** The seeded instructions and phase prompts contain backticks. They were
interpolated into a shell string, so the shell executed them as command
substitution.

**Fix.** Array-form exec (`Open3.capture2e`) in both tools — no shell, so content
is data. Verified: literal backticks now survive into the stored instructions.

**The generalisation.** A dry run proves the *logic*, not the *execution*. The
dry run passed cleanly and the real run corrupted its own output. This is the
same shape as retro 011's finding one layer down: **a mechanism that reports
success without doing the work.** Any tool whose output is prose, and whose
prose is passed to another process, must exec without a shell.

---

## Finding 2 — worktree isolation requires a startup name

**Symptom.** The first real launch failed outright:
`workspace_name_required: Project "gitwit" creates a branch or worktree for each
new chat; pass --startup-name <name>.`

**Cause.** `fw-berd-bootstrap` sets `auto-worktree` (correctly — it is the fix for
the shared-checkout collision in retro 011), and `auto-worktree` projects require
a per-session branch/worktree name. The launcher was not passing one.

**Fix.** `--startup-name` defaults to the skill name (`fw-semantics`,
`fw-frequency`, …), overridable. Parallel phases therefore land in distinct,
self-describing worktrees.

**Worth noting:** the fix for one problem created the next. Isolation was right;
it just has a required parameter that only surfaces at launch.

---

## Finding 3 — isolation blocks the phase handoff. The commit *is* the gate.

**This is the substantive one.**

**Symptom.** Phase 1 completed and produced `PROJECT-CONTEXT.md`,
`SignalThesis.md`, and `semantics-summary.md` — inside its own worktree,
uncommitted. The tenant's main checkout showed an empty `define/`. A phase 2
worktree, branched from `main`, would have seen **nothing** and started from the
intake alone.

**Cause.** Worktree isolation is per-session by design. Phase N writes into its
own worktree; phase N+1 branches from `main`. Nothing carries output across.

**Resolution used.** The artifacts were copied to `main` and committed before
phase 2 launched, with the commit message recording that phase 1 was complete and
locked. Phase 2's prompt then pointed at them explicitly and told it not to
re-derive.

**The finding.** That commit is not bookkeeping — **it is the phase gate, and it
was always going to have to be.** `fw-berd-launch` was written stating it
"LAUNCHES and REPORTS; it cannot await a phase or gate on its result," and that
gating "is done by reading artifacts on disk … or the human decides." Finding 3
sharpens it: the artifacts must be *on `main`* to be readable at all, so the act
of promoting them is the act of declaring the phase done. Gating is not a check
performed *before* launching — it is a state that must be *created* by a human
judging the phase complete.

This matches the protocol's own shape. A phase gate has always been a human
ruling on whether the phase's artifacts satisfy their criteria; the worktree
model just makes that ruling load-bearing in git rather than optional.

**Specification for the deferred state reader.** It should:

1. **Refuse to launch phase N+1** when phase N's expected artifacts are absent
   from `main` — with the missing paths named, and an explicit override for
   deliberate out-of-order runs.
2. **Report where a running phase's output actually lives** (`git worktree list`
   plus the branch's status) rather than reading the main checkout, which is the
   wrong place to look and misleadingly empty.
3. **Offer the promotion** — copy the phase's artifacts to `main` and commit with
   a message recording which phase completed — but never perform it unasked. The
   human ruling stays a human ruling; the tool removes the clerical work, not the
   judgement.
4. **Never infer completion from session state.** `berdctl session get` returned
   no usable status for a finished phase, and phase 1 revised its own artifacts to
   v1.3 before settling. Artifacts on disk are the only honest signal, and
   "artifact exists" is not "artifact is done."

---

## What held

- **Idempotency.** Re-running bootstrap reused the project and left an existing
  `AGENTS.md` untouched, as designed.
- **Unopinionated defaults.** Model and persona fell through to the app default;
  neither tool silently picked a tier.
- **Parallel phases.** Phase 4/5/7 concurrency is the reason the launcher exists,
  and dry-run confirmed two sessions for Strategy Lock before any real launch.
- **Worktree isolation itself.** Two phases in separate worktrees on separate
  branches, with no collision — the retro 011 failure did not recur.

## Still unproven

Phases 3–8 have not been launched. Phase 7 fans out to three concurrent
sessions, which is the heaviest test of both the launcher and the handoff, and it
has not run. Nothing here should be read as validating the tools past phase 2.
