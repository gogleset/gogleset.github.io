import { BASE_URL } from "@/app/constant/path";
import { readMdfiles } from "@/app/util/file";
import { frontmatters } from "@/app/util/mdx";
import { MetadataRoute } from "next";
import path from "path";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  const filePath = path.join(process.cwd(), "app", "asset");
  const mdFiles = (await readMdfiles(filePath)).map((item) =>
    item.replace(".md", "")
  );

  return mdFiles.map((files) => {
    return { id: files };
  });
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const frontmatter = await frontmatters();

  return frontmatter.map((frontmatter) => ({
    url: `${BASE_URL}/posts/${frontmatter.filename}`,
    lastModified: frontmatter.date,
  }));
}
