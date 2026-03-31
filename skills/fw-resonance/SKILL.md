---
name: fw-resonance
version: 4.0.0
description: |
  Resonance: Phase 6 of the Facework Protocol (Activation). Build a working
  prototype that demonstrates the system without requiring live infrastructure.
  Permanent demo mode. Typed schema. Lifecycle-aware. Testable. Runs after
  Architecture and Flow (Phase 5), before Integrity (Phase 7).
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - AskUserQuestion
  - Agent
---

# /fw-resonance — Make It Transmissible

**Phase 6 of the Facework Protocol (Activation).**
Entry: WorkflowPlaybooks and SystemArchitecture exist (Phase 5 gate).
Exit: LaunchPlan and working prototype with DESIGN.md applied; demo data; test suite passing.

You are building a working prototype that demonstrates the system — not a
mockup, not a wireframe, a living artifact someone can interact with and
understand without explanation.

**Strategy Lock boundary:** If a decision locked in Phase 4 says "don't build X
yet," the prototype demonstrates architecture and design language WITHOUT building
that surface. Resonance proves transmission — it does not override strategy lock
decisions. The prototype shows what the system IS, not everything it COULD become.
When in doubt, read the DecisionLedger before scoping prototype features.

## The Cultural Physics Foundation

Resonance is the second term in the numerator of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

In physics, resonance is the amplification that occurs when frequencies align.
In culture, resonance is the emotional and cultural connection between creators
and audiences — work that feels "in tune" with its environment. Honest, relevant,
alive.

A prototype that resonates doesn't just demonstrate features. It carries the
frequency of the community it was built to serve. The demo data should feel like
real people with real names and real work — not "Test User" and "Lorem ipsum."
The interface should reflect the aesthetic values of the people who will use it.
The interactions should move at the tempo of the community, not the tempo of
the platform.

Resonance is what makes the system transmissible without explanation. When someone
from the community sees it and says "that's for me" before reading a single line
of documentation — that's resonance. It's the difference between a product that
serves a community and a product that was built about that community by outsiders.

## Core Principles

1. **Demo mode is permanent** — not scaffolding, a feature. Demo and live
   data share the same interface. Toggle with one environment variable.
2. **Schema-first** — define the typed schema BEFORE the database exists.
   The schema IS the database definition.
3. **Lifecycle-aware** — the UI adapts to where the user is in their journey.
   New users see different content than power users.
4. **Build against specs** — every page, component, and data query maps to
   a Stability spec. Contradictions surface as type errors.
5. **Carry the frequency** — the prototype should reflect the identity and
   aesthetic of the community it serves, not generic SaaS patterns.

## Step 0: Read Existing Artifacts

Before building anything, scan the project for prior work that informs the prototype:
- All artifacts from Phases 1–5 (SignalThesis through SystemArchitecture)
- DecisionLedger — especially decisions that constrain prototype scope
- DesignLanguageSpec / DESIGN.md from Phase 3 (if produced there)
- Existing prototypes, mockups, or design comps
- Existing codebase, component libraries, or design systems
- Brand assets, logos, icons, or visual materials

Summarize what you found. Do not rebuild what already exists and still holds.

## Step 1: DESIGN.md — Design Language Spec

**This step runs BEFORE any code is written.** The Design Language Spec is
the visual implementation of Frequency. Without it, the prototype defaults
to generic SaaS patterns — structurally correct but culturally incoherent.

Produce `DESIGN.md` at the project root. It must cover:

1. **Typography system** — primary typeface, scale (on 8px baseline grid),
   weight rules, tracking, size hierarchy (headline → body → caption)
2. **Color system** — primary palette + accent colors mapped to system states
   or semantic meaning. Accents are not decoration — they communicate.
   Rules: when accents appear, how many per section, never as backgrounds.
3. **Grid + layout rules** — column system, margins, vertical spacing,
   allowed layout structures. If it feels like improvisation, it's wrong.
4. **Motion principles** — easing curves, what motion communicates (system
   stabilizing, not animating), what's prohibited (bounce, elastic, playful).
5. **Iconography / symbol system** — if applicable. Symbols map to domain
   concepts, never random icons.
6. **Tone + textual rules** — voice, sentence structure, allowed/disallowed
   language patterns. What the copy world feels like.

The spec is derived FROM the creator's frequency and the identity expression
decisions made in Current. It is not imposed — it emerges from who they are.

Check: if someone from the community saw only the DESIGN.md, would they
recognize it as built for their world?

## Step 2: Determine Stack

Ask the user about technical preferences and constraints:
- Frontend framework (Next.js, SvelteKit, Remix, static HTML, etc.)
- Styling approach (Tailwind, CSS modules, styled components, etc.)
- Database target (Supabase, PlanetScale, Neon, Firebase, etc.)
- Deployment target (Vercel, Railway, Fly, AWS, etc.)
- Any existing code or design system to build on?

If they don't have strong preferences, recommend based on what the Stability
specs suggest the system needs.

## Step 3: Schema

From the Stability specs, create a typed schema:
- Every table/collection defined with types
- Relationships between entities explicit
- Ownership fields explicit (who owns this record, what happens on exit)
- This schema will be used by BOTH demo mode and live mode

## Step 4: DataSource Adapter

Create an interface that both data sources implement:
```
DataSource interface
├── DemoDataSource (hardcoded realistic data)
└── LiveDataSource (real database queries — scaffolded, not implemented)

Toggle: environment variable
Demo mode available permanently.
```

Populate demo data with realistic content — not "test test test" or
"Lorem ipsum." Names, numbers, dates that feel real. If the product serves
a specific community, the demo data should reflect that community authentically.

## Step 5: Build Pages

From the dashboard IA spec (or equivalent from Stability):
- Auth flow
- Main views (adapt to whatever the product is)
- Admin/operator views (if applicable)
- Public pages (if applicable)

If the product has a lifecycle (onboarding → active → mature), build
lifecycle-aware rendering — same pages, different content per phase.

## Step 6: Components & Design

- Apply DESIGN.md tokens (colors, typography, spacing) from Step 1
- Build reusable components (cards, badges, charts, panels, etc.)
- Error boundaries at page level minimum
- Loading states and skeletons
- Empty states with contextual messaging

## Step 7: Tests

- Unit tests for business logic
- Data shape tests (demo data conforms to schema)
- Component tests where complexity warrants
- All tests pass before Resonance is complete

## Step 8: Engineering Guide

Create a CLAUDE.md in the platform directory:
- Architecture overview
- Code conventions
- Data patterns (adapter, lifecycle, roles)
- How to add a new page/feature
- Test expectations

## Step 9: Five Laws Check

Before marking Resonance complete, evaluate the prototype against the
five Laws of Design from Cultural Physics:

1. **Energy Must Move.** Does the prototype feel alive? Is there motion,
   progression, dynamic content — or does it feel static and inert?
2. **Emotion Leads Form.** Does the design start from how it should feel,
   not just what it should display? Would a user feel something before
   they understand the interface?
3. **Rhythm Over Rules.** Does the system organize by tempo — faster for
   urgent actions, slower for important decisions — or does everything
   move at the same pace?
4. **Friction Reveals Imbalance.** Where is friction in the prototype?
   Is it intentional (protecting the user) or accidental (serving the
   platform)? Accidental friction is entropy — fix it.
5. **Dual Worlds, One Current.** If this system has both physical and
   digital touchpoints, do they hum at the same frequency? Would the
   experience feel coherent across both planes?

Flag any law violations. Fix what can be fixed now. Note the rest for
/fw-entropy.

## Output

"Resonance built. Prototype runs at localhost with demo data.
[N] pages, [N] components, [N] tests passing. Run /fw-entropy
to pressure test the architecture."
