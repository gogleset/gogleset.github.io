import { frontmatters } from "@/app/util/mdx";
import SearchModal from "../common/SearchModal";
import { openModal } from "../Wrapper/SearchModalEventListener";

const SearchButton = async () => {
  const frontmatterList = await frontmatters();

  return (
    <>
      {/* size: lg */}
      <label className="border border-2 p-2 flex items-center justify-around gap-2 rounded-3xl bg-current text-center max-lg:hidden">
        <button onClick={openModal} />
        <p className="text-gray-400 text-opacity-75 text-sm">Search...</p>
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      {/* size: max-lg */}
      <label className=" hidden max-lg:flex h-[40px]  items-center justify-center ">
        <button onClick={openModal} />
        <svg
          className="pointer-events-none stroke-current  text-base-content"
          width="33"
          height="33"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </label>
      <SearchModal frontmatterList={frontmatterList} />
    </>
  );
};

export default SearchButton;
