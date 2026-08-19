# §10–§12 Enforcement Audit

**Date:** 2026-08-19 · **Release:** 0.0.50 · **Scope:** `PROTOCOL.md` §10
(HarnessBundle), §11 (DesignInfrastructure), §12 (Observability Interface),
audited against `bin/validate-manifest`.

Second sweep. Method, vocabulary, and the standing rule come from
[`section9-enforcement-audit-2026-08-19.md`](section9-enforcement-audit-2026-08-19.md):
every normative rule lands explicitly as **enforced** or **declared out-of-band**
(authoring-layer / runtime-layer). There is no third acceptable state, because
silence reads as "checked."

The §9 audit predicted this sweep would yield: *"§10.7 and §11.9 declare Phase-8
and Phase-3 gate criteria in the same prose style that produced these findings."*
It did — six findings, including the only **MUST** in §11.

## Results

### Enforced before this sweep

| Rule | |
|---|---|
| §10.2 `bundle.path` declared → directory exists | ✓ |
| §10.4 required files present per `evidence_level` | ✓ |
| §10.7 every `SkillManifest` skill has `skills/{id}.md` | ✓ |
| §11.2 `evaluator_skill_id` resolves to a declared Skill | ✓ |
| §11.9 tokens parse as JSON; components parse as YAML | ✓ |
| §11.9 both example files exist | ✓ |

### Declared but unenforced — fixed in 0.0.50

| Rule | Spec says | Was | Now |
|---|---|---|---|
| **§11.7** | Cultural Brand **MUST** emit DesignInfrastructure | **nothing** — `track` was read only to print a label. A `cultural_brand` manifest with no block at all passed silently | MUST enforced for `cultural_brand`; SHOULD warns for creator / athlete / platform_product |
| **§10.7** | "`boundary.md` is present and **non-empty** when the bundle exists" | presence only, and only at Validated — §10.4's Signaled/Thesis minimums omit the file, so a Thesis bundle could ship with no boundary at all | required and non-empty at **every** evidence level |
| **§11.9** | evaluator has `domain: quality` **and** `ownership: agent` | ID resolution only — any skill could be named as the evaluator | both fields checked |
| **§11.9** | example files "exist and are **non-empty**" | existence only — an empty file passed | non-empty checked |
| **§11.4** | each component declares id, name, purpose, variants, states, tokens_used, `contract.must` / `must_not` | `components[]` non-empty array only — **the entire component shape was unvalidated** | full shape + unique ids checked |

Each verified with a negative fixture; the reference manifest passes unchanged.

**§11.7 is the most serious.** §11 contains exactly one MUST — *Cultural Brand
MUST emit DesignInfrastructure, because brand IS the product* — and it was the
single least-enforced rule in the section. The track field was parsed, validated
against the enum, and used only to choose between the strings "track-relevant"
and "track-optional" in a summary line. That label also conflated SHOULD and MUST
into one word; it now names the obligation (`track-REQUIRED (§11.7 MUST)`).

**§11.4 is the widest.** The component contract rules are what the design-eye
evaluator consumes when grading output (§11.4: *"The contract rules are
machine-readable"*). A component with no `contract.must_not` grades nothing —
and nothing checked that one existed.

### Declared out-of-band — reclassified, not "fixed"

| Rule | Why it cannot be gated | Treatment |
|---|---|---|
| **§12 entire section** | Every obligation is on a *running* system — events emitted during operation. No manifest validator can observe them. | §12 now carries an explicit **runtime-layer** enforcement class. §12.4's gate is a `/fw-coherence` responsibility discharged against a live runtime, not a manifest property. |
| §10.5 / §10.6 generation and one-way derivation | Process obligations on the emitting skill, not manifest state | Already prose-clear; no change needed. |
| §10.8 / §11.10 deferred items | Explicitly deferred | No change needed. |

§12 was the cleanest case in either sweep: nothing was wrong with the section
except that it never said which layer enforces it. Under the standing rule, that
silence was the defect.

## Spec inconsistency found and reconciled

§10.4's conformance tiers list Signaled as "minimum: `CLAUDE.md`, `soul.md`,
`identity.md`, `purpose.md`, `skills/`" and Thesis as "`CLAUDE.md` + `skills/`
only" — neither includes `boundary.md`. §10.7 requires it *whenever a bundle
exists*. Read together, §10.4 grants permission that §10.7 withholds, and the
validator followed §10.4.

Reconciled in favour of §10.7, and stated in §10.4 rather than left to inference:
the tiers describe **content depth**, not permission to drop the memory boundary.
The boundary is the "one system of record" contract between tenant memory and
runtime memory (§9.4) — the collision `MemoryMap.boundary` was introduced at
0.0.5 to resolve. A bundle without it hands a runtime no ownership rule at all,
which is worse at Thesis level than at Validated, not better.

## Both sweeps, combined

| | §9 (0.0.49) | §10–§12 (0.0.50) |
|---|---|---|
| Declared-but-unenforced, fixed | 5 | 5 |
| Reclassified out-of-band | 2 | 1 section |
| Spec-vs-spec inconsistency | 0 | 1 |
| MUSTs found unenforced | 0 | **1** |

Eleven rules across §9–§12 claimed enforcement they did not have. Every one
predates `AGENTS.md` rule 2 (added 0.0.45); every release since has satisfied it
by construction. **The §9–§12 backlog is now closed.**

## What is still not audited

§1–§8 — the lifecycle phases and their gates. These are largely human/agent
judgments discharged by the `/fw-*` skills rather than manifest properties, so
the expected yield is reclassification (naming the enforcement layer) rather than
new checks. Worth one pass to make the layer explicit everywhere, low urgency.

`bin/validate-tokens` remains red on `main` (FVI-400 motion table) — unrelated to
these sweeps and still open.
