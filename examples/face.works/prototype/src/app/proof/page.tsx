import { caseStudies } from "@/data/demo";
import type {
  StructuralChange,
  PracticalImpact,
  HandoffReadiness,
} from "@/data/schema";

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

function RecordRows({ items }: { items: Row[] }) {
  return (
    <>
      {items.map((item, i) => {
        const heading =
          typeof item === "string"
            ? null
            : "title" in item
              ? item.title
              : item.label;
        const body = typeof item === "string" ? item : item.detail;
        return (
          <article className="section-record" key={i}>
            <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
            <div>
              {heading ? <h2>{heading}</h2> : null}
              <p>{body}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default function ProofPage() {
  return (
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="proof-title">
        <p className="eyebrow">Facework / Proof</p>
        <h1 id="proof-title">
          Proof is structural consequence, not portfolio theater.
        </h1>
        <p className="section-intro">
          Systems built with the Facework practice are held to the conformance
          model. These are the results — each with its provenance stated
          plainly, so a self-report is never mistaken for a client-ratified
          audit.
        </p>
      </section>

      {caseStudies.length === 0 ? (
        <p className="policy-note">No cases yet.</p>
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
            <div key={study.slug}>
              {/* Case header + summary */}
              <section
                className="section-records"
                aria-label={`${study.title} case`}
              >
                <header className="section-head">
                  <p>
                    {study.title} · {study.domain}
                  </p>
                  <p>{auditLabels[study.status]}</p>
                </header>
                <article className="section-record">
                  <p className="artifact-id">
                    {study.conformanceLevel
                      ? levelLabels[study.conformanceLevel]
                      : "No conformance Level assigned"}
                    {study.date ? (
                      <>
                        <br />
                        {study.date}
                      </>
                    ) : null}
                  </p>
                  <div>
                    <h2>{study.title}</h2>
                    <p>{study.summary}</p>
                  </div>
                </article>
              </section>

              {/* Provenance + honest disclosure (all non-audit cases) */}
              {study.provenance ? (
                <div className="evidence-strip" role="group" aria-label="Provenance">
                  <p>
                    <span>Provenance</span>
                    {provenanceLabels[study.provenance]}
                  </p>
                  <p>
                    <span>Conformance</span>
                    {study.conformanceLevel
                      ? `${levelLabels[study.conformanceLevel]} (self-reported)`
                      : "Self-reported, no Level assigned"}
                  </p>
                </div>
              ) : null}

              {study.conformanceNote ? (
                <p className="policy-note">{study.conformanceNote}</p>
              ) : null}

              {/* GAMUT self-audit disclosure + audit verdict */}
              {isAudit ? (
                <>
                  <p className="policy-note">
                    This is a retroactive self-audit authorized by Decision
                    003 — a conformance audit of an already-built system, not a
                    paid practice engagement. Paid practice runs toward the MVP
                    gate remain at 0 of 3 (see Status).
                  </p>

                  <div className="evidence-strip" role="group" aria-label="Audit verdict">
                    <p>
                      <span>Conformance</span>
                      {study.conformanceLevel
                        ? levelLabels[study.conformanceLevel]
                        : "No Level assigned"}
                    </p>
                    <p>
                      <span>Extraction check</span>
                      <span
                        className={
                          study.extractionCheckPassed
                            ? "text-coherence"
                            : "text-entropy"
                        }
                      >
                        {study.extractionCheckPassed ? "Passed" : "Failed"}
                      </span>
                    </p>
                    <p>
                      <span>Reference visibility</span>
                      {study.publicReference
                        ? "Public reference available"
                        : "Private reference only"}
                    </p>
                  </div>
                </>
              ) : null}

              {/* Structural change */}
              <section
                className="section-records"
                aria-label="What changed structurally"
              >
                <header className="section-head">
                  <p>What changed structurally</p>
                  <p>Governable · portable · buildable</p>
                </header>
                <RecordRows items={study.structuralChanges} />
              </section>

              {/* Practical impact */}
              <section className="section-records" aria-label="Why it mattered">
                <header className="section-head">
                  <p>Why it mattered</p>
                  <p>Operate · hand off · scale</p>
                </header>
                <RecordRows items={study.practicalImpact} />
              </section>

              {/* Handoff readiness */}
              <section
                className="section-records"
                aria-label="Handoff readiness"
              >
                <header className="section-head">
                  <p>Handoff readiness</p>
                  <p>Survives its authors</p>
                </header>
                <RecordRows items={study.handoffReadiness} />
              </section>

              {/* Artifacts produced */}
              <section
                className="section-records"
                aria-label="Artifacts produced"
              >
                <header className="section-head">
                  <p>Artifacts produced</p>
                  <p>Curated corpus</p>
                </header>
                {metrics.map((metric) => (
                  <article className="section-record" key={metric.label}>
                    <p className="artifact-id">{metric.label}</p>
                    <div>
                      <h2>{metric.count}</h2>
                      <p>{metric.caption}</p>
                    </div>
                  </article>
                ))}
              </section>

              <p className="policy-note">
                {study.linesCaption ??
                  "36,000+ lines of specification across architecture, decisions, playbooks, governance, platform docs, and briefs."}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
