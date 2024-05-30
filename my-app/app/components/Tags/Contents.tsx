"use client";
import React, { Suspense, useContext } from "react";
import { MDXContext } from "@/app/context/MdxContext";

const TagsContent = () => {
  // const { file, frontmatter, filteringFile, filteringTag } =
  //   useContext(MDXContext);

  return (
    <div className="w-full h-[90%] flex flex-wrap">
      {/* {tag.map((item, index) => {
          return (
            <span key={`${item}_${index}`} className="badge badge-accent">
              {item}
            </span>
          );
        })} */}
    </div>
  );
};

export default TagsContent;
