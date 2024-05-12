import Head from "next/head";
import React, { ReactNode, memo, useState } from "react";

import Header from "@/components/header";
import styles from "@/styles/Layout.module.scss";
import { _clsx } from "@/utilities/common";

import SideBar from "../sidebar";

type LayoutProps = {
  children: ReactNode;
};

const DefaultLayout = memo(({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Head>
        <meta property="og:url" content="https://wedding-qn-tt.site" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta property="og:title" content="Save the date - Quốc Nhật & Thuỳ Trang - 26/05/2024" />
        <meta property="og:description" content="1 chiếc thiệp cưới của Quắc Tô và Thị Ngáo" />
        <meta property="og:image" content="https://ik.imagekit.io/ngquocnhat9317/save_the_date/thumbnail.jpg" />
      </Head>
      <div className="h-screen w-full relative overflow-hidden">
        <Header />
        <main className="w-full h-full md:h-[calc(100%-50px)]">{children}</main>
        <SideBar toggle={toggle} setToggle={setToggle} />
        <button
          type="button"
          className={_clsx(
            "absolute bottom-[65px] right-[15px] md:bottom-[15px]",
            "w-[35px] h-[35px]",
            "opacity-70 md:opacity-50 md:hover:opacity-70",
            styles.icon,
            styles.icon_play,
          )}
        />
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
