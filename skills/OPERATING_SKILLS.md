# Facework Operating Skills Map

## Added Skills
- `/mvp-cut` - Define the smallest high-integrity MVP slice.
- `/beta-hardening` - Harden MVP into beta reliability and observability.
- `/scale-readiness` - Assess readiness to scale team, system, and operations.
- `/contract-sync` - Resolve code/docs/contract drift.
- `/decision-log` - Record high-signal decisions with rationale and revisit triggers.
- `/weekly-upgrade` - Convert weekly learnings into system improvements.
- `/evidence-debug` - Debug from hard evidence and close with prevention.
- `/launch-ops` - Execute release and verify post-launch health.

## Paired Specialist Agents
- `/mvp-cut` -> `mvp-scope-architect`
- `/beta-hardening` -> `beta-reliability-auditor`
- `/scale-readiness` -> `scale-ops-architect`
- `/contract-sync` -> `contract-integrity-auditor`
- `/decision-log` -> `decision-quality-moderator`
- `/weekly-upgrade` -> `weekly-systems-coach`
- `/evidence-debug` -> `evidence-investigator`
- `/launch-ops` -> `launch-commander`

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
