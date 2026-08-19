---
title: "Standards Integration Edit Sequence"
date: 2026-06-29
base: "origin/main @ 6dab2fe"
artifact: "methodology/patches/2026-06-29-standards-integration-on-origin-main.patch"
status: Ready
---

# Standards Integration Edit Sequence

This sequence applies the June 29, 2026 Standards Architecture integration on
top of the current public `origin/main` line without regressing the shipped
`0.0.5` through `0.0.8` operating-layer work.

## Goal

Integrate the parts of the standards review that are already settled:

- the Constitution
- the Coherence Design discipline document
- the reconciliation decision record
- the deferred `standards/` archive
- the "Protocol establishes / Postures maintain" framing

Do **not** overwrite or simplify the shipped Runtime Ports, HarnessBundle,
DesignInfrastructure, or Observability Interface work.

## Base

- Branch tip: `origin/main`
- Commit: `6dab2fed4286d63e420df3a1c20ef006858440db`
- Public release line preserved: `0.0.5` to `0.0.8`

## Edit sequence

1. Start from a clean branch created from `origin/main`.
2. Apply `methodology/patches/2026-06-29-standards-integration-on-origin-main.patch`.
3. Verify the following new files are present:
   - `CONSTITUTION.md`
   - `theories/coherence-design.md`
   - `methodology/architecture-reconciliation-2026-06.md`
   - `standards/README.md`
   - `standards/source/standards-architecture-draft-v1.md`
4. Verify the following files changed, but still retain the public
   runtime-portability framing:
   - `README.md`
   - `CLAUDE.md`
   - `skills/OPERATING_SKILLS.md`
   - `ROADMAP.md`
   - `methodology/CHANGELOG.md`
5. Confirm `VERSION` remains `0.0.8`.
6. Run a final review to ensure the standards track is clearly marked deferred
   and not canonical.

## Intent by file

### Add as-is

- `CONSTITUTION.md`
- `theories/coherence-design.md`
- `methodology/architecture-reconciliation-2026-06.md`
- `standards/README.md`
- `standards/source/standards-architecture-draft-v1.md`

### Merge selectively

- `README.md`
  - Add the five-layer positioning section.
  - Add the Constitution as governing authority.
  - Keep the shipped runtime/interface narrative intact.
- `CLAUDE.md`
  - Update repo structure to reflect Constitution, standards deferment, and the
    Theory/Discipline/Practice distinction.
- `skills/OPERATING_SKILLS.md`
  - Reframe operating skills as Postures without changing the command set.
- `ROADMAP.md`
  - Add a queued post-`0.0.8` standards integration note instead of rewriting
    shipped release history.
- `methodology/CHANGELOG.md`
  - Add an unreleased standards integration entry above `0.0.8`.

## Non-goals

- No `PROTOCOL.md` rollback or rewrite
- No `VERSION` downgrade
- No attempt to activate FS/FOS/FRS as canonical
- No mutation of the public `0.0.5` to `0.0.8` operating-layer record

## Expected outcome

After the patch:

- Facework still reads publicly as runtime-portable and manifest-driven.
- The practice now has a governing Constitution and explicit Discipline layer.
- The standards architecture exists in-repo as a deferred archive with a locked
  reconciliation record.
- "Postures" becomes public language without erasing the shipped operating-layer
  work.
