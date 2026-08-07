import type { Metadata } from "next";
import { RecordLabel, SectionHead, Reading } from "@/components/rr";
import { caseStudies } from "@/data/demo";
import type {
  StructuralChange,
  PracticalImpact,
  HandoffReadiness,
} from "@/data/schema";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "Systems built with the Facework practice, each with its provenance stated plainly — so a self-report is never mistaken for a client-ratified audit.",
};

const levelLabels: Record<number, string> = {
  1: "Level 1 — Phase-Complete",
  2: "Level 2 — Gate-Passed",
  3: "Level 3 — Sovereignty-Verified",
  4: "Level 4 — Fully Conformant",
};

const auditLabels = {
  "audit-complete": "Conformance audit complete",
  "case-study": "Case study",
  "in-progress": "Audit in progress",
} as const;

const provenanceLabels = {
  "self-audit": "Retroactive self-audit",
  "facework-run": "Facework protocol run",
  "facework-informed": "Built with the Facework discipline",
} as const;

type Row = StructuralChange | PracticalImpact | HandoffReadiness | string;

function FindingRows({ items }: { items: Row[] }) {
  return (
    <ul className="rr-rows">
      {items.map((item, i) => {
        const heading =
          typeof item === "string"
            ? null
            : "title" in item
              ? item.title
              : item.label;
        const body = typeof item === "string" ? item : item.detail;
        return (
          <li className="rr-rows__item" key={i}>
            <span className="rr-rows__meta">
              <strong>{String(i + 1).padStart(2, "0")}</strong>
            </span>
            <div className="rr-rows__body">
              {heading ? <h3 className="rr-rows__title">{heading}</h3> : null}
              <p className="rr-rows__note">{body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProofPage() {
  return (
    <div className="rr-field rr-page section-page">
      <div className="rr-column rr-column--wide">
        <header className="rr-masthead">
          <RecordLabel tick>The Practice · Proof</RecordLabel>
          <h1 className="rr-display">
            Proof is structural consequence, not portfolio theater.
          </h1>
          <p className="rr-lede">
            Systems built with the Facework practice are held to the conformance
            model. These are the results &mdash; each with its provenance stated
            plainly, so a self-report is never mistaken for a client-ratified
            audit.
          </p>
        </header>

        {caseStudies.length === 0 ? (
          <p className="rr-note">No cases yet.</p>
        ) : (
          caseStudies.map((study) => {
            const metrics = [
              { label: "Governance", count: study.artifacts.governanceDocs, caption: "governance documents" },
              { label: "Decisions", count: study.artifacts.decisionRecords, caption: "decision records" },
              { label: "Specs", count: study.artifacts.architectureSpecs, caption: "architecture specifications" },
              { label: "Playbooks", count: study.artifacts.playbooks, caption: "operational playbooks" },
              { label: "Pages", count: study.artifacts.prototypePages, caption: `App Router pages · ${study.artifacts.routes} routes` },
              { label: "Components", count: study.artifacts.components, caption: "React components" },
              { label: "Tests", count: study.artifacts.testCases, caption: `test cases across ${study.artifacts.testFiles} files` },
            ];

            const isAudit = study.status === "audit-complete";

            return (
              <article className="rr-case" key={study.slug}>
                <section className="rr-section" aria-label={`${study.title} case`}>
                  <SectionHead
                    label={`${study.title} · ${study.domain}`}
                    title={auditLabels[study.status]}
                  />
                  <Reading
                    tick
                    label={
                      study.conformanceLevel
                        ? `${levelLabels[study.conformanceLevel]}${study.date ? ` · ${study.date}` : ""}`
                        : `No conformance Level assigned${study.date ? ` · ${study.date}` : ""}`
                    }
                    title={study.title}
                  >
                    <p>{study.summary}</p>
                  </Reading>
                </section>

                {/* Provenance + honest disclosure */}
                {study.provenance ? (
                  <dl className="rr-strip" aria-label="Provenance">
                    <div className="rr-strip__pair">
                      <dt className="rr-strip__term">Provenance</dt>
                      <dd className="rr-strip__desc">
                        {provenanceLabels[study.provenance]}
                      </dd>
                    </div>
                    <div className="rr-strip__pair">
                      <dt className="rr-strip__term">Conformance</dt>
                      <dd className="rr-strip__desc">
                        {study.conformanceLevel
                          ? `${levelLabels[study.conformanceLevel]} (self-reported)`
                          : "Self-reported, no Level assigned"}
                      </dd>
                    </div>
                  </dl>
                ) : null}

                {study.conformanceNote ? (
                  <p className="rr-note">{study.conformanceNote}</p>
                ) : null}

                {/* GAMUT self-audit disclosure + audit verdict */}
                {isAudit ? (
                  <>
                    <p className="rr-note">
                      This is a retroactive self-audit authorized by Decision
                      003 &mdash; a conformance audit of an already-built system,
                      not a paid practice engagement. Paid practice runs toward
                      the MVP gate remain at 0 of 3 (see Status).
                    </p>

                    <dl className="rr-strip" aria-label="Audit verdict">
                      <div className="rr-strip__pair">
                        <dt className="rr-strip__term">Conformance</dt>
                        <dd className="rr-strip__desc">
                          {study.conformanceLevel
                            ? levelLabels[study.conformanceLevel]
                            : "No Level assigned"}
                        </dd>
                      </div>
                      <div className="rr-strip__pair">
                        <dt className="rr-strip__term">Extraction check</dt>
                        <dd
                          className={`rr-strip__desc ${study.extractionCheckPassed ? "rr-strip__desc--settled" : "rr-strip__desc--exposure"}`}
                        >
                          {study.extractionCheckPassed ? "Passed" : "Failed"}
                        </dd>
                      </div>
                      <div className="rr-strip__pair">
                        <dt className="rr-strip__term">Reference visibility</dt>
                        <dd className="rr-strip__desc">
                          {study.publicReference
                            ? "Public reference available"
                            : "Private reference only"}
                        </dd>
                      </div>
                    </dl>
                  </>
                ) : null}

                <section className="rr-section">
                  <SectionHead
                    label="What changed structurally"
                    title="Governable · portable · buildable"
                  />
                  <FindingRows items={study.structuralChanges} />
                </section>

                <section className="rr-section">
                  <SectionHead label="Why it mattered" title="Operate · hand off · scale" />
                  <FindingRows items={study.practicalImpact} />
                </section>

                <section className="rr-section">
                  <SectionHead label="Handoff readiness" title="Survives its authors" />
                  <FindingRows items={study.handoffReadiness} />
                </section>

                <section className="rr-section">
                  <SectionHead label="Artifacts produced" title="Curated corpus" />
                  <ul className="rr-metrics">
                    {metrics.map((metric) => (
                      <li className="rr-metric" key={metric.label}>
                        <span className="rr-metric__label">{metric.label}</span>
                        <span className="rr-metric__value">{metric.count}</span>
                        <span className="rr-metric__caption">{metric.caption}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="rr-note rr-note--record">
                    {study.linesCaption ??
                      "36,000+ lines of specification across architecture, decisions, playbooks, governance, platform docs, and briefs."}
                  </p>
                </section>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
