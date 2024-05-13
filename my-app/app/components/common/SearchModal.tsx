"use client";

import { ChangeEvent, useState } from "react";
import { Frontmatter } from "../Posts/Content";

type SearchModalProps = {
  mdx: Frontmatter[];
};

const SearchModal = ({ mdx }: SearchModalProps) => {
  console.log(mdx);
  const [inputState, setInputState] = useState<string>("");

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const closeButtonOnClickHandler = () => {
    setInputState("");
  };
  console.log(inputState);
  return (
    <dialog id="my_modal_3" className="modal flex flex-col pt-28 gap-3">
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
      </div>

      {inputState && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[32rem]">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      )}
    </dialog>
  );
};

export default SearchModal;
