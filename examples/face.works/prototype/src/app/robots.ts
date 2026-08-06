import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Private preview: noindex by default. Set NEXT_PUBLIC_ALLOW_INDEX=true to
  // allow indexing once the site is cleared for public release.
  const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";
  return {
    rules: allowIndex
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: "https://face.works/sitemap.xml",
    host: "https://face.works",
  };
}
