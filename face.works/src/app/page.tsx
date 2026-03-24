import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-20">
      {/* Hero — single-column narrative */}
      <section className="pt-24 pb-20 space-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight max-w-3xl">
          An open protocol for turning cultural signal into coherent, ownable
          business systems.
        </h1>

        <p className="text-lg text-muted max-w-xl leading-relaxed">
          For creators and cultural brands who need infrastructure they
          control — not platforms that control them.
        </p>

        <div className="text-sm text-muted border border-border rounded px-6 py-4 max-w-md">
          <span className="text-muted">Coherence</span>{" "}
          <span className="text-foreground">=</span>{" "}
          <span className="text-foreground">(Flow × Resonance)</span>{" "}
          <span className="text-muted">/</span>{" "}
          <span className="text-foreground">(1 + Entropy)</span>
        </div>
      </section>

      <hr />

      {/* The Physics — single-column narrative */}
      <section className="py-16 space-y-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          The Physics
        </p>
        <div className="space-y-6 max-w-2xl">
          <p className="text-lg leading-relaxed">
            When the people who generate the energy do not control the
            infrastructure through which it flows, the energy is extracted.
          </p>
          <p className="text-muted leading-relaxed">
            This has been true for jazz, hip hop, fashion, and social media.
            The communities generate the culture. External systems capture
            the current.
          </p>
          <p className="leading-relaxed">
            Facework is the counter-architecture. Every phase of the build
            sequence asks:{" "}
            <span className="text-clarity">
              whose energy powers this system, and who controls the
              infrastructure it flows through?
            </span>
          </p>
        </div>
      </section>

      <hr />

      {/* What You Get — split 50/50 */}
      <section className="py-16 space-y-10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          What the protocol produces
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            {
              title: "Governance & Economics",
              body: "Business model, ownership structure, exit guarantee, extraction check. The governing truth documented before anything is designed.",
            },
            {
              title: "Strategic Direction",
              body: "Every dilemma surfaced and resolved. Decision records with reasoning. No unresolved forks consuming energy.",
            },
            {
              title: "Architecture & Playbooks",
              body: "Implementable specs for every system. Operational playbooks for every workflow. Human + agent readable.",
            },
            {
              title: "Working Prototype",
              body: "Demo mode that proves the UX. Typed schema, test suite, design language spec. Hand it to an engineer — they build, not design.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-background p-8 space-y-3"
            >
              <h3 className="text-sm font-medium tracking-wide">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Non-negotiables — single-column */}
      <section className="py-16 space-y-10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          Non-negotiables
        </p>
        <div className="space-y-6">
          {[
            {
              principle: "Protocol stays open",
              detail:
                "Theory, methodology, spec — always freely available. Anyone can build a conformant system without paying Facework.",
            },
            {
              principle: "Creator sovereignty is absolute",
              detail:
                "You own everything produced. All artifacts, all code, all data. Exit is clean and immediate.",
            },
            {
              principle: "Conduits, not containers",
              detail:
                "Facework never controls your infrastructure, distribution, data, or economic current.",
            },
            {
              principle: "No lock-in",
              detail:
                "Deliverables in open formats. No proprietary dependencies. Your system works without Facework.",
            },
          ].map((item) => (
            <div
              key={item.principle}
              className="flex gap-5 items-start"
            >
              <span className="text-coherence mt-1 text-xs" aria-hidden="true">●</span>
              <div>
                <p className="text-sm font-medium">{item.principle}</p>
                <p className="text-sm text-muted mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* CTA */}
      <section className="py-24 text-center space-y-8">
        <p className="text-2xl font-normal tracking-tight">
          Control the frequency. Own the current.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/protocol"
            className="border border-border rounded px-6 py-3 text-sm tracking-wide hover:border-muted"
          >
            Read the protocol
          </Link>
          <Link
            href="/engage"
            className="bg-soft text-ink rounded px-6 py-3 text-sm tracking-wide hover:opacity-90"
          >
            Work with Facework
          </Link>
        </div>
      </section>
    </div>
  );
}
