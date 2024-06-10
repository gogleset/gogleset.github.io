"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import Tabs, { myDrawer3Close } from "./Tabs";
import DarkModeButton from "./DarkModeButton";

const changePreZIndexFromRNB = (zIndex: string = "0") => {
  const preElements = document.querySelectorAll('pre[class*="language-"]');
  preElements.forEach((item) => {
    const element = item as HTMLPreElement;
    element.style.zIndex = zIndex;
  });
};

const RNB = () => {
  const timerRef = useRef<NodeJS.Timeout>();
  const drawerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      changePreZIndexFromRNB("-999");
    } else {
      timerRef.current = setTimeout(changePreZIndexFromRNB, 500);
    }
  };

  useEffect(() => {
    // unmount시 해제
    return () => {
      console.log("unmount");
      clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <div className="drawer drawer-end lg:hidden">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        onChange={drawerChangeHandler}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className=" w-full p-0">
          <div className="lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        {/* Sidebar content here */}
        <div className="menu p-4 w-80 min-h-full bg-base-200 justify-between">
          <Tabs col />
          <div className="flex justify-between">
            {/* X button */}
            <svg
              onClick={myDrawer3Close}
              className="fill-current cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
            <DarkModeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RNB;
