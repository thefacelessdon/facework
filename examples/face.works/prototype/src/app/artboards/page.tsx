"use client";

import { useEffect, useRef, useState } from "react";
import { primitives, lerpPalette, type PrimitiveConfig } from "@/lib/primitives";

function PrimitiveCanvas({
  config,
  size = 400,
}: {
  config: PrimitiveConfig;
  size?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    const t = 1.5; // frozen moment for specimen
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    let maxVal = 0.001;

    // First pass: compute values and find max
    const values = new Float32Array(size * size);
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const x = (px / size) * 2.4 - 1.2;
        const y = (py / size) * 2.4 - 1.2;
        const val = config.render(x, y, t, config.params);
        values[py * size + px] = val;
        if (val > maxVal) maxVal = val;
      }
    }

    // Second pass: black ink on transparent — like the reference specimens
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const idx = (py * size + px) * 4;
        const normalized = Math.pow(values[py * size + px] / maxVal, 1.4);
        if (normalized < 0.01) {
          data[idx] = 0;
          data[idx + 1] = 0;
          data[idx + 2] = 0;
          data[idx + 3] = 0;
        } else {
          // Dark ink — #1a1a1a, alpha from intensity
          data[idx] = 26;
          data[idx + 1] = 26;
          data[idx + 2] = 26;
          data[idx + 3] = Math.min(255, Math.round(normalized * 255));
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [config, size]);

  return <canvas ref={canvasRef} width={size} height={size} />;
}

function SpecimenArtboard({ config, index }: { config: PrimitiveConfig; index: number }) {
  return (
    <div
      className="w-[1200px] min-h-[1600px] bg-[#F0EDE4] text-[#1a1a1a] p-16 relative"
      style={{ fontFamily: "'JetBrains Mono', monospace", pageBreakAfter: "always" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <span className="text-5xl font-normal" style={{ fontFamily: "Georgia, serif" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs tracking-widest uppercase opacity-40">
          ✦
        </span>
      </div>

      {/* Pattern + Code Layout */}
      <div className="flex gap-12">
        {/* Left: Pattern */}
        <div className="shrink-0">
          <PrimitiveCanvas config={config} size={440} />
          <p className="text-xs opacity-40 mt-3 text-center">fig 1</p>
        </div>

        {/* Right: Code + Math */}
        <div className="flex-1 space-y-8 pt-4">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-40 mb-1">
              {config.key}
            </p>
            <h2 className="text-2xl font-normal" style={{ fontFamily: "Georgia, serif" }}>
              {config.name}
            </h2>
            <p className="text-sm opacity-60 mt-1">{config.subtitle}</p>
          </div>

          {/* Math */}
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2">
              Governing equations
            </p>
            <pre className="text-xs leading-relaxed opacity-70 whitespace-pre-wrap">
              {config.math}
            </pre>
          </div>

          {/* Source code */}
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2">
              Source
            </p>
            <pre className="text-[11px] leading-relaxed opacity-60 whitespace-pre-wrap">
              {config.code}
            </pre>
          </div>

          {/* Parameters */}
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2">
              Parameters
            </p>
            <div className="flex gap-6">
              {Object.entries(config.params).map(([key, val]) => (
                <div key={key} className="text-xs">
                  <span className="opacity-40">{key}</span>{" "}
                  <span className="opacity-70">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Behavior Description */}
      <div className="mt-12 pt-8 border-t border-[#1a1a1a]/10">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2">
              Behavior
            </p>
            <p className="text-sm leading-relaxed opacity-70">
              {config.behavior}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2">
              Motion
            </p>
            <p className="text-sm leading-relaxed opacity-70">
              {config.motion}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 left-16 right-16 flex justify-between text-[10px] opacity-30">
        <span>FACEWORK PROTOCOL v2</span>
        <span>PRIMITIVE {String(index + 1).padStart(2, "0")} / {primitives.length}</span>
      </div>
    </div>
  );
}

export default function ArtboardsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#2A2B2E] p-8">
      {/* Nav */}
      <div className="max-w-[1200px] mx-auto mb-6 flex gap-2 flex-wrap">
        {primitives.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setActiveIndex(i)}
            className={`text-xs px-3 py-1.5 rounded transition-colors ${
              i === activeIndex
                ? "bg-white/10 text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {String(i + 1).padStart(2, "0")} {p.name}
          </button>
        ))}
      </div>

      {/* Active Artboard */}
      <div className="max-w-[1200px] mx-auto shadow-2xl">
        <SpecimenArtboard
          config={primitives[activeIndex]}
          index={activeIndex}
        />
      </div>
    </div>
  );
}
