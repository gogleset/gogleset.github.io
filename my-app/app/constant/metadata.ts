import { SEOProps } from "../components/common/SEO";

/**
 * 메타데이터
 */
export default {
  title: "WEB2X Portal",
  siteName: "WEB2X Portal",
  description: "WEB2X Portal Description",
  keywords: "WEB2X",
  url: "https://www.web2x.com", // 임시
  //   googleVerification: "xxx", // 사이트를 등록하고 받은 검증 코드(구글)
  // naverVerification: "xxx", // 사이트를 등록하고 받은 검증 코드(네이버)
  og: {
    type: "website",
    title: "WEB2X Portal",
    description: "WEB2X Portal Description",
    url: "https://www.web2x.com",
    local: "ko_KR",
    image: {
      width: "1200",
      height: "600",
      content: "https://placehold.co/400",
    },
    twitter: {
      card: "twitter",
      title: "WEB2X Portal",
      description: "WEB2X Portal Description",
      image: "https://placehold.co/400",
    },
  },
} as SEOProps;
