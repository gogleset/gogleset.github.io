import React from "react";
// export const dynamic = "force-static";

const page = () => {
  return (
    <div className="flex flex-col max-lg:py-5 max-lg:min-h-sm max-w-3xl w-full max-lg:px-10 z-[-999] min-h-screen gap-4 items-center">
      <div className="avatar ">
        <div className="w-24 rounded">
          <img src="/avatar.png" />
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex">
          <p className="font-serif  font-bold"></p>
        </div>
        <div className="flex gap-3">
          <div className="badge badge-neutral">Javascript</div>
          <div className="badge badge-primary">Node.js</div>
          <div className="badge badge-secondary">Typescript</div>
          <div className="badge badge-accent">React</div>
          <div className="badge badge-ghost">Next.js</div>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2023.07 ~ 2023.10</time>
            <div className="text-lg font-black">CoinPlug inc. 인턴십</div>
            <p>1. Next.js (App route) 관리자 페이지 구축 </p>
            <p>2. EIP-4361을 기반 SIWE 지갑 로그인 구현</p>
            <p>3. React 15 ver. Class Component 유지보수</p>
            <p>4. Next.js(App route) 팀 교육 자료 배포</p>
            <p>5. React 기본 팀 내 교육 자료 배포</p>
          </div>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023.10 ~ 재직중</time>
            <div className="text-lg font-black">CPLABS inc. 프로</div>
            {/* <p>1. Next.js (App route) 관리자 페이지 구축 </p>
            <p>2. EIP-4361을 기반 SIWE 지갑 로그인 구현</p>
            <p>3. React 15 ver. Class Component 유지보수</p>
            <p>4. Next.js(App route) 팀 교육 자료 배포</p>
            <p>5. React 기본 팀 내 교육 자료 배포</p> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default page;
