# Project Retrospective: The enforcement-backlog session (0.0.44 → 0.0.51)

**Date:** 2026-08-18
**Window:** 19:31 → 20:47 local (76 minutes wall clock), 8 releases, PRs #48–#56
**Kind:** System-loop session — self-development of the protocol, not a protocol
run on a project. Third observable instance after retros 008 and 009.

---

## What the session was

It started as a request to fill in one form field: *"What should the agent know
about this project?"* in a new Berd project.

It ended eight releases later with the §9–§12 enforcement backlog closed and the
last red gate on `main` green for the first time since 0.0.32.

| Release | What |
|---|---|
| 0.0.44 | `AGENTS.md` becomes the canonical agent guide for every harness |
| 0.0.45 | Runtime-conformance tier enforceable — schema 1.5.0 in the schema |
| 0.0.46 | Fifth Runtime Ports validation — Berd (shipped by a parallel session) |
| 0.0.47 | `methodology/CHANGELOG.md` closed as an archive — FW-DEC-003 |
| 0.0.48 | Phase-7 Sovereignty-loop gate enforceable — schema 1.7.0 |
| 0.0.49 | §9 enforcement audit — 5 unenforced rules, 2 reclassified |
| 0.0.50 | §10–§12 enforcement audit — 5 unenforced rules, §12 reclassified |
| 0.0.51 | `validate-tokens` green — motion namespace + superseded easing curve |

2,633 insertions across 56 files. Type mix: 5 `fix`, 2 `docs`, 1 `feat`.

## The causal chain

The whole session is one chain from a single act of source verification, and it
is worth tracing because nothing in it was planned:

1. Rather than guess what Berd's project field does, read the Berd source.
2. Found `src-tauri/src/commands/workspace_context.rs:4` —
   `const AGENTS_FILENAME: &str = "AGENTS.md"`. Berd reads `AGENTS.md` and
   never `CLAUDE.md`.
3. Therefore this repo's `AGENTS.md` — 34 releases stale — was the file every
   non-Claude harness received, while the current instructions sat in
   `CLAUDE.md` where only Claude Code would see them. → **0.0.44**.
4. Writing 0.0.44's rule 2 required stating the schema-version rule precisely,
   which surfaced that `PROTOCOL.md` declared schema 1.5.0 while
   `facework.manifest.schema.json` could not even express the block. → **0.0.45**.
5. Reviewing 0.0.46 against that new schema found the Phase-7 gate satisfied by
   the literal string `"PENDING — no ruling recorded yet"`. → **0.0.48**.
6. Three findings of the same shape (0.0.45, 0.0.48, the `harness_options`
   hedge) stopped looking like coincidence. → **0.0.49**, then **0.0.50**.

Retro 008's learning was *"prose docs are not spec-grade; source is."* This
session is that rule paying out at eight releases of compound interest from one
grep. It did not need to be believed again; it needed to be **used**.

## What worked

- **Reading the source before answering.** The originating move. A plausible,
  confident answer about the Berd field was available without it, and would have
  been wrong in the way that matters — it would have missed that `CLAUDE.md`
  is invisible to Berd.
- **Fixing the class, not the instance.** Three accidental findings triggered a
  deliberate sweep that found eight more. Eleven of twelve findings this session
  came from two audits; only three came from noticing.
- **Reclassifying honestly instead of faking enforcement.** §9.7 rule 6,
  FS-400.8's hedge, and all of §12 cannot be machine-checked. Naming them
  authoring-layer / runtime-layer — using the protocol's own `unenforced: true`
  vocabulary from 0.0.17 — was the correct outcome, not a lesser one.
- **Negative fixtures as the unit of proof.** Every enforcement fix was verified
  by making it fail, not by watching it pass. Twenty rejections recorded across
  0.0.45, 0.0.48, 0.0.49, 0.0.50 and 0.0.51.
- **Stating the limits in the tool's own output.** `validate-tokens` now prints
  that check (a) is parity, not authority. A tool that overstates itself is the
  same defect as a spec that overstates itself.

## What didn't (honestly)

- **`gh pr merge --delete-branch` closed a stacked PR.** #48's branch was #49's
  base; deleting it made GitHub close #49, and a closed PR cannot be retargeted
  once its base is gone. Cost a rebase and a PR number (#49 → #50). **Never
  `--delete-branch` a PR that is another PR's base.**
- **A test procedure that reverted the fix it was testing.** Regression fixtures
  for 0.0.51 used `git checkout -- <file>` to restore between cases, which
  restored *HEAD*, silently discarding the uncommitted fix. Two of three cases
  reported the wrong error before it was caught. **Back up to a scratch file,
  never to git, when the thing under test is uncommitted.**
- **A parallel session in the same working tree.** The Berd session was editing
  `PROTOCOL.md`, the schema and the validator while this session merged PRs.
  Nothing was lost, but a branch switch was attempted over their uncommitted
  work; git refused, and that refusal is the only reason it was safe. Shared
  working tree plus two agents is an unguarded collision surface.
- **0.0.46 landed with a gate red.** It edited `PROTOCOL.md` without re-running
  `sync-canon`, so the committed derived copy drifted and `canon-sync.test.ts`
  failed on `main`. The rule existed but was filed under "site gates," and a
  protocol-only change does not look like site work. Fixed by moving the rule to
  where canon is edited (0.0.47), not by adding a reminder.
- **AI co-authorship is being erased by the merge path.** Seven of eight releases
  carried `Co-Authored-By: Claude Opus 5` in the commit body. After
  `gh pr merge --squash`, **one** survived — the single release that did not go
  through PR squash. GitHub replaces the body with the PR description. For a
  practice built on provenance, the git record now under-reports AI authorship
  by 7×. Unresolved.

## What the session teaches the methodology

**One root cause, twelve instances.** Every finding reduces to the same thing: a
normative sentence written in a change that did not touch the artifact that
enforces it. 1.5.0 was specified in §9.12 and never added to the schema. The
Phase-7 gate was written as prose and implemented as `!empty?`. FS-400.8's hedge
was argued in §9.11 and never reduced to a check. §11.7's MUST was parsed into a
display label.

`AGENTS.md` rule 2 — *if `PROTOCOL.md` declares a schema feature, the schema
defines it and the validator enforces it* — was written mid-session at 0.0.45 as
a reaction to the first instance. 0.0.46 was the first release to satisfy it by
construction. It held for every release after.

**The standing rule earned (0.0.49, applied 0.0.50).** A normative rule lands
explicitly as **enforced** or as **declared out-of-band**. There is no third
acceptable state, because silence reads as "checked." This is the generalization
of rule 2 and it is the session's most portable output.

**The corollary (0.0.49).** *A rule no example exercises is a rule nobody has
tested.* §9.5.1 (composes cycles) and §9.5.3 (query targets) both survived
because the reference manifest declares no `composes` cycle and no `query`
source. Routine validation could never have surfaced them.

**A gate stuck on a false failure hides real ones.** `validate-tokens` reported
six missing motion durations that were never missing — only renamed. Inside that
noise sat a genuine value drift: the shared token layer shipped the pre-0.0.32
easing curve for eight releases. A red gate everyone has learned to ignore is
worse than no gate, because it launders real failures as known noise.

## Methodology updates

### Add to methodology
- **Enforcement class** as a required property of every normative rule
  (enforced / authoring-layer / runtime-layer). Earned 0.0.49, applied 0.0.50.
  **Promotion candidate** into `theories/the-coherence-operating-system.md` or
  `PROTOCOL.md` proper — it is not Runtime-Ports-specific, it is a general
  property of any declared contract. Gate promotion on it holding through one
  protocol run on a real project, per the 0.0.13 precedent.
- **Coverage rule:** every normative rule should have an example exercising it.
  Two of five §9 gaps survived on absence of coverage alone.
- **Enforcement audits as a named procedure.** Extract every normative statement
  in a section, trace each to code, classify, fix or reclassify, verify with
  negative fixtures. Ran twice with consistent yield (5 + 5). Candidate to encode
  as a system-loop skill alongside `/runtime-validation-pass`.

### Modify in methodology
- **Ship path (`AGENTS.md`):** never `--delete-branch` a PR that is another PR's
  base. Add to the git-native ship steps.
- **Concurrent sessions:** the ship path assumes one agent per working tree. It
  needs a line on what to do when two are live — at minimum, check
  `git status` for foreign modifications before any branch switch.

### Remove from methodology
- Nothing. No step proved counterproductive.

### Open, unresolved

> **Amended 2026-08-19 (0.0.56 close).** The session continued past this retro's
> first writing; two of the three items below were closed by later releases the
> same night. Annotated in place rather than rewritten, per the 0.0.39 precedent.

**Closed since first writing:**

- ~~The `--fw-*` color layer~~ — **CLOSED at 0.0.53** (FW-DEC-004). Re-derived from
  FVS-600; check (a) of `bin/validate-tokens` now verifies against the spec rather
  than against a sibling copy. The mapping fear was justified but misplaced: the
  colors mapped cleanly, and the thing that genuinely could not be guessed turned
  out to be the *artifacts* block (below).
- ~~§1–§8 not enforcement-audited~~ — **CLOSED at 0.0.55**. The prediction held —
  the yield was reclassification, not new checks. But it also produced the
  session's worst single finding: all ten artifact paths in
  `facework.manifest.yaml` resolving to nothing, passing `make protocol-check` for
  51 releases (ruled at 0.0.56, FW-DEC-005).

**Still open at close — ranked:**

1. **§2's three orphaned MUSTs.** `DesignLanguageSpec`, `ConsonanceCheck` and
   `HandoffPackage` are declared MUST in `PROTOCOL.md` §2 and have no manifest slot
   at all. Options: optional slots + warn, promote to required (breaking), or scope
   §2's MUST to what the manifest models. Evidence:
   `methodology/section1-8-enforcement-audit-2026-08-19.md`.
   **Route this to a different session than the one that wrote the enforcement
   rules.** Three consecutive canon rulings (FW-DEC-003/004/005) were delegated to
   the same agent; a fourth concentrates constitution-writing in the party that is
   also auditing it. Reassigning also closes the independence gap in item 2 at no
   extra cost.

2. **Promotion of the two standing rules into the COS.**
   - *"A rule lands enforced or declared"* — survived the §1–§8 falsification test
     (0.0.55) with a scope refinement: §1 and §6 are non-normative and must be
     marked so. **Caveat recorded in that audit: the rule's author ran its test**,
     so a clean result is partly self-confirmation.
   - *"A gate must prove it ran"* (0.0.52) — never independently applied; §1–§8
     declares no gates that execute.

   The inherited bar is `loop-model.md` §Promotion (a validating run, cleared once
   at 0.0.13). It was argued that this bar is a category error for these two — a
   client protocol run exercises neither — and that *independent application* is
   the right substitute. **That reframing is itself unratified.**

3. **`Co-Authored-By` erased by squash merge.** Survived on 1 of 8 releases;
   GitHub replaces the commit body with the PR description. The git record
   under-reports AI authorship by roughly 7×. Needs a ruling: preserve the trailer
   in PR bodies, accept the loss, or change the merge method.

4. **Housekeeping — four items, all the same shape (state nobody has ruled on):**
   - `.agents/skills/` is not in `.gitignore`; 56 untracked directories sit one
     `git add -A` away from being committed.
   - Three uncommitted files in `methodology/` dated 2026-06-29
     (`chat-routing-memo`, `standards-integration-edit-sequence`, `patches/`) —
     either canon that never landed or drafts that should move out.
   - The parallel-session rule this session's collision earned (see "What didn't").
   - 13 merged branches still on the remote.

### Outside the repo

The `review` CI gate has still **never posted a review**. PR #61 cleared workflow
validation and errored at 292 ms with `total_cost_usd: 0` and no error text.
Unresolved between three causes: key, org credit, or `claude-sonnet-5` model
access. Requires Harper's hands (minting keys, setting secrets). The decision point
on any retry is whether cost is nonzero — **not whether the check turns green**,
which this session learned the hard way.

## Top 3 things to carry forward

1. **Verify at the source before answering — it compounds.** One grep into a
   dependency's source produced eight releases. The cost was two minutes; the
   alternative was a confident wrong answer that would have left every
   non-Claude harness reading 34-release-stale instructions.
2. **When the same defect appears three times, stop fixing instances.** The two
   audits found eleven of the session's twelve findings. Three had been found by
   accident over three releases; eight were found deliberately in one.
3. **"Cannot be enforced" is a valid, statable answer.** Three of this session's
   findings were closed by naming the enforcement layer rather than writing a
   check. Pretending a rule is machine-checked is the failure; admitting it
   isn't, in the spec, is the fix.

## Note for the next session

~~Do not open another audit.~~ **Superseded 2026-08-19.** Both recommendations in
this note were executed the same night: the `--fw-*` re-derivation shipped at
0.0.53, and §1–§8 *was* audited at 0.0.55 — commissioned not as a bug hunt but as
the falsification test for the standing rule, a purpose this note did not
anticipate.

**The standing advice now:** stop auditing. §9–§12 and §1–§8 are done and the
enforcement backlog is closed. Everything left in "Open, unresolved" is a *ruling*,
not an implementation — and this session generated open questions faster than it
closed them, which is its own kind of drift. The next agent's most valuable act is
to close item 1 or 2, not to open a fifth front.
