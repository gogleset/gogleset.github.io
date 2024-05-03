import React from "react";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "./Content";
import { extractDate } from "@/app/util/string";

type Props<T> = {
  mdx: CompileMDXResult<T>;
  // Add additional props specific to your component
};

const PostSummary = ({ mdx }: Props<Frontmatter>) => {
  const { content } = mdx;

  return (
    <aside className="w-[280px] max-lg:h-36 max-lg:w-full border-pink-400 border">
      {/* <div className="w-full h-52 bg-black">{content}</div> */}
    </aside>
  );
};

export default PostSummary;
