# Facework — Review Brief

For anyone entering this system to build from it, review it, or
contribute to it.

## Read Order

| Order | Document | Time | What You Learn |
|-------|----------|------|----------------|
| 1 | `CLAUDE.md` | 2 min | What Facework is, current stage, non-negotiables |
| 2 | `TODOS.md` | 5 min | Stage boundaries, no-go lines, gate status, decision register |
| 3 | `architecture/business-model/business-model.md` | 10 min | Economics, pricing, capacity, ownership model |
| 4 | `architecture/engagement-delivery-spec.md` | 10 min | What a paid engagement produces, phase by phase |
| 5 | `architecture/conformance-model.md` | 10 min | What 'conformant' means, 4 levels, audit templates |
| 6 | `playbooks/02-engagement-delivery.md` | 10 min | How the agent + human operating model works |
| 7 | Skim `decisions/` via register in TODOS.md | 5 min | What's locked, why, what was rejected |

**Total: ~52 minutes to full context.**

After this read, you should be able to:
- Run a creator engagement using the playbooks
- Audit a project against the conformance model
- Understand every number and where it comes from
- Know what decisions are locked and why

## Decisions That Are LOCKED

Do not relitigate these. Read the decision record if you want reasoning.

| Decision | Record |
|----------|--------|
| MVP exits via compound gate (revenue + proof) | `decisions/001-*` |
| Creators first, studios at Beta | `decisions/002-*`, `012-*` |
| GAMUT counts as proof if retroactively audited | `decisions/003-*` |
| No-go: 12 months from first payment, $5K floor | `decisions/004-*`, `010-*`, `011-*` |
| Per-studio flat rate licensing at Beta | `decisions/007-*` |
| Certification at Scale with 5-project minimum | `decisions/008-*` |
| Capacity ~2/month, calibrate after first 3 | `decisions/009-*` |
| Design Language Spec is a protocol artifact | `decisions/013-*` |
| Pricing philosophy leads, ranges secondary | `decisions/014-*` |

## Ownership Model Summary

**Read this before building anything.** The ownership model is structural,
not aspirational. Introducing extraction patterns violates the protocol.

- **Creators own everything** produced during an engagement — all artifacts,
  code, data, relationships. No exceptions.
- **Exit is clean and immediate.** If a creator leaves, they take everything.
  No transition period, no punitive terms.
- **Open formats only.** Markdown, Git, JSON/YAML, PNG/SVG. No proprietary
  dependencies. No Facework accounts required.
- **Conduits, not containers.** Facework never controls creator infrastructure,
  distribution, data, or economic current.
- **The protocol is open.** Anyone can read the spec and build a conformant
  system without paying Facework. The commercial layer (services, tooling,
  certification) sits on top, never around.

**Guardrail:** If you're building something and unsure whether it introduces
lock-in or extraction, check it against the extraction check template in
`architecture/conformance-model.md` (Section: Extraction Check Criteria).

## Feedback Template

If reviewing this system, use this structure:

```
## What's clear
[What you understood without asking questions]

## What's unclear
[Where you got stuck or needed more context]

## What's missing
[Gaps you noticed — workflows, edge cases, specs]

## What contradicts
[Anything that says two different things]

## Extraction concerns
[Anything that looks like it could create lock-in or extraction]
```

## Repo Structure Quick Reference

```
Facework/
├── theories/                   ← paradigm (Cultural Physics, Coherence OS)
├── methodology/                ← build system (7 phases, retros, changelog)
├── skills/                     ← agent skills (/fw-* commands)
├── PROTOCOL.md                 ← open protocol spec
├── define/                     ← THIS SESSION'S OUTPUT
│   ├── architecture/           ← specs (business model, delivery, conformance)
│   ├── decisions/              ← 14 locked strategic decisions
│   ├── documents/governance/   ← exit guarantee, openness guarantee
│   └── playbooks/              ← 5 operational playbooks
├── face.works/                 ← Next.js prototype (protocol site)
│   └── src/
│       ├── app/                ← pages (home, protocol, proof, status, engage)
│       ├── components/         ← Nav, Footer, StatusBadge, ProgressBar
│       └── data/               ← typed schema + demo data
└── original site exploration reference/  ← visual language source docs
```
