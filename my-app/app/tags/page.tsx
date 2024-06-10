import React from "react";
import { filteringTags, frontmatters } from "../util/mdx";
import { getRandomConstant } from "../util/number";
import Link from "next/link";

const randomBadgeList = [
  "badge-outline",
  "badge-neutral",
  "badge-error",
  "badge-warning",
  "badge-accent",
  "badge-success",
  "badge-info",
  "badge-ghost",
  "badge-secondary",
  "badge-primary",
];

const page = async () => {
  const frontmatter = await frontmatters();
  const tags = filteringTags(frontmatter);

  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <div className="flex gap-4 flex-wrap">
        {tags.map((item, index) => {
          const randomNumber = getRandomConstant(randomBadgeList.length - 1);

          return (
            <p
              key={`${item}_${index}`}
              className={`badge badge-lg cursor-pointer font-semibold ${randomBadgeList[randomNumber]}`}>
              <Link href={`/?tag=${item}`}>{item}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default page;
