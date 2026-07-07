# Project Retrospective: 14th & Co (loop-instrumented run) — the first retro run AS a system loop

**Date:** 2026-07-07
**Duration:** Single session
**Phases completed:** All 8, as an instrumented **re-pass** on a mature engagement
(not a first build). Full run log at
`/Users/facelessdon/projects/14th-co/facework-run-2026-07-07/00-RUN-LOG.md`.

> **This retro is different on purpose.** Every prior retro (001–006) reflected on
> a run. This one is executed **as the system loop's closing signal** — its job is
> to capture *which closing signals worked, which loops stayed open, and what the
> run teaches the methodology.* It is the first retro authored under the Loop
> Model, and it validated that model (see
> `methodology/loop-model-validation-2026-07-07.md`).

---

## What the project was

A full-protocol re-pass of **14th & Co** (Chelsa Savage's people+ops
infrastructure firm), a mature external engagement with a live product (Next 16
site on Vercel, internal client workbench, a live Everdriven engagement). The run
had a dual mandate: (1) re-pass all 8 phases on a real client, gating each phase
explicitly; (2) instrument the run against the five-loop model so it doubled as
validation evidence for promoting that model into canon.

---

## System-loop instrumentation (the point of this retro)

### Which closing signals WORKED

- **Named, testable gates on well-scoped phases** (Semantics, Taste) closed
  cleanly and fast. Where the signal is legible and wired, the task loop
  converges — no drama, no ambiguity about "done."
- **Posture firing signals** were immediately legible. `contract-sync` and
  `decision-log` fired the moment we looked at the drift. The product loop's
  signals are the easiest to read of all five — they announce themselves.
- **The system-loop signal fired correctly this run.** Diagnostic → retro →
  validation → CHANGELOG produced a real change to the practice (Loop Model
  promotion). The mechanism the theory doc *claimed* was self-improving actually
  self-improved, observably, this session.

### Which loops STAYED OPEN (and why)

- **Phase 2 (Field) — reopened, no re-close signal.** The gate closed in April,
  then Semantics changed the buyer word and Strategy dropped Cebridge. Nothing was
  wired to notice. The loop had been silently open for ~3 months. **This is the
  headline lesson:** most "stale docs" are not laziness — they are **reopened
  loops with no re-close signal.** The fix is not "remember to update docs"; it is
  **wire a re-close signal** (that is what `contract-sync` is *for*).
- **Phase 5 (Stability) & 6 (Resonance) — closed on proxies.** Stability closed on
  human-readable specs instead of a CapabilityMap + Runtime Ports; Resonance
  closed on a human eyeballing the live site instead of a green test suite. Both
  produced value, but neither closed on its *named* signal — because the named
  signal (formal ports; automated tests) **was never emitted.** A proxy close
  feels like a close and hides the debt.
- **Phase 7 (Entropy, Consonance) — never wired.** In prior runs these ran
  *inline* and left no artifact. By the model's own logic, **they never closed** —
  an audit with no re-diffable output has just stopped. This run wired them
  (`07-integrity-audit.md`), which is why 8 real contradictions and 6 entropy
  sources were suddenly visible and ownable. They had been invisible precisely
  because the loop had no artifact.

### What the run teaches the methodology

1. **A closing signal must produce an artifact.** (Now folded into loop-model.md.)
   The Phase-7 inline-audit trap is the proof: convergence-in-conversation is not
   closure. This is the single most important methodology update from the run.
2. **Odd-numbered phases name their gates; even-numbered ones often don't.**
   Recon confirmed Semantics/Taste/Sovereignty/Consonance carry named "Gates,"
   while Frequency/Current/Flow/Entropy close via unnamed "Cross-Reference
   Checks." PROTOCOL.md covers all 8 uniformly, but the *skills* are inconsistent.
   The inconsistency correlates with which phases closed cleanly. **Recommend:
   every fw-* skill names its gate the same way PROTOCOL.md does.**
3. **The top ring needed a stable name — already fixed by #11.** The model had
   called it "Oversight" in tables and "Sovereignty" in signal columns. PR #11
   (0.0.12) renamed it the **Sovereignty loop** and split primitive-vs-loop by
   altitude, before this run landed. This run confirms it and carries it into
   §VII. Line 92's "escalated to Oversight" reads as
   "escalated to the Sovereignty loop / to Harper."
4. **Re-pass runs are a distinct mode** (like the outside-in mode retro 006
   named). A re-pass isn't a build; it's a *loop-closure audit*. Its highest-value
   output is the list of loops that quietly reopened — which no first-build run
   can produce because it has no history to drift from.

---

## Phase-by-phase (compressed — full detail in the run log)

| Phase | Closed on named signal? | Teaching |
|---|---|---|
| 1 Semantics | YES | Legible+wired gate = clean close |
| 2 Field | NO (reopened) | Stale docs = reopened loops; need re-close signal |
| 3 Taste | YES (+residuals) | Residuals routed to a Posture = still closed |
| 4 Strategy | PARTIAL | Correctly escalated the scope cull to Oversight |
| 5 Flow/Stability | Flow YES / Stability proxy | Formal signal (ports) never emitted |
| 6 Resonance | PARTIAL (proxy) | "All tests pass" can't close with zero tests |
| 7 Entropy/Sov/Consonance | wired this run | Inline audits never closed |
| 8 Coherence | PARTIAL (Runtime FAIL) | No project manifest = Runtime sub-gate can't close |

---

## Methodology updates

### Add to methodology
- **"A closing signal must produce an artifact"** sub-rule → added to
  `loop-model.md` "Closing signals — the discipline."
- **Loop Model → canon.** Fold "The Loops" section into
  `theories/the-coherence-operating-system.md` (validation gate passed — see
  validation doc). Done this run.
- **Re-pass / loop-closure-audit mode** as a named run mode (peer to the
  outside-in mode from retro 006).

### Modify in methodology
- **Top-ring naming** → done in #11 (0.0.12): "oversight loop" renamed to the
  **Sovereignty loop** with the primitive-vs-loop altitude distinction. This run
  carries it into §VII; nothing further to do.
- **fw-* skills should name their gates uniformly** (match PROTOCOL.md). Priority:
  `fw-entropy` (no named gate at all), then frequency/current/flow.

### Remove from methodology
- Nothing. (No step proved counterproductive this run.)

---

## Top 3 things to carry forward

1. **Most "stale documentation" is a reopened loop with no re-close signal.** Treat
   drift as a *loop-wiring* problem, not a discipline problem. `contract-sync` is
   the re-close signal — wire it to fire on upstream phase changes.
2. **A proxy close hides debt better than an open loop does.** Stability and
   Resonance *felt* done because a human stood in for the missing formal signal.
   Emitting the real signal (ports, tests) is what makes the debt visible. Prefer
   the uncomfortable open loop to the comfortable proxy.
3. **An audit that leaves no artifact never closed.** The Phase-7 inline trap cost
   14th & Co months of invisible contradiction debt. Wire every audit to a
   re-diffable artifact, always.

---

## Note for the next run

This retro *is* the system loop closing. The next project should start from the
evolved system: the Loop Model is now canon, "closing-signal-must-produce-an-
artifact" is a rule, and re-pass mode is named. The open question the model still
carries (where per-loop autonomy defaults are declared — ProjectContext vs
manifest vs Postures config) is now more urgent, because 14th & Co showed the
absence of a project manifest is itself an unclosed loop.
