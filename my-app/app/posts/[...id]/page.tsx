import { Metadata, ResolvingMetadata } from "next";

import { convertSpaceToHyphen } from "@/app/util/string";

import PostContents from "@/app/components/Posts/Content";
import PostTitle from "@/app/components/Posts/Title";
import { myMdx } from "@/app/util/mdx";
import Image from "next/image";

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
    // title: product.title,
    description: frontmatter.description,
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

const postPage = async ({ params }: PostPageProps) => {
  const { id } = params;
  const mdx = await myMdx(id, components);

  return (
    <>
      <PostTitle mdx={mdx} />
      <div className="flex max-lg:flex-col">
        {/* <PostSummary mdx={mdx} /> */}
        <PostContents mdx={mdx} />
      </div>
      <hr />
    </>
  );
};

export default postPage;
