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
  const files = await readMdFilesAsBuffers(filePath);
  const mdxs = (await createMDXs(files)).filter((item, index) => {
    // pagenation 구현(8개씩 표현)
    const min = (page - 1) * 8 - 1 < 0 ? 0 : (page - 1) * 8 - 1;
    const max = page * 8 - 1;
    if (index >= min && index <= max) {
      return item;
    }
  });

  console.log(Math.ceil(fileNames.length / 8));

  return (
    <div className="flex flex-col items-center justify-between max-lg:p-4 min-h-screen max-lg:min-h-sm border border-white">
      <div className="max-w-3xl grid grid-cols-2 max-lg:grid-cols-1 gap-2 p-2 w-full border-white border">
        <Suspense fallback={<>loading...</>}>
          {mdxs.map((item, index) => {
            console.log(item);
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

      <div className="max-w-3xl flex justify-center items-center  w-full border-white border">
        <PaginationButton page={page} nextButtonDisabled={mdxs.length < 7} />
      </div>
    </div>
  );
}
