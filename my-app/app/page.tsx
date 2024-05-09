import { Suspense } from "react";
import PostCard from "./components/PostCard";
import PaginationButton from "./components/PaginationButton";

import path from "path";
import { createMDXs } from "./util/mdx";
import { readMdFilesAsBuffers, readMdfiles } from "./util/file";

type HomePageProps = {
  searchParams: {
    page: number;
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  let { page } = searchParams;
  if (page === undefined) {
    page = 1;
  }
  const filePath = path.join(process.cwd(), "app", "asset");
  const fileNames = await readMdfiles(filePath);
  const filteringNumber = 8;

  const files = await readMdFilesAsBuffers(filePath);
  const minResource = filteringNumber * (page - 1) + (page - 2);
  const maxResource = filteringNumber * page + (page - 2);
  const mdxs = (await createMDXs(files)).filter((item, index) => {
    if (page === 1) {
      if (index < filteringNumber) {
        return item;
      }
    } else {
      if (index >= minResource && index <= maxResource) {
        return (
          <PostCard
            mdx={item}
            fileName={fileNames[index]}
            key={`${item}_${index}`}
          />
        );
      }
    }
  });

  const maxPage = Math.ceil(fileNames.length / filteringNumber);

  // console.log(minResource, maxResource);
  // 8, 16 | 17, 25 | 26, 34;
  return (
    <div className="flex flex-col gap-5 items-center justify-between max-lg:p-4 min-h-screen max-lg:min-h-sm border border-white">
      <div className="max-w-3xl grid grid-cols-2 max-lg:grid-cols-1 gap-2 p-2 w-full border-white border">
        <Suspense fallback={<>loading...</>}>
          {mdxs.map((item, index) => {
            return (
              <PostCard
                mdx={item}
                fileName={fileNames[index]}
                key={`${item}_${index}`}
              />
            );
          })}
        </Suspense>
      </div>

      <div className="max-w-3xl flex justify-center items-center mb-2 w-full border-white border">
        <PaginationButton maxPage={maxPage} />
      </div>
    </div>
  );
}
