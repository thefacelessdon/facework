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

---

# Fixed parameters — FROZEN 2026-08-19

Per the disposition above, these are fixed **before** any data is touched. Nothing
has been run. After this commit they may not be revisited; tuning them against
observed outcomes voids the exercise and must be reported as void.

These are **judgment calls with stated reasoning, not empirically derived
optima.** That is the honest description, and stating it is what stops a later
reader mistaking them for calibration.

## X — extraction intensity

**X = 25% of the entity's operating cash flow, three-year average.**

Below roughly 15%, transfers to a parent are plausibly genuine shared services,
management cost allocation, or ordinary group treasury. At 25% sustained over three
years, a quarter of the cash the entity produces leaves for the parent
*persistently* — which is the BHS signature: systematic extraction across years,
not a single dividend. The three-year average is doing as much work as the number;
it excludes one-off distributions and requires a pattern.

## Y — obligation share of liabilities

**Y = 20% of total liabilities.**

At a fifth of total liabilities, a diffuse holder obligation dominates the liability
structure in a way an ordinary payables balance never does. Below that it is a line
item; above it, it is the company's shape.

## Z — obligation against cash generation

**Z = 2.0× annual operating cash flow.**

The "unfunded" part made concrete: at 2× or more, the obligation cannot be
discharged from two full years of operating cash generation. Ofo needed ~¥1.2bn
against negative operating cash flow — an unbounded multiple. BHS carried a £571m
deficit against cash generation that had been extracted for years.

## Criterion tightening (also frozen here)

**The unfunded-promise obligation must be cash-redeemable or cash-settleable at the
holder's demand or on a fixed schedule.** Deferred revenue for a service still being
delivered normally is **not** an unfunded promise, and without this qualifier every
subscription business with healthy prepayments would flag. The distinction is
whether the holder can demand *cash* — Ofo's deposits could be, gift balances can
be, a pension is owed. A month of undelivered SaaS cannot.

## Universe

**Jurisdictions:** US SEC annual filers (10-K) **and** UK Companies House filers of
audited annual accounts.

Companies House is not optional. BHS was **private**, and the extractive-parent
archetype concentrates in private subsidiaries where a listed-only universe cannot
see it. A US-listed-only screen would systematically miss the archetype's natural
habitat.

**Period:** flag on as-filed accounts for financial years 2010–2019. Outcomes
observed to 2024, five years forward per flag.

**Size floor:** revenue ≥ £10m / $10m in the flag year, to keep the universe from
drowning in micro-entities.

## Exclusions — and why these two are decisive

1. **Regulated deposit-takers and insurers are excluded.** A bank's deposits are a
   diffuse, cash-redeemable obligation at many multiples of operating cash flow with
   no segregated funding vehicle. The unfunded-promise criterion would flag **every
   bank on earth** and the screen would be measuring "is a bank." Insurers fail the
   same way through technical provisions.
2. **Government and quasi-government entities are excluded** — their obligations are
   backed by taxation, which is precisely the segregated-funding condition the
   criterion tests for.
3. Vine, BHS and Ofo remain excluded as the derivation set, per Controls above.

## Matching and reporting

- **Matched control:** same 2-digit sector code, same revenue quartile, same flag
  year, not flagged by either archetype.
- **The two archetypes are reported separately.** They are different mechanisms and
  pooling them would hide a case where one works and one does not.
- **Minimum n = 30 flagged entities per archetype** to report a rate. Below that the
  result is reported in these words: *n too small to quote.* Same discipline as
  `h2-checkpoint-protocol.md`.
- **Material discount** (adverse-outcome definition) = **≥ 50% below the valuation
  three years prior.**

## What is now needed to run

A filings data source covering both jurisdictions. Nothing else is open — every
judgment call the screen requires is fixed above, in this commit, dated, before
contact with data.
