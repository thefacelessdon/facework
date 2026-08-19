# H2 — Checkpoint and resolution protocol

**Written:** 2026-08-19, **before any call has resolved.** That timing is the
point: every rule here was set while there was no outcome to be tempted by.
**Governs:** all H2 rounds. **Binds:** the author first.

---

## Scheduled dates

| Date | Event |
|---|---|
| 2027-02-19 | Round 1 interim checkpoint |
| 2027-08-19 | Round 2 interim checkpoint |
| 2028-08-19 | **Round 1 resolves** (P1 Twitch, P2 OpenAI, P3 Tecnobrega) |
| 2029-08-19 | **Round 2 resolves** (P4 Nishijin, P5 Strasbourg, P6 sound systems) |

A missed checkpoint is recorded as missed. It is not backdated.

## What a checkpoint does

**Records observations against open calls. Nothing else.** Specifically it MUST NOT:

- restate, narrow, widen or clarify a call's locus, window or falsifier
- add a locus "also predicted"
- reinterpret a falsifier in light of what has since happened
- retire a call because the subject became inconvenient to track

An interim checkpoint **may** close a call early if the break has already arrived
and the falsifier is unambiguously met. It may **never** close one early as
NO-BREAK — the window has to run.

## Resolution states

| State | Meaning |
|---|---|
| **CORRECT** | A material break occurred and its proximate mechanism sits in the named layer |
| **WRONG-LAYER** | A material break occurred; its mechanism sits elsewhere |
| **NO-BREAK** | Nothing material occurred in the window |
| **VOID** | The subject ceased to exist or became unobservable in a way the call did not anticipate |

**VOID counts against the record.** It sits in the denominator as a miss. This rule
exists because VOID is the only state an author can reach by argument rather than
evidence, and a state that costs nothing will be reached for.

For a "holds" call the states invert: CORRECT means no break occurred; WRONG means
one did.

## Evidence standard

A resolution requires **public, citable, dated** evidence, listed in the resolution
entry. Private knowledge, inference from silence, and "widely understood" do not
resolve a call. If the evidence is contested, the call resolves **against** the
author — the burden sits on the person claiming the hit.

## Append-only

Resolutions are **appended** to the round's file with their own date, under a
`## Resolutions` heading. The pre-registered sections are never edited. Anyone can
verify this with `git log -p` on the file; the point of the discipline is that the
check is mechanical, not trust-based.

## Who may resolve

Anyone. An external resolution that meets the evidence standard stands even if the
author disagrees — the author's recourse is to append a dissent, not to overwrite.
The author's own resolutions are valid but carry the weaker warrant, which is worth
stating in any published record.

## Reporting rules

1. **Never report a hit rate without n.** Six calls is not a hit rate.
2. **Report weak-weight and strong-weight calls separately.** A hit on a modal-layer
   call (Frequency) is close to the prior and must not be pooled with a hit on a
   rare-layer call.
3. **Report NO-BREAK and VOID counts explicitly**, not as omissions.
4. **Do not report an aggregate below 20 resolved calls** except as "n too small to
   quote," stated in those words.
5. WRONG-LAYER is reported as a distinct failure from NO-BREAK. Collapsing them
   flatters the method — it hides the case where the instrument saw a real fracture
   and pointed at the wrong layer, which is the failure mode that matters.

## The failure modes this document exists to prevent

Named now, so they are recognisable later:

- **Silent re-specification.** Editing a locus once the break is visible. Rule 1
  of pre-registration and the append-only rule together make this detectable.
- **Hindsight layer-fitting.** Deciding after the fact that a break "was really" a
  Consonance problem. The falsifiers were written to make this hard; the resolution
  must quote the pre-registered falsifier verbatim.
- **Cherry-picked n.** Quoting the rounds that went well. Rules 1–4 above.
- **VOID laundering.** Retiring the misses. VOID counts as a miss.
- **Checkpoint drift.** Letting the dates pass and resuming later with a fresh
  round instead. A missed checkpoint is recorded as missed.

## Revisit trigger

This protocol may be amended **only** between resolution dates, never within 90
days of one, and every amendment carries its own date and rationale. Amending the
scoring rules while a call is pending is how a method stops being a method.
