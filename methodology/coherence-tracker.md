# Coherence Tracker

Running record of coherence scores across all projects built with Facework.
Updated after each `/fw-coherence` run (diagnostic is the closing step of Coherence).

---

## Scoring Reference

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Three dimensions are assessed from evidence:
- **Flow (1-5):** How easily energy moves through the system. **Scored at
  loop level, not org level** — the question is whether energy completes a
  circuit through the system and back, not whether the team ships. A
  well-run organisation whose output cannot leave the building scores low.
  (Established by the H1 autopsy run, finding F2 — Quibi scored 5 org-level
  and 2 loop-level, and only the loop-level read found the correct locus.)
- **Resonance (1-5):** How deeply the system connects with its community
- **Structural Integrity (1-5):** How strong the system's foundation is

Entropy is derived: `Entropy = 6 - Structural Integrity`

This preserves the physics: higher entropy → lower coherence.

See `/fw-coherence` (Step 8: Diagnostic) for the full rubric and zone definitions.

### Zones

| Score Range | Zone | Meaning |
|-------------|------|---------|
| 0.2 – 1.0 | RED | Incoherent. Stop building, fix the foundation. |
| 1.0 – 2.5 | AMBER | Holds but fragile. Operational for MVP. Identify what moves it toward GREEN. |
| 2.5 – 5.0 | GREEN | Coherent. Ready for handoff and scaling. |
| 5.0 – 12.5 | DEEP GREEN | Self-reinforcing. Community operates independently. |

---

## Projects

| # | Project | Date | Flow | Resonance | SI | Entropy | Coherence | Zone | Verdict |
|---|---------|------|------|-----------|-----|---------|-----------|------|---------|
| 1 | GAMUT | Mar 2026 | 4 | 4 | 4 | 2 | 5.3 | DEEP GREEN | Level 3 conformant; Phases 1-3 gap (pre-protocol) |
| 2 | Facework (self) | Mar 2026 | 3 | 3 | 4 | 2 | 3.0 | GREEN | Structurally sound, culturally incomplete |
| 3 | Facework (reconciliation) | Mar 2026 | 3 | 3 | 4 | 2 | 3.0 | GREEN | Authority chain resolved, untested against real engagement |

*Note: Retros 003 and 004 originally reported Coherence = 1.8 using the old
inverted entropy scoring (rubric score 4 plugged directly into the formula).
With the corrected formula (Entropy = 6 - SI = 6 - 4 = 2), the score is 3.0.*

---

## Autopsies (H1)

Retroactive scores of **dead external systems**, scored from public record only.
These are **not projects, not conformance claims, and not Facework runs** — they
exist to test whether the equation localises failure. Method requires that the
locus be named *before* insider accounts are consulted, and that every batch
include at least one survivor control. Full method, insider-account checks and
findings: `h1-coherence-autopsies-2026-08-19.md` (run 1, A1–A3 + C1) and
`h1-coherence-autopsies-run2-2026-08-19.md` (run 2, A4–A6 + C2).

| # | Subject | Died | Flow | Resonance | SI | Entropy | Coherence | Zone | Failing term | Locus |
|---|---------|------|------|-----------|-----|---------|-----------|------|--------------|-------|
| A1 | Quibi | 2020 | 2 | 1 | 3 | 3 | 0.5 | RED | Resonance | Semantics — thesis wrong; 2nd: Sovereignty (unowned content) |
| A2 | Vine | 2017 | 1 | 5 | 2 | 4 | 1.0 | RED/AMBER | Flow | Frequency (no creator economics) + Sovereignty (owned substrate) |
| A3 | Friendster | 2009 | 1 | 4 | 1 | 5 | 0.67 | RED | Entropy | Stability — architecture failed under its own growth |
| A4 | Seattle grunge | ~1994 | 2 | 5 | 2 | 4 | 2.0 | AMBER | Flow | **Field** — status ladder priced its own success as a penalty; 2nd: Taste |
| A5 | BHS (UK) | 2016 | 2 | 2 | 1 | 5 | 0.67 | RED | Entropy | Frequency (£571m unfunded obligation) + Sovereignty (no owner/system boundary) |
| A6 | Nokia smartphones (FI) | ~2013 | 2 | 3 | 2 | 4 | 1.2 | AMBER | Flow | **Consonance** — layers held incompatible pictures, upward reporting distorted by fear; 2nd: Stability |
| C1 | Craigslist *(adversarial control)* | — | 5 | 4 | 5 | 1 | 10.0 | DEEP GREEN | — | control: DEEP GREEN here, ~3/20 on COMPLIANCE Taste Fidelity |
| C2 | UK drum & bass *(matched control to A4)* | — | 4 | 4 | 4 | 2 | 5.33 | DEEP GREEN | — | control: owns its own circuit — label + publishing + booking + events + reinvestment |
| A7 | Ofo (CN) | 2018–20 | 2 | 3 | 1 | 5 | 1.0 | RED/AMBER | Entropy | **Frequency** — user deposits treated as working capital; 2nd: Field (subsidy-bought adoption) |
| C3 | Tecnobrega, Belém (BR) *(matched control)* | — | 5 | 4 | 4 | 2 | 6.67 | DEEP GREEN | — | control: owns its circuit — free recordings drive the *aparelhagem* party economy |

**Ruling FW-DEC-006: the locus is the finding.** A diagnostic MUST emit a locus
and a failing term, not only a zone, and the scalar MUST NOT be reported bare at
Resonance ≥ 4. Locus base rates across seven dead subjects — **Frequency 3/7
(modal)**, Semantics 1/7, Field 1/7, Stability 1/7, Consonance 1/7 — MUST
accompany any locus call: a call in the modal layer is close to the prior and is
therefore weak evidence, while a Field or Consonance call departs from it and is
strong. The Frequency cluster decomposes into two archetypes, the **extractive
parent** (Vine, BHS) and the **unfunded promise** (Ofo, BHS).


**Read this table by column, not by score.** The **Failing term** and **Locus**
columns are what discriminate. Loci were named before insider accounts were
consulted; **ten of ten calls held** across both runs. Controls are what make the
runs falsifiable rather than self-confirming: C1 exposed a live disagreement
between this instrument and `COMPLIANCE.md` (F4), and C2 — matched to A4 by scene
type — separated from its twin by 2.7× and yielded a transferable thesis (F6: a
scene survives commercial contact only if it owns the circuit its energy travels
through).

**Correction to run 1.** Run 1 concluded from three subjects that the scalar
"carries close to zero post-mortem information value" because all three landed
RED. With six subjects the scalar spreads 0.5 → 2.0 and crosses a zone boundary.
The clustering was a **sample artifact** — all three run-1 subjects were abrupt
platform deaths. Corrected statement: the scalar does not separate dead from
alive (A4 died and reads AMBER), but it ranks severity among the dead and
separates both controls from all six subjects by a wide margin.

**Known instability (F7).** A4 (Flow 2, Resonance 5) = 2.0; A2 (Flow 1,
Resonance 5) = 1.0. One Flow point at high Resonance moves the score 2× and
crosses a zone boundary — i.e. the equation is least stable in exactly the
high-Resonance band Facework's subjects occupy. Do not report a single scalar in
that band without the locus.

---

## Trends

*Project rows are still all self-application — trends across **projects** will be
meaningful once external creator engagements are scored.*

**Cross-subject signal (H1, runs 1–2, Aug 2026).** Eight **external** subjects
scored retroactively — six dead, two surviving controls — across four domains
(software, retail, consumer hardware, music scenes) and three countries. The
equation's discriminating power sits in the **locus**, not the scalar.

- **Range is real.** Five of the protocol's eight phases now appear as primary
  loci: Semantics (A1), Field (A4), Frequency (A2, A5), Stability (A3),
  Consonance (A6). The run-1 worry that the instrument had only three attractors
  is retired.
- **The product form is load-bearing.** A2 (Resonance 5, Flow 1) correctly reads
  incoherent; an additive form would have called the decade's most resonant
  failure healthy.
- **The terms are coupled over time, not independent.** A3's actual mechanism is
  degraded Flow raising the cost of staying, eroding Resonance, cascading. A
  single snapshot cannot see a system mid-cascade — direct input to Horizon H5.
- **First named archetype, found by replication.** A2 and A5 share an identical
  locus pair across no shared industry, country or decade: the **extractive
  parent** — a subsidiary whose survival is subordinate to its parent's interests
  with no boundary preventing extraction. First candidate pattern for H2.
- **Open limitation.** All eight subjects are Global North and every
  authoritative source consulted is in English. Cultural range is unproven until
  a subject whose primary record is non-Anglophone is scored.

---

## How to Update

After completing `/fw-coherence` (which includes the diagnostic):
1. Score Flow, Resonance, and Structural Integrity from evidence (not aspiration)
2. Compute Entropy = 6 - Structural Integrity
3. Compute Coherence = (Flow × Resonance) / (1 + Entropy)
4. Identify zone (RED / AMBER / GREEN / DEEP GREEN)
5. Add a row to the Projects table
6. Update Trends section if 3+ projects exist
7. Note any methodology changes triggered by the scores
