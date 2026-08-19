# H3 — Archetype screen: backtest spec

**Written:** 2026-08-19. **Status:** spec only — not run.
**Horizon entry:** H3 (the score as an underwritable signal).
**Consequence for H3:** its test statement changes, the same way H1 forced H2's to.

---

## The refinement

H3 currently proposes putting a **scored handoff package** in front of a party with
money exposed. H1 killed that shape: the scalar does not discriminate, so there is
nothing underwritable in a score. What FW-DEC-006 produced instead is two
**mechanically detectable structures**, both found by replication across unrelated
industries, countries and decades:

- **The extractive parent** — a subsidiary whose survival is subordinate to its
  parent's interests, with no boundary preventing extraction. *(Vine, BHS)*
- **The unfunded promise** — a diffuse obligation to many holders, treated as
  working capital. *(Ofo, BHS)*

**Revised H3 claim:** *the archetypes, not the score, are the underwritable
object.* An archetype is a structure visible in public filings, which means it can
be screened at scale and tested against history — no counterparty, no capital, no
waiting for H2's windows to close.

## Pre-registered hypothesis

> Entities flagged by either archetype experience materially more adverse
> structural outcomes over a following 5-year window than a matched unflagged
> control set.

**Falsified if** the flagged set's adverse-event rate is not materially above the
matched control's — in which case the archetypes describe collapses already known
to have happened rather than predicting them, and H3, H4 and the whole
underwriting cluster should be struck from the Horizon.

## Detection criteria

Operationalised so two analysts reach the same flag set. Thresholds are placeholders
to be fixed **before** the first run, then frozen.

**Extractive parent** — both required:
1. Majority control by a parent whose primary business differs from the entity's, **and**
2. at least one of:
   - related-party transfers to the parent ≥ X% of the entity's operating cash flow, 3-year average
   - the parent sets the economic terms of the entity's supply side (splits, rates, payouts) rather than the entity
   - management fees, dividends or upstream loans paid to the parent in periods of negative entity operating margin

**Unfunded promise** — both required:
1. An obligation to a **diffuse** holder group — prepaid deposits, credits, gift balances, memberships, or a defined-benefit-style commitment — of ≥ Y% of total liabilities **or** ≥ Z× annual operating cash flow, **and**
2. no segregated or externally funded vehicle backing it.

## Universe, period, outcome

- **Universe:** entities with public filings sufficient to evaluate both criteria.
- **Period:** flag on filings 2010–2019; observe outcomes to 2024. A 5-year forward
  window per flag.
- **Adverse outcome (pre-declared):** insolvency, administration, delisting,
  wind-down, forced divestment, or acquisition at a material discount to the
  3-year-prior valuation. Total return versus sector index is recorded as a
  secondary measure, **not** the primary — the claim is about structural failure,
  not price.

## Controls

1. **Matched control set** — same sector, size band and period, not flagged.
2. **Base rate** — the unconditional adverse-event rate for the universe. The
   flagged rate must beat this *and* the matched set.
3. **Derivation-set exclusion.** Vine, BHS and Ofo produced the archetypes and
   **MUST be excluded** from the test set. Validating a pattern on the cases that
   generated it is the most common way this kind of exercise fools itself.

## Known confounds, recorded before running

- **Look-ahead bias** via restated filings — flags must use as-filed data.
- **Sector clustering** — if flags concentrate in one sector, the result measures
  that sector.
- **Survivorship** in the data source — dead entities must remain in the universe.
- **Threshold fishing** — X, Y and Z are fixed before the run and reported with the
  result. If they are tuned after seeing outcomes, the exercise is void and must be
  reported as void.
- **Confounding with leverage** — both archetypes correlate with financial
  distress generally. The screen must be tested against a plain leverage screen; if
  it adds nothing over leverage, it adds nothing.

## What a positive result would and would not establish

**Would:** that a Facework-derived structural pattern has out-of-sample predictive
content about institutional failure. That is the first evidence the discipline has
ever had that is not retrospective.

**Would not:** that the coherence *score* predicts anything (H1 settled that
negatively), that the locus method works on living systems (that is H2's job, and
its windows do not close until 2028–29), or that any of it is investable. A screen
with an edge on structural outcomes is not a strategy, and the gap between them is
mostly vehicle design and patience.

## Disposition

Spec only. Running it needs a filings data source and the three thresholds fixed.
The order matters: **fix X, Y, Z and the universe first, in a dated commit, then
run.** Fixing thresholds after seeing the data is the same defect this repo closed
at 0.0.59 — a check that cannot be verified is decoration.
