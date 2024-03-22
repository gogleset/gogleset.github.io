import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "fs";

export default async function mdxComponent({ filePath }: { filePath: string }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await readFileSync(filePath);
  const markdown = await res.toString();

  return <MDXRemote source={markdown} />;
}
