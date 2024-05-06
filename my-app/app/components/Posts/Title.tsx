import React from "react";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "./Content";
import { extractDate } from "@/app/util/string";

type PostTitleProps<T> = {
  mdx: CompileMDXResult<T>;
  // Add additional props specific to your component
};

const PostTitle = ({ mdx }: PostTitleProps<Frontmatter>) => {
  const { frontmatter } = mdx;
  return (
    <>
      <div className="flex flex-col items-center justify-center h-64 p-5 gap-3">
        <h1 className="text-3xl max-lg:text-2xl font-bold ">
          {frontmatter.title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-gray">{extractDate(frontmatter.date)}</span>
          <span className="badge badge-accent">{frontmatter.categories}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default PostTitle;
