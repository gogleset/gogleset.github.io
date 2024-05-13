import { compileMDX } from "next-mdx-remote/rsc";
import { Frontmatter } from "../components/Posts/Content";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { MDXComponents } from "mdx/types";
import path from "path";
import { readMdFilesAsBuffers, readMdfiles } from "./file";

export const createMDX = async (file: Buffer, components?: MDXComponents) => {
  return await compileMDX<Frontmatter>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
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

export const myMdxs = async (components?: MDXComponents) => {
  const filePath = path.join(process.cwd(), "app", "asset");
  const files = await readMdFilesAsBuffers(filePath);
  return await createMDXs(files, components);
};
