import type { ReactNode } from "react";
import {
  SectionHead,
  Reading,
  CoherenceVerdict,
  ReadingIndex,
} from "@/components/rr";
import { verdictForStatus, type PublicSection } from "@/data/knowledge";

export type WorkSurfaceProps = {
  section: PublicSection;
  /** Mode eyebrow (defaults to "The Work"). */
  eyebrow?: string;
  /** Render the first record as a full lead Reading + verdict (the exemplar). */
  exemplar?: boolean;
  /** Optional instrument block rendered above the index (e.g. the Field). */
  feature?: ReactNode;
  /** Optional block rendered below the index (e.g. wayfinding to sibling records). */
  after?: ReactNode;
};

/**
 * WorkSurface — a Record-register type surface (DESIGN.md §10): SectionHead →
 * lede → optional instrument → issued readings as record rows. All content is
 * read from the section's real records; the verdict derives from each record's
 * own status.
 */
export function WorkSurface({
  section,
  eyebrow = "The Work",
  exemplar = false,
  feature,
  after,
}: WorkSurfaceProps) {
  const lead = exemplar ? section.records[0] : undefined;
  const rest = exemplar ? section.records.slice(1) : section.records;
  const leadVerdict = lead ? verdictForStatus(lead.status) : null;

  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <SectionHead
            as="h1"
            label={`${eyebrow} · ${section.label}`}
            title={section.proposition}
          />
          <p className="rr-lede">{section.introduction}</p>
        </header>

        {feature}

        {lead && leadVerdict ? (
          <section className="rr-lead-reading" aria-label="Current reading">
            <Reading tick label={`${section.label} · ${lead.id}`} title={lead.title}>
              <p>{lead.description}</p>
            </Reading>
            <CoherenceVerdict
              score={leadVerdict.score}
              state={leadVerdict.state}
              label={leadVerdict.label}
            />
          </section>
        ) : null}

        <ReadingIndex
          label={`${section.label} record`}
          items={rest.map((r) => ({
            id: r.id,
            title: r.title,
            note: r.description,
            href: r.href,
            status: r.status,
            state: verdictForStatus(r.status).state,
          }))}
        />

        {after}
      </div>
    </div>
  );
}
