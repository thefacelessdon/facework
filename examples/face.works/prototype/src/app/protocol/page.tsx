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
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="protocol-title">
        <p className="eyebrow">Facework / The System</p>
        <h1 id="protocol-title">Everything here is open.</h1>
        <p className="section-intro">
          Read it, reference it, build with it. This is the stack beneath
          Facework: the worldview, the discipline, the open practice, and the
          conformance logic that make coherent systems possible.
        </p>
      </section>

      {sections.map((section, layer) => (
        <section
          className="section-records"
          key={section.key}
          aria-label={`${section.label} documents`}
        >
          <header className="section-head">
            <p>
              {String(layer + 1).padStart(2, "0")} / {section.label}
            </p>
            <p>{section.description}</p>
          </header>
          {grouped[section.key].map((doc) => (
            <article className="section-record" key={doc.slug}>
              <p className="artifact-id">
                {String(doc.order).padStart(2, "0")}
                <br />
                {section.label}
              </p>
              <div>
                <h2>{doc.title}</h2>
                <p>{doc.subtitle}</p>
              </div>
              <Link href={`/protocol/${doc.slug}`}>Read ↗</Link>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
