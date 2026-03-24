import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PrimitivesBar } from "@/components/PrimitivesBar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-berkeley",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Facework — A Coherence Practice for Building Things",
  description:
    "An open protocol for turning cultural signal into coherent, ownable business systems for creators and cultural brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <PrimitivesBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
