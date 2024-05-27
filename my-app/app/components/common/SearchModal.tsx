"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { Frontmatter } from "../Posts/Content";
import Link from "next/link";

type SearchModalProps = {
  frontmatter: Frontmatter[];
};

const SearchModal = ({ frontmatter }: SearchModalProps) => {
  const [inputState, setInputState] = useState<string>("");

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const closeButtonOnClickHandler = () => {
    setInputState("");
  };
  const badgeOnClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const { value } = event.currentTarget.dataset;
    if (value) setInputState(value);
  };
  const filteringFile = useCallback(() => {
    if (inputState.length > 1) {
      return frontmatter.filter((item) => {
        return item.title.includes(inputState) || item.tag.includes(inputState);
      });
    }
    return [];
  }, [inputState]);
  const filteringTag = useCallback(() => {
    const filter = frontmatter
      .map((item) => {
        return item.tag;
      })
      .flat();
    return Array.from(new Set(filter));
  }, []);
  const filter = filteringFile();
  const tags = filteringTag();

  return (
    <dialog id="my_modal_3" className="modal flex flex-col pt-28 gap-3 ">
      <div className="modal-box pt-7 pb-6">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
            onClick={closeButtonOnClickHandler}>
            ✕
          </button>
        </form>
        <label className="input input-bordered flex items-center gap-2">
          <input
            value={inputState}
            type="text"
            className="grow"
            placeholder="Search"
            onChange={inputOnChangeHandler}
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className="flex gap-2 items-center mt-3">
          {/* <span>tags : </span> */}
          <ul className="flex gap-2 items-center w-full overflow-x-scroll scrollbar-hide">
            {tags.map((item, index) => {
              console.log(item);

              //  <span key={key} className="badge badge-accent">
              //    {item}
              //  </span>;
              return (
                <li
                  className="badge badge-accent cursor-pointer"
                  key={`${item}_${index}`}
                  data-value={`${item}`}
                  onClick={badgeOnClickHandler}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ul
        tabIndex={0}
        className={`dropdown-content 
        transition-all
        ${
          filter.length > 0 ? "visible opacity-100" : "invisible opacity-0"
        }  z-[1] menu p-3 shadow bg-base-100 rounded-box w-[91.666667%] max-w-[32rem] max-h-72 flex-nowrap overflow-scroll`}>
        {filter.map((item, index) => {
          return (
            <li key={`${item}_${index}`}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </dialog>
  );
};

export default SearchModal;
