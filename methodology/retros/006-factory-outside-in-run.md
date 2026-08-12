# Project Retrospective: FACTORY (outside-in protocol run)

**Date:** 2026-07-01
**Duration:** Single session
**Phases completed:** All 8 (Semantics, Field, Taste, Frequency, Current, Flow,
Stability, Resonance, Entropy, Sovereignty, Consonance, Coherence) — full
12-primitive run, at deliberately calibrated depth per phase.

---

## What the project was

An outside-in Facework protocol run on FACTORY (Keenan Beasley's multi-family
office platform), with no founder interview — built entirely from a public
transcript and a full site crawl, to produce a concrete artifact for Harper to
show Keenan as the opening move in a collaboration exploration, rather than
asking Keenan to volunteer a pilot client sight-unseen. Full artifacts at
`personal/collaboration/factory-run/`.

## What this teaches the methodology (the actual point of this retro)

This is the first run in this repo of the full protocol against a real,
external, already-operating company with zero founder access. That's a
meaningfully different mode than every other track the protocol documents
(Creator, Cultural Brand, Athlete, Agency/Studio, Platform/Product all assume
*some* founder participation). Worth naming as its own pattern.

### Semantics
Held up well outside-in — meaning/language work is the phase least dependent
on insider access, because it's reconstructable from how a company already
talks about itself. The Demand Gate (named person, described concretely) was
the one step that felt genuinely strained without a founder in the room — it
produced a real answer (the Meek Mill anecdote, the NIL-athlete persona) but
only because the transcript happened to contain unusually specific material.
A thinner source document would have forced a weaker, more speculative
answer here. **Pattern:** the Demand Gate's quality is bounded by source
material specificity — flag this as a pre-check before attempting an
outside-in Semantics run at all.

### Field
Ran cleanly outside-in — field dynamics are observable from a company's own
public positioning almost as well as from an interview, arguably better in
some ways (a founder narrating their own field dynamics is subject to
self-serving framing; outside inference has no such incentive, though it has
its own blind spots).

### Taste
The single most valuable adaptation this run made: instead of inventing a
DesignInfrastructure (tokens, components) for a brand Facework doesn't own,
it inspected the *real* live CSS and described the existing system, then
evaluated it. **New pattern to formalize:** for any outside-in Taste phase on
an already-shipped product, "inspect and evaluate the real system" should be
the default move, not "invent a new one." This should probably be written
into `fw-taste`'s SKILL.md as an explicit branch, not left to be improvised
per-run.

### Frequency / Current
The gate structure (Gate 1: label every number speculative until founder-
confirmed) did real work here — it kept the whole business-model section
honest instead of quietly drifting into invented numbers to fill out the
template. **Pattern:** Frequency's template assumes the numbers exist and
need extracting; an outside-in run needs an explicit "NOT DERIVABLE" branch
built into the template itself, not just applied ad hoc.

### Flow / Stability
Flow's "operations ARE the product" (Agency/Studio) emphasis collided
directly with the access constraint — only 3 of a likely 6-8 playbooks were
reconstructable, and the other categories (staffing, QA, invoicing,
retrospective) simply aren't publicly observable. Naming the gaps explicitly
rather than inventing plausible-sounding playbooks felt like the right call,
but it does mean an outside-in Flow phase is structurally incomplete in a way
founder-participation Flow isn't. Stability's Runtime Ports emission was
correctly skipped — those manifests declare a tenant's own adopted runtime,
which isn't something an outside party should presuppose.

### Resonance
This is where the access constraint bit hardest. Full Resonance assumes
either a greenfield build or authorized access to an existing codebase;
neither applies here. Scoping down to one static reference artifact (a
before/after mockup of one Taste-phase finding) preserved the spirit of
"composition from declared capabilities" without overstepping into building
or implying deployment against a real company's live systems without
authorization. **Pattern worth formalizing:** Resonance needs an explicit
"outside-in / no-authorization" mode in its own SKILL.md — right now the
skill assumes you either have a codebase or are building one from scratch.

### Entropy / Sovereignty / Consonance
These three held up best of all outside-in — they're audit phases, and
auditing a company's own public material for structural gaps doesn't require
insider access the way building or economics-setting does. The one genuine
Consonance finding (visual restraint vs. relational-warmth tension) is
exactly the kind of cross-layer catch this phase exists for, and it emerged
naturally from having Taste and Semantics/Field artifacts to check against
each other — the layered structure did its job.

### Coherence
Producing a Coherence Scorecard without the founder in the room to confirm
or challenge the self-assigned scores is the weakest part of this whole
exercise, structurally. The scores here (see `DiagnosticReport.md`) should
be read as Facework's own hypothesis, explicitly not validated.

## Methodology updates proposed

**Add to methodology:** An explicit "outside-in run" mode/flag, settable at
Semantics intake, that propagates through every subsequent phase's SKILL.md
with pre-written guidance for what to skip, what to flag, and what NOT to
invent (numbers, tokens, internal workflows). This run improvised that
guidance per-phase; it should be a first-class, documented mode.

**Add to methodology:** Taste phase should branch explicitly on "does this
project already have a shipped design system?" — inspect-and-evaluate vs.
invent-from-scratch are different workflows and the skill currently only
describes the invent-from-scratch path.

**Modify in methodology:** Resonance's Step 4b (reference page) should be
promoted from "optional, UI projects only" to the *default* Resonance output
for any outside-in run, since full interface-building is categorically out
of scope without codebase access and authorization.

## Top 3 things to carry forward

1. Outside-in runs are a real, distinct mode of the protocol, not a degraded
   version of a normal run — they need first-class support, not per-run
   improvisation, if this pattern (using Facework to produce a concrete
   artifact before a real conversation happens) is going to recur.
2. "Inspect and evaluate the real thing" beats "invent a plausible thing"
   everywhere it's available (Taste's CSS inspection, Frequency's direct
   transcript quotes) — the run is more credible and more useful to the
   actual recipient (Keenan) for staying descriptive where it can.
3. The single most valuable output of an outside-in run may not be the
   8-phase artifact set itself, but the handful of concrete, low-effort,
   non-Facework-dependent fixes it surfaces along the way (the Essentials
   copy fix, the fiduciary one-pager, the voice guide draft) — these are
   worth leading with when shown to the subject, because they don't require
   agreeing to anything to be useful.
