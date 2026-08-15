import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hakkimizda", "/iletisim", "/gizlilik"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "hourly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
