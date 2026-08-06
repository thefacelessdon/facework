const engagementTypes = [
  {
    title: "Full System Build",
    duration: "5–8 days",
    price: "$15K – $25K",
    detail:
      "Governance, strategic direction, architecture specs, operational playbooks, design language, working prototype, engineering review, handoff package. Everything needed to move from worldview to a build-ready system.",
    bestWhen:
      "Best when prototype, architecture, and handoff all need to happen together.",
  },
  {
    title: "Foundation Layer",
    duration: "3–5 days",
    price: "$10K – $15K",
    detail:
      "Governance, strategic direction, architecture specs, operational playbooks. No prototype. For creators who have an engineer ready to build and need the architecture, not the prototype layer.",
    bestWhen:
      "Best when execution capacity already exists and the missing piece is structural clarity.",
  },
];

const leaveWith = [
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

const steps = [
  {
    step: "01",
    title: "Conversation",
    detail:
      "We talk about what you're building, who it serves, and what infrastructure you need. 30-60 minutes. Not a pitch — a diagnostic.",
  },
  {
    step: "02",
    title: "Qualification",
    detail:
      "Honest fit check. If the engagement won't serve you — wrong stage, extractive model, budget mismatch — we'll say so directly.",
  },
  {
    step: "03",
    title: "Scope",
    detail:
      "Clear scope document: what's included, timeline, deliverables, investment. No hidden fees, no scope creep.",
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

const qualifiers = [
  "You have an existing creative practice or brand with economic activity.",
  "You need operational infrastructure you control — not another platform dependency.",
  "You're willing to participate in the process, not outsource-and-forget.",
  "Your business model doesn't extract from the community it serves.",
];

export default function EngagePage() {
  return (
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="engage-title">
        <p className="eyebrow">Facework / Engage</p>
        <h1 id="engage-title">Work with Facework.</h1>
        <p className="section-intro">
          One conversation. If the fit is right, we scope it. If it&apos;s not,
          you leave with useful perspective anyway.
        </p>
      </section>

      <div className="evidence-strip" aria-label="How engagement works">
        <p>
          <span>Entry point</span>
          The first conversation is a diagnostic, not a funnel. Fit is
          determined before scope is sold.
        </p>
        <p>
          <span>Qualification boundary</span>
          If the work would reinforce extraction, hide dependency risk, or
          arrive too early for the stage, Facework says no.
        </p>
        <p>
          <span>Transfer model</span>
          The output is meant to outlive the engagement: docs, code, and system
          logic move into your control at handoff.
        </p>
      </div>

      {/* Pricing philosophy */}
      <div className="claim">
        <p className="claim-meta">
          Pricing
          <br />
          By coherence, not hours
        </p>
        <div className="claim-body">
          <h2 className="display-title">
            Facework doesn&apos;t price by deliverable or by hour.
          </h2>
          <p className="lead">
            It prices by depth, complexity, and the coherence shift required.
            Some creators need a diagnostic and a realignment. Others need a full
            rebuild of their governance, architecture, and systems.
          </p>
          <p className="lead" style={{ color: "var(--fw-muted)" }}>
            You&apos;re not paying for time. You&apos;re paying for the
            architecture that changes how you operate.
          </p>
        </div>
      </div>

      {/* What you leave with */}
      <section className="section-records" aria-label="What you leave with">
        <header className="section-head">
          <p>What you leave with</p>
          <p>Direction · transferable system</p>
        </header>
        {leaveWith.map((item, i) => (
          <article className="section-record" key={item.title}>
            <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Engagement types */}
      <section className="section-records" aria-label="Engagement types">
        <header className="section-head">
          <p>Engagement types</p>
          <p>Scope reflects the coherence it must create</p>
        </header>
        {engagementTypes.map((type) => (
          <article className="section-record" key={type.title}>
            <p className="artifact-id">
              {type.duration}
              <br />
              {type.price}
            </p>
            <div>
              <h2>{type.title}</h2>
              <p>{type.detail}</p>
              <p style={{ marginTop: "var(--space-md)" }}>{type.bestWhen}</p>
            </div>
          </article>
        ))}
      </section>

      {/* How it works */}
      <section className="section-records" aria-label="How it works">
        <header className="section-head">
          <p>How it works</p>
          <p>Conversation → handoff</p>
        </header>
        {steps.map((item) => (
          <article className="section-record" key={item.step}>
            <p className="artifact-id">{item.step}</p>
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </section>

      {/* This is for you if */}
      <section className="policy-records" aria-label="This is for you if">
        <header className="section-head">
          <p>This is for you if</p>
          <p>Qualification</p>
        </header>
        {qualifiers.map((item, i) => (
          <article className="policy-record" key={i}>
            <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
            <h2>{item}</h2>
          </article>
        ))}
      </section>

      {/* Contact */}
      <div className="claim">
        <p className="claim-meta">
          Contact
          <br />
          One conversation
        </p>
        <div className="claim-body">
          <h2 className="display-title">
            What problem are you trying to make coherent?
          </h2>
          <p className="lead">
            Email a brief description of what you&apos;re building and what you
            need. No form, no funnel. One conversation.
          </p>
          <a className="text-link" href="mailto:hello@face.works">
            hello@face.works ↗
          </a>
        </div>
      </div>
    </div>
  );
}
