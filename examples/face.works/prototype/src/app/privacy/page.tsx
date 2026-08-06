import type { Metadata } from "next";
import { RecordLabel, SectionHead } from "@/components/rr";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Facework website and Facework Field handle information.",
};

const practices = [
  {
    title: "Public website",
    body: "The public Facework website does not require an account. This production candidate does not include advertising trackers, marketing cookies, or third-party analytics.",
  },
  {
    title: "Facework Field",
    body: "A trace is generated in your browser. Nothing is saved unless you choose Save trace. Saved traces remain in this browser's local storage and are not transmitted to Facework.",
  },
  {
    title: "Your controls",
    body: "Inside Facework Field you can delete an individual trace or clear the full local archive. Clearing browser storage also removes the archive.",
  },
  {
    title: "Collective mode",
    body: "The current collective field uses synthetic traces for demonstration. A networked multiplayer release requires a separate privacy, consent, retention, moderation, and safety review before activation.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="rr rr-page section-page">
      <div className="rr-column">
        <header className="rr-masthead">
          <RecordLabel tick>Operating record · Privacy</RecordLabel>
          <h1 className="rr-display">Privacy should be visible in the behavior.</h1>
          <p className="rr-lede">
            This note describes the current implementation. If the website
            begins collecting or transmitting information, this record must
            change before that behavior ships.
          </p>
        </header>

        <section className="rr-section" aria-label="Privacy practices">
          <SectionHead label="Privacy practices" title="What the site does with information" />
          <ul className="rr-rows">
            {practices.map((practice, i) => (
              <li className="rr-rows__item" key={practice.title}>
                <span className="rr-rows__meta">
                  <strong>{String(i + 1).padStart(2, "0")}</strong>
                </span>
                <div className="rr-rows__body">
                  <h2 className="rr-rows__title">{practice.title}</h2>
                  <p className="rr-rows__note">{practice.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="rr-note rr-note--record">
          Effective 6 August 2026 · operational statement, not a substitute for
          jurisdiction-specific legal review.
        </p>
      </div>
    </div>
  );
}
