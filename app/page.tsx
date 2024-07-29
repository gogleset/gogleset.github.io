import Content from "./components/common/Content";
import PostCard from "./components/PostCard";
import { frontmatters } from "./util/mdx";
export const dynamic = "force-static";

import React from "react";

const page = async () => {
  const mdFileList = await (
    await frontmatters()
  ).filter((item, index) => {
    return item;
  });

  const fileNumber = mdFileList.length;

  return (
    <Content fileList={mdFileList} fileNumber={fileNumber} title={"Posts"} />
  );
};

export default page;
