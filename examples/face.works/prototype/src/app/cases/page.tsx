import type { Metadata } from "next";
import { RecordLabel, SectionHead, Reading, InkCTA } from "@/components/rr";
import { publicSections, verdictForStatus } from "@/data/knowledge";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Systems built with the Facework discipline, in production. No conformance Level is claimed — the audited work lives on the proof record.",
};

const section = publicSections.cases;

export default function CasesPage() {
  return (
    <div className="rr-field rr-page section-page">
      <div className="rr-column rr-column--wide">
        <header className="rr-masthead">
          <RecordLabel tick>The Practice · Cases</RecordLabel>
          <h1 className="rr-display">{section.proposition}</h1>
          <p className="rr-lede">{section.introduction}</p>
        </header>

        {section.records.map((record) => {
          const verdict = verdictForStatus(record.status);
          return (
            <section className="rr-section" aria-label={record.title} key={record.id}>
              <SectionHead label={`${record.id} · Facework-informed`} title={record.title} />
              <Reading label={`Status · ${record.status}`} title={record.title}>
                <p>{record.description}</p>
              </Reading>
              <dl className="rr-strip" aria-label={`${record.title} record`}>
                <div className="rr-strip__pair">
                  <dt className="rr-strip__term">Provenance</dt>
                  <dd className="rr-strip__desc">Built with the Facework discipline</dd>
                </div>
                <div className="rr-strip__pair">
                  <dt className="rr-strip__term">Conformance</dt>
                  <dd className="rr-strip__desc">No Level claimed</dd>
                </div>
                <div className="rr-strip__pair">
                  <dt className="rr-strip__term">Status</dt>
                  <dd
                    className={`rr-strip__desc ${verdict.state === "settled" ? "rr-strip__desc--settled" : ""}`}
                  >
                    {record.status}
                  </dd>
                </div>
              </dl>
              <div>
                <InkCTA href={record.href} target="_blank" rel="noreferrer">
                  {record.action}
                </InkCTA>
              </div>
            </section>
          );
        })}

        <section className="rr-section" aria-label="The audited record">
          <SectionHead label="Elsewhere" title="The audited and Facework-run work" />
          <p className="rr-lede">
            Cases built through a full or partial Facework protocol run &mdash;
            with conformance Levels, extraction checks, and honest disclosures
            &mdash; are held on the proof record.
          </p>
          <div>
            <a className="rr-link" href="/proof">
              Read the proof record
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
