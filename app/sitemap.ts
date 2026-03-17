import type { MetadataRoute } from "next";
import { PAGE_ROUTES } from "@/lib/routes";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://timotyristorante.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = (
    Object.keys(PAGE_ROUTES) as Array<keyof typeof PAGE_ROUTES>
  ).map((pageId) => ({
    url: `${baseUrl}${PAGE_ROUTES[pageId].it}`,
    lastModified: new Date(),
    changeFrequency: (pageId === "home" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: pageId === "home" ? 1 : 0.8,
  }));

  return routes;
}
