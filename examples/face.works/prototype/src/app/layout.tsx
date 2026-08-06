import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "@fontsource-variable/public-sans";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

// Private preview: noindex by default. Set NEXT_PUBLIC_ALLOW_INDEX=true to
// allow indexing once the site is cleared for public release.
const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://face.works"),
  title: {
    default: "Facework — A public record of attention",
    template: "%s — Facework",
  },
  description:
    "Facework develops theory, standards, and tools for coherence across identity, behavior, and infrastructure.",
  applicationName: "Facework",
  openGraph: {
    type: "website",
    siteName: "Facework",
    title: "Facework — A public record of attention",
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
