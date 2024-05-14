import { Suspense } from "react";
import PostCard from "./components/PostCard";
import PaginationButton from "./components/PaginationButton";

import path from "path";
import { myMdxs } from "./util/mdx";
import { readMdfiles } from "./util/file";
import Loading from "./components/common/Loading";

type HomePageProps = {
  searchParams: {
    page: number;
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const page = searchParams.page === undefined ? 1 : searchParams.page;
  const fileNames = await readMdfiles(path.join(process.cwd(), "app", "asset"));
  const filteringNumber = 8;
  const minResource = filteringNumber * (page - 1) + (page - 2);
  const maxResource = filteringNumber * page + (page - 2);
  const mdxs = (await myMdxs()).filter((item, index) => {
    if (page === 1) {
      if (index < filteringNumber) {
        return item;
      }
    } else {
      if (index >= minResource && index <= maxResource) {
        return <PostCard mdx={item} key={`${item}_${index}`} />;
      }
    }
  });

  const maxPage = Math.ceil(fileNames.length / filteringNumber);

  // 8, 16 | 17, 25 | 26, 34;
  return (
    <div className="flex flex-col gap-5 items-center justify-between max-lg:p-4 min-h-screen max-lg:min-h-sm ">
      <div className="max-w-3xl grid grid-cols-2 max-lg:grid-cols-1 gap-4 p-2 w-full  ">
        <Suspense fallback={<Loading />}>
          {mdxs.map((item, index) => {
            return <PostCard mdx={item} key={`${item}_${index}`} />;
          })}
        </Suspense>
      </div>

      <div className="max-w-3xl flex justify-center items-center mb-2 w-full ">
        <PaginationButton maxPage={maxPage} />
      </div>
    </div>
  );
}
