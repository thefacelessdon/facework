---
id: FVP-400
title: Release Readiness Register
version: 0.1.0
status: preview-ready
parents: [FVP-000, FVP-300]
validated: 2026-08-06
---

# FVP-400 — Release Readiness Register

## Release position

The Facework runtime is technically ready for a deployment preview. Public
production release remains gated by human verification of claims, assistive
technology, real devices, operating policy, and the final release decision.

## Gate register

| Gate | State | Release requirement |
|---|---|---|
| Optimized build, lint, dependency audit | Pass | No action |
| Automated accessibility | Pass | Zero violations on 9 representative surfaces |
| Responsive behavior | Pass | 320–2560 px, portrait and landscape |
| Production Lighthouse | Pass | 96 / 100 / 100 / 100 |
| Security and indexing baseline | Pass | Headers, robots, and sitemap verified |
| Public policy surfaces | Pass | Privacy and accessibility pages reachable |
| Public claims | Owner review | Verify GAMUT was built in 4 days and contains 36,000+ lines of specification |
| Contact channel | Owner review | Confirm `hello@face.works` is monitored before publication |
| Status evidence | Owner review | Replace or approve the dated evidence snapshot before publication |
| Assistive technology | Manual test | VoiceOver and NVDA landmark, navigation, dialog, and route-transition pass |
| Real devices and text scaling | Manual test | Current Safari and Android Chrome at increased text sizes |
| Production operating policy | Owner decision | Confirm the disclosed no-analytics/no-marketing-cookie posture and retention policy |
| Multiplayer Field | Separate gate | FVA-610 privacy and community-safety approval before enabling shared participation |
| Trademark | Counsel/owner review | Required before high-cost or registered identity use |
| Deployment | Explicit authorization | Approve preview, then approve production promotion |

## Deployment sequence

1. Publish a non-production preview.
2. Run owner content review and manual device/accessibility checks against it.
3. Record the results in this register.
4. Approve production promotion explicitly.

The preview may be used for review. It should not be represented as the public,
fully validated release until every production gate above is closed.
