"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/demo";
import { CoherenceMark, FaceworkWordmark } from "@/components/rr";

// The Work (Record register) is the front door; its type routes are sub-surfaces.
const WORK_PATHS = [
  "/field-notes",
  "/models",
  "/frameworks",
  "/experiments",
  "/conversations",
  "/library",
];

// The Practice (Field register) — /engage is the hub; proof + cases fold in.
const PRACTICE_PATHS = ["/engage", "/proof", "/cases"];

function matchesAny(pathname: string, paths: string[]): boolean {
  return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function isCurrent(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || matchesAny(pathname, WORK_PATHS);
  }
  if (href === "/engage") {
    return matchesAny(pathname, PRACTICE_PATHS);
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-rail" aria-label="Site header">
      <Link className="site-identity" href="/" aria-label="Facework — The Work">
        {/* Horizontal lockup: Coherence Mark leads the Register wordmark. The
            link is already labeled, so both SVGs are decorative here. */}
        <CoherenceMark size={30} decorative />
        <FaceworkWordmark height={16} decorative />
      </Link>
      <button
        className="site-menu"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((current) => !current)}
      >
        Index <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="site-nav" className="site-nav" data-open={open} aria-label="Primary">
        {navigation.map((item) => {
          const current = isCurrent(pathname, item.href);
          return (
            <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <p className="site-rail-note">
        <span className="status-signal" aria-hidden="true" /> System status
        <br />
        <strong>Foundation active</strong>
      </p>
    </header>
  );
}
