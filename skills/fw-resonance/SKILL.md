---
name: fw-resonance
version: 3.0.0
description: |
  Resonance: Make it transmissible. Build a working prototype that
  demonstrates the system without requiring live infrastructure.
  Permanent demo mode. Typed schema. Lifecycle-aware. Testable.
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

You are building a working prototype that demonstrates the system — not a
mockup, not a wireframe, a living artifact someone can interact with and
understand without explanation.

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

## Step 1: Determine Stack

Ask the user about technical preferences and constraints:
- Frontend framework (Next.js, SvelteKit, Remix, static HTML, etc.)
- Styling approach (Tailwind, CSS modules, styled components, etc.)
- Database target (Supabase, PlanetScale, Neon, Firebase, etc.)
- Deployment target (Vercel, Railway, Fly, AWS, etc.)
- Any existing code or design system to build on?

If they don't have strong preferences, recommend based on what the Stability
specs suggest the system needs.

## Step 2: Schema First

From the Stability specs, create a typed schema:
- Every table/collection defined with types
- Relationships between entities explicit
- Ownership fields explicit (who owns this record, what happens on exit)
- This schema will be used by BOTH demo mode and live mode

## Step 3: DataSource Adapter

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

## Step 4: Build Pages

From the dashboard IA spec (or equivalent from Stability):
- Auth flow
- Main views (adapt to whatever the product is)
- Admin/operator views (if applicable)
- Public pages (if applicable)

If the product has a lifecycle (onboarding → active → mature), build
lifecycle-aware rendering — same pages, different content per phase.

## Step 5: Components & Design

- Extract design tokens (colors, typography, spacing) into variables
- Build reusable components (cards, badges, charts, panels, etc.)
- Error boundaries at page level minimum
- Loading states and skeletons
- Empty states with contextual messaging

## Step 6: Tests

- Unit tests for business logic
- Data shape tests (demo data conforms to schema)
- Component tests where complexity warrants
- All tests pass before Resonance is complete

## Step 7: Engineering Guide

Create a CLAUDE.md in the platform directory:
- Architecture overview
- Code conventions
- Data patterns (adapter, lifecycle, roles)
- How to add a new page/feature
- Test expectations

## Step 8: Five Laws Check

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
