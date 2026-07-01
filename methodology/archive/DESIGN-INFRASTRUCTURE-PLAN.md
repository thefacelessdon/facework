# Design Infrastructure Plan — v0.0.7

Status: Draft
Target: v0.0.7
Plan author: working session, 2026-05-12
Folds into: `PROTOCOL.md` §11 (new section) once executed
Parent plan: [OPERATING-LAYER-PLAN.md](OPERATING-LAYER-PLAN.md) (Move B)

## 1) Purpose

Phase 3 (Taste) today produces a `TasteContract` and `DesignLanguageSpec`
(DESIGN.md) — both readable, governance-grade documents. They define what
on-brand means. They do not, in their current form, **gate output**.

Diego (Ramp / Glass) framed the missing piece sharply: **design as
infrastructure, not governance.** Ramp's design system makes 1,500
internal apps ship in 6 weeks without each one needing a designer —
because the design system is callable, not just descriptive. Non-designers
build with it; the system itself enforces "not brand-destructive."

Move B makes Phase 3 emit an **active** design infrastructure:

- **Tokens** — design tokens as structured data (not prose) that
  generators consume directly.
- **Component primitives** — minimum viable component inventory that
  passes the `TasteContract` by construction.
- **Design-eye evaluator skill** — registered in `SkillManifest`,
  callable by any output-producing skill as a quality gate.
- **Examples + anti-examples** — in LLM-readable format so the evaluator
  can reference concrete cases.

This is the design axis Move A and Move C set up but didn't fill.

## 2) The four components

### 2.1 `tokens.json` (or `.yaml`)

Structured design tokens. Standardized fields:

```json
{
  "color": {
    "neutral": { "0": "#FFFFFF", "100": "#F8F7F4", "900": "#0A0A0A" },
    "brand":   { "primary": "#1A1A1A", "accent": "#C8A95E" },
    "semantic": { "success": "#2E7D32", "warning": "#ED6C02", "error": "#C62828" }
  },
  "type": {
    "family":  { "display": "Inter Tight", "body": "Inter", "mono": "JetBrains Mono" },
    "scale":   { "xs": "12px", "sm": "14px", "base": "16px", "lg": "20px", "xl": "24px", "2xl": "32px", "3xl": "48px" },
    "leading": { "tight": 1.1, "normal": 1.5, "relaxed": 1.7 }
  },
  "space":   { "0": "0", "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px", "8": "32px", "12": "48px", "16": "64px" },
  "radius":  { "none": "0", "sm": "2px", "md": "6px", "lg": "12px", "full": "9999px" },
  "motion":  { "fast": "120ms", "base": "240ms", "slow": "400ms", "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)" }
}
```

The token vocabulary (`color`, `type`, `space`, `radius`, `motion`) is
canonical. Within each, tenants choose their own values.

### 2.2 `components.yaml`

Minimum viable component primitives the tenant world ships with. Each
component declares:

```yaml
- id: button
  name: "Button"
  purpose: "Primary call to action"
  variants: [primary, secondary, ghost]
  states: [default, hover, active, disabled]
  tokens_used: [color.brand.primary, type.body, space.3, radius.md, motion.base]
  contract:
    must:
      - "minimum 44px hit target"
      - "uses brand.primary or brand.accent (never neutral.0 fill)"
    must_not:
      - "no gradient backgrounds"
      - "no shadow variants for primary buttons"
```

Components reference tokens by path. The contract section declares
must/must-not rules that pass the `TasteContract` by construction.

### 2.3 `design-eye-spec.md`

The playbook the `design-eye-evaluator` Skill executes. Defines:
- Input shape (artifact + type + context)
- Evaluation rubric (criteria from `TasteContract`)
- Output shape (pass/fail + scored dimensions + grounded feedback)
- Examples of how to evaluate each artifact_type

### 2.4 `examples/` (on-brand and anti-examples)

LLM-readable example library:
- `on-brand-examples.md` — concrete cases that pass the TasteContract,
  with annotations of why they pass
- `off-brand-anti-examples.md` — cases that fail, with annotations of
  which contract clauses they violate

These are the reference data the evaluator pulls when grading.

## 3) Manifest declaration

A v1.3.0 manifest extends with optional design_infrastructure:

```yaml
design_infrastructure:
  tokens:     "define/design-infrastructure/tokens.json"
  components: "define/design-infrastructure/components.yaml"
  examples:   "define/design-infrastructure/examples/"
  evaluator_skill_id: "design-eye-evaluator"   # references SkillManifest
```

The `evaluator_skill_id` field links to the design-eye Skill in
`SkillManifest`, so runtimes know which Skill to call as the gate.

## 4) Conformance — track-relevant

Conformance is **track-aware** in Move B (unlike Move A and Move C, which
were evidence-level calibrated):

| Track | DesignInfrastructure conformance |
|---|---|
| Creator | SHOULD emit (brand fidelity is load-bearing) |
| Cultural Brand | MUST emit (brand IS the product) |
| Athlete / Public Figure | SHOULD emit |
| Agency / Studio | MAY emit (delivery-shaped, brand secondary) |
| Platform / Product | SHOULD emit (UI consistency is operational) |

The rationale: tracks where design fidelity directly determines outcomes
require the active infrastructure; tracks where design is secondary may
ship a TasteContract alone.

## 5) The Design Eye Evaluator Skill

Registered in `SkillManifest` as a callable workflow:

```yaml
- id: design-eye-evaluator
  name: "Design Eye Evaluator"
  description: >
    Gate output against the TasteContract. Returns pass/fail + dimension
    scores + grounded feedback referencing specific contract clauses and
    on/off-brand examples.
  domain: quality
  trigger: on_demand
  ownership: agent
  playbook: "define/design-infrastructure/design-eye-spec.md"
  inputs:
    - { name: artifact_path, type: file_path, required: true }
    - { name: artifact_type, type: string, required: true }
    - { name: severity_threshold, type: string, required: false }
  outputs:
    - name: evaluation_report
      type: file_path
      write_to: "outputs/design-evals/{artifact_type}/{yyyy-mm-dd}-eval.md"
  depends_on_capabilities: [taste_evaluation]
  reads_memory: ["wiki/protocol-reference/**"]
  writes_memory: ["outputs/design-evals/"]
  context_load: [soul, taste, design-infrastructure]
  tags: [quality, design, gate]
```

Other output-producing skills (e.g. content generators, page builders)
can register the evaluator as a post-step. The runtime calls
`design-eye-evaluator` with the produced artifact, blocks ship if it
fails the threshold, returns grounded feedback otherwise.

## 6) Generation: who emits the infrastructure?

`/fw-taste` (Phase 3) emits the four components alongside the existing
`TasteContract` and `DesignLanguageSpec`. New step: **Step 5 — Emit
Design Infrastructure**.

For v0.0.7, emission is **manual** — the skill walks the user through
defining tokens, primitives, evaluator rubric, and example library. The
evaluator skill is registered in SkillManifest by `/fw-stability` at Phase 5
(once the design-infrastructure files exist, the SkillManifest emission
includes the design-eye-evaluator entry).

## 7) Open dilemmas

### 7.1 Token format: JSON, YAML, or DTCG (Design Token Community Group)?

**Options:**
- (a) JSON — universal, works with most generators
- (b) YAML — matches the other Facework artifacts
- (c) DTCG — emerging standard, broader tool ecosystem

**Recommendation:** (a) JSON for v0.0.7. JSON has the widest support
(Style Dictionary, every generator, every CSS-in-JS lib). YAML is more
human-readable but most tools expect JSON tokens. DTCG is promising but
not yet stable enough to lock to.

A future version can add a DTCG export from the JSON source.

### 7.2 Should components be markdown or YAML?

**Options:** (a) YAML (declarative, structured), (b) markdown with frontmatter

**Recommendation:** (a) YAML for components.yaml. The contract rules
(must/must_not) need to be machine-readable for the evaluator. YAML
serves both human and machine.

### 7.3 Is the evaluator one Skill or one Skill per artifact_type?

**Options:**
- (a) One generic `design-eye-evaluator` that branches on artifact_type
- (b) Specialized skills: `design-eye-html`, `design-eye-image`, etc.

**Recommendation:** (a) one generic for v0.0.7. The branching is
expressible in the playbook. Specialization can come later if the
evaluator's prompts get unwieldy.

### 7.4 What does "examples library" actually look like?

**Options:**
- (a) Markdown files with embedded image references and annotations
- (b) Actual image files alongside markdown that describes them
- (c) Both, but with strict naming convention

**Recommendation:** (a) markdown-only for v0.0.7. Image files would
require a separate generation pipeline. Markdown descriptions of
examples (with annotated rationale) are LLM-readable and tractable.
Images can come in a future iteration when the evaluator integrates
vision.

### 7.5 Track-aware vs evidence-level conformance

Conformance for Move A and Move C is calibrated by `evidence_level`
(Validated/Signaled/Thesis). Move B's conformance is proposed as
**track-aware** instead. Is that the right axis?

**Recommendation:** track-aware is correct. Design fidelity is a
function of *what kind of project this is*, not *how much demand
evidence exists*. A Cultural Brand at thesis-level still needs design
infrastructure (brand IS the product). An Agency at validated-level
might legitimately defer (delivery >> brand).

## 8) Scope — what's in v0.0.7

**In scope:**
1. New canonical artifact `DesignInfrastructure` in `PROTOCOL.md` §2
2. New `PROTOCOL.md` §11 — DesignInfrastructure specification
3. `design_infrastructure` field in main manifest (v1.3.0)
4. `facework.manifest.schema.json` extended
5. `/fw-taste` updated with Step 5 — Emit Design Infrastructure
6. `/fw-stability` Step 5d.1 updated — design-eye-evaluator registered in
   SkillManifest when DesignInfrastructure is present
7. Worked example `examples/face.works/design-infrastructure/` (tokens,
   components, design-eye spec, examples library)
8. New skill entry in `examples/face.works/runtime-ports/skill-manifest.yaml`
9. `bin/validate-manifest` light extension — if `design_infrastructure`
   declared, check that tokens + components files exist and parse, and
   evaluator_skill_id resolves to SkillManifest
10. `CHANGELOG.md` + `VERSION` bump to 0.0.7

**Not in scope (deferred):**
- DTCG token format export → future
- Image-based examples + vision evaluation → future
- Component code generation from primitives → out of Facework's scope
  (runtime's job)
- Per-track skeleton design infrastructure → GAMUT v0.0.7+
- Round-trip from evaluator feedback into TasteContract updates →
  v0.1.0+

## 9) Sequencing

1. Draft `PROTOCOL.md` §11
2. Extend manifest schema with `design_infrastructure` block
3. Update `/fw-taste` with Step 5
4. Update `/fw-stability` Step 5d.1 to register evaluator
5. Build worked example for face.works (4 files + skill entry)
6. Extend `bin/validate-manifest`
7. Update CHANGELOG, bump VERSION to 0.0.7
8. Commit

## 10) Success criteria for v0.0.7

- A Facework run through Phase 3 emits the four DesignInfrastructure
  components when the track requires it.
- The `design-eye-evaluator` Skill is registered in `SkillManifest`
  and callable by other skills as a quality gate.
- The Face.works worked example demonstrates all four components.
- `bin/validate-manifest` validates the structural shape of
  DesignInfrastructure and resolves the evaluator Skill cross-reference.
- v1.0.0–v1.2.0 manifests remain conformant — additive only.

## 11) What this unlocks

- Output-producing skills (page builders, content generators, etc.)
  gain an automated quality gate that doesn't depend on a designer
  being present.
- The TasteContract becomes load-bearing in real time, not just
  reviewed at handoff.
- Non-designers in the tenant world can ship without producing
  brand-destructive output — Diego's "1,500 apps in 6 weeks" pattern.
- The HarnessBundle (v1.2.0) gains a design eye file that file-based
  runtimes use to gate output before publishing.

## 12) Next step

1. Draft `PROTOCOL.md` §11
2. Build the worked example
3. Update skills + validator
4. Commit v0.0.7
