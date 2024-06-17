import { CompileMDXResult } from "next-mdx-remote/rsc";
import Giscus from "./Giscus";

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
    <div className="flex flex-col prose max-w-full max-sm:prose-sm">
      {content}
    </div>
  );

  // return <>{filePath}</>;
}
