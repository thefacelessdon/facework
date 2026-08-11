# Facework Visual Specification

The Facework Visual Specification (FVS) defines how Facework makes knowledge
visible. It is a contract for coherent visual behavior, not a library of fixed
styles.

> Nothing is designed until it can be derived.

## Status

This directory is the canonical source for Facework's visual identity. Earlier
materials in `original site exploration reference/` and implementation-specific
files under `examples/face.works/` are retained as evidence and reference
implementations. Where those materials conflict with this directory, FVS governs.

**Governance.** Under the five-layer Standards Architecture (CONSTITUTION.md
Article III: Theory → Discipline → Practice → Implementation → Runtime), the
visual system is an **Implementation-layer** artifact. Authority flows downward
only: where FVS content conflicts with the canon above it (the Constitution,
the theory layer, the Protocol), **canon governs**. Recorded supersessions are
annotated in place (see FVS-900 and
[`methodology/decisions/DECISION-002-standards-first-experience-language.md`](../methodology/decisions/DECISION-002-standards-first-experience-language.md)).

The foundational specification is at **version 0.1**. Constitutional and
normative documents govern exploration. The Facework identity program is
complete at **version 1.0**, establishing the canonical mark, logotype, spatial
protocol, symbol and diagram grammar, and motion signature. The FVS-900
Application Translation program is complete at **version 1.0**, establishing
the Open Ledger foundation and reference implementations across six media.

## Architecture

| ID | Document | Authority | Purpose |
|---|---|---|---|
| [FVS-000](FVS-000-framework.md) | Visual System Framework | Canonical | Architecture, lifecycle, authority, and evaluation |
| [FVS-100](FVS-100-constitution.md) | Visual Constitution | Constitutional | Principles every expression must preserve |
| [FVS-110](FVS-110-lexicon.md) | Visual Lexicon | Normative | Canonical vocabulary and distinctions |
| [FVS-200](FVS-200-primitives.md) | Visual Primitives | Normative | Seven irreducible visual behaviors |
| [FVS-300](FVS-300-geometry.md) | Geometry | Normative | Spatial, proportional, grid, and scale rules |
| [FVS-400](FVS-400-composition.md) | Composition | Normative | Hierarchy, density, sequence, and assembly |
| [FVS-500](FVS-500-typography.md) | Typography | Normative | Structural and reading typography |
| [FVS-600](FVS-600-color.md) | Color | Normative | Neutral fields and semantic state color |
| [FVS-700](FVS-700-interaction.md) | Interaction | Normative | Attention, navigation, state, and accessibility |
| [FVS-800](FVS-800-motion.md) | Motion | Normative | Change, continuity, tempo, and reduced motion |
| [FVS-900](FVS-900-applications.md) | Applications | Normative | Translation across artifact classes |
| [FVR-000](references/FVR-000-atlas.md) | Atlas of Coherence | Evidentiary | Research method and reference-study register |

## Identity reference implementations

- [FVI-001 — Coherence Mark Derivation](identity/FVI-001-coherence-mark-derivation.md)
- [Facework Coherence Mark SVG](identity/coherence-mark/coherence-mark.svg)
- [Facework Coherence Mark micro SVG](identity/coherence-mark/coherence-mark-micro.svg)
- [FVI-100 — Facework Logotype](identity/FVI-100-facework-logotype.md)
- [Facework logotype SVG](identity/logotype/facework-logotype.svg)
- [Primary identity lockup](identity/logotype/facework-lockup-horizontal.svg)
- [FVI-200 — Identity Lockups and Spatial Protocol](identity/FVI-200-lockups-spatial-protocol.md)
- [Responsive signature system](identity/lockups/responsive-system.svg)
- [FVI-300 — Symbol and Diagram Grammar](identity/FVI-300-symbol-diagram-grammar.md)
- [Facework symbol library](identity/diagram/symbol-library.svg)
- [FVI-400 — Motion Signature](identity/FVI-400-motion-signature.md)
- [Exchange Resolve reference](identity/motion/reference.html)

## Application reference implementations

- [FVA-000 — Application Foundation](applications/FVA-000-application-foundation.md)
- [FVA-100 — Website](applications/FVA-100-website.md)
- [FVA-200 — Publications](applications/FVA-200-publications.md)
- [FVA-300 — Presentations](applications/FVA-300-presentations.md)
- [FVA-400 — Social](applications/FVA-400-social.md)
- [FVA-500 — Environments](applications/FVA-500-environments.md)
- [FVA-600 — Product Surfaces](applications/FVA-600-product.md)
- [FVA-610 — Facework Field](applications/FVA-610-facework-field.md)

## Reference studies

- [FVR-101 — Bilateral Systems](references/FVR-101-bilateral-systems.md)
- [FVR-102 — Information Architecture](references/FVR-102-information-architecture.md)
- [FVR-103 — Knowledge Artifacts](references/FVR-103-knowledge-artifacts.md)
- [FVR-104 — Scientific Visualization](references/FVR-104-scientific-visualization.md)
- [FVR-105 — Living Systems](references/FVR-105-living-systems.md)

Reference studies provide evidence. They do not grant permission to imitate an
artifact's appearance. Each study must extract a transferable relationship and
show how that relationship affects a Facework decision.

## Production integration

- [FVP-000 — Production Integration and Validation](production/FVP-000-production-integration.md)
- [FVP-100 — Design Source Authority](production/FVP-100-source-authority.md)
- [FVP-200 — face.works Runtime Integration](production/FVP-200-runtime-integration.md)
- [FVP-300 — Production Validation](production/FVP-300-production-validation.md)

## Authority model

1. **Constitutional** — enduring principles; change only by formal amendment.
2. **Normative** — current rules required for conformance.
3. **Canonical** — approved definitions, structures, and examples.
4. **Evidentiary** — research supporting or challenging a rule.
5. **Experimental** — a proposition being tested; never silently treated as law.

## Conformance

An artifact is conforming when it:

1. identifies its purpose and intended audience;
2. traces consequential decisions to FVS principles and primitives;
3. meets the relevant medium and accessibility requirements;
4. records any intentional exception;
5. passes the evaluation in FVS-000;
6. preserves a lineage record using the
   [artifact template](templates/artifact-record.md).

Conformance does not mean every artifact looks the same. It means each artifact
can explain how it belongs.

## Implementation relationship

The protocol declares contracts; runtimes implement them. FVS follows the same
pattern:

- FVS declares visual relationships and constraints.
- Design tokens encode an implementation.
- Components apply those tokens to a medium.
- Reference implementations demonstrate one valid expression.
- The Atlas supplies evidence for future changes.

The current `examples/face.works/design-infrastructure/` remains a valid
implementation candidate, but it is not automatically constitutional. Its
tokens should be reconciled against FVS before being promoted.
