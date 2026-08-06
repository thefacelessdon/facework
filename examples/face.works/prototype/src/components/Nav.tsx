"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/demo";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-rail" aria-label="Site header">
      <Link className="site-identity" href="/" aria-label="Facework home">
        <Image
          src="/identity/facework-lockup-horizontal.svg"
          width={165}
          height={24}
          priority
          alt="Facework"
        />
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
          const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
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
