import type { DocHeading } from "@/lib/markdown-blocks";

/* -------------------------------------------------------------------------
 * The Reading Margin — the document reading page's margin apparatus,
 * extending the Holdings Ledger grammar (Ledger.tsx) from *holdings* to
 * *record*: at >=1100px a sticky typographic rail beside the document carries
 * the record block (kind, provenance, reading length), the contents (h2
 * anchors), and the see-also wayfinding; below 1100px the contents fold to a
 * native <details> and the rest stays inline. Typographic only — ONE
 * hairline (above the wayfinding group), no cards, no backgrounds, no JS.
 * Layout classes live in reading-room.css (`.rr-margin*`, `.rr-contents`).
 * ---------------------------------------------------------------------- */

const cx = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

function ContentsList({ headings }: { headings: readonly DocHeading[] }) {
  return (
    <ol className="rr-contents__list">
      {headings.map((h) => (
        <li key={h.id}>
          <a className="rr-contents__link" href={`#${h.id}`}>
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export type ContentsProps = {
  headings: readonly DocHeading[];
  className?: string;
};

/**
 * ContentsNav — the rail's contents block: record-voice eyebrow + the
 * document's h2 anchors in document order. Headings carry their own
 * numbering where order is real (canon h2s are numbered at the source), so
 * the list adds none.
 */
export function ContentsNav({ headings, className }: ContentsProps) {
  return (
    <nav className={cx("rr-contents", className)} aria-label="Contents">
      <p className="rr-label">Contents</p>
      <ContentsList headings={headings} />
    </nav>
  );
}

/**
 * ContentsFold — below 1100px the contents fold to a native <details>
 * between the lede and the article. Summary in record voice; no JS, no
 * custom disclosure chrome beyond the native marker.
 */
export function ContentsFold({ headings, className }: ContentsProps) {
  return (
    <details className={cx("rr-contents rr-contents--fold", className)}>
      <summary className="rr-contents__summary">Contents</summary>
      <ContentsList headings={headings} />
    </details>
  );
}

/**
 * MarginRecord — the rail's record block (canon voice, top): kind eyebrow,
 * the provenance line (the same one source of truth the inline slot
 * renders), and the derived reading length. All content arrives from real
 * data; this component only arranges it.
 */
export function MarginRecord({ children }: { children: React.ReactNode }) {
  return <div className="rr-margin-record">{children}</div>;
}

/**
 * MarginWayfinding — the wayfinding group under the rail's ONE hairline:
 * contents first, see-also last. The hairline lives on this wrapper so the
 * grammar holds whether or not a contents block exists.
 */
export function MarginWayfinding({ children }: { children: React.ReactNode }) {
  return <div className="rr-margin-way">{children}</div>;
}
