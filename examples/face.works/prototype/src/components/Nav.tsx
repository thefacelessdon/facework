"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/demo";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-4 md:py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground hover:text-clarity"
        >
          face.works
        </Link>
        <div className="flex gap-4 md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs md:text-sm tracking-wide ${
                pathname.startsWith(item.href)
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
