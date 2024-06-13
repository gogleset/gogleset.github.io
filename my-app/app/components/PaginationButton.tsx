"use client";
import { useRouter, useSearchParams } from "next/navigation";
type PagenationButtonProps = {
  maxPage: number;
};

const PaginationButton = ({ maxPage }: PagenationButtonProps) => {
  const router = useRouter();
  let pageParams = Number(useSearchParams().get("page")) || 1;
  let tag = useSearchParams().get("tag");
  if (pageParams === 0) {
    pageParams = 1;
  }
  const ButtonOnClickHandler = (page: number) => {
    if (tag) {
      router.push(`/?tag=${tag}&page=${page}`);
    } else {
      router.push(`/?page=${page}`);
    }
  };
  console.log(maxPage);
  return (
    <>
      {maxPage > 1 && (
        <div className="join">
          <button
            className="join-item btn"
            disabled={pageParams === 1}
            onClick={() => {
              ButtonOnClickHandler(pageParams - 1);
            }}>
            «
          </button>
          <button className="join-item btn">{pageParams}</button>
          <button
            className="join-item btn"
            disabled={maxPage === pageParams}
            onClick={() => {
              ButtonOnClickHandler(pageParams + 1);
            }}>
            »
          </button>
        </div>
      )}
    </>
  );
};

export default PaginationButton;
