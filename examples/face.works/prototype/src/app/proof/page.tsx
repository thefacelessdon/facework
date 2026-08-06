import { caseStudies } from "@/data/demo";

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

export default function ProofPage() {
  return (
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="proof-title">
        <p className="eyebrow">Facework / Proof</p>
        <h1 id="proof-title">
          Proof is structural consequence, not portfolio theater.
        </h1>
        <p className="section-intro">
          Every system built through the Facework practice is audited against
          the conformance model. These are the results.
        </p>
      </section>

      {caseStudies.length === 0 ? (
        <p className="policy-note">No completed audits yet.</p>
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

          return (
            <div key={study.slug}>
              {/* Case header + summary */}
              <section
                className="section-records"
                aria-label={`${study.title} audit`}
              >
                <header className="section-head">
                  <p>
                    {study.title} · {study.domain}
                  </p>
                  <p>{auditLabels[study.status]}</p>
                </header>
                <article className="section-record">
                  <p className="artifact-id">
                    {levelLabels[study.conformanceLevel]}
                    <br />
                    {study.date}
                  </p>
                  <div>
                    <h2>{study.title}</h2>
                    <p>{study.summary}</p>
                  </div>
                </article>
              </section>

              <p className="policy-note">
                This is a retroactive self-audit authorized by Decision 003 — a
                conformance audit of an already-built system, not a paid
                practice engagement. Paid practice runs toward the MVP gate
                remain at 0 of 3 (see Status).
              </p>

              {/* Verdict */}
              <div className="evidence-strip" aria-label="Audit verdict">
                <p>
                  <span>Conformance</span>
                  {levelLabels[study.conformanceLevel]}
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

              {/* Structural change */}
              <section
                className="section-records"
                aria-label="What changed structurally"
              >
                <header className="section-head">
                  <p>What changed structurally</p>
                  <p>Governable · portable · buildable</p>
                </header>
                {study.structuralChanges.map((change, i) => (
                  <article className="section-record" key={change.title}>
                    <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
                    <div>
                      <h2>{change.title}</h2>
                      <p>{change.detail}</p>
                    </div>
                  </article>
                ))}
              </section>

              {/* Practical impact */}
              <section className="section-records" aria-label="Why it mattered">
                <header className="section-head">
                  <p>Why it mattered</p>
                  <p>Operate · hand off · scale</p>
                </header>
                {study.practicalImpact.map((impact, i) => (
                  <article className="section-record" key={impact.label}>
                    <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
                    <div>
                      <h2>{impact.label}</h2>
                      <p>{impact.detail}</p>
                    </div>
                  </article>
                ))}
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
                {study.handoffReadiness.map((item, i) => (
                  <article className="section-record" key={item.label}>
                    <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
                    <div>
                      <h2>{item.label}</h2>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
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
                36,000+ lines of specification across architecture, decisions,
                playbooks, governance, platform docs, and briefs.
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
