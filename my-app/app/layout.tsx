import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { cookies } from "next/headers";
import SearchModalEventListener from "./components/Wrapper/SearchModalEventListener";
import Layout from "./components/common/Layout";
import METADATA from "./constant/metadata";
import Head from "next/head";

const { title, description, keywords, openGraph } = METADATA;

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph,
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    // other: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme");

  return (
    <html
      lang="ko"
      data-theme={
        theme === undefined
          ? "cupcake"
          : theme.value === "light"
          ? "cupcake"
          : "dracula"
      }>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <body>
        <SearchModalEventListener>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </SearchModalEventListener>
      </body>
    </html>
  );
}
