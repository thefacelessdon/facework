# Invention & IP Map

Status: Draft — for IP counsel review
Version: 0.1.0
Date: 2026-08-07
Owner: The Faceless Don (harper@face.works)

---

## 0) Purpose and how to read this

This is a single working artifact for IP counsel. It inventories Facework's
protectable assets and maps each to its **best-fit protection**, with an honest
patentability assessment so counsel can triage fast instead of billing hours to
discover which battles aren't worth fighting.

**The governing thesis of this map:** Facework's inventive value is concentrated
in *owning the unit of measurement and the body that certifies against it* — not
in a wall of patents. The framework already behaves like an emerging metrology
standard (see `CERTIFICATION.md`, `COMPLIANCE.md`, `facework.manifest.schema.json`,
and the deferred `standards/` track). The IP strategy should reinforce that
position. Patents play a **selective, hardware-anchored** role only.

**Priority order of protection (by defensibility ÷ cost):**

1. Trademark — including the **certification mark** (highest-value registrable asset)
2. Trade secret — the calibration corpus (most durable moat)
3. Copyright — the theory/protocol corpus (automatic; register the core)
4. Standards + certification — the compounding institutional moat
5. Patents — selective, only on genuine hardware/technical embodiments

> **Not legal advice.** This document is prepared by the founder's team to brief
> counsel. All filing decisions, trade-secret structuring, and freedom-to-operate
> analysis must be performed by qualified IP counsel. Where this map states a
> patentability view (e.g., "likely §101-barred"), treat it as a starting
> hypothesis for counsel to confirm or reject, not a legal conclusion.

---

## 1) Executive summary for counsel

| # | Asset class | What it is | Recommended protection | Urgency |
|---|-------------|-----------|------------------------|---------|
| A | Certification mark | "Powered by Facework" | **Certification mark** (USPTO §4 / Lanham Act) — *not* a standard trademark | **High — file first** |
| B | Word marks / vocabulary | Cultural Physics, Coherence Design, Control the Current, etc. | Trademark (®); ™ already in use | High |
| C | Calibration corpus | Scoring weightings, thresholds, benchmark dataset | **Trade secret** (do not disclose) | High — protect before any publication |
| D | Written corpus | Theory docs, PROTOCOL.md, skills, this map | Copyright (register core with USCO) | Medium |
| E | Standard | FS/FOS/FRS + compliance + certification | Institutional moat + trademark + copyright | Medium (gated on 1.0) |
| F | Hardware embodiments | Resonance-probe sensor array, VISOR tuning device | **Patent (narrow) if built** + design rights | Low — only when built |
| G | Software methods | Composite engine, wrong-instrument detector, /fw-spectrum | Trade secret + copyright; patent generally **not** advised | Low |

**The one-line brief:** File the certification mark and top word marks now; wall
off the calibration data as trade secret before anything else is published;
register copyright on the corpus; treat patents as a narrow, hardware-only,
later-stage move.

---

## 2) The §101 reality check (read before any patent spend)

Under *Alice Corp. v. CLS Bank* (US) and equivalents, **abstract ideas, mental
processes, and methods of organizing human activity are not patentable subject
matter** — including when implemented in generic software. Much of Facework's
apparatus falls squarely in that excluded zone as *currently expressed*:

- "A method for measuring cultural coherence" — abstract; likely barred.
- "A system computing `Coherence = (Flow × Resonance)/(1 + Entropy)`" — mathematical
  relationship; likely barred.
- "Computing a frequency × reach budget" — math; likely barred.

Patent eligibility becomes plausible only where there is a **concrete technical
improvement or a physical apparatus** — a specific sensor arrangement, a
signal-processing pipeline that improves the functioning of a technical system, a
hardware device. Those are catalogued in §6 (Hardware) and flagged narrowly in §7
(Software). Everywhere else, the recommendation is **trade secret + copyright +
trademark**, which are cheaper, more durable, and actually enforceable here.

**Guidance to counsel:** please confirm or reject each patentability hypothesis
below, and advise on foreign filing (EPO's "technical character" test is stricter
than US on these; the certification/trademark strategy travels better
internationally than the patent strategy).

---

## 3) Trademark inventory

### 3.1 Certification mark (file first)

| Mark | Use | Class of registration |
|------|-----|----------------------|
| **Powered by Facework** | Certifies a project met protocol discipline + artifact integrity per `CERTIFICATION.md` | **Certification mark** — legally distinct from a trademark (cf. "UL Listed", "Fair Trade Certified"). Owner must not itself provide the certified services and must apply the standard even-handedly. |

This is the single most valuable registrable asset because it creates a recurring,
enforceable position: everyone who wants the mark must conform to the standard the
owner defines. Counsel should note the special governance requirements for
certification marks (the owner controls the standard but cannot use the mark on
its own goods/services in the certified category).

### 3.2 Word marks in active use (™ today; assess for ®)

Inventoried from current use across the corpus:

| Mark | Category | Notes |
|------|----------|-------|
| Facework™ | House / practice | Core brand |
| Cultural Physics™ | Theory | Distinctive; strong candidate |
| Coherence Design™ | Discipline | Descriptive risk — assess distinctiveness |
| The Coherence Operating System™ | Practice | — |
| A Coherence Practice™ | Practice | Descriptive risk |
| Control the Current™ | Tagline / slogan | Slogans registrable if source-identifying |
| The Coherence Protocol™ | Protocol | — |
| The Instrumentation of Coherence™ | Measurement layer | New (this session) |
| Facework Skills™ | Product line | — |
| Facework Pattern System™ | Product line | — |
| Canonical Vocabulary for Cultural Physics™ | Reference | — |

**Candidate marks not yet ™'d** (from the instrumentation spec — consider claiming):
`coherence reading`, `coherence budget`, `wrong-instrument error`, `/fw-spectrum`,
and the detector names (`resonance probe`, `standing-wave meter`, `ownership trace`)
insofar as they function as source identifiers rather than generic descriptors.

**Guidance to counsel:** flag which marks carry **descriptiveness/genericness
risk** (e.g., "Coherence Design", "A Coherence Practice" may be deemed descriptive
of the services). Prioritize registration of the distinctive, arbitrary, or
suggestive marks (Cultural Physics, Control the Current, Facework) and the
certification mark. Advise on international classes and priority filings.

---

## 4) Trade secret — the calibration corpus (the real moat)

Every measurement standard's durable moat is the **labeled data and calibration
logic** that maps a reading to an outcome. The detector *definitions* can and
should be public (publicity drives adoption of the standard). What stays secret:

- **Scoring weightings** behind `Facework Compliance v1` and the L2/threshold bands.
- **Calibration thresholds** — what reading corresponds to what real-world outcome.
- **Benchmark / training dataset** used to calibrate the detectors in
  `theories/coherence-instrumentation.md`.
- **Any per-detector coupling coefficients** (in-band vs. out-of-band transparency
  differentials, return-ratio baselines).

Advantages over patent for this material: no 20-year expiry, no public disclosure,
and it is the one component competitors cannot reproduce without the data itself.

**Action items for counsel + founder:**
- Draw the **public / secret boundary** explicitly and document it (definitions
  public; weightings/thresholds/data secret).
- Put trade-secret hygiene in place: access controls, NDAs, contributor IP
  assignment, marking, and a written trade-secret policy (relevant to DTSA
  eligibility in the US).
- **Sequencing risk:** protect this *before* publishing the standard or any
  academic/marketing writeup that could inadvertently disclose the calibration.

---

## 5) Copyright

| Asset | Protection |
|-------|-----------|
| `theories/*` (Cultural Physics, Coherence Design, COS, Instrumentation) | Automatic on fixation; **register core with USCO** for statutory damages |
| `PROTOCOL.md`, `CONSTITUTION.md`, `COMPLIANCE.md`, `CERTIFICATION.md` | Register |
| `skills/*` (the /fw-* skill text) | Register as a collection |
| This map, standards drafts | Register when stable |

Copyright protects the **expression**, not the underlying ideas, systems, or
methods (17 U.S.C. §102(b)) — so it stops verbatim lifting but not independent
reimplementation of the framework. That gap is precisely why trademark (the name)
and trade secret (the data) carry the load. Confirm contributor assignments so the
entity cleanly owns the corpus.

---

## 6) Hardware embodiments (the only real patent lane)

Hardware makes the abstract framework tangible (valuable for fundraising and
credibility) and is the **only category with a genuine §101 story.** Even so, the
moats are narrow and expensive to defend. Build to prove the framework and anchor
a patent — not because value concentrates here.

### 6.1 Resonance-probe sensor array

- **What:** A physical multi-modal sensor installation (directional audio +
  computer-vision motion + opt-in biometrics) deployed in a space that computes an
  **in-band coupling vs. out-of-band transparency differential** — i.e., measures
  whether an environment resonates with its intended community while non-target
  audiences pass through unaffected. Direct product tie-in to physical commerce
  (GAMUT / point-of-sale current).
- **Patent hypothesis:** Plausible as a sensor-fusion *apparatus + specific
  signal-processing method*. Hardware + a novel differential metric has a real
  eligibility story.
- **Honest limits:** Affective computing and audience-analytics hardware already
  exist. Claims will be **narrow** — novelty is the specific differential metric
  and sensor arrangement, not "sensing a crowd." Freedom-to-operate search
  required. Privacy/biometric-consent regime (BIPA, GDPR) is a compliance
  dependency, not just an IP one.

### 6.2 The VISOR — coherence tuning device

- **What:** A wearable/interface that surfaces **one coherence band at a time**
  (the "tune, don't flood" rule) rather than a flat dashboard.
- **Patent hypothesis:** Weak — mostly UI/method. Protect as **trademark + design
  rights (design patent / registered design)** and trade dress, not utility patent.
- **Role:** Strong *product*, weak utility-patent moat.

### 6.3 Split-test spectrometer

- Software, not hardware. See §7. Trade secret.

---

## 7) Software / method inventions (protect without patents)

| Invention | Best fit | Patent view |
|-----------|----------|-------------|
| Composite coherence engine (the equation pipeline) | Trade secret + copyright | Abstract/math — **not advised** |
| Wrong-instrument-error detector (flags a metric used out-of-band) | Trade secret + copyright; consider defensive publication | *Possibly* eligible if framed as a technical improvement to data systems — **moderate/uncertain**; ask counsel |
| `/fw-spectrum` diagnostic pipeline | Trade secret + copyright | Not advised as patent |
| Manifest schema + `bin/validate-manifest` conformance checks | Copyright + trade secret (checks) | Not advised |

**Defensive publication option:** for methods you want to keep *open* but prevent
others from patenting (to protect freedom-to-operate around the standard),
counsel may advise timed public disclosure to establish prior art.

---

## 8) Standards & certification as institutional IP

The `standards/` track (FS/FOS/FRS) is **deferred until 1.0** by design — see
`standards/README.md` (scaling the specification ahead of the evidence is the
failure mode the practice exists to prevent). The IP map does **not** assert the
standard is active; it maps the protection that attaches when it activates:

- The **certification mark** (§3.1) is the legal instrument of the standard.
- The **standard text** is copyright.
- The **conformance data / calibration** is trade secret.
- Becoming the **certifying body** is the compounding moat — a recurring position,
  not a one-time grant. This is worth more than any single patent.

Counsel input needed on: certification-mark governance rules, antitrust exposure
of operating a certification regime, and licensing structure for "Powered by
Facework".

---

## 9) Recommended sequence (founder + counsel)

1. **File the "Powered by Facework" certification mark**; register ® on the top
   distinctive word marks (Facework, Cultural Physics, Control the Current).
2. **Wall off the calibration corpus as trade secret** — draw the public/secret
   boundary, put NDAs/assignments/access controls in place — *before* any
   publication of the standard.
3. **Register copyright** on the core theory/protocol corpus; confirm contributor
   IP assignment to the entity.
4. **Advance the standard + certification** toward external conformance (gated on
   the 1.0 criteria in `ROADMAP.md`).
5. **Patents last, and only** on a specific hardware sensor-fusion embodiment (§6.1)
   *if and when built*, plus design rights on the VISOR (§6.2). Run FTO first.

---

## 10) Open questions for counsel

- Certification-mark governance and antitrust exposure of running the regime.
- Descriptiveness/genericness risk on "Coherence Design" and "A Coherence Practice".
- Trade-secret structuring for DTSA eligibility; contributor assignment gaps.
- FTO search for the resonance-probe apparatus; biometric-consent compliance.
- §101 confirmation on the wrong-instrument-error detector (the one uncertain
  software candidate).
- Foreign filing strategy — the trademark/certification/standard path travels
  better internationally than the patent path; confirm.

---

## 11) Related repository artifacts

- `CERTIFICATION.md` — the certification program this map would protect via mark
- `COMPLIANCE.md` — the scoring system whose weightings are the trade-secret core
- `facework.manifest.schema.json` — the conformance schema (copyright + secret checks)
- `theories/coherence-instrumentation.md` — the detector definitions (public layer)
- `theories/cultural-physics.md` — the vocabulary source (trademark base)
- `standards/` — the deferred standards track (institutional moat, gated on 1.0)

---

*CONTROL THE CURRENT™ — [face.works](https://face.works)*
