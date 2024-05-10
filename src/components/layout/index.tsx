import Head from "next/head";
import React, { ReactNode, memo } from "react";

import Header from "@/components/header";

type LayoutProps = {
  children: ReactNode;
};

const DefaultLayout = memo(({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta property="og:url" content="https://ngquocnhat9317.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta property="og:title" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta property="og:description" content="1 chiếc thiệp cưới của Quắc Tô và Thị Ngáo" />
        <meta property="og:image" content="https://ik.imagekit.io/ngquocnhat9317/save_the_date/thumbnail.jpg" />
      </Head>
      <div className="h-screen w-full relative">
        <Header />
        <main className="w-full h-full md:h-[calc(100%-50px)]">{children}</main>
      </div>
    </React.Fragment>
  );
});

DefaultLayout.displayName = "DefaultLayout";

export default DefaultLayout;
