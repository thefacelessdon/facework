---
id: FW-DEC-009
title: Flow owns resistance inside the declared work path; Entropy owns waste outside it
date: 2026-08-21
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — ruling delegated to the agent, 2026-08-21
---

# FW-DEC-009 — One loss, one term

## Question

`theories/coherence-instrumentation.md` §IV gives the ammeter and calorimeter
two of the same observables:

- the **Flow** ammeter measures decisions relitigated and context lost across
  handoffs while tracing work from intent to shipped output;
- the **Entropy** calorimeter also names relitigated decisions and context lost
  across handoffs as waste heat.

That violates the detector principle in §II.1 in operation. A detector must
absorb the thing it measures, but these two instruments can absorb the same
event and assign it to different forces. The ambiguity corrupts the composite in
one direction twice: the event lowers Flow in the numerator and raises Entropy
in the denominator.

The question is not whether Flow and Entropy are related. They are. The question
is which instrument owns a loss when a reading will be integrated into
`(Flow × Resonance) / (1 + Entropy)`.

## Decision

**One observed loss may load onto one term only. The declared work path is the
boundary.**

1. **Declare the path before reading either band.** Name one representative unit
   of work, the evidence that makes it representative, the point where intent is
   committed, and the point where usable output completes the loop. A boundary
   chosen after seeing the loss is not a measurement boundary.
2. **Flow owns resistance inside that path.** Decisions relitigated, context
   lost at handoffs, and rework between the declared start and end are ammeter
   observations. They may lower Flow. They MUST NOT also raise Entropy in the
   same integrated reading.
3. **Entropy owns waste outside that path.** Activity that scales faster than
   alignment and value that leaves the source community are calorimeter
   observations. More generally, energy spent outside the declared path that
   produces no usable work may raise Entropy. It MUST NOT also lower Flow in the
   same integrated reading.
4. **Instance, not category, is assigned.** "Context loss" is not permanently a
   Flow word. A specific context-loss event inside the declared path is Flow; a
   specific loss outside it may be Entropy. Every cited event gets one identity
   and one owner.
5. **Ambiguity withholds the composite.** If the evidence cannot place an event
   inside or outside the boundary, report the ambiguity and take one band only.
   Do not split the event, count it twice, or choose whichever assignment yields
   the preferred zone.
6. **The partition travels with the reading.** Any later integration must carry
   the declared path and the event-to-term assignments. Two single-band reports
   without that shared boundary do not become a valid composite merely because
   their numbers can be multiplied.

This is an accounting boundary, not a claim that the forces are independent.
Flow resistance can generate Entropy over time. A present-state instrument may
read the event as Flow now or read later waste as Entropy later; it may not book
the same present loss to both terms.

## Evidence

The overlap is textual and exact.

`theories/coherence-instrumentation.md` §IV.3 defines the ammeter:

> trace a representative unit of work end to end and measure resistance: how
> many decisions get relitigated, how many handoffs lose context, how much rework
> precedes a shipped artifact

Section IV.5 defines the calorimeter:

> Where is energy being spent that produces no coherence? Relitigated decisions,
> context lost across handoffs, activity scaling faster than alignment, value
> flowing out of the source community.

The equation makes the consequence material. Flow is in the numerator; Entropy
is in the denominator. Booking one event to both does not merely repeat evidence
in a report. It moves both terms toward a lower composite and lets the same loss
cross a zone boundary twice.

The boundary also follows the instruments' own couplings. The ammeter already
passes a **unit of work** through a path. Its natural boundary is that path. The
calorimeter already asks where energy leaves the **system** as waste. Its natural
remainder is loss outside the selected path. No new force or instrument is
needed; the existing instruments needed exclusive accounts.

## Why this boundary

It is observable before the reading. An operator can name a work unit, its start,
its end, and the evidence that traces it. "Direct versus indirect cost" and
"reversible versus irreversible loss" were considered but rejected because
neither distinction is specified by the detectors and both require a second
judgment after the event is known.

The path boundary also preserves the difference the instrument set is trying to
read:

- the ammeter asks **how much resistance this work encountered while completing
  its circuit**;
- the calorimeter asks **how much system energy never entered or completed a
  useful circuit at all**.

## Alternatives rejected

**Let both terms carry the event because low Flow and high Entropy are causally
related.** Rejected. Causal relation is not permission to count one observation
twice in a present-state composite. The later consequence may be a second event;
the original loss is still one event.

**Assign relitigation and handoff loss permanently to Flow, everywhere.**
Rejected. The same category can occur outside a selected work path as system-wide
waste. The detector reads observed instances, not words in a taxonomy.

**Assign all friction to Entropy and make Flow throughput-only.** Rejected by the
ammeter's specified coupling. `theories/coherence-instrumentation.md` §IV.3 says
the important part of Flow is drag and explicitly rejects output volume as the
visible-band substitute.

**Leave partitioning to each `/fw-spectrum` invocation.** Rejected. That was the
defect: two operators could assign the same evidence differently and both claim
to have followed canon. A diagnostic is not reproducible if its term boundary is
an invocation-local preference.

## Consequences

1. `theories/coherence-instrumentation.md` §IV.3 and §IV.5 carry the boundary at
   the detector definitions.
2. `/fw-spectrum` treats the partition as canonical, not as a default, and
   refuses integration when the event assignment is unresolved.
3. This ruling does **not** make the calorimeter's *waste-heat fraction*
   numerically callable. Its denominator remains unspecified; the detector still
   reports direction, delta, or comparison only.
4. This ruling does **not** reconcile the direct calorimeter with
   `methodology/coherence-tracker.md`, where Entropy is derived as
   `6 − Structural Integrity`. That is a separate named gap. No reading may use
   this ruling as if it settled it.

## Revisit trigger

Reopen if any of:

- two independent operators cannot place the same observed event on the same
  side of a pre-declared path from the available evidence,
- a live reading shows material waste generated *inside* the work path that
  cannot be represented as resistance without losing the mechanism,
- the calorimeter gains a defined denominator and the resulting accounting model
  supplies a better mutually exclusive partition,
- the tracker-derived Entropy and directly detected Entropy are reconciled in a
  way that changes the boundary between Flow and Entropy.
