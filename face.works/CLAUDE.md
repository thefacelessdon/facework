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
| Framework | Next.js (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Typography | Berkeley Mono (JetBrains Mono fallback) |
| Language | TypeScript (strict) |
| Data | Typed demo data (no database at MVP) |

## Visual Language System

The VLS is defined in `globals.css` and enforced across all pages.
Source docs: `../original site exploration reference/`

**Rules you must follow:**
- Dark palette only: Ink Black, Graphite, Stone, Soft White
- Accents are system states, not decoration: clarity (blue), resonance (amber), entropy (red), flow/coherence (green)
- Never more than one accent per screen section
- Never use accent as background color
- All transitions use `var(--ease-settle)` — slow stabilization, no bounce
- 4 layout types only: single-column narrative, split 50/50, full-width stacked, OS diagram
- Section headers: `text-xs tracking-[0.2em] uppercase text-muted`
- Body text: 18px base, tight tracking, weight used sparingly

**Colors as states (from `globals.css`):**
```
--state-clarity:   var(--field-blue)      #8FAFFF
--state-resonance: var(--signal-amber)    #FFD089
--state-entropy:   var(--pulse-red)       #FF7C7C
--state-flow:      var(--emergence-green) #7AFFC4
--state-coherence: var(--emergence-green) #7AFFC4
```

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
2. Use the layout pattern: `<div className="mx-auto max-w-5xl px-8 lg:px-20 py-20 space-y-16">`
3. Section headers: `<h2 className="text-xs tracking-[0.2em] uppercase text-muted">`
4. Section separators: `<hr />`
5. Follow VLS rules (dark palette, accent-as-state, 4 layout types)
6. If data-driven, add schema to `data/schema.ts` and demo data to `data/demo.ts`

## How to Run

```bash
cd face.works
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
