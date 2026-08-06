import type { Metadata } from "next";
import { RecordLabel, SectionHead, StructureLineage } from "@/components/rr";
import { coherenceSnapshot } from "@/data/demo";

export const metadata: Metadata = {
  title: "Status",
  description:
    "Facework's own coherence tracker — the same standards it asks of client systems, applied to itself.",
};

const criteriaMarker = {
  complete: "complete",
  "in-progress": "progress",
  "not-started": "pending",
} as const;

const noGoState = {
  clear: "rr-strip__desc--settled",
  approaching: "rr-strip__desc--attention",
  triggered: "rr-strip__desc--exposure",
} as const;

export default function StatusPage() {
  const { stages, noGoLines, metrics, nonNegotiables, date } = coherenceSnapshot;
  const activeStage = stages.find((s) => s.status === "active") ?? stages[0];

  const gauges = [
    { label: "Practice runs", value: metrics.completedRuns, max: metrics.targetRuns, suffix: "" },
    { label: "Public references", value: metrics.publicReferences, max: metrics.targetReferences, suffix: "" },
    { label: "Revenue floor", value: metrics.monthsAtFloor, max: metrics.targetMonthsAtFloor, suffix: " mo" },
  ];

  const nonNegotiableRows = nonNegotiables.map((item) => ({
    label: item,
    note: "held",
    state: "settled" as const,
  }));

  return (
    <div className="rr rr-page section-page">
      <div className="rr-column rr-column--wide">
        <header className="rr-masthead">
          <RecordLabel tick>Operating record · Coherence tracker</RecordLabel>
          <h1 className="rr-display">The practice submits to its own test.</h1>
          <p className="rr-lede">
            Facework&rsquo;s own coherence tracker. If the practice asks other
            systems to be transparent, sovereign, and structurally honest, it has
            to submit itself to the same test.
          </p>
        </header>

        <section className="rr-section" aria-label="Snapshot summary">
          <dl className="rr-strip">
            <div className="rr-strip__pair">
              <dt className="rr-strip__term">Snapshot phase</dt>
              <dd className="rr-strip__desc">{activeStage.label}</dd>
            </div>
            <div className="rr-strip__pair">
              <dt className="rr-strip__term">What this measures</dt>
              <dd className="rr-strip__desc">
                Whether the practice is becoming transferable, referencable, and
                economically real without violating its own boundaries.
              </dd>
            </div>
            <div className="rr-strip__pair">
              <dt className="rr-strip__term">Governance rule</dt>
              <dd className="rr-strip__desc">
                The same standards Facework applies to client systems apply here:
                visibility, sovereignty, clean transfer, and no hidden
                dependencies.
              </dd>
            </div>
          </dl>
          <p className="rr-note rr-note--record">Evidence snapshot: {date}.</p>
        </section>

        <section className="rr-section" aria-label="MVP progress">
          <SectionHead
            label="MVP progress"
            title="Practice runs · references · revenue floor"
          />
          <ul className="rr-rows">
            {gauges.map((g) => {
              const pct = g.max > 0 ? Math.min(1, Math.max(0, g.value / g.max)) : 0;
              return (
                <li className="rr-rows__item" key={g.label}>
                  <span className="rr-rows__meta">
                    <strong>
                      {g.value}/{g.max}
                      {g.suffix}
                    </strong>
                  </span>
                  <div className="rr-rows__body">
                    <h3 className="rr-rows__title">{g.label}</h3>
                    <div className="rr-gauge">
                      <div
                        className="rr-meter"
                        role="progressbar"
                        aria-valuenow={g.value}
                        aria-valuemin={0}
                        aria-valuemax={g.max}
                        aria-label={`${g.label}: ${g.value} of ${g.max}`}
                      >
                        <div
                          className="rr-meter__fill"
                          style={{ transform: `scaleX(${pct})` }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rr-section" aria-label="Stage boundaries">
          <SectionHead label="Stage boundaries" title="MVP → Beta → Scale" />
          <ul className="rr-rows">
            {stages.map((stage) => (
              <li className="rr-rows__item" key={stage.stage}>
                <span className="rr-rows__meta">
                  <strong>{stage.status === "active" ? "Active" : "Upcoming"}</strong>
                </span>
                <div className="rr-rows__body">
                  <h3 className="rr-rows__title">{stage.label}</h3>
                  <p className="rr-rows__note">{stage.description}</p>
                  <ul className="rr-criteria">
                    {stage.exitCriteria.map((item, i) => (
                      <li className="rr-criteria__item" key={i}>
                        <span
                          className={`rr-criteria__marker rr-criteria__marker--${criteriaMarker[item.status]}`}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="rr-criteria__text">{item.description}</p>
                          {item.evidence ? (
                            <p className="rr-criteria__evidence">
                              Evidence: {item.evidence}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rr-section" aria-label="No-go lines">
          <SectionHead label="No-go lines" title="Conditions that signal drift" />
          <ul className="rr-rows">
            {noGoLines.map((line, i) => (
              <li className="rr-rows__item" key={i}>
                <span className="rr-rows__meta">
                  <strong>{line.type}</strong>
                  <span className={noGoState[line.status]}>{line.status}</span>
                </span>
                <div className="rr-rows__body">
                  <p className="rr-rows__note">{line.description}</p>
                  {line.detail ? <p className="rr-rows__sub">{line.detail}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rr-section" aria-label="Non-negotiables">
          <SectionHead label="Non-negotiables" title="Boundaries the system cannot violate" />
          <StructureLineage rows={nonNegotiableRows} label="Non-negotiable boundaries" />
        </section>
      </div>
    </div>
  );
}
