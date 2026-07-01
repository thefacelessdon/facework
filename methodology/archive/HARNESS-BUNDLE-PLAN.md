# Harness Bundle Plan — v0.0.6

Status: Draft
Target: v0.0.6
Plan author: working session, 2026-05-12
Folds into: `PROTOCOL.md` §10 (new section) once executed
Parent plan: [OPERATING-LAYER-PLAN.md](OPERATING-LAYER-PLAN.md) (Move C)

## 1) Purpose

Runtime Ports (v0.0.5) declared the YAML contracts a runtime ingests. Some
runtimes consume YAML directly. Others — Open Claw, Glass-style internal
tools, file-based harnesses — expect a markdown bundle on disk:
`soul.md`, `identity.md`, `skills/`, etc. The HarnessBundle is the
**derived markdown view** of the Runtime Ports for those runtimes.

Same content, different format. The YAML manifests remain the source of
truth; the HarnessBundle is regeneratable from them.

This is what Corey's runtime — and any file-based harness — actually reads.

## 2) The bundle layout

```
harness-bundle/
├── CLAUDE.md         # top-level navigation — the runtime's entry point
├── soul.md           # SignalThesis + TasteContract + Frequency
├── identity.md       # ProjectContext: tenant, track, audience, phase
├── purpose.md        # Current decisions + WedgeSpec + stage criteria
├── memory.md         # MemoryMap navigation (vault structure)
├── tools.md          # IntegrationManifest as readable wiring guide
├── boundary.md       # memory boundary rule — runtime reads this at install
└── skills/
    ├── {skill-id-1}.md
    ├── {skill-id-2}.md
    └── ...
```

Filenames are **conventional and load-bearing**. Runtimes locate files by
name. Tenants do not rename; deviations break runtime ingest.

## 3) Bundle file specifications

### CLAUDE.md (root)
Navigation contract. Lists all bundle files with one-line purpose for each.
Frontmatter declares bundle version + source manifest hash for traceability.

### soul.md
The tenant's reason for existing. Sources:
- `SignalThesis` (Phase 1) — narrative + means/does-not-mean
- `TasteContract` (Phase 3) — acceptance/rejection criteria
- Frequency decisions (Phase 4) — governing truth

Tone: voice of the tenant world, not protocol prose.

### identity.md
Who this tenant is. Sources:
- `ProjectContext` — name, track, audience, evidence level
- Current stage (MVP / Beta / Scale)

Format: factual, scannable, no narrative.

### purpose.md
Locked strategic direction. Sources:
- Current decisions (Phase 4 — locked dilemmas)
- `WedgeSpec` — audience + offer + channel + economic logic
- Stage gate criteria from PROTOCOL.md §8

Format: numbered list of premises the system depends on, each one
load-bearing.

### memory.md
Navigation doc for the tenant vault. Sources:
- `MemoryMap.structure[]` rendered as tree
- `MemoryMap.indexing[]` notes
- `MemoryMap.conventions` (filename, frontmatter, link style)

Excludes the boundary block (that's its own file).

### tools.md
Wiring guide for runtime tool setup. Sources:
- `IntegrationManifest.integrations[]` rendered per-integration
- Auth setup instructions (where to find secrets, store/ref pointers — NOT
  the secrets themselves)
- Rate-limit and failover notes

### boundary.md
The memory boundary rule extracted to its own file because runtimes need to
read it at install time before doing anything else. Sources:
- `MemoryMap.boundary` rendered as a contract statement

Format: declarative prose, no narrative. The runtime treats this as
operative truth.

### skills/{skill-id}.md
One file per skill in `SkillManifest.skills[]`. Each file:
- YAML frontmatter with `id`, `trigger`, `ownership`, key tags
- Body: name + description
- Section: inputs (typed parameters)
- Section: outputs (typed returns)
- Section: dependencies (capabilities, memory, context, integrations)
- Section: when this fires (trigger details, schedule cron, event spec)
- Section: escalation
- Section: source playbook link

## 4) Manifest declaration

A v1.2.0 manifest (introduced in v0.0.6) declares the bundle alongside the
runtime ports:

```yaml
runtime_ports:
  skills:      { manifest: "define/skill-manifest.yaml" }
  memory:      { manifest: "define/memory-map.yaml" }
  context:     { manifest: "define/context-manifest.yaml" }
  connections: { manifest: "define/integration-manifest.yaml" }
  bundle:      { path: "harness-bundle/" }   # NEW in v1.2.0
```

The `bundle.path` field declares where the markdown bundle lives. Existing
`runtime_ports.{skills,memory,context,connections}` remain unchanged.

## 5) Conformance — calibrated by evidence level + track

| Evidence level | Bundle |
|---|---|
| Validated | MUST emit the full bundle |
| Signaled | SHOULD emit at minimum: CLAUDE.md, soul.md, identity.md, purpose.md, skills/ |
| Thesis | MAY emit a minimal bundle (CLAUDE.md + skills/) |

The bundle is a **handoff artifact**, not a methodology artifact —
conformance shifts with handoff-readiness rather than evidence depth alone.

## 6) Generation: who emits the bundle?

`/fw-coherence` emits the HarnessBundle in Phase 8 (Integration) as part of
the HandoffPackage. New step: **Step 6c — Emit Harness Bundle**.

Generation rules:
- Bundle is **derived** from the four port manifests + existing artifacts
  (SignalThesis, TasteContract, DecisionLedger, WedgeSpec, ProjectContext).
- Generation MAY be automated (script reads YAMLs, renders markdown) or
  manual (Coherence skill walks the user through producing each file).
- For v0.0.6: manual generation. Automation deferred to v0.0.7+ once the
  bundle format stabilizes against ≥2 reference runtimes.

## 7) Open dilemmas

### 7.1 Bundle versioning

**Options:** (a) bundle inherits manifest's `protocol_version`,
(b) bundle has its own version field, (c) both.

**Recommendation:** (a) for v0.0.6. The bundle is a derived view of the
manifest; its version IS the manifest version + a generation timestamp.
CLAUDE.md frontmatter records both:

```yaml
---
manifest_version: "1.2.0"
generated_at: "2026-05-12T14:32:00Z"
source_manifest_sha: "abc123..."
---
```

### 7.2 Round-trip (YAML ↔ MD)?

**Options:** (a) one-way export only (YAML → MD), (b) round-trip
(MD edits can be re-imported into YAML).

**Recommendation:** (a) for v0.0.6. The YAML manifests are the source of
truth; the bundle is a read-only derived view. Tenant edits to bundle
files don't propagate back. If tenants need to edit content, they edit
the source artifacts (SignalThesis, etc.) and regenerate. Round-trip
deferred to v0.1.0+ if real-world use shows demand.

### 7.3 Skills as one file or one file per skill?

**Options:** (a) one `skills.md` listing all skills,
(b) one `skills/{id}.md` per skill in a subdirectory.

**Recommendation:** (b) per-skill files. Runtimes can `glob skills/*.md`
to enumerate; per-skill files are easier to read, easier to update
individually, and match Open Claw's existing convention.

### 7.4 Track-specific skeletons

**Options:** (a) Facework ships skeleton bundles per track,
(b) GAMUT publishes them externally, (c) no skeletons — every tenant
generates from scratch.

**Recommendation:** (b) GAMUT publishes per-track skeletons in v0.0.6.
Facework defines the format; GAMUT (or any practice) ships per-track
content. Track-agnostic in the spec; opinionated in the practice.

### 7.5 Top-level CLAUDE.md vs README.md?

**Options:** (a) `CLAUDE.md` (Claude Code convention),
(b) `README.md` (universal convention),
(c) both.

**Recommendation:** (a) `CLAUDE.md`. The bundle is a runtime entry point;
runtimes that respect the Claude Code convention read it automatically.
Other runtimes can be configured to read `CLAUDE.md`. A symlink or
duplicate `README.md` adds noise.

## 8) Scope — what's in v0.0.6

**In scope:**
1. New canonical artifact `HarnessBundle` in `PROTOCOL.md` §2
2. New `PROTOCOL.md` §10 — HarnessBundle specification
3. `runtime_ports.bundle` field in main manifest (v1.2.0)
4. `facework.manifest.schema.json` extended
5. `/fw-coherence` updated with Step 6c — Emit Harness Bundle
6. Worked example `examples/face.works/harness-bundle/` (full bundle)
7. `bin/validate-manifest` light-touch extension — if bundle path declared,
   check directory exists and contains required files
8. `CHANGELOG.md` + `VERSION` bump to 0.0.6

**Not in scope (deferred):**
- Round-trip bundle editing (YAML ↔ MD) → v0.1.0+
- Automated bundle generation from YAMLs → v0.0.7+
- Per-track skeleton bundles → GAMUT v0.0.6 (separate ship)
- Cross-bundle validation (every soul.md has same fingerprint as
  SkillManifest.tenant) → v0.0.7

## 9) Sequencing

1. Draft `PROTOCOL.md` §10
2. Extend manifest schema with `bundle` field (v1.2.0)
3. Update `bin/validate-manifest` for bundle structure check
4. Update `/fw-coherence` with Step 6c
5. Build worked example bundle (8+ files for face.works)
6. Update `CHANGELOG.md`, bump `VERSION` to 0.0.6
7. Commit and ship v0.0.6

## 10) Success criteria for v0.0.6

- A Facework run through Phase 8 produces a `harness-bundle/` directory
  with all required files.
- The bundle is self-contained — a runtime can ingest it without
  rebuilding context from the source artifacts.
- Face.works worked example demonstrates a full bundle that any
  runtime supporting the file convention can ingest.
- `bin/validate-manifest` checks bundle structure (file presence) when
  `runtime_ports.bundle` is declared.
- v1.0.0 and v1.1.0 manifests remain conformant — no breaking changes.

## 11) Risks

- **Format drift across runtimes.** Different harnesses (Open Claw, Glass,
  Co-Work) may expect different file names. Mitigation: validate against
  ≥2 runtimes before locking the convention for v0.1.0.
- **Bundle vs YAML divergence.** Manual edits to bundle files become
  stale relative to YAMLs. Mitigation: regeneration is cheap; document
  "edit YAMLs, not bundles" prominently in CLAUDE.md generation
  template.
- **Skill file proliferation.** A tenant with 30+ skills produces 30+
  skill files. Mitigation: that's fine. Runtimes handle it. The
  alternative (one giant skills.md) is worse for editing/diffing.

## 12) Next step

1. Draft `PROTOCOL.md` §10 (HarnessBundle specification)
2. Extend manifest schema with `bundle` field (v1.2.0)
3. Build worked example for face.works
4. Update `/fw-coherence` + CHANGELOG + VERSION
5. Commit v0.0.6
