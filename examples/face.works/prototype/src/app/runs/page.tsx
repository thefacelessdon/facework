import type { Metadata } from "next";
import { WorkSurface } from "@/components/WorkSurface";
import { SectionHead, Trace, InkCTA, RecordLabel, ReadingIndex } from "@/components/rr";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Runs & Evidence" };

// The Facework Field (FVA-610) is the live Field/Trace instrument — surfaced as
// a feature rather than a static index row, then omitted from the index below.
const FIELD_ID = "FVA-610";

export default function Page() {
  const section = publicSections.runs;
  const field = section.records.find((r) => r.id === FIELD_ID);
  const rest = {
    ...section,
    records: section.records.filter((r) => r.id !== FIELD_ID),
  };

  const feature = field ? (
    <section className="rr-feature" aria-label="The Facework Field">
      <SectionHead label={`Live instrument · ${field.id}`} title={field.title} />
      <Trace label="The Facework Field: three declared inputs settling into a bounded Lorenz trace" />
      <RecordLabel>draws in once, then settles</RecordLabel>
      <p className="rr-lede">{field.description}</p>
      <InkCTA href={field.href}>Enter the Field</InkCTA>
    </section>
  ) : null;

  // The audited record is The Practice's — link to it rather than duplicate it.
  const after = (
    <section className="rr-section" aria-label="The audited record">
      <SectionHead label="The Practice" title="The audited record" />
      <ReadingIndex
        showStatus={false}
        label="Audited runs on The Practice"
        items={[
          {
            title: "The proof record",
            note: "Audited and Facework-run systems, with conformance levels, provenance, and disclosures.",
            href: "/proof",
          },
          {
            title: "Cases",
            note: "Systems built with the Facework discipline, in production — no conformance Level claimed.",
            href: "/cases",
          },
        ]}
      />
    </section>
  );

  return <WorkSurface section={rest} exemplar feature={feature} after={after} />;
}
