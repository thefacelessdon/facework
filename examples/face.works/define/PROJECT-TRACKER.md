# Facework — Project Tracker

## Completed Work

| Item | Phase | Artifacts |
|------|-------|-----------|
| Business model + economics | Frequency | `architecture/business-model/business-model.md` |
| Exit guarantee | Frequency | `documents/governance/exit-guarantee.md` |
| Protocol openness guarantee | Frequency | `documents/governance/protocol-openness.md` |
| 14 strategic decisions | Current | `decisions/001-014` |
| Engagement delivery spec | Stability | `architecture/engagement-delivery-spec.md` |
| Conformance model (4 levels) | Stability | `architecture/conformance-model.md` |
| Artifact registry | Stability | `architecture/artifact-registry.md` |
| 5 operational playbooks | Flow | `playbooks/01-05` |
| face.works prototype (10 pages) | Resonance | `face.works/` |
| Visual language implementation | Resonance | `face.works/src/app/globals.css` |
| Entropy review (12 issues resolved) | Entropy | Decisions 009-014, code fixes |

---

## Pending Work — Gate 1 (Before First Conversation)

### 1. GAMUT Conformance Audit

**Priority:** High — blocks proof count toward MVP exit
**What to do:**
1. Read `architecture/conformance-model.md` for the audit template
2. Clone/access the GAMUT repo
3. Run phase-by-phase gate check against GAMUT artifacts
4. Run extraction check (4 tests)
5. Run cross-reference check
6. Assign conformance level (target: Level 2 minimum, Level 3 if sovereignty is verifiable)
7. Document findings in a new file: `define/proof/gamut-audit.md`

**Read first:** `architecture/conformance-model.md`
**Files to create:** `define/proof/gamut-audit.md`
**Depends on:** Nothing — can start now
**Verify:** Audit has a clear level score. Gaps are documented honestly.

### 2. Engagement Scope Template

**Priority:** High — needed for prospect qualification playbook
**What to do:**
1. Read `architecture/engagement-delivery-spec.md` for deliverables per variant
2. Read `playbooks/01-prospect-qualification.md` step 4 for how the template is used
3. Create a template document with:
   - Engagement variant (Full Protocol / Foundation Only)
   - Creator name and domain
   - Scope: what's included, what's explicitly not included
   - Timeline (from engagement-delivery-spec)
   - Deliverables list (from engagement-delivery-spec phase tables)
   - Investment (from business model canonical numbers)
   - Payment terms
   - What the creator participates in (review sessions)
4. Save as `define/documents/agreements/engagement-scope-template.md`

**Read first:** `architecture/engagement-delivery-spec.md`, `playbooks/01-prospect-qualification.md`
**Files to create:** `define/documents/agreements/engagement-scope-template.md`
**Depends on:** Nothing — can start now
**Verify:** A real creator engagement could be scoped using this template without modifications beyond fill-in-the-blanks.

### 3. face.works Deploy

**Priority:** Medium — needed for credibility, not for process
**What to do:**
1. Set up Vercel project linked to the repo
2. Configure domain `face.works`
3. Deploy
4. Verify all pages render correctly in production

**Read first:** `face.works/README.md`
**Depends on:** Nothing — can deploy current state
**Verify:** All 10 pages load. Nav works. No broken links.

### 4. face.works Pattern System

**Priority:** Medium — visual coherence, not functional blocker
**What to do:**
1. Read `original site exploration reference/FACEWORK FIELD KERNEL.txt` for the math
2. Read `original site exploration reference/FACEWORK PATTERN SYSTEM™.txt` for behavior rules
3. Implement a Canvas or WebGL component that renders wave interference patterns
4. Each primitive has a distinct behavior (oscillation, direction, amplification, etc.)
5. Patterns respond to scroll position or page context
6. Add to homepage hero and section backgrounds

**Read first:** Field Kernel (full math spec), Pattern System (behavior rules)
**Files to create:** `face.works/src/components/PatternField.tsx`
**Depends on:** Nothing — can start now, independent of other work
**Verify:** Patterns render. They feel like "a system stabilizing" not "an animation."

### 5. face.works Primitives Bar

**Priority:** Low — signature element, not blocker
**What to do:**
1. Read `original site exploration reference/FACEWORK — VISUAL LANGUAGE SYSTEM.txt` section VIII
2. Build a horizontal bar showing all 7 primitives as symbols
3. One lights up based on current page/section context
4. Add to layout (persistent across pages)

**Read first:** VLS section VIII (Signature Elements)
**Files to create:** `face.works/src/components/PrimitivesBar.tsx`
**Depends on:** Pattern System (uses same primitive-to-visual mapping)
**Verify:** Bar renders. Correct primitive highlights per page.

---

## Pending Work — Gate 2 (Before First Agreement)

### 6. Creator Agreement Template

**Priority:** Blocked by Gate 1 completion
**What to do:**
1. Read `documents/governance/exit-guarantee.md` for ownership terms
2. Read `architecture/engagement-delivery-spec.md` for deliverables
3. Draft agreement covering: scope, deliverables, ownership, payment terms,
   exit guarantee, IP assignment, confidentiality
4. Legal review recommended before use

**Read first:** Exit guarantee, engagement delivery spec, business model
**Files to create:** `define/documents/agreements/creator-agreement-template.md`
**Depends on:** Gate 1 complete, engagement scope template
**Verify:** Agreement is consistent with exit guarantee and business model.

### 7. Payment Infrastructure

**Priority:** Blocked by Gate 1 completion
**What to do:** Set up invoicing (Stripe, QuickBooks, or equivalent).
Configure for 50% upfront / 50% at handoff payment terms.

### 8. Insurance/Liability Review

**Priority:** Low — investigate whether needed at this engagement size
**What to do:** Consult with a business attorney on professional liability
coverage for $10K-$25K consulting engagements.

---

## Pending Work — Methodology (Not Gated)

### 9. Update Root README.md

**Priority:** Medium — current README references install.sh and old structure
**What to do:** Update to reflect `define/` directory and current project state.
The existing README covers the open protocol well but doesn't mention the
commercial layer (`define/`).
**Depends on:** Nothing

### 10. Capacity Calibration

**Priority:** Deferred — triggers after first 3 engagement runs
**What to do:** After completing 3 engagements, measure actual:
- Days per engagement (Full Protocol and Foundation Only)
- Hours per week on GTM
- Hours per week on operations (monitoring, closure, admin)
- Update business model capacity numbers from ~2/month to actual
