import type { Metadata } from "next";
import { RecordLabel, SectionHead } from "@/components/rr";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Facework's current accessibility commitments and validation status.",
};

const commitments = [
  "Semantic landmarks, ordered headings, and visible keyboard focus.",
  "Layouts that reflow from small phones through large displays and at increased text size.",
  "Color contrast aligned with WCAG 2.2 Level AA targets.",
  "Reduced-motion behavior for people who request it.",
  "Plain-language disclosure when a validation gate remains incomplete.",
];

export default function AccessibilityPage() {
  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <RecordLabel tick>Operating record · Accessibility</RecordLabel>
          <h1 className="rr-display">Access is part of coherence.</h1>
          <p className="rr-lede">
            Facework treats accessibility as a release condition, not an
            optional layer. Automated checks support that work; they do not
            replace review with assistive technology and disabled people.
          </p>
        </header>

        <section className="rr-section" aria-label="Accessibility commitments">
          <SectionHead label="Commitments" title="What every release must hold" />
          <ul className="rr-rows">
            {commitments.map((commitment, i) => (
              <li className="rr-rows__item" key={commitment}>
                <span className="rr-rows__meta">
                  <strong>{String(i + 1).padStart(2, "0")}</strong>
                </span>
                <div className="rr-rows__body">
                  <p className="rr-rows__note">{commitment}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rr-section" aria-label="Current status">
          <SectionHead label="Current status" title="What the audit reports" />
          <p className="rr-note">
            The latest automated audit (2026-08-06, axe-core 4.11.1, WCAG 2.2
            A/AA ruleset) reports 0 violations across 17 representative routes of
            the production build, in both the light and dark registers, after
            one color-contrast fix. Automated checks catch only part of what
            matters; manual VoiceOver, NVDA, iOS Safari, and Android Chrome
            review remains a named release gate.
          </p>
          <p className="rr-note">
            Report an access barrier at{" "}
            <a className="rr-link" href="mailto:hello@face.works">
              hello@face.works
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
