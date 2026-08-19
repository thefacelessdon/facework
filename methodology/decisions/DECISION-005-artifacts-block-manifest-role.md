---
id: FW-DEC-005
title: The artifacts block is enforced for tenants; the reference manifest declares itself exempt
date: 2026-08-19
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — decision delegated to the agent, 2026-08-19
---

# FW-DEC-005 — The `artifacts:` block

## Question

The §1–§8 audit (0.0.55) found that §7's *"all required primitive artifacts are
present"* was checked as key-presence only, and that **all ten artifact paths in
`facework.manifest.yaml` resolve to files that do not exist** — passing
`make protocol-check` for 51 releases.

Two dispositions were offered: map the ten canonical roles onto real
`examples/face.works/define/` files and enforce existence, or mark the block a
schema illustration and state that this manifest is not a conformant tenant.

## Decision

**Both, split by role. The rule is enforced; the one manifest that cannot satisfy
it declares why, visibly.**

- `project.manifest_role: tenant` (default, and assumed when the key is absent) —
  every path in `artifacts` MUST resolve to a real file. This is now enforced.
- `project.manifest_role: reference` — the manifest illustrates the schema and is
  **not a conformance claim**. Artifact paths are illustrative; the validator
  reports the exemption on every run and the manifest MUST NOT be cited as
  evidence of conformance.

`facework.manifest.yaml` is declared `reference`.

## Why mapping was impossible, not merely hard

Option 1 assumed the worked example contains counterparts for the ten canonical
artifacts. It does not. Six of ten have **no counterpart at all**:

| Canonical artifact | In `examples/face.works/define/` |
|---|---|
| `SignalThesis` | none |
| `AudienceFieldMap` | none |
| `TasteContract` | none |
| `LaunchPlan` | none |
| `SovereigntyMap` | none |
| `DiagnosticReport` | none |
| `DecisionLedger` | 16 files in `decisions/` — a directory, not a ledger |
| `WedgeSpec` | only `decisions/002-creator-first-wedge.md`, a decision record |
| `SystemArchitecture` | `architecture/` specs |
| `WorkflowPlaybooks` | `playbooks/` |

Executing option 1 would mean **authoring six protocol artifacts for a tenant world
that never produced them** — fabricating outputs to satisfy a checker. That is the
failure mode `bin/validate-tokens` exists to prevent, one layer up. The mapping was
not a judgment call that needed a ruling; it was impossible.

## Why a bare exemption was not enough either

Marking the block "illustrative" and stopping would leave §7 unenforceable for
*everyone*, to accommodate one manifest. The rule is sound and tenants should be
held to it; only the toolkit repo is the exception, and it is the exception for a
reason it can state.

The toolkit already knew this. `facework.manifest.yaml` carries the sentence *"The
Facework toolkit repo itself is NOT a Facework tenant project (it's the protocol
toolkit)"* — but only as a comment attached to `runtime_ports`, and applied only
there. Ports, bundle and design-infrastructure were repointed at real face.works
files; `artifacts:` was left on placeholders. **One file, two conventions, no
statement of which applied where.** That inconsistency, not the missing files, is
the defect this ruling removes.

## Why this shape

The exemption is **declared, visible, and narrow** — the same treatment §9.11 gives
an `unenforced: true` governance gate, applied to conformance itself. A silent pass
is what the standing rule (0.0.49) forbids; an announced exemption is what it
requires. The validator prints on every run:

```
[ok] manifest_role: reference — schema illustration, NOT a conformance claim
     §7 artifact-path resolution is exempt here and MUST NOT be cited as conformance
```

Defaulting to `tenant` when the key is absent matters: every existing manifest in
the wild is treated as making a conformance claim, so the strict reading is the
one you get by saying nothing. Exemption requires an explicit act.

## Verification

| Case | Result |
|---|---|
| `tenant` + unresolved paths | rejected — `artifact paths do not resolve (§7): signal_thesis -> …` |
| `tenant` + all paths real | accepted — `manifest_role: tenant (10 artifact paths resolve, §7)` |
| role key omitted | rejected — defaults to `tenant`, strict by default |
| `manifest_role: illustrative` | rejected — `must be 'tenant' or 'reference'` |

## Consequence

`facework.manifest.yaml` is no longer evidence of conformance and should not be
cited as such. It remains the end-to-end validation target for everything that
*can* point at real artifacts — runtime ports, harness bundle, design
infrastructure, and the runtime-conformance profile — all of which stay fully
enforced.

## Open, not decided here

§2 declares 23 canonical objects MUST, and three (`DesignLanguageSpec`,
`ConsonanceCheck`, `HandoffPackage`) have no manifest slot at all. That is a
separate ruling: add optional slots, promote to required (breaking), or scope §2's
MUST to what the manifest models.
