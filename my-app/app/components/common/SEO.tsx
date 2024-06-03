import Head from "next/head";
import React from "react";
import META from "../../constant/metadata";

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    image?: {
      content: string;
      width: string;
      height: string;
    };
    local?: string;
    twitter?: {
      card: string;
      title: string;
      description: string;
      image: string;
    };
  };
};

const SEO = ({
  title = META.title,
  description = META.description,
  keywords = META.keywords,
  og = META.og,
}: SEOProps) => {
  const OG = { ...META.og, ...og };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* OG */}
      <meta property="og:type" content={OG?.type} />
      <meta property="og:title" content={OG?.title} />
      <meta property="og:description" content={OG?.description} />
      <meta property="og:url" content={OG?.url} />
      <meta property="og:local" content={OG?.local} />
      {/* OG Image | 1200 x 630 크기 권장 & 8MB 용량 이하 권장 */}
      <meta property="og:image" content={OG?.image?.content} />
      <meta property="og:image:width" content={OG?.image?.width} />
      <meta property="og:image:height" content={OG?.image?.height} />
      {/* Twitter OG */}
      {/* 트위터 카드 타입(요약정보, 사진, 비디오) */}
      {OG?.twitter && (
        <>
          <meta name="twitter:card" content={OG?.twitter.card} />
          <meta name="twitter:title" content={OG?.twitter.title} />
          <meta name="twitter:description" content={OG?.twitter.description} />
          <meta name="twitter:image" content={OG?.twitter.image} />
        </>
      )}
    </Head>
  );
};

export default SEO;
