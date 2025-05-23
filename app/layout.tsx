import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import SearchModalEventListener from "./components/Wrapper/SearchModalEventListener";
import Layout from "./components/common/Layout";
import METADATA from "./constant/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  return (
    <html lang="ko" data-theme="cupcake">
      <body>
        <SearchModalEventListener>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </SearchModalEventListener>
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
      )}
    </html>
  );
}
