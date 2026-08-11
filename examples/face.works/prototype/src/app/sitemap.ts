import type { MetadataRoute } from "next";
import { protocolDocs } from "@/data/canon";

const origin = "https://face.works";

const routes = [
  "",
  "/field-notes",
  "/models",
  "/frameworks",
  "/cases",
  "/conversations",
  "/experiments",
  "/library",
  "/about",
  "/privacy",
  "/accessibility",
  "/protocol",
  "/proof",
  "/status",
  "/engage",
  "/field/index.html",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const protocolRoutes = protocolDocs.map((document) => `/protocol/${document.slug}`);

  return [...routes, ...protocolRoutes].map((route) => ({
    url: `${origin}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
