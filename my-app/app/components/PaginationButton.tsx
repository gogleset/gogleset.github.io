"use client";
import { useRouter, useSearchParams } from "next/navigation";
type PagenationButtonProps = {
  maxPage: number;
};

const PaginationButton = ({ maxPage }: PagenationButtonProps) => {
  const router = useRouter();
  let pageParams = Number(useSearchParams().get("page"));
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

  return (
    <div className="join">
      {[...Array(maxPage)].map((_, index) => {
        const page = index + 1;
        return (
          <input
            key={`pagination_button_${page}`}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={`${page}`}
            defaultChecked={page === pageParams}
            onClick={() => {
              return ButtonOnClickHandler(page);
            }}
          />
        );
      })}
    </div>
  );
};

export default PaginationButton;
