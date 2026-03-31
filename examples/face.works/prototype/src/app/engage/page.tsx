export default function EngagePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">Work with Facework</h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          One conversation. If the fit is right, we scope it. If it&apos;s not,
          you leave with useful perspective anyway.
        </p>
      </div>

      {/* Pricing Philosophy */}
      <section className="space-y-5">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          How pricing works
        </h2>
        <div className="space-y-4 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed">
            Facework doesn&apos;t price by deliverable or by hour.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            It prices by depth, complexity, and the coherence shift required.
            Some creators need a diagnostic and a realignment. Others need a full
            rebuild of their governance, architecture, and systems.
          </p>
          <p className="text-sm md:text-base text-muted leading-relaxed">
            You&apos;re not paying for time. You&apos;re paying for the architecture
            that changes how you operate.
          </p>
        </div>
      </section>

      <hr />

      {/* Engagement Variants */}
      <section className="space-y-5">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          Engagement types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded p-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium tracking-wide">Full Protocol</h3>
              <p className="text-xs text-muted mt-1 tracking-wide">5–8 days</p>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Governance, strategic direction, architecture specs, operational
              playbooks, design language, working prototype, engineering review,
              handoff package. Everything needed to hand to an engineer and build.
            </p>
            <p className="text-sm text-muted">$15K – $25K</p>
          </div>

          <div className="border border-border rounded p-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium tracking-wide">Foundation Only</h3>
              <p className="text-xs text-muted mt-1 tracking-wide">3–5 days</p>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Governance, strategic direction, architecture specs, operational
              playbooks. No prototype. For creators who have an engineer ready
              to build and need the architecture, not the demo.
            </p>
            <p className="text-sm text-muted">$10K – $15K</p>
          </div>
        </div>

        <p className="text-sm text-muted">
          Each engagement reflects the amount of coherence it has to create —
          nothing more, nothing less.
        </p>
      </section>

      <hr />

      {/* How It Works */}
      <section className="space-y-5">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          How it works
        </h2>
        <div className="space-y-5 max-w-2xl">
          {[
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
                "The protocol runs. You participate in review sessions. The agent generates, you steer, we build your system.",
            },
            {
              step: "05",
              title: "Handoff",
              detail:
                "Everything transferred to your accounts. Repository, docs, code — all yours. A new builder can start Day 1 without a meeting.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <span className="text-xs text-muted w-5 shrink-0 mt-0.5">
                {item.step}
              </span>
              <div className="border-l border-border pl-5">
                <p className="text-sm font-medium tracking-wide">{item.title}</p>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Qualification */}
      <section className="space-y-5">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          This is for you if
        </h2>
        <div className="space-y-3">
          {[
            "You have an existing creative practice or brand with economic activity",
            "You need operational infrastructure you control — not another platform dependency",
            "You're willing to participate in the process, not outsource-and-forget",
            "Your business model doesn't extract from the community it serves",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <span className="text-coherence mt-0.5 text-xs" aria-hidden="true">●</span>
              <p className="text-sm text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Contact */}
      <section className="border border-border rounded p-8 md:p-12 text-center space-y-5">
        <p className="text-lg md:text-xl font-normal tracking-tight">
          What problem are you trying to make coherent?
        </p>
        <p className="text-sm text-muted max-w-md mx-auto">
          Email with a brief description of what you&apos;re building and what you
          need. No form, no funnel. One conversation.
        </p>
        <a
          href="mailto:hello@face.works"
          className="inline-block bg-soft text-ink rounded px-6 py-3 text-sm tracking-wide hover:opacity-90"
        >
          hello@face.works
        </a>
      </section>
    </div>
  );
}
