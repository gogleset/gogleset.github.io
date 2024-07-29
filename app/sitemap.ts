import { BASE_URL } from "@/app/constant/path";
import { frontmatters } from "@/app/util/mdx";
import { MetadataRoute } from "next";
import type { Sitemap } from "./types/sitemaps";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicSitemap: Sitemap[] = (await frontmatters()).map(
    (frontmatter) => ({
      url: `${BASE_URL}/posts/${frontmatter.filename}`,
      lastModified: frontmatter.date,
      changeFrequency: frontmatter.sitemap.changefreq,
      priority: frontmatter.sitemap.priority,
    })
  );
  const staticSitemap: Sitemap[] = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: BASE_URL + "/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/tags",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  return staticSitemap.concat(dynamicSitemap);
}
