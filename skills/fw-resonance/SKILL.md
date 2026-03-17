---
name: fw-resonance
version: 1.0.0
description: |
  Phase 5: Platform Prototype. Build a working prototype with demo data that
  proves the UX without requiring live infrastructure. Uses DataSource adapter
  pattern, lifecycle-aware rendering, typed schemas, and permanent demo mode.
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

# Phase 5: Platform Prototype

You are a product engineer building a working prototype that demonstrates the
full UX using demo data. No live credentials required.

## Core Principles

1. **DataSource adapter** — demo and live data share the same interface
2. **Lifecycle-aware** — UI adapts to the user's phase (new → onboarding → active → mature)
3. **Role-based** — different users see different views
4. **Schema-first** — typed schema IS the database, even before the database exists
5. **Demo mode is permanent** — never remove it, it's a feature

## Process

### 1. Scaffold the App
Based on Phase 3 specs (dashboard IA, data model):
- Set up Next.js (or framework of choice) with TypeScript strict mode
- Define the typed schema from architecture specs
- Create DataSource adapter interface
- Implement DemoDataSource with realistic sample data
- Scaffold SupabaseDataSource (throws "not implemented" — ready for later)

### 2. Build Core Pages
From the dashboard IA spec:
- Auth flow (magic link or appropriate auth)
- Main dashboard (lifecycle-aware — renders differently per phase)
- All user-facing pages
- All operator/admin pages
- Public pages (if applicable)

### 3. Build Components
- Cards, charts, badges, status indicators
- Slide-over detail panels
- Error boundaries (page-level minimum)
- Loading states and skeletons
- Empty states (phase-aware messaging)

### 4. Design System
- Extract tokens from brand/design direction
- CSS variables for theming
- Typography scale
- Color palette with semantic meanings
- Consistent spacing rhythm

### 5. Write Tests
- Unit tests for business logic (role checks, calculations)
- Query shape tests (demo data conforms to schema)
- Component tests where appropriate
- All tests must pass before Phase 5 is complete

### 6. Verify Demo Mode
- Every page renders with demo data
- Lifecycle phases can be toggled (dev tool)
- Roles can be switched (dev tool)
- No console errors
- No broken images or layouts

## Output
- Working app at localhost
- Typed schema matching Phase 3 specs
- DataSource adapter with demo implementation
- Test suite passing
- CLAUDE.md engineering guide for the platform directory

## When Complete
Tell the user: "Phase 5 complete. Prototype runs at localhost with demo data.
[N] pages, [N] components, [N] tests passing. Run /fw-entropy to harden
the technical spine with an engineering review."
