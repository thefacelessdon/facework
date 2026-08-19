# Facework — Claude Code

**Read [`AGENTS.md`](AGENTS.md) first. It is the canonical agent instruction set
for this repo and it governs.** This file holds only what is specific to Claude
Code; everything about what Facework is, how the protocol runs, the authority
model, the site, and ship discipline lives in `AGENTS.md`.

Keeping one canonical guide is deliberate: harnesses that read `AGENTS.md`
(Berd, goose, Codex) and harnesses that read `CLAUDE.md` must get the same
instructions. Do not restate `AGENTS.md` content here — extend `AGENTS.md`
instead, or the two drift.

## Browsing

Use the `/browse` skill from gstack for **all web browsing**. Never use
`mcp__claude-in-chrome__*` tools.

## Available gstack skills

| Skill | Purpose |
|-------|---------|
| `/plan-ceo-review` | CEO/founder-mode plan review — challenge premises, find the 10-star product |
| `/plan-eng-review` | Eng manager-mode plan review — lock architecture, data flow, edge cases |
| `/plan-design-review` | Designer's eye review of a live site — visual audit with letter grades |
| `/review` | Pre-landing PR review — SQL safety, trust boundaries, structural issues |
| `/ship` | Ship workflow — merge, test, review diff, bump version, push, create PR |
| `/browse` | Fast headless browser — navigate, interact, screenshot, assert state |
| `/qa` | Systematic QA testing + iterative bug fixing with atomic commits |
| `/qa-only` | Report-only QA testing — structured report, no code changes |
| `/qa-design-review` | Designer's eye QA with iterative fix loop |
| `/setup-browser-cookies` | Import cookies from real browser for authenticated testing |
| `/retro` | Weekly engineering retrospective with trend tracking |
| `/document-release` | Post-ship documentation update across all project docs |
| `/design-consultation` | Design system research — typography, color, spacing, motion |
| `/gstack-upgrade` | Upgrade gstack to the latest version |

Note on `/ship`: it aborts on `main` and its code-pipeline gates do not fit a
docs/spec repo. Follow the git-native ship path in `AGENTS.md` instead.

## Previewing the site

`.claude/launch.json` defines `face-works-prototype` (dev) and `face-works-prod`
(production build) on port 3000. Use the Browser pane's `preview_start`, never
Bash, to run them.
