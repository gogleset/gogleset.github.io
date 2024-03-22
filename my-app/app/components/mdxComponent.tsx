import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";

import { readFileSync } from "fs";
import path from "path";

const components = {
  h1: (props: any) => (
    <h1 {...props} className="dark:text-white">
      {props.children}
    </h1>
  ),
};

export default async function MdxComponent({ fileName }: { fileName: string }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const filePath = path.join(process.cwd(), "app", "asset", `${fileName}.md`);
  const res = await readFileSync(filePath);
  const bufferToText = await res.toString();
  const { content, frontmatter } = await compileMDX<{
    title: string;
    author: string;
    categories: string;
    tag: string[];
  }>({
    source: bufferToText,
    options: { parseFrontmatter: true },
  });
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="prose dark:prose-dark">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.author}</h2>
        <div className="flex items-center w-full">
          <span>Tag: </span>
          <span className="badge badge-accent">{frontmatter.categories}</span>
        </div>

        {content}
      </div>
    </Suspense>
  );

  // return <>{filePath}</>;
}
