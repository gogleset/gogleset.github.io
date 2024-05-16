import Link from "next/link";
import React from "react";
type TabsProps = {
  col?: boolean;
};

const Tabs = ({ col }: TabsProps) => {
  return (
    <ul className={`flex ${col ? "flex-col" : ""} gap-3`}>
      <li className="self-center text-lg font-semibold whitespace-nowrap  cursor-pointer ">
        <Link href="/tags">Tags</Link>
      </li>
      <li className="self-center text-lg font-semibold whitespace-nowrap  cursor-pointer">
        <Link href="/categories">Categories</Link>
      </li>
      <li className="self-center text-lg font-semibold whitespace-nowrap  cursor-pointer">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Tabs;
