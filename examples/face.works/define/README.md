# Facework Protocol — Define

The governing truth, architecture, and operational playbooks for Facework
as a commercial protocol business. Everything needed to run the protocol
for creators and cultural brands.

## Who This Serves

Creators and cultural brands who need operational infrastructure they
control. Facework runs the protocol for them, delivering a fully
architected system — governance, specs, playbooks, prototype — that
they own completely and can build from without Facework.

## Business Model (Key Numbers)

| Number | Value |
|--------|-------|
| Engagement price | $10K–$25K |
| Monthly hard floor | $5K |
| Monthly target | $10K |
| Solo + agent capacity | ~2 engagements/month (calibrate after 3 runs) |
| MVP exit | $5K+/month × 3 months AND 3 protocol runs + 1 public reference |

Source of truth: `architecture/business-model/business-model.md`

## Directory Structure

```
define/
├── README.md                  ← you are here
├── CLAUDE.md                  ← strategic context (read first)
├── TODOS.md                   ← gates, stages, no-go lines, decision register
│
├── architecture/
│   ├── business-model/
│   │   └── business-model.md  ← canonical numbers, economics, ownership
│   ├── engagement-delivery-spec.md  ← what an engagement produces, phase by phase
│   ├── conformance-model.md   ← what 'conformant' means, 4 levels, audit templates
│   └── artifact-registry.md   ← what each stage requires, single source of truth
│
├── documents/
│   └── governance/
│       ├── exit-guarantee.md          ← what creators take when they leave
│       ├── protocol-openness.md       ← what's open vs. commercial
│       └── external-dependencies.md   ← Facework's own sovereignty audit
│
├── decisions/
│   ├── 001–016                ← 16 locked strategic decisions
│   └── (see register in TODOS.md)
│
└── playbooks/
    ├── 01-prospect-qualification.md
    ├── 02-engagement-delivery.md
    ├── 03-stage-gate-monitoring.md
    ├── 04-engagement-closure.md
    └── 05-go-to-market.md
```

## Current Status

**Stage:** MVP (Services Phase)
**Protocol:** v2.0.0 — 10 phases (0–9), 12 primitives, 13 skills, reconciled
**Decisions:** 16 locked. No unresolved strategic contradictions.
**Methodology:** v4.0 — protocol is source of truth, methodology implements it

### Gate 1 — Before First Conversation
9 of 14 items complete. Remaining:
- GAMUT conformance audit
- Engagement scope template
- face.works deployed
- face.works Pattern System (Canvas/WebGL)
- face.works Primitives Bar

### Gate 2 — Before First Agreement
0 of 4 items complete. Blocked by Gate 1.

## Read Order

1. `CLAUDE.md` — strategic context, 2 minutes
2. `TODOS.md` — stage boundaries, no-go lines, gates, 5 minutes
3. `architecture/business-model/business-model.md` — economics, 10 minutes
4. `architecture/engagement-delivery-spec.md` — what you deliver, 10 minutes
5. `playbooks/02-engagement-delivery.md` — how you deliver it, 10 minutes
6. `decisions/` — skim the register in TODOS.md, read any that surprise you

Total: under 45 minutes to full operating context.
