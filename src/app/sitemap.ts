import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/industries", "/technologies", "/portfolio", "/careers", "/contact", "/privacy-policy", "/terms"];
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
