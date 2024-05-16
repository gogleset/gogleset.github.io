"use client";
import React, { ChangeEvent } from "react";
import Tabs from "./Tabs";

const Menu = () => {
  const drawerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
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
          className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}

          <Tabs col />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
