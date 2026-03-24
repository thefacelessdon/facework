# Project Retrospective: Facework Protocol (Self-Application)

**Date:** 2026-03-24
**Duration:** 1 session (~4 hours)
**Phases completed:** All 8 (Frequency → Current → Stability → Flow → Resonance → Entropy → Coherence → Diagnostic)

---

## What the project was

Ran the full Facework Protocol on Facework itself — defining the business
model, locking strategic direction, specifying delivery architecture,
writing operational playbooks, building the face.works prototype, and
packaging for handoff. First project built with the v2+ methodology
applied to a protocol/services business (not a software product).

## Phase-by-phase learnings

### Phase 1: Governance & Foundation (Frequency)
- **Time spent:** ~30 min
- **What worked:** Discovery questions surfaced the real model fast (protocol + services, not consulting). The extraction check on Facework itself was the most clarifying moment — the energy transfer deadline and self-extraction concern are genuine guardrails.
- **What didn't:** Nothing significant.
- **New pattern:** Running the protocol on itself is a valid proof mechanism.
- **Gate structure:** 3-gate model maps well to services businesses, not just products.

### Phase 2: Strategic Pressure Testing (Current)
- **Dilemmas surfaced:** 8 (plus 6 more from Entropy = 14 total)
- **Decisions that held:** All 14 remained consistent through later phases.
- **Missing dilemma:** Identity/brand voice was never surfaced. The visual language, tone, and design philosophy should have been strategic decisions in Current, not afterthoughts caught during Entropy when the original site exploration docs were reviewed.

### Phase 3: Architecture Specification (Stability)
- **Specs produced:** 3 (engagement delivery, conformance model, artifact registry)
- **Specs that were accurate:** Conformance model is strong — usable for GAMUT audit immediately.
- **What should have been specified but wasn't:** Design Language Spec. Added during Entropy (Decision 013) but should have been a Stability artifact.
- **Key learning:** For services/methodology businesses, playbooks should come BEFORE specs. The operational reality reveals what needs to be specified.

### Phase 4: Operational Playbooks (Flow)
- **Playbooks produced:** 5 (prospect qualification, engagement delivery, stage monitoring, closure, GTM)
- **THE PIVOTAL MOMENT:** The first draft of playbooks was wrong — written as traditional consulting with AI assistance. The user's correction ("this is not how I work") forced a complete rewrite to agent-native operating model. This changed everything: capacity (1/month → ~2/month), timeline (2-3 weeks → 5-8 days), revenue ceiling ($25K → ~$50K/month), and what MVP/Beta/Scale mean.
- **Agent automation mapping:** The agent-native framing is correct but untested against a real engagement.

### Phase 5: Platform Prototype (Resonance)
- **What worked:** face.works builds, 10 pages, schema-first data layer, typed demo data.
- **What didn't:** First pass used light theme + Geist fonts — generic SaaS aesthetic. Completely wrong for Facework's identity. Had to be retrofitted with the VLS (dark palette, Berkeley Mono, accent-as-state).
- **Key learning:** The Design Language Spec (DESIGN.md) must be produced BEFORE the prototype, not after. "Build generic, then retrofit identity" produces structural correctness without cultural resonance.
- **Demo mode:** Coherence tracker uses demo data that will be updated with real metrics — permanent demo mode pattern confirmed useful.

### Phase 6: Technical Spine Hardening (Entropy)
- **Issues found:** 12 total (8 cross-reference + 4 code)
- **Critical gaps caught:** Capacity math contradiction (would have produced inconsistent revenue projections), studio scope contradiction (would have confused GTM targeting), revenue floor ambiguity (would have made no-go lines unenforceable).
- **What was added:** 4 new decisions (009-012), Design Language Spec requirement (013), pricing philosophy framing (014), accessibility fixes, VLS implementation.

### Phase 7: Handoff & Packaging (Coherence)
- **Produced:** define/README.md, REVIEW-BRIEF.md, PROJECT-TRACKER.md, face.works/CLAUDE.md engineering guide.
- **Coherence assessment:** define/ layer is handoff-ready. face.works needs Pattern System and deployment before it's transmissible to the community.

---

## Coherence Scorecard

```
┌─────────────────────────────────────────────────────────┐
│              COHERENCE SCORECARD                        │
│              Facework Protocol (self) — 2026-03-24      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Flow:       3/5 ███░░  Core paths work, untested      │
│  Resonance:  3/5 ███░░  Aware, not yet transmissible   │
│  Entropy:    4/5 ████░  Low entropy, ownership enforced │
│                                                         │
│  Coherence = (3 × 3) / (1 + 4) = 9/5 = 1.8            │
│                                                         │
│  Structural coherence:  PASS                            │
│  Cultural coherence:    WATCH                           │
│                                                         │
│  Verdict: Structurally sound, culturally incomplete.    │
│  Key finding: Agent-native rewrite was the pivot.       │
│  Carry forward: DESIGN.md before prototype. Flow        │
│  before Stability. Identity as a Current dilemma.       │
└─────────────────────────────────────────────────────────┘
```

---

## Methodology updates

### Add to methodology:
- **DESIGN.md as a protocol artifact.** Produced first in Resonance, before prototyping. Covers typography, color (mapped to states), grid, motion, iconography, tone. Delivered as `DESIGN.md` in the project root.
- **Identity Expression as a mandatory dilemma in Current.** How the system presents itself (visual language, tone, brand voice) is a strategic decision, not a design afterthought.

### Modify in methodology:
- **Invert Stability and Flow.** For services and methodology businesses, Flow (playbooks) should run BEFORE Stability (specs). The operational reality reveals what needs to be specified. For pure software products, the original order may still apply — make this context-dependent with a note.
- **Resonance phase sequence:** DESIGN.md first → then prototype built from it. No more "build generic, then retrofit identity."

### Phase timing:
| Phase | Expected | Actual | Adjustment |
|-------|----------|--------|-----------|
| 1. Frequency | 1-2 days | ~30 min | Agent-native: much faster |
| 2. Current | 1 day | ~20 min | Agent surfaces dilemmas rapidly |
| 3. Stability | 1-2 days | ~15 min | Agent generates specs from context |
| 4. Flow | 1-2 days | ~30 min (×2 — rewrite) | Rewrite doubled the time |
| 5. Resonance | 1-2 days | ~30 min (×2 — VLS pass) | Two passes needed |
| 6. Entropy | 2-4 hours | ~20 min | Parallel agent reviews efficient |
| 7. Coherence | half day | ~15 min | Agent packages from existing artifacts |
| 8. Diagnostic | N/A | ~20 min | First run on this project |

**Total: ~3 hours** for a full protocol run on a services business. Phase timing
estimates in the methodology (days) were calibrated for manual work. Agent-native
delivery compresses dramatically. Update methodology timing estimates.

---

## Top 3 things to carry forward

1. **The agent-native operating model is the default.** Playbooks, capacity estimates, and stage definitions must reflect the human+agent reality. Writing "Human + AI-assisted" for most steps is wrong — the agent runs, the human steers.
2. **DESIGN.md before prototype, always.** The visual language is structural, not cosmetic. Building a prototype without it produces technically correct but culturally incoherent output.
3. **Identity is a strategic decision.** Brand voice, visual language, and tone belong in Current (dilemmas), not in Resonance (prototyping). By the time you're prototyping, the identity should already be locked.
