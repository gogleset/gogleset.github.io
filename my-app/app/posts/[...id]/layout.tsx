import Layout from "@/app/components/common/Layout";
import { Metadata } from "next";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="flex flex-col w-full max-sm:w-[70%] p-5">{children}</div>
    </Layout>
  );
}
