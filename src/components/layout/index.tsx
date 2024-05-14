import Head from "next/head";
import React, { ReactNode, memo, useState } from "react";

import MusicBox from "@/components/atomic/MusicBox";
import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import styles from "@/styles/Layout.module.scss";
import { _clsx } from "@/utilities/common";

type LayoutProps = {
  children: ReactNode;
};

const DefaultLayout = memo(({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Head>
        <meta property="og:url" content="https://wedding-qn-tt.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta property="og:description" content="Đây là 1 chiếc thiệp cưới của Quắc Tô và Thị Ngáo" />
        <meta property="og:site_name" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/ngquocnhat9317/tr:q-80,w-1200,h-630,cm-pad_resize,bg-blurred/save_the_date/thumbnail.jpg"
        />
        <meta name="description" content="Đây là 1 chiếc thiệp cưới của Quắc Tô và Thị Ngáo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />

        <title>Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024</title>
      </Head>
      <div className="h-svh w-full relative overflow-hidden">
        <Header />
        <main className="w-full h-full md:h-[calc(100%-50px)]">{children}</main>
        <SideBar toggle={toggle} setToggle={setToggle} />
        <MusicBox />
        <button
          type="button"
          className={_clsx(
            "absolute bottom-[15px] right-[15px] md:hidden",
            "w-[35px] h-[35px]",
            "opacity-70 md:opacity-50 md:hover:opacity-70",
            styles.icon,
            styles.icon_burger,
          )}
          onClick={() => setToggle(true)}
        />
      </div>
    </React.Fragment>
  );
});

DefaultLayout.displayName = "DefaultLayout";

export default DefaultLayout;
