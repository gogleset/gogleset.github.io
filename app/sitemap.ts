import { MetadataRoute } from "next";
import { BASE_URL } from "./constant/path";
import path from "path";
import { readMdfiles } from "./util/file";

// export async function generateSitemaps() {
//   // Fetch the total number of products and calculate the number of sitemaps needed
//   const filePath = path.join(process.cwd(), "app", "asset");
//   const mdFiles = (await readMdfiles(filePath)).map((item) =>
//     item.replace(".md", "")
//   );

//   return mdFiles.map((files) => {
//     return { id: files };
//   });
// }

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
      priority: 0.6,
    },
  ];
}
