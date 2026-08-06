import type { Metadata } from "next";
import {
  RecordLabel,
  SectionHead,
  Reading,
  StructureLineage,
  InkCTA,
  ReadingIndex,
} from "@/components/rr";
import { caseStudies } from "@/data/demo";

export const metadata: Metadata = {
  title: "The Practice",
  description:
    "How to work with Facework: what the practice is, the method, what you get, what it costs, and the proof behind it.",
};

// The frame Facework sets before any scope is discussed (the honest entry).
const frame = [
  {
    term: "Entry point",
    desc: "The first conversation is a diagnostic, not a funnel. Fit is determined before scope is sold.",
  },
  {
    term: "Qualification boundary",
    desc: "If the work would reinforce extraction, hide dependency risk, or arrive too early for the stage, Facework says no.",
  },
  {
    term: "Transfer model",
    desc: "The output is meant to outlive the engagement: docs, code, and system logic move into your control at handoff.",
  },
];

// The method — order is real, so the index is load-bearing (§6).
const method = [
  {
    step: "01",
    title: "Conversation",
    detail:
      "We talk about what you're building, who it serves, and what infrastructure you need. 30–60 minutes. Not a pitch — a diagnostic.",
  },
  {
    step: "02",
    title: "Qualification",
    detail:
      "Honest fit check. If the engagement won't serve you — wrong stage, extractive model, budget mismatch — we say so directly.",
  },
  {
    step: "03",
    title: "Scope",
    detail:
      "A clear scope document: what's included, timeline, deliverables, investment. No hidden fees, no scope creep.",
  },
  {
    step: "04",
    title: "Build",
    detail:
      "The Facework practice runs. You participate in review sessions. The agent generates, you steer, we build your system.",
  },
  {
    step: "05",
    title: "Handoff",
    detail:
      "Everything transferred to your accounts. Repository, docs, code — all yours. A new builder can start Day 1 without a meeting.",
  },
];

// What you leave with (deliverables).
const deliverables = [
  {
    title: "Locked direction",
    detail:
      "Governance, strategic decisions, and architecture logic documented clearly enough to prevent drift when the build starts.",
  },
  {
    title: "Transferable system",
    detail:
      "Specs, playbooks, prototype logic, and handoff materials structured so another builder can continue without starting from oral history.",
  },
];

// Sovereignty — the boundaries the engagement cannot cross (settled).
const sovereignty = [
  { label: "You own all output; exit is clean.", note: "guaranteed", state: "settled" as const },
  { label: "Deliverables ship in open formats — no proprietary lock-in.", note: "guaranteed", state: "settled" as const },
  { label: "Conduits, not containers — Facework never holds your infrastructure.", note: "guaranteed", state: "settled" as const },
  { label: "The protocol stays open — theory, discipline, and method remain free.", note: "guaranteed", state: "settled" as const },
];

// Pricing tiers — verbatim from the engagement model.
const tiers = [
  {
    title: "Full System Build",
    duration: "5–8 days",
    price: "$15K – $25K",
    detail:
      "Governance, strategic direction, architecture specs, operational playbooks, design language, working prototype, engineering review, handoff package. Everything needed to move from worldview to a build-ready system.",
    bestWhen: "Best when prototype, architecture, and handoff all need to happen together.",
  },
  {
    title: "Foundation Layer",
    duration: "3–5 days",
    price: "$10K – $15K",
    detail:
      "Governance, strategic direction, architecture specs, operational playbooks. No prototype. For creators who have an engineer ready to build and need the architecture, not the prototype layer.",
    bestWhen: "Best when execution capacity already exists and the missing piece is structural clarity.",
  },
];

// This is for you if — qualification (settled boundaries you must meet).
const qualifiers = [
  { label: "You have an existing creative practice or brand with economic activity.", note: "fit", state: "settled" as const },
  { label: "You need operational infrastructure you control — not another platform dependency.", note: "fit", state: "settled" as const },
  { label: "You're willing to participate in the process, not outsource-and-forget.", note: "fit", state: "settled" as const },
  { label: "Your business model doesn't extract from the community it serves.", note: "fit", state: "settled" as const },
];

// Compact evidence strip: the audited / Facework-run cases (detail lives on /proof).
const provenanceLabel: Record<string, string> = {
  "self-audit": "Retroactive self-audit",
  "facework-run": "Facework protocol run",
  "facework-informed": "Built with the Facework discipline",
};

const evidence = caseStudies.map((study) => {
  const provenance =
    study.status === "audit-complete"
      ? "Retroactive self-audit"
      : provenanceLabel[study.provenance ?? ""] ?? "Facework work";
  const level = study.conformanceLevel
    ? `Level ${study.conformanceLevel} · self-reported`
    : "No Level claimed";
  return {
    id: study.title,
    title: study.title,
    note: `${provenance} · ${level} · ${study.domain}`,
    href: "/proof",
  };
});

export default function PracticePage() {
  return (
    <div className="rr-field rr-page section-page">
      <div className="rr-column rr-column--wide">
        <header className="rr-masthead">
          <RecordLabel tick>The Practice · under observation</RecordLabel>
          <h1 className="rr-display">Work with Facework.</h1>
          <p className="rr-lede">
            One conversation. If the fit is right, we scope it. If it&rsquo;s
            not, you leave with useful perspective anyway. This is where a live
            reading gets commissioned &mdash; so the frame is set in the open
            before any scope is sold.
          </p>
        </header>

        <section className="rr-section" aria-label="How engagement works">
          <dl className="rr-strip">
            {frame.map((f) => (
              <div className="rr-strip__pair" key={f.term}>
                <dt className="rr-strip__term">{f.term}</dt>
                <dd className="rr-strip__desc">{f.desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rr-section" aria-label="What the practice is">
          <SectionHead label="What it is" title="Priced by coherence, not by hours" />
          <Reading label="The practice" title="A reading of a real system, then the structure it needs">
            <p>
              Facework doesn&rsquo;t price by deliverable or by hour. It prices
              by depth, complexity, and the coherence shift required. Some
              creators need a diagnostic and a realignment. Others need a full
              rebuild of their governance, architecture, and systems.
            </p>
            <p>
              You&rsquo;re not paying for time. You&rsquo;re paying for the
              architecture that changes how you operate.
            </p>
          </Reading>
        </section>

        <section className="rr-section" aria-label="The method">
          <SectionHead label="The method" index="5 stages" title="Conversation to handoff" />
          <ol className="rr-rows">
            {method.map((m) => (
              <li className="rr-rows__item" key={m.step}>
                <span className="rr-rows__meta">
                  <strong>{m.step}</strong>
                </span>
                <div className="rr-rows__body">
                  <h3 className="rr-rows__title">{m.title}</h3>
                  <p className="rr-rows__note">{m.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rr-section" aria-label="What you get">
          <SectionHead label="What you get" title="Direction, and a system that transfers" />
          <ul className="rr-rows">
            {deliverables.map((d, i) => (
              <li className="rr-rows__item" key={d.title}>
                <span className="rr-rows__meta">
                  <strong>{String(i + 1).padStart(2, "0")}</strong>
                </span>
                <div className="rr-rows__body">
                  <h3 className="rr-rows__title">{d.title}</h3>
                  <p className="rr-rows__note">{d.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rr-section" aria-label="Sovereignty">
          <SectionHead label="Sovereignty" title="Boundaries the engagement cannot cross" />
          <StructureLineage rows={sovereignty} label="Sovereignty guarantees" />
        </section>

        <section className="rr-section" aria-label="Pricing">
          <SectionHead label="Pricing" title="Scope reflects the coherence it must create" />
          <ul className="rr-rows">
            {tiers.map((t) => (
              <li className="rr-rows__item" key={t.title}>
                <span className="rr-rows__meta">
                  <strong>{t.duration}</strong>
                  {t.price}
                </span>
                <div className="rr-rows__body">
                  <h3 className="rr-rows__title">{t.title}</h3>
                  <p className="rr-rows__note">{t.detail}</p>
                  <p className="rr-rows__sub">{t.bestWhen}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rr-section" aria-label="This is for you if">
          <SectionHead label="This is for you if" title="Qualification" />
          <StructureLineage rows={qualifiers} label="Qualification criteria" />
        </section>

        <section className="rr-section" aria-label="Evidence">
          <SectionHead label="Evidence" title="The proof behind the practice" />
          <p className="rr-lede">
            Each case states its provenance plainly, so a self-report is never
            mistaken for a client-ratified audit. The full record &mdash; with
            every disclosure &mdash; lives on the proof surface.
          </p>
          <ReadingIndex
            items={evidence}
            showStatus={false}
            label="Audited and Facework-run cases"
          />
          <div>
            <a className="rr-link" href="/proof">
              Read the full proof record
            </a>
          </div>
          <div style={{ marginTop: "var(--rr-sp-3)" }}>
            <a className="rr-link" href="/cases">
              See work built with the Facework discipline
            </a>
          </div>
        </section>

        <section className="rr-section" aria-label="Contact">
          <SectionHead label="Contact" title="One conversation" />
          <Reading label="Begin" title="What problem are you trying to make coherent?">
            <p>
              Email a brief description of what you&rsquo;re building and what
              you need. No form, no funnel. One conversation.
            </p>
          </Reading>
          <div>
            <InkCTA href="mailto:hello@face.works">hello@face.works</InkCTA>
          </div>
        </section>
      </div>
    </div>
  );
}
