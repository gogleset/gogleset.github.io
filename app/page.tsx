import PostCard from "./components/PostCard";

import { frontmatters } from "./util/mdx";
export const dynamic = "force-static";

export default async function HomePage() {
  const mdFileList = await (
    await frontmatters()
  ).filter((item, index) => {
    return item;
  });

  const fileNumber = mdFileList.length;

  return (
    <div className="flex flex-col gap-5 items-center min-h-screen max-lg:min-h-sm max-w-3xl w-full">
      {/* heading */}
      <div className="w-full flex items-end gap-2">
        <h1 className="font-semibold text-2xl">{"Posts"}</h1>
        <p className="font-semibold text-xl">{fileNumber}</p>
      </div>
      {/* posting */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full">
        {mdFileList.map((item, index) => {
          // console.log(item.frontmatter.tag);
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
}
