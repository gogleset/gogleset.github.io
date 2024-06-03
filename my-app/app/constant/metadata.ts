export type SEO = {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: {
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
/**
 * 메타데이터
 */
export default {
  title: "gogleset's note",
  siteName: "gogleset's note",
  description: "gogleset's blog & note",
  keywords: "gogleset",
  url: "https://gogleset.github.io", // 임시
  //   googleVerification: "xxx", // 사이트를 등록하고 받은 검증 코드(구글)
  // naverVerification: "xxx", // 사이트를 등록하고 받은 검증 코드(네이버)
  openGraph: {
    type: "website",
    title: "gogleset's note",
    description: "gogleset's blog & note",
    url: "https://gogleset.github.io",
    local: "ko_KR",
    image: {
      width: "1200",
      height: "600",
      content: "https://placehold.co/400",
    },
    twitter: {
      card: "twitter",
      title: "gogleset's note",
      description: "gogleset's blog & note",
      image: "https://placehold.co/400",
    },
  },
} as SEO;
