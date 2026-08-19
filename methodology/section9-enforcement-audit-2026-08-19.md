# §9 Enforcement Audit — every declared rule, checked against the validator

**Date:** 2026-08-19 · **Release:** 0.0.49 · **Scope:** `PROTOCOL.md` §9 (Runtime
Ports), audited against `bin/validate-manifest`.

## Why this sweep happened

Three consecutive releases each found the same shape of defect by accident:

| Release | Found | Shape |
|---|---|---|
| 0.0.45 | Schema 1.5.0 declared `RuntimeConformanceProfile`; the schema file defined no such object and `runtimePorts` could not even express the block | Spec declares a structure; enforcement cannot represent it |
| 0.0.48 | §9.12's Phase-7 gate required "a recorded owner ruling"; the check was non-empty-string, satisfied by the literal text `"PENDING — no ruling recorded yet"` | Spec declares a gate; enforcement cannot fail it |
| 0.0.49 (#51 review) | FS-400.8 frames `harness_options` as a sovereignty hedge; a profile whose every loop is `rent` validated identically to one with real alternatives | Spec implies a property; nothing reads it |

Finding the same class three times by review is evidence of a systemic gap, not
three coincidences. This sweep enumerates **every** normative rule in §9 and
classifies it, so the remainder are found deliberately rather than one at a time.

## Method

Each `**Validation:**` block, cross-manifest rule, and phase-gate line in §9 was
extracted and traced to the code in `bin/validate-manifest` that enforces it.
Every rule lands in exactly one of three states:

- **Enforced** — the validator fails on violation. Verified with a negative fixture.
- **Authoring-layer** — the obligation is real but the validator provably cannot
  check it. Must be *declared as such*, not silently implied to be machine-checked.
- **Declared but unenforced** — the defect. The spec says it is checked; it is not.

The third state is the only one that is a bug. The second is legitimate and
already has precedent in the protocol: §9.12 governance entries marked
`unenforced: true` are declared, delegated, and visible (0.0.17, §9.11).

## Results

### Enforced before this sweep

| Rule | Where |
|---|---|
| §9.3.1 skill IDs unique | ✓ |
| §9.3.5 `verifier_skill_id` / `advisor_escalation` resolve | ✓ |
| §9.4.1 folder paths unique | ✓ |
| §9.4.2 `root` is relative (not absolute, not `~`) | ✓ |
| §9.4.3 `written_by`/`read_by` resolve to skills | ✓ |
| §9.4.4 `boundary.rule` present and non-empty | ✓ |
| §9.5.4 `live` source integration resolves | ✓ |
| §9.5.5 `context_load[]` bundles exist | ✓ |
| §9.6.1 integration IDs unique | ✓ |
| §9.6.2 `used_by[]` bidirectional | ✓ |
| §9.6.3 no raw secrets | ✓ |
| §9.6.4 `pii: true` requires `data_residency` | ✓ |
| §9.7.1–5 cross-manifest references | ✓ |
| §9.12.1–3 profile rules | ✓ (0.0.45, 0.0.48) |

### Declared but unenforced — fixed in 0.0.49

| Rule | Spec text | Was | Now |
|---|---|---|---|
| **§9.3.2** | "Every `playbook` path resolves to an existing file" | key presence only — a path to nowhere passed | `File.exist?` against the manifest dir |
| **§9.3.4** | "If `trigger=scheduled`, `schedule` is a cron expression" | non-empty string — `"every monday"` passed | 5- or 6-field cron, or an `@macro` |
| **§9.5.1** | "No cycles in `composes`" | **nothing** — a cycle would make a runtime compose context forever | DFS over the compose graph, reports the cycle path |
| **§9.5.2** | "Every `file` source `path` resolves" | key presence only | `File.exist?` against the manifest dir |
| **§9.5.3** | "Every `query` source's `against` references an indexed folder in `MemoryMap`" | **nothing** — querying an unindexed folder silently returns nothing at runtime | cross-manifest check against `MemoryMap.indexing[].folder` |

All five verified with negative fixtures; the reference manifest passes unchanged.

Note on §9.5.1 and §9.5.3: neither had any coverage in the reference example (it
declares no `query` sources and no `composes` cycle), which is why routine
validation never surfaced them. **A rule with no example exercising it is a rule
nobody has tested.**

### Authoring-layer — reclassified, not "fixed"

| Rule | Why it cannot be gated | Treatment |
|---|---|---|
| **§9.7.6** `depends_on_capabilities[]` → `CapabilityMap` | `CapabilityMap` is a Phase 5 authoring artifact, not a port manifest. The validator has no path to load it. | §9.7 now says the validator runs rules **1–5**; rule 6 is declared authoring-layer. The validator reports the count of capability references (13 in the reference example) rather than silently ignoring them. |
| **FS-400.8** the multi-harness "sovereignty hedge" | Whether a hedge exists is a property of the declared postures, not a structural constraint. A shell fronting only rented loops is still legitimately multi-harness. | §9.11 now states `harness_options` is descriptive, not a guarantee. The validator reports `harness hedge: N/M own`, and warns when no loop is `own`. |

The §9.7.6 case is the sharper of the two: the spec sentence read *"`bin/validate-manifest`
runs these checks"* directly beneath a list of six rules, one of which it has
never run — while the reference example exercises that rule thirteen times.

## The pattern, named

Every instance has the same root: **a normative sentence written in the spec at a
time when the enforcement artifact was not edited in the same change.** 1.5.0 was
specified in §9.12 and never added to the schema. The Phase-7 gate was written as
prose and implemented as `!empty?`. FS-400.8's hedge was argued in §9.11 and never
reduced to a check.

`AGENTS.md` rule 2 already states the countermeasure — *if `PROTOCOL.md` declares a
schema feature, `facework.manifest.schema.json` defines it and `bin/validate-manifest`
enforces it* — added at 0.0.45 after the first instance. 0.0.46 was the first release
to follow it by construction. This audit closes the backlog that accumulated before
the rule existed.

## Standing rule earned here

**A normative rule in §9 must land in exactly one of two states, explicitly: enforced,
or declared authoring-layer.** There is no third acceptable state. When a rule cannot
be machine-checked, the spec says so at the point of declaration — the protocol
already has the vocabulary for this (`unenforced: true`, gate-vs-metadata, §9.11).
Silence reads as "checked," and silence is what produced every finding above.

Corollary: **every normative rule should have an example that exercises it.** Two of
the five gaps survived because the reference manifest never used the feature.

## Not covered by this sweep

§10 (HarnessBundle), §11 (DesignInfrastructure) and §12 (Observability Interface)
carry their own gate lines and were **not** audited. §10.7 and §11.9 in particular
declare Phase 8 and Phase 3 gate criteria in the same prose style that produced
these findings. Recommended as the next sweep.
