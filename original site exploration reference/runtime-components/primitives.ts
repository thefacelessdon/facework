/**
 * Primitive pattern generators — the math behind each visual behavior.
 * Each primitive is a function that computes a value at (x, y, t).
 * The value is mapped to the Facework palette for rendering.
 */

export interface PrimitiveConfig {
  key: string;
  name: string;
  subtitle: string;
  behavior: string;
  motion: string;
  color: string;
  math: string;
  code: string;
  params: Record<string, number>;
  render: (
    x: number,
    y: number,
    t: number,
    params: Record<string, number>
  ) => number;
}

// --- PALETTE ---
export const PALETTE = [
  { t: 0.0, r: 5, g: 3, b: 9 },
  { t: 0.3, r: 58, g: 28, b: 95 },
  { t: 0.65, r: 242, g: 78, b: 106 },
  { t: 1.0, r: 255, g: 239, b: 175 },
];

export function lerpPalette(t: number): [number, number, number] {
  const c = Math.max(0, Math.min(1, t));
  for (let i = 0; i < PALETTE.length - 1; i++) {
    const a = PALETTE[i];
    const b = PALETTE[i + 1];
    if (c >= a.t && c <= b.t) {
      const f = (c - a.t) / (b.t - a.t);
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

// --- PRIMITIVES ---

export const primitives: PrimitiveConfig[] = [
  {
    key: "coherence",
    name: "Coherence",
    subtitle: "The governing force",
    behavior: "Lines converge to center axis. Variance contracts. Phase aligns.",
    motion: "Slow magnetic pull → stable lock",
    color: "#7AFFC4",
    math: `σ'λ = σλ(1 - C)
σ'ω = σω(1 - C)
σ'φ = σφ(1 - C)
S' = min(1, S + 0.4C)
ε' = ε(1 - C)`,
    code: `float coherence(vec2 p, float C) {
  float r = length(p);
  float θ = atan(p.y, p.x);
  float rings = cos(r * 12.0 - t * 0.3);
  float axis = exp(-abs(p.x) * (2.0 + C * 8.0));
  float contract = mix(rings, axis * rings, C);
  return contract * exp(-r * r / 1.2);
}`,
    params: { C: 0.85 },
    render: (x, y, t, p) => {
      const r = Math.sqrt(x * x + y * y);
      const rings = Math.cos(r * 12 - t * 0.3);
      const axis = Math.exp(-Math.abs(x) * (2 + p.C * 8));
      const contract = rings * (1 - p.C) + axis * rings * p.C;
      return Math.max(0, contract * Math.exp(-r * r / 1.2));
    },
  },
  {
    key: "frequency",
    name: "Frequency",
    subtitle: "The source signature",
    behavior: "Steady oscillation. The internal rhythm that defines identity.",
    motion: "Rhythmic — consistent pulse, stable amplitude",
    color: "#FFD089",
    math: `λᵢ = λ₀ + δλᵢ
δλᵢ ~ N(0, σ'²λ)
ωᵢ = ω₀ + δωᵢ
δωᵢ ~ N(0, σ'²ω)`,
    code: `float frequency(vec2 p, float λ, float ω) {
  float r = length(p);
  float wave = cos(2.0 * PI * r / λ - ω * t);
  float decay = exp(-r * r / 0.8);
  return wave * decay;
}`,
    params: { lambda: 0.35, omega: 1.2 },
    render: (x, y, t, p) => {
      const r = Math.sqrt(x * x + y * y);
      const wave = Math.cos(2 * Math.PI * r / p.lambda - p.omega * t);
      return Math.max(0, wave * Math.exp(-r * r / 0.8));
    },
  },
  {
    key: "current",
    name: "Current",
    subtitle: "Directional movement",
    behavior: "The field drifts. Direction with persistence, not speed.",
    motion: "Steady forward — no backtracking",
    color: "#FFD089",
    math: `x' = x + v'ₓt
y' = y + v'ᵧt
v' = v(0.6 + 0.4C)`,
    code: `float current(vec2 p, vec2 v, float t) {
  vec2 drift = p + v * t;
  float r = length(drift);
  float wave = cos(r * 10.0 - t * 0.8);
  float streak = exp(-abs(drift.y) * 3.0);
  return wave * streak * exp(-r * r / 1.5);
}`,
    params: { vx: 0.18, vy: 0.05 },
    render: (x, y, t, p) => {
      const dx = x + p.vx * t;
      const dy = y + p.vy * t;
      const r = Math.sqrt(dx * dx + dy * dy);
      const wave = Math.cos(r * 10 - t * 0.8);
      const streak = Math.exp(-Math.abs(dy) * 3);
      return Math.max(0, wave * streak * Math.exp(-r * r / 1.5));
    },
  },
  {
    key: "resonance",
    name: "Resonance",
    subtitle: "Amplitude amplification",
    behavior: "One strand vibrates, causing nearby strands to amplify. Echo outward.",
    motion: "Pulsing — ripple effect",
    color: "#7AFFC4",
    math: `N = 1 + ⌊R · Nmax⌋
φ⁰ᵢ ~ N(φcenter, σ'²φ)`,
    code: `float resonance(vec2 p, float R, float t) {
  float sum = 0.0;
  int N = 1 + int(R * 6.0);
  for (int i = 0; i < N; i++) {
    vec2 c = vec2(cos(float(i) * 1.05), sin(float(i) * 1.05)) * 0.3;
    float r = length(p - c);
    sum += cos(r * 14.0 - t * 0.5) * exp(-r * r / 0.6);
  }
  return sum / float(N);
}`,
    params: { R: 0.7, N: 6 },
    render: (x, y, t, p) => {
      let sum = 0;
      const N = 1 + Math.floor(p.R * 6);
      for (let i = 0; i < N; i++) {
        const cx = Math.cos(i * 1.05) * 0.3;
        const cy = Math.sin(i * 1.05) * 0.3;
        const r = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        sum += Math.cos(r * 14 - t * 0.5) * Math.exp(-r * r / 0.6);
      }
      return Math.max(0, sum / N);
    },
  },
  {
    key: "flow",
    name: "Flow",
    subtitle: "Adaptive morphing",
    behavior: "Lines bend around obstacles, reroute smoothly. Fluid reconfiguration.",
    motion: "Smooth adaptation — continuous self-adjustment",
    color: "#7AFFC4",
    math: `φᵢ(t) = φ⁰ᵢ + α'ᵢt
teff = t(0.3 + 0.7F)`,
    code: `float flow(vec2 p, float F, float t) {
  float tEff = t * (0.3 + 0.7 * F);
  float θ = atan(p.y, p.x) + sin(tEff * 0.4) * F;
  float r = length(p);
  float spiral = cos(r * 8.0 - θ * 3.0 - tEff * 0.6);
  return spiral * exp(-r * r / 1.0);
}`,
    params: { F: 0.6 },
    render: (x, y, t, p) => {
      const tEff = t * (0.3 + 0.7 * p.F);
      const theta = Math.atan2(y, x) + Math.sin(tEff * 0.4) * p.F;
      const r = Math.sqrt(x * x + y * y);
      const spiral = Math.cos(r * 8 - theta * 3 - tEff * 0.6);
      return Math.max(0, spiral * Math.exp(-r * r / 1.0));
    },
  },
  {
    key: "stability",
    name: "Stability",
    subtitle: "Fixed grid, locked nodes",
    behavior: "A rigid even lattice. The load-bearing foundation.",
    motion: "Static — almost no movement",
    color: "#7AFFC4",
    math: `g(x,y) = cos(2πgdx) · cos(2πgdy)
M(x,y) = 0.5 + 0.5 · sign(g)
F_stab = (1-S')F + S'FM`,
    code: `float stability(vec2 p, float S, float gd) {
  float grid = cos(2.0*PI*gd*p.x) * cos(2.0*PI*gd*p.y);
  float mask = 0.5 + 0.5 * sign(grid);
  float wave = cos(length(p) * 6.0);
  float decay = exp(-dot(p, p) / 2.0);
  return mix(wave, wave * mask, S) * decay;
}`,
    params: { S: 0.7, gd: 4.0 },
    render: (x, y, t, p) => {
      const grid = Math.cos(2 * Math.PI * p.gd * x) * Math.cos(2 * Math.PI * p.gd * y);
      const mask = grid > 0 ? 1 : 0;
      const r = Math.sqrt(x * x + y * y);
      const wave = Math.cos(r * 6 - t * 0.05);
      const decay = Math.exp(-(x * x + y * y) / 2);
      const blended = wave * (1 - p.S) + wave * mask * p.S;
      return Math.max(0, blended * decay);
    },
  },
  {
    key: "entropy",
    name: "Entropy",
    subtitle: "Disruption and breakdown",
    behavior: "Nodes scatter. Lines fray or misalign. Turbulence.",
    motion: "Erratic — chaotic flicker, tension buildup",
    color: "#FF7C7C",
    math: `F_ent = F_stab + ε'η(x',y',t')
t' = t(0.5 + E)
ε' = ε(1 - C)`,
    code: `float entropy(vec2 p, float E, float t) {
  float tWarp = t * (0.5 + E);
  float r = length(p);
  float base = cos(r * 10.0 - tWarp * 0.8);
  float noise = fract(sin(dot(p * tWarp, vec2(12.9, 78.2))) * 43758.5);
  float decay = exp(-r * r / 1.2);
  return (base + E * (noise - 0.5) * 2.0) * decay;
}`,
    params: { E: 0.6 },
    render: (x, y, t, p) => {
      const tWarp = t * (0.5 + p.E);
      const r = Math.sqrt(x * x + y * y);
      const base = Math.cos(r * 10 - tWarp * 0.8);
      const noise = ((Math.sin(x * 12.9 * tWarp + y * 78.2 * tWarp) * 43758.5) % 1 + 1) % 1;
      const decay = Math.exp(-r * r / 1.2);
      return Math.max(0, (base + p.E * (noise - 0.5) * 2) * decay);
    },
  },
  {
    key: "semantics",
    name: "Semantics",
    subtitle: "Signal isolation",
    behavior: "A single strand separating from noise, becoming legible.",
    motion: "Slow clarifying — noise fades, signal sharpens",
    color: "#8FAFFF",
    math: `S(x,y) = signal(x,y) · clarity
      + noise(x,y) · (1 - clarity)
clarity → 1 as t → ∞`,
    code: `float semantics(vec2 p, float clarity, float t) {
  float r = length(p);
  float signal = cos(r * 8.0 - t * 0.2) * exp(-r * r / 0.6);
  float noise = sin(p.x * 20.0) * cos(p.y * 17.0) * 0.3;
  float blend = mix(noise, signal, clarity);
  return blend;
}`,
    params: { clarity: 0.8 },
    render: (x, y, t, p) => {
      const r = Math.sqrt(x * x + y * y);
      const signal = Math.cos(r * 8 - t * 0.2) * Math.exp(-r * r / 0.6);
      const noise = Math.sin(x * 20) * Math.cos(y * 17) * 0.3;
      const blend = noise * (1 - p.clarity) + signal * p.clarity;
      return Math.max(0, blend);
    },
  },
  {
    key: "field",
    name: "Field",
    subtitle: "Force mapping",
    behavior: "Multiple bodies with visible tension. Attraction, repulsion, gravity wells.",
    motion: "Ambient drift — forces negotiating",
    color: "#8FAFFF",
    math: `F(x,y) = Σᵢ qᵢ / |p - cᵢ|²
attractors pull, repulsors push
tension visible at boundaries`,
    code: `float field(vec2 p, float t) {
  float sum = 0.0;
  vec2 centers[4];
  centers[0] = vec2(0.4, 0.0);
  centers[1] = vec2(-0.3, 0.3);
  centers[2] = vec2(-0.2, -0.4);
  centers[3] = vec2(0.1, 0.35);
  for (int i = 0; i < 4; i++) {
    float r = length(p - centers[i]);
    float charge = (i % 2 == 0) ? 1.0 : -0.6;
    sum += charge / (r * r + 0.08);
  }
  return sum;
}`,
    params: { sources: 4 },
    render: (x, y, t) => {
      const centers = [
        [0.4, 0], [-0.3, 0.3], [-0.2, -0.4], [0.1, 0.35],
      ];
      let sum = 0;
      for (let i = 0; i < centers.length; i++) {
        const dx = x - centers[i][0];
        const dy = y - centers[i][1];
        const r = Math.sqrt(dx * dx + dy * dy);
        const charge = i % 2 === 0 ? 1 : -0.6;
        sum += charge / (r * r + 0.08);
      }
      return Math.max(0, sum * 0.15);
    },
  },
  {
    key: "taste",
    name: "Taste",
    subtitle: "Quality filtering",
    behavior: "A threshold line. Above passes through, below dissolves.",
    motion: "Deliberate, gated — nothing passes without meeting the bar",
    color: "#FFD089",
    math: `T(x,y) = signal(x,y) > threshold ? signal : 0
threshold = quality_bar
sharpness controls transition`,
    code: `float taste(vec2 p, float threshold, float t) {
  float r = length(p);
  float raw = cos(r * 10.0 - t * 0.3) * exp(-r * r / 1.0);
  float filtered = smoothstep(threshold - 0.1, threshold + 0.1, raw);
  return raw * filtered;
}`,
    params: { threshold: 0.3 },
    render: (x, y, t, p) => {
      const r = Math.sqrt(x * x + y * y);
      const raw = Math.cos(r * 10 - t * 0.3) * Math.exp(-r * r / 1.0);
      const edge = p.threshold;
      const filtered = raw > edge + 0.1 ? 1 : raw > edge - 0.1 ? (raw - edge + 0.1) / 0.2 : 0;
      return Math.max(0, raw * filtered);
    },
  },
  {
    key: "sovereignty",
    name: "Sovereignty",
    subtitle: "Boundary enforcement",
    behavior: "A contained region with clear edges. Protected inside, nothing enters.",
    motion: "Static border, alive inside",
    color: "#FF7C7C",
    math: `boundary(r) = smoothstep(R+w, R-w, r)
interior = signal(x,y) · boundary
exterior = 0`,
    code: `float sovereignty(vec2 p, float R, float t) {
  float r = length(p);
  float boundary = smoothstep(R + 0.05, R - 0.05, r);
  float interior = cos(r * 12.0 - t * 0.4);
  interior *= cos(atan(p.y, p.x) * 6.0 + t * 0.2);
  return interior * boundary * exp(-r * r / (R * R));
}`,
    params: { R: 0.7 },
    render: (x, y, t, p) => {
      const r = Math.sqrt(x * x + y * y);
      const boundary = r < p.R - 0.05 ? 1 : r > p.R + 0.05 ? 0 : (p.R + 0.05 - r) / 0.1;
      const theta = Math.atan2(y, x);
      const interior = Math.cos(r * 12 - t * 0.4) * Math.cos(theta * 6 + t * 0.2);
      return Math.max(0, interior * boundary * Math.exp(-r * r / (p.R * p.R)));
    },
  },
  {
    key: "consonance",
    name: "Consonance",
    subtitle: "Layer alignment",
    behavior: "Multiple planes snapping into register. Printing alignment.",
    motion: "Settling into sync — layers converge",
    color: "#8FAFFF",
    math: `layer_k(x,y) = cos(r·ω + k·Δφ)
consonance = Σ layer_k · alignment(k,t)
alignment → 1 as layers converge`,
    code: `float consonance(vec2 p, float alignment, float t) {
  float sum = 0.0;
  for (int k = 0; k < 4; k++) {
    float phase = float(k) * 0.8 * (1.0 - alignment);
    float r = length(p + vec2(phase * 0.1, 0.0));
    sum += cos(r * 10.0 - t * 0.3 + phase);
  }
  return sum / 4.0 * exp(-dot(p,p) / 1.0);
}`,
    params: { alignment: 0.75 },
    render: (x, y, t, p) => {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        const phase = k * 0.8 * (1 - p.alignment);
        const px = x + phase * 0.1;
        const r = Math.sqrt(px * px + y * y);
        sum += Math.cos(r * 10 - t * 0.3 + phase);
      }
      return Math.max(0, (sum / 4) * Math.exp(-(x * x + y * y) / 1.0));
    },
  },
];
