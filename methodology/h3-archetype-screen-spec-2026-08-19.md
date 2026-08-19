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

---

# Correction — leverage comparator and pass mark — APPENDED 2026-08-19

This correction is append-only. It does not alter the frozen block above. The
statement that “nothing else is open” was false when written: the plain-leverage
comparison was required but not specified, and “materially more” had no fixed
pass mark. The definitions and decision rules below close those degrees of
freedom before any data-source connection, candidate inspection, or outcome
contact. After this append, only the filings data source remains open.

The four numeric choices were independently reviewed by Pushback in Berd session
`20260819_29` against commits `a921043f4dda` and `3a2e7dacabd9` before this
handoff: **L1 = 4.0×**, **L2 = 1.5×**, **absolute adverse-event-rate gap = 15
percentage points**, and **relative risk = 1.75×**. They are judgment calls with
stated reasoning, not empirically derived optima. Tuning any of them after
outcome contact voids the exercise and must be reported as void.

## Frozen plain-leverage definitions

All quantities use the same three fiscal years ending in the flag year.

**L1 — debt load.** L1 is mean fiscal-year-end gross debt divided by mean annual
EBITDA over the three years. It is never the mean of three annual ratios.

- **L1-positive:** L1 ≥ 4.0×.
- If aggregate EBITDA is ≤ 0 and mean gross debt is > 0, the entity is
  L1-positive without dividing by a non-positive denominator.
- If mean gross debt is 0, the entity is L1-negative.

**L2 — interest coverage.** L2 is three-year aggregate EBIT divided by
three-year aggregate gross interest expense. It is never the mean of three annual
ratios.

- **L2-positive:** L2 ≤ 1.5×.
- If aggregate EBIT is ≤ 0 and aggregate gross interest expense is > 0, the
  entity is L2-positive.
- If aggregate gross interest expense is 0, the entity is L2-negative.
- Negative interest expense is invalid/missing. Net interest income is never
  substituted for gross interest expense.

The component definitions are frozen across both jurisdictions:

- **Gross debt** is current and non-current interest-bearing bank debt, bonds,
  notes, and financing overdrafts at carrying value. It excludes trade payables,
  provisions, pension deficits, preferred equity, and lease liabilities.
- **Gross interest expense** is interest, coupon, and amortised financing cost on
  the debt included above, before any interest income. It excludes lease interest,
  pension interest, provision unwinds, capitalised interest, and every net finance
  figure.
- **EBIT** is operating profit before finance and tax, without management-defined
  “adjusted” add-backs. **EBITDA** is that EBIT plus depreciation, amortisation,
  and impairment of property, equipment, and finite-lived intangibles.
- **Lease treatment:** lease liabilities and lease interest are excluded from L1
  and L2. Where the filing recognises right-of-use depreciation and lease interest
  instead of an operating lease expense, EBIT and EBITDA are restated to an
  operating-lease basis using the disclosed period lease/rent expense: add back
  right-of-use depreciation, subtract that lease/rent expense, then add back only
  non-right-of-use depreciation and amortisation to reach EBITDA. If the needed
  lease components are not disclosed, the observation is invalid/missing.

Every annual component must be present and valid in all three years for both
ratios. A missing or invalid component excludes the entity from the **common
analysis universe**; it is never silently treated as unflagged and never imputed.
Exclusions are reported by jurisdiction and archetype. The four joint leverage
states are L1−/L2−, L1+/L2−, L1−/L2+, and L1+/L2+.

## Frozen comparison and positive-result rule

The L1-positive and L2-positive cohort rates are descriptive only. Raw
superiority of an archetype-flagged cohort over either leverage cohort is **not**
a pass gate.

Each archetype remains separate, and the existing minimum **n = 30** rule remains.
For an archetype to produce a positive result, its flagged adverse-event rate
must satisfy **both** of these point thresholds against **each** comparator:

1. an absolute rate gap of **at least 15 percentage points**, and
2. a relative risk of **at least 1.75×**.

The two comparators are:

1. the unconditional adverse-event base rate in the common analysis universe;
   and
2. unflagged controls matched on 2-digit sector, revenue quartile, flag year, and
   joint L1/L2 status.

For each comparator, both point thresholds must pass and the 95% confidence
interval must exclude no difference: the risk-difference interval excludes 0 and
the relative-risk interval excludes 1. A miss on either threshold, either
comparator, or either confidence-interval condition is not a positive result.

## Append-only result discipline — FROZEN 2026-08-19

Every frozen block in this H3 record remains unchanged. Results, later
corrections, and dissents are appended after the frozen material with their own
dates. No result may overwrite, silently reinterpret, or backfill a pre-registered
rule.

---

# Correction — confidence-interval methods — APPENDED 2026-08-19

The independently reviewed comparison rule above required 95% confidence
intervals but did not name their calculation. Pushback identified and closed that
remaining degree of freedom in the same pre-data Berd session `20260819_29`. This
block is appended after, and does not alter, either frozen block above.

Let `a/n1` be the flagged adverse-event rate, `c/n0` the comparator rate, and
`z = 1.95996398454`.

## Risk-difference interval

Use the two-sided 95% **Newcombe hybrid-score interval (Method 10), without
continuity correction**. For each proportion `p = x/n`, calculate its Wilson
limits as:

- `denominator = 1 + z²/n`
- `centre = (p + z²/(2n)) / denominator`
- `half-width = z × sqrt(p(1−p)/n + z²/(4n²)) / denominator`
- `L = centre − half-width`; `U = centre + half-width`

Call the flagged limits `(L1,U1)` and comparator limits `(L0,U0)`. For
`RD = a/n1 − c/n0`:

- `lower = RD − sqrt((a/n1 − L1)² + (U0 − c/n0)²)`
- `upper = RD + sqrt((U1 − a/n1)² + (c/n0 − L0)²)`

Wilson limits handle zero-event and all-event cells without adjustment.

## Relative-risk interval

Use the two-sided 95% **Katz log interval**. Ordinarily:

- `RR = (a/n1) / (c/n0)`
- `SE = sqrt(1/a − 1/n1 + 1/c − 1/n0)`
- `CI = exp(log(RR) ± z × SE)`

Write the 2×2 cells as flagged event/non-event `(a,b)` and comparator
event/non-event `(c,d)`. If any cell is zero, add **0.5 to all four cells** before
calculating the Katz interval, so the corrected rates are `(a+0.5)/(n1+1)` and
`(c+0.5)/(n0+1)`. Report the uncorrected point RR and the corrected interval. If
`a = c = 0`, RR is undefined and that comparison automatically fails.

In addition to the frozen point thresholds, a positive result requires the
risk-difference lower bound to be `> 0` and the relative-risk lower bound to be
`> 1` against each comparator.

## Review provenance clarification — APPENDED 2026-08-19

“Pushback” is the external/global Berd persona recorded on session
`20260819_29` at `/Users/facelessdon/.agents/agents/pushback.md`; it is not one of
this repository's tracked Facework personas. Session metadata and the final
verdict were verified read-only with:

`berdctl session get --session-id 20260819_29 --messages 12 --json`

The session title is “Review four proposed pre-registration,” its working tree is
`h3-parameter-review`, and its final verdict accepts all four numbers, supplies
the ratio edge cases and corrected incremental-value test above, and records that
no files were edited. The Berd session is the review evidence; this repository
does not contain a copy of the global persona or session transcript.

---

# Evidence qualification — APPENDED 2026-08-19

The dated repository attestation is
`methodology/h3-parameter-review-attestation-2026-08-19.md`. It records the
session metadata, verdict, persona boundary, and evidence limit.

“Independent review” means the parameters were challenged in a separate session
and persona from the authoring sessions. It does **not** mean the machine-local
transcript is independently downloadable. The human handoff designated Pushback;
the reason Pushback was selected instead of the repo-tracked Adversary was not
recorded and is not invented here. The Adversary did not perform this review, and
none of its refusal-by-default or public-evidence properties are attributed to
Pushback. The Adversary remains the repository's designated enforcement persona
for a later H3 checkpoint or claimed result.
