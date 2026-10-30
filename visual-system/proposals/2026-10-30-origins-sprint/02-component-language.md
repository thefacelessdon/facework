---
status: proposal (Experimental)
extends: DESIGN.md §6–§7; design-eye components.yaml (record-label, display, section-head, reading, prose)
---

# 02 — Component language for the Are.na / Index

The Index is the research spine: Are.na channels pulled into face.works and pushed
out to X. Each component below is a **reading-shaped** unit (mono eyebrow → title
→ body → instrument → verdict, DESIGN.md §6), built only from existing `--rr-*`
tokens. None of them is a card.

The shape law carries over: **square = open / still collecting, circle = settled /
issued**, rendered only by `ShapeMarker`.

---

## 1. Archive block

The atom. One Are.na block (image, text, link, media, attachment) as Facework
holds it.

```
■ BLK-0412 · IMAGE · are.na/facework-index            ← mono label (record-label)
[ image — halftone only if a captured reproduction ]
Title of the block, in Literata                        ← reading title
source-domain.com · captured 2026-10-28                ← mono, only facts the source gives
  ╰ "Why this is here." — margin note, Literata italic ← annotation hand (optional)
↳ in 3 channels                                        ← connection count, mono
```

- **Square** while uncommented / unconnected. **Circle** once it has a note and at
  least one connection. That is the block "settling."
- The ID is Facework's, stable across Are.na → site → X, so a post can cite it.
- The date appears **only if the source supplies one** (`no-fabricated-records`).
- On X (Are.na → X), the block renders as: mono label line, then the title, then
  the note. Same order, so a post reads as a citation, not an ad.

## 2. Channel

A collection of blocks with a declared intent.

- **Head:** mono label (`CHANNEL · INDEX`), name in Schibsted (structure voice),
  one-sentence **intent** in Literata, then a **Holdings line**:
  `■ 41 BLOCKS / 12 NOTED · 29 OPEN`, derived from the blocks, never restated.
- **Body:** ledger rows by default. Contact sheet only for image-only channels
  (01-brief §3).
- **Domain tag:** domains are a mono tag on the channel (`DOMAIN · FOOD`,
  `DOMAIN · DELTA`), **never** a color and **never** a top-level section. That
  keeps domains open: a new domain is a new tag value, not a redesign. This answers
  the Open Domain Map discipline.

## 3. Finding

What a channel produced: a claim that came out of the archive. A finding is a
**reading**, so it uses the full reading grammar.

```
○ FINDING 07 · FROM CHANNEL INDEX · 5 BLOCKS CITED
The claim, one sentence, Literata display size.
Body: two or three short paragraphs.
[instrument — one of the five, or a contact-sheet strip of the cited blocks]
Verdict line, mono: SETTLED / OPEN / CONTESTED
```

- **Every finding cites blocks by ID.** Without citations it's an essay, not a
  finding.
- The Archive Review's "16 findings, 0 confirmed" is exactly this component: 16
  square markers, 0 circles. The component shows review state honestly.

## 4. Chapter

The narrative unit: the brand reads like a study with a prologue and chapters.

- Mono label with a **real** index (`CHAPTER 3 OF 4`, from the roadmap) — clause
  `index-only-where-order-is-real`.
- **Prologue** (optional, chapter 1 only): the narrator's voice (§6), set in
  Literata at reading size, max 68ch, no pull-quote theatrics.
- A chapter **contains** findings and links channels. It does not restate them.
- The chapter list renders as a table of contents in the margin rail (the existing
  Reading margin pattern).

## 5. Issue / drop

The one loud surface (③). A dated, numbered bundle of findings and blocks that
ships to the public.

- **Cover (revision 2):** paper ground. The lockup sits on its fixed clear band
  (FN-01). Real archive fragments crop around it. **One** accent label carries
  the issue name or number (FN-03: UPLOAD's single green tab). Numerals are built
  from wordmark strokes (01-brief §1). Mono colophon
  (`ISSUE 01 · 2026-11 · 6 FINDINGS · 38 BLOCKS`). *Revision 1's full accent
  field is withdrawn.*
- **No status markers on the cover.** The accent must never be read as a state.
- **Inside the issue it's Reading Room again:** paper, ink, verdigris. Loud is
  the door, quiet is the room. That is the whole rule.
- Sticker labels (③) are allowed on the cover only, as squared ink tabs with mono
  text. They are not pills, not rounded, not "NEW!" badges.

## 6. The Faceless Don: where the voice sits

The narrator is a **lens**, not a mascot. In canon it is already the byline
(`author: The Faceless Don` on the theory docs).

| Placement | Allowed | Form |
|---|---|---|
| Byline on readings, chapters, issues | yes | mono: `BY THE FACELESS DON` |
| Prologue to a chapter or issue | yes | Literata, first person plural or second person, ≤ 3 paragraphs |
| Margin note on an archive block | yes | Literata italic, one or two sentences: *why this is here* |
| Colophon line on an issue | yes | mono, one line |
| Avatar, illustration, silhouette, mask icon | **no** | none |
| Chatbot / "ask the Don" UI | **no** | none |
| Voice in navigation, buttons, errors, legal | **no** | the system speaks plainly there |
| Section heads | **no** | heads are the system's voice (Schibsted), not the narrator's |

Rule of thumb: **the Don frames, the record certifies.** The Don can say why
something matters. Only mono can say what something *is* (ID, source, count).

*Voice calibration is blocked on `02-narrative-rewrite.md`. The register above
(plain, unhurried, no exclamation points) is DESIGN.md §11's `copy-is-a-reading`,
not the Origins voice.*

---

## Revision 2: where each component traces

| Component | New behavior | Trace |
|---|---|---|
| Archive block | Stable Facework ID survives every remix and re-post | FN-06 (remix needs lineage) |
| Archive block | Real notes and scans are shown as blocks, flat | FN-01 §5 |
| Channel | Default motion is **accretion**: blocks arrive along their connections, then settle | FN-03 §3; 05 P4 |
| Channel | Can be **closed as a volume** (issued, circle) and a new volume opened; closed volumes are read-only | FN-04 §8 (full notebooks go in a box) |
| Index | A **reread** view surfaces older blocks in order, not just "latest" | FN-04 §8 (review is the method) |
| Finding | On time-based sources, citations are **pinned at a timestamp** on a trace | FN-07 §8 |
| Finding / film | The **attention box** cuts to the cited block | FN-01 §4; 05 P3 |
| Issue cover | One accent label, lockup on a fixed band | FN-03 §2, FN-01 §2 |
| Narrator | Byline and prologue only; never a character | FN-02 §8 (charming characters take over) |

## Token map (no new tokens except the proposed `--rr-issue`)

| Component part | Token |
|---|---|
| Labels, IDs, holdings, colophon | `--rr-font-record`, `--rr-muted`, counts in `--rr-text-strong` |
| Titles, prologue, notes | `--rr-font-reading` |
| Channel names, section heads | `--rr-font-structure` |
| Rules, contact-sheet gutters | `--rr-line` (1px) |
| Links, active channel | `--rr-accent-text` |
| Shape markers | `ShapeMarker` (status tokens) |
| Issue cover field | `--rr-issue` (**proposed**, per issue) |
