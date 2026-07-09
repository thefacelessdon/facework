---
title: "Loop Model — Validation Evidence (14th & Co instrumented run)"
date: 2026-07-07
status: VERDICT — PROMOTE (with one required fix + one caveat)
source_run: /Users/facelessdon/projects/14th-co/facework-run-2026-07-07/
gates: "This is the gate for folding the Loop Model into
  theories/the-coherence-operating-system.md as a canonical 'The Loops' section."
relates: methodology/loop-model.md, theories/the-coherence-operating-system.md,
  methodology/retros/007-14th-co-loop-instrumented-run.md
---

# Loop Model — Validation Evidence

**Question this document answers:** Did each of the five loops close on its named
closing signal during a real, mature protocol run? Where did a loop run without a
clear exit? And does the run **earn** promoting the Loop Model from a design note
into canon (`theories/the-coherence-operating-system.md`)?

**One-line verdict: PROMOTE.** The run is unusually strong evidence *because* most
of its loops did **not** close cleanly — and every failure was a named,
predicted-by-the-model variant of "ran without closing on its signal." A model
that only describes success proves little; this run empirically reproduced the
exact failure the model exists to name.

---

## The model's central claim (what we were testing)

> A loop without its closing signal doesn't converge. It just runs until
> something external stops it. *(loop-model.md)*

If that claim is true and useful, then on a real project we should be able to
find loops that produced *output* but never closed on their *signal* — and those
should correlate with the project's actual coherence debt. That is exactly what
we found.

---

## Evidence by loop

### Task loop — VALIDATED (strongly)

Named signal: the phase gate. Result across 8 phases:

| Closure type | Phases | What it proves |
|---|---|---|
| Closed cleanly on named signal | 1 Semantics, 3 Taste | The signal *works* when it's testable and wired |
| **Closed on a proxy signal** | 5 Stability (readable specs, not CapabilityMap+Ports), 6 Resonance (human eyeballing the live site, not a green test suite) | The named signal didn't exist, so a human stand-in closed the loop — the model's predicted degradation |
| **Never wired (no artifact)** | 7 Entropy, 7 Consonance (inline-only in prior runs) | An audit that leaves no re-diffable artifact **did not close** — it stopped. Exactly the failure mode. |
| **Closed then silently reopened** | 2 Field (buyer word + adopter drifted upstream) | A closed loop with no re-close signal reopens invisibly — the most expensive variant |
| Blocked by unresolved contradiction | 4 Strategy (scope), 8 Coherence (Runtime sub-gate) | The gate correctly refused to close on unresolved input |

**2 of 8 phases closed cleanly on their own named signal.** The other 6 each
demonstrate a *distinct* named failure the model predicts. This is the core
finding: the debt surfaced by the diagnostic (`08-diagnostic-report.md`)
**is** unclosed-loop debt — stale docs (reopened loops), missing tests/ports
(proxy closes), inline-only audits (unwired loops). The model's taxonomy maps
1:1 onto the project's real problems. That is validation.

### Product loop — VALIDATED

Named mechanism: **Postures fire on signals.** On 14th & Co, **two Postures are
firing right now** with live signals: `contract-sync` (doc/pricing/field drift
vs Semantics + live deploy) and `decision-log` (unratified scope expansion). Six
more map cleanly to real or future signals (see run log). This confirms the
reframe "**Postures are the product-loop operating modes**" — they are not a
separate concept; they are how the product loop stays closed.

### System loop — VALIDATED (self-demonstrating)

Named signal: diagnostic + retro + CHANGELOG. This run *is* the system loop
closing: it produced `08-diagnostic-report.md`, retro 007, this validation, and a
CHANGELOG entry — and it changes the practice (this promotion). The system loop
was not described in the abstract; it was executed and its output is a canonical
change. Retro 007 is explicitly the **first retro authored as a system loop.**

### Sovereignty loop — VALIDATED, with a naming fix required

Named signal: human judgment against Frequency + Constitution (Sovereignty, Art.
VIII). The run produced **genuine human-only exits the protocol could not and
should not resolve**:
- The **lean-identity vs institutional-publication scope cull** (ConsonanceCheck
  C3) — surfaced by the protocol, decidable only by Harper (ADR-015 pending).
- The **GAMUT cross-repo authority** adjudication.
- The prior **Cebridge cull** (Decision 003) as a reallocation of energy.

This confirms the model's sharpest claim — that the human keeps this loop on
**ownership**, not quality grounds. The protocol *correctly* escalated rather
than inventing a decision.

**Naming inconsistency — already resolved by 0.0.12 (#11), confirmed here.**
`loop-model.md` had named the top ring the **"Oversight loop"** in its tables,
while its own closing-signal column and Constitution Art. VIII call the mechanism
**"Sovereignty,"** and this run's brief called it the **"Sovereignty loop."** That
inconsistency was **fixed in PR #11 (0.0.12)**, which renamed the top ring to the
**Sovereignty loop** and distinguished the Sovereignty *primitive* (control of the
system being built) from the Sovereignty *loop* (control of the work itself) —
same force, two altitudes. This run independently arrived at the same resolution
and **confirms** it; §VII carries it into canon. No naming work remains — the flag
the brief anticipated ("the model may still say oversight") was closed by #11
before this run landed.

---

## Does the run earn promotion? — YES

Criteria for folding into `theories/the-coherence-operating-system.md`:

| Criterion | Met? | Evidence |
|---|---|---|
| All five loops exercised on a real, mature run | ✅ | Every loop appears in the run log with concrete instances |
| Closing signals are the operative discipline (not vocabulary) | ✅ | Project debt = unclosed-loop debt, 1:1 |
| Loops compose with primitives without duplicating them (Art. XII) | ✅ | Loops are the *temporal* read of the same gates; no primitive was renamed or duplicated |
| Model predicts real failure modes, not just successes | ✅ | 4 distinct predicted failure types observed (proxy, unwired, reopened, blocked) |
| No unresolved internal inconsistency | ⚠ → fix | Oversight/Sovereignty naming; fix before/at promotion |

**Verdict: PROMOTE**, applying the naming fix, and adding one earned sub-rule
(below).

## Earned addition to the model (new sub-rule)

The Phase-7 inline-audit finding is a genuine discovery, not just a data point:

> **A closing signal must produce an artifact.** An audit, review, or gate-check
> that converges only in conversation and leaves nothing re-diffable has **not
> closed its loop** — it has stopped. The next run cannot diff against it, so the
> loop silently reopens. Wiring a loop means wiring it *to an artifact.*

This tightens the model's existing "wire each loop to its signal" instruction
with the reason inline audits fooled prior runs into thinking Phase 7 was
"complete." Fold it into the "Closing signals — the discipline" section.

## Caveat on scope of this evidence

One run, one track (Agency/Studio / methodology), one operator. The model is now
*validated as descriptive* against a real mature project; it is **not** yet
validated across tracks (Creator, Athlete, Platform) or across operators. Promote
it as canon with that boundary stated — same discipline the model already applies
to itself ("validated vs. aspirational").
