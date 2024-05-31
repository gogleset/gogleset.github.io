import PostCard from "./components/PostCard";
import PaginationButton from "./components/PaginationButton";

import path from "path";
import { frontmatters } from "./util/mdx";
import { readMdfiles } from "./util/file";

type HomePageProps = {
  searchParams: {
    page: number;
    tag: string;
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const page = searchParams.page === undefined ? 1 : searchParams.page;
  const tag = searchParams?.tag;
  console.log(tag);
  const fileNames = await readMdfiles(path.join(process.cwd(), "app", "asset"));
  const fileNumber = fileNames.length;
  const filteringNumber = 8;
  const minResource = filteringNumber * (page - 1) + (page - 2);
  const maxResource = filteringNumber * page + (page - 2);
  const frontmatter = (await frontmatters()).filter((item, index) => {
    if (page === 1) {
      if (index < filteringNumber) {
        return item;
      }
    } else {
      if (index >= minResource && index <= maxResource) {
        return item;
      }
    }
  });

  const maxPage = Math.ceil(fileNumber / filteringNumber);

  // 8, 16 | 17, 25 | 26, 34;
  return (
    <div className="flex flex-col gap-5 items-center min-h-screen max-lg:min-h-sm max-w-3xl max-lg:px-4">
      {/* heading */}
      <div className="w-full flex items-end gap-2">
        <h1 className="font-semibold text-2xl">
          {tag ? `Tag - ${tag}` : "Posts"}
        </h1>
        <p className="font-semibold text-xl">{fileNumber}</p>
      </div>
      {/* posting */}
      <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full">
        {frontmatter.map((item, index) => {
          // console.log(item.frontmatter.tag);
          const key = `${JSON.stringify(item.title)}_${index}`;
          return <PostCard frontmatter={item} key={key} />;
        })}
      </div>
      {/* pagination */}
      <div className="max-w-3xl flex justify-center items-center mb-2 w-full ">
        <PaginationButton maxPage={maxPage} />
      </div>
    </div>
  );
}
