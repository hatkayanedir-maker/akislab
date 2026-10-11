import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://akislab.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://akislab.com/privacy",
      lastModified: new Date("2026-10-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://akislab.com/data-deletion",
      lastModified: new Date("2026-10-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
