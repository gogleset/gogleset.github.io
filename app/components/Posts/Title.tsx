import React from "react";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "./Content";
import { extractDate } from "@/app/util/string";

type Props<T> = {
  mdx: CompileMDXResult<T>;
  // Add additional props specific to your component
};

const PostTitle = ({ mdx }: Props<Frontmatter>) => {
  const { frontmatter } = mdx;
  return (
    <>
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <h1 className="text-3xl max-lg:text-2xl font-bold text-center">
          {frontmatter.title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-gray">{extractDate(frontmatter.date)}</span>
          <div className="flex gap-1 ">
            {frontmatter.tag.map((item, index) => {
              const key = `${item}_${index}`;
              return (
                <span key={key} className="badge badge-accent">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="mb-[100px]" />
    </>
  );
};

export default PostTitle;
