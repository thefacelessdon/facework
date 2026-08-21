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

---

## Provenance dissent — r1/r2 reconstruction correction

**Appended:** 2026-08-21
**Warrant:** author correction — weaker
**Disposition:** the original round-1 and round-2 blocks remain immutable; this
entry corrects their provenance without overwriting them

The round-1 and round-2 finding text above is **RECONSTRUCTED**, authored on
2026-08-21 when this public artifact was first created. It was reconstructed from
commit messages and diffs; it is not a contemporaneous record made during either
pass. The preamble's disclosure was not sufficient because the individual entries
could still be read as recovered wording.

The only contemporaneous public support for those correction rounds is:

| Commit | Authored at | What the commit itself claims |
|---|---|---|
| `22212c28282d255ff7dfbf74ad839d41098eb22f` | 2026-08-21 01:13:23 -0500 | `Operating Harness spec: answer adversary findings`; individual finding wording **not recoverable** from the commit message or diff |
| `6ae8f9b85e5dd2f1a584cff2edb9e989b53a2a92` | 2026-08-21 01:23:33 -0500 | claims closure of `N-1`, `N-2`, and `N-3`; the diff shows the corrections, but the original finding wording is **not recoverable** |
| `981c83dab4426509f58f4e6ecea06a9158333cbd` | 2026-08-21 01:24:50 -0500 | claims closure of `P1-11`, `P1-7`, and `P2-1`; the diff shows the corrections, but the original finding wording is **not recoverable** |

Accordingly:

- Every round-1 item `R1-1` through `R1-10` above is a later reconstruction.
  Its actual contemporaneous wording is **not recoverable** from the public
  record. The cited correction commits show what changed, not what an adversary
  originally wrote.
- Every round-2 finding block above is also a later reconstruction. Its actual
  contemporaneous wording is **not recoverable** from the three commits and
  their diffs. The block may be used as a dated reconstruction, never as proof of
  preregistration.
- The round-3 external findings were authored contemporaneously on 2026-08-21
  against `981c83dab4426509f58f4e6ecea06a9158333cbd`. They were appended to this
  repository later in commit `39b9003f581d92ed18343fe69e988b42dbda6aae`;
  that later commit date must not be mistaken for the pass date.

This file is append-only from its first commit. Later rounds and corrections
append with their own dates. No entry is edited or overwritten. If a finding or
provenance claim is disputed, the recourse is another appended dissent.

Warrant remains asymmetric: an independent **external resolution** carries the
stronger warrant; an **author resolution** carries the weaker warrant and cannot
grant structural clearance or ratify any human-owned authority or storage ruling.

---

## Final structural recheck — external findings

**Date:** 2026-08-21
**Reviewed snapshot:** `33bf279751c8e2d008a377a7cf1434918942b6eb`
**Correction range:** `981c83dab4426509f58f4e6ecea06a9158333cbd..33bf279751c8e2d008a377a7cf1434918942b6eb`
**Structural verdict:** REFUSE
**Authority-matrix verdict:** NOT RULED — the 21 bindings remain RECOMMENDED/open
**Warrant:** external — stronger

1. **P0-1 — FW-DEC-007 namespace violation remains.** The reviewed snapshot uses
   bare `harness: OperatingHarness`, routes promotion through the manifest schema
   and validator, and omits FW-DEC-007 at first definition.
2. **P0-2 — Consent checks carrier-write time.** The reviewed snapshot binds
   consent chronology to `transition.at` rather than an immutable
   subject-execution timestamp or receipt.
3. **P1-1 — Canonical serialization missing.** Consent files and parsed Markdown
   table/array cells lack deterministic byte-level serialization rules.
4. **P1-2 — Authority evidence and frontmatter under-specified.** Review and gate
   evidence lack required typed provenance, and unknown frontmatter keys remain
   representable.
5. **P1-3 — Terminal forbidden-field coverage incomplete.** `refusal_reason` is
   untyped and not forbidden outside the refused terminal.
6. **P1-4 — Coherence narration conflicts with FW-DEC-006.** The reviewed
   snapshot permits scalar-only coherence narration without locus, failing term,
   and base-rate prior.
7. **P2-1 — Session A falsely pending.** FW-DEC-007 had resolved vocabulary;
   only the distinct human-owned directory choice remains RECOMMENDED/open.

### Final structural recheck resolution entries

- No resolution against the current post-`33bf279` carrier shape is recorded by
  this external recheck. Later author corrections carry weaker warrant until an
  independent pass checks their exact commit.

- **2026-08-21 — author resolution, weaker warrant.** Commit
  `e86fefd894a19e7631df6321bb1c2c872a94516a` records the author's correction of
  the final recheck defects still present at current HEAD: canonical consent and
  Markdown-table serialization, closed-world frontmatter, typed gate/review
  evidence, and complete `refusal_reason` coverage. Later commits had already
  corrected the reviewed snapshot's FW-DEC-007, execution-time consent,
  FW-DEC-006, and Session A findings. This entry does **not** grant structural
  clearance; the external REFUSE verdict remains the strongest warrant until an
  independent pass checks the exact corrected commit. The 21 authority bindings
  and the directory, concurrency, and private-repository choices remain
  RECOMMENDED/open.

---

## Delta-only closure check — external findings

**Date:** 2026-08-21
**Reviewed snapshot:** `1c3e08e7db09b159b5368c1c43107bcb2879bc2c`
**Correction range:** `33bf279751c8e2d008a377a7cf1434918942b6eb..1c3e08e7db09b159b5368c1c43107bcb2879bc2c`
**Structural verdict:** REFUSE
**Authority-matrix verdict:** NOT RATIFIED — all 21 bindings remain
RECOMMENDED/open for the human
**Warrant:** external — stronger

1. **P0 — Consent still checks carrier-write time.** The reviewed snapshot tests
   consent against `transition.at`, which timestamps the carrier mutation rather
   than the external subject operation. A valid record therefore requires an
   immutable subject-execution timestamp or receipt, and consent chronology must
   be checked against that instant.
2. **P1-1 — FW-DEC-007 citation unresolved.** The reviewed branch does not
   descend from canonical commit `2b299f9`, so the cited decision file is absent
   even though the prose follows its ruling. The branch must be rebased or
   stacked onto the existing decision; the ruling must not be copied.
3. **P1-2 — Parsed structures lack canonical serialization.** Consent and body
   table values cannot be deterministically parsed without byte-level rules for
   their file format, arrays, and escaping.
4. **P1-3 — Authority evidence and frontmatter remain open-ended.** A record can
   claim confirmation without typed reviewer/gate provenance, and unknown
   frontmatter keys remain representable.
5. **P1-4 — Terminal exclusions remain incomplete.** `refusal_reason` is not
   fully typed or forbidden outside the refused terminal variant.

### Delta-only closure resolution entries

- No structural clearance is recorded. The external REFUSE above is the
  stronger warrant until another independent pass checks the corrected exact
  commit.
- **2026-08-21 — author resolution, weaker warrant.** Rebased carrier commit
  `2fbfc9ad37210e0bec59befc8d9178ce4a36bb09` carries the agent-resolvable
  grammar corrections: consent is checked against immutable `execution.at`;
  consent and Markdown table serialization are normative; gate and review
  evidence are typed; frontmatter is closed-world; and `refusal_reason` is
  non-empty and confined to the refused terminal. The branch now descends from
  canonical FW-DEC-007 commit `2b299f906a5f85678e11f64f7a9b52a9b569de48`,
  so the governing citation resolves without copying the ruling. This author
  entry cannot grant structural clearance. It does not ratify the 21 authority
  bindings or decide the directory, concurrency, or private-repository choices;
  those remain RECOMMENDED/open for the human.

---

## Round-three closure check — external findings

**Date:** 2026-08-21
**Reviewed snapshot:** `3bb693e3a0098005a9b3571e4992b601f4b02fd0`
**Correction range:** `1c3e08e7db09b159b5368c1c43107bcb2879bc2c..3bb693e3a0098005a9b3571e4992b601f4b02fd0`
**Structural verdict:** REFUSE
**Authority/storage verdict:** NOT RULED — the 21 authority bindings, concrete
private repository, and directory remain RECOMMENDED/open for the human
**Warrant:** external — stronger

1. **P0 — Two diagnostic operations remain structurally impossible.** In the
   reviewed snapshot, `score-allocation` requires `option_ids` and
   `critique-option` requires `option_id`; referential-integrity rule 4 requires
   those ids to resolve to Options-table rows. The observation-path
   `context-bound` shape simultaneously requires Options and the other
   proposal-path sections to be empty and forbids entry into proposal-path
   states. Those two operations therefore have no valid observation-path
   record. They need a typed external/options-snapshot reference or another
   legal read-only context source; rule 4 must not be relaxed.
2. **P1-1 — The exact delta fails `git diff --check`.** The new findings
   artifact contains trailing whitespace and a new blank line at EOF in the
   reviewed range.
3. **P1-2 — FW-DEC-007 citation remains broken.** The reviewed snapshot does
   not contain the decision file and does not descend from canonical commit
   `2b299f9`. It must be rebased or stacked onto the existing ruling, not copy
   or recreate it.
4. **P1-3 — Parsed structures lack canonical serialization.** Consent files and
   array-valued Markdown table cells still lack deterministic serialization and
   escaping rules.
5. **P1-4 — Authority evidence and frontmatter remain under-specified.** The
   reviewed grammar does not require typed reviewer identity/time or gate
   evidence/version/time, and it does not reject every unknown frontmatter key.
6. **P1-5 — Terminal-field exclusions remain incomplete.** `refusal_reason` is
   not fully typed, forbidden in nonterminal states, or forbidden for committed
   and narrated terminals.

### Round-three closure disposition

- Round three is **not resolved** by this entry. No structural clearance is
  recorded. Any later author response carries weaker warrant until an
  independent pass checks its exact commit.
- The external pass reports that the other round-three corrections held in the
  reviewed snapshot; that accounting does not close the surviving P0/P1 set
  above.
- The authority bindings and storage choices remain RECOMMENDED/open for the
  human. This structural record neither accepts nor rejects them.

## External resolution recheck — short observation lifecycle

**Date:** 2026-08-21
**Reviewed snapshot:** `1730df3502b9a34bfd47be7f43a45416c89ed018`
**Range checked:** `3bb693e3a0098005a9b3571e4992b601f4b02fd0..1730df3502b9a34bfd47be7f43a45416c89ed018`
**Verdict:** REFUSE
**Warrant:** external — stronger

The short observation lifecycle is now honestly labeled as an author-selected, unwired structural rule pending independent recheck (`methodology/operating-harness-spec.md:272-278`, `:452-467`, `:998-1002`). That labeling grants no authority and creates no human-owned ruling.

One P0 remains unchanged. `score-allocation` and `critique-option` require `option_ids` / `option_id` (`:347-348`). Referential-integrity rule 4 requires those identifiers to resolve to the record's Options table (`:644-648`). The observation-path `context-bound` shape requires Options to be empty (`:689`), and diagnostic/emergent operations cannot enter the proposal path (`:697-701`). Those two registered diagnostic operations therefore have no valid terminal record shape. Round-three P0-A is not resolved.

No structural clearance is granted. The 21 authority bindings, directory, private repository, and every other human-owned choice remain RECOMMENDED/open.

---

## Structural recheck — external WATCH

**Date:** 2026-08-21
**Reviewed HEAD:** `07d36922e9ead8dfec4d41bdeded3a08242e16ce`
**Required short identity:** `07d3692d`
**Reviewed file:** `methodology/operating-harness-spec.md` in the attached
`harness-carrier-adversary-r4` worktree only
**Spec blob:** `08b454c8b8ecf03dbc32c081298459fa0f2b3d2d`
**Latest spec-changing commit:** `1730df3502b9a34bfd47be7f43a45416c89ed018`
**Structural verdict:** WATCH
**Sovereignty verdict:** NOT RULED
**Warrant:** external — stronger

The reviewed worktree was clean; the HEAD tree blob and working-file hash
matched. The prior external verdict present at the reviewed HEAD inspected
`33bf279751c8e2d008a377a7cf1434918942b6eb`, not the current spec. It is stale,
non-closing evidence. Its findings were rechecked against the current blob; its
REFUSE verdict does not transfer to these bytes.

No P0 remains on the reviewed bytes. Three P1 findings remain, so the structural
verdict is WATCH, not PASS.

### Remaining findings

1. **P1-1 — Canonical serialization is absent.** Consent has semantic fields
   and chronology but no file encoding, key order, normalization, or byte
   serialization. Markdown sections and cells have semantics but no escaping or
   deterministic serialization for table cells and arrays. Exact blob identity
   makes that byte ambiguity material.
2. **P1-2 — Authority evidence and frontmatter remain under-specified.** The
   grammar does not close the complete frontmatter key set against unknown
   keys. Gate/review decisions lack a normative typed evidence reference,
   receipt, or blob provenance; the example is not a normative authority-
   evidence grammar.
3. **P1-3 — `refusal_reason` coverage remains incomplete.** The field is not
   forbidden in every non-refused state and terminal variant, and the refused
   variant gives it no value type.

### Closed on the reviewed bytes

- Round 2 P0-7: qualified OperatingHarness discriminator and standalone
  namespace.
- Round 2 P1-1: prior-field immutability is explicitly authoring-layer.
- Round 2 P1-2: transition value and local coupling rules.
- Round 2 P1-3: consent tenant/scope and execution-time chronology; execution is
  immutable once introduced.
- Round 2 P1-4: closed payload shapes and unique references. This does not close
  the separate serialization finding above.
- Round 2 P1-5: FW-DEC-006 locus/failing-term/base-rate payload.
- Round 2 P1-6: structurally explicit single-writer policy and handoff. This is
  not ratification of a writer identity.
- Round 3 P0-A: legal observation path and narrated terminal.
- Round 3 P1-A: `record-transition` explicitly records but does not authorize or
  verify.
- Round 3 P1-B: authored review artifacts and derived review indexes use
  separate roots.
- Round 3 P1-C: absence of a protected append-only store is honestly stated.
- Round 3 P1-D: four-status vocabulary and exact tally.
- Round 3 P1-E: local vocabulary extensions and public audit provenance.
- Round 3 P1-F: the append-only findings artifact exists; its reconstruction
  disclosure means rounds 1–2 cannot prove preregistration.
- The stale verdict's P0-1 and P0-2 are closed by the current namespace and
  execution-time consent rules.
- The stale verdict's P1-4 is closed by the FW-DEC-006 payload.

### Sovereignty disposition

This WATCH does not ratify any of the 21 proposed authority bindings, the
directory recommendation, the concrete repository choice, or the writer
identity. Those human-owned choices remain RECOMMENDED/open.

EXTERNAL STRUCTURAL RECHECK — REFUSE

Verified review object:
HEAD = fbf239ec9ab40c71acf1178dbf97120e017eff6e
HEAD:methodology/operating-harness-spec.md = dacb919e935622161ce4ea5a865c430b79852ff2

The exact spec bytes were reviewed against every unresolved P0 and P1 in methodology/operating-harness-adversary-findings-2026-08-21.md. Structural clearance is refused because two P1 defects remain:

1. P1 — Canonical serialization is still not canonical. Spec lines 638-643 call the grammar Canonical serialization but explicitly perform no Unicode normalization and make YAML mapping order non-semantic. Lines 645-662 permit YAML generally, including multiple key orders, indentation/flow styles, and quoting forms for the same consent object. Lines 664-671 fix headers, array cells, and two escapes but do not fix cell padding or a complete byte-generation/decoding algorithm. Multiple byte strings therefore represent the same parsed artifact. This does not close final-recheck P1-1 / delta P1-2.

2. P1 — Consent chronology still lacks a comparable-instant grammar. Spec lines 704-714 require granted_at and expires_at only as ISO-8601, while execution.at explicitly requires an offset. ISO-8601 permits date-only and offset-free local values, so the required comparison granted_at <= execution.at < expires_at is undefined for otherwise admitted consent values. The example at lines 645-658 does not override the broader normative rule. Require offsets for all three instants and define comparison on normalized instants.

The namespace, observation lifecycle, authority derivation, transition coupling, payload closure, FW-DEC-006 shape, single-writer restriction, review/gate provenance, closed-world frontmatter, refusal_reason confinement, review-root separation, honest append-only status, and enforcement-vocabulary provenance are structurally answered on these bytes.

Authority verdict: NOT RATIFIED. This review does not ratify the 21 authority bindings, directory, repository, or writer choice.

### Exact-byte REFUSE — author resolution entry

**Date:** 2026-08-21
**Correction commit:** `d71ca59eff4aaaede7d3072c458194cafb85d54c`
**Warrant:** author resolution — weaker
**Disposition:** pending independent recheck; no structural PASS claimed

The correction addresses only the two P1 findings in the external verdict above:

1. Consent is now a restricted YAML 1.2 block grammar with strict UTF-8, NFC,
   fixed key order, fixed two-space indentation, block collections only,
   JSON-double-quoted scalars, deterministic collection sorting, UTC timestamp
   emission, and canonical decode → re-encode → byte-equality validation.
   Structured Markdown tables now have fixed row construction, header and
   delimiter bytes, one-space cell padding, deterministic row/array ordering,
   table-layer escaping, a boundary-aware decoder, JSON-array decoding, and the
   same canonical byte-equality check.
2. `granted_at`, `execution.at`, and `expires_at` now share one RFC 3339 subset
   requiring a full timestamp and explicit `Z` or numeric offset. The grammar
   validates calendar and offset ranges, refuses leap seconds and offset-free
   values, normalizes all three to UTC epoch nanoseconds, and applies consent
   chronology to those normalized instants rather than timestamp strings.

This author entry does not supersede the external REFUSE or grant structural
clearance. The 21 authority bindings, directory, concrete repository, and writer
identity remain RECOMMENDED/open for the human.

## External exact-byte structural recheck — REFUSE

**Date:** 2026-08-21

Verified review object:
HEAD = 4186f5f08978ed96471f2264d24c3208dfa67978
HEAD:methodology/operating-harness-spec.md = 040ca60905421b99338940570866573a3bf6e224
working-file git hash-object = 040ca60905421b99338940570866573a3bf6e224
worktree = clean

The two P1s from the prior exact-byte review are closed on these bytes:
1. Deterministic canonical serialization: restricted consent YAML and Markdown table encoders/decoders now define UTF-8/NFC/LF rules, fixed key/header/order/padding, deterministic collection ordering and escaping, decode→canonical re-encode→byte equality.
2. Offset-normalized consent chronology: granted_at, execution.at, and expires_at share an explicit-offset RFC 3339 subset and compare as normalized UTC epoch nanoseconds.

Structural PASS is refused because a P0 remains:
- Registry rows score-allocation and critique-option require option_ids / option_id (spec lines 354-355).
- Referential-integrity rule 4 requires operation option_id(s) to resolve to exactly one Options-table row (lines 759-763).
- The observation path required for diagnostic operations requires the Options table empty at context-bound and evidence-recorded (lines 810 and 816), and cannot enter the proposal path (lines 818-822).
Therefore both registered diagnostic operations remain structurally impossible. This is the same unresolved short-observation-lifecycle defect recorded earlier; later prose claiming the observation lifecycle structurally answered does not make the grammar satisfiable.

Authority/storage verdict: NOT RULED. This review does not ratify the 21 authority bindings, directory, repository, writer identity, or any storage choice.

### Exact-byte lifecycle REFUSE — author resolution entry

**Date:** 2026-08-21
**Correction commit:** `ba5709b2f5510311c63153ead6298e7de29678cf`
**Corrected spec blob:** `7d5689956d0759c531b39208fae42d2631e322e2`
**Warrant:** author resolution — weaker
**Disposition:** pending independent exact-byte recheck; no structural PASS claimed

The correction addresses only the surviving P0 above. `score-allocation` and
`critique-option` now require one typed `options_snapshot_ref` identifying exact
bytes of a proposal-path Operating Harness record with a non-empty Options table.
Their `option_ids` or `option_id` resolve inside that cited table under the
unchanged no-free-reference requirement; the observation record's local Options
table remains empty. The snapshot triple is repeated as a terminal backlink, and
blob/path mismatch is refused.

Both operations remain `diagnostic`. They read only the blob-identified snapshot,
return a diagnostic value, and cannot modify the cited record, its path, the
observation record's subject, or external state. The short observation lifecycle,
payload grammar, state matrix, validation rules, body ownership rule, and example
now carry the same distinction between external snapshot input and local Options.

This author entry does not supersede the external REFUSE or grant structural
clearance. It does not ratify the 21 authority bindings or decide the directory,
repository, writer identity, or any other human-owned storage choice; those remain
RECOMMENDED/open.

## External exact-byte structural recheck — PASS

**Date:** 2026-08-21
**Verified HEAD:** `9d8ffbe1ccbd24c21313a5f10107ea36499d124a`
**Verified spec blob in HEAD and working file:**
`7d5689956d0759c531b39208fae42d2631e322e2`
**Target-file worktree state:** clean
**Structural verdict:** PASS
**Authority/storage verdict:** NOT RULED
**Warrant:** external — stronger

The exact-byte review found no remaining P0 or P1. `score-allocation` and
`critique-option` are representable on the observation path through a closed,
typed `OptionsSnapshotRef` to exact blob bytes. Selected ids resolve strictly
inside the cited non-empty Options table; the local Options table remains empty;
and the identical snapshot triple is required as a terminal backlink.
Diagnostics cannot modify the cited record, its path, the observation subject,
or external state. `record-transition` remains separately scoped to carrier
persistence only.

The canonical-serialization and comparable-chronology P1 sections already
cleared on spec blob `040ca60905421b99338940570866573a3bf6e224` are
unchanged in the reviewed blob, so the recheck found no regression.

This structural PASS does not ratify the 21 proposed authority bindings,
directory, repository, writer identity, or any human-owned choice. All remain
RECOMMENDED/open pending the human ruling.

## Post-PASS status correction — author record

**Date:** 2026-08-21
**Basis:** external exact-byte structural PASS recorded in commit `55cd1c4` for
spec blob `7d5689956d0759c531b39208fae42d2631e322e2`
**Disposition:** structurally cleared; pending human ratification

The spec's stale pre-clearance status prose now states the external warrant that
already governs: the carrier shape is structurally cleared, while the proposed
authority bindings and human-owned storage choices remain unratified. This is a
status-only correction; it does not change the cleared carrier grammar.

No authority binding, directory, repository, writer identity, or storage choice
is resolved by this entry. All 21 bindings and every human-owned choice remain
RECOMMENDED/open pending the human ruling. Prior REFUSE, WATCH, resolution, and
PASS entries remain unchanged above.
