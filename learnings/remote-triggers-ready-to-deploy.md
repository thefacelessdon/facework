# Remote Triggers — Ready to Deploy

Status: blocked by API outage (2026-04-04). Deploy when API recovers.

Three existing triggers may still be consuming slots:
- `trig_011dwaBSYcBwC8KKNGULWFpy` (weekly-retro v1)
- `trig_01YYNJ473KUswnokXwqgzDmp` (protocol-health v1)
- `trig_011BqT1KaWEyrZQimgMSQRak` (contract-sync v1)

Delete these at https://claude.ai/code/scheduled before creating replacements.
Also delete the empty `14th-and-co` repo at https://github.com/thefacelessdon/14th-and-co/settings

## Environment

- Environment: Cultural Architecture Project (`env_013sjmipxjbpjTP22sSBhS1F`)
- Model: claude-sonnet-4-6
- Timezone: America/Chicago (CDT = UTC-5)

## Trigger 1: weekly-retro (Sunday 6pm CDT)

- **Cron:** `0 23 * * 0`
- **Repos:** facework, GAMUT, HUE-Unlimited, club-volley, her-set-her-sound, 14th-co, savage-mode
- **Purpose:** Full portfolio retrospective + contract drift check

**Prompt:**
```
Run a weekly retrospective across all repos in this workspace. Analyze the git log from the past 7 days for each repo.

For each repo with activity:
1. Summarize what changed and why
2. Note cross-repo patterns — shared concerns, momentum shifts, stalls
3. Check CLAUDE.md and any memory/ directories for locked decisions. Flag drift.
4. Identify blocked work or stale branches

Also fold in contract sync: for repos with both docs and code (GAMUT, HUE-Unlimited, 14th-co), check whether documentation, specs, and playbooks still match the actual code. Flag drift as cosmetic/misleading/breaking.

For repos with NO activity, note briefly.

Output:
## Weekly Retro — [date]
### Portfolio Pulse
One paragraph: where energy flows, stalls, compounds.
### Per-Repo Activity
What shipped, in progress, blocked.
### Cross-Repo Patterns
### Contract Drift
Any docs-vs-code misalignment found.
### Decisions Needed
Surface dilemmas with tradeoffs.
### Forward Look
What deserves attention next week.

Concise, high-signal.
```

## Trigger 2: protocol-health (Monday 10am CDT)

- **Cron:** `0 15 * * 1`
- **Repos:** facework, GAMUT, HUE-Unlimited, club-volley, her-set-her-sound, 14th-co, savage-mode
- **Purpose:** Coherence scoring + drift detection across all protocol runs

**Prompt:**
```
Run a Facework protocol health check across all repos.

Coherence formula: Coherence = (Flow x Resonance) / (1 + Entropy), where Entropy = 6 - Structural Integrity. Flow (1-5), Resonance (1-5), SI (1-5). Zones: RED (0.2-1.0), AMBER (1.0-2.5), GREEN (2.5-5.0), DEEP GREEN (5.0-12.5).

For each repo, look for protocol artifacts — directories like facework/, hshs-ops/, ops/, or phase output files (signal-thesis.md, audience-field-map.md, taste-contract.md, DecisionLedger, etc.).

For each project with artifacts:
1. Which phases complete, in-progress, not started?
2. Score Flow, Resonance, SI
3. Calculate coherence, assign zone
4. Flag contradictions with locked decisions
5. Next actionable phase + blocker

For the Facework repo: are skills consistent with PROTOCOL.md? Methodology updates needed?

Output:
## Protocol Health — [date]
### Scoreboard
| Project | Phase | Flow | Resonance | SI | Entropy | Coherence | Zone | Trend |
### Drift Alerts
### Next Moves (prioritized)
### Methodology Signal

Score honestly.
```

## Trigger 3: phase-advance (Weekdays 9am CDT)

- **Cron:** `0 14 * * 1-5`
- **Repos:** facework, her-set-her-sound, club-volley, 14th-co, HUE-Unlimited
- **Purpose:** Autonomously advance protocol runs, pause at decisions

**Prompt:**
```
Autonomous phase advancement agent. Your job: advance Facework protocol runs across projects by drafting the next phase artifact for each project that has an incomplete protocol run.

Step 1 — Identify state: For each repo, find protocol artifacts and determine which phase was last completed and which is next. Read the Facework repo's skills/ directory to understand what each phase requires.

Step 2 — For each project with an incomplete run, draft the next phase artifact:
- Read ALL prior phase outputs for that project first
- Read the corresponding skill SKILL.md from the facework repo to understand inputs, outputs, and rules
- Draft the artifact following the skill's specification exactly
- Create the file in the project's protocol directory (facework/, hshs-ops/, ops/, etc.)
- Commit with message: 'Draft [Phase N]: [phase name] — awaiting review'

Step 3 — Decision gates: If the phase requires a decision that only the human can make (taste judgments, strategic direction, budget allocation, identity choices), DO NOT guess. Instead:
- Write the artifact up to the decision point
- Document the decision needed with clear options and tradeoffs
- Add a DECISION-NEEDED.md file listing what's blocked and why
- Commit with message: 'Draft [Phase N]: [phase name] — DECISION NEEDED'

Step 4 — Also check 14th-co for new ops patterns this week. Cross-reference with savage-mode frameworks. If clear, unambiguous framework updates exist (validated examples, confirmed patterns), commit them to savage-mode. For anything requiring judgment, note in report only.

Step 5 — Report what you did:
## Phase Advance — [date]
### Actions Taken
For each project: what phase was drafted, what decisions are pending.
### Decisions Needed
For each blocked decision: the dilemma, the options, the tradeoffs.
### Savage Mode Updates
Any patterns extracted from 14th-co ops work.
### Next Session
What the next run of this agent should tackle.

Rules:
- Never override a locked decision from a prior phase
- Never skip a phase — they must run in order
- If a project has no protocol artifacts yet, skip it
- Quality over speed — a well-drafted artifact is worth more than a rushed one
```

## Future: Post-Push Review (GitHub Actions)

Not possible via remote triggers (cron only, no webhooks). Deploy as GitHub Actions workflow in GAMUT and HUE-Unlimited repos. Triggers on push, runs Claude Code review.
