import { BASE_URL } from "@/app/constant/path";
import { frontmatters } from "@/app/util/mdx";
import { MetadataRoute } from "next";
import type { Sitemap } from "./types/sitemaps";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicSitemap: Sitemap[] = (await frontmatters()).map(
    /**
   * 
   * @param frontmatter ---
title: ""
description: ""
date: ""
tag: []
filename: ""
sitemap:
  changefreq: # 페이지 업데이트 빈도
  priority: # 검색엔진 우선순위 (0.0 ~ 1.0)
---
   */
    (frontmatter) => {
      console.log(frontmatter);
      return {
        url: `${BASE_URL}/posts/${frontmatter.filename}`,
        lastModified: frontmatter.date,
        changeFrequency: frontmatter.sitemap.changefreq,
        priority: frontmatter.sitemap.priority,
      };
    }
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
