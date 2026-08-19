# Project Retrospective: The unenforced enforcer (0.0.52 → 0.0.53)

**Date:** 2026-08-18
**Window:** 19:13 → 21:30 local, 2 releases, PRs #51, #59, #60 (plus the 0.0.46
Berd validation earlier in the same session)
**Kind:** System-loop session — self-development of the protocol. Fourth
observable instance after retros 008, 009, and 010. Ran **in parallel with the
010 session**, in the same working tree, which is itself one of the findings.

---

## What the session was

It began somewhere else entirely: *"How could we use Berd to build Facework?"*
That produced the fifth Runtime Ports validation and `bin/harness-to-berd`
(0.0.46). The CI finding was a byproduct — while shipping 0.0.46 through
`/ship`, the pre-landing review noticed the repo's only CI check was red, and
that it had been red on every prior run.

The check was `claude-review.yml`, running `anthropics/claude-code-action@beta`.
It had been failing since **0.0.43**. Not failing loudly — failing in a way that
reported success on the steps that mattered and never reviewed a line.

That is the whole retro. Everything below is that one fact, examined.

---

## The causal chain

1. **`@beta` was abandoned** when the action shipped v1. The tag stopped being
   maintained; the workflow kept pointing at it.
2. **v1 renamed and removed inputs.** `direct_prompt` → `prompt`; `model` was
   removed entirely (the model is a CLI arg). The workflow passed both.
3. **GitHub Actions silently ignores unknown `with:` keys.** No error, no
   warning. The action received no prompt and no configuration.
4. **So `Run Claude Code` was `skipped`** — and the job then died on a `401 Bad
   credentials` while revoking a token it had never obtained. The visible
   failure pointed at authentication, which is not where the fault was.
5. **Eight releases merged over it** — 0.0.43 through 0.0.51, including every
   release of the 010 enforcement session.

Fixing that surfaced two more layers:

6. **v1 requires `id-token: write`** to exchange a GitHub OIDC token for the App
   token it posts with. The pre-v1 line did not, so the workflow never declared
   it. Absent, the run burns three retries on `ACTIONS_ID_TOKEN_REQUEST_URL`.
7. **v1 refuses to run when the workflow file differs from the copy on the
   default branch.** Deliberate anti-tampering — it stops a PR from rewriting
   the reviewer to exfiltrate secrets. It also means **the gate cannot
   self-test**: a PR fixing the reviewer is never reviewed by it.

And then the floor:

8. **The credential fails at `$0.00`.** With every layer above repaired, the
   first model call returns `is_error: true` in 260 ms with
   `total_cost_usd: 0`, `num_turns: 1` — rejected before inference. Checked
   across the check's entire run history: **no run has ever recorded a nonzero
   cost.** The gate has never once reached the model, so the API key has never
   been exercised in CI since it was set on 2026-04-04. Unresolved at session
   end; it is Harper's to rotate.

---

## What the session teaches the methodology

**Retro 010 found twelve instances of one root cause. This is that cause one
layer up.** 010's finding was: *a normative sentence written in a change that
did not touch the artifact that enforces it.* Its rule was the fix — a rule
lands explicitly **enforced** or **declared out-of-band**, never silently.

`claude-review.yml` is the same defect applied to the enforcer itself. The
repo declared a review gate. The gate existed, was wired into every PR, and
reported green. It enforced nothing. Silence read as "checked" — exactly the
failure 010 named — except here the silence came from the mechanism that was
supposed to break silences.

**The extension earned (0.0.52).** *A gate must prove it ran, not merely exit
zero.* An exit code reports that a process finished, not that it did work.
Every gate needs a positive execution signal, and the signal has to be
something the gate cannot produce while idle:

| Gate | Exit code proves | Positive signal that proves work |
|---|---|---|
| `validate-manifest` | the script ran | its `[ok]` assertion count |
| `validate-tokens` | the script ran | the checks-passed line naming what it checked |
| `canon-sync --check` | the script ran | a diff, or an explicit no-drift statement |
| `claude-review.yml` | the container booted | **nonzero `total_cost_usd`**, or a posted review |

The review gate had no such signal, which is why eight releases could not tell
it apart from a clean review. This is the generalization of 010's
*"a gate stuck on a false failure hides real ones"* — its inverse and its twin:
**a gate stuck on a false success hides everything.** A red gate everyone
ignores is bad. A green gate doing nothing is worse, because it is *believed*.

**The corollary (0.0.52).** *When you repair an enforcer, audit what it
enforces in the same change.* The prompt inside the dead workflow had drifted
for as long as the workflow had:

- it asserted **"the 14 typed objects"** when canon declares **23**
  (`PROTOCOL.md` §2) — the count predates Runtime Ports and every object added
  since;
- it demanded a `methodology/CHANGELOG.md` entry per release, which
  **FW-DEC-003 closed as an archive** at 0.0.47 — a false finding on every
  future PR;
- neither "14 typed objects" nor "12 primitives" appears anywhere in canon. The
  prompt was the sole source for its own invariants.

Repairing the plumbing alone would have produced a *working* gate enforcing
false rules — worse than the broken one, because its findings would carry
authority. Rewritten to point at governing sources instead of restating counts,
which is the rule the repo already applies to `VERSION`.

**A gate that cannot test itself needs its verification written into the
process.** The anti-tampering rule is correct and should not be worked around.
The consequence is that a change to `claude-review.yml` is verified on the
*next* PR, after merge — never on its own. That is now a comment in the file,
because it will otherwise be rediscovered as an auth failure by whoever touches
it next.

**Shared working tree, second occurrence — and this time the fix is
structural.** Retro 010 recorded the first: *"git refused, and that refusal is
the only reason it was safe. Shared working tree plus two agents is an
unguarded collision surface."* It named the hazard and changed nothing. This
session it fired again, harder, because both agents were mid-release:

- the other session's commit landed **on this session's branch**, between two of
  its commits, entangling two releases in one PR;
- one of this session's commits was **amended** by the other session;
- `HEAD` was moved out from under an in-flight push twice — the second time
  reverting a tracked file on disk mid-edit;
- both sessions claimed **0.0.52**;
- recovery cost a branch rebuild, a force-push, and a manual `VERSION`/ROADMAP
  conflict resolution.

Nothing was lost, again only because git refused the non-fast-forward push.
Twice is a pattern, and discipline is not the fix — **isolation is**. The Berd
project's startup mode was `none` (all sessions share one checkout); it is now
`auto-worktree`, so each session gets its own worktree. The rule:
**parallel agents get isolated worktrees, not instructions to be careful.**

---

## What worked

- **The pre-landing review caught it.** The CI failure was not the task; it was
  noticed while shipping something else, because `/ship` reads check state
  before merging. Cheap habit, eight releases of drift found.
- **Reading the log instead of the docs found the last two layers.** `id-token`
  and the anti-tampering skip are both invisible in the action's input
  reference; both were stated plainly in the run output. The paper fix was
  wrong twice, and the log said so both times.
- **Verifying the model ID before propagating it.** `claude-sonnet-4-6` looked
  like the obvious culprit and was not — it is still valid. The break was input
  *names*, not values. Checking the model catalog before "fixing" it avoided a
  change that would have looked like a fix and repaired nothing.
- **Auditing the payload, not just the plumbing.** The three stale prompt
  assertions would have survived any purely mechanical repair.
- **Refusing to do git surgery while another agent held `HEAD`.** Stopping to
  report rather than resolving unilaterally preserved the other session's work,
  and it turned out to have already renumbered itself to 0.0.53 — the proposed
  resolution would have been wrong.

## What didn't (honestly)

- **`track_progress: true` was added on a hypothesis the log falsified.** The
  guess was that mode detection suppressed the review; the log said
  `Auto-detected mode: tag`. The input was removed rather than kept with a
  disproven justification, but it should not have been added before reading the
  run output — the same *verify-before-fix* discipline retro 008 recorded and
  this session then violated inside its own fix.
- **The 0.0.52/0.0.53 resolution was proposed backwards.** The recommendation
  was that the other session keep 0.0.52; it had already taken 0.0.53. Proposing
  a resolution to someone else's numbering before reading their branch is the
  same error as fixing before verifying.
- **The gate is still not proven live.** Every layer this session can control
  works. The credential does not, and that is where it ends. The session
  produced a *correct* workflow, not a *working* gate, and the distinction is
  the honest report.
- **The project instructions went stale mid-session.** Berd's project
  instructions still say *"State as of 0.0.51"* and list the retired-accent
  token drift as open — resolved by FW-DEC-004 at 0.0.53. Config that describes
  state needs the same freshness discipline as docs that do.

---

## Methodology updates

### Add to methodology

- **A gate must prove it ran.** Exit zero is not evidence of work. Each gate
  declares a positive execution signal (assertion count, checks-passed line,
  nonzero cost, posted output) and that signal is what a reviewer checks — not
  the check mark. Extends the 0.0.49 enforcement rule to enforcers.
- **When you repair an enforcer, audit its rulebook in the same change.** A
  working gate with a stale rulebook is worse than a broken one, because its
  findings carry authority.
- **A gate that cannot self-test carries its verification instruction in the
  file.** State where the change gets verified (next PR, after merge) at the
  point of confusion.
- **Parallel agents require isolated worktrees.** Not care, not sequencing —
  isolation. Berd projects that agents work in parallel get
  `startup_mode: auto-worktree`.

### Modify in methodology

- **`AGENTS.md` rule 2 extends to CI.** The trio is spec → schema → validator;
  add: *if a check is declared as a gate, it must be observably executing.* The
  same sentence that catches an unenforced MUST catches an unenforced gate.

### Remove from methodology

- Nothing. No rule was found wrong this session; one was found not to reach far
  enough.

### Open, unresolved

1. **`ANTHROPIC_API_KEY` fails at `$0.00`.** Rotate, or check org credit.
   Distinguishable in one command: `curl -s https://api.anthropic.com/v1/models
   -H "x-api-key: $KEY" -H "anthropic-version: 2023-06-01"` — 401 means
   revoked, 400/402 means credit. **Harper's to run; do not guess.**
2. **Whether the review gate ever posts.** Unproven until a PR that does not
   touch `.github/` gets a review. The acceptance test is unchanged and
   outstanding.
3. **Whether "a gate must prove it ran" is promoted into
   `theories/the-coherence-operating-system.md`.** Same gating as 010's
   enforcement rule: hold it through one real protocol run first.
4. **Berd project instructions are stale** (see above). Harper's field to edit.

---

## Top 3 things to carry forward

1. **A green gate doing nothing is worse than a red one.** Nobody audits a
   passing check. Eight releases shipped under a reviewer that had never read a
   line, during a session whose entire purpose was eliminating exactly this
   shape of silence. Demand a positive execution signal from every gate, and
   look at it.
2. **The log knows; the docs guess.** Two of four defects were invisible in the
   action's documented input surface and stated outright in its run output.
   When a fix is a hypothesis, run it and read the output before shipping the
   next hypothesis on top.
3. **Isolate parallel agents structurally.** The shared working tree has now
   collided twice; the second time it entangled two releases and required a
   force-push to untangle. The fix is a worktree per session, applied once, not
   a note telling the next agent to be careful.

---

## Note for the next session

The workflow is correct and the credential is not. If the review check is still
red, **do not re-debug the workflow** — the four defects are fixed and each is
commented in the file with the symptom it produced. Check the credential first:
a `total_cost_usd` of `0` with `is_error: true` means the request never reached
inference, which is never a YAML problem.

And if you are reading this alongside a second agent in this repo: you each have
your own worktree now. Confirm it (`git rev-parse --show-toplevel`) before you
commit, and if it reports the shared checkout, stop and say so rather than
working around it.
