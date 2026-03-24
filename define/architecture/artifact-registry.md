---
title: "Artifact Registry"
type: Technical Architecture
version: 1.0
status: Working Draft
date: 2026-03-23
---

# Artifact Registry

## Context

Facework operates across three stages (MVP → Beta → Scale), each with
different requirements for what must exist. This registry defines the
canonical list of artifacts per stage — what you need to operate, what
studios need to license, and what certification requires.

This is the single source of truth for "what exists at each stage."
If an artifact isn't in this registry, it's not required.

## Architecture

### Artifact Flow by Stage

```
MVP (Services)              BETA (Transfer)              SCALE (Standard)
─────────────────           ─────────────────            ─────────────────
OPERATE                     OPERATE + LICENSE            OPERATE + LICENSE + CERTIFY

You produce:                Studios also produce:        Ecosystem produces:
├─ Engagement artifacts     ├─ Their own engagements     ├─ Certified systems
├─ Portfolio proof          ├─ Under protocol            ├─ Audit records
├─ Protocol docs (open)     ├─ With licensed tooling     ├─ Conformance marks
└─ Go-to-market assets      └─ Training materials        └─ Practitioner registry

You need:                   You also need:               You also need:
├─ Business model ✓         ├─ Licensing terms           ├─ Certification process
├─ Engagement spec ✓        ├─ Studio onboarding guide   ├─ Audit templates
├─ Conformance model ✓      ├─ Quality assurance model   ├─ Mark governance
├─ Gate structure ✓         ├─ Tooling documentation     ├─ Appeals process
└─ Governance docs ✓        └─ Support infrastructure    └─ Ecosystem reporting
```

## Stage: MVP — What You Need to Operate

### Category 1: Protocol Foundation (Open — already exists)

| Artifact | Location | Status |
|----------|----------|--------|
| Theory of Cultural Physics | `theories/cultural-physics.md` | Complete |
| Coherence Operating System | `theories/the-coherence-operating-system.md` | Complete |
| Facework Protocol v1 | `PROTOCOL.md` | Draft |
| Build Methodology v2 | `methodology/build-methodology.md` | Complete |
| Coherence Tracker | `methodology/coherence-tracker.md` | Complete |

### Category 2: Business Infrastructure (Produced by Frequency + Current)

| Artifact | Location | Status |
|----------|----------|--------|
| Business model | `define/architecture/business-model/business-model.md` | Complete |
| Exit guarantee | `define/documents/governance/exit-guarantee.md` | Complete |
| Protocol openness guarantee | `define/documents/governance/protocol-openness.md` | Complete |
| Gate structure + stage boundaries | `define/TODOS.md` | Complete |
| Decision records (8) | `define/decisions/` | Complete |
| Strategic context | `define/CLAUDE.md` | Complete |

### Category 3: Delivery Infrastructure (Produced by Stability + Flow)

| Artifact | Location | Status |
|----------|----------|--------|
| Engagement delivery spec | `define/architecture/engagement-delivery-spec.md` | Complete |
| Protocol conformance model | `define/architecture/conformance-model.md` | Complete |
| Artifact registry (this doc) | `define/architecture/artifact-registry.md` | Complete |
| Prospect qualification playbook | `define/playbooks/01-prospect-qualification.md` | Complete |
| Engagement delivery playbook | `define/playbooks/02-engagement-delivery.md` | Complete |
| Stage gate monitoring playbook | `define/playbooks/03-stage-gate-monitoring.md` | Complete |
| Engagement closure playbook | `define/playbooks/04-engagement-closure.md` | Complete |
| Go-to-market playbook | `define/playbooks/05-go-to-market.md` | Complete |
| Engagement scope template | TBD | **Not started** |
| Creator agreement template | TBD | **Not started** |

### Category 4: Proof & Go-to-Market

| Artifact | Location | Status |
|----------|----------|--------|
| GAMUT conformance audit | `define/proof/gamut-audit.md` | Complete — Level 3, score 5.3 |
| face.works site | `face.works/` (Next.js + Tailwind) | Complete — builds, 10 pages |
| Case study template | TBD | **Not started** |
| Portfolio page/deck | TBD | **Not started** |

### MVP Artifact Checklist

**Gate 1 (before first conversation):**
- [x] Protocol foundation (Category 1)
- [x] Business infrastructure (Category 2)
- [x] Delivery specs (engagement, conformance, registry)
- [ ] GAMUT conformance audit
- [ ] Engagement scope template
- [ ] face.works live

**Gate 2 (before first agreement):**
- [ ] Creator agreement template
- [ ] Payment infrastructure
- [ ] Engagement delivery playbook
- [ ] Insurance/liability review

---

## Stage: Beta — What Studios Need to License

*Deferred per Decision 006. Listed here for forward planning only.*

### Category 5: Licensing Infrastructure

| Artifact | Depends On | Description |
|----------|-----------|-------------|
| Studio licensing agreement | Legal review | Terms, pricing, obligations |
| Studio onboarding guide | 3+ completed engagements | How to run the protocol |
| Tooling documentation | Agent skills matured | /fw-* skill reference |
| Quality assurance model | Conformance model | How Facework verifies studio output |
| Training curriculum | Engagement playbook | Structured learning path |
| Support channel | Operational capacity | How studios get help |

### Beta Entry Trigger

All of the following (from Decision 001):
1. Revenue at $5K+/month for 3 consecutive months
2. Minimum 3 completed protocol runs with documented outcomes
3. At least 1 public reference

---

## Stage: Scale — What Certification Requires

*Deferred per Decision 008. Listed here for forward planning only.*

### Category 6: Certification Infrastructure

| Artifact | Depends On | Description |
|----------|-----------|-------------|
| Certification audit process | 5+ certified projects | Step-by-step audit procedure |
| Certification mark | Trademark | Visual mark + usage guidelines |
| Auditor qualification criteria | Practitioner experience | Who can certify |
| Appeals/dispute process | Legal review | Contested audit resolution |
| Conformance database | Multiple certifications | Public registry of certified systems |
| Annual re-certification process | Certification matured | How certifications stay current |

### Scale Entry Trigger

All of the following (from Decision 008):
1. Beta exit criteria met
2. Minimum 5 completed protocol runs total
3. At least 1 studio producing conformant systems independently

---

## Ownership & Control

### What's open (anyone can use):
- Protocol foundation (Category 1)
- Conformance model (anyone can audit their own system)
- Artifact registry structure (anyone can see what's required)

### What's commercial:
- Engagement delivery (Facework runs it, clients pay)
- Agent skills / tooling (licensed to studios at Beta)
- Certification mark (earned through paid audit at Scale)
- Business templates (agreement, scope — produced per engagement)

### What belongs to the creator:
- Everything produced during their engagement (all categories applied to their project)
- Their conformance audit results
- Their repository, documents, code, data

---

## Cross-Reference

| Artifact | Source of Truth | Referenced By |
|----------|----------------|---------------|
| Engagement pricing ($10K–$25K) | Business model | Engagement delivery spec, scope template |
| Phase gate criteria | Conformance model | Engagement delivery spec, GAMUT audit |
| Stage boundaries | TODOS.md (Decision 001, 006, 008) | This registry |
| Non-negotiables | TODOS.md | All governance docs, exit guarantee |
| Canonical objects | PROTOCOL.md | Conformance model |
| Build phases | Build methodology | Engagement delivery spec |

## Edge Cases

| Scenario | Handling |
|----------|----------|
| Creator asks for artifact not in registry | If it serves them, produce it. Don't add to registry unless it's needed for ALL engagements. |
| Studio at Beta wants to modify artifact structure | Allowed within licensing terms. Their adaptations are theirs. Core conformance criteria unchanged. |
| Artifact becomes obsolete | Mark deprecated in registry, add replacement. Don't delete — history matters. |
| Protocol version bumps | Registry versions with protocol. Old versions remain valid for existing certifications. |

## Acceptance Criteria

This registry is correct when:
1. Every artifact needed to operate at MVP is listed with status
2. Every future-stage artifact has a clear trigger and dependency
3. No artifact exists outside the registry (single source of truth)
4. Cross-references are consistent with business model and decisions
