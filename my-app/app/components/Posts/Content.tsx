import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import Loading from "../common/Loading";

type PostContentProps<T> = {
  mdx: CompileMDXResult<T>;
  // Add additional props specific to your component
};

export type Frontmatter = {
  title: string;
  author: string;
  categories: string;
  description: string;
  date: string;
  tag: string[];
  path: string;
};
export default function PostContent({ mdx }: PostContentProps<Frontmatter>) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const { content } = mdx;
  return (
    <Suspense fallback={<Loading />}>
      <div className="prose w-full max-sm:prose-sm">{content}</div>
    </Suspense>
  );

  // return <>{filePath}</>;
}
