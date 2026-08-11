# face.works — Engineering Guide

The protocol site for Facework. Presents the open protocol, shows proof,
enables creator engagement, and tracks Facework's own coherence in public.

## Architecture

The IA is two modes of one system (see `DESIGN.md`): **The Work** (the Record /
light register) and **The Practice** (the Field / dark register).

```
src/
├── app/                        ← Next.js App Router pages
│   ├── page.tsx                ← Home — The Work front door (Record register)
│   ├── theories|postures|runs|methodology/
│   │                             ← The Work: working-canon browse surfaces
│   │                               (Constitution + Protocol link straight to /protocol)
│   ├── engage/page.tsx         ← The Practice hub (Field register)
│   ├── proof/, cases/          ← proof + cases (fold into The Practice)
│   ├── protocol/
│   │   ├── page.tsx            ← The System — browsable doc index
│   │   └── [slug]/page.tsx     ← Individual doc reader
│   ├── about|status|accessibility|privacy/   ← standing pages
│   ├── opengraph-image.png, icon.svg         ← share image + favicon
│   ├── layout.tsx              ← Root layout (Nav + Footer)
│   ├── reading-room.css        ← The Reading Room design language (--rr-* tokens) — SOURCE OF TRUTH
│   └── globals.css             ← base reset + legacy --fw-* aliases repointed to the locked type trio
├── components/
│   ├── Nav.tsx, Footer.tsx, Markdown.tsx, WorkSurface.tsx
│   └── rr/                     ← Reading Room primitives: CoherenceMark, FaceworkWordmark,
│                                 Reading, ReadingIndex, SectionHead, RecordLabel, InkCTA,
│                                 CoherenceVerdict, StructureLineage, Trace
└── data/                       ← Typed data layer (schema.ts interfaces + demo.ts data)
```

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router; not static export — no `output: 'export'`, ships security headers via `next.config.ts` `headers()`, pages prerendered and served by the Next runtime) |
| Styling | Tailwind CSS v4 |
| Typography | Self-hosted `@fontsource` variable trio — Literata (reading), Schibsted Grotesk (structure/display), Spline Sans Mono (record voice) |
| Language | TypeScript (strict) |
| Data | Typed demo data (no database at MVP) |

## Design Language — The Reading Room

The design language is **The Reading Room**, defined in `reading-room.css` with
`--rr-*` tokens (OKLCH only). Its binding contract is `DESIGN.md` (+ `.impeccable.md`);
the mark and wordmark derive from `../../../visual-system/identity/` (FVI-001,
FVI-100). `globals.css` is only the base reset plus legacy `--fw-*` aliases that
now point at the Reading Room stack (`--fw-font-reading → --rr-font-reading`,
`--fw-font-structural → --rr-font-record`) — treat `--rr-*` as canonical.

**Two registers of one system** (governing metaphor: *it doesn't decorate — it reads*):
- **The Record** (`.rr`) — light warm paper. This is **The Work**.
- **The Field** (`.rr-field`) — dark warm obsidian. This is **The Practice**.

A page opts into a register on its root wrapper (`.rr` or `.rr-field`), then
`.rr-page`. Primitives style themselves via register-neutral aliases
(`--rr-ground`, `--rr-text`, `--rr-accent`…) so the same primitive works in either
register unchanged.

**Rules you must follow:**
- **Type roles:** `--rr-font-reading` (Literata) for reading/claims; `--rr-font-structure`
  (Schibsted Grotesk) for display/headings/UI; `--rr-font-record` (Spline Sans Mono)
  for eyebrows, metadata, figure/artifact IDs.
- **Color classifies, never decorates.** The single **brand accent is verdigris**
  (`--rr-verdigris` / `--rr-verdigris-text` for AA text; `--rr-verdigris-field` on dark).
  Primary CTAs are **ink** (`--rr-ink`), never verdigris.
- **Status colors are classification only** (not brand): `--rr-settled` (green),
  `--rr-attention` (amber), `--rr-exposure` (red), `--rr-archive` (violet), each with
  `-text`/field-lifted tiers. Never more than one accent per section.
- **Motion:** `--rr-ease-settle: cubic-bezier(0.22, 1, 0.36, 1)`; respect
  `prefers-reduced-motion`. (The legacy `--ease-resolve` in `globals.css` is superseded.)
- **4pt spacing scale** (`--rr-sp-*`); reading measure `--rr-measure` (68ch).

**The mark:** use the `CoherenceMark` component — open-center, **no filled node in any
state**; `micro` variant ≤31px. Never reintroduce a center dot.

## Data Pattern

Schema-first. `data/schema.ts` defines TypeScript interfaces.
`data/demo.ts` implements them with realistic data.

To update site content (e.g., new case study, updated metrics):
1. Add/modify data in `data/demo.ts`
2. If structure changes, update `data/schema.ts` first
3. TypeScript will catch mismatches

The coherence tracker on `/status` reads from `coherenceSnapshot` in demo.ts.
Update this object as real metrics change.

**Protocol docs are canon, not demo data.** Every `/protocol/[slug]` page serves
the FULL canonical document (theories/, CONSTITUTION.md, PROTOCOL.md, …), never
an excerpt. The pipeline:

- `scripts/sync-canon.mjs` copies the mapped canon files into `content/canon/`
  as committed DERIVED COPIES (Vercel only uploads this directory, so the build
  must be hermetic). Regenerate with `npm run sync-canon`; drift fails
  `npm run sync-canon -- --check` and `src/data/canon-sync.test.ts`.
- `src/data/canon.ts` (server-only — never import from client components) reads
  the copies at build time and exposes `protocolDocs` with `sourcePath`/
  `sourceSha` provenance, shown as a record line on the doc page.
- **Never edit `content/canon/*.md` or paste doc text back into demo.ts** —
  edit the canonical source in the repo, then re-run `npm run sync-canon`.

## How to Add a New Page

1. Create `src/app/{slug}/page.tsx`.
2. Pick the register for the mode: **The Work** → `.rr` (Record); **The Practice** →
   `.rr-field` (Field). Wrap the page root in that register class, then `.rr-page`
   (and `.section-page` for the legacy layout reset). Mirror the closest existing
   page — `page.tsx` (Work) or `engage`/`proof` (Practice).
3. Build with the Reading Room primitives (`reading-room.css` + `components/rr/`):
   `.rr-column` / `.rr-masthead` for the threshold, `.rr-display`/`.rr-lede` for the
   opening statement, `.rr-section` + `SectionHead` for sections, `.rr-prose` for
   long-form reading, `RecordLabel` (`.rr-label`) for mono eyebrows, `Reading`/
   `ReadingIndex` for record rows, `InkCTA` for actions, `CoherenceVerdict` for
   status. Do **not** reintroduce the old `.section-records`/`.artifact-id` primitives
   (removed) or the `mx-auto max-w-5xl … space-y-*` bordered-card idiom.
4. Follow the design-language rules above (register tokens, verdigris-as-brand /
   status-as-classification, one accent per section, ink CTAs).
5. If data-driven, add schema to `data/schema.ts` and demo data to `data/demo.ts`.

## How to Run

```bash
cd examples/face.works/prototype
npm install
npm run dev        # localhost:3000
npm run build      # production build
```

## Canonical Numbers

All engagement pricing, capacity, and stage boundary numbers come from
`../define/architecture/business-model/business-model.md`. Never hardcode
numbers on the site that differ from that document.

## Ownership

This site is part of Facework's commercial layer. The protocol docs
displayed on the site are open (anyone can read/use them). The site
itself, its design, and its implementation are Facework property.

@AGENTS.md
