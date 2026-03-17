---
name: fw-resonance
version: 2.0.0
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

## Core Principles

1. **Demo mode is permanent** — not scaffolding, a feature. Demo and live
   data share the same interface. Toggle with one environment variable.
2. **Schema-first** — define the typed schema BEFORE the database exists.
   The schema IS the database definition.
3. **Lifecycle-aware** — the UI adapts to where the user is in their journey.
   New users see different content than power users.
4. **Build against specs** — every page, component, and data query maps to
   a Stability spec. Contradictions surface as type errors.

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
"Lorem ipsum." Names, numbers, dates that feel real.

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

## Output

"Resonance built. Prototype runs at localhost with demo data.
[N] pages, [N] components, [N] tests passing. Run /fw-entropy
to pressure test the architecture."
