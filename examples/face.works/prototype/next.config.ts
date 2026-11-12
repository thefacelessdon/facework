import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // The GPT-era type taxonomy (six FVS-900 types) was retired in favor of the
  // working-canon shape — see methodology/decisions/
  // DECISION-002-standards-first-experience-language.md. Old routes redirect
  // to their nearest new home.
  async redirects() {
    return [
      { source: "/field-notes", destination: "/runs", permanent: true },
      { source: "/models", destination: "/theories", permanent: true },
      { source: "/frameworks", destination: "/theories", permanent: true },
      { source: "/experiments", destination: "/runs", permanent: true },
      { source: "/conversations", destination: "/methodology", permanent: true },
      { source: "/library", destination: "/methodology", permanent: true },
    ];
  },
  // PERMANENT: Berdia on face.works.
  // Berdia lives in the private berdia-trust repo; no Berdia file is kept in this public repo.
  // face.works forwards every /berdia path there, so the address family members use
  // (face.works/berdia) and their same-origin session cookie are unchanged.
  // Family-only pages (plan, trust, ops) are gated first by src/proxy.ts.
  // Guarded by src/app/berdia-mount.test.ts. DO NOT REMOVE the api or k rewrites:
  // invitation sign-in and the reminder email depend on them.
  async rewrites() {
    return [
      { source: "/berdia/api/:path*", destination: "https://berdia-trust.vercel.app/berdia/api/:path*" },
      // One-tap invitation links: face.works/berdia/k/<code>. The code rides in the path, not
      // a #fragment, because Gmail/Outlook link wrappers drop fragments. intake.js reads it,
      // signs in, and replaces the URL so the code leaves the address bar.
      { source: "/berdia/k/:code", destination: "https://berdia-trust.vercel.app/berdia/intake.html" },
      // Bare /berdia gets its own rule: this site strips trailing slashes, berdia-trust adds
      // one, and its redirect would send the visitor to berdia-trust.vercel.app.
      { source: "/berdia", destination: "https://berdia-trust.vercel.app/berdia/index.html" },
      { source: "/berdia/:path*", destination: "https://berdia-trust.vercel.app/berdia/:path*" },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      // Listed after the site-wide rule so its Referrer-Policy wins on invitation links.
      {
        source: "/berdia/k/:code",
        headers: [
          { key: "Cache-Control", value: "no-store, private" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
