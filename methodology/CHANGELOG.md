# 0.0.3 — 2026-03-31 (Protocol Consolidation)

**What changed:**
- Consolidated 10 phases → 8 phases. Removed standalone Phase 0 (Intake) and
  Phase 9 (Diagnostic). Intake folded into Step 0 of every skill. Diagnostic
  folded into `/fw-coherence` (Phase 8: Integration).
- Removed `/fw-intake` and `/fw-diagnostic` as standalone skills. 14 skills → 12
  protocol skills + 8 operating skills.
- Added versioning system: `VERSION` file, `ROADMAP.md` with progression logic,
  `bin/facework-update` and `bin/facework-check-update` for automatic update
  notifications when `/fw-*` skills are invoked.
- Claude Code hook (`.claude/settings.json`) triggers update check on skill use.
- Cleaned orphaned directories (`theory/`, `commands/`, `Concepts/`, `.conductor/`).
- Theory and methodology docs updated for 8-phase model.
- Build-methodology reframed as GAMUT case study.
- PROTOCOL.md now distinguishes spec version (2.0.0) from release version (0.0.3).

**Versioning note:** This is the first release tracked under the new versioning
system. Prior entries below use methodology-internal version numbers (v1.0–v5.0).
The ROADMAP.md version history table maps old numbers to release versions.

**Triggered by:** Protocol had accumulated structural debt — standalone Intake
and Diagnostic phases added complexity without adding capability. Intake is
better as a habit (Step 0 of every phase) than a ceremony. Diagnostic belongs
with Coherence since handoff and retrospective are the same act.

---

# v5.0 — 2026-03-31 (Protocol Fix Pass — Post-Diagnostic)

**What changed:**
- Created `/fw-intake` skill (Phase 0). Every phase now has a dedicated skill.
  Intake confirms the target project, scans for existing artifacts, understands
  team composition and constraints, produces an IntakeRecord, and gates on an
  explicit, bounded problem/opportunity statement.
- Added explicit phase numbering to every `/fw-*` skill description and opening
  section. Each skill now states "Phase N of the Facework Protocol," names its
  entry/exit criteria, and identifies co-skills that run alongside it.
- Fixed overlapping skill descriptions. `/fw-frequency` no longer claims "before
  anything gets designed or built" (that's Phase 0). `/fw-semantics` no longer
  claims "before product framing." Each skill positions itself relative to its
  actual phase number in the 10-phase sequence.
- Added "Step 0: Read existing artifacts" to every phase skill. Skills now scan
  the project for prior work before entering discovery questions, preventing
  redundant re-asking of questions that existing documents already answer.
- Added strategy lock boundary guidance to `/fw-resonance`. If a Phase 4 decision
  says "don't build X yet," the prototype demonstrates architecture and design
  language without building that surface. Resonance proves transmission — it does
  not override strategy lock decisions.
- Updated CLAUDE.md and AGENTS.md with the canonical 10-phase table. Skills
  count updated from 13 to 14.
- Fixed next-step references in `/fw-field` (now points to `/fw-taste`) and
  `/fw-taste` (now points to `/fw-frequency` + `/fw-current`).
- Bumped all skill versions to reflect the changes.

**Triggered by:** HUE Unlimited protocol run (2026-03-29) diagnostic identified
5 structural issues that caused real friction during execution. Three separate
sessions logged feedback confirming the same problems. Evidence: retros 003 and
005, plus session feedback on Phase 0 gap, phase sequence ambiguity, overlapping
descriptions, redundant discovery questions, and prototype scope overreach.

---

# v4.1 — 2026-03-24 (Scoring System Fix)

**What changed:**
- Renamed `/fw-diagnostic` rubric dimension from "Entropy" to "Structural Integrity"
  (1-5, where 5 = strongest). Entropy is now derived: `E = 6 - SI`.
  Fixes the inversion where the rubric scored entropy as good-is-high but the
  formula treats entropy as higher-is-worse.
- Added four interpretation zones to the coherence score:
  RED (0.2–1.0), AMBER (1.0–2.5), GREEN (2.5–5.0), DEEP GREEN (5.0–12.5).
  Each zone has a clear action (stop/proceed with caution/ship/self-sustaining).
- Corrected historical scores: Facework self-application is 3.0 (GREEN),
  not 1.8 as previously reported with the inverted input.
- Updated `methodology/coherence-tracker.md` with zones, corrected formula,
  and computation instructions.

**Triggered by:** The coherence score had no interpretation guide. A number
without meaning is noise, not signal. The protocol principle "signal before
scale" requires that any metric used in governance must be legible to someone
encountering it for the first time.

---

# v4.0 — 2026-03-24 (Protocol Reconciliation)

**What changed:**
- Reconciled protocol and methodology into a single 10-phase sequence (0–9).
  The protocol (PROTOCOL.md) is the source of truth. The methodology implements it.
  The skills execute the methodology. One direction of authority:
  Theory → Protocol → Methodology → Skills.
- All 12 primitives are now load-bearing and part of the canonical sequence.
  Semantics, Field, and Taste run BEFORE Frequency (meaning before economics).
  Sovereignty and Consonance join Entropy in the Integrity phase.
- Protocol bumped to v2.0.0 with reconciled phase structure.
- README updated: 13 skills, 10-phase loop diagram, reconciled commands table.
- Coherence OS theory updated with full 12-primitive sequence.

**New canonical objects added to protocol:**
- `IntakeRecord` (Phase 0)
- `DesignLanguageSpec` / DESIGN.md (Phase 3: Taste)
- `ConsonanceCheck` (Phase 7: Integrity)
- `HandoffPackage` (Phase 8: Integration)

**Triggered by:** Running /fw-current to resolve the structural question of
where 5 new primitives fit. Discovery: PROTOCOL.md already had a 10-phase
structure (0–9) that included all primitives, but the methodology never aligned to it.
The test evidence from running both against Facework proved the protocol's
structure was correct — the 5 "missing" primitives caught real signal. The
coherent response: reconcile into one source of truth.

---

# v3.0 — 2026-03-24 (Facework Self-Application)

**What changed:**
- Inverted Stability and Flow phases for services/methodology businesses.
  Flow (playbooks) now runs before Stability (specs) when the product is
  operational rather than technical. Context-dependent — pure software
  products may retain the original order.
- Added mandatory Identity Expression dilemma to `/fw-current`.
  Visual language, tone, and brand voice are strategic decisions,
  not design afterthoughts.
- Added DESIGN.md as a required artifact in `/fw-resonance`.
  Produced first, before prototyping. Covers typography, color
  (mapped to states), grid + layout, motion, iconography, tone.
  Delivered as `DESIGN.md` in the project root.
- Updated phase timing estimates to reflect agent-native delivery:
  full protocol run compresses from days to hours with the human+agent
  operating model.
- Confirmed agent-native operating model as the default assumption
  for playbooks and capacity estimates.

**New patterns established:**
- DESIGN.md before prototype (no more "build generic, retrofit identity")
- Identity as a Current dilemma (not a Resonance afterthought)
- Flow before Stability for services businesses
- Coherence scorecard validated on a real project (F:3 R:3 E:4 = 1.8)

**Triggered by:** Retro 003 findings:
1. Playbooks written as traditional consulting were wrong — agent-native rewrite
   was the pivotal correction (changed economics, capacity, and stage definitions)
2. Visual identity was never surfaced as a strategic dilemma — caught late in Entropy
   when original site exploration docs exposed the gap
3. Prototype built generic-first, retrofitted with VLS — should have been identity-first

---

# v2.1 — 2026-03-24

## Added
- Canonical cultural doctrine layer:
  - `theory/facework-practice.md`
  - `theory/cultural-physics.md`
  - `theory/taste-criteria.md`
  - `theory/coherence-tests.md`
  - `theory/infrastructure-sovereignty.md`
- New cultural primitives:
  - `/fw-semantics`
  - `/fw-field`
  - `/fw-taste`
  - `/fw-consonance`
  - `/fw-sovereignty`
- Orchestration command layer:
  - `/fw-discovery-loop`
  - `/fw-product-wedge`
  - `/fw-governance-lock`
  - `/fw-launch-loop`
  - `/fw-evolve`
- Facework skill extension set:
  - `/mvp-cut`, `/beta-hardening`, `/scale-readiness`, `/contract-sync`,
    `/decision-log`, `/weekly-upgrade`, `/evidence-debug`, `/launch-ops`
- Paired cultural-intelligence agent stack in `agents/`.
- Installer hardening:
  - `bin/install-skills`
  - `bin/facework-doctor`
  - `install.sh` now delegates to canonical installer and doctor.
- Validation artifact:
  - `methodology/retros/002-cultural-hunch-validation.md`

## Updated
- `/fw-diagnostic` now includes assessments for Semantics, Field, Taste,
  Consonance, and Sovereignty in addition to the original primitive loop.

## Migration
- GAMUT-hosted duplicated custom OS skills/agents were removed and replaced
  with canonical pointer files to the Facework source.

# Methodology Changelog

Track every evolution of the build methodology. After each project retro,
update the methodology and log what changed here.

---

## v1.0 — March 17, 2026 (GAMUT)

**Initial methodology established.** 7-phase system validated end-to-end.

- Defined: Governance → Pressure Testing → Architecture → Playbooks → Prototype → Technical Spine → Handoff
- Validated: 4 days from idea to handoff-ready
- Produced: 10 specs, 9 playbooks, 7 decisions, working prototype, 75+ tracked work items
- Documented: Agent encoding blueprints for all 7 phases

**Patterns established:**
- 3-gate security sequencing (conversation → agreement → transaction)
- DataSource adapter pattern (permanent demo mode)
- Lifecycle-aware rendering (4 phases)
- 5-domain eng review framework
- Context packets for work items
- Structured review brief with feedback template

---

## v2.0 — March 17, 2026 (Cultural Physics Integration)

**What changed:**
- All 8 skills updated from v2.0.0 to v3.0.0
- Added Cultural Physics foundation section to every skill
- Added extraction check to `/fw-frequency` (energy audit, current ownership, exit test, proportionality test)
- Added mandatory ownership dilemma category to `/fw-current`
- Added Ownership & Control section to spec template in `/fw-stability`
- Added Energy Flow Check to playbook template in `/fw-flow`
- Added frequency-carrying principle and community resonance to `/fw-resonance`
- Added extraction review as a standard review domain in `/fw-entropy`
- Added cultural coherence test (community independence) to `/fw-coherence`
- Added Cultural Physics equation assessment to `/fw-diagnostic`
- Added Coherence Impact field to decision record template
- Build methodology updated to v2.0 with Cultural Physics foundation
- Build methodology author updated to The Faceless Don
- `theory/` renamed to `theories/`
- `facework.md` renamed to `the-coherence-operating-system.md`
- Added `theories/cultural-physics.md` — The Theory of Cultural Physics
- README updated with dual theory references

**New patterns established:**
- Extraction check as a mandatory gate in Frequency
- Ownership dilemma as a mandatory category in Current
- Energy flow checks per workflow in Flow
- Extraction review as a standard domain in Entropy
- Cultural coherence test alongside technical coherence test in Coherence
- Cultural Physics equation assessment in Diagnostic retros

**Additional deliverables (from CEO review):**
- Coherence scorecard with 1-5 scoring rubric for Flow, Resonance, Entropy in `/fw-diagnostic`
- Five Laws of Design check added to `/fw-resonance`
- Cross-references added between both theory documents
- Stability added to Cultural Physics doc as "The Conductor"
- "Start Here" reading path with time estimates added to README
- `methodology/coherence-tracker.md` created for cross-project score tracking
- Cultural Physics in Practice section added to build methodology (GAMUT case study)
- `install.sh` updated with gstack detection and optional install
- Standardized naming to "Facework" across all documents
- Universal framing for extraction checks (value source analysis, not culture-specific)

**Validation status:** Cultural Physics integration is theoretically grounded and
retroactively validated against GAMUT (extraction check confirms GAMUT's coherence).
Full validation pending: next project built with v3 skills should specifically evaluate
whether the new checks produced useful output during the live build.

**Triggered by:** Recognition that the methodology enforced structural coherence
but not directional coherence — a system could pass every gate while still
extracting from the people generating its energy. Cultural Physics provides the
evaluation criteria that prevents this.

---

## Future entries

After each change, add an entry using the release version:

```
# 0.X.Y — [Date] ([Summary])

**What changed:**
- [Added/removed/modified step]
- [New pattern discovered]
- [Phase timing adjustment]

**Triggered by:** [What evidence drove the change]
```
