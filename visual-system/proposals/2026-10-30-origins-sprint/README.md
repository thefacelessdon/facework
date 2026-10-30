---
status: proposal (FVS authority level 5 — Experimental)
date: 2026-10-30
author: Claude (design lead, first sprint), for Stead
source: FACEWORK-VISUAL-SYSTEM-CLAUDE-HANDOFF-2026-10-30.md + Oct 28 mood board (7 panels)
promotes_to: nothing until Stead + Canon Keeper rule. Not canon. Not live.
---

# Origins → Reading Room: first visual-system sprint

This folder holds the four first-sprint deliverables from the Oct 30 visual-system
handoff. They are a **proposal**. Nothing here changes `DESIGN.md`,
`reading-room.css`, the design-eye contract, or face.works. Every rule below either
**extends** the locked Reading Room or is marked as a **conflict** for Stead to decide.

| File | Deliverable |
|---|---|
| [field-notes/](field-notes/FN-00-index.md) | **Read first.** One note per source, with frame and timestamp citations, coverage, and corrections to the mood board |
| [01-brief.md](01-brief.md) | Visual-system brief (revision 2): every rule traced to a field note |
| [02-component-language.md](02-component-language.md) | Are.na/Index components and where the Faceless Don voice goes |
| [03-directions.md](03-directions.md) | Three directions, each citing field notes, plus a recommendation |
| [04-delta-futurism.md](04-delta-futurism.md) | How the system carries Delta Futurism (recommendations only) |
| [05-motion-principles.md](05-motion-principles.md) | Motion principles: the mark holds, the record moves |
| [06-mark-study.md](06-mark-study.md) | **Mark reopened (Stead, 2026-10-30).** Criteria derived from canon and research, three candidates, mark and motion together. Recommends M1 "The Frame" |
| [07-trademark-check.md](07-trademark-check.md) | **Lookalike check (not legal advice).** M1 is too close to Reg. 3630396 and too generic to own → fall back to M2; keep The Frame as the attention box. The "Facework" name needs clearance (Kyle McDonald's 2020 game) |
| [08-m2-drawing-and-attention-box.md](08-m2-drawing-and-attention-box.md) | **M2 drawing pass:** master, 32/24/16 px, lockups, clear space, minimum sizes, filing composite, refined numerals; The Frame specified as the attention-box device. Files: `marks/m2/`, generator `marks/build_m2.py` |
| [09-m2-trademark-check.md](09-m2-trademark-check.md) | **M2 lookalike check (not legal advice):** no strong hit; four moderate on structure only; the motif is crowded and generic, so distinctiveness rests on the drawing + FACEWORK composite. Call: proceed with M2, file as the composite, keep the rising crossing |
| [board.html](board.html) | One page to review: findings, field-note highlights, directions, specimens |

**Revision history:** revision 1 (morning of 2026-10-30) worked from the
mood-board PNG. Stead's rebuilt handoff made research come first, so revision 2
rebuilt the brief and directions from the field notes. Revision 1's mood-board
claims that the sources contradict are listed in
[FN-00](field-notes/FN-00-index.md).

## How this was reconciled

The Origins material is ChatGPT-era. On 2026-08-11 Stead ruled (FW-DEC-002) that
ChatGPT-era coinages get **no grandfather rights**: a term survives only if it is
re-derived from canon. So this sprint treats Origins and the mood board as
*influence*, and the Reading Room (DESIGN.md + `--rr-*` tokens + design-eye
clauses) as the system being extended. Each proposal names the clause it extends
or strains.

Something already lines up: the canon documents (`theories/*.md`,
`methodology/build-methodology.md`) carry **"author: The Faceless Don"** as their
byline. The narrator already exists in canon as a byline, not a character. That is
the placement this proposal keeps.

## Conflicts that need Stead's ruling (none resolved here)

1. **Masthead framing. RULED by Stead, 2026-10-30.** *"A public record of
   coherence"* stays the masthead (FW-DEC-002 stands, no canon change). *"The study
   of digital identity, autonomy, and perception"* becomes the Index's
   **field-of-study line**, set under the masthead on Index and issue surfaces,
   never as a second tagline. Supporting evidence: the Times kept its masthead
   unchanged for 175 and ran its campaign line underneath (field-notes/FN-01).
   Consequence: Direction A stays the recommended base.
2. **Mark (reopened by Stead 2026-10-30; see 06-mark-study.md).** Originally framed as "blackletter-adjacent mark." The Coherence Mark and Register wordmark are
   locked and derived from the governing equation. Proposal: **no new logo.** The
   heritage-craft energy (NYT 175) goes into a per-issue **nameplate**, drawn as
   lettering, that sits *under* the locked identity and never replaces it.
3. **Issue accent. RULED by Stead, 2026-10-30: one label per issue.**
   - Each issue may carry **one** accent label (a tab or sticker).
   - Its hue is recorded in that issue's colophon.
   - It never appears on a reading page, and a page carrying it shows no status
     markers.
   - Evidence: UPLOAD #13 is grey with a single green tab (FN-03); the Times'
     only accent points (FN-01).
   - **Not yet applied:** this amends DESIGN.md §4 and the design-eye clause
     `color-classifies`, which goes through the normal release path. Nothing in
     DESIGN.md has been changed.
4. **Are.na grids versus "no repeated equal card grids."** An Are.na channel *is*
   an equal grid. Proposal: channels default to **ledger rows**. A
   **contact sheet** (equal grid, no cards, hairline gutters) is allowed only for
   image-only channels, where the content really is tabular.
5. **Where the Index lives in the IA.** The site has two modes (The Work / The
   Practice). The Index (Insights, Index, Beacon, Chronicle) fits neither cleanly.
   Proposal: the Index is a **holding of The Work**, a sibling of Runs & Evidence,
   not a third mode. Ruling needed before any IA build.
6. **Origins channel names** (Beacon, Chronicle, and the Phase-3 names Veil,
   Specter, Parallax) are ChatGPT-era coinages. Under FW-DEC-002 they need recorded
   derivations or plain names. Proposal: use plain descriptive names on surfaces
   until each is ruled on.

## Sources I could not read (please attach)

The handoff's files live on `/workspace/private/...`, which this machine can't
reach. I worked from the handoff text and the mood-board composite only.

| Priority | File | Why it matters |
|---|---|---|
| 1 | `02-narrative-rewrite.md` | The real Faceless Don voice. My narrator rules are inferred, not read. |
| 2 | `07-identity-as-infrastructure.md` | The thesis the type and dignity rules should serve. |
| 3 | `01-brand-guide-original.md` | So I can list every Origins visual rule this proposal drops, not guess at them. |
| 4 | `03-arena-automation-tables.md` | Exact channel names and the Are.na→X block shapes the components must survive. |
| — | `05-black-identity-report.md`, `06-mind-map.md` | The dignity rules (01-brief §6) should be checked against the research itself. |
| — | `delta-futures-doc.md`, `CONTINUITY.md` | 04-delta-futurism.md is based on two handoff paragraphs only. |
| — | `nytimes-still.jpg`, `prada-1.jpg`, `smc90-1.jpg` | Full-resolution references for texture rules. |

Media gaps from the rebuilt handoff (details in
[FN-00](field-notes/FN-00-index.md)):
- the Grail transcript for 6:00–9:00;
- `smc90-1/2/3.jpg`, `img-6204.png`, `unnamed-1.*`;
- the NYE launch film (the only source where the 175 mark moves).

Mood-board images, video frames and stills are third-party references. They are **not** committed here;
panels are cited by number and name.
