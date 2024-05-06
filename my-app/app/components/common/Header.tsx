import React from "react";
import DarkModeButton from "../Header/DarkModeButton";
import SearchButton from "../Header/SearchButton";
import PATH from "@/app/constant/path";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" border-gray-200 px-4 lg:px-6 py-3.5 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link
          href={PATH.HOME}
          className="self-center text-xl font-semibold whitespace-nowrap  cursor-pointer"
        >
          gogleset's note
        </Link>
        <div className="flex gap-3">
          <SearchButton />
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
