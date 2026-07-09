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

---

## Roadmap

### 0.1.0 — First External Run

The next minor version ships when the protocol has been validated on a project
that isn't Facework itself.

**Criteria:**
- [ ] Complete protocol run (Phases 1–8) on an external project
- [ ] Coherence diagnostic produces actionable methodology updates
- [ ] No phase was skipped or run out of order due to skill confusion
- [ ] Handoff package reviewed by someone who wasn't in the room

**Expected methodology changes:**
- Phase timing estimates validated against real (non-self) project
- Playbook templates tested against real production workflows
- Intake (Step 0) tested on a project with existing artifacts

### 0.2.0 — Multi-Run Patterns

**Criteria:**
- [ ] 2+ external protocol runs completed
- [ ] Cross-project patterns identified in coherence tracker
- [ ] Skill refinements from at least 2 different project types (creator, brand, tool, etc.)
- [ ] Compliance scoring tested by someone other than the protocol author

### 0.3.0 — Automation & Distribution

**Criteria:**
- [ ] Protocol can be installed and run without manual intervention beyond `install.sh`
- [ ] Update system validated (user received and applied an update)
- [ ] Manifest schema validated against 3+ real manifests
- [ ] Skills work across Claude Code CLI, desktop, and web

### 1.0.0 — Stable

See "What 1.0.0 means" above. No speculative date. Gets there when the
criteria are met.

---

## How to bump

1. Update `VERSION` file with new version number
2. Add entry to `methodology/CHANGELOG.md` with what changed and why
3. Add row to the Version History table above
4. Commit with message: `Release 0.X.Y — [one-line summary]`
5. Push to main (the update system checks `origin/main:VERSION`)
