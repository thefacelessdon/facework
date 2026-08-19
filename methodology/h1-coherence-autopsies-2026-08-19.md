# H1 — Coherence Autopsies: first run

**Date:** 19 Aug 2026
**Horizon entry:** H1 (`ROADMAP.md` → Horizon → Cluster A)
**Status:** test run complete. **H1 partially falsified.** The scalar score does
not discriminate post-mortem. The **entropy locus does.** Revision proposed
below; H2's test statement must change as a result.

---

## 1) What was being tested

H1's claim, as recorded: *the governing equation `(Flow × Resonance) / (1 + Entropy)`
explains failures retroactively, and the entropy locus is identifiable after the fact.*

Its recorded falsification condition: *the scores cluster without discriminating,
or the named locus disagrees with what people inside actually experienced.*

Both halves were tested. They returned **different verdicts**, which is the
finding.

## 2) Method — and the first problem with it

### The artifact-attestation problem

`COMPLIANCE.md` cannot be used for autopsy as written. Every dimension's
evidence list names a Facework artifact — `SignalThesis`, `TasteContract`,
`SovereigntyMap`, `IntegrationManifest`. A dead company produced none of them.
`COMPLIANCE.md` §6 makes this fatal: missing required artifacts caps a subject
below L2 automatically. Scored literally, **every autopsy subject scores L0 for
the same reason, which is no information at all.**

So the instruments split:

| Instrument | What it measures | Usable for autopsy? |
|---|---|---|
| `COMPLIANCE.md` (100 pts, 5 dims, L0–L4) | whether the protocol was *run* | **No** — attests artifacts, not properties |
| `coherence-tracker.md` (Flow / Resonance / SI, Entropy = 6 − SI) | whether the system *cohered* | **Yes** — scores properties from evidence |

H1 tests the equation, so the tracker is the primary instrument. `COMPLIANCE.md`
is used once, on the control, to see what it says when it disagrees.

**Finding F1.** The two instruments are not two views of one thing. One audits
process compliance; one estimates systemic coherence. The repo currently treats
them as a single graded ladder — `CERTIFICATION.md` gates the "Powered by
Facework" claim on the *compliance* total, then calls it "a guarantee of protocol
discipline and artifact integrity," which is accurate but is **not** what a
reader of a coherence score assumes they are buying.

### Scoring rule adopted

Score the *property* the artifact would have attested, from public record.
Flow, Resonance, SI on 1–5, Entropy = 6 − SI, per the tracker.

**Finding F2 — Flow must be scored at loop level, not org level.** Quibi forced
this. Its *internal* operational flow was excellent: $1.75B deployed, marquee
talent, proprietary Turnstyle playback, shipped on schedule into a pandemic.
Its *loop* flow was near-zero: content could not be clipped, screenshotted or
shared, so energy entered the system and stopped. Scoring Flow org-level gives
Quibi a 5 and puts the locus in the wrong layer. The tracker does not currently
say which reading is meant. It must.

### Exclusion, recorded on purpose

**Theranos-class subjects are excluded.** Fraud is not incoherence. A deceptive
system can score *high* on Signal and Resonance because its artifacts are
internally consistent and simply false. The instrument has no term for
truthfulness of inputs, and inventing one mid-test would be fitting the
instrument to the case.

**Finding F3.** The equation is indifferent to whether the signal is *true*. It
measures whether a system holds together, not whether it holds together around
something real. That is a stated boundary, not a gap to patch — but it must be
stated, because "coherence" reads to outsiders as a claim about validity.

### Survivorship control

Scoring only dead subjects guarantees low scores and proves nothing. One
survivor control was scored blind alongside the three: **Craigslist**, chosen
adversarially because it should score badly on the dimension the repo weights
most heavily.

---

## 3) The three autopsies

Locus was named from the score pattern **before** the insider account was
consulted. Insider checks are recorded verbatim in §6.

### Subject 1 — Quibi (2018 – Oct 2020)

Raised **$1.75B** pre-launch. Launched April 2020, announced wind-down 21 Oct
2020, roughly six months. **3.5M downloads, 1.5M active users** in the first
months.

| Term | Score | Evidence |
|---|---|---|
| Flow | **2** | loop-level: no clipping, sharing or screenshots — content could not leave the app (org-level would be 5; see F2) |
| Resonance | **1** | no format caught, no subscriber growth, content generated no buzz |
| Structural Integrity | **3** | playback tech worked and shipped; asset base did not — content rights reverted after two years |
| Entropy | **3** | = 6 − SI |

**Coherence = (2 × 1) / (1 + 3) = 0.5 → RED**

**Predicted locus:** primary **Semantics (layer 1)** — the signal thesis itself.
Secondary, and less obvious: **Sovereignty** — they did not own the asset they
spent $1.75B producing.

**Failing term:** the **Resonance** term. Not entropy. Quibi was a *highly
ordered* incoherent system.

### Subject 2 — Vine (Jan 2013 – Jan 2017)

Acquired by Twitter pre-launch. Defined a format that outlived the app.

| Term | Score | Evidence |
|---|---|---|
| Flow | **1** | no path from creator energy to creator economics; the Oct 2015 creator meeting is the hard evidence |
| Resonance | **5** | defined a native format and an era of internet culture; format survived the platform's death |
| Structural Integrity | **2** | wholly owned by Twitter; no independent economics; co-founder pushed out Oct 2015 |
| Entropy | **4** | = 6 − SI |

**Coherence = (1 × 5) / (1 + 4) = 1.0 → RED/AMBER boundary**

**Predicted locus:** **Frequency (economics)** + **Sovereignty (owned substrate)**.

**Failing term:** the **Flow** term.

**This is the structural test of the equation's form.** The numerator is a
product, so a zero-ish Flow annihilates a maximal Resonance. If the equation
were additive, Vine would score comfortably mid-range and the instrument would
have called the most culturally resonant failure of the decade healthy. **The
product form is doing real work, and Vine is the case that demonstrates it.**

### Subject 3 — Friendster (2002 – 2009 sale)

**100M+ registered users by 2008**, dominant in the Philippines, Indonesia and
Malaysia. Sold to MOL Global 9 Dec 2009 for **$26.4M**; patents on to Facebook
for **$40M** in 2010.

| Term | Score | Evidence |
|---|---|---|
| Flow | **1** | sustained slow page loads and outages from unoptimised DB queries over large friend graphs |
| Resonance | **4** | 100M+ registrations, genuine regional dominance |
| Structural Integrity | **1** | documented architectural failure under its own growth; engineering-vs-management rift over whether to fix or expand |
| Entropy | **5** | = 6 − SI |

**Coherence = (1 × 4) / (1 + 5) = 0.67 → RED**

**Predicted locus:** primary **Stability (architecture)**. Secondary
**Consonance** — engineering and management were not aligned on what the system
was for.

**Failing term:** the **Entropy** term.

---

## 4) The control — Craigslist

| Term | Score | Evidence |
|---|---|---|
| Flow | **5** | energy moves with essentially no friction; unchanged for decades |
| Resonance | **4** | durable community norms, category-defining utility |
| Structural Integrity | **5** | deliberately frozen architecture is maximal stability |
| Entropy | **1** | = 6 − SI |

**Coherence = (5 × 4) / (1 + 1) = 10.0 → DEEP GREEN**

Now the same subject on `COMPLIANCE.md` dimension **B) Taste Fidelity**: no
TasteContract, no documented criteria, no tokens, no components, no
design-eye-evaluator. Scored honestly: **~3/20.**

**Finding F4 — the certification instrument can fail a system the equation calls
DEEP GREEN, and the disagreement localises entirely to Taste Fidelity.**
Craigslist is a 25-year sovereign, durable, self-reinforcing system that would
struggle to reach the score ≥ 60 that `CERTIFICATION.md` §2 requires to claim
"Powered by Facework." Taste Fidelity is a **quality-of-output** term, not a
**survivability** term, and summing it into a single 100-point total asserts a
commensurability that this control refutes.

This is the single most useful thing the run produced, and no forward run could
have produced it — every forward run scores a subject that was built to satisfy
the rubric.

---

## 5) Result: does H1 hold?

### The scalar does not discriminate

| Subject | Coherence | Zone |
|---|---|---|
| Quibi | 0.5 | RED |
| Friendster | 0.67 | RED |
| Vine | 1.0 | RED / AMBER edge |

Three failures, three different mechanisms, **one zone.** This is verbatim the
recorded falsification condition: *the scores cluster without discriminating.*
And on reflection it could not have gone otherwise — conditioning on death and
then reporting that the dead score low is survivorship bias with an equation
attached. **The scalar score has close to zero post-mortem information value.**

### The locus discriminates cleanly

| Subject | Failing term | Primary locus | Layer |
|---|---|---|---|
| Quibi | Resonance | signal thesis was wrong | Semantics (1) |
| Vine | Flow | no economics, owned substrate | Frequency (4) + Sovereignty (7) |
| Friendster | Entropy | architecture failed under its own growth | Stability (5) |

Three subjects, three distinct failing terms, three distinct layers, no overlap.
The instrument did not just label all three "incoherent" — it placed each in a
different part of the protocol, and the placements were **checked against
insider accounts and held** (§6).

### Verdict

**H1 is partially falsified, and the surviving half is the valuable half.**

- The claim "the equation explains failures retroactively" — **holds, via locus,
  not via score.**
- The claim implied by the tracker's scalar output — **fails.** Autopsy scores
  cluster by construction.
- The equation's *product form* is independently vindicated by Vine.

## 6) Insider-account checks

| Subject | Predicted locus | What insiders / independent analysis said | Match |
|---|---|---|---|
| Quibi | Semantics — thesis wrong | Katzenberg: *"We had a new product. We asked people to pay for it before they actually understood what it was."* Both principals attributed failure to either the idea not justifying a standalone service, or timing. | **Hit** |
| Quibi | Sovereignty — didn't own the asset (secondary, non-obvious) | The company struggled to find a buyer *because it only owned its content for two years* — an acquirer would be buying the technology alone. | **Hit, and not the popular narrative.** This was predicted from the rubric, not recalled from the story. |
| Vine | Frequency + Sovereignty | Fall 2015: ~20 of the top 50 creators met at 1600 Vine Street and proposed $1.2M each plus product changes and a direct line, in exchange for 12 posts a month. Twitter declined, **wary of setting a precedent for paying creators across its other products.** | **Hit on both.** No creator economics (Frequency), and the decision was made on Twitter's portfolio logic rather than Vine's survival (Sovereignty). |
| Friendster | Stability — architecture | ETH Zurich's *Social Resilience in Online Communities: The Autopsy of Friendster* (Garcia, Mavrodiev, Schweitzer, 2013) uses k-core analysis to show users left once the cost-to-benefit ratio of staying became insufficient, cascading into collapse. | **Hit**, with independent formalism. |
| Friendster | Consonance (secondary) | Documented rift: engineers wanted the existing system fixed before expansion; management pushed more products regardless of technical constraint. | **Hit** |

**Finding F5 — the equation is static and the mechanism is dynamic.** The
Friendster paper's mechanism is *degraded Flow raises the cost of staying, which
erodes Resonance, which cascades.* In the tracker the three terms are
independent inputs. They are not. Entropy does not merely divide the numerator;
sustained entropy **decays the Resonance term over time.** A single-snapshot
score cannot see a system that is mid-cascade, which is precisely the system an
operator most needs warned about. This is a direct input to **H5** (entropy as a
live vital sign) — H5's value is not a prettier number, it is the derivative.

## 7) What this changes

1. **H2's test statement is wrong and must be rewritten.** It currently reads
   *score living organisations … then wait,* falsified if scores "show no better
   than chance discrimination." H1 shows the scalar cannot carry that weight.
   H2 should predict **the locus**, not the outcome: *name the layer where a
   living system will break, timestamp it, and check whether the break, when it
   comes, arrives there.* Strictly harder, strictly more useful, and actually
   falsifiable.
2. **H4 is gated harder than recorded.** Selling a read to an adversarial party
   means selling a locus call, not a score. Its dependency on H2 is now load-bearing.
3. **`coherence-tracker.md` needs two fixes** before it is used on anything but
   self-application: state that Flow is scored **loop-level** (F2), and stop
   implying a single scalar is the output. The locus is the output; the scalar
   is a summary.
4. **`CERTIFICATION.md` / `COMPLIANCE.md` carry a real defect** (F4). Either
   Taste Fidelity is not commensurable with the other four and the total should
   not be a single number, or certification should state plainly that it grades
   protocol discipline and makes no survivability claim. The second is cheaper
   and is already half-written in `CERTIFICATION.md` §1.
5. **Autopsy method now requires a survivor control.** Without Craigslist this
   run would have reported three RED scores and called the equation vindicated.
   The control is what turned a confirmation into a falsification.

## 8) Disposition

**H1: do not promote yet, do not kill.** It produced five findings and corrected
its own successor, which is more than the ladder above has produced in three
retros. But its stated form is wrong. Proposed rewrite for the Horizon entry:

> *Claim:* the equation localises failure to a protocol layer, retroactively and
> from public record alone. *Cheapest test:* three subjects with distinct failure
> modes plus one survivor control; name the locus before consulting insider
> accounts. *Falsified if:* loci do not discriminate, or disagree with insider
> accounts, or the survivor control scores in the same zone as the dead.

Next: three more subjects with a different generation and geography (to test
whether the loci keep separating or whether the instrument only distinguishes
famous American software failures), then a decision record.

---

## 9) Verification log

Every load-bearing figure and quotation was checked against public sources
rather than asserted from recall. Facts marked in §3–§6 trace to:

- Quibi raise, timeline, users, shutdown, Katzenberg quotation, and the
  two-year content-rights problem — Variety, CNBC (21–22 Oct 2020)
- Vine creator meeting: participants, terms, venue, and Twitter's stated reason
  for declining — Mic, Fox Business (2016)
- Friendster user peak, regional dominance, DB/scaling failure mode,
  engineering-vs-management rift, sale figures — Wikipedia, High Scalability,
  Inc., contemporaneous reporting
- Friendster collapse mechanism — Garcia, Mavrodiev & Schweitzer,
  *Social Resilience in Online Communities: The Autopsy of Friendster*,
  arXiv:1302.6109 (ETH Zurich, 2013)

Craigslist scores are judgements from long-observable public behaviour, not
sourced figures, and are labelled as such.
