"use client";
import React from "react";
import Card, { CardKey } from "./Wrapper/Card";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "./Posts/Content";
import { useRouter } from "next/navigation";

type PostCardProps = {
  frontmatter: Frontmatter;
  key: CardKey;
  // Add additional props specific to your component
};

const PostCard = ({ frontmatter, key }: PostCardProps) => {
  const router = useRouter();
  console.log(frontmatter);
  // console.log(key, mdx);
  const CardOnClickHandler = () => {
    router.push(frontmatter.path);
  };
  return (
    <Card key={key} onClick={CardOnClickHandler} style={{ cursor: "pointer" }}>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <div className="w-5/6 text-center">
            <h1 className="font-bold text-2xl overflow-hidden whitespace-nowrap text-ellipsis break-all">
              {frontmatter.title}
            </h1>
          </div>
          <div className="flex gap-1 ">
            {frontmatter.tag.map((item, index) => {
              const key = `${item}_${index}`;
              return (
                <span key={key} className="badge badge-accent">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <p className="w-11/12 text-sm line-clamp-4 text-current ">
          {frontmatter.description}
        </p>
      </div>
    </Card>
  );
};

export default PostCard;
