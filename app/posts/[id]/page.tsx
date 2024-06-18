import { Metadata, ResolvingMetadata } from "next";

import { convertSpaceToHyphen } from "@/app/util/string";

import PostContents from "@/app/components/Posts/Content";
import PostTitle from "@/app/components/Posts/Title";
import { myMdx } from "@/app/util/mdx";
import Image from "next/image";
import Giscus from "@/app/components/Posts/Giscus";
import { readMdfiles } from "@/app/util/file";
import path from "path";

type PostPageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 동적 메타데이터 할당
export async function generateMetadata(
  { params, searchParams }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = params;
  const { frontmatter } = await myMdx(id);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: `gogleset,${frontmatter.tag.map((tag) => tag)}`,
    openGraph: {
      title: frontmatter.title,
      // images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

const components = {
  h1: (props: any) => {
    return <h1 id={convertSpaceToHyphen(props.children)}>{props.children}</h1>;
  },
  h2: (props: any) => {
    return <h2 id={convertSpaceToHyphen(props.children)}>{props.children}</h2>;
  },
  h3: (props: any) => {
    return <h3 id={convertSpaceToHyphen(props.children)}>{props.children}</h3>;
  },
  img: (props: any) => {
    return (
      <span className="flex items-center justify-center">
        <Image
          src={props.src}
          alt={props.alt}
          width="300"
          height="300"
          quality={10}
        />
      </span>
    );
  },
};

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "app", "asset");
  const mdFiles = (await readMdfiles(filePath)).map((item) =>
    item.replace(".md", "")
  );

  return mdFiles.map((files) => {
    return { id: files };
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const mdx = await myMdx(id, components);

  return (
    <>
      <PostTitle mdx={mdx} />
      {/* <PostSummary mdx={mdx} /> */}
      <PostContents mdx={mdx} />
      <hr className="my-10" />
      <Giscus />
    </>
  );
}
