import { coherenceSnapshot } from "@/data/demo";
import { StatusBadge } from "@/components/StatusBadge";
import { ProgressBar } from "@/components/ProgressBar";

export default function StatusPage() {
  const { stages, noGoLines, metrics, nonNegotiables, date } =
    coherenceSnapshot;
  const activeStage =
    stages.find((stage) => stage.status === "active") ?? stages[0];

  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-16 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight">Status</h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          Facework&apos;s own coherence tracker. If the practice asks other
          systems to be transparent, sovereign, and structurally honest, it has
          to submit itself to the same test.
        </p>
        <p className="text-xs text-muted tracking-wide">
          Evidence snapshot: {date} / verify before publication
        </p>
      </div>

      <section className="border border-border  overflow-hidden">
        {[
          {
            label: "Snapshot Phase",
            detail: activeStage.label,
          },
          {
            label: "What This Measures",
            detail:
              "Whether the practice is becoming transferable, referencable, and economically real without violating its own boundaries.",
          },
          {
            label: "Governance Rule",
            detail:
              "The same standards Facework applies to client systems apply here too: visibility, sovereignty, clean transfer, and no hidden dependencies.",
          },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 p-5 md:p-6 ${
              index < 2 ? "border-b border-border" : ""
            }`}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted">
              {item.label}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <hr />

      {/* Progress Metrics */}
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          MVP Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Practice Runs", value: metrics.completedRuns, max: metrics.targetRuns, suffix: "" },
            { label: "Public References", value: metrics.publicReferences, max: metrics.targetReferences, suffix: "" },
            { label: "Revenue Floor", value: metrics.monthsAtFloor, max: metrics.targetMonthsAtFloor, suffix: " mo" },
          ].map((metric) => (
            <div key={metric.label} className="border border-border  p-5 space-y-3">
              <p className="text-xs tracking-[0.15em] uppercase text-muted">{metric.label}</p>
              <p className="text-2xl md:text-3xl font-normal">
                {metric.value}
                <span className="text-muted text-base md:text-lg">
                  /{metric.max}{metric.suffix}
                </span>
              </p>
              <ProgressBar value={metric.value} max={metric.max} label={metric.label} />
            </div>
          ))}
        </div>
      </section>

      {/* Stage Boundaries */}
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          Stage Boundaries
        </h2>
        <div className="space-y-3">
          {stages.map((stage) => (
            <div
              key={stage.stage}
              className={`border  p-5 space-y-4 ${
                stage.status === "active"
                  ? "border-coherence/50 bg-coherence/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
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
              <div className="space-y-2">
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
                      {item.status === "complete" ? "●" : item.status === "in-progress" ? "◐" : "○"}
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-muted">{item.description}</p>
                      {item.evidence && (
                        <p className="text-xs text-muted">Evidence: {item.evidence}</p>
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
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          No-Go Lines
        </h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          These are the conditions that would signal drift, stalled transfer,
          or a breakdown between the stated practice and the reality of how it
          operates.
        </p>
        <div className="space-y-2">
          {noGoLines.map((line, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-3 border border-border  p-4"
            >
              <span
                className={`text-xs tracking-wide px-1.5 py-0.5  border w-fit ${
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
                  <p className="text-xs text-muted mt-1">{line.detail}</p>
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
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted">
          Non-Negotiables
        </h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          These are the boundaries the system is not allowed to violate, even
          if doing so would make growth or monetization easier.
        </p>
        <div className="space-y-3">
          {nonNegotiables.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-coherence mt-0.5 text-xs" aria-hidden="true">●</span>
              <p className="text-sm text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
