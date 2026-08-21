# Project Retrospective: The first real input (0.0.72 → 0.0.74)

**Date:** 2026-08-21 · **Addendum:** 2026-08-21, same session (see the end)
**Window:** ~00:07 → 10:15 local, 6 releases, PRs #82–#87
**Kind:** System-loop session — self-development of the protocol. Fifth
observable instance after retros 008–011. Ran as **four parallel Berd sessions
in four isolated worktrees**, plus seven independent adversary passes in seven
more, which is itself one of the findings.

---

## What the session was

It began as a question about integration: *there are notes about a design/strategy
harness in this repo — what agents and skills do I need to drive work and decisions
into the protocol?*

The answer turned out to be already written down and never built. `personal/NODES.md`
had carried the row **First Operating Harness skeleton — "SignalThesis locked; need
first worked flow against a real node"** since May. The SignalThesis for the carrier
was locked 2026-06-03. Its own negative-space statement **N4** names that exact
state as failure: *anything built must compose with a running enforcer; documentation
alone is not built.*

So the session's real subject was: close N4 on the node that declares it.

Three releases came out of it. The third is the retro's centre of gravity.

---

## The causal chain

1. **The carrier was specified** (0.0.73) by subject-swapping GAMUT's Design
   Harness v0.2.2 from design intent to operating intent. One genuine departure
   from the source pattern: design intent moves between the operator's own
   surfaces, but operating intent can reach *people*, so `internal | emission`
   was insufficient and a third `cross-tenant` channel was added whose scoped
   consent requirement derives from the operation kind rather than being an
   authored field.
2. **It was falsified seven times** by an adversary that was not the author,
   every pass pinned to an exact `HEAD` and spec blob before reading. Defect
   density matched the Design Harness precedent: authored authority that could
   lie, a diagnostic write carve-out, a `narrated` terminal the lifecycle made
   unsatisfiable, and two registered diagnostic operations that were
   **structurally impossible** — they required option ids while their only legal
   lifecycle path required the Options table empty.
3. **The human ruled what an agent may not** (`FW-DEC-010`): 21 authority
   bindings, `single-writer`, `writer_id: harper`, an independent private
   repository, records under `personal/operating/`. Held **RECOMMENDED / open**
   across all seven passes.
4. **A standalone enforcer shipped** with ten deterministic cases, each carrying
   a negative fixture — the first mechanically enforced rules the Operational
   layer has ever had.
5. **The first real record refused itself.** `harness-open` produced a
   correctly-formed record; the validator rejected it with
   `Enforcer-gap log table has a noncanonical header`. The header was canonical.
6. **`parse_sections!` mixed units.** It located each body section with
   `String#index` — a **character** offset on a UTF-8 string — and cut it with
   `byteslice`, which takes **byte** offsets. One non-ASCII character anywhere in
   the body shifted every later section slice by the difference. The record
   contained one em dash. Two bytes.
7. **Fixed as 0.0.74**, with an eleventh case: a *positive* fixture carrying an em
   dash and an accented name, verified on shipped bytes to be refused by the
   0.0.73 validator and accepted by the 0.0.74 one.

---

## What the session teaches the methodology

### 1. Review of a specification is not execution of the implementation

This is the finding. Everything else is smaller.

Seven independent falsification passes, each blob-pinned, each hunting exactly this
class of defect, cleared the grammar. They never ran the parser on a body containing
a character outside ASCII. All ten shipped cases were ASCII, so the suite could not
have caught it either.

The defect was found in minutes by writing one real record.

Note what the spec *says*: §5.3 requires records be UTF-8 and NFC-normalized. Non-ASCII
is in scope **by construction**, and a real private store carries accented collaborator
names and typographic dashes. The failing input was not exotic; it was ordinary, and it
was the first one.

Sharpened rule: **a gate is not validated until it has run on material it did not
author.** Fixtures are written by the same hand as the checker and inherit its blind
spots. This is the same shape as retro 011's finding (a CI check that reported success
while reviewing nothing) and 0.0.49–0.0.50's finding (eleven rules asserting enforcement
they did not have), one layer further out: **0.0.73 had a real enforcer that really ran
and was still wrong about its own input domain.**

### 2. The worked-flow bar is not ceremony — it is the only test of this kind

`operating-harness-spec.md` §10 sets promotion at *one worked flow against a real node,
closed to `evidence-recorded` with resolving back-links, plus the validator running in
its own gate.* That bar existed before this session and looked like diligence.

It paid for itself on the first attempt to clear it. Had the bar been "spec reviewed
and validator green," 0.0.73 would have been promoted with a parser that refuses ordinary
records.

### 3. Failing closed is necessary and not sufficient

Every observed alignment of the offset bug moved a canonical header out of position and
**failed closed** — the correct direction for a gate to fail. But the error message named
the record, not the parser, and pointed at a table that was byte-perfect. A gate that fails
closed with a misleading finding still costs the operator the debugging time, and in a less
attentive session it would have been "fixed" by deleting the em dash — hiding a shipped
defect behind a cosmetic edit to real evidence.

New discipline: when a gate refuses material you believe is correct, **suspect the gate
before editing the evidence.** Editing the input to satisfy a checker is the failure mode
`validate-tokens` exists to prevent, one layer out.

### 4. Blob-pinning caught two would-be false closures — keep it

Two failures were caught only because each review verified the exact `HEAD` **and blob**
before reading:

- a reviewer graded a **stale snapshot** while reporting on the current shape;
- an author "resolution" was recorded against bytes a rebase had already replaced.

Both were recorded as **dissent appended, not history rewritten**. Rounds 1–2 of the
findings artifact are disclosed as later *reconstructions* whose contemporaneous wording
is not recoverable, and therefore may never be cited as pre-registration. That disclosure
is worth more than the reconstructed text.

### 5. Asymmetric warrant is what made the loop converge

The findings artifact fixes it explicitly: an **external resolution** carries the stronger
warrant; an **author resolution** records that the author believes a correction landed and
**cannot grant clearance**. Without that asymmetry the seven rounds would have terminated at
round one, because the author's fixes always look sufficient to the author.

This is the H11 problem (*"10/10 may be one person agreeing with themselves"*) solved
procedurally rather than argued about.

### 6. A skill that installs nowhere is the same defect one layer out

The three carrier skills landed as files that **nothing installed** — absent from the
`SKILLS` array in `bin/install-skills`, from `skills/OPERATING_SKILLS.md`, and from the
`AGENTS.md` inventory. A clone would get three `SKILL.md` files that never reach the skill
namespace. Caught during integration, not by a check. **There is still no check for this.**

---

## What worked

- **Parallel worktrees, one agent per tree.** Four build lanes and seven review lanes,
  zero collisions, zero foreign-change incidents. The 0.0.53 rule held.
- **Zero file overlap between lanes**, verified with `comm` *before* rebasing, so 30
  carrier commits and three lane commits stacked onto a moved `main` with no conflicts.
- **The release-uniqueness guard fired** and named the 0.0.60 collision by hand before a
  second release could silently share a version number.
- **Holding the human ruling open.** The 14th & Co guard-rail — an agent may recommend a
  Sovereignty-loop exit and must never record it as decided — survived seven rounds of
  pressure to just settle it.
- **The private store never got a remote.** `personal/` was untracked-but-not-ignored on a
  public remote at session start: 52 files, 33 of them naming a collaborator, one
  `git add -A` from publication. Same defect class as the `Berdia/` fix two days earlier.
- **Writing the record by hand exercised the spec harder than reading it.** Two grammar
  facts (canonical minified JSON arrays; `#operation-result` as the narrated
  `result_ref`) were only *understood* by being refused.

---

## What didn't (honestly)

- **Ten fixtures, all ASCII.** The suite's coverage gap was invisible because the author of
  the fixtures and the author of the parser were the same, in the same encoding habit.
- **Seven review rounds produced no test.** Every round proposed corrections to prose; not
  one round proposed *running the executable on adversarial input*. The adversary was pointed
  at the specification and behaved accordingly.
- **A decision-number collision, twice.** `DECISION-009` was claimed concurrently by the
  spectrum lane and the carrier lane; the correction was issued and then **not applied** on
  the first attempt, landing as `009` anyway and needing a second corrective commit
  (`FW-DEC-010`). Parallel lanes have no allocator for sequential decision numbers.
- **A stale reviewer session reported on the wrong snapshot** and had to be replaced with a
  fresh one physically pinned to the target commit. Reused review sessions drift.
- **The first record's subject had to change mid-flight.** `advance-node` on Club Volley 2.0
  was the plan; it requires `evidence_refs` to bytes a real advance produced, and no Club
  Volley advance had happened. Writing one would have been §7 r3 theater. Correct call, but
  it was caught at write time rather than at planning time.
- **Berd reported sessions as `streaming` long after they were idle**, so session state was
  not a reliable completion signal; file mtimes and git state were. Every "is it done" answer
  this session came from the filesystem.

---

## Methodology updates

### Add to methodology

1. **A gate is not validated until it has run on material it did not author.** Fixtures
   inherit their author's blind spots. Before a checker is called enforced, run it on the
   first real input and record the result.
2. **When a gate refuses material you believe is correct, suspect the gate first.** Editing
   evidence to satisfy a checker is prohibited; if the edit is the fix, the checker was the
   defect.
3. **Adversary briefs must name execution, not only review.** A falsification pass over a
   spec that ships an executable must include *run the executable on input outside the
   fixtures' domain* as an explicit obligation.
4. **Input-domain fixtures are mandatory for any parser.** At minimum: non-ASCII, NFC
   boundary, empty and maximal sections. This is now the eleventh case; it should be the
   template.
5. **Asymmetric warrant, recorded in the artifact.** External resolution > author resolution;
   an author resolution cannot grant clearance. Proven to be the thing that makes an
   iterative falsification loop converge instead of terminate.
6. **Decision numbers need an allocator when lanes run in parallel.** Claim the number in a
   single commit on the base before the lane starts, or expect a collision.

### Modify in methodology

- `AGENTS.md` "Skills and agents" now carries a **fifth class** (carrier skills) and must
  stay in step with `bin/install-skills`; the two drifted within one release.
- Retro 011's finding ("a check that reports success while checking nothing") should be
  restated to cover this case: **a check that really runs can still be wrong about its own
  input domain.**

### Remove from methodology

- Nothing. No rule was found wrong this session; two were found insufficient.

### Open, unresolved

> **Status as of the addendum:** items 1 and 2 are closed, 6 is
> partly closed, and three new items were opened. See *Addendum* below; the
> original wording is left intact.

1. **No check couples `skills/*/SKILL.md` to `bin/install-skills`.** The drift was caught by
   a human reading a diff. Mechanically checkable, currently unchecked.
2. **`harness-close`'s refusal path is now tested, but only in scratch.** Six probes
   (tampered blob, drifted bytes, empty back-links, committed-vs-rejected review, non-writer
   transition, control) all refused correctly against a copied store. There is no committed
   fixture for the *close skill's* gate as distinct from the validator's.
3. **The product-loop closing signal is still unwired.** Two terminal records exist; the
   review index at `<operating-root>/reviews/<yyyy>-W<ww>.md` has no generator.
4. **Zero of the 21 authority bindings are automatically enforced.** Ratified is not
   enforced. §3.4 states this; nothing shortens the gap yet.
5. **`schedule-routine` has no machine surface** on the runtime this practice actually uses.
   Berd's Automations are UI-only, and there is no `event` or `continuous` trigger, so every
   check runs `on_demand` by necessity, not preference.
6. **Whether a worked flow on the instrument's own node clears §10's bar** is unresolved. The
   `operating-harness` record is a real advance with real evidence, and it is self-application
   — the same weakness H11 names. An external-node flow is still owed.

---

## Top 3 things to carry forward

1. **Run the thing on real input before calling it enforced.** Seven blob-pinned reviews of a
   specification missed a defect that one real record found immediately. Review and execution
   are different instruments and do not substitute.
2. **Keep warrant asymmetric and write it into the artifact.** "External resolution is stronger;
   an author resolution cannot grant clearance" is the sentence that made seven rounds converge.
3. **Refuse to fabricate the subject.** The first record's operation was changed at write time
   because the planned one required evidence of an advance that had not happened. The whole
   apparatus is worthless the first time it records something that did not occur.

---

## Note for the next session

The two closed records are at
`operating/club-volley-2-0/2026-08-21-001-read-node-state.md` (narrated) and
`operating/operating-harness/2026-08-21-001-ratify-and-land-v0.md` (committed) in the private
store. Both validate under 0.0.74; the second's five back-links re-hash exact.

Do not treat either as promotion. §10's bar wants a worked flow, and the strongest one here is
**self-application** — the instrument advancing its own node. The honest next move is a record on
a node the author does not also own the instrument for, and the cheapest available check is the
one this session left open: a mechanical link between `skills/` and `bin/install-skills`.

---

## Addendum — 2026-08-21, ~09:30 → 10:15, releases 0.0.75 → 0.0.77

*Written in the same session, after three more releases. It is here rather than in
a retro 013 because it is the same finding continuing to happen, and separating
them would hide the frequency.*

### The thesis got tested three more times and held every time

This retro canonised one rule at 0.0.75: **a gate is not validated until it has
run on material it did not author.** It was written from a single instance — the
offset bug. In the ninety minutes after it was written, the same rule produced
three more findings, none by review:

| # | Found by | Release | Defect |
|---|---|---|---|
| 1 | Writing the first record | 0.0.74 | Character-offset vs byte-offset section slicing |
| 2 | Probing whether a claim was true before acting on it | 0.0.76 | The spec declared **less** enforcement than it had |
| 3 | Re-validating the store after a release | 0.0.77 | Back-link check conflated provenance with freshness |
| 4 | Testing the installer's refusal paths before landing | 0.0.76 | Installer would have overwritten a foreign `pre-commit` hook |

Three hits in ninety minutes for a rule derived from one. That is the rule earning
its place, and it is also a warning: the reason it keeps paying is that the
practice has a large stock of checks that have never run on anything real.

### New finding: the defect class runs in both directions

The repo's signature defect is *asserted but unenforced* — a claim with nothing
behind it. 0.0.76 found the **inverse**, and it had not been named before:

- **0.0.73** shipped a validator with ten cases and nothing invoking it, then
  labelled rows `Unwired`. That label was *accurate about the trigger* and the
  practice still had no gate.
- **0.0.76** found that the same spec said `consent presence check unwired` and
  `executable absent` on four carrier rows, and titled §4 *The missing enforcer*,
  **all after 0.0.73 had built the thing**. The spec was claiming *less*
  enforcement than it had.

Declaring less is less dangerous than declaring more, and it is still a defect,
for a specific reason: **a record inherited the stale claim.** `mantl/001`'s
enforcer-gap log said the consent-presence check was unwired, because canon said
so. The correction (`mantl/002`) had to be written as a separate record citing the
first by blob — dissent appended, not history rewritten. A stale status label does
not stay in the document; it propagates into evidence.

**Rule added:** an enforcement label is a claim like any other and goes stale like
any other. When an executable lands, the labels that described its absence are
part of the same change.

### New rule, and the strongest one this session produced

**A rule whose enforcement generates pressure to break it is mis-specified.**

FW-DEC-011's finding: back-link verification hashed the current bytes at a cited
path and required equality. That made **every closed record decay to invalid as
the evidence it cited legitimately evolved** — and the cheapest repair for a
decayed record is to rewrite its recorded hash, which §5.3 rule 6 forbids
absolutely. The rule was manufacturing exactly the temptation another rule existed
to prohibit.

The fix was not to relax rule 6. It was to notice that the check was asking the
wrong question: *did the advance produce these bytes* (permanent, answerable by
object existence) had been conflated with *are these still the current bytes at
that path* (a freshness claim no record ever made).

Generalised: when a prohibition needs willpower to hold, look for the rule that is
creating the pressure. It is usually the one that is wrong.

### What it cost, and what the evidence looks like now

Byte-drift detection was fatal for three hours and cost a valid record. It is now
a `[note]`. The store's own output is the argument:

```
[note] operating-harness/001: back_links[3]: cited bytes are no longer current at
       bin/validate-operating-harness-record (cited 04d6ec4b, now 6dd6448d)
```

The **validator changed its own cited bytes** when it implemented the ruling.
Under the previous rule, the fix would have invalidated the record that cited the
thing being fixed. And `mantl/002` diverged **within thirty minutes of closing** —
a record written after the problem was diagnosed still got caught by it, which is
what makes it structural rather than unlucky. The spec's blob moved twice in
ninety minutes: `2bde96c0 → 840bb4a1 → 346e03c2`.

### Open items — updated

- **1. Skills ↔ installer check — CLOSED** at 0.0.75.
  `bin/validate-skill-registration` runs in `make protocol-check` and also checks
  that a skill's `name:` equals its folder, which is load-bearing on Berd.
- **2. Close-gate refusal path only tested in scratch — CLOSED** at 0.0.76. Ten
  committed gate cases, including five installer refusals. One of them earned its
  place immediately: without it the installer would silently overwrite a foreign
  `pre-commit` hook.
- **3. Product-loop review index — still open.** Five terminal records now exist,
  so a generator would produce something real.
- **4. Zero of 21 bindings enforced — narrowed, not closed.** The three carrier
  checks are now **Enforced at commit**; the 18 subject operations remain
  human-gated or no-gate by design. Authority is still not machine-conferred and
  should not become so.
- **5. `schedule-routine` has no machine surface — unchanged.**
- **6. External-node flow — partly closed.** `mantl/001` is a record on a node with
  a real external counterparty, and `mantl/002` corrects it. Both are `internal`
  channel and diagnostic. **The `cross-tenant` channel has still never carried an
  act**, and cannot until a real person grants a scoped consent record — which is
  a conversation, not a task.
- **7. NEW — nothing audits whether a store has the gate installed.** "Enforced at
  commit" is a property of *this* store, not of the practice. `mantl/002` names
  this in its own findings.
- **8. NEW — `--no-verify` bypasses the gate.** It defends against error and
  drift, not a determined author. A tamper-evident store needs an append-only
  substrate, which git is not.
- **9. NEW — object existence is not permanence.** `git gc` can drop unreachable
  objects. Every blob cited so far was committed and is reachable, but the
  guarantee is git's, not the carrier's. Citing an immutable reference instead of a
  path remains open and would supersede FW-DEC-011's leniency rather than extend
  it.

### What actually got built, for the next reader

Six releases, 0.0.72 → 0.0.77. The carrier is specified, falsified by a
non-author, ratified (`FW-DEC-010`), enforced by a standalone validator with 13
record cases, and gated at commit by a per-store hook with 10 gate cases. Five
records are closed across three nodes in a private, remote-less store of 22
commits; all five re-validate under 0.0.77.

**Still not promotion.** §10's bar is a worked flow, and the strongest one here
remains self-application. What changed is that the instrument now refuses things,
including — twice today — refusing its author.
