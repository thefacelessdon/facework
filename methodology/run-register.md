# Run Register

**Artifact:** RunRegister · **Version:** 1.0 · **Status:** working-draft
**Created:** 2026-09-05 · **Owner:** protocol author

Every Facework run, in one place. `ROADMAP.md` and `methodology/CHANGELOG.md`
have both referred to "the run-history record" as though it were a document; it
was not. It was scattered across thirteen retros, a reality-check note and a
changelog entry, which is why the run count and the independence claim have
drifted apart more than once.

**This register exists to settle one question and keep it settled:** how many
runs, on what, and — the column that actually matters — **who operated them.**

---

## What the modes mean

A run count is not evidence of anything on its own. What a run proves depends
entirely on who was holding the protocol.

| Mode | Definition | What it is evidence of |
|---|---|---|
| `authored` | The protocol author ran it and scored it. | The protocol produces coherent output. Says nothing about whether anyone else can run it. |
| `delivered` | Someone else received artifacts the author produced by running it. | The output travels. Does not test operation. |
| `operated · observed` | Someone who is not the protocol author ran the phases themselves, with the author watching and intervening where needed. | **The primitives land in another pair of hands** — they can be picked up and driven by someone who did not build them. Not independence: the author was in the room and could correct drift in real time. |
| `operated · unattended` | Someone ran it with the author absent. | The primitives hold without their author. **No run has reached this.** |
| `reviewed` | Someone not in the room reviewed a handoff package, or scored a diagnostic independently. | **Independence.** No run has reached this. |
| `pending` | Mode not yet recorded. | Nothing. Fill it in. |

**The mix is real and is not one thing.** That distinction was carried in memory
rather than in writing, which is exactly the failure this file closes.

**Note the two `operated` variants.** They are the difference between *"other
people can run this"* and *"this holds without me,"* and collapsing them into one
word is how a transfer claim quietly becomes an independence claim. The first is
earned. The second is not.

---

## The register

Rows marked `pending` need the author to fill the mode. Every other column is
evidenced from a retro, a `define/` tree, or the ROADMAP.

**One project is one run**, however many passes it took. Retros 003, 004 and 005
are three passes of a single self-application on one day and count once —
counting passes is how a run number gets inflated without anyone lying.

| # | Project | Track | Mode | Date | Evidence |
|---|---|---|---|---|---|
| 01 | **GAMUT** | creator commerce / platform | `authored` | 2026-03-17 | `retros/001` — 4 days, all phases |
| 02 | **Facework** (self-application) | platform-product | `authored` | 2026-03-24 | `retros/003`–`005` — three passes in one day: initial run, reconciliation, full close |
| 03 | **FACTORY** | platform-product | `authored` — outside-in | 2026-07-01 | `retros/006` — full 12-primitive run from a public transcript and a site crawl, no founder interview |
| 04 | **14th & Co** | agency-studio | `authored` — loop-instrumented | 2026-07-07 | `retros/007` — instrumented re-pass, all 8 gated in order |
| 05 | **Her Set Her Sound** | cultural brand | `operated · observed` | — | `define/` tree, 17 artifacts · named in ROADMAP |
| 06 | **Hop In Real Estate** | `pending` | `operated · observed` | — | named in ROADMAP |
| 07 | **Baang & The Gang** | creator | `operated · observed` | — | `define/` tree, 17 artifacts · named in ROADMAP |
| 08 | **ChefNIC** | `pending` | `operated · observed` | — | named in ROADMAP |
| 09 | **MANTL** | platform-product | `operated · observed` | — | `define/` tree, 26 artifacts |
| 10 | **CA-OS** | platform-product | `operated · observed` | — | `define/` tree, 46 artifacts, `evidence_level: signaled` |
| 11 | **Inner Studio** | `pending` | `operated · observed` | — | `define/` tree (non-standard shape) |
| 12 | **Gitwit — Bentonville studio** | agency-studio | `authored` | 2026-08-19 → 09 | `retros/2026-08-19-gitwit-bentonville-run` — 8 of 8 gated in one day, 41 artifacts, coherence **4.00 GREEN**, failing term Flow, primary locus Consonance. Earned release 0.0.70. Continued in a separate repo: 17 decisions, 12 playbooks, Phase 7 gates Entropy **passed**, Consonance and Sovereignty **not**, re-scored **3.0 GREEN low edge** |

Plus one scenario, not a project run: **cultural hunch validation** (`retros/002`,
2026-03-24) — an end-to-end loop exercised against a hypothetical.

**12 project runs. 11 of them on something other than Facework itself** — which
is where the informal "about ten" comes from, and it holds up.

**Operated by someone other than the author: seven**, in every case with the
author observing and intervening where needed. **Operated unattended: zero.
Independently reviewed or scored: zero.**

> **Provenance of the seven.** The mode on rows 05–11 is recorded from the
> author's own account (2026-09-05), not from a per-run artifact. Each of those
> runs has a `define/` tree or a ROADMAP mention, but none carries a record of
> who drove it. **The mode is therefore the least-evidenced column in this file**,
> and the fix is cheap: the next run to start should name its operator in
> `PROJECT-CONTEXT.md` on day one, so this never has to be reconstructed again.

> **On row 12's two scores.** The 2026-08-19 run scored **4.00**; the continued
> run in the engagement repo scored **3.0**. Not a contradiction and not a
> regression to hide — the second is a re-score after Phase 7 gated, and the
> drop is the adversarial pass doing its job. A register that recorded only the
> higher number would be the exact defect this file exists to prevent.

### Not protocol runs — system-loop sessions

Kept separate on purpose. These develop the protocol; they do not test it on a
project, and counting them as runs would inflate the number.

| Retro | Session | Date |
|---|---|---|
| `008` | Runtime ports validation program (Buzz → Letta → OpenAI) | 2026-08-05 |
| `009` | Standards-first experience run (face.works) | 2026-08-11 |
| `010` | Enforcement-backlog session, 8 releases in 76 minutes | 2026-08-18 |
| `011` | The unenforced enforcer — ran in parallel with 010, in the same tree, which is itself a finding | 2026-08-18 |
| `012` | The first real input — 6 releases; four parallel Berd sessions in isolated worktrees plus seven independent adversary passes, which is itself a finding. Addendum same session | 2026-08-21 |

### Runtime validations

Four reference runtimes, plus a fifth multi-harness shell. These test the
**ports**, not the protocol.

Buzz (collaboration/audit) · Letta (memory/context) · OpenAI (hosted) ·
Claude Code (file-native) · Berd (multi-harness — the corner where the agent
loop is a late-bound parameter).

---

## The independence gate

`ROADMAP.md` 0.1.0 holds the next minor version open on two conditions, and
this register exists partly to stop that claim drifting again:

- [ ] A handoff package **reviewed by someone who was not in the room**
- [ ] A diagnostic **scored independently — two scorers land in the same zone**

Neither has happened. **The nearest thing to it already exists, seven times
over** — runs driven by someone who did not build the protocol. The single
cheapest way to close the gate is to take one of those operators and have them
review a handoff package cold, or score a diagnostic without seeing the
author's score first.

**The ROADMAP is now half stale, and precisely half.** It says *"every run to
date was operated and scored by the protocol author."* Rows 05–11 were
**operated by other people** — so the operation half no longer holds. The
scoring half does, and so does the conclusion: **independence is still zero**,
because the author was present throughout and no handoff has been reviewed or
scored by anyone who was not.

That distinction is worth keeping sharp rather than resolving in either
direction. *Seven people picked up the primitives and drove them* is a real
transfer result and the strongest evidence in this file. *It has never run
without its author in the room* is also true, and it is the frontier. Neither
sentence is allowed to stand in for the other.

---

## How to add a run

One row. Project, track, mode, date, and a pointer to something that exists —
a retro, a `define/` tree, a dated artifact. Then, if the run changed the
protocol, say what changed and link the release. A run that taught nothing is
still worth recording; a run recorded without its mode is not.

**Keep `ROADMAP.md` and `methodology/CHANGELOG.md` pointed here** rather than
restating counts, which is how the drift started.
