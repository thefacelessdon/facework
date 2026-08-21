# The Operating Harness — carrier spec for operating intent

**Date:** 2026-08-21 · **Status:** Ratified for v0; structurally cleared; unwired ·
**Subject:** the typed carrier for *operating intent*
**Pairs with:** `methodology/loop-model.md`, `methodology/runtime-ports-berd-gap-2026-08-18.md`
**Source pattern:** `gamut-ops/documents/design-harnesses-2026-04-27.md` (Design
Harness v0.2.2 — bound, compiler-verified, running against 14th & Co)
**Composition rule:** `gamut-ops/documents/the-practice-three-layers-2026-04-28.md`
**Vocabulary ruling:**
[`FW-DEC-007`](decisions/DECISION-007-harness-sense-disambiguation.md) — bare
`harness` is reserved for the runtime sense; the carrier sense is always
qualified and stays out of the manifest schema and validator
**Falsification record:**
[`operating-harness-adversary-findings-2026-08-21.md`](operating-harness-adversary-findings-2026-08-21.md)
— append-only findings and resolution warrants; external exact-byte structural
PASS recorded at `55cd1c4`
**V0 ratification:**
[`FW-DEC-010`](decisions/DECISION-010-operating-harness-v0-ratification.md) — 21
authority bindings, `single-writer` / `writer_id: harper`, independent private
`personal/` repository, records under `personal/operating/`
**Constraint set:** private — SignalThesis + canonical-language guide for
Harper-as-Operator, author-asserted as locked 2026-06-03. **Inlined as §A; not
cited by path; lock date independently unverifiable.**

> **Not canon.** This is a methodology note. Per FW-DEC-007, this carrier format
> does not and must not enter `PROTOCOL.md` §9–§12,
> `facework.manifest.schema.json`, or `bin/validate-manifest`. Its future binding
> path is a standalone record schema and standalone validator — see §10.
>
> **Structurally cleared and ratified for v0; not built.** An independent exact-byte recheck
> found no remaining P0 or P1 on spec blob
> `7d5689956d0759c531b39208fae42d2631e322e2`; the external warrant is appended
> in the findings record. FW-DEC-010 separately ratifies the authority and
> storage choices. No validator or running automatic enforcer exists.

---

## 0. Findings first

Four things this spec had to resolve, stated before the design:

1. **No Operating Harness operation is automatically enforced today.** Of the
   21 ratified v0 authority-bearing entries in §3 — 18 subject operations and three
   carrier checks — **zero** have a running automatic enforcer.
   Every gate is human-invoked or unwired. The
   validator that would check the record format —
   `bin/validate-operating-harness-record` —
   **does not exist.** §3 labels every row with one of four statuses, using this
   repo's enforcement-audit vocabulary plus the explicit no-gate status:
   **Enforced / Authoring-layer / Unwired / No gate by design**. §4 states what
   is missing.
   This is the repo's recurring asserted-but-unenforced defect class: eleven
   instances were found across §9–§12
   ([§10–§12 enforcement audit](section10-12-enforcement-audit-2026-08-19.md)),
   and the later provenance and certification corrections are recorded in
   [`ROADMAP.md`](../ROADMAP.md). The way not to repeat it is to label rather
   than imply.

2. **The current Berd runtime cannot fire a gate on a state change.** Berd has `on_demand` native,
   `scheduled` UI-only, and **no `event` and no `continuous` trigger at all**
   (`runtime-ports-berd-gap-2026-08-18.md`). So "check the record when it
   transitions" is not a buildable gate on the runtime this practice actually runs
   on. Every checkable rule in §5 is therefore specified as a *whole-file static
   check*, invokable on demand — the only trigger shape that exists.

3. **The evidence store cannot be this public repo.** The brief's premise — git-tracked
   files ARE the evidence store — is right about *git* and wrong about *which
   repo*. Operating Harness records name real nodes and real collaborators, and
   **N10** makes that a sovereignty constraint, not a hygiene preference.
   Requirement in §5.1: the store is a **privately held git repo**, not the public
   canon repo. The same rule governs this
   document — everything it needs from that tree is inlined in **§A**, so a reader
   holding only the public repo can execute it.

4. **Operating intent needs a third channel the Design Harness does not have.**
   Design intent moves between the operator's own surfaces. Operating intent can reach
   *people*. `internal | emission` is insufficient; `cross-tenant` is a distinct
   channel whose consent requirement must be **derived from the operation kind**,
   never trusted from an authored `channel` field. This is the one place the spec
   genuinely departs from its source pattern rather than subject-swapping it.

---

## A. Inherited requirements — private provenance

The Operating Harness's constraint set is **author-asserted as locked
2026-06-03** in a SignalThesis plus a companion canonical-language guide for
*Harper-as-Operator*. No dated public hash or independently checkable stamp
exposes the locked source bytes, so the pre-registration date is **unverified** by
public readers. **Those two artifacts are private and will never appear in a
clone of this repo.** They name real collaborators and carry their deal states;
the source tree is excluded from public distribution for exactly that reason.
The standing rule is direct —
a public artifact that needs a fact from there **inlines the fact and marks the
provenance private** rather than citing a path no clone can resolve.

So everything this spec depends on from that tree is restated below as a normative
requirement. **§A is the constraint set** for the rest of this document. Where a
later section cites `N8` or `G6`, the referent is here, not in a private file.
Nothing in §0–§12 requires reading the originals.

The Design Harness material (`gamut-ops/`) is a *different repository* and is also
absent from a clone of this one. Its load-bearing five parts, seven states, and
the four acceptance-check findings are restated in §1, §2, and §11. The paths in
this document's header are provenance, not dependencies.

### A.1 Negative-space requirements (N1–N10)

The ten statements of what the Operating Harness is **not**. Each is a
requirement, not a caveat; several are made structural later in this spec.

| # | Requirement | Where this spec enforces it |
|---|---|---|
| **N1** | **Not theater.** Every routine output is execution evidence, not a status report. | §5.3 r7 + terminal variants, §7 r3 |
| **N2** | **Not a dashboard, tracker, or productivity tool.** Those are surfaces; the carrier and enforcer sit beneath them. | §7 r4 |
| **N3** | **Not a duplicate of the Design Harness.** Different intent class. Same pattern, different subject. Always qualify which carrier is meant in writing. | §1 |
| **N4** | **Not built-and-stale.** Anything built must compose with a running enforcer. **Documentation alone is not built.** | §3.4, §9 |
| **N5** | **Not operator-as-prompter.** Execution happens between reviews, not as a result of typing. | §5.4, §7 r6 |
| **N6** | **Not a separate system from Facework.** It is Facework's Operational layer, dogfooded on the portfolio as its first tenant. | §10 |
| **N7** | **Not container-in-disguise.** It must remain credibly optional — a collaborator succeeds without ever hearing "Operating Harness," or it has become the extraction pattern Facework warns against. | §7 r10 |
| **N8** | **Not authority-laundering.** Diagnostic operations carry no state changes. **If state changed, the operation wasn't diagnostic — it was unauthorized.** | §3.3, §5.3, §7 r1 |
| **N9** | **Not meaning-drift-as-substitute.** A semantics revision triggers downstream execution **within the same week**. Pure-Semantics weeks are logged `interpretive-only` — fine occasionally, fatal as pattern. | §6.3, §7 r9 |
| **N10** | **Not sovereignty-violating.** The Operational layer operates in the operator's own context. Reaching into a collaborator's tools or context **requires an explicit consent record.** | §3.1, §5.3 r5, §7 r2 |

### A.2 Guard phrases (G1–G10)

The operator-facing phrasings that block those ten drifts. Quoted where this spec
leans on them.

| # | Guard |
|---|---|
| **G1** | *"Report without evidence is an announcement, not execution."* |
| **G2** | *"Design Harness operates on design intent. Operating Harness operates on operating intent. Same pattern, different subject."* |
| **G3** | *"Can a collaborator succeed without ever hearing 'Operating Harness'? If no, fix the layer."* |
| **G4** | *"Not a productivity tool. The Operational layer of a Practice."* |
| **G5** | *"If I prompted it, the layer failed. Log the failure, don't normalize the patch."* |
| **G6** | *"Diagnostic means read. If state changed, it wasn't diagnostic."* |
| **G7** | *"Match model to operation kind. Top tier is reserved, not default."* |
| **G8** | *"Carriers name the gate. Enforcers run the gate."* |
| **G9** | *"Semantics is foundation, not deliverable."* |
| **G10** | *"My context is mine. Their context requires their consent."* |

### A.3 Lifecycle, authority modes, action sizing

**Lifecycle — seven states.** The private guide declares it as mirroring Design
Harness v0.2.2. Reused verbatim:

`intent-captured` → `context-bound` → `options-generated` → `tableau-reviewed`
→ `artifact-proposed` → `authority-checked` → `evidence-recorded`

**Authority modes — four.** Single source of truth is Design Harness v0.2.2;
restated here so this spec is self-contained:

| Mode | Meaning |
|---|---|
| `ship-gate` | Automatic. Type or contract enforced. No human in the loop. |
| `runtime-active` | Human confirmation required before action. |
| `diagnostic` | Read-only. Narrates findings. Touches no live state. |
| `emergent` | Narration only. No action implied. |

**Action sizing.** `light` / `medium` / `heavy`, preserved verbatim. It is the
operator's own allocation vocabulary, not a t-shirt-size analogy, and
**compute allocation is not time management** — it is routing finite attention and
budget across nodes by status × action size.

### A.4 Vocabulary the record format depends on

```
AuthorityMode = ship-gate | runtime-active | diagnostic | emergent
ActionSize    = light | medium | heavy
Outcome       = committed | refused | narrated
Channel       = internal | emission | cross-tenant   # cross-tenant added here — §0 #4
InheritedEnforcerGap = manual-prompt-fallback | stale-routine | missing-gate
RecordEnforcerGap    = manual-prompt-fallback | unwired-routine | missing-gate
Tier          = haiku | sonnet | opus
```

Terminology rules this spec holds itself to:

- **Never "the harness" bare** — "Design Harness" or "Operating Harness." (N3, G2)
- **Never unqualified "done"** — `committed: <evidence>`, `refused: <reason>`, or
  `narrated: <surface>`. (N1)
- **Never "diagnostic" loosely** — only genuinely read-only operations. (N8, G6)
- **Never "stale"** — `unwired` (no enforcer) or `unbound` (no type promotion).
- **Never "coherent" without citing the score.**
- **Never "ran"** — "executed" (with evidence) or "announced" (without).
- **Carrier and enforcer are never collapsed.** (G8)

The private guide's `stale-routine` literal conflicts with its own prohibition on
"stale." This record schema deliberately normalizes that literal to
`unwired-routine`; the mapping is explicit here rather than represented as an
unchanged restatement.

**Dated departure — 2026-08-21.** The private source, author-asserted as locked
2026-06-03,
expected the agent-layer interpretation to be type-enforced and treated the type
as that audience's thesis-equivalent. This spec deliberately replaces that
expectation with the normative registry and record grammar in §3/§5, whose
future binding target is JSON Schema plus a running validator (§8). A
non-compiled TypeScript sketch in this docs repo would not enforce the claim.
This is an explicit amendment with rationale, not an unchanged inheritance.

### A.5 Node registry and review surface

Two private artifacts this spec refers to **structurally, never by content**:

- **Node registry.** `node` in a record is a registry key. The portfolio's
  canonical primitive is the **node**; brand names are labels on nodes. The
  registry instance is private.
- **Review surface.** A read-side view of node status and next actions across the
  portfolio — the manual precursor to this spec's lifecycle, where each row
  becomes a live Operating Harness once records exist. The private instance is one markdown
  file.

This spec depends only on the review surface's **role**: it is read-side and
cannot define node state (§7 r4). A public reader implementing this spec supplies
their own registry and review surface; nothing in §0–§12 requires the private
instances.

---

## 1. Definition — the five parts

**Vocabulary boundary.** FW-DEC-007 reserves unqualified `harness` for the
runtime sense: the agent loop. This carrier is always **Operating Harness** in
prose or `OperatingHarness` as a type/discriminator, never bare. It stays out of
`PROTOCOL.md` §9–§12, `facework.manifest.schema.json`, and
`bin/validate-manifest`. This specification therefore uses the qualified
`artifact: OperatingHarness` discriminator and a standalone validation path.

An **Operating Harness** is a typed operational frame around an operating claim.
It is the sibling of GAMUT's **Design Harness**: same pattern, different subject.
The Design Harness carries design intent; the Operating Harness carries operating
intent. That pairing is settled (**N3**, **G2**) and this spec does not reopen
it. Per §A.4, neither is ever called "the harness" bare.

It carries five things. The Design Harness's five anchors, subject-swapped:

| Part | Design Harness (design intent) | **Operating Harness (operating intent)** | Anchor in this practice |
|---|---|---|---|
| **Intent** | The design claim — "make onboarding explain trust before asking for data." | The **operating claim** — "advance node X by action Y, allocated as medium compute." | Field note, review line, or a prior Operating Harness's unresolved item |
| **Context** | TWM context, TasteContract, DesignLanguageSpec, persona, phase, prior decisions. | **Node state, allocation budget, prior rulings, consent status.** What is true about this node and what compute is available to spend on it. | The review surface (§A.5, read-side view), decision records, consent records |
| **Operations** | Typed canvas actions — generate, critique, apply move, commit, scaffold. | **Typed operating actions** — ingest a field note, score an allocation, draft a message, commit an advance, send to a collaborator. §3. | §3 ratified v0 operation registry |
| **Evidence** | Score, refusal, changelog, through-line, gate verdict. | **What executed and why it was permitted** — the terminal record, its back-links with blob hashes, the enforcer-gap log. | §5.4, §6 |
| **Authority** | What the agent may do, propose, diagnose, or only narrate. | Same four modes, **derived from the operation kind, never authored.** §3, §5.3. | `ship-gate` / `runtime-active` / `diagnostic` / `emergent` |

**Carrier, not enforcer.** The Operating Harness *names* which enforcer's gate
applies; the enforcer runs the gate. Neither replaces the other — the carrier does
not redefine the gate, the enforcer does not carry the intent
(`the-practice-three-layers-2026-04-28.md`; **G8**: *"Carriers name the gate.
Enforcers run the gate."*). `operation.kind` names the registry row whose
enforcer applies; a record that authors an enforcer or restates its threshold is
malformed (§7 refusal 7).

**The Operating Harness is not a source of truth.** The review surface (§A.5) is
the read-side view of the Operational layer; an Operating Harness record is the
transport-and-evidence frame for one operating intent. Neither defines node
state (§7 refusal 4).

---

## 2. Lifecycle — reused, not reinvented

§A.3 already declares the lifecycle as mirroring Design Harness v0.2.2. It is
reused as the state vocabulary, with the *mechanism* and *output* columns
subject-swapped. It has two legal paths because a read or narration cannot be
forced to invent candidate advances and a proposed act:

- **Proposal path** — for ratified `ship-gate` and `runtime-active` operations:
  `intent-captured` → `context-bound` → `options-generated` →
  `tableau-reviewed` → `artifact-proposed` → `authority-checked` →
  `evidence-recorded`.
- **Observation path** — for `diagnostic` and `emergent` operations:
  `intent-captured` → `context-bound` → `evidence-recorded`. It terminates as
  `narrated`, carries no Options, Tableau review, proposal, gate, or review, and
  records only the returned Operation result plus back-links to examined inputs.
  `score-allocation` and `critique-option` read candidate ids from one immutable
  external Options snapshot named in their payload; they never populate the
  observation record's local Options table.

**Status — Structurally cleared and ratified for v0; unwired.** The author
selected the short observation path from the adversary's two proposed repairs;
an independent exact-byte recheck cleared its representability grammar. The
absent standalone validator still does not enforce it. It determines which
record shapes are legal; FW-DEC-010 separately ratifies the v0 mode, channel,
enforcer, repository, directory, and writer choices. Neither fact creates a
validator or running enforcer.

| State | What happens | Mechanism in this practice | Output |
|---|---|---|---|
| `intent-captured` | An operating claim is stated for a node. | Field note ingest, review line, prior Operating Harness's open item. | Record exists with `intent.claim` + `intent.source`. |
| `context-bound` | The claim is bound to node state and available compute. | Node state read, allocation budget, prior rulings, consent lookup; an allocation score or critique binds one exact read-only Options snapshot. | `context` block + `allocation` set; applicable diagnostic payload complete. |
| `options-generated` | On the proposal path, candidate advances are produced, each sized. | Agent generates ≥1 candidate advance at Light / Medium / Heavy. | Non-empty Options table. |
| `tableau-reviewed` | On the proposal path, options are scored, critiqued, or culled. **This is the compute-allocation call.** | Diagnostic operations used inside proposal review act as internal mechanisms; a standalone diagnostic record follows the observation path. | Scored options + cull rationale. |
| `artifact-proposed` | On the proposal path, one option becomes a concrete proposed act. | A draft, a diff, a schedule change, a message. | `proposal` naming one operation kind + payload. |
| `authority-checked` | On the proposal path, the derived authority regime is resolved. | Automatic gate or human review, as the ratified v0 mode requires. | Settled mode-specific authority shape (§5.3). |
| `evidence-recorded` | Either path lands a re-diffable result artifact. | Terminal record committed to the store. | `committed`/`refused` on the proposal path; `narrated` on the observation path (§6). |

Two properties carried from v0.2.2's hard-won round 2:

- **A terminal state may not carry an unresolved verdict.** Proposal-path
  `evidence-recorded` requires a settled verdict, and `outcome` is tied to it;
  observation-path narration has no verdict by design (§5.3 rule 7). This is
  P0-3 and it is the finding that killed v0.2.
- **Transition order is not provable from the record.** A record that looks
  well-formed for `evidence-recorded` carries no proof it followed its applicable
  path — including `authority-checked` on the proposal path. The `transition`
  block makes the claimed step explicit; git history supplies audit evidence,
  not proof (§6.2). Legal order remains an authoring-layer invariant until a
  store enforces it.

---

## 3. V0 operation authority matrix

There was no closed source map to copy. The matrix below was authored from the
private constraint set's capability domains and the four authority modes in
§A.3, then structurally cleared by independent exact-byte review. **FW-DEC-010
ratifies all 21 bindings as the v0 authority registry.** Each operation now bears
exactly the authority its row states. Ratification does not make an absent
enforcer run: every `Unwired` row remains unable to claim automatic enforcement.

### 3.1 Reading the matrix

The subject-operation registry in §3.2 is the single home for `kind → mode →
channel → enforcer → required payload`. A record authors only `operation.kind`
and its payload; it does **not** author `mode`, `channel`, or `enforcer`. Those
values derive from the matching row. An unknown kind, a duplicate kind, or any
authored authority field is invalid. Carrier-maintenance actions are not subject
operations; their separate grammar and authority boundary live only in §3.3.

**Channel** is the sovereignty axis:

| Channel | Reaches | Requirement |
|---|---|---|
| `internal` | The operator's own context only. | none beyond the mode |
| `emission` | A surface the operator owns that others can see — a repo, a published site, a scheduled job. | Target and payload named by the operation row. |
| `cross-tenant` | Someone else's context — their inbox, repo, calendar, tool. | Target and scoped consent are required payload; review is required by the runtime-active state shape. |

**Gate status** starts from this repo's
[`§9 enforcement-audit vocabulary`](section9-enforcement-audit-2026-08-19.md).
`Enforced` and `Authoring-layer` retain that audit's meanings. This document adds
two explicitly local labels rather than attributing them to the audit:

- **Enforced** — an executable fails on violation.
- **Authoring-layer** — the obligation is real and provably not machine-checkable.
  Legitimate, and must be *declared as such*.
- **Unwired** — this document's name for the audit's defect state, **Declared but
  unenforced**: a gate is specified and nothing invokes it. The operation may not
  execute automatically. The local name aligns with §A.4's `unwired` vocabulary.
- **No gate by design** — local to this document: a diagnostic or emergent
  operation bears no gate, so authority fields are forbidden rather than missing.

### 3.2 Ratified v0 subject-operation registry — single home

Payload keys prefixed with `+` are required; a `?` suffix marks an optional key.
Every listed key resolves to the value grammar below. Repository quality commands
may validate a proposed diff, but they do not enforce operating authority and
therefore do not appear as authority enforcers.

| # | Operation kind | Mode | Channel | Required payload | Authority enforcer | Gate status |
|---|---|---|---|---|---|---|
| 1 | `read-node-state` | `diagnostic` | `internal` | `+node` | — | No gate by design |
| 2 | `ingest-field-note` | `diagnostic` | `internal` | `+source_ref` | — | No gate by design |
| 3 | `score-allocation` | `diagnostic` | `internal` | `+options_snapshot_ref`, `+option_ids` | — | No gate by design |
| 4 | `critique-option` | `diagnostic` | `internal` | `+options_snapshot_ref`, `+option_id` | — | No gate by design |
| 5 | `detect-enforcer-gap` | `diagnostic` | `internal` | `+routine_id` | — | No gate by design |
| 6 | `draft-message` | `diagnostic` | `internal` | `+audience`, `+subject_ref` | — | No gate by design |
| 7 | `audit-consent` | `diagnostic` | `internal` | `+target`, `consent_ref?` | — | No gate by design |
| 8 | `narrate-week` | `emergent` | `internal` | `+week` | — | No gate by design |
| 9 | `narrate-coherence` | `emergent` | `internal` | `+locus`, `+failing_term`, `+base_rate_ref`, `score_ref?` | — | No gate by design; FW-DEC-006 forbids a bare scalar |
| 10 | `recommend-cull` | `emergent` | `internal` | `+node`, `+rationale` | — | No gate by design; Sovereignty ruling stays open |
| 11 | `route-model-tier` | `runtime-active` | `internal` | `+requested_operation`, `+chosen_tier` | `berd-session-create` | **Authoring-layer** — Berd binds tier by human choice per session |
| 12 | `commit-allocation` | `runtime-active` | `internal` | `+week`, `+allocations` | `operator-review` | **Authoring-layer** — human ruling |
| 13 | `advance-node` | `runtime-active` | `internal` | `+node`, `+advance`, `+evidence_refs` | `operator-review` | **Authoring-layer** — human ruling |
| 14 | `emit-repo-change` | `runtime-active` | `emission` | `+repository`, `+ref`, `+diff_ref` | `operator-review` | **Authoring-layer** — quality gates do not prove authority |
| 15 | `schedule-routine` | `runtime-active` | `emission` | `+schedule`, `+timezone`, `+runner` | `operator-review` | **Authoring-layer** — Berd exposes no checkable schedule file |
| 16 | `send-to-collaborator` | `runtime-active` | `cross-tenant` | `+target`, `+action`, `+message_ref`, `+consent_ref` | `operator-review` | **Authoring-layer**; consent presence check unwired |
| 17 | `operate-in-collaborator-context` | `runtime-active` | `cross-tenant` | `+target`, `+tool`, `+action`, `+consent_ref` | `operator-review` | **Authoring-layer**; consent presence check unwired |
| 18 | `propose-canon-change` | `runtime-active` | `emission` | `+repository`, `+doc_path`, `+diff_ref` | `independent-review` | **Authoring-layer** — reviewer identity is not machine-gated |

Payload values have these normative shapes:

`Slug` means `^[a-z0-9][a-z0-9._-]*$`. `StoreRef` means a relative POSIX path
with no `..` whose resolved real path exists beneath the private store root.
`SnapshotRef` means exactly
`{repository: <repository Slug>, path: <relative POSIX path with no ..>, blob:
"blob:<full-object-id>"}`; repository/path resolution and exact-byte identity use
§5.3 rule 6. `OptionsSnapshotRef` is a `SnapshotRef` whose cited bytes decode as
an Operating Harness proposal-path record at `options-generated` or later, using
a supported `record_schema`, with a non-empty Options table.

| Key(s) | Value shape |
|---|---|
| `node` | `NodeKey`: non-empty slug; registry membership is authoring-layer |
| `source_ref`, `subject_ref`, `score_ref`, `base_rate_ref`, `message_ref`, `diff_ref`, `consent_ref` | `StoreRef`: relative POSIX path, no `..`, resolving to an existing file beneath the private store root |
| `options_snapshot_ref` | one `OptionsSnapshotRef`; permitted only for `score-allocation` and `critique-option` |
| `option_id` | one unique id in the Options table of `options_snapshot_ref` |
| `option_ids` | non-empty array of unique ids in the Options table of `options_snapshot_ref` |
| `routine_id`, `audience`, `tool`, `runner`, `rationale`, `advance` | non-empty string |
| `week` | ISO week string matching `^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$` |
| `locus` | one protocol layer: `semantics | field | taste | frequency | current | flow | stability | resonance | entropy | sovereignty | consonance` |
| `failing_term` | `flow | resonance | entropy` |
| `target` | `{tenant: <non-empty slug>, surface: <non-empty slug>}` |
| `action` | `send-to-collaborator`: literal `send-message`; `operate-in-collaborator-context`: non-empty slug. Every cross-tenant value is compared exactly with consent scope. |
| `requested_operation` | one subject-operation kind from this registry other than `route-model-tier` |
| `chosen_tier` | `haiku | sonnet | opus` |
| `allocations` | non-empty array of unique `{node: NodeKey, size: light | medium | heavy}` entries |
| `evidence_refs` | non-empty array of Backlinks (§5.3 rule 6) |
| `repository` | repository slug resolving exactly once in `operating-store.yaml` |
| `ref` | git ref accepted by `git check-ref-format` |
| `schedule` | `{kind: cron, expression: <valid five-field cron expression>}` |
| `timezone` | IANA time-zone identifier |
| `doc_path` | relative POSIX path with no `..`; the target may be new |

No payload key outside the matching registry row is permitted. A `?` key is
optional and appears at most once; every `+` key is present exactly once.
`consent_ref?` lets `audit-consent` report absence. `score_ref?` is supporting
evidence only:
[`FW-DEC-006`](decisions/DECISION-006-coherence-autopsy-locus-over-score.md)
makes `locus` the finding and requires the failing term and base-rate prior to
accompany every call.

`recommend-cull` records **RECOMMENDED / open**, never RESOLVED, until the human
rules. `draft-message` is not sending; sending is operation 16.

For rows 3–4, `options_snapshot_ref` is input evidence, not a local candidate
home. The operation reads only the blob-identified bytes, returns a diagnostic
value, and cannot modify the cited record, its current path, the observation
record's subject, or any external state. At `evidence-recorded/narrated`, the
same SnapshotRef must appear in `back_links`; this records what was examined and
does not mint write authority.

### 3.3 Diagnostic reads and carrier writes are separate

A diagnostic or emergent operation returns a value and changes **no state**,
including the Operating Harness record. There is no evidence-store carve-out. A
separate carrier-maintenance action records what happened to the carrier:

| Carrier action | Regime | Channel | Required payload | Enforcer | Gate status |
|---|---|---|---|---|---|
| `validate-record` | ratified v0 `ship-gate` | `internal` | `+record_path` | `operating-harness-record-validator` | **Unwired** — executable absent |
| `reject-malformed-intent` | ratified v0 `ship-gate` | `internal` | `+candidate_ids`, `+findings` | `operating-harness-record-validator` | **Unwired** — executable absent |
| `verify-back-links` | ratified v0 `ship-gate` | `internal` | `+record_path` | `operating-harness-record-validator` | **Unwired** — must refuse mismatch; never rewrites hashes |
| `record-transition` | `carrier-write` — not an `AuthorityMode` | `internal` | `+record_path`, `+from`, `+to`, `+actor`, `+at`, `+result_ref` | `operating-harness-record-validator` | **Unwired** — executable absent |

Carrier values are: `record_path` = a `StoreRef` resolving to the record being
checked; `candidate_ids` = a non-empty array of unique non-empty identifiers;
`findings` = a non-empty array of
`{code: <non-empty Slug>, message: <non-empty string>}`; `from` = one lifecycle
state or `null`; `to` = one lifecycle state; `actor` = non-empty identifier; `at`
= ISO-8601 timestamp with offset; and `result_ref` = either a `StoreRef` resolving
to the artifact that caused or records the transition, or the literal
`#operation-result` when `record-transition` persists a diagnostic/emergent
return in the record body.

`transition.action` must be `record-transition`. The action is obligated to write
only the record identified by `record_path`, and only to carry the transition
payload, fields first introduced by the new state, and the mutable fields named
in §5.3. Preserving prior fields requires history and is therefore explicitly
authoring-layer until a store-level enforcer exists. It is not a subject operation
and grants no subject-operation authority. It **records** the claim carried by the
new state; it does not authorize or verify that claim. Until the validator exists,
every transition is authoring-layer evidence rather than an enforced fact. The
three ratified `ship-gate` modes remain Unwired; ratification fixes their regime
but does not make the absent validator execute.

This split is the N8 boundary: diagnosis reads; recording records; neither name
can launder the other.

**When a subject operation does not clearly fit a kind, it is not run.** An
unlisted subject operation requires a registry revision and human ruling first.
The listed v0 entries are bound by FW-DEC-010; no unlisted kind inherits that
authority.

### 3.4 Enforcement tally — stated, not implied

| State | Rows | Which | Legal lifecycle |
|---|---|---|---|
| **Enforced** | 0 | none | none enforced |
| **Subject: no gate by design** | 10 | subject rows 1–10 | short observation path; record-shape validation unwired |
| **Subject: authoring-layer human gate** | 8 | subject rows 11–18 | full proposal path; record-shape validation unwired |
| **Carrier: unwired ratified ship-gate** | 3 | `validate-record`, `reject-malformed-intent`, `verify-back-links` | checks either path; executable absent |
| **Carrier: unwired carrier-write** | 1 | `record-transition` | writes either path; executable absent |

Each operation or carrier action has one primary status. Subject rows 16–17
additionally carry an unwired structural consent-presence check; consent substance
and scope honesty remain authoring-layer obligations. Subject row 15 has no
machine-readable runtime surface. Across the original authority-bearing set,
18 subject rows plus three carrier checks carry **21 ratified v0 bindings**;
`record-transition` is outside `AuthorityMode`. The count is unchanged by the
short-form lifecycle; representability changed. Rows 1–10 now have a legal
terminal path, but no new gate or enforcement claim.

---

## 4. The missing enforcer

The proposed standalone enforcer is
`bin/validate-operating-harness-record <path>...`. **It does not exist and is not
wired into `make protocol-check`.** Per FW-DEC-007, it is separate from
`bin/validate-manifest`. This spec therefore defines its future contract without
calling any operation enforced.

The executable would parse the registry and record grammars, exit non-zero on a
violation, and run as a whole-file static check. §5 separates mechanically
checkable rules from authoring-layer invariants. Building that executable is a
follow-up under the structurally cleared and human-ratified v0 shape. Neither
clearance nor ratification substitutes for implementation. The executable is not
part of this carrier-spec task.

What it will still not enforce, stated now so it is never implied later:

1. **Trigger.** It runs `on_demand` (or inside `make protocol-check`). Berd has no
   `event` and no `continuous` trigger, so it **cannot** fire on a state
   transition. A record can sit invalid between invocations. Claude Code's
   `SessionStart` hook (`bin/facework-session-check`) is Claude Code-only; its
   per-session sweep is the closest available session-bound approximation to an
   event gate. The repo also has a `PreToolUse` hook for skill invocation;
   neither hook observes record transitions, so neither is the gate specified
   here.
2. **Consent substance.** That a consent file exists and names a scope and expiry
   is checkable. That the person actually consented is not.
3. **Scope honesty.** That a `cross-tenant` act stayed inside its declared scope is
   not checkable from the record. GAMUT's invariant #5 in a harder form.
4. **Transition legality.** A whole-file check cannot prove transition order.
   Repository history is audit evidence only (§6.2).
5. **Append-only history.** Git records ordinary rewrites but does not prevent
   amend, squash, or force-push. No protected append-only store exists here.

The subject registry, carrier-action grammar, consent grammar, backlink grammar,
state matrix, and body schemas below are the implementation inputs; semantic
truth and transition provenance remain authoring-layer even after a validator
exists.

---

## 5. The on-disk record format

An Operating Harness record is a file. Berd has **no memory port at all** — `MemoryMap` absent, the
weakest of five validated runtimes — so there is no store to write to and no
retrieval to rely on. Git-tracked files are the evidence store. That is a
constraint: it means the record must be legible, statically checkable, and
diffable *without* a runtime, because no runtime will hold it.

### 5.1 Where the store lives

**Three separate questions.** What storage properties are required, which private
repository supplies them, and which directory holds records.

**Storage contract — specified.** Operating Harness records require a
git-tracked, access-controlled private store. The public canon repo is not an
admissible store because records name real collaborators and carry their deal
states; **N10** makes that a sovereignty constraint. The required property is
private, diffable git history.

**Concrete repository — ratified for v0, not initialized here.** FW-DEC-010
ratifies `personal/` as its own access-controlled private git repository. It is
not content of the public Facework repository even when its checkout is nested
beneath that working directory. This session does not create or initialize it. A
redacted index may later be published, but the records may not enter the public
canon repo.

**Record directory — ratified for v0, not created here.** FW-DEC-010 ratifies
`personal/operating/` from the public checkout's view, which is `operating/` from
the independent private repository root. **This spec creates no directory.** The
v0 convention is:

```
personal/                    # independent private git repository
  operating/
    <node>/
      2026-08-21-001-first-worked-flow.md
```

The `operating/` ruling rests on one argument: `harness-bundle/` (§10) is a **derived,
one-way, regeneratable** view of the Runtime Ports whose files "do not propagate
back." An Operating Harness record is the exact opposite — **authored,
advanced in place, and the evidence itself.** Sharing a root would put a derived
artifact and a source-of-record artifact under one name, which is how a hand-edit
to a derived copy becomes plausible. A root that does not contain the word
"harness" also preserves FW-DEC-007's sense boundary. Creating the directory is
a follow-up implementation action, not part of this ratification session.

Filename: `<yyyy>-<mm>-<dd>-<seq>-<slug>.md`. Date is the `intent-captured` date
and does not change as the record advances. `<seq>` is per-node per-day.

The ratified private store root carries `operating-store.yaml`, the resolver for
every `repository` slug used by a context snapshot or backlink and the first
implementation's write policy:

```yaml
write_policy:
  mode: single-writer
  writer_id: harper
repositories:
  private-operating: "."
  node-alpha-code: "../node-alpha-code"
```

Paths are local checkout paths and stay in the private store. A missing slug or
missing checkout makes the reference unverifiable; the validator refuses it.
FW-DEC-010 ratifies the first implementation as **single-writer for the entire
store**, with `writer_id: harper`: only that identity may perform
`record-transition`; every parallel session is read-only.
`transition.actor` must equal `writer_id`. A writer handoff requires a clean,
committed store, no active write, and a separate commit changing `writer_id`
before the successor writes. A future writer change requires a separate human
ruling. Multi-writer CAS and merge semantics are deferred.

### 5.2 Frontmatter

One record, one operating intent, advancing in place. This example is
`authority-checked`, so terminal-only keys are absent.

```yaml
---
artifact: OperatingHarness       # qualified carrier discriminator (FW-DEC-007)
record_schema: 0.1.0-draft       # THIS record's schema. Never the repo VERSION.
id: oh-nodealpha-2026-08-21-001
revision: 1
supersedes: null                 # id of a DIFFERENT intent this replaces
state: authority-checked
node: node-alpha                 # node registry key — the one home
allocation: medium               # light | medium | heavy (verbatim)
intent:
  claim: "Advance node-alpha by handing the wired generator to its counterparty."
  source: field-notes/fn-0NN.md  # store-relative; the private store's own layout
context:
  repository: private-operating
  path: node-registry/node-alpha.md
  blob: "blob:<full-object-id>"
operation:
  kind: send-to-collaborator     # mode/channel/enforcer derive from §3.2
  payload:
    target: { tenant: counterparty-alpha, surface: inbox }
    action: send-message
    message_ref: drafts/message-0NN.md
    consent_ref: consents/counterparty-alpha.md
proposal:
  option_id: option-2
authority_check:
  status: settled
review:
  reviewer: operator
  decision: confirmed
  at: 2026-08-21T00:40:00-05:00
  evidence_ref: review-artifacts/review-0NN.md
transition:
  action: record-transition
  record_path: "operating/node-alpha/2026-08-21-001-first-worked-flow.md"
  from: artifact-proposed
  to: authority-checked
  actor: operator
  at: 2026-08-21T00:40:00-05:00
  result_ref: review-artifacts/review-0NN.md
---
```

Absent keys are meaningful. `mode`, `channel`, and `enforcer` never appear in a
record. A diagnostic or emergent proposal has no `gate` or `review`; a narrated
terminal does carry `outcome: narrated`.

Record paths are relative to the independent private repository root. The example
therefore resolves publicly as
`personal/operating/node-alpha/2026-08-21-001-first-worked-flow.md`; this spec
records the ratified path but does not create it.

An observation-path allocation critique uses this payload fragment while the
local Constraints, Options, Tableau review, and Proposal rationale sections stay
empty:

```yaml
operation:
  kind: critique-option
  payload:
    options_snapshot_ref:
      repository: private-operating
      path: "operating/node-alpha/2026-08-20-001-options.md"
      blob: "blob:<full-object-id>"
    option_id: option-2
```

At `evidence-recorded/narrated`, `back_links` contains that exact triple:

```yaml
back_links:
  - repository: private-operating
    path: "operating/node-alpha/2026-08-20-001-options.md"
    blob: "blob:<full-object-id>"
```

These are private-repository-relative paths under the ratified
`personal/operating/` directory; no directory is created here.

#### Canonical serialization

For the parsed structures in this section, **canonical means one semantic value
has one accepted byte string**. The validator decodes strictly, encodes the
decoded value with the algorithms below, and accepts the source only when the
re-encoded bytes equal the source bytes. A merely equivalent YAML or Markdown
representation is refused.

The common byte rules apply to the complete consent file and, independently, to
each structured table slice inside the record body: strict UTF-8 without BOM;
Unicode scalar values normalized to NFC before validation, sorting, or emission;
LF line endings; exactly one final LF in the encoded slice; no tabs, trailing
spaces, blank line at the beginning or end of the slice, or carriage returns.
Sorting is ascending lexicographic order of the normalized UTF-8 byte strings.
JSON string encoding below means RFC 8259 double-quoted strings: escape quotation
mark and reverse solidus; decoded control characters are refused, so no alternate
control-character escape exists; do not escape solidus or printable non-ASCII
characters.

**Consent YAML encoder and decoder.** The consent file is the restricted YAML
1.2 block form shown below, not general YAML. The encoder emits top-level keys in
the exact order `consent_schema`, `tenant`, `scope`, `granted_by`, `granted_at`,
`expires_at`; uses exactly two spaces per indentation level; emits no document
marker, flow collection, comment, tag, anchor, alias, merge key, or blank line;
and emits every scalar value as a JSON-encoded double-quoted string. It sorts
each unique `actions` sequence and then sorts `scope` entries by `surface`
followed by the encoded actions sequence. Sequence markers are exactly `- `.

The decoder first applies the common byte checks, then parses only that grammar:
the six top-level keys in that order; `scope` as a non-empty block sequence;
each scope mapping with exactly `surface` then `actions`; and `actions` as a
non-empty block sequence. Unknown or duplicate keys, alternate indentation,
plain or single-quoted scalars, alternate key order, unsorted collections, and
all other YAML spellings are refused. It JSON-decodes each double-quoted scalar,
applies the value grammar, canonically re-encodes the entire consent object, and
requires byte equality.

A consent reference resolves to a YAML file with exactly these keys and shapes;
unknown keys are rejected:

```yaml
consent_schema: "0.1.0-draft"
tenant: "counterparty-alpha"
scope:
  - surface: "inbox"
    actions:
      - "send-message"
granted_by: "counterparty-owner-id"
granted_at: "2026-08-20T14:00:00Z"
expires_at: "2026-08-27T14:00:00Z"
```

`scope` and `actions` are non-empty; actions are unique Slugs and scope surfaces
are unique. Consent timestamps use the timestamp grammar below. The canonical
encoder converts them to UTC and emits `Z`, omits the fractional part when zero,
and otherwise removes trailing fractional zeroes.

**Markdown table encoder and decoder.** The four structured body tables use the
exact header names and column order in §5.4. The encoder emits a header as
`| ` + cells joined by ` | ` + ` |` + LF, then an identically shaped delimiter
row whose every cell is `---`. Every body row uses that same form: exactly one
ASCII space between each boundary pipe and cell bytes, including empty cells;
no alignment colons or additional padding. Constraints and Options rows sort by
`id`; Tableau rows sort by `option_id`; Enforcer-gap rows sort by normalized
instant, then `kind`, then `detail`.

Before cell emission, every string is NFC-normalized and literal CR, LF, and NUL
are refused. Ordinary cells encode reverse solidus as `\\` and then pipe as
`\|`. Array cells first sort their unique normalized strings, serialize them as
a minified JSON array with the JSON string rules above (for example
`["constraint-a","constraint-b"]`; `[]` is empty), then apply the same
table-layer reverse-solidus and pipe escaping.

The decoder requires the exact header and delimiter bytes. It scans each
physical row left-to-right; a pipe is a boundary only when preceded by an even
number of consecutive reverse solidus bytes. It requires the opening and closing
boundary pipes and exactly one padding space on each side of every cell, removes
that padding, and decodes only `\\` → `\` and `\|` → `|` left-to-right; every
other table-layer escape is refused. Array columns are then parsed as minified
JSON string arrays. The decoder applies the column value grammar, uniqueness and
row-order rules, re-encodes the complete table, and requires byte equality. This
is the only accepted table and array-cell representation.

**Comparable timestamp grammar.** `granted_at`, `execution.at`, and `expires_at`
each use the RFC 3339 subset
`YYYY-MM-DDTHH:MM:SS[.fraction](Z|+HH:MM|-HH:MM)`, where `fraction` is one to
nine decimal digits: a full date and time plus an explicit UTC designator or
numeric offset. Date-only and offset-free local values are refused. Calendar
fields must form a real Gregorian date; offset hours are `00`–`14`, offset
minutes are `00`–`59`, `14` permits only `00` minutes, and leap-second `:60` is
refused. For comparison, parse each value to an instant, subtract its offset,
and normalize it to UTC epoch nanoseconds (right-padding the fraction to nine
digits). Chronology is numeric comparison of those normalized instants, never
lexical comparison of timestamp strings.

### 5.3 What makes a record valid

Validity has a mechanically checkable core and authoring-layer invariants. The
draft does not claim the second set can be proved by a file validator.

#### Mechanically checkable core

1. **Discriminator and identity.** `artifact: OperatingHarness`, `record_schema`,
   `id`, non-negative `revision`, `state`, `node`, and `intent.claim/source` are
   present. A Facework release version is never copied into the record. The only
   permitted top-level keys are `artifact`, `record_schema`, `id`, `revision`,
   `supersedes`, `state`, `node`, `allocation`, `intent`, `context`, `operation`,
   `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`,
   `refusal_reason`, `back_links`, and `transition`; every unknown key is
   rejected. Nested mappings are also closed: `intent={claim,source}`;
   `context={repository,path,blob}`; `operation={kind,payload}`;
   `proposal={option_id}`; `authority_check={status}`;
   `execution={at}`; `transition={action,record_path,from,to,actor,at,result_ref}`;
   and each backlink is `{repository,path,blob}`. Payload keys remain closed by
   rule 3; gate and review keys are closed by their mode-specific shapes below.
2. **Registry derivation.** When `operation` is present, `operation.kind` resolves
   to exactly one §3.2 row. The record contains no `authority`, `mode`, `channel`,
   or `enforcer` key.
3. **Payload conformance.** `operation.payload` contains every `+` key in its
   registry row, contains only keys allowed by that row, and every value conforms
   to §3.2's value grammar.
4. **Referential integrity.** Constraints and Options ids are non-empty and unique
   within their respective tables. `proposal.option_id` and Tableau rows each
   resolve to exactly one row in the local Options table. For
   `score-allocation` and `critique-option`, `options_snapshot_ref` resolves and
   each payload `option_id`/`option_ids` resolves to exactly one row in that
   cited record's Options table; those ids never resolve against the empty local
   observation-path table. Every `resolves`/`worsens` id resolves to exactly one
   Constraints-table row in the record that owns the Options row. No free or
   multiply-resolving reference is accepted.
5. **Consent presence and shape.** A derived `cross-tenant` operation requires
   `consent_ref`. That file must exist and contain `tenant`, non-empty `scope`
   entries of `{surface: <non-empty Slug>, actions: <non-empty unique Slug[]>}`,
   `granted_by`, `granted_at`, and `expires_at`, encoded by the canonical consent
   grammar above. All three chronology values — `granted_at`, `execution.at`,
   and `expires_at` — require explicit offsets under the comparable timestamp
   grammar. The consent tenant equals
   `operation.payload.target.tenant`; target surface and action match one scope
   entry. A terminal `committed` cross-tenant record requires
   `execution.at`, and the chronology check is
   `normalize(granted_at) <= normalize(execution.at) < normalize(expires_at)`.
   A pre-execution transition cannot settle that check; `transition.at` is
   carrier history, not the time of the external act.
6. **Backlink shape.** Each backlink is
   `{repository, path, blob: "blob:<full-object-id>"}`. `repository` resolves via
   the store's repository map; `path` is relative; the full object id equals
   `git hash-object` for the cited bytes. A mismatch is refused, never rewritten.
   An observation-path terminal repeats every payload `SnapshotRef` input as an
   exactly equal backlink triple.
7. **Transition, state shape, and outcome coupling.** `transition.action` is
   `record-transition`; `transition.record_path` equals the validator's input
   path; `transition.actor` equals `operating-store.yaml.write_policy.writer_id`;
   `transition.to` equals top-level `state`; `transition.at` is ISO-8601 with
   offset; and `transition.result_ref` is either a resolving `StoreRef` or the
   allowed `#operation-result` literal. The state matrix below controls required
   and forbidden fields. `pending` is never a terminal verdict; terminal outcome
   is coupled to the derived authority mode and settled decision where that mode
   carries one.
8. **One home per concept.** `node`, `allocation`, claim, context snapshot,
   local constraints, local options, proposal payload, `execution.at`, Operation
   result, and backlinks each have the single homes named below. A referenced
   Options snapshot remains owned by its cited record; the observation record
   carries only its `SnapshotRef` plus selected ids, never copied option rows. A
   second authored copy is invalid.

#### State matrix

`Common` means the fields in rule 1 plus `transition`, whose `action` is
`record-transition` and whose `record_path` resolves to the record being checked.
The first transition uses `from: null`; later transitions name the immediately
prior state. `Context` is a snapshot reference, not copied node-state prose:
`{repository, path, blob}`.

`refusal_reason` is terminal-only: it is forbidden in every state and terminal
variant except `evidence-recorded/refused`, where it is a non-empty string. This
global prohibition is part of every Forbidden cell below.

| State | Required beyond Common | Forbidden |
|---|---|---|
| `intent-captured` | — | `context`, `allocation`, `operation`, `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links` |
| `context-bound` — proposal path | `context`, `allocation` | `operation`, `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links` |
| `context-bound` — observation path | `context`, `allocation`; complete `operation` whose derived mode is `diagnostic` or `emergent`; rows 3–4 additionally carry a resolving `options_snapshot_ref` and ids resolving inside it | `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links`; local Constraints, Options, Tableau review, Proposal rationale, and Operation result must be empty |
| `options-generated` — proposal path | `context`, `allocation`; non-empty Constraints and Options tables | `operation`, `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links` |
| `tableau-reviewed` — proposal path | prior proposal-path fields; non-empty Tableau review | `operation`, `proposal`, `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links` |
| `artifact-proposed` — proposal path | prior proposal-path fields; `operation` whose derived mode is `ship-gate` or `runtime-active`; `proposal.option_id`; complete `operation.payload` | `authority_check`, `gate`, `review`, `execution`, `outcome`, `back_links` |
| `authority-checked` — proposal path | prior proposal-path fields; mode-specific `authority_check.status` and authority shape below | `execution`, `outcome`, `back_links` |
| `evidence-recorded` — proposal path | prior proposal-path fields; `committed` or `refused` terminal variant below | fields forbidden by that variant |
| `evidence-recorded` — observation path | prior observation-path fields; `narrated` terminal variant below | `proposal`, `gate`, `review`, `execution`; Constraints, Options, Tableau review, and Proposal rationale must remain empty |

Legal transitions are exactly the two paths in §2. A record selects the
observation path by introducing a `diagnostic`/`emergent` operation at
`context-bound`; after that it cannot enter a proposal-path state. The Operation
result section is empty until `evidence-recorded`. An Options snapshot is an
immutable external input and does not populate any local proposal-path section.
Only `record-transition` may populate the Operation result while advancing to
that terminal state.

Mode-specific authority shapes:

- `ship-gate`: `authority_check.status: settled` and
  `gate` with exactly `{verdict, checked_at, evidence_ref, contract_version}`;
  `verdict: pass | watch | refuse`; `checked_at` is ISO-8601 with offset;
  `evidence_ref` is a resolving `StoreRef`; `contract_version` is a non-empty
  string identifying the gate contract; no `review`.
- `runtime-active`: `authority_check.status: settled` and
  `review` with exactly `{reviewer, decision, at, evidence_ref}`; `reviewer` is a
  non-empty stable identity; `decision: confirmed | rejected`; `at` is ISO-8601
  with offset; `evidence_ref` is a resolving `StoreRef`; no authored gate. If the
  human has not ruled, the record remains `artifact-proposed` and carries no
  authority check.
- `diagnostic` or `emergent`: on the observation-path terminal only,
  `authority_check.status: not-applicable`; no `gate` and no `review`.

Terminal variants:

- `committed`: proposal path only; `ship-gate` with `pass|watch`, or
  `runtime-active` with `confirmed`; requires non-empty `back_links`. A derived
  `cross-tenant` operation additionally requires `execution.at` as the ISO-8601
  timestamp of the external act; `execution` is forbidden for every other
  committed operation. `refusal_reason` is forbidden.
- `refused`: proposal path only; `ship-gate` with `refuse`, or `runtime-active`
  with `rejected`; requires non-empty-string `refusal_reason`; backlinks optional;
  `execution` is forbidden because no act occurred.
- `narrated`: observation path only; `diagnostic` or `emergent`; requires
  `authority_check.status: not-applicable`, a non-empty Operation result,
  `transition.result_ref: "#operation-result"`, and non-empty `back_links` to the
  exact input bytes examined. It carries no Options, Tableau review, proposal,
  `gate`, `review`, `execution`, or `refusal_reason`. The terminal record is the
  result artifact and does not self-hash.

#### Authoring-layer invariants

- Consent was actually granted by the named person; file shape cannot prove it.
- The operation stayed within consent scope in the external system.
- `node` resolves to the tenant's private registry and the context snapshot was
  the right one for the judgment.
- Once introduced, `artifact`, `record_schema`, `id`, `supersedes`, `node`,
  `intent`, `allocation`, `context`, Constraints, Options, Tableau review,
  Proposal rationale, Operation result once populated, `operation`, `proposal`,
  `authority_check`, `gate`, `review`, and `execution` remain byte-identical once
  introduced across later revisions. A transition may change `revision`, `state`,
  and `transition`, may append Enforcer-gap rows, and may add only fields first
  required by the new state. This requires prior history and is not a whole-file
  check.
- `transition.from → to` followed exactly one of §2's two legal paths. Git can
  help audit this but does not prove it.
- `revision` is monotonic across the lineage; `supersedes` resolves; concurrent
  forks do not occur under the single-writer restriction. The validator can
  compare history but cannot prove that no second writer acted outside it.

### 5.4 Body

Fixed sections, in order. The validator reads frontmatter plus the table schemas
below; prose rationale remains human-read.

```markdown
## Constraints        <!-- id | source | ref | weight | statement -->
## Options            <!-- id | advance | size | resolves | worsens -->
## Tableau review     <!-- option_id | verdict | rationale -->
## Proposal rationale <!-- explanation only; payload stays in frontmatter -->
## Operation result   <!-- persisted only by record-transition at terminal -->
## Enforcer-gap log   <!-- at | kind | detail -->
```

**Constraints** is the one home for forces and constraints authored by this
record. **Options** is the one home for candidate advances authored by this
record. `resolves` and `worsens` contain only Constraints ids. A diagnostic
`options_snapshot_ref` points to another record's exact bytes; it does not copy
those rows into this body. Context lives only in the frontmatter snapshot
reference; proposal payload and backlinks live only in frontmatter. The body
never duplicates them.

Table value grammar:

- **Constraints:** `id` is a unique `Slug`; `source` is a non-empty `Slug`; `ref`
  is a `StoreRef`; `weight` is `hard | soft | context`; `statement` is non-empty.
- **Options:** `id` is a unique `Slug`; `advance` is non-empty; `size` is
  `light | medium | heavy`; `resolves` and `worsens` are arrays of unique
  Constraints ids, with no id in both arrays.
- **Tableau review:** each Options id appears exactly once; `verdict` is
  `advance | revise | cull`; `rationale` is non-empty. Exactly one option has
  `verdict: advance` before `artifact-proposed`, and it equals
  `proposal.option_id` once that field exists.
- **Proposal rationale:** non-empty prose from `artifact-proposed` onward; it may
  explain but never restate the structured payload.
- **Operation result:** empty before `evidence-recorded`. For a narrated terminal,
  its first nonblank line is `Result-kind: <kind>` and the remaining body is
  non-empty. `<kind>` derives without a second authored map:
  `draft-message → draft`; `recommend-cull → recommendation`; every other
  diagnostic operation → `findings`; every other emergent operation →
  `narration`. The diagnostic/emergent operation returns the bytes;
  `record-transition` is the only action that persists them here.
- **Enforcer-gap log:** zero or more rows; `at` is ISO-8601 with offset; `kind` is
  one `RecordEnforcerGap`; `detail` is non-empty.

**Enforcer-gap log** is load-bearing, not a courtesy. **N5** / **G5**: if the
operator prompted it, the Operating Harness failed. Each such event is logged here as
`enforcer-gap: manual-prompt-fallback | unwired-routine | missing-gate` (the
record vocabulary in §A.4) — *"log the failure, don't normalize the patch."* Given §3.4's tally, this log is the honest instrument for
the gap between this spec and a running Operational layer.

---

## 6. The closing signal

`loop-model.md` carries the sub-rule earned on 14th & Co: **a closing signal must
produce an artifact.** An Operating Harness that converges only in conversation has not
closed its loop — it has stopped, and the next run cannot diff against it, so the
loop silently reopens.

### 6.1 What `evidence-recorded` produces

**The terminal record itself, committed.** Not a summary of it, not a review
message — the file, in terminal state, in git. It carries:

- `state: evidence-recorded` and a settled `outcome` (rule 7).
- `back_links[]` — non-empty for `committed` and `narrated`. Each entry carries a
  repository id, path, and **full git blob object id**.

**Blob hash, not commit SHA** — and for reasons this repo already paid for. The
canon provenance stamps were once commit SHAs, and a commit SHA was wrong two
independent ways: dirty-source stamps name a commit whose content is not what was
derived, and squash-merge orphans the branch commit the moment the PR lands.
A blob hash is invariant across commit, squash, rebase, and branch deletion, and
identifies the exact bytes. An Operating Harness's back-link has the same job —
prove which bytes the advance produced — so it takes the same fix rather than
re-learning it. The public record is the provenance correction in
[`ROADMAP.md`](../ROADMAP.md), with the mechanism documented and enforced in
[`sync-canon.mjs`](../examples/face.works/prototype/scripts/sync-canon.mjs).

### 6.2 What makes it re-diffable

Four properties make the artifact re-diffable. They do not prove legal lifecycle
transitions.

1. **Stable path.** The record advances in place; the path does not change. The
   next run reads the same path.
2. **Git history is audit evidence, not transition proof.** `git log --follow -p
   <record>` shows committed snapshots that remain reachable. It does not show
   uncommitted states, guarantee one transition per commit, or survive every
   amend/squash/force-push path. The explicit `transition` block makes the claimed
   step inspectable; legality remains authoring-layer until a store enforces it.
3. **Back-links verify, or closure is void.** Hash the current cited path bytes
   with `git hash-object` and compare them with the recorded full object id. A
   mismatch proves the current path bytes differ from the cited bytes. An absent
   object or unavailable repository makes provenance **unverifiable**; it is not
   proof that the evidence changed. Either condition prevents closure.
4. **The next intent is a diff, not a memory.** The next run compares the terminal
   record's claim against current node state. Divergence is the next
   `intent-captured`, and it cites the prior record's `id`. No runtime memory is
   required — which is the only design that survives a runtime with no
   `MemoryMap`.

### 6.3 Per-period closure

One record closes one operating intent — the **task loop**. The **product loop**
(the review) needs its own artifact or it stops rather than closes, by the same
rule. Authored review evidence lives under
`<operating-root>/review-artifacts/`; derived period summaries never do. The
product-loop closing artifact is a **review index** at
`<operating-root>/reviews/<yyyy>-W<ww>.md`: the terminal records, their outcomes,
and their enforcer-gap entries. It carries frontmatter
`{week, generated_at, record_schema, source_records[]}` and a table
`record_id | node | operation | outcome | record_blob | evidence_count |
enforcer_gaps`.

Two constraints on that index. It is **derived** from the records, so it is never
hand-edited to say something the records do not (the derived-copy rule, applied
one layer down). And a week with only `intent-captured` records is logged
`interpretive-only`; N9 requires downstream execution within that same week.
No generator or checker exists yet, so the product-loop closing signal is
specified but **unwired**.

---

## 7. Refusal boundaries

The Operating Harness must refuse **ten** moves. Ordered by how likely each is to
actually happen in this practice.

1. **Authority laundering.** An operation may not be called `diagnostic` if
   any state changed. *Diagnostic means read; if state changed, it wasn't
   diagnostic — it was unauthorized* (**N8**, **G6**). Structural in §5.3
   and §3.3: diagnostics/emergent operations return values;
   `record-transition` records them. There is no evidence-store carve-out.

2. **Sovereignty violation.** An operation whose registry row derives
   `cross-tenant` is refused without a scoped, unexpired consent record. *My
   context is mine. Their context requires their consent* (**N10**, **G10**).
   The record cannot author `channel: internal` to bypass this check.

3. **Theater.** A record in `artifact-proposed` is not an advance. Only
   `evidence-recorded` + `committed` + resolving back-links is. *Report without
   evidence is an announcement, not execution* (**N1**, **G1**). §A.4 forbids
   unqualified "done."

4. **Dashboard-as-system / review-surface-as-source-of-truth.** The review surface
   (§A.5) and review index are read-side views, not the Operational layer. They do
   not define node state and cannot be edited to assert an advance no record
   carries (**N2**, **G4**; the Design Harness's canvas refusal,
   subject-swapped).

5. **Counterfeit sovereignty closure.** An agent may recommend a cull or a
   Sovereignty-loop exit; it may never record one as decided. Record as
   **RECOMMENDED / open** until the human rules. Earned on 14th & Co, where
   instrumentation pre-wrote a founder's scope cull as ratified before he decided
   — the sovereignty floor breached from below: not delegating the call,
   counterfeiting it.

6. **Prompt-as-enforcer.** The operator typing the thing is not the Operational layer
   running. Log `enforcer-gap: manual-prompt-fallback` in §5.4 and leave it
   visible. *If I prompted it, the layer failed. Log the failure, don't normalize the
   patch* (**N5**, **G5**).

7. **Carrier redefining the gate.** `operation.kind` names the registry row whose
   enforcer applies; the record never authors an enforcer or restates its
   threshold, score, or rule. Two authoritative copies of a
   threshold is drift with extra steps. *Carriers name the gate. Enforcers run
   the gate* (**G8**).

8. **Silent doctrine change.** An Operating Harness cannot amend canon — `PROTOCOL.md`,
   `CONSTITUTION.md`, `theories/`, `standards/README.md`,
   `methodology/build-methodology.md`. `propose-canon-change` drafts; canon
   lands as a reviewed PR by someone who is not the drafter, with `sync-canon`
   run and the regenerated copy committed. An Operating Harness never hand-edits a derived
   copy.

9. **Interpretive-only as substitute.** Semantics revision is foundation, not
   deliverable. A week producing only `intent-captured` records is logged
   `interpretive-only` (**N9**, **G9**).

10. **Container-in-disguise.** A collaborator must be able to succeed without
    learning the Operating Harness vocabulary or adopting the operator's private
    store. Cross-tenant payloads carry only the minimum target, action, and consent
    evidence needed for the act; they never require the collaborator to enter the
    operator's system (**N7**, **G3**).

These refusals keep the Operating Harness from becoming a hidden agent runtime
with operating words painted on top.

> Note on reuse: the source pattern's §11 opens *"must refuse five moves"* and
> then lists six. Small, but it is exactly the drift this spec is trying not to
> inherit, so the count here is stated once and matches.

---

## 8. Type sketch — non-normative

**The normative form is §3.2's subject registry, §3.3's carrier-action grammar,
and §5's record grammar.** This sketch
is an argument aid.

I agree with the brief that TypeScript is the wrong altitude, and want to sharpen
*why*, because "no compiler" is only half of it. GAMUT's v0.2.2 earned its type by
being **compiler-verified against illegal shapes** — `tsc` rejecting seven bad
probes is what made the claim real. A TS file in a docs repo gets none of that: it
is prose that resembles code, which is worse than prose, because it *looks*
enforced. Writing it would reproduce this repo's recurring defect class in a new
medium.

There is a real binding target here, and it is not TypeScript. Per FW-DEC-007,
the Operating Harness record uses a **standalone** JSON Schema and standalone
validator; it never becomes a manifest feature. §5.3 distinguishes mechanically
checkable structure from authoring-layer truth. Until then, §4's absent
standalone validator is named as a gap.

```ts
// NON-NORMATIVE sketch. Nothing compiles this. §5.3 is normative.

type AuthorityMode = "ship-gate" | "runtime-active" | "diagnostic" | "emergent"
type ActionSize    = "light" | "medium" | "heavy"
type Outcome       = "committed" | "refused" | "narrated"
type RecordEnforcerGap = "manual-prompt-fallback" | "unwired-routine" | "missing-gate"

// RegistryKind and PayloadFor are generated from §3.2; they are not re-declared.
// Mode, channel and enforcer derive from the same row and are not record fields.
type Operation<K extends RegistryKind> = {
  kind: K
  payload: PayloadFor<K>
}
```

The sketch's only real claim: record types must be generated from the registry,
not maintained as a second list. Cross-tenant rows require `consent_ref` through
`PayloadFor<K>` while `channel` remains derived.

---

## 9. What this composes with — and what it does not

**N4**: *anything built must compose with a running enforcer. Documentation alone
is not built.* By that test **this spec is not built.** It is a carrier
specification with zero automatically enforced operations.

Honest status per part:

| Part | Status |
|---|---|
| Five parts (§1) | Specified. Subject-swap holds; the `cross-tenant` channel is new. |
| Lifecycle (§2) | Seven-state vocabulary retained; full proposal path for rows 11–18 plus the author-selected short observation path for rows 1–10. **Structurally cleared and ratified for v0; unwired.** |
| Authority matrix (§3) | **Ratified for v0, not automatically enforced:** 0 enforced / 10 no-gate observation-path operations / 8 authoring-layer proposal-path operations / 3 unwired carrier checks; `record-transition` is separately ratified as `carrier-write`, outside `AuthorityMode`. |
| Refusals (§7) | Specified. Mechanical portions depend on the absent validator; semantic portions remain authoring-layer. |
| Record format (§5) | Specified with mechanical and authoring-layer rules separated. **No validator exists.** |
| Closing signal (§6) | Task-loop artifact specified; product-loop review index specified but unwired. Git supplies audit evidence, not transition proof. |

Next increment, smallest first: in a separate implementation session, satisfy
the `/personal/` ignore prerequisite, initialize the ratified private repository
and `operating/` directory, then build
`bin/validate-operating-harness-record`. This session performs none of those
actions. A worked record follows only after the validator exists.

---

## 10. Promotion path — not taken here

This note is **not canon**. It is not in `CANON_SOURCES`
(`examples/face.works/prototype/scripts/sync-canon.mjs`), so the `sync-canon` gate
does not apply. FW-DEC-007 governs its separate namespace.

What promotion would oblige, stated so it is not discovered later:

- This document declares the carrier record → a standalone
  `operating-harness-record.schema.json` defines it →
  `bin/validate-operating-harness-record` enforces it. Those three move together
  or promotion refuses. The schema and executable **must remain separate from**
  `facework.manifest.schema.json` and `bin/validate-manifest`; the carrier format
  must not enter `PROTOCOL.md` §9–§12. The prior runtime-conformance declaration
  and validator disagreed for twenty releases; that history is public in
  [`ROADMAP.md`](../ROADMAP.md) and the
  [`§9 enforcement audit`](section9-enforcement-audit-2026-08-19.md).
- `record_schema` versions the standalone carrier schema. It is not the Facework
  release version or manifest schema version, and none moves to match another.

**Bar for promotion:** one worked flow against a real node, closed to
`evidence-recorded` with resolving back-links, plus the validator running in
its own gate (which may be invoked independently by `make protocol-check`, but
never through `bin/validate-manifest`). Same bar the Design Harness cleared — a
worked flow plus a mechanical check — and it should not be promoted on less,
because the Design Harness's own round-1 shape looked finished and carried six P0
defects.

---

## 11. Structural check — cleared and ratified for v0

The append-only
[`adversary findings record`](operating-harness-adversary-findings-2026-08-21.md)
preserves every REFUSE, WATCH, author response, and the final independent
exact-byte **STRUCTURAL PASS** on spec blob
`7d5689956d0759c531b39208fae42d2631e322e2`. Author resolutions remain weaker
than external warrants. The structure is cleared; the authority bindings and
storage choices are ratified for v0 by FW-DEC-010. That ruling does not change
the zero-enforcer status.

| Finding | Structural response | Where addressed | Challenge exercised during falsification |
|---|---|---|---|
| **P0-1** — a concept with no single home | §3.2 is the single subject-operation registry and payload-value grammar; §3.3 is the single carrier-action grammar. Constraints, Options, context snapshot, proposal payload, Operation result, and backlinks each have one named home. References resolve by typed id/path shapes. | §3.2–§3.3, §5.3 rules 3/4/8, §5.4 | Challenge whether any payload value remains open or body rationale silently duplicates structured data. |
| **P0-2** — authored authority can lie | Records author only `operation.kind` and payload. Mode, channel, and enforcer derive from the registry; their keys are forbidden. Cross-tenant consent derives from kind. | §3.1–§3.2, §5.3 rules 2/5 | The registry is prose until a validator exists; prove no alternate field can bypass derivation. |
| **P0-3** — pending and settled gates conflated | A full state matrix and three terminal variants now couple mode, decision, and outcome. `narrated` is representable; an unresolved human decision remains `artifact-proposed`. | §5.3 state matrix | Challenge every required/forbidden field combination and proposal retention. |
| **P0-5** — read-only operation can gate | The evidence-store carve-out is removed. Diagnostics/emergent operations return values without writing; separate `record-transition` persists them only in the canonical Operation result home. Their authority shapes carry no gate or review. | §3.3, §5.3, §5.4, §7 r1 | Challenge whether `record-transition` can still launder an Operation result into a subject-state claim. |
| **P0-7** — carrier/runtime vocabulary collision | FW-DEC-007 governs. The record uses `artifact: OperatingHarness`; the binding path is a standalone carrier schema and validator. The carrier stays out of `PROTOCOL.md` §9–§12, the manifest schema, and the manifest validator. | §1, §4, §5.2–§5.3, §8, §10 | Grep the forbidden files after rebase and challenge every unqualified carrier-sense use. |
| **P0-A** — narrated terminal forbidden by proposal lifecycle | The state vocabulary has two legal paths. Diagnostic/emergent records take the short observation path from `context-bound` directly to `evidence-recorded/narrated`; local Options, Tableau review, and proposal are forbidden. `score-allocation` and `critique-option` carry one immutable `options_snapshot_ref`, and their ids resolve inside that cited record under rule 4 without copying its Options locally. Their mode remains diagnostic and the snapshot grants no write authority. | §2, §3.2, §5.2 example, §5.3 rules 4/6/8 + state matrix | Construct all ten diagnostic/emergent rows; for rows 3–4 tamper with the snapshot blob, ids, backlink equality, and local Options emptiness. |

Additional draft-check results:

- **P0-4:** no surface-agnostic claim is made; emission and cross-tenant rows
  require named target/payload shapes. The external exact-byte pass found no
  remaining P0 or P1.
- **P0-6:** **closed by human ruling, not by falsification.** FW-DEC-010 ratifies
  the 21 v0 bindings as written. Structural clearance did not and could not
  grant that authority.
- **Enforcement:** zero rows are called enforced. Content-quality commands are no
  longer misrepresented as authority enforcers.
- **Concurrency:** the first implementation is now explicitly single-writer;
  multi-writer CAS/merge remains deferred.
- **Coherence narration:** FW-DEC-006 now requires `locus`, `failing_term`, and
  `base_rate_ref`; `score_ref` is optional supporting evidence and cannot stand
  alone.

---

## 12. Unresolved

1. **`schedule-routine` has no machine surface** on the current runtime. Berd's Automations are
   UI-built with no CLI and no on-disk config, so nothing can read the schedule a
   `schedule-routine` operation produced.
2. **`recommend-cull` needs a semantic check.** Detecting that a
   recommendation was recorded as a decision is a prose-intent judgment.
3. **Multi-writer operation.** Deferred. V0 is ratified as `single-writer` with
   `writer_id: harper`; a later multi-writer design needs a new ruling.
4. **Private-store ignore prerequisite.** The public parent checkout must ignore
   `/personal/` before the ratified private repository is initialized. This
   branch does not claim that prerequisite has landed.
5. **Private-store initialization.** `personal/` and `personal/operating/` are
   ratified locations but are not created or initialized in this session.
