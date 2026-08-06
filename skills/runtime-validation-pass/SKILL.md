---
name: runtime-validation-pass
version: 1.0.0
description: |
  Validate Facework Runtime Ports (§9) against one external runtime shell and
  fold genuinely new findings back into the spec as additive canon. Use when
  someone asks how to think about — or whether to adopt — an agent runtime,
  framework, or platform, or when adding a reference tenant toward §9.2's
  three-tenant bar.
  Trigger phrases: "how should I think about <tool>", "should we use <runtime>",
  "validate the ports against <X>", "runtime comparison", "does <platform> fit
  Facework", "add a reference runtime", "compare <runtime> to Buzz/Letta".
  Do NOT trigger when: running the protocol on a project (use the /fw-* phase
  skills), maintaining a live tenant system (use a Posture), or authoring an
  unrelated spec change. This is a SYSTEM-LOOP skill — it evolves the methodology.
  It is not a Posture (product loop) or a phase (the establish-coherence sequence).
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
  - WebFetch
  - WebSearch
  - Agent
  - AskUserQuestion
---

# /runtime-validation-pass

Validate the four Runtime Ports against one external runtime shell, then compile
the result into additive spec canon. **One runtime per pass.** Reframe adoption
questions up a layer: Facework is the authoring layer that *compiles down* to
runtimes it does not own — the ports are the contract, the runtime is a consumer
(§9.11). The answer is never "adopt / don't adopt"; it is "which ports does this
shell host, which stay authoring-side, and is the shell itself sovereign?"

## Steps

1. **Pick the corner, not the confirmation.** Choose a runtime that stresses the
   ports the *existing* reference tenants host weakest — span the space, don't
   confirm it. Name the corner up front (collaboration/audit, memory/context,
   hosted/rented, …) and state how it differs from prior tenants. A confirming
   runtime teaches nothing; three opposite corners gave three distinct findings
   (retro 008).

2. **Two-stage research — source-verified.** Dispatch a research subagent for a
   broad technical brief across all four ports plus identity, audit, and
   sovereignty. Then dispatch a SECOND subagent to verify every claim that will
   become canon against actual source files (schemas, registries, configs) —
   never prose docs alone. Prose is a lead; source is evidence. This two-stage
   shape exists because a broad-brief-only conclusion once shipped wrong and the
   source pass overturned it (retro 008).

3. **Port-by-port gap note.** Write
   `methodology/runtime-ports-<name>-gap-<yyyy-mm-dd>.md`: map each port
   (`SkillManifest`, `MemoryMap`, `ContextManifest`, `IntegrationManifest`) as
   native / partial / no-home, and contrast explicitly with the prior reference
   tenants. Classify the sovereignty of the **runtime shell itself**
   (own/rent/mitigate) — not just its integrations — per §9.11 (FS-400.6). Cite
   sources.

4. **Additive refinement only.** Fold genuinely new findings into the spec as
   additive text (§9.11, the Phase-7 gate, FS-400 concepts, the FS-400 source
   memo). Never break existing conformance; calibrate any new gate so it no-ops
   when the feature it governs is not declared. If the runtime surfaces nothing
   new, say so — a confirming pass adds a data point, not spec surface.

5. **Land it.** Promote the FS-400 source memo (add this runtime + synthesis),
   bump `VERSION` (PATCH), add the `methodology/CHANGELOG.md` entry, and open one
   PR via the git-native flow: branch, stage ONLY this pass's files (never
   `git add -A` — the tree may carry unrelated/personal dirs), title
   `docs: … (0.0.X)`. Update the reference memory.

## Output
- `Corner tested` — which ports it stresses, vs prior tenants
- `Port map` — native / partial / no-home, per port
- `Shell sovereignty` — own/rent/mitigate (+ explicit waiver if the shell is rent)
- `New spec finding` — the additive refinement, or "confirming only"
- `PR` — one runtime, additive, calibrated
