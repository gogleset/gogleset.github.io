import React from "react";
import Card from "./Card";

type PostCardProps = {
  title: string;
  description: string;
  tag: string;
};

const PostCard = ({ title, description, tag }: PostCardProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="font-bold text-2xl">asd</h1>
          <span className="badge badge-accent">asd</span>
        </div>
        <p className="text-xl text-gray-400">asd</p>
      </div>
    </Card>
  );
};

export default PostCard;
