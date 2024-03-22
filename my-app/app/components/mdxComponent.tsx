import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "fs";
import path from "path";

export default async function mdxComponent({ fileName }: { fileName: string }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const filePath = path.join(process.cwd(), "app", "asset", `${fileName}.md`);
  const res = await readFileSync(filePath);
  const markdown = await res.toString();

  return <MDXRemote source={markdown} />;
  // return <>{filePath}</>;
}
