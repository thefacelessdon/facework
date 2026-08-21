---
name: fw-spectrum
version: 1.0.0
description: |
  Spectrum: read ONE invisible band of a system's coherence and report a locus,
  not a score. Diagnostic — read-only, present-state, one band per invocation.
  Runs a single detector from `theories/coherence-instrumentation.md` (spectrometer,
  resonance probe, ammeter, standing-wave meter, calorimeter, load test, ownership
  trace), refuses the reading when the instrument is not coupled to the force it
  claims to measure, places a control outside the band, and emits a locus plus a
  failing term weighted against the H1 base rates. Not a phase. Not a dashboard.
  Not a forecast. Writes nothing.
  Fires on: "how coherent is this", "read the spectrum", "which band is this
  system on", "is the resonance real", "where is the energy leaking", "trace the
  ownership", "is this flow or just volume", "measure entropy here", "score this
  system's coherence".
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
---

# /fw-spectrum — Read One Band

**Authority: diagnostic. Read-only. One band per invocation. Present-state only.**

You are holding an instrument, not a dashboard. Your job is to take one honest
reading of one force and to **refuse** the six readings that would be confident
and wrong. A precise number from a detector that is not coupled to the force is
worse than no reading, because it will be believed
(`theories/coherence-instrumentation.md` §VII).

Source of truth for every instrument below: `theories/coherence-instrumentation.md`.
Source of truth for locus, base rates and the equation's known instability:
`methodology/coherence-tracker.md` and
`methodology/decisions/DECISION-006-coherence-autopsy-locus-over-score.md`.
Source of truth for the Flow/Entropy measurement boundary:
`methodology/decisions/DECISION-009-flow-entropy-measurement-boundary.md`.

## What this is not

| Not | Why | Source |
|---|---|---|
| A phase | "The detector set is not a new phase." It reads what the phases already produce. | §VIII |
| A dashboard | Rendering all seven bands at once **is** the documented failure mode — "the wearer sees everything and perceives nothing." | §VI.1 |
| A forecast | "An instrument that claims to forecast coherence has stopped being a detector and started being a horoscope." | §II.4, §VI.2 |
| A score | A diagnostic MUST emit a locus and a failing term. The scalar MUST NOT be reported bare at Resonance ≥ 4. | FW-DEC-006 |
| A universal number | Coherence has no absolute zero. Every reading is trend, delta or comparison. | §III, §VII |
| A state change | This skill has no writers. It does not add rows to `methodology/coherence-tracker.md`, does not edit `define/`, does not apply load. | authority: diagnostic |

**Read-only is declared, and only partly enforced.** `allowed-tools` carries no
`Write` and no `Edit`, which is mechanical. `Bash` is present because a
directional reading needs a time axis (`git log`, `git diff`, `git show`) — and
`Bash` can write. That part is **declared-unenforced**: use it for inspection
only. If you find yourself needing to write, you are no longer running this
skill.

## Step 0 — Pick exactly one band

Ask which force is being read. Use `AskUserQuestion`. Offer the seven, one
choice each. **Never run more than one per invocation.**

| # | Force | Instrument | Absorbs (the observable it must couple to) |
|---|---|---|---|
| 1 | Signal | Spectrometer | Consistency between the polished claim and behavior under load |
| 2 | Frequency | Resonance probe | Recognition *before comprehension*, in the target community |
| 3 | Flow | Ammeter | Resistance in the path from intent to shipped output |
| 4 | Resonance | Standing-wave meter | Amplification the system did not pay for |
| 5 | Entropy | Calorimeter | Energy leaving as waste heat instead of doing work |
| 6 | Stability | Load test | Behavior under stress the design did not anticipate |
| 7 | Current sovereignty | Ownership trace | Where value accrues, and who can switch it off |

**If asked for all seven, or for "the composite," or for a coherence dashboard:
refuse.** Cite §VI.1 by name. Then do the useful thing: ask what decision the
reading is supposed to support, and name the one band whose reading would
actually move that decision. Tune, don't flood.

If the operator wants a second band, that is a second invocation, after the
first reading has been read. Integration is deliberate and sequential, never
simultaneous.

## Step 1 — The coupling gate (this is the point of the skill)

Before reading anything, in this order:

1. **Name what the instrument must absorb.** Copy it from the table above.
2. **Name the observable you actually have.** Specific artifacts, files, logs,
   commits, filings, transcripts. "The general vibe of the repo" is not an
   observable.
3. **Name the band's wrong-instrument error**, from the detector's own card
   below. Then check whether the evidence you just listed **is** that error.
4. **Decide: coupled or not coupled.**

If the evidence does not couple to the force, **emit NO READING.** Say so in
those words, name the specific evidence that would produce a reading, and stop.
Do not substitute a proxy. A proxy for an uncoupled instrument is the
wrong-instrument error with extra steps (§II.1, §II.2).

This gate fires most often on band 2 (resonance probe), which requires primary
community-response data that a repo does not contain. Refusing there is the
instrument working correctly, not the skill failing.

## Step 2 — Place the control thermometer

Herschel found infrared because he put a thermometer **outside** the visible
spectrum as a control, and it read highest of all. Method, not metaphor (§VII).

Before taking the reading:

1. Name one instrument **outside** the band you were asked for.
2. State the null you expect from it — "I expect this to register nothing."
3. Read it anyway.

**If the control spikes, report that first**, before the requested reading. A
spiking control means the real energy is in a band nobody named, and the
requested reading is the less interesting fact on the page. Say which band the
control points at and that it has not been read yet.

Each detector card names a default control candidate. Use a different one if you
have a better reason; say which and why.

## Step 3 — Take the reading, directionally

Every reading is one of exactly three shapes:

- **Trend** — same system, same instrument, two or more points in time.
- **Delta** — before and after one specific change.
- **Comparison** — two systems, one instrument, same moment.

State which shape you used and what the two ends of it are.

**If you have one time point and no comparator, you do not have a reading.**
Report it as `BASELINE — no direction available`, record the instrument and the
observable so the next invocation has an end to compare against, and stop. A
baseline stated as a reading is a universal score wearing a disguise (§III).

Never emit a number without its two ends. `Flow: 3` is meaningless. `Flow down
against March, same instrument, same repo` is a reading.

## Step 4 — Locus, failing term, and evidence weight

FW-DEC-006 governs the output shape. A diagnostic **MUST** emit:

- **Locus** — the protocol layer where the proximate mechanism sits (Semantics,
  Field, Taste, Frequency, Current, Flow, Stability, Resonance, Entropy,
  Sovereignty, Consonance).
- **Failing term** — which term of `(Flow × Resonance) / (1 + Entropy)` the
  reading loads onto.
- **Evidence weight against the base rates** — and you must say which kind of
  call you just made:

| Locus called | Base rate (H1, n=7 dead subjects) | Weight |
|---|---|---|
| Frequency | 3/7 — **modal** | **WEAK** — close to the prior |
| Semantics | 1/7 | **STRONG** — departs from the prior |
| Field | 1/7 | **STRONG** |
| Stability | 1/7 | **STRONG** |
| Consonance | 1/7 | **STRONG** |
| Anything else | 0/7 | **UNPRECEDENTED** — say so, and say it may be the instrument rather than the system |

A Frequency call is the one you were always most likely to make. Saying "weak"
out loud is not modesty, it is the reading. The Frequency cluster decomposes into
two archetypes — the **extractive parent** and the **unfunded promise**; if you
call Frequency, say which, or say neither.

**The scalar MUST NOT be reported bare at Resonance ≥ 4.** If you report a
scalar at all, the locus and failing term travel with it in the same sentence.

## Step 5 — Flag F7 when you land in the unstable band

Known instability, from `methodology/coherence-tracker.md`: A4 (Flow 2,
Resonance 5) = 2.0; A2 (Flow 1, Resonance 5) = 1.0. **One Flow point at high
Resonance moves the score 2× and crosses a zone boundary.** The equation is least
stable in exactly the high-Resonance band Facework's own subjects occupy.

If the reading places the system at Resonance ≥ 4, print this verbatim:

> **F7 — unstable band.** At Resonance ≥ 4, one Flow point moves the composite 2×
> and can cross a zone boundary. The zone is not a finding here. The locus is.

Do not soften it and do not omit it because the zone looks comfortable.

## Step 6 — Budget check (bands 2 and 4 only)

Run the §V budget meter **only** when the band read was Frequency or Resonance,
because that is where density and reach trade.

Read identity density (frequency) and reach (wavelength) **together**. A plan
promising maximum identity density *and* maximum mass reach on fixed energy is
claiming to break the conservation law; it will silently spend the difference out
of Entropy, burning the source to fake both at once.

**Caveat you must state when you run it:** §V requires checking density and reach
"against the system's actual energy," and no detector in the set reads energy.
Report the budget check as a **structural claim about the strategy** — that it is
claiming both ends at once — never as a quantitative reading. Marked as a theory
gap in *Instrument readiness* below.

## Step 7 — Report

Fixed shape. Findings first.

```
BAND        <force> — <instrument>
SHAPE       trend | delta | comparison | BASELINE
COUPLING    coupled | NO READING (+ what would produce one)
CONTROL     <instrument outside the band> → null held | SPIKED (+ where the energy is)
READING     <direction>, <the two ends it is measured between>
BOUNDARY    n/a | <work unit, committed intent, loop-complete endpoint, event assignments>
LOCUS       <layer> — <proximate mechanism, one sentence>
TERM        Flow | Resonance | Entropy
WEIGHT      WEAK (modal) | STRONG | UNPRECEDENTED — base rate <n>/7
F7          n/a | flagged
BUDGET      n/a | <density vs reach, structural only>
REFUSED     <anything you declined to report, and the rule>
NOT READ    the six bands not touched this invocation
```

Then two sentences of plain operator English: what the reading says, and what it
does not license anyone to conclude.

Close with: `One band read. Six not read. This is a present-state reading, not a
forecast. It has not been recorded — /fw-spectrum writes nothing.`

## The refusal catalogue

Refuse, by name, citing the rule:

1. **All seven at once**, or any coherence dashboard — §VI.1, the visor rule.
2. **A forecast**, a trajectory, a projection, "where will this be in six
   months" — §II.4, §VI.2.
3. **A bare scalar at Resonance ≥ 4**, or any scalar without its locus —
   FW-DEC-006.
4. **A reading from an uncoupled instrument** — §II.1. This includes every
   visible-band substitution in the cards below.
5. **A universal or absolute score**, a percentage of coherence, a
   0–100 — §III, §VII. Coherence has no absolute zero.
6. **A reading from a single time point with no comparator** — §III. That is a
   baseline.
7. **Any operation that changes state** — writing a tracker row, editing
   `define/`, applying live load, scoring a project into the record. Those belong
   to `/fw-coherence` and its operator.

When you refuse, say which rule and offer the reading you *can* take.

---

# The seven detector cards

Each card is what you actually execute. `Refuse if` is binding.

## 1. Signal fidelity — the spectrometer

- **Absorbs:** the gap between what the system claims when polished and what it
  does when unobserved.
- **Procedure:** collect the system's outputs across **at least three** contexts
  — the deck, the product, an ordinary Tuesday, a crisis. Split each into its
  component claims. A true signal shows the same lines in every context, the way
  an element shows the same spectral lines wherever it burns. Diff the claim sets.
- **Evidence that counts:** pitch decks vs shipped behavior; README vs code;
  public statement vs incident conduct; what the docs promise vs what the
  validator enforces.
- **Wrong-instrument error:** reading engagement and concluding the signal is
  strong. Engagement measures whether the *surface* landed, not whether it traced
  to anything true.
- **Reading:** line stability — same claims everywhere, or a spectrum that shifts
  with the audience.
- **Default control:** the ownership trace (band 7). Expect null.
- **Refuse if:** you have fewer than three contexts, or every context is
  author-produced marketing. One context is not a spectrum.

## 2. Frequency match — the resonance probe

- **Absorbs:** recognition *before comprehension* — whether the target community
  responds to the tone as familiar before they can explain why.
- **Procedure:** expose the target community to the system stripped of
  explanation — no copy, no pitch, just the field: color, tone, rhythm, language.
  Read whether it registers as **theirs**. Then read **transparency out-of-band**:
  the non-target audience should pass through unaffected, the way microwaves pass
  through glass.
- **Reading:** coupling strength in-band, transparency out-of-band. Universal
  coupling is a **low** reading, not a high one — a system everyone reacts to is
  either bland or extractive.
- **Wrong-instrument error:** reading total reach and calling it resonance. Reach
  is wavelength, not frequency. Wide current, dead frequency is the definition of
  extracted culture.
- **Default control:** the calorimeter (band 5). Expect null.
- **Refuse if: you do not have primary community-response data.** This
  instrument absorbs a human reaction. Repo contents, analytics, follower counts
  and the operator's confidence are all uncoupled to it. **No proxy is
  permitted** — every available proxy is the wrong-instrument error by name. Emit
  `NO READING` and specify what would produce one: unexplained-stimulus exposure
  to named in-band and out-of-band groups, with the responses recorded.
- **Also state:** the doc specifies no sample size, no stimulus-preparation rule,
  and no operational definition of "registers as theirs." Even with data, report
  the reading as provisional and say which of those three you had to decide
  yourself.

## 3. Flow — the ammeter

- **Absorbs:** resistance in the path from intent to shipped output.
- **Procedure:** pass real work through the system and read what it costs. Trace
  **one representative unit of work** end to end and count: decisions
  relitigated, handoffs that lost context, rework preceding the shipped artifact.
  Flow is inversely proportional to accumulated resistance.
- **Declare the FW-DEC-009 boundary before reading.** Name the work unit, the
  point where intent was committed, and the point where usable output completed
  the loop. Every resistance event inside that boundary belongs to Flow and may
  not also raise Entropy in a later integration.
- **Name your selection rule before you trace.** "Representative" is unspecified
  in the source, so selection bias is this instrument's live failure mode. State
  how you picked the unit and what you excluded, or the reading is not auditable.
- **Score at loop level, not org level.** The question is whether energy
  completes a circuit through the system and back — not whether the team ships.
  A well-run organisation whose output cannot leave the building scores low.
  (Earned by H1 finding F2: Quibi read 5 org-level and 2 loop-level, and only the
  loop-level read found the correct locus.)
- **Evidence that counts:** commit and PR history, reverts, decision records
  reopened, spec-to-ship latency, handoff artifacts that had to be rebuilt.
- **Wrong-instrument error:** reading output volume and calling it flow. High
  volume with high resistance is a shorted circuit — running hot, delivering
  nothing.
- **Default control:** the spectrometer (band 1). Expect null.
- **Refuse if:** you cannot trace a specific unit of work end to end, cannot
  declare both boundary points, or the only available evidence is throughput
  counts.

## 4. Resonance — the standing-wave meter

- **Absorbs:** amplification the system did not pay for — unprompted
  reproduction, defense, extension, remix.
- **Procedure:** **subtract everything you paid for first.** Boosted posts,
  incentivized shares, paid placement, employee amplification — all out, before
  you read anything. What remains is the candidate standing wave. Then read
  whether it is present, and whether it is more or less present than at the
  comparison end. You are measuring echo that outlasts the shout.
- **Reading — reduced form, deliberately.** The source specifies a *return
  ratio*. Report a **directional presence read**, not a ratio: unprompted
  amplification present / absent, rising / falling against the comparison end.
  The source defines no unit for "energy emitted" or "energy returned," so a
  quoted ratio would be a fabricated denominator. Say that when you report.
- **Wrong-instrument error:** reading paid or prompted amplification as
  resonance. Bought amplification decays the instant you stop paying.
- **Default control:** the load test over past events (band 6). Expect null.
- **Refuse if:** you cannot separate paid from unpaid amplification. An
  unseparated read is the wrong-instrument error.
- **If this band reads high, Step 5 fires.** Resonance ≥ 4 is the F7 band.

## 5. Entropy — the calorimeter

- **Absorbs:** energy leaving the system as waste heat rather than doing work —
  the gap between what the community puts in and what it gets back.
- **Procedure:** find where energy is spent and produces no coherence. The source
  names activity scaling faster than alignment and value flowing out of the
  source community as direct sites. Relitigation, context loss, and rework count
  here only when the specific event sits outside the declared Flow path.
- **Partition rule — mandatory and canonical (FW-DEC-009).** Declare one
  representative unit of work, committed intent, and the point where usable
  output completes the loop **before** reading. A specific relitigation,
  context-loss, or rework event *inside* that path belongs to Flow. Waste
  *outside* that path belongs to Entropy. Assign each observed event to exactly
  one instrument in writing. If the evidence cannot place it, withhold the
  composite; do not split it, count it twice, or choose the more convenient term.
- **Reading — reduced form.** The source specifies a *waste-heat fraction*. A
  fraction needs a denominator (total energy) that no instrument in the set
  reads. Report **which sites are hot, and hotter or cooler than the comparison
  end.** Do not quote a fraction.
- **Wrong-instrument error:** reading growth and concluding low entropy.
  Extraction models post excellent growth *while* running maximum entropy — they
  burn the source to make the chart. Growth is often entropy that hasn't finished
  yet.
- **Default control:** the resonance probe (band 2), if primary data exists;
  otherwise the ownership trace (band 7). Expect null.
- **Refuse if:** you have not written the partition, or the only evidence is
  growth.
- **Naming caution:** `methodology/coherence-tracker.md` *derives* Entropy as
  `6 − Structural Integrity`. This card reads Entropy *directly*. They are two
  different quantities. Never place a calorimeter reading beside a tracker
  Entropy figure as if they were the same number.

## 6. Stability — the load test

- **Absorbs:** behavior under stress the design did not explicitly anticipate.
- **Procedure as specified — and why you may not run it.** The source says
  *apply* pressure: a surge, an edge case, an adversarial input, a founder's
  absence. **Applying pressure changes state.** This skill is `diagnostic` and
  read-only, so the specified procedure is out of scope here. Do not induce load.
  Do not stage a founder's absence. That belongs to `/fw-stability` and
  `/fw-entropy`, which hold write authority.
- **What you may read instead:** load the system has **already** taken.
  Incidents, outages, adversarial contact, the surge that happened, the key
  person who was actually away. Read whether the center held. Say plainly that
  this is a **retrospective load read, not the specified load test** — a
  different instrument with a different coupling, and it can only see the loads
  that happened to arrive.
- **Wrong-instrument error:** reading a clean happy-path demo as stability. The
  demo is the system at rest. Every extraction-grade system looks stable at rest.
- **Default control:** the ammeter (band 3). Expect null.
- **Refuse if:** no past load event exists to read. "Nothing has broken yet" is
  not a stability reading — it is an absence of evidence, and stability is only
  real under load.

## 7. Current sovereignty — the ownership trace

- **Absorbs:** where value accrues as energy moves, and who can switch it off.
- **Procedure:** follow the current from source to settlement. Mark **every**
  point where it passes through a conduit the source community does not control.
  Each such point is an extraction site and a dependency. Then ask the trace's
  real question: **could the source community keep the current flowing if any
  single intermediary turned hostile?**
- **Reading:** count of extraction sites and count of single points of shutoff.
  This is the one detector in the set with a natural unit, so a count is honest
  here — but still report it against a comparison end, never as a grade.
- **Evidence that counts:** hosting and domain control, payment rails,
  distribution channels, identity and auth, data export reality (not the export
  button — whether the export is usable), contractual termination rights,
  single-vendor dependencies.
- **Wrong-instrument error:** reading current *volume* and calling it health. A
  massive current flowing through infrastructure you do not own is not strength,
  it is exposure. That is the historical extraction pattern the theory diagnoses.
- **Default control:** the calorimeter (band 5). Expect null.
- **Refuse if:** you can only see the top of the stack. A trace that stops before
  settlement is not a trace.

---

# Instrument readiness

Honest state of the seven, against
`theories/coherence-instrumentation.md`. Read this before promising a reading.

| Band | Instrument | State | The gap |
|---|---|---|---|
| 1 | Spectrometer | **Callable** | None material. Needs ≥3 contexts; procedure is a diff. |
| 3 | Ammeter | **Callable** | "Representative unit of work" is unspecified — mitigated by requiring a stated selection rule. |
| 7 | Ownership trace | **Callable** | None. Most concrete of the seven; the only one with a natural unit. |
| 4 | Standing-wave meter | **Reduced** | Specified as a *ratio*; no unit is defined for energy emitted or returned. Runs as a directional presence read. |
| 5 | Calorimeter | **Reduced** | Specified as a *fraction* with no denominator. FW-DEC-009 resolves the observable overlap by a mandatory work-path boundary. |
| 6 | Load test | **Out of scope here** | The specified method is interventional. A read-only diagnostic can only read past load — a different instrument. |
| 2 | Resonance probe | **Not callable without primary data** | Absorbs a human reaction. No sample size, no stimulus rule, no operational definition of "registers as theirs." Every available proxy is its own wrong-instrument error. |
| — | Budget meter (§V) | **Structural only** | Requires "the system's actual energy"; no detector in the set reads energy. |
| — | Composite (§VI) | **Not run by this skill** | §VI requires the four constructs be "non-zero," but §III/§VII permit only directional readings. A non-zero test on a directional reading is undefined. Read bands; integrate in prose. |

`/fw-spectrum` never runs the composite. It reads one band, states what that band
licenses, and leaves integration to a human reading several single-band reports in
sequence. That is the visor rule executed rather than quoted.

---

*CONTROL THE CURRENT™ — [face.works](https://face.works)*
