# The Operating Harness — carrier spec for operating intent

**Date:** 2026-08-21 · **Status:** Draft, pending `adversary` falsification ·
**Subject:** the typed carrier for *operating intent*
**Pairs with:** `methodology/loop-model.md`, `methodology/runtime-ports-berd-gap-2026-08-18.md`
**Source pattern:** `gamut-ops/documents/design-harnesses-2026-04-27.md` (Design
Harness v0.2.2 — bound, compiler-verified, running against 14th & Co)
**Composition rule:** `gamut-ops/documents/the-practice-three-layers-2026-04-28.md`
**Constraint set:** private — SignalThesis + canonical-language guide for
Harper-as-Operator, locked 2026-06-03. **Inlined as §A; not cited by path.**

> **Not canon.** This is a methodology note. It does not amend `PROTOCOL.md`,
> `facework.manifest.schema.json`, or `bin/validate-manifest`, so the three-place
> trio stays consistent. Promoting the record format to a protocol feature is
> what would oblige all three to move together — see §10.
>
> **Not falsified.** The P0 checklist in §11 is a *draft check* the author ran on
> the author's own work. The Design Harness needed two rounds of real
> falsification and its round-1 shape was superseded with six P0 findings. Assume
> comparable defect density here.

---

## 0. Findings first

Four things this spec had to resolve, stated before the design:

1. **Almost nothing here is enforced today.** Of the 21 operations in §3, **zero**
   have a running automatic enforcer. Every gate is human-invoked or unrun. The
   validator that would check the record format — `bin/validate-harness-record` —
   **does not exist.** §3 labels every row with one of three states borrowed from
   this repo's own enforcement-audit vocabulary, and §4 states what is missing.
   This is the repo's recurring defect class (closed at 0.0.59, again at 0.0.61,
   eleven instances found across §9–§12), and the way to not repeat it is to label
   rather than imply.

2. **No runtime can fire a gate on a state change.** Berd has `on_demand` native,
   `scheduled` UI-only, and **no `event` and no `continuous` trigger at all**
   (`runtime-ports-berd-gap-2026-08-18.md`). So "check the record when it
   transitions" is not a buildable gate on the runtime this practice actually runs
   on. Every checkable rule in §5 is therefore specified as a *whole-file static
   check*, invokable on demand — the only trigger shape that exists.

3. **The evidence store cannot be this repo.** The brief's premise — git-tracked
   files ARE the evidence store — is right about *git* and wrong about *which
   repo*. `/personal/` is **gitignored** (2026-08-21); harness records name real
   nodes and real collaborators, and **N10** makes that a sovereignty constraint,
   not a hygiene preference. Resolution in §5.1: the store is a **git repo,
   privately held**, not the public canon repo. The same rule governs this
   document — everything it needs from that tree is inlined in **§A**, so a reader
   holding only the public repo can execute it.

4. **Operating intent needs a third channel the Design Harness does not have.**
   Design intent moves between the operator's own surfaces. Operating intent can reach
   *people*. `internal | emission` is insufficient; `cross-tenant` is a distinct
   channel whose consent requirement must be **intrinsic to the channel**, not an
   authored field. That is **N10** closed the way P0-2 says authority must
   be closed. This is the one place the spec genuinely departs from its source
   pattern rather than subject-swapping it.

---

## A. Inherited requirements — private provenance

The Operating Harness's constraint set was locked **2026-06-03** as a SignalThesis
plus a companion canonical-language guide for *Harper-as-Operator*. **Those two
artifacts are private and will never appear in a clone of this repo.** They name
real collaborators and carry their deal states; `/personal/` is gitignored for
exactly that reason (2026-08-21), and that rule states the consequence directly —
a public artifact that needs a fact from there **inlines the fact and marks the
provenance private** rather than citing a path no clone can resolve.

So everything this spec depends on from that tree is restated below as a normative
requirement. **§A is the constraint set** for the rest of this document. Where a
later section cites `N8` or `G6`, the referent is here, not in a private file.
Nothing in §0–§12 requires reading the originals.

The Design Harness material (`gamut-ops/`) is a *different repository* and is also
absent from a clone of this one. Its load-bearing content — the five parts, the
seven states, the P0 findings — is likewise restated in full (§1, §2, §11) rather
than referenced. The paths in this document's header are provenance, not
dependencies.

### A.1 Negative-space requirements (N1–N10)

The ten statements of what the Operating Harness is **not**. Each is a
requirement, not a caveat; several are made structural later in this spec.

| # | Requirement | Where this spec enforces it |
|---|---|---|
| **N1** | **Not theater.** Every routine output is execution evidence, not a status report. | §5.3 r6, §7 r3 |
| **N2** | **Not a dashboard, tracker, or productivity tool.** Those are surfaces; the carrier and enforcer sit beneath them. | §7 r4 |
| **N3** | **Not a duplicate of the Design Harness.** Different intent class. Same pattern, different subject. Always qualify which harness in writing. | §1 |
| **N4** | **Not built-and-stale.** Anything built must compose with a running enforcer. **Documentation alone is not built.** | §3.5, §9 |
| **N5** | **Not operator-as-prompter.** Execution happens between reviews, not as a result of typing. | §5.4, §7 r6 |
| **N6** | **Not a separate system from Facework.** It is Facework's Operational layer, dogfooded on the portfolio as its first tenant. | §10 |
| **N7** | **Not container-in-disguise.** It must remain credibly optional — a collaborator succeeds without ever hearing "Operating Harness," or it has become the extraction pattern Facework warns against. | §7 r2 |
| **N8** | **Not authority-laundering.** Diagnostic operations carry no state changes. **If state changed, the operation wasn't diagnostic — it was unauthorized.** | §3.2, §5.3 r3, §7 r1 |
| **N9** | **Not meaning-drift-as-substitute.** A semantics revision triggers downstream execution within the same period. Pure-interpretive periods are logged `interpretive-only` — fine occasionally, fatal as pattern. | §6.3, §7 r9 |
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
EnforcerGap   = manual-prompt-fallback | unwired-routine | missing-gate
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

### A.5 Node registry and review surface

Two private artifacts this spec refers to **structurally, never by content**:

- **Node registry.** `node` in a record is a registry key. The portfolio's
  canonical primitive is the **node**; brand names are labels on nodes. The
  registry instance is private.
- **Review surface.** A read-side view of node status and next actions across the
  portfolio — the manual precursor to this spec's lifecycle, where each row
  becomes a live harness once records exist. The private instance is one markdown
  file.

This spec depends only on the review surface's **role**: it is read-side and
cannot define node state (§7 r4). A public reader implementing this spec supplies
their own registry and review surface; nothing in §0–§12 requires the private
instances.

---

## 1. Definition — the five parts

An **Operating Harness** is a typed operational frame around an operating claim.
It is the sibling of GAMUT's **Design Harness**: same pattern, different subject.
The Design Harness carries design intent; the Operating Harness carries operating
intent. That pairing is settled (**N3**, **G2**) and this spec does not reopen
it. Per §A.4, neither is ever called "the harness" bare.

It carries five things. The Design Harness's five anchors, subject-swapped:

| Part | Design Harness (design intent) | **Operating Harness (operating intent)** | Anchor in this practice |
|---|---|---|---|
| **Intent** | The design claim — "make onboarding explain trust before asking for data." | The **operating claim** — "advance node X by action Y, allocated as medium compute." | Field note, review line, or a prior harness's unresolved item |
| **Context** | TWM context, TasteContract, DesignLanguageSpec, persona, phase, prior decisions. | **Node state, allocation budget, prior rulings, consent status.** What is true about this node and what compute is available to spend on it. | The review surface (§A.5, read-side view), decision records, consent records |
| **Operations** | Typed canvas actions — generate, critique, apply move, commit, scaffold. | **Typed operating actions** — ingest a field note, score an allocation, draft a message, commit an advance, send to a collaborator. §3. | §3 operation table (canonical) |
| **Evidence** | Score, refusal, changelog, through-line, gate verdict. | **What executed and why it was permitted** — the terminal record, its back-links with blob hashes, the enforcer-gap log. | §5.4, §6 |
| **Authority** | What the agent may do, propose, diagnose, or only narrate. | Same four modes, **derived from the operation kind, never authored.** §3, §5.3. | `ship-gate` / `runtime-active` / `diagnostic` / `emergent` |

**Carrier, not enforcer.** The Operating Harness *names* which enforcer's gate
applies; the enforcer runs the gate. Neither replaces the other — the carrier does
not redefine the gate, the enforcer does not carry the intent
(`the-practice-three-layers-2026-04-28.md`; **G8**: *"Carriers name the gate.
Enforcers run the gate."*). A record that restates a threshold instead of
naming its enforcer is malformed (§7 refusal 7).

**The harness is not a source of truth.** The review surface (§A.5) is the
read-side view of the Operational layer; a harness record is the transport-and-evidence frame for one
operating intent. Neither defines node state (§7 refusal 4).

---

## 2. Lifecycle — reused, not reinvented

§A.3 already declares the lifecycle as mirroring Design Harness v0.2.2. It is
reused verbatim, with the *mechanism* and *output* columns subject-swapped.

| State | What happens | Mechanism in this practice | Output |
|---|---|---|---|
| `intent-captured` | An operating claim is stated for a node. | Field note ingest, review line, prior harness's open item. | Record exists with `intent.claim` + `intent.source`. |
| `context-bound` | The claim is bound to node state and available compute. | Node state read, allocation budget, prior rulings, consent lookup. | `context` block + `allocation` set. |
| `options-generated` | Candidate advances are produced, each sized. | Agent generates ≥1 candidate advance at Light / Medium / Heavy. | Non-empty Options table. |
| `tableau-reviewed` | Options are scored, critiqued, or culled. **This is the compute-allocation call.** | Diagnostic operations only (§3). | Scored options + cull rationale. |
| `artifact-proposed` | One option becomes a concrete proposed act. | A draft, a diff, a schedule change, a message. | `proposal` naming one operation kind + payload. |
| `authority-checked` | The gate runs and the human rules. | The enforcer named by the operation kind; the operator's review. | Settled `gate.verdict` + `review`. |
| `evidence-recorded` | The result lands as a re-diffable artifact. | Terminal record committed to the store. | §6. |

Two properties carried from v0.2.2's hard-won round 2:

- **A terminal state may not carry an unresolved verdict.** `evidence-recorded`
  requires a settled verdict, and `outcome` is tied to it (§5.3 rule 4). This is
  P0-3 and it is the finding that killed v0.2.
- **Transition order is not provable from the record.** A record that looks
  well-formed for `evidence-recorded` carries no proof it passed through
  `authority-checked`. GAMUT deferred phantom-token machinery and recorded this as
  a runtime invariant. Here it is worse — there is no runtime. **Resolution:** git
  history is the transition proof (§6.2). This is the one place the weaker
  substrate produces a *better* answer than the typed original, because
  `git log --follow -p` is exactly a record of which states this file passed
  through and when.

---

## 3. Operation authority matrix

No source to copy. Derived from the private constraint set's capability domains
(`field-note-ingest`, `node-registry`, `compute-allocation`, `evidence-store`,
`authority-modes`, `review-surface`) and the four authority modes restated in
§A.3, whose single source of truth remains Design Harness v0.2.2.

### 3.1 Reading the matrix

**Authority is intrinsic to the operation kind.** The `Mode` column is a *lookup
table*, not a field. A record declares `operation.kind` and nothing else about
authority; the mode is read from this table. **A record that writes an `authority:`
or `mode:` key is invalid** (§5.3 rule 2). This is the P0-2 fix, which v0.2 got
wrong twice: an authored authority field type-checks and lies.

**Channel** is the sovereignty axis and it is part of the variant, not an
annotation:

| Channel | Reaches | Requirement |
|---|---|---|
| `internal` | The operator's own context only. | none beyond the mode |
| `emission` | A surface the operator owns that others can see — a repo, a published site, a scheduled job. | named enforcer |
| `cross-tenant` | Someone else's context — their inbox, repo, calendar, tool. | **consent record, structurally required** |

**Enforcement** uses this repo's audit vocabulary (`section9-enforcement-audit-2026-08-19.md`):

- **Enforced** — an executable fails on violation.
- **Authoring-layer** — the obligation is real and provably not machine-checkable.
  Legitimate, and must be *declared as such*.
- **Unenforced** — the gate is specified and nothing runs it. **The defect state.**
  Every such row is a follow-up, not a claim.

### 3.2 Diagnostic operations — read-only

`diagnostic` means read. **Read of *subject* state** — the node, the collaborator's
context, any live system. The evidence store is exempt *only for append*: a
diagnostic operation may create a new record or append a state to its own record,
and may **never** modify or delete an existing record. Without that carve-out no
operation could be diagnostic at all (every one writes a file), and with it looser
than that, `diagnostic` becomes the laundering channel **N8** names.

| # | Operation | Channel | Agent authority | Enforcer | Enforcement |
|---|---|---|---|---|---|
| 1 | `read-node-state` | `internal` | Automatic. Reports status, last advance, open items. | — (read of files) | **Authoring-layer** — a read needs no gate |
| 2 | `ingest-field-note` | `internal` | Automatic. Emits candidate operating intents; commits none. | — | **Authoring-layer** |
| 3 | `score-allocation` | `internal` | Automatic. Evaluates compute across nodes; changes no allocation. | — | **Authoring-layer** |
| 4 | `critique-option` | `internal` | Automatic. Argues against a candidate advance. | — | **Authoring-layer** |
| 5 | `detect-enforcer-gap` | `internal` | Automatic. Names routines with no live enforcer. | — | **Unenforced** — this is the operation that would detect the rest of this column's gaps, and nothing invokes it |
| 6 | `draft-message` | `internal` | Automatic. Produces a draft. **Drafting is not sending** — sending is #13. | — | **Authoring-layer** |
| 7 | `audit-consent` | `internal` | Automatic. Reports whether a consent record covers a proposed cross-tenant act. | `validate-harness-record` (§4) | **Unenforced** — validator not written |
| 8 | `narrate-week` (`emergent`) | `internal` | Narrate only. No action implied. | — | **Authoring-layer** |
| 9 | `narrate-coherence` (`emergent`) | `internal` | Narrate only. Cites the score or says nothing (§A.4: no bare "coherent"). | — | **Authoring-layer** |
| 10 | `recommend-cull` (`emergent`) | `internal` | **Recommend only.** May never record a Sovereignty-loop exit as decided. | — | **Unenforced** — the guard exists in prose (`loop-model.md`) and nothing checks it |

Rows 8–10 are `emergent`, not `diagnostic`; they are grouped here because they
share the no-gate, no-review shape. Rows 1–7 and 8–10 alike carry **no `gate`, no
`review`, and no `outcome: committed`** — structurally, not by convention (§5.3
rule 3). That is P0-5 and **N8** made into a checkable rule.

Row 10 is the loop-model guard earned on 14th & Co: *an agent may recommend a
Sovereignty-loop exit, but must never record it as decided.* Record as
**RECOMMENDED / open** until the human rules.

### 3.3 Ship-gate operations — automatic, contract-enforced

| # | Operation | Channel | Agent authority | Enforcer | Enforcement |
|---|---|---|---|---|---|
| 11 | `validate-record` | `internal` | Automatic. Checks a record against §5. | `bin/validate-harness-record` | **Unenforced** — **does not exist** (§4) |
| 12 | `reject-malformed-intent` | `internal` | Automatic. Filters structurally invalid intents before review; reports counts. | `bin/validate-harness-record` | **Unenforced** — same |
| 13 | `route-model-tier` | `internal` | Automatic. Matches model tier to operation kind. Top tier is reserved, not default (**G7**). | Runtime session config | **Authoring-layer** — and *weakly* so: on Berd, tier binds per `berdctl session create`, so it is an operator choice per invocation, not a declared property. Finding C of the Berd gap note. |
| 14 | `back-link-hygiene` | `internal` | Automatic. Normalizes ids and back-link blob hashes in an existing record. **The only operation permitted to modify an existing record**, and only these fields. | `bin/validate-harness-record` | **Unenforced** |

### 3.4 Runtime-active operations — human confirmation required

Every row requires a `review` record. Rows 18–19 additionally require a consent
record by virtue of their channel.

| # | Operation | Channel | Agent authority | Enforcer | Enforcement |
|---|---|---|---|---|---|
| 15 | `commit-allocation` | `internal` | Gated. Ratifies compute allocation for a period. | Operator review | **Authoring-layer** — a human ruling is the gate by design |
| 16 | `advance-node` | `internal` | Gated. Records a node advance as executed, with evidence. | Operator review | **Authoring-layer** |
| 17 | `emit-repo-change` | `emission` | Gated. Commits or pushes to a repo the operator owns. | `make protocol-check`, `./bin/validate-tokens`, `npm run sync-canon -- --check`, PR review | **Enforced** — the only genuinely enforced row in this table, and only for *this* repo's gates. Named, not restated (§7 refusal 7). |
| 18 | `schedule-routine` | `emission` | Gated. Creates or modifies a scheduled job. | — | **Unenforced** — on Berd, Automations are UI-built with no CLI and no on-disk config, so no check can read the schedule that resulted |
| 19 | `send-to-collaborator` | `cross-tenant` | Gated. Sends the draft from #6. **Consent record required.** | `bin/validate-harness-record` (consent presence) | **Unenforced** — validator not written. Presence of a consent *file* is checkable; whether consent was actually given is authoring-layer. |
| 20 | `operate-in-collaborator-context` | `cross-tenant` | Gated. Acts inside their tool. **Consent record required, with explicit scope.** | as #19 | **Unenforced** — same, plus scope-fit is authoring-layer |
| 21 | `propose-canon-change` | `emission` | Gated. Drafts a canon change. **Never lands it** — canon lands as a reviewed PR by a party who is not the drafter. | branch + PR review; `sync-canon --check` | **Enforced** — by the repo's ship discipline, not by this spec |

**When an operation does not clearly fit a kind, it is not run.** The Design
Harness's rule was "default to `runtime-active` and ask." That is right for a
system with a compiler and a live gate. Here, defaulting silently mints a
`runtime-active` variant nobody validated, so the stricter rule holds: an
unlisted operation is added to this table by a spec change first. The table is the
only home for the kind→mode mapping (P0-1).

### 3.5 Enforcement tally — stated, not implied

| State | Rows | Which |
|---|---|---|
| **Enforced** | 2 | 17, 21 — and both by gates that already existed for other reasons |
| **Authoring-layer** | 11 | 1, 2, 3, 4, 6, 8, 9, 13, 15, 16, and the consent-substance half of 19/20 |
| **Unenforced** | 8 | 5, 7, 10, 11, 12, 14, 18, 19/20 (presence half) |

Six of the eight unenforced rows collapse into **one** missing executable (§4).
Row 18 is unenforceable on the current runtime. Row 10 needs a check that reads
prose intent and is the hardest of the set.

---

## 4. The missing enforcer

Six unenforced rows (7, 11, 12, 14, 19, 20) share one cause: **there is no
validator for a harness record.** Specifying one is cheap; not writing it and
calling the gates real is the defect class.

`bin/validate-harness-record <path>...` — a whole-file static check, exit non-zero
on violation, enforcing §5.3 rules 1–8. Every one of those rules is decidable from
the file plus the filesystem. Wire it into `make protocol-check` so it runs where
the other validators run.

What it will still not enforce, stated now so it is never implied later:

1. **Trigger.** It runs `on_demand` (or inside `make protocol-check`). Berd has no
   `event` and no `continuous` trigger, so it **cannot** fire on a state
   transition. A record can sit invalid between invocations. Claude Code's
   `SessionStart` hook (`bin/facework-session-check`) is the only event trigger in
   the whole toolchain and it is Claude Code-only — a per-session sweep is the
   closest available approximation to an event gate, and it is not the same thing.
2. **Consent substance.** That a consent file exists and names a scope and expiry
   is checkable. That the person actually consented is not.
3. **Scope honesty.** That a `cross-tenant` act stayed inside its declared scope is
   not checkable from the record. GAMUT's invariant #5 in a harder form.
4. **Transition legality.** Recoverable from git history (§6.2) but not from the
   record. A validator reading one file cannot see the sequence.
5. **Append-only.** git records rewrites; it does not prevent them. `--amend` and
   force-push are available. Detectable after the fact, not gated — unless a
   pre-commit hook is added, and none exists.

Until this executable exists and runs, rows 7, 11, 12, 14, 19, and 20 are
**declared and unenforced**, and this spec says so rather than implying a gate.

---

## 5. The on-disk record format

A harness is a file. Berd has **no memory port at all** — `MemoryMap` absent, the
weakest of five validated runtimes — so there is no store to write to and no
retrieval to rely on. Git-tracked files are the evidence store. That is a
constraint: it means the record must be legible, statically checkable, and
diffable *without* a runtime, because no runtime will hold it.

### 5.1 Where the store lives

**Two separate questions.** Which repo, and which directory.

**Which repo — resolved.** Not this one. `/personal/` is **gitignored**
(2026-08-21) because it names real collaborators and carries their deal states,
and harness records are made of exactly that material; **N10** makes it a
sovereignty constraint. The requirement is *diffable git history*, not *presence
in the public canon repo*.

> **Recommendation:** `personal/` becomes its own git repository — privately held,
> ignored by the parent as it is now. The store gets real history, blob
> hashes, and `git log --follow`; nothing private enters the public tree. A
> redacted index may be published later; the records may not.

**Which directory — deferred, with a recommendation.** Session A is ruling on the
collision between `OperatingHarness` and `HarnessBundle` (`PROTOCOL.md` §10).
**This spec creates no directory.** The convention:

```
operating/
  <node>/
    2026-08-21-001-first-worked-flow.md
```

Recommending `operating/` on one argument: `harness-bundle/` (§10) is a **derived,
one-way, regeneratable** view of the Runtime Ports whose files "do not propagate
back." An Operating Harness record is the exact opposite — **authored,
append-only, and the evidence itself.** Sharing a root would put a derived
artifact and a source-of-record artifact under one name, which is how a hand-edit
to a derived copy becomes plausible. A root that does not contain the word
"harness" dodges Session A's collision entirely rather than resolving it, which
here is a feature. Session A may rule otherwise; the mkdir is a follow-up either
way.

Filename: `<yyyy>-<mm>-<dd>-<seq>-<slug>.md`. Date is the `intent-captured` date
and does not change as the record advances. `<seq>` is per-node per-day.

### 5.2 Frontmatter

One record, one operating intent, advancing in place.

```yaml
---
harness: OperatingHarness        # discriminates from a HarnessBundle file
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
  node_state: "carrier bound; generator wired; one tenant live."
  prior_rulings: [ "decisions/DECISION-0NN.md" ]
operation:
  kind: send-to-collaborator     # the ONLY authority-bearing declaration
  channel: cross-tenant
  consent: consents/node-alpha-2026-06.md
gate:
  enforcer: operator-review
  verdict: pass                  # pass | watch | refuse — never "pending" at terminal
review:
  reviewer: operator
  decision: confirmed
  at: 2026-08-21T00:40:00-05:00
outcome: null                    # committed | refused | narrated — terminal only
back_links: []
---
```

Absent keys are meaningful. A `diagnostic` record has **no `gate`, no `review`,
no `outcome`** — not `gate: null`, absent.

### 5.3 What makes a record valid

Eight rules. Each is decidable from the file plus the filesystem, which is what
makes §4's validator buildable rather than aspirational.

1. **`harness: OperatingHarness`** present, and `record_schema` present. A record
   carrying a release version in any field is invalid — release version lives only
   in `VERSION`, and never in a document.
2. **No authored authority.** `operation.kind` resolves to exactly one row of §3.
   Its mode is looked up there. **A record containing an `authority:` or `mode:`
   key is invalid.** (P0-2 — the field that lied twice in GAMUT's rounds cannot be
   written here at all.)
3. **A read cannot gate.** If the looked-up mode is `diagnostic` or `emergent`,
   the keys `gate`, `review`, and `outcome` are **absent**. (P0-5; **N8** / **G6**
   — *diagnostic means read; if state changed, it wasn't diagnostic*.)
4. **Terminal states settle.** If `state: evidence-recorded` then `outcome` ∈
   {`committed`, `refused`, `narrated`} **and** `gate.verdict` ≠ `pending`. Tied:
   `committed` requires verdict ∈ {`pass`, `watch`}; `refused` requires `refuse`;
   `narrated` carries no gate (it is an `emergent` kind, so rule 3 already
   removed it). (P0-3.)
5. **Consent is structural.** If `operation.channel: cross-tenant` then `consent`
   is present and resolves to an existing file that names a **scope** and an
   **expiry**. (**N10**.)
6. **A commit cites evidence.** `outcome: committed` requires non-empty
   `back_links`, each entry a path plus a `blob:<8>` hash (§6.1). A commit with no
   back-links is an announcement (§A.4: `committed: <evidence>` or nothing).
7. **One home per concept** (P0-1): `node` appears once and is a registry key, not
   a brand label. `allocation` appears once. The claim appears once, in
   `intent.claim`. Candidate advances appear **only** in the body's Options table —
   never duplicated into frontmatter. No option, force, or constraint is referenced
   by anything other than its Options-table id.
8. **Monotonic revision.** `revision` increases across commits touching the file;
   `supersedes`, when set, names a real record id. Uniqueness across concurrent
   forks is not checkable from one file — authoring-layer, and named as such.

### 5.4 Body

Fixed sections, in order. The frontmatter carries what a validator reads; the body
carries what a human reads.

```markdown
## Context bound
## Options            <!-- id | advance | size | resolves | worsens -->
## Tableau review     <!-- scores, culls, and why -->
## Proposal
## Evidence           <!-- back-links with blob hashes -->
## Enforcer-gap log   <!-- see below -->
```

**Options table** is the one home for candidate advances (rule 7). Columns:
`id`, `advance`, `size` (Light/Medium/Heavy, verbatim), `resolves`, `worsens`.
`options-generated` onward requires ≥1 row — the analog of v0.2.2's
`PopulatedEvidence`, and checkable.

**Enforcer-gap log** is load-bearing, not a courtesy. **N5** / **G5**: if the
operator prompted it, the harness failed. Each such event is logged here as
`enforcer-gap: manual-prompt-fallback | unwired-routine | missing-gate` (the
`EnforcerGap` union in §A.4) — *"log the failure, don't normalize the patch."* Given §3.5's tally, this log is the honest instrument for
the gap between this spec and a running Operational layer.

---

## 6. The closing signal

`loop-model.md` carries the sub-rule earned on 14th & Co: **a closing signal must
produce an artifact.** A harness that converges only in conversation has not
closed its loop — it has stopped, and the next run cannot diff against it, so the
loop silently reopens.

### 6.1 What `evidence-recorded` produces

**The terminal record itself, committed.** Not a summary of it, not a review
message — the file, in terminal state, in git. It carries:

- `state: evidence-recorded` and a settled `outcome` (rule 4).
- `back_links[]` — non-empty for `committed` (rule 6). Each entry is a path plus a
  **git blob hash**, `blob:<8>`.

**Blob hash, not commit SHA** — and for reasons this repo already paid for. At
0.0.59 the canon provenance stamps were commit SHAs, and a commit SHA was wrong
two independent ways: dirty-source stamps name a commit whose content is not what
was derived, and squash-merge orphans the branch commit the moment the PR lands.
A blob hash is invariant across commit, squash, rebase, and branch deletion, and
identifies the exact bytes. An operating harness's back-link has the same job —
prove which bytes the advance produced — so it takes the same fix rather than
re-learning it.

### 6.2 What makes it re-diffable

Four properties, each grounded in something that actually runs:

1. **Stable path.** The record advances in place; the path does not change. The
   next run reads the same path.
2. **Git history is the transition record.** `git log --follow -p <record>` shows
   every state this record passed through and when. This is what §2 said the
   format cannot prove and git can — and it is *stronger* than GAMUT's answer,
   which deferred the same problem to builders that were never written. It is
   also honest about its limit: history is evidence, not a gate (§4 item 5).
3. **Back-links resolve, or the closure is void.** Each `blob:<8>` is
   re-verifiable with `git hash-object`. A back-link that no longer resolves means
   the cited evidence changed after closure — the same tamper check
   `sync-canon --check` performs on provenance stamps, and the same verdict:
   provenance that cannot be checked is decoration.
4. **The next intent is a diff, not a memory.** The next run compares the terminal
   record's claim against current node state. Divergence is the next
   `intent-captured`, and it cites the prior record's `id`. No runtime memory is
   required — which is the only design that survives a runtime with no
   `MemoryMap`.

### 6.3 Per-period closure

One record closes one operating intent — the **task loop**. The **product loop**
(the review) needs its own artifact or it stops rather than closes, by the same
rule. Its closing artifact is a **review index** for the period: the terminal
records, their outcomes, and the enforcer-gap entries.

Two constraints on that index. It is **derived** from the records, so it is never
hand-edited to say something the records do not (the derived-copy rule, applied
one layer down). And a period whose records are all `intent-captured` is logged
`interpretive-only` — fine occasionally, fatal as pattern (**N9**).

---

## 7. Refusal boundaries

The Operating Harness must refuse **nine** moves. Ordered by how likely each is to
actually happen in this practice.

1. **Authority laundering.** An operation may not be called `diagnostic` if
   subject state changed. *Diagnostic means read; if state changed, it wasn't
   diagnostic — it was unauthorized* (**N8**, **G6**). Structural in §5.3
   rule 3: a diagnostic record cannot carry a gate, a review, or an outcome. The
   evidence-store carve-out in §3.2 is append-only and no wider.

2. **Sovereignty violation.** A `cross-tenant` operation without a consent record
   naming scope and expiry is refused. *My OS operates in my context. Their
   context requires their consent* (**N10**, **G10**). Structural in rule 5 —
   the requirement belongs to the channel, so it cannot be omitted by an author
   who forgets it.

3. **Theater.** A record in `artifact-proposed` is not an advance. Only
   `evidence-recorded` + `committed` + resolving back-links is. *Report without
   evidence is an announcement, not execution* (**N1**, **G1**). §A.4 forbids
   unqualified "done."

4. **Review-surface-as-source-of-truth.** The review surface (§A.5) and the
   review index are read-side views. They do not define node state and cannot be edited to assert
   an advance no record carries. (The Design Harness's canvas-as-source-of-truth
   refusal, subject-swapped.)

5. **Counterfeit sovereignty closure.** An agent may recommend a cull or a
   Sovereignty-loop exit; it may never record one as decided. Record as
   **RECOMMENDED / open** until the human rules. Earned on 14th & Co, where
   instrumentation pre-wrote a founder's scope cull as ratified before he decided
   — the sovereignty floor breached from below: not delegating the call,
   counterfeiting it.

6. **Prompt-as-enforcer.** The operator typing the thing is not the Operational layer
   running. Log `enforcer-gap: manual-prompt-fallback` in §5.4 and leave it
   visible. *If I prompted it, the OS failed. Log the failure, don't normalize the
   patch* (**N5**, **G5**).

7. **Carrier redefining the gate.** A record names its enforcer; it never restates
   the enforcer's threshold, score, or rule. Two authoritative copies of a
   threshold is drift with extra steps. *Carriers name the gate. Enforcers run
   the gate* (R8).

8. **Silent doctrine change.** A harness cannot amend canon — `PROTOCOL.md`,
   `CONSTITUTION.md`, `theories/`, `standards/README.md`,
   `methodology/build-methodology.md`. `propose-canon-change` (#21) drafts; canon
   lands as a reviewed PR by someone who is not the drafter, with `sync-canon`
   run and the regenerated copy committed. A harness never hand-edits a derived
   copy.

9. **Interpretive-only as substitute.** Semantics revision is foundation, not
   deliverable. A period producing only `intent-captured` records is logged
   `interpretive-only` (**N9**, **G9**).

These refusals keep the Operating Harness from becoming a hidden agent runtime
with operating words painted on top.

> Note on reuse: the source pattern's §11 opens *"must refuse five moves"* and
> then lists six. Small, but it is exactly the drift this spec is trying not to
> inherit, so the count here is stated once and matches.

---

## 8. Type sketch — non-normative

**The normative form is §5.2's frontmatter plus §5.3's eight rules.** This sketch
is an argument aid.

I agree with the brief that TypeScript is the wrong altitude, and want to sharpen
*why*, because "no compiler" is only half of it. GAMUT's v0.2.2 earned its type by
being **compiler-verified against illegal shapes** — `tsc` rejecting seven bad
probes is what made the claim real. A TS file in a docs repo gets none of that: it
is prose that resembles code, which is worse than prose, because it *looks*
enforced. Writing it would reproduce this repo's recurring defect class in a new
medium.

There is a real binding target here, and it is not TypeScript. This repo already
runs the three-place machinery — `PROTOCOL.md` declares, `facework.manifest.schema.json`
defines, `bin/validate-manifest` enforces. If the record format is ever promoted
to a protocol feature, **JSON Schema plus a validator is the shape that gets
checked in this repo**, and §5.3's eight rules are already written to be
decidable. Until then, §4's standalone validator is the honest increment.

```ts
// NON-NORMATIVE sketch. Nothing compiles this. §5.3 is normative.

type AuthorityMode = "ship-gate" | "runtime-active" | "diagnostic" | "emergent"
type ActionSize    = "light" | "medium" | "heavy"
type Outcome       = "committed" | "refused" | "narrated"
type Channel       = "internal" | "emission" | "cross-tenant"
type EnforcerGap   = "manual-prompt-fallback" | "unwired-routine" | "missing-gate"

// Authority is intrinsic to the variant. There is no `mode` field to author.
type Operation =
  | { kind: "read-node-state" | "ingest-field-note" | "score-allocation"
          | "critique-option" | "detect-enforcer-gap" | "draft-message"
          | "audit-consent"
      channel: "internal" }                       // diagnostic: no gate, no review
  | { kind: "narrate-week" | "narrate-coherence" | "recommend-cull"
      channel: "internal" }                       // emergent: narration only
  | { kind: "validate-record" | "reject-malformed-intent"
          | "route-model-tier" | "back-link-hygiene"
      channel: "internal"; enforcer: string }     // ship-gate
  | { kind: "commit-allocation" | "advance-node"
      channel: "internal"; review: Review }       // runtime-active
  | { kind: "emit-repo-change" | "schedule-routine" | "propose-canon-change"
      channel: "emission"; enforcer: string; review: Review }
  | { kind: "send-to-collaborator" | "operate-in-collaborator-context"
      channel: "cross-tenant"; consent: ConsentRef; review: Review }
```

The sketch's only real claim: **`cross-tenant` carries `consent` in the variant.**
No author can forget it, and no author can write a mode that lies. Everything else
is illustration.

---

## 9. What this composes with — and what it does not

**N4**: *anything built must compose with a running enforcer. Documentation alone
is not built.* By that test **this spec is not built.** It is
a carrier specification with two enforced operations, both borrowed from gates
that existed for other reasons.

Honest status per part:

| Part | Status |
|---|---|
| Five parts (§1) | Specified. Subject-swap holds; the `cross-tenant` channel is new. |
| Lifecycle (§2) | Reused verbatim from v0.2.2, as §A.3 already declared. |
| Authority matrix (§3) | Specified. 2 enforced / 11 authoring-layer / 8 unenforced. |
| Refusals (§7) | Specified. Refusals 1, 2, 3, 5 are checkable by §4's validator; 4, 6, 7, 8, 9 are authoring-layer. |
| Record format (§5) | Specified and decidable. **No validator exists.** |
| Closing signal (§6) | Specified, and its substrate — git — actually runs. The strongest part of this spec, because it depends on a tool that is already there. |

Next increment, smallest first: **write `bin/validate-harness-record`** and produce
**one real record** for one real node. Six unenforced rows close on the first; the
"never been built" status closes on the second. Neither requires the directory
ruling — a record can be written to its store before the store's name is settled
in this repo, since the store is not in this repo (§5.1).

---

## 10. Promotion path — not taken here

This note is **not canon**. It is not in `CANON_SOURCES`
(`examples/face.works/prototype/scripts/sync-canon.mjs`), so the `sync-canon` gate
does not apply, and it amends no protocol file, so the three-place trio stays
consistent.

What promotion would oblige, stated so it is not discovered later:

- `PROTOCOL.md` declares the record format → `facework.manifest.schema.json`
  defines it → `bin/validate-manifest` (or `validate-harness-record`, wired into
  `make protocol-check`) enforces it. **All three, together.** The 1.5.0
  runtime-conformance tier was specified at 0.0.25 and sat unenforceable until
  0.0.45 — twenty releases where the spec claimed something the validator could
  not check.
- Manifest schema version moves only if the manifest gains a field. The record's
  `record_schema` is a **third** axis and is not reconciled against either the
  release version or the manifest schema version.

**Bar for promotion:** one worked flow against a real node, closed to
`evidence-recorded` with resolving back-links, plus the validator running in
`make protocol-check`. Same bar the Design Harness cleared — a worked flow plus a
mechanical check — and it should not be promoted on less, because the Design
Harness's own round-1 shape looked finished and carried six P0 defects.

---

## 11. Draft check — P0 self-run

**This is a draft check, not falsification.** The author ran the source pattern's
P0 findings against the author's own work. GAMUT's Design Harness needed two
rounds of real falsification; its v0.1 shape was superseded with six P0 findings,
and its v0.2 shape *failed* round 2 after looking correct. The `adversary` persona
exists so Facework does not grade its own homework.

| Finding | Does this spec repeat it? | Where addressed | Residual risk |
|---|---|---|---|
| **P0-1** — a concept with no single home, forced into duplicated fields | **Believed not repeated.** §5.3 rule 7: `node`, `allocation`, and the claim each appear once; candidate advances live only in the Options table and are referenced by id. The kind→mode mapping has exactly one home (§3). | §3, §5.3 r7 | The `context` block overlaps the review surface (§A.5). §7 refusal 4 rules the surface read-side, but nothing checks that a record's `node_state` matches it. Two descriptions of node state exist. **This is the weakest of the four.** |
| **P0-2** — an authored authority field that can lie | **Believed not repeated,** and closed harder than v0.2.2 did. Authority is not merely derived; **writing it is invalid** (§5.3 r2). v0.2's `effectiveAuthority` type-checked while lying; here the key's presence fails the check. | §3.1, §5.3 r2 | The check needs §4's validator. Until then the rule is prose and the failure mode is exactly v0.2's. |
| **P0-3** — pending and settled gates conflated, so a terminal state carries an unresolved verdict | **Believed not repeated.** §5.3 rule 4 requires a settled verdict at `evidence-recorded` and ties `outcome` to it — `committed` cannot sit on `refuse`, and `pending` is excluded at terminal. | §2, §5.3 r4 | Transition *order* is still not provable from the record. Mitigated by git history (§6.2), which is evidence rather than a gate. Same residual GAMUT deferred, with a better fallback. |
| **P0-5** — a read-only operation that can nonetheless gate | **Believed not repeated.** §5.3 rule 3: `diagnostic`/`emergent` records carry no `gate`, `review`, or `outcome` — absent, not null. This is **N8** made structural. | §3.2, §5.3 r3, §7 r1 | The append-only evidence-store carve-out (§3.2) is the seam. It is stated narrowly — create or append own record, never modify or delete another — but it *is* a permitted write inside a read-only mode, and it is where a determined laundering attempt would go. `back-link-hygiene` (#14) is the one operation allowed to modify an existing record; if its field restriction is not enforced, it is a laundering channel. **Flagged for the adversary pass as the highest-value attack surface.** |

Not covered by these four and worth an adversary's attention:

- **P0-4 (false surface-agnostic claim).** The channel split is `internal` /
  `emission` / `cross-tenant`, but operation *kinds* still name specific surfaces
  (`emit-repo-change`, `schedule-routine`). Whether that is the same
  contradiction P0-4 named, or the honest opposite of it, is a real question.
- **P0-6 (asserting bindings doctrine has not earned).** §3 assigns a mode to 21
  operations. GAMUT could pin primitive→mode pairs because the tether-primitive-map
  had **closed**. There is no closed map for operating intent. Every assignment in
  §3 is an authored judgment, not a derivation from a settled source.
- **P1 (concurrency).** Rule 8 is single-file. Two sessions advancing two records
  for the same node have no merge story.

---

## 12. Unresolved

1. **P0-6 has no answer.** §3's 21 mode assignments rest on nothing equivalent to
   a closed tether-primitive-map. They are defensible and they are not derived.
2. **Two homes for node state** (P0-1 residual). Either records stop carrying
   `context.node_state`, or the review surface becomes derived from records. Not resolved,
   and it needs the directory ruling first.
3. **The directory** — Session A's call. §5.1 recommends `operating/` and creates
   nothing.
4. **Row 18 is unenforceable** on the current runtime. Berd's Automations are
   UI-built with no CLI and no on-disk config, so nothing can read the schedule a
   `schedule-routine` operation produced. It stays `emission`/`runtime-active` with
   no enforcer until a runtime offers a file surface.
5. **Row 10 needs a check nobody knows how to write.** Detecting that a
   recommendation was recorded as a decision is a prose-intent judgment.
6. **Concurrency.** Two sessions, one node, no merge rule.
7. **Whether `personal/` should be its own repo** is a recommendation (§5.1), not
   a ruling. It has consequences beyond this spec.
