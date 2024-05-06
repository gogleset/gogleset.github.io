import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Suspense } from "react";

type Props<T> = {
  mdx: CompileMDXResult<T>;
  // Add additional props specific to your component
};

export type Frontmatter = {
  title: string;
  author: string;
  categories: string;
  date: string;
  tag: string[];
};
export default function PostContent({ mdx }: Props<Frontmatter>) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const { content } = mdx;
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="prose dark:prose-dark max-lg:prose-sm p-10 w-full max-w-full">
        {content}
      </div>
    </Suspense>
  );

  // return <>{filePath}</>;
}
