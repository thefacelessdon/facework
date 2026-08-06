import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Facework</p>
      <p>Knowledge should outlive the interface.</p>
      <nav aria-label="Operational information">
        <Link href="/status">Status</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
