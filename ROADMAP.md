# Facework Roadmap

## Versioning Rules

Release version: `MAJOR.MINOR.PATCH` (semver).

The protocol is pre-1.0. Every version below 1.0.0 means: the protocol works
but is still being shaped by real runs. Breaking changes are expected.

### What bumps each number

| Segment | When it increments | Examples |
|---------|-------------------|----------|
| **PATCH** (0.0.X) | Pre-1.0: any change that shapes the protocol — structural consolidation, skill additions/removals, phase reordering, scoring fixes, installer improvements. The protocol is still forming; patches are how it learns. | Consolidate 10→8 phases, fold intake into Step 0, fix scoring formula, add update system |
| **MINOR** (0.X.0) | Validated capability milestones — first external run, multi-run patterns, automation. Each minor version means the protocol has been tested against real work and the changes held. | First external protocol run completed, cross-project patterns identified |
| **MAJOR** (X.0.0) | Protocol is stable for external use. Reserved for 1.0.0 and beyond. | All 1.0.0 criteria met (see below) |

### What 1.0.0 means

The protocol is stable for external use when all of these are true:

1. **3+ external protocol runs completed** (not self-application)
2. **No phase reordering in the last 2 runs** — the sequence has settled
3. **All 12 protocol skills have been exercised** on at least one real project
4. **Diagnostic scores are reproducible** — two people scoring the same project land in the same zone
5. **A new builder can run the protocol** from the repo without live guidance

Until then, we're 0.x.y.

---

## Version History

Maps methodology changelog iterations to release versions.

| Release | Methodology | Date | What happened |
|---------|------------|------|---------------|
| 0.0.1 | v1.0–v4.0 | Mar 2026 | Initial protocol through reconciliation. 7-phase → 10-phase. Cultural Physics integration. 13 skills. Protocol spec v2.0.0 established. |
| 0.0.2 | v4.1–v5.0 | Mar 2026 | Post-diagnostic fixes. Scoring system corrected. `/fw-intake` created (Phase 0). Phase numbering added to all skills. Artifact ingestion step added. 14 skills. Update system added. |
| 0.0.3 | — | Mar 2026 | Protocol consolidation. 10→8 phases. Intake folded into Step 0. Diagnostic folded into `/fw-coherence`. 14→12 skills. Versioning system added. First release tracked under new versioning. |
| 0.0.4 | — | Apr 2026 | TONL gstack session — 7 execution learnings folded in. Demand Gate (three forcing questions before meaning extraction). Evidence-level calibration (Validated / Signaled / Thesis) recorded in `ProjectContext`. Cold Read (optional adversarial review in Frequency / Current / Stability). Build Brief in `/fw-coherence`. Parallel Lanes in `/fw-stability`. Verification Map. Reference Page in `/fw-resonance`. |
| 0.0.5 | — | May 2026 | **Runtime Ports — manifest schema 1.1.0.** Four new canonical artifacts (`SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest`) any runtime can ingest. `MemoryMap.boundary` resolves the "one system of record" collision between tenant memory and runtime auto-memory. Cross-manifest reference validation in `bin/validate-manifest`. Strategic reframe: Facework as **interface layer**, not runtime. |
| 0.0.6 | — | May 2026 | **HarnessBundle — manifest schema 1.2.0.** Markdown view of port manifests (`soul.md` / `identity.md` / `purpose.md` / `memory.md` / `tools.md` / `boundary.md` / `skills/*.md` + top-level `CLAUDE.md`) for file-based runtimes (Open Claw, Glass-style harnesses). One-way derived view; YAML stays authoritative. |
| 0.0.7 | — | May 2026 | **DesignInfrastructure — manifest schema 1.3.0.** TasteContract becomes LLM-callable: structured design tokens (JSON), component primitives with machine-readable contract rules, design-eye-evaluator Skill registered in SkillManifest, on-brand/off-brand examples library. Track-aware conformance (Cultural Brand MUST, others SHOULD/MAY). |
| 0.0.8 | — | May 2026 | **Efficiency hints + skill polish — manifest schema 1.4.0.** Ten optional declarative fields across the port schemas: `sponsors`, `verifier_skill_id`, `multiplayer`, `model_tier`, `advisor_escalation`, `cache_affinity`, `load_mode`, `intermediate`, `compactable`, plus sensor/actuator direction on Integration scope items. New §12 Observability Interface declaring the minimum event surface. All MAY/SHOULD, never MUST. |
| 0.0.9 | — | Jun 2026 | **Constitution + Coherence Design — Standards Integration Phase 1.** Added `CONSTITUTION.md` (13 articles) and `theories/coherence-design.md` (the Discipline layer), completing the five-layer model. Recorded the five spine decisions from the Standards Architecture review. Staged the FS/FOS/FRS standards apparatus under `standards/` as a deferred post-1.0 track (Runtime Ports excepted — they shipped at 0.0.5–0.0.8). Archived five stale `*-PLAN.md` files. Docs-only. |
| 0.0.10 | — | Jul 2026 | **Vocabulary — Signal + Stability.** Defined `Signal` canonically in `theories/cultural-physics.md` §VII (the irreducible pattern Frequency extracts) and disambiguated the "entropy is signal" overload. Completed the §VII term table (Signal, Frequency, Current, Stability, Coherence). No new glossary — anchored in the existing vocabulary source. Docs-only. |
| 0.0.11 | — | Jul 2026 | **The Facework Loop Model (design note).** Added `methodology/loop-model.md` — the five-loop stack (execution/task/product/system/oversight) mapped onto protocol/postures/diagnostic, each wired to its closing-signal artifact, plus a per-loop autonomy dial and a sovereignty floor. Reframed the 8 operating skills as **Postures** (product-loop modes) and the `/fw-coherence` diagnostic as the **system loop**. Docs-only. |
| 0.0.12 | — | Jul 2026 | **Loop Model refinement.** Renamed the top loop **oversight → Sovereignty loop** (ownership, not supervision; distinguished from the Sovereignty primitive as one force at two altitudes). Clarified the promotion path: folds into the COS doc as "The Loops," gated on a validating run — not a new theory file. Docs-only. |
| 0.0.13 | — | Jul 2026 | **Loop Model → canon.** The 14th & Co loop-instrumented protocol run cleared the promotion bar: folded "The Loops" into `theories/the-coherence-operating-system.md` §VII. Only 2 of 8 task-loop instances closed cleanly on their named signal — the other 6 hit *predicted* failure modes, so the run validated the model by diagnosing real debt. Added the earned sub-rule (a closing signal must produce an artifact), the validation doc, and retro 007 (first retro run as a system loop). Validated on one track/operator; cross-track is future work. |
| 0.0.14 | — | Jul 2026 | **Sovereignty-loop guard-rail.** An agent may recommend a Sovereignty-loop exit but must never record it as decided — it stays open (RECOMMENDED, not RESOLVED) until the human rules. Earned when the 14th & Co run pre-wrote the founder's ADR-015 scope cull as ratified before he'd decided. Added to §VII and loop-model.md. Docs-only. |
| 0.0.15 | — | Aug 2026 | **Runtime Ports validated against a first external runtime — Buzz.** Added PROTOCOL.md §9.11 "Runtime Shells and substrate binding." The four ports partition into a collaboration/execution/audit group (strong fit on Buzz) and a knowledge/coherence/governance group (no host; stays authoring-side). First external evidence the machine contracts port to a runtime Facework didn't design. |
| 0.0.16 | — | Aug 2026 | **PROTOCOL.md release-version drift fix.** Removed the hardcoded `Version: 0.0.8` header (stale ~7 releases); the spec now points to `VERSION` as the single source of truth. The manifest-schema axis (1.x) is untouched — a real versioning line, not drift. Docs-only. |
| 0.0.17 | — | Aug 2026 | **Runtime Ports — second runtime, Letta** (opposite corner: memory-first). `MemoryMap.boundary` is behavioral, not only structural; §9.11 governance splits into enforceable gates vs descriptive metadata; the split-runtime binding is a complementary pair (neither runtime hosts all four ports). |
| 0.0.18 | — | Aug 2026 | **Runtime Ports — third runtime, OpenAI** (the sovereignty-failing corner). §9.2's three-reference-tenant bar met. FS-400.6: the Runtime Shell is itself a `SovereigntyMap` dependency; a non-self-hostable shell is `rent` with maximal blast radius, requiring a Phase-7 waiver. First finding that tests the spec's *rejection* behavior, not its fit. |
| 0.0.19 | — | Aug 2026 | **Retro 008 — Runtime Ports validation program.** System-loop retro for the Buzz→Letta→OpenAI program; names the reusable "Runtime Validation Pass" procedure, a source-verification requirement for canon-bound claims, and git-native ship guidance for this docs/spec repo. Docs-only. |
| 0.0.20 | — | Aug 2026 | **`/runtime-validation-pass` skill.** Encodes the proven pass as a reusable skill and introduces a new **system-loop skill** class (evolves the methodology; neither phase primitive nor Posture). Registered in `OPERATING_SKILLS.md` and the installer. |
| 0.0.21 | — | Aug 2026 | **Paired agent — `runtime-ports-auditor`.** The specialist agent for `/runtime-validation-pass` (per-port + §9.11 sovereignty audit; source-verifies canon-bound claims). Closes the last operating skill that lacked a paired specialist. |
| 0.0.22 | — | Aug 2026 | **Runtime Ports — fourth runtime, Claude Code; FS-400.7** — and the first validation produced by the 0.0.20/0.0.21 skill+agent (the program dogfooding its method). Shell sovereignty **decomposes by layer** (harness/state/model): Claude Code is own-harness + own-state + rent-model. Gave §10 HarnessBundle its first concrete runtime target. |
| 0.0.23 | — | Aug 2026 | **HarnessBundle → Claude Code converter** (`bin/harness-to-claude-code`). First concrete §10 consumer: reads a bundle, emits a runnable `.claude/` layout (composed CLAUDE.md, skills, MCP scaffolds; secrets never emitted). One-way; the YAML manifests stay source of truth. |
| 0.0.24 | — | Aug 2026 | **End-to-end run — converter output boots in Claude Code.** The generated bundle auto-discovered all 7 skills and a headless `claude -p` answered from the composed CLAUDE.md. Converter correctness fix (SKILL.md port fields → `metadata` for hosted-upload portability). A tenant world now compiles to a runtime that boots as itself. |
| 0.0.25 | — | Aug 2026 | **Runtime-conformance tier — the "universal MUST" pass** (manifest schema 1.5.0). Base conformance stays evidence-calibrated; **runtime conformance** is an opt-in additive claim requiring all four ports + a new `RuntimeConformanceProfile` (§9.12). Corrected §9.2's stale "universal-MUST at v0.1.0" phrasing. No existing v1.0.0–v1.4.0 manifest affected. |
| 0.0.26 | — | Aug 2026 | **ROADMAP drift reconciliation.** Backfilled the Version History table (0.0.15–0.0.25) and reconciled the stale "First External Run" gate — external 8-phase runs (FACTORY, 14th & Co) are done, so 0.1.0 was redefined to **Independent Validation** (operation/review by a non-author). Docs-only. |
| 0.0.27 | — | Aug 2026 | **ROADMAP self-consistency fix.** Added the 0.0.26/0.0.27 rows the prior pass omitted (the table was one behind again) and softened the 0.3.0 manifest-schema criterion from a clean ✓ to an honest partial (4-runtime portability + 1 worked-example tenant ≠ 3+ independent project manifests). Docs-only. |
| 0.0.28 | — | Aug 2026 | **Facework Visual Specification + production candidate.** Canonical visual system (FVS/FVI/FVA/FVR/FVP) with the Coherence Mark derived from the Cultural Physics constructs (Signal/Frequency/Current/Stability), plus `bin/validate-tokens` enforcing token source-authority. Rebuilt the `face.works` runtime; reconciled GAMUT proof to measured ground truth and dropped the unsupported "4 days" claim across all sources; added four evidenced cases (14th & Co, HUE, Chefnic, Club Volley) under a provenance split (Facework-run vs Facework-informed); committed an axe-core WCAG 2.2 AA audit (0 violations / 16 routes) and a vitest suite. |
| 0.0.29 | — | Aug 2026 | **The Reading Room — derived design language + two-mode IA.** Rebuilt the `face.works` runtime around a governing metaphor derived from Facework's own meaning ("it doesn't decorate — it reads"), using the 14th & Co derivation *method* (not its skin): two registers of one system — **The Record** (light, The Work) and **The Field** (warm obsidian, The Practice) — a locked accent (verdigris), an own type trio (Literata / Schibsted Grotesk / Spline Sans Mono), and a Cultural-Physics-derived instrument set. Collapsed the 8-item knowledge shelf into the two-mode spine; migrated every surface (incl. the Markdown renderer) off the old FVS `--fw`/Public Sans system. Honesty layer preserved verbatim; re-ran axe on the new DOM (0 violations / 17 routes, both registers). Spec: `DESIGN.md`. |
| 0.0.30 | — | Aug 2026 | **Identity system — mark derived from the equation, wordmark restored.** Replaced the ad-hoc Coherence Mark (which carried a filled center node) with a mark **derived from the governing equation** Coherence = (Flow × Resonance) / (1 + Entropy): four strands (Signal/Frequency/Current/Stability) sweep to an **open center** — Coherence is the maintained relationship, never a placed node — with the lowest strand crossing under tension as Entropy. Restored the custom "Register" `FACEWORK` logotype as canonical (superseding the 0.0.29 Schibsted-font substitution). Implemented end to end: `CoherenceMark`/`FaceworkWordmark` components, nav lockup, `icon.svg` favicon, regenerated `public/identity/*` assets; reconciled the spec (FVI-001 equation-as-mark, FVI-100 Register canonical, `DESIGN.md`); deleted the dead `CoherenceMarkState` (the node bug). build/lint green, vitest 10/10. |
| 0.0.31 | — | Aug 2026 | **Identity CSS completion + accessibility pass.** Landed the `globals.css` identity rules that were missed from the 0.0.30 staging (retired the dead `.site-identity__word` Schibsted rule; `.site-identity img` → `.site-identity svg { display: block }` so the inline-SVG nav lockup renders correctly). Ran an axe-core WCAG 2.2 AA + best-practice pass over 11 routes across both registers (production build, pinned viewport): all 0 violations after fixing `/proof`, where each case repeated identical `aria-label`s on its `<section>`s, creating duplicate `region` landmarks — dropped the redundant labels so each case is one uniquely-named region. Verified the SVG-only nav lockup's accessible name, single banner/main/contentinfo, heading order, `:focus-visible`, and Next's route-change announcer. Manual VoiceOver/NVDA/real-device rows remain open per `reports/at-test-script.md`. |
| 0.0.32 | — | Aug 2026 | **Brand reconciliation (Phase 1) — visual system aligned to the locked identity.** The full `visual-system/` spec tree was authored at 0.0.28, before the mark was re-derived and the Reading Room type/color system locked (0.0.29–0.0.31); this reconciles the drift. Ran as four parallel domain agents + an integration pass: `FVS-500` typography → the locked Literata/Schibsted/Spline trio (de-provisioned; Inter/JetBrains removed); `FVS-600` color → OKLCH `--rr-*` with verdigris as the single brand accent (clarity-blue retired) and status colors as classification-only; `FVI-200/FVS-800` + eight lockup/motion assets regenerated to the locked `230×176` open-center geometry (qlmanage-verified); the mark's "Exchange Resolve" motion signature kept but re-namespaced `--fw-*`→`--rr-*` on `--rr-ease-settle`; "Coherence Mark" established as the canonical name ("Axis Exchange" retained only as the FVI-001 derivation codename); `FVI-300` diagram state-colors remapped to the four-status set; `FVA-100` rewritten to the two-mode Reading Room IA (+ FVA-000/200/610, FVP-200, tokens). Also stripped dead font wiring from the prototype (JetBrains/Public Sans imports + deps; `--fw-font-structural`→Spline; build green). Stale `applications/*/reference` assets deferred to Phase 2 (asset re-production). |
| 0.0.33 | — | Aug 2026 | **Brand assets (Phase 2, part 1) — share images.** The `face.works` site set `openGraph` metadata but shipped no image, so link unfurls previewed blank. Added OG/Twitter share images in both registers of the locked identity: **Record** (light) as the site default (`opengraph-image.png`/`twitter-image.png`) and **Field** (dark obsidian) on `/engage` = The Practice. 1200×630, ~40KB, built from the font-independent Coherence Mark + Register wordmark vectors with the locked type trio embedded (brand-accurate on any scraper), each shipping alt text. Reproducible via `scripts/build-og.mjs` (`npm run og`) — regenerates from the locked geometry + `@fontsource`, rendered pixel-exact through headless Chrome. Meta tags verified on `/` and `/engage`; build green. |
| 0.0.34 | — | Aug 2026 | **Brand assets (Phase 2, part 2) — social content templates.** Re-produced the three `FVA-400` social reference templates (statement 1:1, evidence 4:5 on the Field register, sequence 16:9), which were still on the superseded identity (JetBrains Mono, Helvetica, clarity-blue). Now the locked system: Literata + Spline Sans Mono, the open-center Coherence Mark in each eyebrow, and a principled accent split — **verdigris** for brand emphasis (accent rules, the current knowledge-path step), status colors only for genuine state (the "DEVELOPING" chip → attention/amber). Each format keeps its job (one claim + source / observation·testing·limit + destination / five-step knowledge path). Reproducible via `scripts/build-social.mjs`, which emits the font-named reference SVGs and font-embedded exact-size preview PNGs. Verified clean of all old identity. |
| 0.0.35 | — | Aug 2026 | **Brand assets (Phase 2, part 3) — identity deck.** Re-produced the 8-slide `FVA-300` identity-reference deck (`facework-identity-reference.pptx`), which was on the superseded identity. Preserved the argument (Title → The Question → The Coherence Mark → Register → Spatial Protocol → Diagram Grammar → Exchange Resolve → Inheritance), swapped to the locked system: Paper↔Field registers alternating (dark bookends), open-center Coherence Mark, embedded Literata + Spline (true, not fallback), verdigris as emphasis only, sources in speaker notes. Renamed "Axis Exchange" → "The Coherence Mark"; dropped the overstated "VERSION 1.0"; motion slide notes the resting state is open-center. Built as full-bleed image slides (same SVG→embedded-font→Chrome pipeline as the OG/social assets, since brand fonts aren't installed on target machines), assembled with pptxgenjs; reproducible via `scripts/build-deck.mjs` (moved to devDependencies). python-pptx validates clean (8 slides, 13.333×7.5, image + notes each). |

---

## Roadmap

> **Reality check (0.0.25).** This ladder was written assuming zero external
> runs. That assumption is stale. Full 8-phase protocol runs on external
> projects have happened — **FACTORY** (retro 006, outside-in) and **14th & Co**
> (retro 007, loop-instrumented, every phase gated) — plus informal deliveries
> across the run history (Her Set Her Sound, Hop in Real Estate, Banng and The
> Gang, Chefnic, and others). The run-count milestones below are **met**. What
> no run has cleared is **independence**: every run to date was operated and
> scored by the protocol author. That — not "a first external run" — is the real
> frontier, and the rungs below are reframed around it.

### 0.1.0 — Independent Validation

**First external run: met** (FACTORY, 14th & Co, and others — see run history and
the reality-check note above). Redefined milestone: the next minor ships when the
protocol clears the one bar every external run so far has *not* — **operation or
review by someone who isn't the protocol author.**

**Original criteria (status):**
- [x] Complete protocol run (Phases 1–8) on an external project — FACTORY, 14th & Co
- [x] Coherence diagnostic produces actionable methodology updates — the 14th & Co diagnostic promoted the Loop Model to canon (0.0.13) and earned the "a closing signal must produce an artifact" rule
- [x] No phase was skipped or run out of order due to skill confusion — 14th & Co gated all 8 in order; the proxy-closes it surfaced were *missing formal signals*, not skill confusion
- [ ] Handoff package reviewed by someone who wasn't in the room ← **the open gate**

**The redefined milestone (still open):**
- [ ] A run whose handoff package is reviewed by someone who wasn't in the room, **or**
- [ ] A diagnostic scored independently — two scorers land in the same zone

### 0.2.0 — Multi-Run Patterns

**Status (0.0.25): run-count met; independence + tracker formalization open.**
Multiple external runs exist and cross-project patterns are already visible in the
retros (outside-in mode, re-pass / loop-closure-audit mode). What remains is the
same independence bar plus formalizing the patterns in the tracker.

- [x] 2+ external protocol runs completed
- [ ] Cross-project patterns identified in coherence tracker — visible in retros; not yet formalized in the tracker
- [ ] Skill refinements from at least 2 different project types (creator, brand, tool, etc.)
- [ ] Compliance scoring tested by someone other than the protocol author — the independence bar

### 0.3.0 — Automation & Distribution

**Status (0.0.25): advanced by the Runtime Ports program, not yet complete.** The
0.0.15–0.0.25 work validated the manifest schema against four reference runtimes
(Buzz, Letta, OpenAI, Claude Code) and shipped a converter that boots a tenant
world in Claude Code (0.0.23–0.0.24). Installer/update validation and cross-surface
skill coverage remain.

- [ ] Protocol can be installed and run without manual intervention beyond `install.sh`
- [ ] Update system validated (user received and applied an update)
- [ ] Manifest schema validated against 3+ real manifests — **partial:** validated for *portability* across four reference runtimes (Buzz/Letta/OpenAI/Claude Code) + one worked-example tenant (face.works, 0.0.15–0.0.25). Only one real *project* manifest exists (Facework's own), so the 3+ bar is not yet met. Strong robustness evidence; not the letter of the criterion.
- [ ] Skills work across Claude Code CLI, desktop, and web

### 1.0.0 — Stable

See "What 1.0.0 means" above. **Status (0.0.25):** the count-based criteria are
effectively met — 3+ external runs completed, the 8-phase sequence has not
reordered since 0.0.3, and all 12 primitives were exercised in FACTORY and
14th & Co (not separately instrumented). 1.0.0 now hinges on the two
**independence** criteria: reproducible diagnostic scores (two scorers, same zone)
and a new builder running the protocol from the repo without live guidance.
Neither has been tested. No speculative date.

---

## How to bump

1. Update `VERSION` file with new version number
2. Add entry to `methodology/CHANGELOG.md` with what changed and why
3. Add row to the Version History table above
4. Commit with message: `Release 0.X.Y — [one-line summary]`
5. Push to main (the update system checks `origin/main:VERSION`)
