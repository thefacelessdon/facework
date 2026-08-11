import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
// Reading Room type trio (self-hosted, CSP-safe; variable weight axis).
import "@fontsource-variable/literata/wght.css";
import "@fontsource-variable/schibsted-grotesk/wght.css";
import "@fontsource-variable/spline-sans-mono/wght.css";
import "./globals.css";
import "./reading-room.css";

// Publicly launched (0.0.33, 2026-08-10): indexing is ON by default. Set
// NEXT_PUBLIC_DISABLE_INDEX=true only for private preview environments.
const allowIndex = process.env.NEXT_PUBLIC_DISABLE_INDEX !== "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://face.works"),
  title: {
    default: "Facework — A public record of coherence",
    template: "%s — Facework",
  },
  description:
    "Facework develops theory, standards, and tools for coherence across identity, behavior, and infrastructure.",
  applicationName: "Facework",
  openGraph: {
    type: "website",
    siteName: "Facework",
    title: "Facework — A public record of coherence",
    description:
      "A living discipline for seeing, designing, and maintaining coherent systems.",
  },
  robots: { index: allowIndex, follow: allowIndex },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafaf8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        <div className="site-frame">
          <main id="main-content" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
