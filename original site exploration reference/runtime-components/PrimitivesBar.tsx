"use client";

import { usePathname } from "next/navigation";

/**
 * Primitives Bar — horizontal index of the 12 primitives.
 * One lights up based on current page context.
 * From VLS section VIII: "A small horizontal index showing the primitives.
 * One lights up based on context."
 */

const primitives = [
  { key: "semantics", label: "SEM", color: "var(--state-clarity)" },
  { key: "field", label: "FLD", color: "var(--state-clarity)" },
  { key: "taste", label: "TST", color: "var(--state-resonance)" },
  { key: "frequency", label: "FRQ", color: "var(--state-resonance)" },
  { key: "current", label: "CUR", color: "var(--state-resonance)" },
  { key: "flow", label: "FLW", color: "var(--state-flow)" },
  { key: "stability", label: "STB", color: "var(--state-flow)" },
  { key: "resonance", label: "RES", color: "var(--state-flow)" },
  { key: "entropy", label: "ENT", color: "var(--state-entropy)" },
  { key: "sovereignty", label: "SOV", color: "var(--state-entropy)" },
  { key: "consonance", label: "CON", color: "var(--state-clarity)" },
  { key: "coherence", label: "COH", color: "var(--state-coherence)" },
];

// Map page paths to active primitive(s)
function getActivePrimitive(pathname: string): string | null {
  if (pathname === "/") return "coherence";
  if (pathname === "/protocol") return "frequency";
  if (pathname.includes("/protocol/cultural-physics")) return "frequency";
  if (pathname.includes("/protocol/coherence")) return "coherence";
  if (pathname.includes("/protocol/protocol")) return "stability";
  if (pathname.includes("/protocol/build")) return "flow";
  if (pathname.includes("/protocol/conformance")) return "entropy";
  if (pathname === "/proof") return "resonance";
  if (pathname === "/status") return "entropy";
  if (pathname === "/engage") return "current";
  return null;
}

export function PrimitivesBar() {
  const pathname = usePathname();
  const active = getActivePrimitive(pathname);

  return (
    <div className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-20 py-3 flex items-center justify-center gap-1 overflow-x-auto">
        {primitives.map((p) => {
          const isActive = p.key === active;
          return (
            <span
              key={p.key}
              className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase px-1.5 py-0.5 rounded shrink-0"
              style={{
                color: isActive ? p.color : "var(--muted)",
                opacity: isActive ? 1 : 0.35,
                transition: "color 600ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              title={p.key}
            >
              {p.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
