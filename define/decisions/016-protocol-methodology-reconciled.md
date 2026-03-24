---
title: "Decision 016: Protocol and Methodology Reconciled"
date: 2026-03-24
status: RESOLVED
---
# Decision 016: Protocol Is Source of Truth, Methodology Aligns

## The Question
The protocol (PROTOCOL.md) defined 10 phases (0–9) with 12 primitives. The
methodology (build-methodology.md) ran 7 phases with 7 primitives.
The test proved the 5 missing primitives are load-bearing. Which is
the source of truth and how do they reconcile?

## Resolution
The protocol is the source of truth. The methodology implements it.
The skills execute the methodology. One direction of authority:

```
Theory (why) → Protocol (what) → Methodology (how) → Skills (execute)
```

The reconciled sequence is 10 phases (0–9) with all 12 primitives:

| Phase | Name | Primitives | Skills |
|-------|------|-----------|--------|
| 0 | Intake | — | — |
| 1 | Semantics | Semantics | /fw-semantics |
| 2 | Field | Field | /fw-field |
| 3 | Taste | Taste | /fw-taste |
| 4 | Strategy Lock | Frequency + Current | /fw-frequency → /fw-current |
| 5 | Architecture + Flow | Flow + Stability | /fw-flow → /fw-stability |
| 6 | Activation | Resonance | /fw-resonance |
| 7 | Integrity | Entropy + Sovereignty + Consonance | /fw-entropy, /fw-sovereignty, /fw-consonance |
| 8 | Integration | Coherence | /fw-coherence |
| 9 | Evolution | Diagnostic | /fw-diagnostic |

## Why This Resolution

The protocol's own logic produced it:
- "Signal before scale" → Semantics before Frequency
- "Taste is governance, not decoration" → Taste before architecture
- "Sovereignty by design" → verified in Integrity phase
- Test evidence: the 5 missing primitives caught naming chaos, trust
  transfer gaps, quality governance gaps, and undocumented sovereignty risks

The methodology's 7-phase sequence was an incomplete implementation
that predated the protocol. The protocol was closer to correct but
had never been tested. Running both against a real project revealed
the gap. The coherent response: reconcile into one.

## Implications
- PROTOCOL.md updated to v2.0.0 (reconciled phase structure)
- Coherence OS theory updated (sequence section)
- README updated (commands table, loop diagram)
- Protocol starts at Phase 0 (Intake), skills at Phase 1 (Semantics)
- All 13 skills are load-bearing; none are optional
- Methodology v3.0 should be updated to match (deferred to next pass)
