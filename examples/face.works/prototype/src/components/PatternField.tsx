"use client";

import { useEffect, useRef } from "react";

/**
 * Facework Pattern Field — Wave interference visualization
 * from the Coherence Kernel specification.
 *
 * Each primitive modifies the field:
 * - Coherence: contracts variance, aligns phases
 * - Frequency: wavelength and angular frequency
 * - Current: directional drift
 * - Resonance: number of sources and phase correlation
 * - Flow: phase drift rate and time scaling
 * - Stability: grid anchoring
 * - Entropy: noise injection
 *
 * Color mapped to Facework palette:
 *   0.00 → #050309 (deep black)
 *   0.30 → #3A1C5F (deep purple)
 *   0.65 → #F24E6A (pulse red/pink)
 *   1.00 → #FFEFAF (warm cream)
 */

// Palette stops from the Kernel spec
const PALETTE = [
  { t: 0.0, r: 5, g: 3, b: 9 },
  { t: 0.3, r: 58, g: 28, b: 95 },
  { t: 0.65, r: 242, g: 78, b: 106 },
  { t: 1.0, r: 255, g: 239, b: 175 },
];

function lerpColor(t: number): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, t));
  for (let i = 0; i < PALETTE.length - 1; i++) {
    const a = PALETTE[i];
    const b = PALETTE[i + 1];
    if (clamped >= a.t && clamped <= b.t) {
      const f = (clamped - a.t) / (b.t - a.t);
      return [
        Math.round(a.r + (b.r - a.r) * f),
        Math.round(a.g + (b.g - a.g) * f),
        Math.round(a.b + (b.b - a.b) * f),
      ];
    }
  }
  const last = PALETTE[PALETTE.length - 1];
  return [last.r, last.g, last.b];
}

interface PatternConfig {
  coherence: number;    // 0-1: governs all other parameters
  frequency: number;    // base wavelength
  current: [number, number]; // drift vector
  resonance: number;    // 0-1: number of sources / phase alignment
  flow: number;         // 0-1: time scaling
  stability: number;    // 0-1: grid anchoring
  entropy: number;      // 0-1: noise
}

const DEFAULT_CONFIG: PatternConfig = {
  coherence: 0.85,
  frequency: 0.35,
  current: [0.12, 0.04],
  resonance: 0.7,
  flow: 0.6,
  stability: 0.15,
  entropy: 0.08,
};

interface Props {
  config?: Partial<PatternConfig>;
  className?: string;
  opacity?: number;
  speed?: number;
}

export function PatternField({
  config: configOverride,
  className = "",
  opacity = 0.4,
  speed = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cfg = { ...DEFAULT_CONFIG, ...configOverride };
    const C = cfg.coherence;

    // Coherence-regulated parameters
    const sigmaLambda = 0.12 * (1 - C);
    const sigmaOmega = 0.2 * (1 - C);
    const sigmaPhi = 0.8 * (1 - C);
    const flowRate = 0.5 * (0.7 + 0.3 * C);
    const driftX = cfg.current[0] * (0.6 + 0.4 * C);
    const driftY = cfg.current[1] * (0.6 + 0.4 * C);
    const S = Math.min(1, cfg.stability + 0.4 * C);
    const eps = cfg.entropy * (1 - C);
    const gridDensity = 3;

    // Generate sources based on resonance
    const nMax = 8;
    const N = 1 + Math.floor(cfg.resonance * nMax);
    const phiCenter = 0;

    const sources = Array.from({ length: N }, (_, i) => ({
      amplitude: 0.8 + Math.random() * 0.4,
      wavelength: cfg.frequency + (Math.random() - 0.5) * 2 * sigmaLambda,
      omega: 1.2 + (Math.random() - 0.5) * 2 * sigmaOmega,
      cx: (Math.random() - 0.5) * 1.6,
      cy: (Math.random() - 0.5) * 1.6,
      phi0: phiCenter + (Math.random() - 0.5) * 2 * sigmaPhi,
      sigma: 0.4 + Math.random() * 0.6,
      alpha: (Math.random() - 0.5) * 0.3 * flowRate,
    }));

    // Gamma from kernel spec
    const gammaBase = 1.8;
    const gamma = gammaBase - 0.3 * C + 0.2 * cfg.entropy;

    // Render resolution (lower for performance)
    const SCALE = 2;
    let w = 0;
    let h = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      w = Math.ceil(rect.width / SCALE);
      h = Math.ceil(rect.height / SCALE);
      canvas.width = w;
      canvas.height = h;
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const imageData = ctx.createImageData(w, h);
    let startTime = performance.now();

    // Noise seed
    const noiseSeed = Array.from({ length: 256 }, () => Math.random());
    function noise(x: number, y: number, t: number) {
      const ix = ((Math.abs(Math.floor(x * 50 + t * 10)) % 256) + 256) % 256;
      const iy = ((Math.abs(Math.floor(y * 50 + t * 7)) % 256) + 256) % 256;
      return (noiseSeed[(ix + iy * 17) % 256] - 0.5) * 2;
    }

    function render(time: number) {
      if (!canvas || !ctx) return;
      const t = ((time - startTime) / 1000) * speed;
      const tEff = t * (0.3 + 0.7 * cfg.flow);

      // Clear to transparent
      ctx.clearRect(0, 0, w, h);

      // Recreate imageData if canvas resized
      const currentData = ctx.createImageData(w, h);
      const data = currentData.data;
      let maxIntensity = 0.001;

      // First pass: compute field values
      const fieldValues = new Float32Array(w * h);

      for (let py = 0; py < h; py++) {
        for (let px = 0; px < w; px++) {
          // Map pixel to [-1, 1]
          const x = (px / w) * 2 - 1;
          const y = (py / h) * 2 - 1;

          // Apply current drift
          const xd = x + driftX * tEff;
          const yd = y + driftY * tEff;

          // Sum contributions from all sources
          let F = 0;
          for (const src of sources) {
            const dx = xd - src.cx;
            const dy = yd - src.cy;
            const r = Math.sqrt(dx * dx + dy * dy);
            const phase = src.phi0 + src.alpha * tEff;
            const wave =
              src.amplitude *
              Math.cos(
                (2 * Math.PI * r) / src.wavelength -
                  src.omega * tEff +
                  phase
              ) *
              Math.exp(-(r * r) / (2 * src.sigma * src.sigma));
            F += wave;
          }

          // Stability grid
          if (S > 0.01) {
            const grid =
              Math.cos(2 * Math.PI * gridDensity * xd) *
              Math.cos(2 * Math.PI * gridDensity * yd);
            const mask = 0.5 + 0.5 * Math.sign(grid);
            F = (1 - S) * F + S * F * mask;
          }

          // Entropy noise
          if (eps > 0.001) {
            const tNoise = tEff * (0.5 + cfg.entropy);
            F += eps * noise(xd, yd, tNoise);
          }

          fieldValues[py * w + px] = F;
          const intensity = Math.max(F, 0);
          if (intensity > maxIntensity) maxIntensity = intensity;
        }
      }

      // Second pass: color mapping — transparent background
      for (let py = 0; py < h; py++) {
        for (let px = 0; px < w; px++) {
          const idx = (py * w + px) * 4;
          const F = fieldValues[py * w + px];
          const intensity = Math.max(F, 0);
          const normalized = Math.pow(
            Math.min(intensity / maxIntensity, 1),
            gamma
          );
          if (normalized < 0.01) {
            // Fully transparent — no pattern here
            data[idx] = 0;
            data[idx + 1] = 0;
            data[idx + 2] = 0;
            data[idx + 3] = 0;
          } else {
            const [r, g, b] = lerpColor(normalized);
            const alpha = Math.min(255, Math.round(normalized * 255 * 1.5));
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = alpha;
          }
        }
      }

      ctx.putImageData(currentData, 0, 0);
      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
    };
  }, [configOverride, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ opacity, imageRendering: "pixelated" }}
    />
  );
}
