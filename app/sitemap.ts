import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kurlar", "/hakkimizda", "/iletisim"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/kurlar" ? "hourly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
