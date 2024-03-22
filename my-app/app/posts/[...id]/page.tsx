import MdxComponent from "@/app/components/MdxComponent";
import React from "react";

const postPage = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return <MdxComponent fileName={params.id} />;
};

export default postPage;
