import DarkModeButton from "../Header/DarkModeButton";
import SearchButton from "../Header/SearchButton";
import PATH from "@/app/constant/path";
import Link from "next/link";
import Tabs from "../Header/Tabs";
import RNB from "../Header/RNB";

const Header = async () => {
  return (
    <header className=" border-gray-200 px-4 lg:px-6 py-3.5  max-h-[68px]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex gap-3 items-center">
          <Link
            href={PATH.HOME}
            className="self-center text-xl font-semibold whitespace-nowrap  cursor-pointer">
            gogleset's note
          </Link>
          <div className="divider divider-horizontal w-2 max-lg:hidden" />
          <nav className="max-lg:hidden">
            <Tabs />
          </nav>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <SearchButton />
          <DarkModeButton />
          <RNB />
        </div>
      </div>
    </header>
  );
};

export default Header;
