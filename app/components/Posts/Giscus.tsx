"use client";

import { mode, theme } from "@/app/types/style";
import { getCookie } from "@/app/util/cookie";
import { useEffect, useRef, useState } from "react";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      //   initialize theme
      // const theme: mode = (getCookie("theme") as mode) || "light_protanopia";
      // console.log(`theme: ${theme}`);
      const HTML = document.querySelector("html");

      const theme =
        (HTML?.dataset.theme as theme) === "cupcake"
          ? "light_protanopia"
          : "noborder_dark";

      if (!ref.current || ref.current.hasChildNodes()) return;
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://giscus.app/client.js";
      scriptElem.async = true;
      scriptElem.crossOrigin = "anonymous";
      scriptElem.setAttribute("data-repo", "gogleset/gogleset.github.io");
      scriptElem.setAttribute("data-repo-id", "R_kgDOLbXQMQ");
      scriptElem.setAttribute("data-category", "Announcements");
      scriptElem.setAttribute("data-category-id", "DIC_kwDOLbXQMc4CgIZ0");
      scriptElem.setAttribute("data-mapping", "pathname");
      scriptElem.setAttribute("data-strict", "0");
      scriptElem.setAttribute("data-reactions-enabled", "1");
      scriptElem.setAttribute("data-emit-metadata", "0");
      scriptElem.setAttribute("data-input-position", "bottom");
      scriptElem.setAttribute("data-theme", theme);
      scriptElem.setAttribute("data-lang", "ko");
      scriptElem.setAttribute("data-loading", "lazy");
      ref.current.appendChild(scriptElem);
    },
    [
      //   theme
    ]
  );

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  //   useEffect(
  //     () => {
  //       const iframe = document.querySelector<HTMLIFrameElement>(
  //         "iframe.giscus-frame"
  //       );
  //       iframe?.contentWindow?.postMessage(
  //         // { giscus: { setConfig: { theme } } },
  //         "https://giscus.app"
  //       );
  //     },
  //     [
  //       //   theme
  //     ]
  //   );

  return <section ref={ref} />;
}
