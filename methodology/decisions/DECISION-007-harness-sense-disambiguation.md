---
id: FW-DEC-007
title: "Harness" is reserved for the runtime sense; the carrier sense is always qualified and stays out of the schema
date: 2026-08-21
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — ruling delegated to the agent, 2026-08-21
---

# FW-DEC-007 — Two harnesses, one repo

## Question

`OperatingHarness` — a typed carrier for operating intent, parallel to Design
Harness — is being specified for this repo. The word `harness` is **already
load-bearing here**, in a completely unrelated sense, and that sense is
schema-enforced.

`personal/define/canonical-language.md` §B already bans bare `"the harness"`, but
only for the Design/Operating pair — it predates the Runtime Ports work and does
not know the §9/§10 sense exists. So nothing currently prevents `OperatingHarness`
landing next to `shell_sovereignty.harness` with no statement of which harness a
sentence means.

Ruled **before** the specification lands, not after.

## Decision

**`harness` unqualified means the runtime sense. The carrier sense is never bare,
and — the structural half of this ruling — never enters the file where the runtime
sense is enforced.**

1. **Runtime sense — reserved, and bare use is permitted only at home.**
   `harness` = *the agent loop*. Bare `harness` is legal inside `PROTOCOL.md`
   §9–§12, `facework.manifest.schema.json`, `bin/validate-manifest`, the
   `methodology/runtime-ports-*-gap-*.md` notes, and `bin/harness-to-*`. That is
   where it is defined and checked. **Everywhere else, write "harness (the agent
   loop)" on first use.**
2. **Carrier sense — always qualified, never bare, never lowercased-bare.**
   Write **`OperatingHarness`** (type) or **Operating Harness** (prose), and
   **Design Harness** for its pair. Never "the harness", never "harnesses" for
   the pair, never a bare-lowercase `harness` meaning a carrier.
3. **The carrier sense MUST NOT appear in `PROTOCOL.md` §9–§12, in
   `facework.manifest.schema.json`, or in `bin/validate-manifest`.** This is the
   load-bearing clause. A style rule that depends on every future author
   remembering to qualify is the same shape as the defect closed at 0.0.60 — a
   discipline nobody invokes is not a guard. A *file boundary* is checkable by
   reading one grep.
4. **No compound may mix the senses.** `HarnessBundle` is runtime-sense and stays.
   `OperatingHarnessBundle`, `harness_options` for carriers, or any
   `*Harness*` field in the manifest schema carrying carrier meaning is
   prohibited outright.
5. **`HarnessBundle` is not a third sense.** Its head noun *is* sense 1 — it is
   the bundle you hand to a file-based agent loop. Recorded here so nobody
   "reconciles" it later.

## Evidence — the runtime sense is enforced, the carrier sense is not yet present

| Sense | Definition | Enforcement |
|---|---|---|
| **Runtime** — the agent loop | `PROTOCOL.md:892` — *"`harness` — the agent loop. For a multi-harness shell this classifies the shell itself; the loops it can bind go in `harness_options`"* | `facework.manifest.schema.json:371` `shell_sovereignty.harness → $defs/sovereigntyPosture`; `:374–384` `harness_options[]` with `harness` = *"Runtime label of the selectable agent loop (e.g. 'claude-code', 'goose')"*; `bin/validate-manifest:462–476` |
| **Runtime, derived** — `HarnessBundle` | `PROTOCOL.md` §10 — *"the derived markdown view of the Runtime Ports"* for *"file-based harnesses"* | `bin/validate-manifest:899–923` (required bundle files, `boundary.md` non-empty at every evidence level, `skills/` contents); consumers `bin/harness-to-claude-code`, `bin/harness-to-berd` |
| **Carrier** — `OperatingHarness` | *"Typed carrier for operating intent — the canonical instance in the Operational layer of the Practice. Parallel to Design Harness; different subject."* (`personal/define/canonical-language.md` §A) | **none in this repo.** `grep -rn "OperatingHarness\|Operating Harness"` over the tracked tree returns **zero** hits as of this ruling |

The two are not near-synonyms that drifted. They are **different metaphors**:
sense 1 is *the apparatus that runs the work* (a harness you put a horse in);
the carrier sense is *the apparatus that carries the intent* (a harness you strap
a load to). Nothing about qualifying one clarifies the other, which is exactly why
bare use is unrecoverable for a reader.

## Why the asymmetry — the runtime sense wins the bare form

Not seniority; cost and enforcement.

- The runtime sense is **declared in `PROTOCOL.md`, defined in the schema, and
  enforced by the validator** — the full trio. It carries `shell_sovereignty.harness`,
  `harness_options[]`, `HarnessBundle`, five validation gap notes, two shipped
  converters in `bin/`, and manifest schema versions 1.2.0 and 1.6.0. Renaming it
  means a breaking schema change and re-authoring every reference tenant.
- The carrier sense **does not exist in this repo yet** (zero hits, verified). It
  is a locked term in Harper's *personal* practice vocabulary, which is untracked
  and outside the repo.

So the cheap, reversible, non-breaking move is to constrain the term that has not
landed. That is the whole argument.

## Why not the alternatives

**Rename `OperatingHarness`** (to `OperatingCarrier`, `IntentCarrier`, …).
Rejected — but narrowly, and it is the strongest alternative. `Operating Harness`
is `status: locked` in `canonical-language.md` and its value comes from being
*parallel to Design Harness*; renaming one half breaks the pair, and the pair is
the point. Clause 3 buys most of what a rename would buy — the two senses never
share a file — at none of the cost. **If clause 3 is ever violated in practice,
renaming becomes the correct fix and this record should be reopened.**

**Rename the §9/§10 sense.** Rejected: schema-enforced, two converters, five
validation notes, breaking. Cost is orders of magnitude above the problem.

**Ban bare `harness` everywhere, including §9/§10.** Rejected as unpayable and
counterproductive. §9's prose says "harness" dozens of times about the agent loop;
forcing "harness (the agent loop)" into every one degrades the spec to protect a
reader who is, by that point in the document, holding the only sense §9 has. A
term is allowed to be bare in the section that defines it.

## Required change to `personal/define/canonical-language.md` — for Harper, by hand

That file is **untracked and outside this worktree**
(`/Users/facelessdon/projects/Facework/personal/define/canonical-language.md`).
It was read for this ruling and deliberately **not copied in and not committed**.
Two edits are owed there:

**1. §B Disallowed Terms** — the existing row is two-way and needs to be three-way.

Replace:

| Disallowed | Use instead |
|---|---|
| "the harness" (bare) | "Design Harness" or "Operating Harness" |

with:

| Disallowed | Use instead |
|---|---|
| "the harness" (bare) — carrier sense | "Design Harness" or "Operating Harness" |
| "harness" (bare) outside PROTOCOL.md §9–§12 / the manifest schema / `runtime-ports-*` notes — runtime sense | "harness (the agent loop)" |
| `OperatingHarnessBundle`, or any carrier-sense `*Harness*` field in `facework.manifest.schema.json` | never — the carrier sense stays out of the schema (FW-DEC-007 clause 3) |

**2. §E Cross-Reference** — add a row so the runtime sense has a stated canonical
home in that file, which it currently lacks:

| Term family | Canonical home |
|---|---|
| `harness` (the agent loop), `harness_options`, `HarnessBundle` | `PROTOCOL.md` §9.11 / §9.12 / §10 + `facework.manifest.schema.json` |

Note also that §E currently points the *12 primitives* row at
`PROTOCOL.md` + `.claude/rules/75-collaboration-postures.md`. Per **FW-DEC-008**,
Rule 75's "collaboration-posture" does not import into Facework; the Facework-side
home for the 12-as-stances is now `AGENTS.md` § *The two-layer check*. Worth
updating in the same pass.

## Consequences

No canon file changes at this release beyond this record — clauses 1–5 bind the
**next** author, which is Session B specifying `OperatingHarness`. The obligations
that fall on that work:

1. `OperatingHarness` is specified somewhere other than `PROTOCOL.md` §9–§12, and
   adds no `*Harness*` field to `facework.manifest.schema.json`.
2. Its spec states the disambiguation at first use and cites this record.
3. If it needs a manifest slot at all, the field name must not contain `harness`.

## Revisit trigger

Reopen if any of:

- clause 3 is violated — a carrier-sense `harness` reaches `PROTOCOL.md` §9–§12
  or the schema — at which point renaming `OperatingHarness` becomes the correct
  fix rather than the rejected alternative,
- `OperatingHarness` requires a manifest slot, since a schema field forces the
  two senses into one namespace and re-opens the naming question on different
  facts,
- a third, genuinely independent sense of `harness` appears, which would mean
  qualification-at-use-site no longer resolves the ambiguity.
