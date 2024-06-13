"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentValueState, setPercentValue] = useState(0);
  const isPathPosts = usePathname().includes("/posts/");

  const getProgressPercent = () => {
    // 맨 처음부터 ~ 현재 화면에 보이는 부분까지의 길이가 scrollTop 이다. 글의 맨 처음 부터 얼마나 내려왔는지 현재 스크롤 위치
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      // 전체 글의 길이
      document.documentElement.scrollHeight -
      // 현재 화면에서 보이는 height
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    return setPercentValue(scrolled);
  };

  useEffect(() => {
    isPathPosts
      ? window.addEventListener("scroll", getProgressPercent)
      : window.removeEventListener("scroll", () => getProgressPercent);
  }, [isPathPosts]);
  return (
    <>
      {isPathPosts ? (
        <progress
          className="progress progress-primary w-full"
          value={percentValueState}
          max="100"></progress>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProgressBar;
