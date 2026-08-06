import Link from "next/link";
import { protocolDocs } from "@/data/demo";

const sections = [
  {
    key: "theory",
    label: "Theory",
    description: "Why systems cohere or decay.",
  },
  {
    key: "discipline",
    label: "Discipline",
    description: "How coherent systems are intentionally designed.",
  },
  {
    key: "practice",
    label: "Practice",
    description: "How Facework applies the discipline in live work.",
  },
  {
    key: "governance",
    label: "Governance + Conformance",
    description: "How the work is bounded, verified, and eventually standardized.",
  },
] as const;

export default function ProtocolPage() {
  const grouped = Object.fromEntries(
    sections.map((section) => [
      section.key,
      protocolDocs
        .filter((doc) => doc.category === section.key)
        .sort((a, b) => a.order - b.order),
    ]),
  );

  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">The System</h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          Everything here is open. Read it, reference it, build with it.
          This is the stack beneath Facework: the worldview, the discipline,
          the open practice, and the conformance logic that make coherent
          systems possible.
        </p>
      </div>

      <section className="border border-border  overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={section.key}
            className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 p-5 md:p-6 ${
              index < sections.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted">
              {section.label}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              {section.description}
            </p>
          </div>
        ))}
      </section>

      {sections.map((section) => (
        <section key={section.key} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
              {section.label}
            </h2>
            <p className="text-sm text-muted max-w-2xl leading-relaxed">
              {section.description}
            </p>
          </div>
          <div className="space-y-2">
            {grouped[section.key].map((doc) => (
              <Link
                key={doc.slug}
                href={`/protocol/${doc.slug}`}
                className="block border border-border  p-5 hover:border-muted group"
              >
                <p className="text-[11px] tracking-[0.18em] uppercase text-muted">
                  {section.label}
                </p>
                <h3 className="text-sm font-medium tracking-wide group-hover:text-clarity mt-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted mt-1">{doc.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
