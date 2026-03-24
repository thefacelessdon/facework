# face.works — Design Language Spec

The visual and structural system for the Facework protocol site.
Source material: `original site exploration reference/` (VLS, Pattern System,
Field Kernel, IA, Website Copy). Updated for Protocol v2.0.0 (12 primitives,
10 phases, open standard + commercial services for creators).

---

## 1. PRIMITIVES — Visual Behavior Map

The original pattern system defined 7 primitives with distinct visual behaviors.
The reconciled protocol has 12. Each must have a visual identity.

### Original 7 (from Pattern System)

| Primitive | Behavior | Visual | Motion Speed |
|-----------|----------|--------|-------------|
| Coherence | Lines converge to center axis | Strands tightening into alignment | Slow |
| Frequency | Steady oscillation | Sine-like waveforms in node lines | Rhythmic |
| Current | Directional flow | Lines streaming in single direction | Steady forward |
| Resonance | Amplitude amplification | One strand causes nearby strands to amplify | Pulsing |
| Flow | Adaptive morphing | Lines bend around obstacles, reroute | Smooth |
| Stability | Fixed grid, locked nodes | Rigid even lattice | Static |
| Entropy | Disruption, breakage | Nodes scatter, lines fray or misalign | Erratic |

### New 5 (behaviors derived from their protocol function)

| Primitive | Behavior | Visual | Motion Speed |
|-----------|----------|--------|-------------|
| Semantics | Signal isolation | A single strand separating from noise, becoming legible | Slow clarifying |
| Field | Force mapping | Multiple strands with visible tension between them — attraction, repulsion, gravity wells | Ambient drift |
| Taste | Quality filtering | A threshold line — strands above pass through, strands below dissolve | Deliberate, gated |
| Sovereignty | Boundary enforcement | A contained region with clear edges — strands inside are protected, outside cannot enter | Static border, alive inside |
| Consonance | Layer alignment | Multiple parallel planes snapping into register, like printing alignment | Settling into sync |

### Color Mapping (from VLS + Kernel)

Each primitive maps to an accent color. The VLS defines 4 accents. With 12
primitives, we group by function:

| Group | Primitives | Accent | Meaning |
|-------|-----------|--------|---------|
| Understanding | Semantics, Field, Consonance | Field Blue `#8FAFFF` | Clarity |
| Identity | Taste, Frequency, Current | Signal Amber `#FFD089` | Resonance |
| Architecture | Flow, Stability, Resonance | Emergence Green `#7AFFC4` | Flow |
| Integrity | Entropy, Sovereignty | Pulse Red `#FF7C7C` | Entropy / boundaries |
| Governing | Coherence | All four, settled | The state everything resolves to |

**Rule:** Never more than one accent per screen section. Accents indicate state, not decoration.

---

## 2. ENGINES — Updated for 12 Primitives

The original 6 engines combined the original 7 primitives. With the reconciled
12, the engines need updating. Engines are composite visual behaviors.

### Updated Engines

| Engine | Primitives | Pattern Behavior | Page Mapping |
|--------|-----------|-----------------|-------------|
| **Signal Engine** | Semantics + Field + Taste | Noise → isolation → filtering → legible signal | The System |
| **Identity Engine** | Coherence + Frequency | Stable axis + rhythmic oscillation | Home |
| **Strategy Engine** | Frequency + Current | Oscillation catching direction, locking in | Protocol (Frequency/Current docs) |
| **Architecture Engine** | Flow + Stability | Adaptive lines snapping to grid | Protocol (Specs docs) |
| **Transmission Engine** | Resonance + Flow + Taste | Wave pulse filtered through quality bar, bending forward | Engage |
| **Integrity Engine** | Entropy + Sovereignty + Consonance | Disruption → boundary enforcement → layers aligning | Status |
| **Diagnostic Engine** | Coherence + Entropy | Frayed lines pulled back into structure | Proof |

### Engine Behavior Rules (from Pattern System)

1. All motion seeks coherence — even chaotic patterns gradually resolve
2. Each primitive has a distinct speed (table above)
3. Engines show interaction — forces negotiating, not animation
4. Patterns assemble in real time — scroll/hover combines primitives into engines

---

## 3. INFORMATION ARCHITECTURE — Page-by-Page Artboards

The site has 6 main views. Each gets an artboard defining structure,
content, engine, and feeling.

### Artboard 1: HOME — "The System in Real Time"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: face.works    Protocol  Proof  Status  Engage          │
│ PRIMITIVES BAR: SEM FLD TST FRQ CUR FLW STB RES ENT SOV CON COH │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [PATTERN FIELD — Identity Engine: Coherence + Frequency]   │
│  Subtle, behind content. 15% opacity. Slow rhythmic pulse.  │
│                                                             │
│  An open protocol for turning cultural                      │
│  signal into coherent, ownable business                     │
│  systems.                                                   │
│                                                             │
│  For creators and cultural brands who need                  │
│  infrastructure they control.                               │
│                                                             │
│  Coherence = (Flow × Resonance) / (1 + Entropy)            │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  THE PHYSICS                                                │
│  When the people who generate the energy do not             │
│  control the infrastructure through which it flows,         │
│  the energy is extracted.                                   │
│                                                             │
│  [Jazz. Hip hop. Fashion. Social media.]                    │
│  [Facework is the counter-architecture.]                    │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  WHAT THE PROTOCOL PRODUCES                                 │
│  ┌──────────────┐ ┌──────────────┐                         │
│  │ Governance & │ │ Strategic    │                         │
│  │ Economics    │ │ Direction    │                         │
│  └──────────────┘ └──────────────┘                         │
│  ┌──────────────┐ ┌──────────────┐                         │
│  │ Architecture │ │ Working      │                         │
│  │ & Playbooks  │ │ Prototype    │                         │
│  └──────────────┘ └──────────────┘                         │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  NON-NEGOTIABLES                                            │
│  ● Protocol stays open                                      │
│  ● Creator sovereignty is absolute                          │
│  ● Conduits, not containers                                 │
│  ● No lock-in                                               │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│         Control the frequency. Own the current.             │
│         [Read the protocol]  [Work with Facework]           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER: CONTROL THE CURRENT.            Facework Protocol v2│
└─────────────────────────────────────────────────────────────┘

ENGINE: Identity Engine (Coherence + Frequency)
FEELING: Stepping into something alive, intentional, structurally sound.
ACTIVE PRIMITIVE: Coherence (COH highlighted in bar)
LAYOUT: Single-column narrative with 50/50 grid for "produces" section
```

### Artboard 2: THE SYSTEM — "The Coherence OS"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV + PRIMITIVES BAR (FRQ highlighted)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  The Protocol                                               │
│  Everything here is open.                                   │
│                                                             │
│  THEORY                                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ The Theory of Cultural Physics                      │   │
│  │ A framework for designing across systems of...      │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ The Coherence Operating System                      │   │
│  │ Maintaining structural alignment inside systems...  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  SPECIFICATION                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Facework Protocol v2                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  METHODOLOGY                                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Build Methodology                                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  CONFORMANCE                                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Conformance Model                                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  FUTURE: Interactive primitive explorer                      │
│  Hover a primitive → see its behavior, connected engines.   │
│  Click → read the deep dive.                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ENGINE: Strategy Engine (Frequency + Current)
FEELING: "This isn't philosophy — it's the architecture underneath."
ACTIVE PRIMITIVE: Frequency
LAYOUT: Single-column, stacked doc cards grouped by category
FUTURE STATE: Interactive OS diagram where primitives combine into engines
```

### Artboard 3: PROOF — "Output of a Coherent System"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV + PRIMITIVES BAR (RES highlighted)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Proof                                                      │
│  No marketing, just evidence.                               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ GAMUT                        [Conformance Badge]    │   │
│  │ Creator Commerce Infrastructure                     │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ Summary text...                                     │   │
│  ├──────────┬──────────┬──────────┐                    │   │
│  │Conformance│Extraction│  Date   │                    │   │
│  │Level 3    │ Passed   │ 2026-03 │                    │   │
│  ├──────────┴──────────┴──────────┘                    │   │
│  │ ARTIFACTS: 6  7  10  9  12  28                     │   │
│  │           Gov Dec Spc Plb Pag Tst                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  FUTURE: Coherence Scorecard visualization per project.     │
│  Show F/R/SI scores as a small radar or bar chart.          │
│  Zone indicator (GREEN, DEEP GREEN) as colored badge.       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ENGINE: Diagnostic Engine (Coherence + Entropy)
FEELING: A research archive that quietly demonstrates depth.
ACTIVE PRIMITIVE: Resonance
LAYOUT: Stacked cards, each self-contained. No grid.
```

### Artboard 4: STATUS — "The System Monitors Itself"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV + PRIMITIVES BAR (ENT highlighted)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Status                                                     │
│  Facework's own coherence tracker.                          │
│  Last updated: 2026-03-24                                   │
│                                                             │
│  MVP PROGRESS                                               │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │ Runs  0/3  │ │ Refs  0/1  │ │ Floor 0/3mo│             │
│  │ ████░░░░░░ │ │ ░░░░░░░░░░ │ │ ░░░░░░░░░░ │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                             │
│  STAGE BOUNDARIES                                           │
│  ┃ MVP — Services Phase              [In Progress]         │
│  ┃ Exit criteria:                                           │
│  ┃ ◐ Revenue $5K+/month × 3                               │
│  ┃ ◐ 3 protocol runs + 1 public reference                  │
│  │                                                          │
│  │ Beta — Transfer Phase             [Not Started]          │
│  │ Scale — Standard Phase            [Not Started]          │
│                                                             │
│  NO-GO LINES                                                │
│  [hard] 12 months from first payment...        clear        │
│  [soft] 6 months with no engagement...         clear        │
│                                                             │
│  NON-NEGOTIABLES                                            │
│  ● Protocol stays open                                      │
│  ● Creator sovereignty is absolute                          │
│  ● ...                                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ENGINE: Integrity Engine (Entropy + Sovereignty + Consonance)
FEELING: The OS monitors itself. Radical transparency.
ACTIVE PRIMITIVE: Entropy
LAYOUT: Metrics grid → stacked sections. Dashboard-sparse.
FUTURE STATE: Live data from API (currently demo data in demo.ts)
```

### Artboard 5: ENGAGE — "The Entry Point"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV + PRIMITIVES BAR (CUR highlighted)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Work with Facework                                         │
│  One conversation. If the fit is right, we scope it.        │
│                                                             │
│  HOW PRICING WORKS                                          │
│  Facework doesn't price by deliverable or by hour.          │
│  It prices by depth, complexity, and the coherence          │
│  shift required.                                            │
│                                                             │
│  You're not paying for time. You're paying for the          │
│  architecture that changes how you operate.                 │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  ENGAGEMENT TYPES                                           │
│  ┌──────────────────┐ ┌──────────────────┐                 │
│  │ Full Protocol    │ │ Foundation Only  │                 │
│  │ 5-8 days         │ │ 3-5 days         │                 │
│  │ $15K-$25K        │ │ $10K-$15K        │                 │
│  └──────────────────┘ └──────────────────┘                 │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  HOW IT WORKS                                               │
│  01 │ Conversation                                          │
│  02 │ Qualification                                         │
│  03 │ Scope                                                 │
│  04 │ Build                                                 │
│  05 │ Handoff                                               │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  THIS IS FOR YOU IF                                         │
│  ● Existing creative practice...                            │
│  ● Infrastructure you control...                            │
│  ● Willing to participate...                                │
│  ● Model doesn't extract...                                 │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  What problem are you trying to make coherent?      │   │
│  │                                                     │   │
│  │  Email with a brief description.                    │   │
│  │                [hello@face.works]                    │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ENGINE: Transmission Engine (Resonance + Flow + Taste)
FEELING: People who belong here feel it immediately.
ACTIVE PRIMITIVE: Current
LAYOUT: Single-column narrative → 50/50 variants → numbered steps → CTA
```

### Artboard 6: PROTOCOL DOC — "Deep Read"

```
┌─────────────────────────────────────────────────────────────┐
│ NAV + PRIMITIVES BAR (varies by doc)                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ← Protocol                                                 │
│  THEORY                                                     │
│  The Theory of Cultural Physics                             │
│  A framework for designing across systems of...             │
│                                                             │
├─────────────────────────── hr ──────────────────────────────┤
│                                                             │
│  [Long-form content — max-w-2xl]                            │
│                                                             │
│  Rendered markdown:                                         │
│  - Headings (## → h2)                                       │
│  - Paragraphs (muted text, bold = foreground)               │
│  - Code blocks (surface bg, border, monospace)              │
│  - Tables (header row, muted cells)                         │
│  - Lists (dot prefix, indented)                             │
│  - Blockquotes (left border, clarity accent, italic)        │
│                                                             │
│  Content width: max 640px (max-w-2xl)                       │
│  Reading tempo: slower. More vertical space between         │
│  sections. This is where understanding happens.             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ENGINE: Varies by document (Cultural Physics = Identity Engine, etc.)
FEELING: You are reading architecture, not marketing.
LAYOUT: Single-column narrative. Max-w-2xl. Generous vertical rhythm.
FUTURE STATE: In-doc primitive references highlight the primitives bar.
```

---

## 4. TYPOGRAPHY

**Primary:** Berkeley Mono (JetBrains Mono fallback)
**Why:** Engineered. Evokes technical documentation. Ties to OS ethos.

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Page title | 2xl → 3xl (responsive) | 400 (normal) | tight |
| Section header | xs | 400 | 0.2em, uppercase |
| Card title | sm | 500 (medium) | wide |
| Body | sm | 400 | normal |
| Label / caption | xs | 400 | 0.15em, uppercase |
| Equation / code | sm | 400 | normal, monospace |

**Rules:**
- Never force line breaks for style
- Use weight sparingly (only 400 and 500)
- No italic unless intentional emphasis
- Large headline sizes reserved for page titles only (one per page)

---

## 5. COLOR

### Primary Palette

| Name | Hex | Use |
|------|-----|-----|
| Ink | `#000000` | Background |
| Graphite | `#1C1C1E` | Surface (cards, code blocks) |
| Stone | `#2A2B2E` | Borders, subtle dividers |
| Ash | `#3A3A3D` | Interactive hover backgrounds |
| Dim | `#6B6B6F` | Muted text, secondary content |
| Soft | `#F7F7F5` | Primary text, buttons |

### Accent Palette (states of coherence — not decoration)

| Name | Hex | State | Use |
|------|-----|-------|-----|
| Field Blue | `#8FAFFF` | Clarity | Links hover, highlighted text, active nav |
| Signal Amber | `#FFD089` | Resonance | In-progress badges, identity primitives |
| Pulse Red | `#FF7C7C` | Entropy | Hard no-go lines, failures, errors |
| Emergence Green | `#7AFFC4` | Flow / Coherence | Pass indicators, active stage, progress bars |

### Pattern Field Palette (from Kernel spec — hero background only)

| Stop | Hex | Visual |
|------|-----|--------|
| 0.00 | `#050309` | Deep black |
| 0.30 | `#3A1C5F` | Deep purple |
| 0.65 | `#F24E6A` | Pulse pink |
| 1.00 | `#FFEFAF` | Warm cream |

**Rules:**
- Never more than one accent per screen section
- Never use accent as background color
- Accents only appear in: indicators, active states, hover states, progress bars
- Accents must always mean something structurally

---

## 6. GRID + LAYOUT

**Column system:** Content max-width 5xl (64rem). Padding: 6 → 8 → 20 (responsive).
**Vertical rhythm:** Sections separated by `<hr />` (1px stone, 48px margin).
**Baseline:** 8px grid (all spacing in multiples of 8).

**4 layout types only:**

1. **Single-column narrative** — hero, physics, philosophy, deep reads. Max-w-2xl for reading content.
2. **Split 50/50** — engagement variants, "what you get" grid. `grid-cols-1 md:grid-cols-2 gap-4`.
3. **Metrics grid** — status page progress bars. `grid-cols-1 sm:grid-cols-3 gap-4`.
4. **Stacked modules** — protocol index, proof cards, no-go lines. Vertical stack with consistent padding.

**If the layout feels like improvisation, it's wrong.**

---

## 7. MOTION

**Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)` — slow settle. No bounce, no elastic.

**Durations:**
| Type | Duration | Use |
|------|----------|-----|
| Fast | 150ms | Color transitions, opacity |
| Base | 300ms | Background, border |
| Slow | 600ms | Primitives bar highlight, page transitions |
| Settle | 1200ms | Pattern field evolution |

**Rules:**
- Motion is system behavior, not animation
- Everything moves like a system stabilizing
- No sudden entries. No playful motion.
- Pattern field evolves continuously (speed 0.3x)
- Primitives bar transitions are slow (600ms settle)

---

## 8. COMPONENTS

| Component | Purpose | VLS Rule |
|-----------|---------|---------|
| Nav | Site navigation | xs-sm text, 0.2em tracking logo, muted→foreground links |
| PrimitivesBar | 12-primitive context indicator | 9-10px labels, one highlighted per page, 600ms transition |
| PatternField | Wave interference background | Canvas 2D, 15% opacity, hero only, Kernel palette |
| StatusBadge | complete/in-progress/not-started | Border + text color from accent palette. No background fill. |
| ProgressBar | Metric toward target | 1px height, coherence green fill, accessible ARIA |
| Markdown | Protocol doc rendering | Handles headings, code blocks, tables, lists, blockquotes |
| Footer | Tagline + version | xs text, uppercase tagline, Protocol version |

---

## 9. TONE

From VLS:
- Never speak in metaphors without grounding
- No self-help tone
- No futurist buzzwords
- No brand strategist noise
- Short sentences. Speak directly.
- Assume the reader is intelligent
- No inspirational fluff. No coaching energy.

**The world is:** calm, precise, grounded clarity.

**Anchor prompt:** "What problem are you trying to make coherent?"

---

## 10. FUTURE STATE

What the site should become as proof accumulates and the protocol matures:

1. **Interactive OS diagram** on /protocol — hover primitives to see behaviors,
   click to read deep dives, engines assemble when primitives combine
2. **Live coherence tracker** on /status — API-backed, updates from real metrics
3. **Coherence scorecard visualization** on /proof — radar chart or bar chart
   per project showing F/R/SI scores and zone
4. **Lab / Field section** — weekly dispatches, experiments, system diagrams.
   Not a blog. A research archive.
5. **Pattern field per page** — each page gets its engine's pattern behind
   the header, not just home
6. **In-doc primitive references** — when a protocol doc mentions a primitive,
   the primitives bar highlights it in real time
