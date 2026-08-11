import Link from "next/link";
import { RecordLabel } from "@/components/rr";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <RecordLabel tick>Facework · A public record of coherence</RecordLabel>
        <p className="site-footer__line">Knowledge should outlive the interface.</p>
      </div>
      <nav className="site-footer__nav" aria-label="Operating records">
        <RecordLabel as="span">Operating records</RecordLabel>
        <Link href="/status">Status</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
