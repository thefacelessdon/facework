import { coherenceSnapshot } from "@/data/demo";
import { ProgressBar } from "@/components/ProgressBar";

export default function StatusPage() {
  const { stages, noGoLines, metrics, nonNegotiables, date } =
    coherenceSnapshot;
  const activeStage =
    stages.find((stage) => stage.status === "active") ?? stages[0];

  const progress = [
    {
      label: "Practice Runs",
      value: metrics.completedRuns,
      max: metrics.targetRuns,
      suffix: "",
    },
    {
      label: "Public References",
      value: metrics.publicReferences,
      max: metrics.targetReferences,
      suffix: "",
    },
    {
      label: "Revenue Floor",
      value: metrics.monthsAtFloor,
      max: metrics.targetMonthsAtFloor,
      suffix: " mo",
    },
  ];

  return (
    <div className="section-page">
      <section className="section-threshold" aria-labelledby="status-title">
        <p className="eyebrow">Facework / Coherence tracker</p>
        <h1 id="status-title">The practice submits to its own test.</h1>
        <p className="section-intro">
          Facework&apos;s own coherence tracker. If the practice asks other
          systems to be transparent, sovereign, and structurally honest, it has
          to submit itself to the same test.
        </p>
      </section>

      <div className="evidence-strip" aria-label="Snapshot summary">
        <p>
          <span>Snapshot phase</span>
          {activeStage.label}
        </p>
        <p>
          <span>What this measures</span>
          Whether the practice is becoming transferable, referencable, and
          economically real without violating its own boundaries.
        </p>
        <p>
          <span>Governance rule</span>
          The same standards Facework applies to client systems apply here:
          visibility, sovereignty, clean transfer, and no hidden dependencies.
        </p>
      </div>

      <p className="policy-note">Evidence snapshot: {date}.</p>

      {/* MVP progress */}
      <section className="section-records" aria-label="MVP progress">
        <header className="section-head">
          <p>MVP progress</p>
          <p>Practice runs · references · revenue floor</p>
        </header>
        {progress.map((metric) => (
          <article className="section-record" key={metric.label}>
            <p className="artifact-id">{metric.label}</p>
            <div>
              <h2>
                {metric.value}
                <span style={{ color: "var(--fw-muted)" }}>
                  /{metric.max}
                  {metric.suffix}
                </span>
              </h2>
              <div style={{ marginTop: "var(--space-lg)", maxWidth: "24rem" }}>
                <ProgressBar
                  value={metric.value}
                  max={metric.max}
                  label={metric.label}
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Stage boundaries */}
      <section className="section-records" aria-label="Stage boundaries">
        <header className="section-head">
          <p>Stage boundaries</p>
          <p>MVP → Beta → Scale</p>
        </header>
        {stages.map((stage) => (
          <article className="section-record" key={stage.stage}>
            <p className="artifact-id">
              {stage.status === "active" ? "Active" : "Upcoming"}
            </p>
            <div>
              <h2>{stage.label}</h2>
              <p>{stage.description}</p>
              <dl style={{ marginTop: "var(--space-xl)" }}>
                {stage.exitCriteria.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      alignItems: "flex-start",
                      padding: "var(--space-sm) 0",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className={
                        item.status === "complete"
                          ? "text-coherence"
                          : item.status === "in-progress"
                            ? "text-resonance"
                            : "text-muted"
                      }
                    >
                      {item.status === "complete"
                        ? "●"
                        : item.status === "in-progress"
                          ? "◐"
                          : "○"}
                    </span>
                    <div>
                      <p style={{ margin: 0 }}>{item.description}</p>
                      {item.evidence && (
                        <p
                          style={{
                            margin: "4px 0 0",
                            fontSize: ".82rem",
                          }}
                        >
                          Evidence: {item.evidence}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </section>

      {/* No-go lines */}
      <section className="policy-records" aria-label="No-go lines">
        <header className="section-head">
          <p>No-go lines</p>
          <p>Conditions that signal drift</p>
        </header>
        {noGoLines.map((line, i) => (
          <article className="policy-record" key={i}>
            <p className="artifact-id">
              {line.type}
              <br />
              <span
                className={
                  line.status === "clear"
                    ? "text-coherence"
                    : line.status === "approaching"
                      ? "text-resonance"
                      : "text-entropy"
                }
              >
                {line.status}
              </span>
            </p>
            <h2>{line.description}</h2>
            {line.detail && <p>{line.detail}</p>}
          </article>
        ))}
      </section>

      {/* Non-negotiables */}
      <section className="policy-records" aria-label="Non-negotiables">
        <header className="section-head">
          <p>Non-negotiables</p>
          <p>Boundaries the system cannot violate</p>
        </header>
        {nonNegotiables.map((item, i) => (
          <article className="policy-record" key={i}>
            <p className="artifact-id">{String(i + 1).padStart(2, "0")}</p>
            <h2>{item}</h2>
          </article>
        ))}
      </section>
    </div>
  );
}
