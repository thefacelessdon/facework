# Facework Learnings from gstack Session — 2026-04-05

## Session Context

Solo founder ran the full Facework protocol (8 phases, all artifacts locked) on TONL, a cultural translation agency for AI tools. Then used gstack to go from "protocol complete" to "shipped PR with tests" in a single session.

**What shipped:** aLi Field Lab, a minimum viable community artifact. Editorial landing page, 4 API routes, 3 form components, brand proof page, founder dashboard, OG social cards, 36 unit tests, 3 E2E specs. PR #1 on GitHub.

**What the session revealed:** The Facework protocol produces excellent strategic clarity. The gap is between "fully defined" and "actually built and validated." Five additions close that gap without adding weight to the protocol.

---

## Learning 1: Forcing Questions Before Architecture

### What happened
The /office-hours diagnostic asked three questions before reviewing any protocol output:
1. "What's the strongest evidence someone actually wants this?"
2. "What are they doing right now to solve this problem?"
3. "Name the actual human who needs this most."

The founder answered: thesis-based demand, pattern recognition without specific cases, brand side known but creator community abstract.

This was the most important finding of the entire session. Eight phases of protocol had been completed without surfacing that the demand evidence was zero.

### What Facework should adopt

**Add a "Demand Gate" before Semantics (Phase 1) or as the first act of Frequency (Phase 4).**

Three questions, each requiring a specific answer:

1. **Demand reality:** Name one person who would be upset if this disappeared tomorrow. Not "interested." Upset. If the answer is a category ("music producers"), not a person, the demand is hypothetical.

2. **Status quo:** What is the user doing right now to solve this problem, even badly? If the answer is "nothing," the problem may not be painful enough to act on.

3. **Specificity:** Name, title, what gets them promoted, what gets them fired. If you can't describe one person at this level, you're building for an abstraction.

**Calibration rule:** If all three answers are thesis-based (no named person, no observed behavior, no specific evidence), flag the remaining phases for reduced depth. Don't skip them. Run them lighter. Sovereignty maps and consonance checks earn their weight when the demand is validated. Before that, they're insurance on a bet that hasn't been placed.

**Cost to adopt:** Zero new phases. One checklist (3 questions) added to an existing phase. 10 minutes to run.

---

## Learning 2: Scope Calibration by Evidence Level

### What happened
The Codex outside voice called the plan "validation theater." The specific critique: "You're adding OG cards, email capture, analytics dashboards, and social card generators before proving a single creator wants to read your content."

The founder chose to keep the scope anyway (preference logged). But the critique was structurally correct: the amount of architecture was disproportionate to the certainty of the problem.

### What Facework should adopt

**Add an evidence-level tag to the project at the start of Frequency (Phase 4). Three levels:**

| Level | Evidence | Protocol depth |
|---|---|---|
| **Validated** | Named users, observed behavior, payment or strong engagement signals | Full depth. All phases earn their weight. |
| **Signaled** | Inbound interest, repeated asks from specific people, adjacent evidence | Standard depth. Run all phases but flag speculative decisions. |
| **Thesis** | Pattern recognition, market observation, founder conviction | Reduced depth. Prioritize Frequency (business model) and one validation artifact. Defer sovereignty, consonance, and entropy until demand evidence exists. |

This doesn't change the protocol's structure. It calibrates effort. A thesis-level project shouldn't produce the same volume of artifacts as a validated one. The protocol should say so explicitly, or practitioners will over-invest in process before proving the problem.

**Cost to adopt:** One tag at the start of Frequency. One paragraph in the methodology docs.

---

## Learning 3: Cross-Model Challenge as Entropy Input

### What happened
The CEO review offered a Codex "outside voice" after all review sections. Codex read the plan cold (no conversation history) and found:

- "Sanity is a hard blocker" was false (demo-data.ts already works)
- Submission social cards ignore consent and privacy
- Existing pages have broken promises (Formspree placeholders, dead links)
- The analytics stack contradicted the launch plan docs

Two of these findings were incorporated (consent checkbox, broken page cleanup). Both were real issues the primary review missed.

### What Facework should adopt

**Add a "Cold Read" step at the end of any phase where decisions are locked.**

The mechanism: assemble the phase output into a structured summary. Dispatch a separate AI agent (or hand to a human reviewer who hasn't been in the conversation) with one instruction: "Read this and tell me what's wrong. No compliments. Just the problems."

This is already the spirit of Facework's Entropy phase (Phase 7), but Entropy runs once, late in the protocol, and reviews everything together. The cold read is lighter: one phase at a time, immediately after locking decisions, while the context is fresh and changes are cheap.

**Where to add it:**
- After Frequency (Phase 4): challenge the business model and pricing assumptions
- After Current (Phase 4): challenge the locked strategic decisions
- After Stability (Phase 5): challenge the architecture before building

Skip it for Semantics, Taste, and Field (Phases 1-3). Those are definitional, not architectural. Challenging them is Taste's job.

**Format:** 5-minute exercise. One structured input, one adversarial output, one decision per finding: accept, reject with reasoning, or defer. The reasoning matters: a founder who can articulate WHY they reject a challenge is demonstrating conviction, not stubbornness.

**Cost to adopt:** No new phase. One optional step at the end of 3 existing phases. Can be skipped on thesis-level projects (see Learning 2).

---

## Learning 4: Build Brief as the Coherence Output

### What happened
Facework's Coherence phase (Phase 8) produced a README, review brief, project tracker, and engineering guide. These are excellent handoff documents for a human joining the project.

But when it came time to actually build, the first thing needed was a design doc from /office-hours: a single artifact that synthesized the protocol outputs into "here's what to build first, here's what to skip, here's how we'll know if it worked."

The design doc took 10 minutes to produce and was the single most referenced artifact during implementation.

### What Facework should adopt

**Add a "Build Brief" as the final output of Coherence (Phase 8).**

One page. Structured:

```
# Build Brief: [Feature Name]

## Problem (from Frequency)
One paragraph. What user, what pain, what evidence.

## Approach (from Stability)
What to build. 3-5 bullet points. Specific components, not concepts.

## What to Skip
Explicit list of things that were considered and deferred.
Each with one-line rationale.

## Premises (from Current decisions)
Numbered list of assumptions the build depends on.
If any premise is wrong, the build changes.

## Success Criteria
Measurable. Include a kill signal: what would tell you to stop.

## Dependencies
What must exist before building starts.
Ordered: do this first, then this, then this.
```

This isn't a new artifact type. It's a synthesis of artifacts the protocol already produces. The difference is packaging: one page, builder-oriented, actionable without reading 8 phase documents.

**Cost to adopt:** One template added to the Coherence phase. Content is extracted from existing artifacts, not new research.

---

## Learning 5: Parallel Execution as a Resonance Pattern

### What happened
Four agents built the entire Field Lab simultaneously in isolated worktrees:
- Agent 1: Sanity schemas + API routes (10 files)
- Agent 2: Field Lab page + Apply page + components (7 files)
- Agent 3: Proof page + Admin + OG images (3 files)
- Agent 4: Page cleanup + PostHog integration (5 files)

Zero file conflicts. Clean merge. The reason it worked: the Stability specs defined clear component boundaries, and the implementation plan explicitly mapped those boundaries to non-overlapping file scopes.

### What Facework should adopt

**Add a "Parallel Lanes" section to the Stability phase (Phase 5) output.**

When defining system architecture and capability maps, also define the parallelization boundaries:

```
PARALLEL LANES
═══════════════
Lane A: [module/scope] — files: [directories], depends on: [nothing / Lane X]
Lane B: [module/scope] — files: [directories], depends on: [nothing / Lane X]
Lane C: [module/scope] — files: [directories], depends on: [Lane A]
...
CONFLICT ZONES: [directories where multiple lanes would overlap — force sequential]
```

The key insight: parallelization works at the module/directory level, not the file level. Plans describe intent ("add API endpoints"), not specific files. Module-level boundaries ("api routes touch app/api/, pages touch app/pages/") are reliable. File-level boundaries are guesswork.

**The rule:** If two lanes share a directory, they go in the same lane (sequential). If they don't, they can run in parallel. Stability already defines component boundaries. This just makes the execution implications explicit.

**Cost to adopt:** One section in the Stability spec template. 10 minutes to fill out.

---

## Learning 6: Visual Reference Before Code

### What happened
The /design-html skill generated a self-contained HTML page (no framework, no build step) that showed exactly what the Field Lab should look like. Real content, real design tokens, real layout. Every agent referenced this during implementation.

This eliminated the interpretation gap between "the design says warm paper backgrounds with sharp-cornered editorial cards" and "what does that actually look like rendered in a browser?"

### What Facework should adopt

**Add a "Reference Page" as an optional Resonance (Phase 6) artifact.**

When the system has a visual interface, produce one self-contained HTML file per key screen before building framework-native components. Requirements:
- Self-contained (inline CSS, no CDN, no build step, opens in any browser)
- Uses real design tokens from the design language spec
- Contains real content (not lorem ipsum)
- Shows the information hierarchy the design review defined
- Shows empty states and error states inline (commented sections or toggleable)

This is not a prototype. It's a reference. The builders look at it to resolve ambiguity. "What does the empty creator directory look like?" Open the HTML file.

**When to skip:** Backend-only systems, API-only projects, infrastructure. Only produce reference pages when the system has user-facing screens.

**Cost to adopt:** One HTML file per key screen. 30 minutes with AI assistance. Saves hours of "does this look right?" during implementation.

---

## Learning 7: Verification Map as a Stability Output

### What happened
The eng review produced a test coverage diagram before any code was written:

```
POST /api/subscribe
  ├── Valid email → 200
  ├── Invalid email → 400
  ├── Duplicate → 200 "already signed up"
  ├── Honeypot → 200 silent reject
  ├── Sanity fail → 503
  └── Resend fail → retry then succeed
```

22 paths total, all mapped before implementation. When Agent 5 wrote tests, it had a complete checklist. Nothing was missed. Nothing was invented.

### What Facework should adopt

**Add a "Verification Map" to the Stability phase (Phase 5) spec.**

For each capability in the capability map, define:
- **What proves it works:** the happy path test (input → expected output)
- **What proves it's broken:** the failure mode (what goes wrong, what the user sees)
- **Edge cases:** the boundary conditions specific to this capability

Format:

```
CAPABILITY: [name]
  WORKS: [input] → [expected output]
  BREAKS: [failure] → [user sees X] → [system does Y]
  EDGES: [condition 1], [condition 2]
```

This isn't a test plan (that's implementation detail). It's a verification contract: "here's how we'll know each capability is real." It maps directly to tests during implementation but is written in capability language, not code language.

**Cost to adopt:** One table per capability. Already partially covered by the capability map. Add 2-3 columns.

---

## Summary: What to Adopt

| # | Learning | Where in Facework | Cost |
|---|---|---|---|
| 1 | Forcing questions (demand gate) | Before Semantics or start of Frequency | 3 questions, 10 min |
| 2 | Evidence-level scope calibration | Start of Frequency | 1 tag, 1 paragraph |
| 3 | Cross-model cold read | End of Frequency, Current, Stability | 5 min per phase, optional |
| 4 | Build Brief | End of Coherence | 1 template, extracts from existing |
| 5 | Parallel lanes | Stability spec | 1 section, 10 min |
| 6 | Visual reference page | Resonance (when UI exists) | 1 HTML file, 30 min |
| 7 | Verification map | Stability spec | 2-3 columns on capability map |

**Total protocol weight added:** Minimal. No new phases. 5 additions to existing phase outputs, 1 pre-phase gate, 1 optional per-phase step. A practitioner running the full protocol adds maybe 90 minutes total. A practitioner running at thesis-level depth adds 30 minutes.

**What NOT to adopt:** Review readiness dashboards, telemetry, multi-pass rating systems (7 design passes, 11 CEO review sections), CHANGELOG/VERSION automation, adversarial review pipelines with P1 gates. These solve team coordination and release management problems. Facework solves meaning, direction, and architectural clarity. Different jobs.

---

## Evidence

All findings are from a single session on the TONL project (thefacelessdon/TONL, PR #1). The session ran: /office-hours → /plan-ceo-review → /plan-design-review → /design-html → aLi franchise spec → /plan-eng-review → 5 parallel agents → /ship. Total artifacts: 18 routes, 36 tests, 60+ files, 4 reviews cleared, 1 PR shipped.

The protocol-to-shipping gap was closed in one session. These 7 learnings are the patterns that made that possible.
