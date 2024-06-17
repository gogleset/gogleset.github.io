import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://gogleset.github.io";
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: url + "/post",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // {
    //   url: "https://acme.com/about",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
