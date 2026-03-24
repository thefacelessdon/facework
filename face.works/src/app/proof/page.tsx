import { caseStudies } from "@/data/demo";
import { StatusBadge } from "@/components/StatusBadge";

const levelLabels: Record<number, string> = {
  1: "Level 1 — Phase-Complete",
  2: "Level 2 — Gate-Passed",
  3: "Level 3 — Sovereignty-Verified",
  4: "Level 4 — Fully Conformant",
};

export default function ProofPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-20 py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-normal tracking-tight">Proof</h1>
        <p className="text-muted max-w-xl leading-relaxed">
          Every system built through the protocol is audited against the
          conformance model. These are the results — no marketing, just
          evidence.
        </p>
      </div>

      {caseStudies.length === 0 ? (
        <div className="border border-border rounded p-16 text-center">
          <p className="text-muted">No completed audits yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="border border-border rounded space-y-0"
            >
              {/* Header */}
              <div className="p-6 flex items-start justify-between border-b border-border">
                <div>
                  <h2 className="text-lg font-medium tracking-wide">{study.title}</h2>
                  <p className="text-sm text-muted mt-1">{study.domain}</p>
                </div>
                <StatusBadge
                  status={
                    study.status === "case-study"
                      ? "complete"
                      : "in-progress"
                  }
                />
              </div>

              {/* Summary */}
              <div className="p-6 border-b border-border">
                <p className="text-sm text-muted leading-relaxed">{study.summary}</p>
              </div>

              {/* Metrics — grid */}
              <div className="grid grid-cols-3 divide-x divide-border">
                <div className="p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Conformance</p>
                  <p className="text-sm">{levelLabels[study.conformanceLevel]}</p>
                </div>
                <div className="p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Extraction Check</p>
                  <p className="text-sm">
                    {study.extractionCheckPassed ? (
                      <span className="text-coherence">Passed</span>
                    ) : (
                      <span className="text-entropy">Failed</span>
                    )}
                  </p>
                </div>
                <div className="p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Date</p>
                  <p className="text-sm">{study.date}</p>
                </div>
              </div>

              {/* Artifacts */}
              <div className="border-t border-border p-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted mb-4">
                  Artifacts Produced
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
                  {[
                    { label: "Governance", count: study.artifacts.governanceDocs },
                    { label: "Decisions", count: study.artifacts.decisionRecords },
                    { label: "Specs", count: study.artifacts.architectureSpecs },
                    { label: "Playbooks", count: study.artifacts.playbooks },
                    { label: "Pages", count: study.artifacts.prototypePages },
                    { label: "Tests", count: study.artifacts.tests },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <p className="text-xl font-normal">{item.count}</p>
                      <p className="text-xs text-muted">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
