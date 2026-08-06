---
id: FVP-000
title: Production Integration and Validation
version: 0.1.0
status: active-program
authority: governing-program
parents: [FVS-000, FVS-900, FVA-100, FVA-610]
created: 2026-08-06
---

# FVP-000 — Production Integration and Validation

## Objective

Move the Facework visual system from reference artifacts into the maintained
`face.works` runtime without allowing pre-FVS design material to regain
authority through implementation inertia.

## Program sequence

1. **Inventory** — classify every design source by authority and runtime use.
2. **Baseline** — record measurable failures before changing the implementation.
3. **Integrate** — replace the runtime shell with FVA-100 and canonical FVI
   assets while preserving useful content and routes.
4. **Contain** — mark stale sources as historical evidence and remove them from
   active runtime imports.
5. **Validate** — test build, lint, accessibility, keyboard behavior,
   responsiveness, motion, performance, metadata, and broken links.
6. **Promote** — record the implementation candidate and remaining release
   gates without silently declaring production readiness.

## Release boundary

This program may promote a runtime to **validated implementation candidate**.
Public production release still requires real-device review, content-owner
approval, production-domain analytics/privacy decisions, and deployment
authorization.

## Governing rule

When an implementation conflicts with FVS, the implementation changes. A stale
prototype never changes the specification merely because it already runs.
