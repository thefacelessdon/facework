---
id: FW-DEC-003
title: methodology/CHANGELOG.md is closed as a historical archive, not backfilled
date: 2026-08-19
status: resolved
authority: canonical
ratified_by: Harper (harper@face.works) — decision delegated to the agent, 2026-08-19
---

# FW-DEC-003 — Methodology Changelog Disposition

## Question

`methodology/CHANGELOG.md` carried entries for releases 0.0.1–0.0.27, then
nothing until 0.0.46 was written into it. Two dispositions were proposed:

- **(A)** The CHANGELOG covers protocol/methodology releases only — the
  0.0.28–0.0.45 gap is therefore correct and should be documented as such.
- **(B)** The CHANGELOG covers every release and needs an 18-release backfill.

## Decision

**Neither. The CHANGELOG is closed as a historical archive at 0.0.46.**

The release record continues in `ROADMAP.md`; methodology evolution continues in
`methodology/retros/`; rulings continue here in `methodology/decisions/`. The
0.0.28–0.0.45 gap is **not** backfilled, by design, and is documented in the
file's own header as a known hole with its reason.

Both proposed options were tested against the evidence and both fail.

## Why (A) fails — the gap is not what it appears

(A) requires that the 18 missing releases contain no protocol or methodology
work. They do. Classifying 0.0.28–0.0.45:

| Kind | Releases | Count |
|---|---|---|
| Site / brand / visual (Implementation layer) | 0.0.28–0.0.38, 0.0.41–0.0.43 | 14 |
| **Protocol / methodology / governance** | **0.0.39, 0.0.40, 0.0.44, 0.0.45** | **4** |

- **0.0.39** ratified FW-DEC-002 — a governance ruling that retired a
  canon-inverted tagline and subordinated `visual-system/` to the Implementation
  layer.
- **0.0.40** edited `PROTOCOL.md` §7 (the last survivor of the 0.0.16
  de-versioning).
- **0.0.44** made `AGENTS.md` the canonical agent instruction set.
- **0.0.45** made the runtime-conformance tier enforceable — manifest schema
  1.5.0 in the schema and validator.

A scope of "protocol/methodology only" would still require four of the eighteen.
The clean brand-arc story is not true.

(A) fails a second time on the file's existing contents. Its charter reads
"Track every evolution of the build methodology. After each project retro, update
the methodology and log what changed here" — yet it logs 0.0.16 (a version-drift
fix), 0.0.26 and 0.0.27 (ROADMAP bookkeeping). None are methodology evolution and
none followed a retro. The narrow scope was never honored while the log was
active; adopting it retroactively would mean rewriting history to make the claim
true.

## Why (B) fails — backfilling institutionalizes the defect

`ROADMAP.md` already holds a version-history row for every release 0.0.1–0.0.46,
generally richer than the CHANGELOG entry beside it. Backfilling produces a second
authoritative record of facts that already have one.

That is the drift pathology the practice exists to prevent, and here it is not
hypothetical — it has already cost two releases. **0.0.26** was "ROADMAP drift
reconciliation" (the table had stalled eleven releases behind) and **0.0.27** was
"ROADMAP self-consistency fix" (the reconciliation omitted its own rows). Two
records of the same fact drifted, and the repair was itself drifted. Restoring the
duplication would restore the failure mode.

The evidence that the CHANGELOG is the *unmaintained* copy is direct: 0.0.28
reconciled GAMUT's proof to measured ground truth and "dropped the unsupported
'4 days' claim across all sources." That claim survives at `CHANGELOG.md` line
1108 — a repo-wide correction passed the file by.

## Why closure is the coherent third option

The CHANGELOG's original job was real and predates the alternative. It began as
the methodology-version log (v1.0–v5.0, March 2026), before `ROADMAP.md` existed
— ROADMAP was introduced at 0.0.3, when "versioning system added." From that point
the two ran in parallel and the CHANGELOG's job was progressively absorbed:

| Job | Now held by |
|---|---|
| What shipped, per release | `ROADMAP.md` version history |
| What the methodology learned | `methodology/retros/` (009 retros) |
| What was ruled, and why | `methodology/decisions/` |
| Runtime/port validation detail | `methodology/runtime-ports-*-gap-*.md` |

No exclusive job remains. The 0.0.46 entry demonstrates the redundancy directly:
the same validation is recorded three times — a ROADMAP row, a 237-line
port-by-port note (`runtime-ports-berd-gap-2026-08-18.md`), and 58 lines of
CHANGELOG.

Closing the file resolves the ambiguity that produced the hole in the first place.
An active log with an unstated scope invites exactly what happened: some operators
wrote entries, most did not, and the file silently became misleading — an 18-release
hole between 0.0.27 and 0.0.46 reads as "nothing happened," which is false.

## What changes

1. The file gains a status header **at the top** stating it is closed, what it
   covers, where the record continues, and that the 0.0.28–0.0.45 hole is
   deliberate. (Its title and charter were at line 1096 of 1188 — below every
   entry — so no reader ever saw them.)
2. The original charter sentence is preserved and annotated superseded, following
   the 0.0.39 precedent: history is annotated in place, never deleted.
3. The "Future entries" template at the tail is replaced with a pointer. That
   template is the active cause of new entries — it instructs the next writer to
   add one.
4. The retracted "4 days" claim at line 1108 is annotated in place rather than
   removed, since the file is now an archive of what was believed at the time.

## Rejected alternatives

- **Delete the file.** Rejected: 0.0.1–0.0.27 and methodology v1.0–v5.0 exist only
  here in narrative form. ROADMAP rows are terser. History is preserved, not
  deleted.
- **Rename to `methodology/ARCHIVE-changelog.md`.** Rejected: inbound references
  exist and a rename buys nothing a header cannot state.
- **Move the 0.0.46 entry out to make the closure clean.** Rejected: it is
  accurate and was written in good faith under the old ambiguity. It stands as the
  closing entry; the header explains why it is the last.

## Consequence for AGENTS.md

The provisional note added at 0.0.44 ("the CHANGELOG backlog is known and
unresolved — do not silently backfill it") is replaced by the settled disposition.
