import type { Metadata } from "next";
import { RecordLabel, SectionHead, ReadingIndex } from "@/components/rr";
import type { ReadingIndexItem } from "@/components/rr";
import { protocolDocs } from "@/data/demo";

export const metadata: Metadata = {
  title: "The System",
  description:
    "The open stack beneath Facework: the worldview, the discipline, the open practice, and the conformance logic that make coherent systems possible.",
};

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
    <div className="rr rr-page section-page">
      <div className="rr-column rr-column--wide">
        <header className="rr-masthead">
          <RecordLabel tick>Facework · The System</RecordLabel>
          <h1 className="rr-display">Everything here is open.</h1>
          <p className="rr-lede">
            Read it, reference it, build with it. This is the stack beneath
            Facework: the worldview, the discipline, the open practice, and the
            conformance logic that make coherent systems possible.
          </p>
        </header>

        {sections.map((section, layer) => {
          const items: ReadingIndexItem[] = grouped[section.key].map((doc) => ({
            id: String(doc.order).padStart(2, "0"),
            title: doc.title,
            note: doc.subtitle,
            href: `/protocol/${doc.slug}`,
          }));
          return (
            <section
              className="rr-section"
              key={section.key}
              aria-label={`${section.label} documents`}
            >
              <SectionHead
                label={section.label}
                index={String(layer + 1).padStart(2, "0")}
                title={section.description}
              />
              <ReadingIndex
                items={items}
                label={`${section.label} documents`}
                showStatus={false}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
