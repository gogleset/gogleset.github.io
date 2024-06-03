import { compileMDX } from "next-mdx-remote/rsc";
import { Frontmatter } from "../components/Posts/Content";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypePrism from "rehype-prism-plus";
import { MDXComponents } from "mdx/types";
import path from "path";
import { readMdFilesAsBuffers } from "./file";
import { readFileSync } from "fs";

export const createMDX = async (file: Buffer, components?: MDXComponents) => {
  return await compileMDX<Frontmatter>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypePrism],
      },
    },
    components: components ? components : null,
  });
};

export const createMDXs = async (
  files: Buffer[],
  components?: MDXComponents
) => {
  return await Promise.all(
    files.map(async (file) => {
      return await createMDX(file, components);
    })
  );
};

export const myMdx = async (fileName: string, components?: MDXComponents) => {
  const filePath = path.join(process.cwd(), "app", "asset", `${fileName}.md`);
  const file = readFileSync(filePath);
  return await createMDX(file, components);
};

export const myMdxs = async (components?: MDXComponents) => {
  const filePath = path.join(process.cwd(), "app", "asset");
  const files = await readMdFilesAsBuffers(filePath);
  return await createMDXs(files, components);
};

export const frontmatters = async () => {
  return (await myMdxs()).map((item) => {
    return item.frontmatter;
  });
};
export const filteringTags = (frontmatter: Frontmatter[]) => {
  const filter = frontmatter
    .map((item) => {
      return item.tag;
    })
    .flat();
  return Array.from(new Set(filter));
};
