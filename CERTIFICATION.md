# Powered by Facework Certification

Status: Draft  
Version: 1.1.0 (updated for manifest schema v1.4.0 conformers)

This document defines eligibility for claiming:

`Powered by Facework`

## 1) Certification Goal

Certification signals that a project used Facework Protocol to convert cultural signal into a coherent, ownable, and executable system.

It is not a guarantee of business success. It is a guarantee of protocol discipline and artifact integrity.

## 2) Eligibility Requirements

A project is eligible only if all conditions are met:

1. Protocol declaration:
   - `protocol_version` declared in manifest.
2. Required artifacts:
   - all canonical primitive outputs present.
3. Gate reporting:
   - all phase gates marked pass/fail with rationale.
4. Compliance:
   - scored using Facework Compliance v1.
5. Minimum threshold:
   - total score >= 60 (`L2 Coherent`).
6. Sovereignty coverage:
   - critical dependencies classified and mitigated.

## 3) Required Submission Package

Baseline (all manifest versions):

- `facework.manifest.yaml`
- compliance report
- artifact index with file paths
- unresolved risk list
- decision log

Additional per declared `protocol_version` (cumulative — v1.4.0 manifests include everything below):

- **v1.1.0+** — four Runtime Port manifests referenced by the main manifest: `SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest`. Conformance calibrated by `project.evidence_level` (Validated MUST emit all four; Signaled SHOULD; Thesis MAY emit minimal `SkillManifest` only).
- **v1.2.0+** — `HarnessBundle` directory at the path declared in `runtime_ports.bundle.path`, with `CLAUDE.md`, `soul.md`, `identity.md`, `purpose.md`, `memory.md`, `tools.md`, `boundary.md`, and one `skills/{id}.md` per declared skill.
- **v1.3.0+** — `DesignInfrastructure` (track-relevant per PROTOCOL.md §11.7): `tokens.json`, `components.yaml`, `examples/` directory, and the `design-eye-evaluator` Skill registered in `SkillManifest`.
- **v1.4.0+** — evidence that the runtime emits the minimum audit-event surface declared in PROTOCOL.md §12 (transport runtime-side; events surface fixed). Skill `sponsors[]` populated on Validated-evidence projects.

`bin/validate-manifest` performs the cross-manifest reference checks (PROTOCOL.md §9.7) and reports per-version conformance.

## 4) Certification Levels

- `Certified L2` (60-74): Coherent foundation
- `Certified L3` (75-89): Launch-ready coherence
- `Certified L4` (90-100): Sovereign execution maturity

## 5) Disallowed Claims

Projects MUST NOT claim "Powered by Facework" if:

- manifest is absent or invalid
- required artifacts are missing
- score is below `L2 Coherent`
- sovereignty risks are omitted

## 6) Revocation Conditions

Certification may be revoked if:

- published artifacts materially diverge from declared manifest,
- major contradictions are discovered and unaddressed,
- score was reported without evidence.

## 7) Badge and Attribution

Recommended attribution:

`Built with Facework Protocol v1`

Optional badge metadata:
- protocol version (manifest schema, e.g. `1.4.0`)
- certification level (`L2 Coherent` / `L3 Launch-Ready` / `L4 Sovereign`)
- evidence level (`Validated` / `Signaled` / `Thesis`)
- track (`creator` / `cultural_brand` / `athlete` / `agency_studio` / `platform_product`)
- report date
- verifier identity (self or third-party)
- runtime portability claim — whether the project emits all four Runtime Ports + HarnessBundle (v1.2.0+) and which runtimes have ingested it

