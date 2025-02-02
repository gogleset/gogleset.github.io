import React from "react";
import PostCard from "../PostCard";
import { Frontmatter } from "../Posts/Content";

type contentType = {
  title: string;
  fileList: Frontmatter[];
  fileNumber: number;
};

const Content = ({ title, fileNumber, fileList }: contentType) => {
  const sortRecentFileList = fileList.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return (
    <div className="flex flex-col gap-5 items-center min-h-screen max-lg:min-h-sm w-full">
      {/* heading */}
      <div className="w-full flex items-end gap-2">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="font-semibold text-xl">{fileNumber}</p>
      </div>
      {/* posting */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full">
        {sortRecentFileList.map((item, index) => {
          const key = `${JSON.stringify(item.title)}_${index}`;
          return <PostCard frontmatter={item} key={key} />;
        })}
      </div>
      {/* pagination */}
      {/* <div className="max-w-3xl flex justify-center items-center mb-2 flex-wrap">
        <PaginationButton maxPage={maxPage} />
      </div> */}
    </div>
  );
};

export default Content;
