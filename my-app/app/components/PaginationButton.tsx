"use client";
import { useRouter } from "next/navigation";
type PagenationButtonProps = {
  page: number;
  nextButtonDisabled: boolean;
};

const PaginationButton = ({
  page,
  nextButtonDisabled,
}: PagenationButtonProps) => {
  const router = useRouter();
  const pageNumber = Number(page);

  const prevButtonOnClickHandler = () => {
    router.push(`/?page=${pageNumber - 1}`);
  };
  const nextButtonOnClickHandler = () => {
    router.push(`/?page=${pageNumber + 1}`);
  };
  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={page == 1}
        onClick={prevButtonOnClickHandler}>
        «
      </button>
      <button className="join-item btn">{page}</button>
      <button
        className="join-item btn"
        onClick={nextButtonOnClickHandler}
        disabled={nextButtonDisabled}>
        »
      </button>
    </div>
  );
};

export default PaginationButton;
