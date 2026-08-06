import type { Metadata } from "next";
import { WorkSurface } from "@/components/WorkSurface";
import { SectionHead, Trace, InkCTA, RecordLabel } from "@/components/rr";
import { publicSections } from "@/data/knowledge";

export const metadata: Metadata = { title: "Experiments" };

// The Facework Field (FVA-610) is the live Field/Trace instrument — surfaced as
// a feature rather than a static index row, then omitted from the index below.
const FIELD_ID = "FVA-610";

export default function Page() {
  const section = publicSections.experiments;
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

  return <WorkSurface section={rest} feature={feature} />;
}
