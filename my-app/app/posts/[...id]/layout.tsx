import Layout from "@/app/components/common/Layout";
import { Metadata } from "next";


export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
