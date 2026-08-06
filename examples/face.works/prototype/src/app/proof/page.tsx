import { caseStudies } from "@/data/demo";
import { StatusBadge } from "@/components/StatusBadge";

const levelLabels: Record<number, string> = {
  1: "Level 1 — Phase-Complete",
  2: "Level 2 — Gate-Passed",
  3: "Level 3 — Sovereignty-Verified",
  4: "Level 4 — Fully Conformant",
};

const auditLabels = {
  "audit-complete": "Audit complete",
  "case-study": "Case study",
  "in-progress": "Audit in progress",
} as const;

export default function ProofPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">Proof</h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          Every system built through the Facework practice is audited against
          the conformance model. These are the results: structural consequence,
          not portfolio theater.
        </p>
      </div>

      {caseStudies.length === 0 ? (
        <div className="border border-border  p-12 text-center">
          <p className="text-muted text-sm">No completed audits yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="border border-border  overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 md:p-6 flex items-start justify-between border-b border-border">
                <div>
                  <h2 className="text-base md:text-lg font-medium tracking-wide">{study.title}</h2>
                  <p className="text-sm text-muted mt-1">{study.domain}</p>
                </div>
                <StatusBadge
                  status={
                    study.status === "audit-complete" ||
                    study.status === "case-study"
                      ? "complete"
                      : "in-progress"
                  }
                />
              </div>

              {/* Summary */}
              <div className="p-5 md:p-6 border-b border-border">
                <p className="text-sm text-muted leading-relaxed">{study.summary}</p>
              </div>

              {/* Trust Signals */}
              <div className="p-5 md:p-6 border-b border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted">
                      Audit State
                    </p>
                    <p className="text-sm">{auditLabels[study.status]}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted">
                      Reference Visibility
                    </p>
                    <p className="text-sm">
                      {study.publicReference ? "Public reference available" : "Private reference only"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted">
                      Audit Context
                    </p>
                    <p className="text-sm text-muted">{study.creator}</p>
                  </div>
                </div>
              </div>

              {/* Structural Change */}
              <div className="p-5 md:p-6 border-b border-border space-y-4">
                <div className="space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    What changed structurally
                  </p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    The point is not that artifacts were produced. The point is
                    that the system became more governable, portable, and
                    buildable.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.structuralChanges.map((change) => (
                    <div
                      key={change.title}
                      className="border border-border  p-4 space-y-2"
                    >
                      <p className="text-sm font-medium tracking-wide">{change.title}</p>
                      <p className="text-sm text-muted leading-relaxed">
                        {change.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Impact */}
              <div className="p-5 md:p-6 border-b border-border space-y-4">
                <div className="space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    Why it mattered
                  </p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    Structural change only counts if it produces a better way to
                    operate, hand off, and scale.
                  </p>
                </div>
                <div className="space-y-3">
                  {study.practicalImpact.map((impact) => (
                    <div
                      key={impact.label}
                      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-4"
                    >
                      <p className="text-sm font-medium tracking-wide">
                        {impact.label}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">
                        {impact.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handoff Readiness */}
              <div className="p-5 md:p-6 border-b border-border space-y-4">
                <div className="space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    Handoff readiness
                  </p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    Proof gets stronger when a system can survive the people who
                    originally shaped it.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.handoffReadiness.map((item) => (
                    <div
                      key={item.label}
                      className="border border-border  p-4 space-y-2"
                    >
                      <p className="text-sm font-medium tracking-wide">{item.label}</p>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="p-5 md:p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Conformance</p>
                  <p className="text-sm">{levelLabels[study.conformanceLevel]}</p>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Extraction Check</p>
                  <p className="text-sm">
                    {study.extractionCheckPassed ? (
                      <span className="text-coherence">Passed</span>
                    ) : (
                      <span className="text-entropy">Failed</span>
                    )}
                  </p>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">Date</p>
                  <p className="text-sm">{study.date}</p>
                </div>
              </div>

              {/* Artifacts */}
              <div className="border-t border-border p-5 md:p-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted mb-4">
                  Artifacts Produced
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                  {[
                    { label: "Governance", count: study.artifacts.governanceDocs },
                    { label: "Decisions", count: study.artifacts.decisionRecords },
                    { label: "Specs", count: study.artifacts.architectureSpecs },
                    { label: "Playbooks", count: study.artifacts.playbooks },
                    { label: "Pages", count: study.artifacts.prototypePages },
                    { label: "Tests", count: study.artifacts.tests },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <p className="text-lg md:text-xl font-normal">{item.count}</p>
                      <p className="text-[10px] md:text-xs text-muted">{item.label}</p>
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
