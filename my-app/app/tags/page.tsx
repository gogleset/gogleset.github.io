import React from "react";
import { myMdxs } from "../util/mdx";

const page = async () => {
  const frontmatter = (await myMdxs()).map((item) => {
    return item.frontmatter;
  });
  console.log(frontmatter);
  return <div>tags</div>;
};

export default page;
