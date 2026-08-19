# §1–§8 Enforcement Audit — the independent application

**Date:** 2026-08-19 · **Release:** 0.0.55 · **Scope:** `PROTOCOL.md` §1–§8
(design principles, canonical objects, prerequisites, lifecycle phases, manifest
interoperability, normative terms, minimum conformance, stage gate profiles).

**Purpose:** this is not primarily a bug hunt. It is the **falsification test** for
the standing rule earned at 0.0.49 and extended at 0.0.52 — run against the one
part of the spec neither audit has touched.

> **Limitation, stated first.** This audit was run by the agent that authored both
> rules. A clean result is therefore partly self-confirmation, and it does not
> fully meet the "independent application" bar it was commissioned to satisfy.
> Whether it clears the promotion bar is Harper's ruling, not this document's
> claim. The findings below are checkable by anyone; the framing is not neutral.

## The rules under test

1. **A normative rule lands enforced, or is declared out-of-band** (authoring-layer
   / runtime-layer). There is no third acceptable state, because silence reads as
   "checked." (0.0.49)
2. **A gate must prove it ran**, not merely exit zero. (0.0.52)

The prediction that would falsify rule 1: a normative statement in §1–§8 that fits
**none** of the three classes and needs a fourth.

## The normative surface

| Section | Statements | Register |
|---|---:|---|
| §1 Design Principles | 5 | prose values |
| §2 Canonical Objects | 23 (one blanket MUST) | list |
| §4 Lifecycle Phases | 26 gate criteria across 8 phases | bullets |
| §5 Manifest Interoperability | 1 SHOULD + 7 recommended keys | prose |
| §7 Minimum Conformance | 5 criteria (+2 for v1.1.0) | bullets |
| §8 Stage Gate Profiles | 33 criteria across 3 stages | bullets |

**§1–§8 uses 3 RFC-2119 keywords in 297 lines. §9 alone uses 31.** This section
states obligations as gate bullets, not `MUST` sentences — a materially different
register from the one both rules were derived in. That makes it a better test than
a third pass over §9-style prose would have been.

## Result on rule 1: survives, with one scope refinement

**No fourth class was needed.** Every normative statement in §1–§8 classified as
enforced or authoring-layer. (No runtime-layer statements appear here; that class
was earned in §12 and is simply unused in this range.)

But the audit did surface a boundary the rule never stated:

**§1 and §6 are not normative at all.** "Signal before scale" and "Taste is
governance, not decoration" are **constitutive values**, not obligations — they do
not bind an artifact, and no one discharges them. §6 (Normative Terms) is the
RFC-2119 definitions block: it defines the vocabulary rather than using it.

Classifying these as "authoring-layer" would be a category error — that class means
*a human or skill discharges this obligation*, and there is no obligation here to
discharge. The correct treatment is that **the classification applies to normative
statements, and non-normative sections are out of scope and should say so.**

This is a refinement, not a refutation. But it matters, because the rule's whole
force is that silence reads as "checked" — and a reader can just as easily read a
Design Principle as a rule that nobody enforces.

**Proposed amended wording:**

> Every **normative** statement lands explicitly as enforced or declared
> out-of-band. Sections that are constitutive (values) or definitional
> (vocabulary) are marked non-normative at the section head, so absence of
> enforcement is legible as intent rather than omission.

## Result on rule 2: not exercised here

§1–§8 declares no gates that *execute* — its "gates" are phase criteria discharged
by judgment, not processes that run and exit. Rule 2 is about enforcers, and the
enforcers live in `bin/` and `.github/`. This audit neither confirms nor challenges
it. Its evidence base remains 0.0.45, 0.0.48, 0.0.51 and the 0.0.52 CI discovery.

## Findings — declared but unenforced

### 1. The reference manifest is not a conformant example (highest severity)

§7 requires *"all required primitive artifacts are present."* The validator does
`require_string!` on ten artifact keys — **it checks that the key exists, not that
the file does.** The identical defect to §9.3.2, fixed at 0.0.49, one section over.

And the consequence is live:

```
facework.manifest.yaml artifacts: 10 declared, 10 MISSING
  artifacts/signal-thesis.md · audience-field-map.md · taste-contract.md
  decision-ledger.md · wedge-spec.md · system-architecture.md
  workflow-playbooks.md · launch-plan.md · sovereignty-map.md
  diagnostic-report.md
```

**Every artifact path in the repo's own reference manifest points at a file that
does not exist**, and `make protocol-check` has passed on it for 51 releases.

Not fixed here, deliberately. The same manifest repointed `runtime_ports` at the
face.works worked example while leaving `artifacts:` on placeholder paths. Making
them resolve requires deciding which real file plays each canonical role — and
`examples/face.works/define/` organizes by kind (`decisions/`, `architecture/`,
`playbooks/`, `proof/`), not by canonical name. That mapping is a judgment, not a
repoint, and guessing it is the failure mode `validate-tokens` exists to prevent.
**Needs a ruling** (see below).

### 2. Three canonical objects are required nowhere

§2: *"A conforming implementation MUST produce these objects"* — 23 of them. Three
are required by no schema key and no validator check:

| Object | Produced in | Status |
|---|---|---|
| `DesignLanguageSpec` (DESIGN.md) | Phase 3 | no manifest slot |
| `ConsonanceCheck` | Phase 7 | no manifest slot |
| `HandoffPackage` | Phase 8 | no manifest slot |

A fourth, `ProjectContext`, is enforced under a different name — it is the
`project` block. That is enforcement-by-proxy and should be stated, not inferred.

### 3. "with evidence" is unenforced

§7: *"all phase gates are explicitly marked pass/fail **with evidence**."* The
schema accepts `pass` or `fail` and nothing else. There is no evidence field, so
half that sentence is unenforceable as written.

### 4. §8's 33 stage criteria are authoring-layer, correctly

`project.stage` is enum-validated; none of the MVP/BETA/SCALE criteria are checked
and none can be ("A real user can complete the core journey end-to-end"). This is
the class working as designed — but §8 does not say so, so a reader cannot tell
enforced-and-passing from never-checked.

## Requires a ruling

1. **The `artifacts:` block.** Either map the ten canonical roles onto real
   `examples/face.works/define/` files and enforce existence, or mark the block an
   explicit schema illustration and state that this manifest is not a conformant
   tenant. Both are defensible; leaving it is not.
2. **§2's three orphaned MUSTs.** Add optional manifest slots and warn, promote to
   required (breaking), or amend §2 to scope the MUST to objects the manifest
   models.
3. **Rule 1's scope refinement** — adopt the amended wording above, or reject it
   and classify §1 as authoring-layer.

## What this audit did not do

No code changed. Every finding here needs a decision before it can be enforced,
and shipping a check that fails the repo's own reference manifest would put `main`
red to make a point about gates that do not work.
