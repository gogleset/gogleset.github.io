import Content from "@/app/components/common/Content";
import { filteringTags, frontmatters } from "@/app/util/mdx";
import React from "react";

type tagsPageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const frontmatter = await frontmatters();
  const tags = filteringTags(frontmatter);
  return tags.map((tag) => {
    return { id: tag };
  });
}

const page = async ({ params }: tagsPageProps) => {
  const { id } = params;
  const mdFileList = await (
    await frontmatters()
  ).filter((item, index) => {
    return item.tag.includes(id);
  });
  const fileNumber = mdFileList.length;

  return <Content fileList={mdFileList} fileNumber={fileNumber} title={id} />;
};

export default page;
