import { coherenceSnapshot } from "@/data/demo";
import { StatusBadge } from "@/components/StatusBadge";
import { ProgressBar } from "@/components/ProgressBar";

export default function StatusPage() {
  const { stages, noGoLines, metrics, nonNegotiables, date } =
    coherenceSnapshot;

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-20 py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-normal tracking-tight">Status</h1>
        <p className="text-muted max-w-xl leading-relaxed">
          Facework&apos;s own coherence tracker. If the protocol demands
          transparency and sovereignty from the systems it builds, it must
          practice the same.
        </p>
        <p className="text-xs text-muted tracking-wide">
          Last updated: {date}
        </p>
      </div>

      {/* Progress Metrics */}
      <section className="space-y-6">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          MVP Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            { label: "Protocol Runs", value: metrics.completedRuns, max: metrics.targetRuns, suffix: "" },
            { label: "Public References", value: metrics.publicReferences, max: metrics.targetReferences, suffix: "" },
            { label: "Revenue Floor", value: metrics.monthsAtFloor, max: metrics.targetMonthsAtFloor, suffix: " mo" },
          ].map((metric) => (
            <div key={metric.label} className="bg-background p-6 space-y-3">
              <p className="text-xs tracking-[0.15em] uppercase text-muted">{metric.label}</p>
              <p className="text-3xl font-normal">
                {metric.value}
                <span className="text-muted text-lg">
                  /{metric.max}{metric.suffix}
                </span>
              </p>
              <ProgressBar value={metric.value} max={metric.max} label={metric.label} />
            </div>
          ))}
        </div>
      </section>

      {/* Stage Boundaries */}
      <section className="space-y-6">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          Stage Boundaries
        </h2>
        <div className="space-y-px bg-border">
          {stages.map((stage) => (
            <div
              key={stage.stage}
              className={`bg-background p-6 space-y-4 ${
                stage.status === "active" ? "border-l-2 border-l-coherence" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium tracking-wide">{stage.label}</h3>
                <StatusBadge
                  status={
                    stage.status === "active"
                      ? "in-progress"
                      : stage.status === "complete"
                        ? "complete"
                        : "not-started"
                  }
                />
              </div>
              <p className="text-sm text-muted">{stage.description}</p>
              <div className="space-y-2 mt-2">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">
                  Exit Criteria
                </p>
                {stage.exitCriteria.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 text-xs ${
                        item.status === "complete"
                          ? "text-coherence"
                          : item.status === "in-progress"
                            ? "text-resonance"
                            : "text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      {item.status === "complete"
                        ? "●"
                        : item.status === "in-progress"
                          ? "◐"
                          : "○"}
                    </span>
                    <div>
                      <p className="text-muted">{item.description}</p>
                      {item.evidence && (
                        <p className="text-xs text-muted mt-0.5 opacity-60">
                          {item.evidence}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No-Go Lines */}
      <section className="space-y-6">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          No-Go Lines
        </h2>
        <div className="space-y-2">
          {noGoLines.map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-border rounded p-4"
            >
              <span
                className={`text-xs tracking-wide px-1.5 py-0.5 rounded border ${
                  line.type === "hard"
                    ? "text-entropy border-entropy/30"
                    : "text-resonance border-resonance/30"
                }`}
              >
                {line.type}
              </span>
              <div className="flex-1">
                <p className="text-sm text-muted">{line.description}</p>
                {line.detail && (
                  <p className="text-xs text-muted mt-1 opacity-60">{line.detail}</p>
                )}
              </div>
              <span
                className={`text-xs tracking-wide ${
                  line.status === "clear"
                    ? "text-coherence"
                    : line.status === "approaching"
                      ? "text-resonance"
                      : "text-entropy"
                }`}
              >
                {line.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Negotiables */}
      <section className="space-y-6">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          Non-Negotiables
        </h2>
        <div className="space-y-4">
          {nonNegotiables.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-coherence mt-0.5 text-xs" aria-hidden="true">●</span>
              <p className="text-sm text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
