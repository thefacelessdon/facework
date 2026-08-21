# Facework Operating Skills Map

**These are the Postures — the product-loop operating modes.** Where the Protocol
*establishes* coherence (a one-pass sequence), Postures *maintain* it: the
standing operating modes that keep a live system converging after setup. Each
fires on a closing signal (drift → `/contract-sync`, broken behavior →
`/evidence-debug`, growth pressure → `/scale-readiness`). See
`methodology/loop-model.md` and CONSTITUTION.md Article V.

**"Posture" means these eight and nothing else.** The 12 primitives adopted as
live per-action stances — the trigger-question discipline in `AGENTS.md`
*The two-layer check* — are **not** Postures: they *establish* coherence, which is
Article V's other half. GAMUT's `.claude/rules/75-collaboration-postures.md` calls
them "collaboration-postures"; that is a Rule-75 term and does not import.
`sovereigntyPosture` (own/rent/mitigate) and `data_posture`
(retention/training/residency) in `facework.manifest.schema.json` are two further,
schema-enforced senses. Ruling and full sense map:
`methodology/decisions/DECISION-008-posture-is-a-constitutional-term.md`.

## Added Skills
- `/mvp-cut` - Define the smallest high-integrity MVP slice.
- `/beta-hardening` - Harden MVP into beta reliability and observability.
- `/scale-readiness` - Assess readiness to scale team, system, and operations.
- `/contract-sync` - Resolve code/docs/contract drift.
- `/decision-log` - Record high-signal decisions with rationale and revisit triggers.
- `/weekly-upgrade` - Convert weekly learnings into system improvements.
- `/evidence-debug` - Debug from hard evidence and close with prevention.
- `/launch-ops` - Execute release and verify post-launch health.

## System-loop skills (methodology evolution — NOT Postures)

These evolve the practice itself rather than maintain a tenant system. They fire
on the **system loop**, not the product loop, so they live here for discovery but
are not Postures (and are not required by `facework-doctor`, like the primitives).

- `/runtime-validation-pass` - Validate Runtime Ports (§9) against one external
  runtime shell and fold new findings into spec canon. Proven across Buzz, Letta,
  OpenAI, Claude Code, and Berd; see
  `methodology/retros/008-runtime-ports-validation-program.md`.

## Diagnostic skills (instrument readers — NOT Postures)

Read-only. These take a reading and change nothing. A Posture converges a live
system; a diagnostic reports its present state and stops.

- `/fw-spectrum` - Read ONE band of a system's coherence and emit a locus, not a
  score. Runs a single detector from `theories/coherence-instrumentation.md` per
  invocation (§VI.1, the visor rule: never render all bands at once), refuses a
  reading whose instrument is not coupled to the force it claims, places a control
  outside the band, and carries the FW-DEC-006 base rates and the F7 instability
  flag. Present-state only — it does not forecast, and it writes no tracker row.
  Paired persona: `.agents/agents/instrument-reader.md`.

## Carrier skills (Operating Harness lifecycle — NOT Postures)

A fifth class. These operate one **Operating Harness** record — the typed carrier
for *operating intent* — through its lifecycle. They are not Postures: a Posture
maintains a live tenant system on the product loop, while these move a single
carrier record from stated intent to recorded evidence. Governing spec:
`methodology/operating-harness-spec.md`; authority and storage ratified in
`methodology/decisions/DECISION-010-operating-harness-v0-ratification.md`.

Per `DECISION-007`, bare "harness" means the runtime sense; the carrier sense is
always qualified.

- `/harness-open` - Capture one operating intent and bind it to context. Produces
  a record at `context-bound`; authors only `operation.kind` and its payload,
  never mode, channel, or enforcer.
- `/harness-review` - The tableau. Diagnostic only: score and critique candidate
  advances, change no subject state.
- `/harness-close` - Authority check and evidence record. **Refuses to close**
  without a validator-passing record and resolving back-links.

Mechanical check: `bin/validate-operating-harness-record`. It is standalone —
separate from `bin/validate-manifest`, and the carrier format does not enter
`PROTOCOL.md` §9-§12 or the manifest schema.

## Paired Specialist Agents
- `/mvp-cut` -> `mvp-scope-architect`
- `/beta-hardening` -> `beta-reliability-auditor`
- `/scale-readiness` -> `scale-ops-architect`
- `/contract-sync` -> `contract-integrity-auditor`
- `/decision-log` -> `decision-quality-moderator`
- `/weekly-upgrade` -> `weekly-systems-coach`
- `/evidence-debug` -> `evidence-investigator`
- `/launch-ops` -> `launch-commander`
- `/runtime-validation-pass` -> `runtime-ports-auditor` (system-loop skill)

## Recommended Operating Loop
1. Plan scope with `/mvp-cut`
2. Build and stabilize with `/beta-hardening`
3. Keep truth aligned with `/contract-sync`
4. Capture choices with `/decision-log`
5. Ship with `/launch-ops`
6. Improve weekly with `/weekly-upgrade`
7. Before growth pushes, run `/scale-readiness`

For deep analysis on any step, invoke the paired specialist agent.

## Fast Triggers
- "What is the smallest thing we can ship this week?" -> `/mvp-cut`
- "Are we actually beta ready?" -> `/beta-hardening`
- "Docs and behavior feel out of sync." -> `/contract-sync`
- "We keep re-arguing the same decision." -> `/decision-log`
- "Something is broken and we keep guessing." -> `/evidence-debug`
- "We are shipping today." -> `/launch-ops`
- "What should we improve from this week?" -> `/weekly-upgrade`

## Auto-Trigger Calibration Notes
- Favor these skills when user intent implies outcome + stage pressure.
- Prefer `/mvp-cut` before `/beta-hardening` when both could apply.
- Prefer `/evidence-debug` before proposing fixes when runtime truth is unclear.
- Prefer `/contract-sync` when disagreement sounds like docs vs behavior mismatch.

## Personal Language Hints
- Fast action cues: "please", "go", "go for it", "lets do it", "please do".
- Debug cues: "issue reproduced, please proceed", "going in circles", "not a live app".
- Handoff cues: "seamless handoff", "prep for backend team", "what else can I do to clean up".
- Strategy cues: "faulty thinking", "backward-looking", "build for current ways of working".

## Negative Trigger Matrix
- If user asks to fix a live bug now, prefer `/evidence-debug` over `/decision-log` or `/scale-readiness`.
- If user asks to ship today, prefer `/launch-ops` unless critical defects are unresolved.
- If user asks for smallest shippable scope, prefer `/mvp-cut` over `/beta-hardening`.
- If user asks about stale docs/contracts mismatch, prefer `/contract-sync` over `/weekly-upgrade`.
- If user asks for weekly process improvement, prefer `/weekly-upgrade` over one-off execution skills.
