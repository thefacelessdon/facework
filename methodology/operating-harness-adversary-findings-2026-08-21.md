# Operating Harness adversary findings — append-only record

**Date:** 2026-08-21  
**Status:** Open — round 3 corrections pending independent recheck  
**Subject:** `methodology/operating-harness-spec.md`

## Record discipline

This file is the durable closing artifact for the Operating Harness adversary
passes. Finding blocks are immutable once committed. A correction never edits or
deletes a finding; it appends a resolution entry naming the correcting commit and
the warrant carried by the reviewer.

Warrant is asymmetric:

- An **external resolution** issued by an independent adversary carries the
  stronger warrant.
- An **author resolution** records that the author believes a correction landed.
  It carries the weaker warrant and cannot grant structural clearance.
- Structural clearance does not ratify the 21 proposed authority bindings,
  choose a directory, choose a private repository, or make any other human
  sovereignty ruling.

The first two external reports were not committed when issued. Round 1 below is
an index reconstructed from the correction accounting in the later external
reports; it does not claim verbatim recovery. Rounds 2 and 3 preserve the finding
labels and operative claims supplied by the independent adversary.

---

## Round 1 — external findings

**Date:** 2026-08-21  
**Reviewed snapshot:** `57327fb3588581896d33437d9268f7b8b4e5ac32`  
**Verdict:** REFUSE  
**Warrant:** external — stronger

The later external correction accounting identifies these round-1 findings:

1. **R1-1 — Authored authority/channel/consent bypass.** Mode, channel, enforcer,
   and consent requirements could be authored rather than derived from one
   operation variant.
2. **R1-2 — Diagnostic/emergent lifecycle unsatisfiable.** Read-only and narration
   operations had no legal terminal shape.
3. **R1-3 — Diagnostic write carve-out.** A diagnostic operation could write the
   evidence store and thereby launder a state change.
4. **R1-4 — Sovereignty floor and consent under-specified.** Cross-tenant consent
   was not intrinsic to the operation shape, and human sovereignty rulings were
   not kept visibly open.
5. **R1-5 — Missing per-state validation grammar.** Lifecycle prose did not define
   required and forbidden fields per state.
6. **R1-6 — False enforcement claims.** Existing quality commands were described
   as authority enforcers even though they did not enforce operating authority.
7. **R1-7 — Missing referential invariants.** Options, constraints, payload
   references, and backlinks could be unresolved or multiply resolved.
8. **R1-8 — Evidence-store ambiguity.** Store identity, repository resolution,
   and privacy requirements contradicted one another.
9. **R1-9 — Git transition proof overclaim.** Git history was called proof of a
   legal lifecycle transition when it supplies audit evidence only.
10. **R1-10 — Private provenance laundering.** A private lock date and source
    content were presented with more warrant than public readers could verify.

### Round 1 resolution entries

- **2026-08-21 — author resolution, weaker warrant.** Commits `22212c2`,
  `6ae8f9b`, and `981c83d` attempted the first correction set. The author did not
  grant clearance.
- **2026-08-21 — external resolution, stronger warrant.** The round-2 accounting
  marked the original single-home, authored-authority, terminal-coupling,
  diagnostic-write, false-enforcement, and git-proof defects closed or narrowed,
  while carrying forward the defects listed in round 2. This did not ratify the
  authority registry.

---

## Round 2 — external findings

**Date:** 2026-08-21  
**Reviewed snapshot:** `981c83dab4426509f58f4e6ecea06a9158333cbd`  
**Range checked:** `57327fb3588581896d33437d9268f7b8b4e5ac32..981c83dab4426509f58f4e6ecea06a9158333cbd`  
**Verdict:** REFUSE  
**Warrant:** external — stronger

1. **P0-7 — FW-DEC-007 violation.** The record used bare
   `harness: OperatingHarness`, and the promotion path routed the carrier through
   the manifest schema and validator. FW-DEC-007 reserves that namespace for the
   runtime sense.
2. **P1-1 — Prior-field immutability absent.** `record-transition` could silently
   rewrite fields introduced by an earlier state.
3. **P1-2 — Transition fields not locally coupled.** `transition.to`,
   `transition.at`, and `transition.result_ref` lacked local mechanical rules.
4. **P1-3 — Consent chronology and tenant binding incomplete.** Future or
   wrong-tenant consent could pass.
5. **P1-4 — Payload/body grammar presence-only.** Required keys lacked closed
   value schemas and table references lacked uniqueness guarantees.
6. **P1-5 — Coherence operation conflicts with FW-DEC-006.** A score reference
   could be narrated without locus, failing term, and base-rate prior.
7. **P1-6 — Concurrency unresolved.** No compare-and-swap, merge, or first-
   implementation single-writer rule existed.
8. **P2-1 — Ratification order reversed.** Human authority ratification preceded
   structural falsification in the stated sequence.
9. **P2-2 — Session A falsely pending.** FW-DEC-007 had resolved the vocabulary
   question, though it had not selected a directory.
10. **P2-3 — Enforcement status count drift.** Findings-first prose said three
    states while the matrix defined four.

### Round 2 resolution entries

- **2026-08-21 — author resolution, weaker warrant.** Commits `6976e83`,
  `33bf279`, and `1c3e08e` record the author's corrections: closed payload value
  grammars, explicit transition coupling and immutability, consent chronology,
  a single-writer first implementation, FW-DEC-006 locus payloads, the
  FW-DEC-007-qualified discriminator, and a standalone carrier validator path.
  These commits remain pending independent recheck and do not ratify the 21
  authority bindings or any storage choice.

---

## Round 3 — external findings

**Date:** 2026-08-21  
**Reviewed snapshot:** `981c83dab4426509f58f4e6ecea06a9158333cbd`  
**Range checked:** `57327fb3588581896d33437d9268f7b8b4e5ac32..981c83dab4426509f58f4e6ecea06a9158333cbd`  
**Verdict:** WATCH  
**Warrant:** external — stronger

1. **P0-A — `narrated` asserted representable but forbidden by the lifecycle.**
   Diagnostic/emergent records were forced through non-empty options, tableau,
   and proposal states before terminal narration. Fix the lifecycle; do not relax
   referential-integrity rule 4.
2. **P1-A — Non-laundering sentence overclaims.** `record-transition` records the
   claim; it does not authorize or verify it.
3. **P1-B — Authored and derived review artifacts share `reviews/`.** Separate
   the authored review artifact root from the derived review-index root.
4. **P1-C — Append-only claim is false.** The record advances in place and
   rewrites lifecycle fields; no protected append-only store exists.
5. **P1-D — Enforcement status count drift.** Findings-first prose says three
   states while the matrix defines four.
6. **P1-E — Enforcement vocabulary provenance inflated.** The public audit
   defines its own labels; `Unwired` and `No gate by design` are local extensions
   and must be named as such with the audit path restored.
7. **P1-F — Falsification event has no artifact.** Rounds 1–3 and their
   resolutions need this dated, public, append-only record.
8. **P2-1 — Stale type name.** The non-normative sketch uses `EnforcerGap` after
   §A.4 split that name into `InheritedEnforcerGap` and `RecordEnforcerGap`.
9. **P2-2 — Three true historical anchors were de-cited.** Restore the recurring
   enforcement-defect, blob-provenance, and twenty-release runtime-conformance
   anchors with public source paths.
10. **P2-3 — Example hardcodes an unruled directory.** Use a placeholder root in
    `transition.record_path`.
11. **P2-4 — Tier-routing enforcer mismatch.** The registry names
    `operator-review`, but Berd session creation is the described binding
    mechanism.
12. **P2-5 — Consent expiry checks the wrong event.** Consent chronology must bind
    to the cross-tenant act time, not a terminal transition timestamp that is
    overwritten later.
13. **P2-6 — N1 points at the wrong rule.** The anti-theater requirement is in
    terminal coupling, not backlink-shape rule 6.

### Round 3 resolution entries

- No author or external resolution recorded yet.

### Resolution append — author correction after round 3

- **2026-08-21 — author resolution, weaker warrant.** Commit
  `3bb693e3a0098005a9b3571e4992b601f4b02fd0` records the author's correction of
  P0-A, P1-A through P1-F, and P2-1 through P2-6. It adds the short observation
  lifecycle, preserves referential-integrity rule 4, separates authored and
  derived review roots, binds consent to `execution.at`, restores public source
  anchors, and corrects the remaining grammar and wording defects. This entry
  does **not** grant structural clearance and does not ratify the 21 authority
  bindings or any directory, concurrency, or private-repository choice. An
  independent external resolution is still required.
