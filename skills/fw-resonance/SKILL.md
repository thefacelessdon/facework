---
name: fw-resonance
version: 5.0.0
description: |
  Resonance: Phase 6 of the Facework Protocol (Activation). Build working
  interfaces composed from declared capabilities — not generic prototypes.
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
Entry: WorkflowPlaybooks, SystemArchitecture, and CapabilityMap exist (Phase 5 gate).
Exit: LaunchPlan and working interfaces composed from declared capabilities; demo data; test suite passing.

You are building working interfaces — not a mockup, not a wireframe, not a
generic prototype. Every interface you build must trace to a declared capability
in the CapabilityMap. If an interface needs something that isn't declared,
that is a Stability gap. Stop and backlog it. Do not invent new backend shape
to make a page look complete.

**The composition rule:** Interfaces are compositions, not creations. They
assemble declared capabilities into delivery surfaces for specific people.
A generic output that could belong to any project is a failure.

**Strategy Lock boundary:** If a decision locked in Phase 4 says "don't build X
yet," the interfaces demonstrate architecture and design language WITHOUT building
that surface. Resonance proves transmission — it does not override strategy lock
decisions. When in doubt, read the DecisionLedger before scoping.

## The Cultural Physics Foundation

Resonance is the second term in the numerator of the governing equation:
`Coherence = (Flow × Resonance) / (1 + Entropy)`

In physics, resonance is the amplification that occurs when frequencies align.
In culture, resonance is the emotional and cultural connection between creators
and audiences — work that feels "in tune" with its environment. Honest, relevant,
alive.

Interfaces that resonate don't just demonstrate features. They carry the
frequency of the community they were built to serve. The demo data should feel like
real people with real names and real work — not "Test User" and "Lorem ipsum."
The design should reflect the aesthetic values of the people who will use it.
The interactions should move at the tempo of the community, not the tempo of
the platform.

Resonance is what makes the system transmissible without explanation. When someone
from the community sees it and says "that's for me" before reading a single line
of documentation — that's resonance.

## Step 0: Read Existing Artifacts

Before building anything, scan the project for prior work:
- All artifacts from Phases 1–5 (SignalThesis through CapabilityMap)
- DecisionLedger — especially decisions that constrain scope
- DesignLanguageSpec / DESIGN.md from Phase 3
- CapabilityMap from Phase 5 — **this is the contract your interfaces compose from**
- Existing code, component libraries, or design systems
- Brand assets, logos, icons, or visual materials

Summarize what you found. Identify:
1. What capabilities are declared and available to compose from
2. What the declared integration surface is (owned backend, platforms like Shopify/Substack/Stripe, methodology tools, etc.)
3. What strategy lock decisions constrain scope

Do not rebuild what already exists and still holds.

## Step 1: DESIGN.md — Design Language Spec

**This step runs BEFORE any code is written.** The Design Language Spec is
the visual implementation of Frequency. Without it, interfaces default
to generic SaaS patterns — structurally correct but culturally incoherent.

If DESIGN.md was already produced in Phase 3 (Taste) and still holds, skip
to Step 2. Otherwise, produce `DESIGN.md` at the project root covering:

1. **Typography system** — primary typeface, scale (on 8px baseline grid),
   weight rules, tracking, size hierarchy (headline → body → caption)
2. **Color system** — primary palette + accent colors mapped to system states
   or semantic meaning. Accents are not decoration — they communicate.
3. **Grid + layout rules** — column system, margins, vertical spacing,
   allowed layout structures.
4. **Motion principles** — easing curves, what motion communicates,
   what's prohibited.
5. **Iconography / symbol system** — if applicable.
6. **Tone + textual rules** — voice, sentence structure, allowed/disallowed
   language patterns.

Check: if someone from the community saw only the DESIGN.md, would they
recognize it as built for their world?

## Step 2: Capability Inventory

Before choosing a stack or writing a line of code, map what you're composing from.

Read the CapabilityMap and classify each capability:

| Capability | Source | Status | Interface it enables |
|-----------|--------|--------|---------------------|
| e.g. Product catalog | Shopify | Live | Store, product pages |
| e.g. Email delivery | ConvertKit | Live | Newsletter signup, sequences |
| e.g. Booking | Calendly | Live | Booking page |
| e.g. Payments | Stripe | Live | Checkout |
| e.g. Content hosting | Own CMS / Sanity | Needs setup | Blog, portfolio |
| e.g. Tenant isolation | Own backend | Needs build | Multi-user dashboard |

**For Platform/Product projects:** The capability inventory is the DataSource
contract — what operations exist, organized by domain. Demo and live adapters
implement the same interface.

**For Creator/Brand/Athlete projects:** The capability inventory is the
integration map — which platforms own which operations. Interfaces wire to
real platforms, not mocked endpoints.

**For Agency/Studio projects:** The capability inventory is the delivery
system — intake, scoping, staffing, handoff, client tools. Interfaces
operationalize the methodology.

If a planned interface has no backing capability, flag it as a **Stability gap**
and note it for backlog. Do not build a fake version.

## Step 3: Determine Stack

Ask the user about technical preferences and constraints:
- Frontend framework (Next.js, SvelteKit, Astro, static HTML, etc.)
- Styling approach (Tailwind, CSS modules, etc.)
- Database / backend target (Supabase, own API, platform APIs, etc.)
- Deployment target (Vercel, Railway, Fly, etc.)
- Any existing code or design system to build on?

Recommend based on what the CapabilityMap and SystemArchitecture suggest.
Match the stack to the integration surface — don't introduce unnecessary
infrastructure.

## Step 4: Schema + DataSource

**For Platform/Product projects:**
From the Stability specs + CapabilityMap, create:
- Typed schema (every table/collection with types and relationships)
- DataSource interface that both demo and live implement
- Demo adapter with realistic data
- Live adapter scaffolded against real backend contracts

**For Creator/Brand/Athlete projects:**
- Integration schema: what data flows between which platforms
- API connection stubs for each declared platform capability
- Demo data that reflects the creator's actual content, products, and audience
- Configuration surface for platform credentials

**For Agency/Studio projects:**
- Delivery schema: projects, clients, phases, deliverables, team allocation
- Demo data reflecting actual engagement types and delivery patterns
- Integration points for project management / client communication tools

In all cases: demo data must be realistic and specific. Names, numbers, dates
that feel real. If the product serves a specific community, the demo data
reflects that community authentically.

## Step 4b: Reference Page (Optional — UI projects only)

When the system has a visual interface, produce one self-contained HTML file per
key screen before building framework-native components. This is a reference, not
a prototype. Builders look at it to resolve ambiguity during implementation.

Requirements:
- **Self-contained** — inline CSS, no CDN, no build step, opens in any browser
- **Uses real design tokens** from DESIGN.md (exact hex values, font stacks, spacing)
- **Contains real content** — not lorem ipsum. Names, numbers, dates that reflect
  the actual community this serves
- **Shows information hierarchy** as defined by the design language
- **Includes empty and error states** (commented sections or toggleable)

Write to `reference/[screen-name].html`.

**What this is:** A visual contract. When someone asks "what does the empty
creator directory look like?" — open the HTML file.

**What this is NOT:** An interactive prototype. No JavaScript behavior, no
routing, no state management. Pure visual reference.

**When to skip:** Backend-only systems, API-only projects, infrastructure.
Only produce reference pages when the system has user-facing screens.

**Cost:** One HTML file per key screen. 30 minutes with AI assistance. Saves
hours of "does this look right?" during implementation.

## Step 5: Build Interfaces

From the SystemArchitecture spec (or equivalent from Stability), build
the declared interfaces. Each interface must:

1. **Trace to capabilities** — every data query, mutation, or action maps to
   a declared capability in the inventory
2. **Apply DESIGN.md** — typography, color, spacing, motion from Step 1
3. **Be lifecycle-aware** — if the product has phases (onboarding → active →
   mature), same interface adapts per phase
4. **Be specific** — this interface is for THIS project's users, not a template

Common interface surfaces (build what applies):
- Auth / onboarding flow
- Primary workspace / dashboard
- Public-facing pages (landing, portfolio, store, content)
- Operator / admin views
- Transaction / commerce surfaces
- Community / social surfaces

## Step 6: Components & Design

- Apply DESIGN.md tokens (colors, typography, spacing) from Step 1
- Build reusable components (cards, badges, charts, panels, etc.)
- Error boundaries at page level minimum
- Loading states and skeletons
- Empty states with contextual messaging

## Step 7: Composition Test

Before proceeding, run the composition test — this is a **gate**:

For each interface built:
1. List every capability it calls
2. Verify each capability exists in the CapabilityMap
3. If any interface requires an undeclared capability → **flag as Stability gap**
4. If any interface could belong to a different project with minimal changes → **flag as generic** and make it specific

The composition test passes when:
- Every interface traces to declared capabilities
- No interface invents new backend shape
- The output is recognizably THIS project, not a template

If the test fails, fix the gaps before continuing. Stability gaps go to backlog.
Generic interfaces get reworked for specificity.

## Step 8: Tests

- Unit tests for business logic
- Data shape tests (demo data conforms to schema)
- Integration tests for platform connections (where applicable)
- Component tests where complexity warrants
- All tests pass before Resonance is complete

## Step 9: Engineering Guide

Create a CLAUDE.md in the platform directory:
- Architecture overview
- Code conventions
- Data patterns (adapter, lifecycle, roles, integrations)
- How to add a new page/feature
- Test expectations
- Capability-to-interface map (which capabilities power which surfaces)

## Step 10: Five Laws Check

Before marking Resonance complete, evaluate the interfaces against the
five Laws of Design from Cultural Physics:

1. **Energy Must Move.** Do the interfaces feel alive? Is there motion,
   progression, dynamic content — or do they feel static and inert?
2. **Emotion Leads Form.** Does the design start from how it should feel,
   not just what it should display?
3. **Rhythm Over Rules.** Does the system organize by tempo — faster for
   urgent actions, slower for important decisions?
4. **Friction Reveals Imbalance.** Where is friction? Is it intentional
   (protecting the user) or accidental (serving the platform)?
5. **Dual Worlds, One Current.** If this system has physical and digital
   touchpoints, do they hum at the same frequency?

Flag any law violations. Fix what can be fixed now. Note the rest for
/fw-entropy.

## Output

Three-tier progressive disclosure. Every tier is mandatory.

### Tier 1 — Narrative (shown in conversation)

5–7 sentences covering:
- What interfaces were built and for whom
- What capabilities they compose from (owned vs rented)
- Composition test result (pass/fail, gaps flagged)
- Specificity test result (is this recognizably THIS project?)
- What's ready to pressure test

### Tier 2 — Summary Card (written to `define/resonance-summary.md`)

Scannable reference card:
- **Interface inventory table** — interface | capabilities used | status
- **Composition test result** — traced / gaps
- **Specificity verdict** — pass or flag
- **Tech stack summary**
- **Demo mode status**

### Tier 3 — Machine Artifact (written to `define/LaunchPlan.md`)

Full LaunchPlan with YAML frontmatter:

```yaml
---
artifact: LaunchPlan
phase: resonance
track: [from PROJECT-CONTEXT]
version: 1.0
status: locked
interfaces_built: [count]
capabilities_traced: [count]
composition_gaps: [count]
---
```

Body: launch roles, sequencing, metrics, rollback conditions,
interface-to-capability map, and the full composition test results.

---

Close with:

"Resonance built. [N] interfaces running at localhost with demo data.
Composition test: [pass/fail]. Run /fw-entropy to pressure test."
