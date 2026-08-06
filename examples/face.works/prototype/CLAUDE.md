# face.works — Engineering Guide

The protocol site for Facework. Presents the open protocol, shows proof,
enables creator engagement, and tracks Facework's own coherence in public.

## Architecture

```
src/
├── app/                    ← Next.js App Router pages
│   ├── page.tsx            ← Home (identity + equation + CTA)
│   ├── protocol/
│   │   ├── page.tsx        ← Browsable doc index
│   │   └── [slug]/page.tsx ← Individual doc reader
│   ├── proof/page.tsx      ← Case studies + audit results
│   ├── status/page.tsx     ← Live coherence tracker
│   ├── engage/page.tsx     ← Engagement entry point
│   ├── layout.tsx          ← Root layout (Nav + Footer)
│   └── globals.css         ← Visual Language System (VLS)
├── components/             ← Shared components
│   ├── Nav.tsx             ← Site navigation (client component)
│   ├── Footer.tsx          ← Footer with tagline
│   ├── StatusBadge.tsx     ← Status indicators (accessible)
│   └── ProgressBar.tsx     ← Accessible progress bars
└── data/                   ← Typed data layer
    ├── schema.ts           ← TypeScript interfaces
    └── demo.ts             ← Demo data (realistic, not lorem ipsum)
```

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router; not static export — no `output: 'export'`, ships security headers via `next.config.ts` `headers()`, pages prerendered and served by the Next runtime) |
| Styling | Tailwind CSS v4 |
| Typography | Public Sans (reading); JetBrains Mono (structural/mono) |
| Language | TypeScript (strict) |
| Data | Typed demo data (no database at MVP) |

## Visual Language System

The VLS is defined in `globals.css` and enforced across all pages.
Source docs: `../original site exploration reference/`

**Rules you must follow:**
- Light paper palette (`globals.css` sets `color-scheme: light`): Paper, Paper-quiet, Rule, Muted, Graphite, Ink
- Accents are system states, not decoration: clarity (blue), resonance (amber), entropy (red), flow/coherence (green)
- Never more than one accent per screen section
- Never use accent as background color
- All transitions use `var(--ease-resolve)` — slow stabilization, no bounce
- 4 layout types only: single-column narrative, split 50/50, full-width stacked, OS diagram
- Section headers: `text-xs tracking-[0.2em] uppercase text-muted`
- Body text: 18px base, tight tracking, weight used sparingly

**Colors as states (from `globals.css`, light-mode `--fw-*` tokens):**
```
clarity   -> --fw-clarity   / --fw-clarity-text     (blue)
resonance -> --fw-resonance / --fw-resonance-text   (amber)
flow      -> --fw-flow      / --fw-flow-text         (green; also coherence)
entropy   -> --fw-entropy   / --fw-entropy-text     (red)
```
Values are OKLCH, not hex. The `--fw-*-text` variants are the AA-contrast versions for
text on paper; the base variants are for fills/marks. Mapped to `--color-*` aliases in the
`@theme` block.

## Data Pattern

Schema-first. `data/schema.ts` defines TypeScript interfaces.
`data/demo.ts` implements them with realistic data.

To update site content (e.g., new case study, updated metrics):
1. Add/modify data in `data/demo.ts`
2. If structure changes, update `data/schema.ts` first
3. TypeScript will catch mismatches

The coherence tracker on `/status` reads from `coherenceSnapshot` in demo.ts.
Update this object as real metrics change.

## How to Add a New Page

1. Create `src/app/{slug}/page.tsx`
2. Use the VLS grammar, not generic centered cards. Wrap in `.section-page` with a
   `.section-threshold` header (`.eyebrow` / `<h1>` / `.section-intro`). Mirror the closest
   existing page — `privacy`, `accessibility`, `proof`, `status`, or `KnowledgeSection`.
3. Structure content with VLS primitives from `globals.css`: `.section-records`/`.section-record`
   with `.section-head` bands and `.artifact-id` columns (ledger/record rows), `.policy-records`/
   `.policy-record` (boundary/rule lists), `.evidence-strip` (verdict/summary rows), and
   `.claim`/`.display-title`/`.lead`/`.text-link` for statements. Do not reintroduce the
   `mx-auto max-w-5xl … space-y-*` bordered-card idiom.
4. Follow VLS rules (light paper palette, accent-as-state, one accent per section).
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
