import DarkModeButton from "../Header/DarkModeButton";
import PATH from "@/app/constant/path";
import Link from "next/link";
import Tabs from "../Header/Tabs";
import RNB from "../Header/RNB";

import ProgressBar from "../Header/ProgressBar";

const Header = () => {
  return (
    <header className=" border-gray-200 px-4 lg:px-6 py-3.5  max-h-[68px] w-full sticky top-0 backdrop-blur-[10px]">
      <div className="flex flex-wrap justify-between items-center ">
        <div className="flex gap-3 items-center">
          <Link
            href={PATH.HOME}
            className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer"
          >
            gogleset's note
          </Link>
          <div className="divider divider-horizontal w-2 max-lg:hidden" />

          <nav className="max-lg:hidden">
            <Tabs />
          </nav>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {/* <SearchButton /> */}

          <div className="flex max-lg:hidden">
            <DarkModeButton />
          </div>
          <RNB />
        </div>
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
