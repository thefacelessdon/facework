"use client";

import { useEffect, useState } from "react";

const W = 320;
const H = 120;
const MID = H / 2;

/**
 * A bounded, damped oscillation that settles to the mean — the Lorenz Field
 * abstracted (§7). Built deterministically so SSR and client markup match.
 */
function buildPath(): string {
  const samples = 96;
  const amp = 40;
  const decay = 2.1;
  const freq = 5.4 * Math.PI;
  let d = "";
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const x = 8 + t * (W - 16);
    const y = MID - amp * Math.exp(-decay * t) * Math.sin(freq * t);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return d.trim();
}

const D = buildPath();

export type TraceProps = {
  /** Accessible description of what the trace reads. */
  label?: string;
  className?: string;
};

/**
 * Trace — the Field / Trace instrument (§7). A verdigris bounded-oscillation
 * line that draws in via stroke-dashoffset on mount (§9). `prefers-reduced-
 * motion` renders the settled path instantly.
 */
export function Trace({
  label = "A bounded pattern settling over time",
  className,
}: TraceProps) {
  const [drawn, setDrawn] = useState(false);

  // Toggle the drawn state on mount from within a rAF callback (never
  // synchronously in the effect body). `prefers-reduced-motion` is honored in
  // CSS (.rr-trace__path--draw drops its transition), so the settled path
  // appears instantly there while the offset still resolves to 0.
  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <svg
      className={["rr-trace", className].filter(Boolean).join(" ")}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
    >
      <line
        className="rr-trace__axis"
        x1={8}
        y1={MID}
        x2={W - 8}
        y2={MID}
        strokeWidth={1}
      />
      <path
        className="rr-trace__path rr-trace__path--draw"
        d={D}
        pathLength={1}
        style={{ strokeDasharray: 1, strokeDashoffset: drawn ? 0 : 1 }}
      />
    </svg>
  );
}
