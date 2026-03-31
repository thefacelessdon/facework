# Coherence Tracker

Running record of coherence scores across all projects built with Facework.
Updated after each `/fw-coherence` run (diagnostic is the closing step of Coherence).

---

## Scoring Reference

The governing equation: `Coherence = (Flow × Resonance) / (1 + Entropy)`

Three dimensions are assessed from evidence:
- **Flow (1-5):** How easily energy moves through the system
- **Resonance (1-5):** How deeply the system connects with its community
- **Structural Integrity (1-5):** How strong the system's foundation is

Entropy is derived: `Entropy = 6 - Structural Integrity`

This preserves the physics: higher entropy → lower coherence.

See `/fw-coherence` (Step 8: Diagnostic) for the full rubric and zone definitions.

### Zones

| Score Range | Zone | Meaning |
|-------------|------|---------|
| 0.2 – 1.0 | RED | Incoherent. Stop building, fix the foundation. |
| 1.0 – 2.5 | AMBER | Holds but fragile. Operational for MVP. Identify what moves it toward GREEN. |
| 2.5 – 5.0 | GREEN | Coherent. Ready for handoff and scaling. |
| 5.0 – 12.5 | DEEP GREEN | Self-reinforcing. Community operates independently. |

---

## Projects

| # | Project | Date | Flow | Resonance | SI | Entropy | Coherence | Zone | Verdict |
|---|---------|------|------|-----------|-----|---------|-----------|------|---------|
| 1 | GAMUT | Mar 2026 | 4 | 4 | 4 | 2 | 5.3 | DEEP GREEN | Level 3 conformant; Phases 1-3 gap (pre-protocol) |
| 2 | Facework (self) | Mar 2026 | 3 | 3 | 4 | 2 | 3.0 | GREEN | Structurally sound, culturally incomplete |
| 3 | Facework (reconciliation) | Mar 2026 | 3 | 3 | 4 | 2 | 3.0 | GREEN | Authority chain resolved, untested against real engagement |

*Note: Retros 003 and 004 originally reported Coherence = 1.8 using the old
inverted entropy scoring (rubric score 4 plugged directly into the formula).
With the corrected formula (Entropy = 6 - SI = 6 - 4 = 2), the score is 3.0.*

---

## Trends

*After 3+ scored projects with different subjects, add trend analysis here.
Current projects are all self-application — trends will be meaningful once
external creator engagements are scored.*

---

## How to Update

After completing `/fw-coherence` (which includes the diagnostic):
1. Score Flow, Resonance, and Structural Integrity from evidence (not aspiration)
2. Compute Entropy = 6 - Structural Integrity
3. Compute Coherence = (Flow × Resonance) / (1 + Entropy)
4. Identify zone (RED / AMBER / GREEN / DEEP GREEN)
5. Add a row to the Projects table
6. Update Trends section if 3+ projects exist
7. Note any methodology changes triggered by the scores
