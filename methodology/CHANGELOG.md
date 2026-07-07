# 0.0.12 — 2026-07-01 (Loop Model — Sovereignty loop rename + promotion path)

**What changed:**
- Renamed the top loop from **oversight loop** → **Sovereignty loop** in
  `methodology/loop-model.md`. The field's word is "oversight" (supervision, a
  quality checkpoint); Facework's is Sovereignty (ownership). The human holds the
  top ring because control of the current is the thesis, not to catch bad output.
  Added a note distinguishing the Sovereignty *primitive* (control of the system
  being built) from the Sovereignty *loop* (control of the work itself) — one
  force, two altitudes, not an Article X overload.
- Clarified the **promotion path**: the note does not become a new `theories/`
  file. It folds into `theories/the-coherence-operating-system.md` as a "The
  Loops" section (operating-model material, not Cultural Physics theory), gated
  on a **validating run** — a project where the loops demonstrably close on their
  named signals. Added a Promotion section documenting the bar.

Docs-only. The 0.0.11 entry below is left as the historical record (it shipped
with "oversight"); this entry documents the rename.

---

# 0.0.11 — 2026-07-01 (The Facework Loop Model — Design Note)

**What changed:**
- Added **`methodology/loop-model.md`** — a design note naming the five-loop
  stack (execution → task → product → system → oversight) and mapping it onto
  Facework's existing structure. Loops are the *temporal/convergence* axis;
  primitives are the *coherence* axis — a lens over the primitives, not a
  replacement (Article XII).
- Each loop is wired to the **closing-signal artifact** Facework already
  produces: task → phase gate, product → ConsonanceCheck/Entropy/contract-sync,
  system → diagnostic + retro, oversight → sovereignty (human judgment).
- Introduced the **per-loop autonomy dial** (evidence × risk × oversight
  bandwidth), extending evidence-level calibration with a second axis. The
  **sovereignty floor** keeps the oversight loop human on ownership grounds
  (the extraction thesis), not just quality.
- **Two reframes made canonical:**
  - `skills/OPERATING_SKILLS.md` — the eight operating skills are named as the
    **Postures**, the product-loop operating modes.
  - `theories/the-coherence-operating-system.md` §VI — the `/fw-coherence`
    diagnostic + retro is named as the **system loop**.
- The model is **descriptive of how Facework already runs** across real internal
  and external projects; only *automating* the system loop is deferred.

Docs-only; no protocol behavior changed. Provisional design note — promote to
`theories/` once formalized.

---

# 0.0.10 — 2026-07-01 (Vocabulary — Signal + Stability)

**What changed:**
- Defined **`Signal`** canonically in `theories/cultural-physics.md` §VII — the
  irreducible pattern within a system's energy that Frequency extracts. Closes a
  gap where "signal" was used throughout the canon (`Signal before scale`, "the
  irreducible signal", `SignalThesis`) but never defined as a term.
- Disambiguated the overload: canonical `Signal` (the system's irreducible
  truth) vs. the ordinary "signal = diagnostic information" sense (as in
  "entropy is signal"). One name had two meanings; now flagged explicitly.
- Completed the §VII canonical term table — it now covers **Signal, Frequency,
  Current, Stability, Coherence**. `Stability` was already defined in prose
  (§VII "The Conductor" + the COS Primitive Stack); only its table row was
  missing.
- No new glossary file — anchored both terms in the existing vocabulary source
  to avoid a competing dictionary (Article X: one concept, one name, one meaning).

Docs-only; no protocol behavior changed. Closes the Signal/Stability follow-up
from the 0.0.9 reconciliation record.

---

# 0.0.9 — 2026-06-30 (Constitution + Coherence Design — Standards Integration Phase 1)

**What changed:**
- Added **`CONSTITUTION.md`** — the governing authority of the practice (13
  articles), ported from the *Facework Standards Architecture* and faithful to
  its definition of Facework as the Practice.
- Added **`theories/coherence-design.md`** — the Discipline layer between
  Cultural Physics (Theory) and Facework (Practice). Completes the five-layer
  model: Theory → Discipline → Practice → Implementation → Runtime.
- Recorded the **five spine decisions** from the Standards Architecture review
  in `methodology/architecture-reconciliation-2026-06.md`: five-layer model,
  Capability-is-an-artifact-not-a-layer, FRN as sole identifier, one Resonance
  definition, and Postures as the maintenance half of the Practice.
- **Staged the standards apparatus** (FS-000–900, FOS-100–800, FRS-000–800,
  certification) under `standards/` as a deferred post-1.0 track, source draft
  archived. Corrected an earlier draft: **Runtime Ports are NOT deferred** —
  they shipped at 0.0.5–0.0.8; only the formal FS-400 spec stays deferred.
- **Archived** the five stale `*-PLAN.md` files (Operating Layer / Runtime Ports
  / Harness Bundle / Design Infrastructure / V0.0.8) to `methodology/archive/`.
  The Operating Layer plan self-retires once 0.0.7 ships, which it did.
- README + CLAUDE.md updated with the new docs; Facework's definition left to
  the Standards Architecture (unchanged).

**Open follow-ups:** reconcile the README "Facework is a protocol" wording with
the Constitution's "Facework is the Practice" wording at the Standards
Architecture rollout; define `Stability` and `Signal` canonically.

**Note on lineage:** this work began against 0.0.4 as a 0.0.5 branch, which
collided with the parallel Operating Layer trilogy (0.0.5–0.0.8). It was closed
and rebuilt cleanly against current main. Docs-only; no protocol behavior changed.

---

# 0.0.8 — 2026-05-12 (Efficiency Hints + Skill Polish — Manifest Schema 1.4.0)

**What changed:**
- Added **10 optional declarative fields** across the existing port schemas
  to close gaps surfaced by four independent research sources (Karpathy /
  Fung / Asana / Claude Platform). All additions are MAY/SHOULD, never
  MUST. v1.0.0–v1.3.0 manifests stay conformant.
- Added **new PROTOCOL.md §12 Observability Interface** — declares the
  minimum event surface (skill.invoked, skill.completed, skill.error,
  memory.write, memory.read, integration.called, verifier.run, cache.hit,
  cache.miss, advisor.escalated). Protocol specifies the events; runtimes
  pick the transport (stdout, OpenTelemetry, custom sink, etc.).

**Cluster A — Skill semantics polish:**
- `sponsors[]` on Skill — humans accountable for the skill's correctness,
  memory hygiene, and lifecycle. From Asana's agent-sponsorship pattern.
- `verifier_skill_id` on Skill — generalizes the design-eye-evaluator
  pattern. Any output-producing skill MAY declare a verifier that gates
  its output. Cross-manifest validation enforces resolution.
- `multiplayer: bool` on Skill — declares whether the skill may be invoked
  by multiple users concurrently with memory accruing across users.
  Default false. From Asana's multiplayer agent semantics.
- Integration `scope[]` items now accept either a plain operation string
  (back-compat) OR an object `{operation, direction}` where `direction`
  is `sensor` / `actuator` / `both`. Adopts Karpathy's sensors-and-
  actuators framing.

**Cluster B — Runtime efficiency hints (Claude Platform optimization
strategies):**
- `cache_affinity: stable | dynamic` on context bundles, port refs, and
  HarnessBundle refs. Default `stable`. Runtimes implementing prompt
  caching use this for eviction strategy.
- `load_mode: eager | lazy | on_search` on integrations. Default
  `eager`. `on_search` maps to Claude Platform tool-search optimization.
- `intermediate: bool` on skill outputs. Marks outputs for downstream
  tool consumption only — runtimes may keep them out of the operator's
  context window. Maps to "programmatic tool calling" optimization.
- `compactable: bool` on MemoryMap folders. Declares whether contents
  may be summarized/dropped from in-session context after writing.
  Content persists on disk. Maps to compaction optimization.
- `model_tier: standard | advanced` on Skill. Runtimes map `advanced`
  to their premium tier (e.g. Opus). Default `standard`.
- `advisor_escalation: skill_id` on Skill. Optional skill the calling
  skill can invoke for a one-shot advanced-tier advisor judgment.
  Composable: escalation goes through a registered Skill, so it gets
  its own audit trail.

**Validator extensions:**
- `bin/validate-manifest` validates all new optional fields with
  appropriate enums.
- Cross-manifest validation enforces `verifier_skill_id` and
  `advisor_escalation` resolve to declared skills.
- Scope polymorphism handled — string OR object form, both valid in the
  same manifest.
- Validator output reports v1.4.0 feature usage: sponsor count,
  multiplayer count, advanced-tier count, verifier-gated count,
  advisor-escalating count, load_mode distribution.

**Worked example (Face.works) updated to exercise every new field:**
- All 7 skills get `sponsors: ["harper@face.works"]`
- 3 skills marked `multiplayer: true` (prospect-qualification,
  engagement-delivery, design-eye-evaluator)
- `gamut-audit` gets `model_tier: advanced`
- `engagement-delivery` and `engagement-closure` get
  `verifier_skill_id: design-eye-evaluator`
- `engagement-delivery` gets `advisor_escalation: gamut-audit`
- MemoryMap: raw/, wiki/competitors/, outputs/morning-brief/,
  archive/raw/ marked `compactable: true`
- ContextManifest: soul, identity, purpose, taste, global get explicit
  `cache_affinity: stable`
- IntegrationManifest: linear, gmail, vault-fs use the new object-form
  scope items with direction; load_mode set on every integration
- HarnessBundle skill files updated with v1.4.0 frontmatter

**Conformance posture:**
- Audit events (§12) are SHOULD for v1.4.0 runtime conformers.
- `sponsors[]` is SHOULD on Validated-evidence projects, MAY otherwise.
- Everything else is MAY — purely declarative hints.
- v1.0.0–v1.3.0 manifests remain conformant. No breaking changes.

**Strategic positioning:**
This is a **polish + efficiency-hints release.** Smaller than each trilogy
commit. The pattern: protocol declares properties, runtimes implement.
Adding hints lets runtimes optimize without coupling the protocol to a
specific runtime implementation. The dashboard pattern shown in the Claude
Platform talk (efficiency dashboard with caching/compaction/tool-search/
advisor strategies) consumes these declarations — Facework specifies the
surface, dashboards render it.

**What was NOT adopted (deferred to v0.0.9+):**
- Bottleneck-shift assessment as a recurring methodology element (Fung
  pattern) — needs methodology-level prose work.
- Cross-user memory propagation rules — Asana case. `multiplayer: true`
  declares the property; semantics of how corrections propagate stay
  runtime-side for now.
- Process kill discipline in /retro — methodology evolution.
- Software 3.0 framing in PROTOCOL.md intro — reframe of identity.
- Cross-tenant skill registry — Asana enterprise memory at scale. v0.1.0+.
- Per-track skeleton ports — GAMUT's responsibility.

**Triggered by:** Four independent research sources converging on the same
gaps: Karpathy (Software 3.0, verifiability, sensors/actuators, outsource
thinking not understanding), Fung (bottlenecks shifted, verification is
new bottleneck), Asana (multiplayer agents, sponsors, grader pattern),
Claude Platform (caching/tool-search/compaction/advisor strategies). The
four-source convergence justified a tight patch release alongside the
trilogy rather than waiting for v0.1.0.

---

# 0.0.7 — 2026-05-12 (DesignInfrastructure — Manifest Schema 1.3.0)

**What changed:**
- Added **DesignInfrastructure** as a new canonical artifact (PROTOCOL.md
  §11). Phase 3 (Taste) now emits an *active* design layer alongside the
  governance documents — design tokens as structured data, component
  primitives with machine-readable contract rules, an LLM-readable
  examples library, and a callable design-eye-evaluator Skill.
- This is the **design axis** (Diego at Ramp / Glass): "design as
  infrastructure, not governance." The TasteContract becomes load-bearing
  during operation, not just at handoff. Non-designers in the tenant
  world can ship without producing brand-destructive output.
- Bumped manifest schema to **1.3.0**. Adds optional top-level
  `design_infrastructure` block: `tokens` (path), `components` (path),
  `examples` (path), `evaluator_skill_id` (Skill in SkillManifest).
  v1.0.0–v1.2.0 manifests remain conformant — additive only.
- **Track-aware conformance** (different from v0.0.5/v0.0.6's
  evidence-level calibration): Cultural Brand MUST emit; Creator,
  Athlete, Platform/Product SHOULD emit; Agency/Studio MAY emit. Design
  fidelity is a function of project track, not demand evidence depth.
- The four components:
  - `tokens.json` — canonical vocabulary `color`/`type`/`space`/`radius`/
    `motion` with tenant-chosen values
  - `components.yaml` — primitives with `tokens_used[]`, variants,
    states, and machine-readable `contract.must[]` / `contract.must_not[]`
  - `design-eye-spec.md` — playbook the evaluator Skill executes
  - `examples/on-brand-examples.md` + `examples/off-brand-anti-examples.md`
    — LLM-readable reference data for grading
- The **design-eye-evaluator** Skill is registered in `SkillManifest`
  (domain: quality, ownership: agent). Other output-producing skills can
  register it as a post-step quality gate. Runtime executes the LLM call;
  Facework declares the contract.
- Updated **`/fw-taste`** (3.2.0): new Step 6 — Emit Design
  Infrastructure (track-relevant). Output Tier 3b lists the four
  DesignInfrastructure files when emitted.
- Extended `bin/validate-manifest`: when `design_infrastructure` is
  declared, the validator checks tokens parses as JSON, components
  parses as YAML with non-empty components[], examples directory has
  required files, evaluator_skill_id resolves to a Skill in SkillManifest.
  Reports track-relevant vs track-optional based on conformance table.
- Added worked example `examples/face.works/design-infrastructure/`:
  tokens (color/type/space/radius/motion for an agency aesthetic),
  6 components (heading, body-text, button, section, card, link) with
  contract rules, design-eye spec, and 4+4 examples covering
  consultant-register drift, SaaS aesthetic mimicry, magic numbers,
  marketing prose, and abstractions over names.
- Added planning artifact `DESIGN-INFRASTRUCTURE-PLAN.md`.

**One-way export (deferred):** Evaluator feedback that surfaces patterns
the TasteContract didn't capture could in principle propagate back into
contract amendments. Round-trip is deferred to v0.1.0+.

**What was NOT adopted (deferred):**
- DTCG (Design Token Community Group) format export → future (JSON
  format chosen for v0.0.7 for widest tool compatibility; DTCG export
  can be added as a derived view later).
- Image-based examples + vision evaluation → future when evaluators
  integrate vision capabilities natively.
- Component code generation from primitives → out of Facework's scope
  (the runtime's job; Facework declares the contract, not the
  implementation).
- Per-track skeleton design infrastructure → GAMUT v0.0.7+ (Facework
  remains track-neutral in the spec).

**Triggered by:** v0.0.5/v0.0.6 set up the portability layer (YAML +
markdown views of Runtime Ports). Move B completes the operating-layer
trilogy by adding the design axis Diego identified at Ramp. Cross-validated
by Face.works emitting a full DesignInfrastructure including 6 component
primitives whose contract rules pass structural validation against the
schema, and a design-eye-evaluator Skill registered cleanly in the
SkillManifest with all cross-references resolving.

---

# 0.0.6 — 2026-05-12 (HarnessBundle — Manifest Schema 1.2.0)

**What changed:**
- Added **HarnessBundle** as a new canonical artifact (PROTOCOL.md §10).
  Reformats the four Runtime Port YAML manifests as harness-native
  markdown files (`soul.md`, `identity.md`, `purpose.md`, `memory.md`,
  `tools.md`, `boundary.md`, `skills/*.md`, plus top-level `CLAUDE.md`).
  This is what file-based runtimes (Open Claw, Glass-style tools,
  Corey's build) ingest directly.
- Bumped manifest schema to **1.2.0**. Adds optional
  `runtime_ports.bundle.path` field declaring where the markdown bundle
  lives. `protocol_version` pattern relaxed to `^1\.\d+\.\d+$` for
  forward 1.x.x compatibility. v1.0.0 and v1.1.0 manifests remain
  conformant — additive only.
- Conformance calibrated by `evidence_level`: Validated MUST emit the
  full bundle; Signaled SHOULD emit a defined minimum subset; Thesis MAY
  emit minimal (CLAUDE.md + skills/) only.
- The bundle is **one-way export** (YAML → markdown). The YAML
  manifests are the source of truth; the bundle is read-only. Round-trip
  editing deferred to v0.1.0+.
- Updated **`/fw-coherence`** (4.3.0): new Step 6c — Emit Harness Bundle.
  Phase 8 audit catalog and Tier 3 output extended to include the bundle.
  Walks the user through producing each file from source artifacts in
  dependency order (boundary first, CLAUDE.md last).
- Extended `bin/validate-manifest`: when `runtime_ports.bundle.path` is
  declared, the validator checks (a) the directory exists, (b) required
  files are present per evidence_level, (c) one `skills/{id}.md` file
  exists for each skill in SkillManifest. Hard fail on missing required
  files.
- Added worked example `examples/face.works/harness-bundle/` — full
  bundle with 7 top-level markdown files plus 6 skill files (one per
  skill in face.works SkillManifest). Demonstrates the file-based view
  any runtime can ingest.
- Added planning artifact `HARNESS-BUNDLE-PLAN.md` (v0.0.6 execution
  detail).

**Strategic positioning (unchanged from v0.0.5):** Facework is the
interface between GAMUT (practice) and runtimes (Corey's build, Open
Claw, Glass, others). HarnessBundle is the **file-based bridge** to
runtimes that consume markdown, alongside the YAML-based bridge to
runtimes that consume structured data. Both are derived views of the
same source contracts — pick the one your runtime ingests.

**What was NOT adopted (deferred):**
- Automated bundle generation from YAMLs → v0.0.7+ once the format
  stabilizes against ≥2 reference runtimes.
- Round-trip bundle editing (bundle MD edits propagate back to YAML)
  → v0.1.0+.
- Per-track skeleton bundles — GAMUT ships these as a separate
  v0.0.6 release alongside Facework. Facework stays track-neutral.

**Triggered by:** v0.0.5 (Runtime Ports) shipped clean YAML contracts.
Move C completes the portability picture by giving file-based runtimes
their native ingest format. Cross-validated by Face.works (real
agency-track project) emitting a full bundle that passes structural
validation against the schema.

---

# 0.0.5 — 2026-05-12 (Runtime Ports — Manifest Schema 1.1.0)

**What changed:**
- Added **Runtime Ports** layer (PROTOCOL.md §9). Four new canonical
  artifacts expose the tenant world as machine contracts any runtime can
  ingest: `SkillManifest`, `MemoryMap`, `ContextManifest`,
  `IntegrationManifest`. These declare how the tenant world is *operated*,
  separate from how it's built — Phases 1–8 remain structurally unchanged.
- Adopted Meng's four-layer model (Skills, Memory, Context, Connections)
  as the canonical port spec. Independently converged on by three research
  sources (Chase / Agentic OS, Meng / Toolbenders, Diego / Ramp).
- Bumped manifest schema to **1.1.0**. Adds optional top-level
  `runtime_ports` block + `project.evidence_level` + `project.track`.
  v1.0.0 manifests remain conformant — additive only, no breaking changes.
- Conformance calibrated by `evidence_level`: Validated MUST emit all four
  ports; Signaled SHOULD; Thesis MAY emit a minimal `SkillManifest` only.
- `MemoryMap.boundary` block resolves the "one system of record" collision
  between tenant memory (the vault) and runtime auto-memory (Claude's
  per-project memory at `~/.claude/projects/<sanitized-cwd>/memory/`).
- Cross-manifest reference resolution (§9.7): `bin/validate-manifest` now
  loads each declared port manifest, validates structure, and checks all
  bidirectional cross-references resolve. End-to-end validation runs
  cleanly against the Face.works worked example.
- Updated **`/fw-stability`** (4.1.0): new Step 5d emits the four ports
  during Phase 5 architecture work. Output Tier 3 lists port manifests as
  part of the machine artifact bundle.
- Updated **`/fw-flow`** (4.1.0): stable kebab-case filenames; each
  playbook referenced by ≥1 skill in SkillManifest (skill alignment check
  in Step 5).
- Updated **`/fw-coherence`** (4.2.0): runtime coherence test in Phase 8
  (cross-manifest validation gates handoff readiness); Stability primitive
  walkthrough extended to include port emission learnings.
- Added worked example `examples/face.works/runtime-ports/` — four port
  YAMLs populated from real Face.works playbooks/decisions/proof.
- Added planning artifacts: `OPERATING-LAYER-PLAN.md` (strategic umbrella
  across v0.0.5–v0.0.7) and `RUNTIME-PORTS-PLAN.md` (v0.0.5 execution
  detail).

**Strategic reframe:** Facework is the **interface layer** between GAMUT
(practice — builds the tenant world) and runtimes (Corey's build,
Open Claw, Glass, others — operate the world). The protocol's improvement
vector is portability, not runtime growth. **Explicitly out of scope (won't
be added):** Facework-native dashboard, observability tooling, harness
implementation, runtime-side adapter code.

**What was NOT adopted (deferred):**
- `HarnessBundle` markdown export (soul.md / identity.md / skills/) →
  Move C, v0.0.6. This is what Corey's runtime will ingest file-by-file.
- `DesignInfrastructure` as active artifact (LLM-callable design eye) →
  Move B, v0.0.7. Diego's "design as infrastructure" insight.
- Artifact compression (TasteContract+DesignLanguageSpec consolidation,
  SovereigntyMap+ConsonanceCheck consolidation) → v0.1.0 once 3+ reference
  tenants exist.
- Track-aware skeleton ports — GAMUT publishes per-track defaults in v0.0.6.

**Triggered by:** Three research inputs converging on the four-port model
(Chase / Agentic OS, Meng / Toolbenders, Diego / Ramp) plus the
GAMUT/Facework/Corey three-layer clarification. Cross-validated by
Face.works (real agency-track project) emitting all four ports cleanly
with bidirectional cross-references resolving and zero raw secrets.

---

# 0.0.4 — 2026-04-05 (Execution Learnings — TONL Session)

**What changed:**
- Added **Demand Gate** to PROTOCOL.md prerequisites and `/fw-semantics` Step 0.75.
  Three forcing questions (demand reality, status quo, specificity) run before
  meaning extraction. Classifies project as Validated / Signaled / Thesis.
- Added **Evidence-Level calibration** system. Evidence level recorded in
  `ProjectContext` and calibrates protocol depth throughout all phases.
  Thesis-level projects run all phases lighter. `EvidenceLevel` added to
  canonical objects in PROTOCOL.md.
- Added **Cold Read** (optional adversarial review) to `/fw-frequency` (Step 7),
  `/fw-current` (Step 6.5), and `/fw-stability` (Step 6.5). Dispatches a fresh
  agent to read phase output with no conversation context. Accept/reject/defer
  per finding. 5 minutes per phase.
- Added **Build Brief** to `/fw-coherence` (Step 6b). One-page builder-oriented
  synthesis: problem, approach, what to skip, premises, success criteria,
  dependencies. Extracted from existing artifacts, not new research.
- Added **Parallel Lanes** to `/fw-stability` (Step 5b). Maps component
  boundaries to non-overlapping directory scopes for parallel agent execution.
  Rule: shared directory = same lane (sequential).
- Added **Reference Page** to `/fw-resonance` (Step 4b). Optional for UI
  projects. Self-contained HTML per key screen with real design tokens and
  real content. Visual contract, not interactive prototype.
- Added **Verification Map** to `/fw-stability` (Step 5c). WORKS/BREAKS/EDGES
  contract per capability. Written in capability language, maps directly to
  tests during implementation.

**Protocol weight added:** No new phases. 5 additions to existing phase outputs,
1 pre-phase gate, 1 optional per-phase step. ~90 minutes total at full depth,
~30 minutes at thesis level.

**What was NOT adopted:** Review readiness dashboards, telemetry, multi-pass
rating systems, CHANGELOG/VERSION automation, adversarial review pipelines with
P1 gates. These solve team coordination problems. Facework solves meaning,
direction, and architectural clarity.

**Triggered by:** TONL project gstack session (2026-04-05). Full protocol run
followed by /office-hours → /plan-ceo-review → /plan-design-review →
/plan-eng-review → 5 parallel agents → /ship. The protocol-to-shipping gap
was closed in one session. These 7 learnings are the patterns that made it
possible. Evidence: thefacelessdon/TONL PR #1, 60+ files, 36 tests, 4 reviews.

---

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
