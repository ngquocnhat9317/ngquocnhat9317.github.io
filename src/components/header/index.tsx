import { memo, useCallback } from "react";

import { CabinText } from "@/fonts";
import styles from "@/styles/Header.module.scss";
import { _clsx } from "@/utilities/common";

const Header = memo(() => {
  const handleScroll = useCallback(
    (id: string) => () => {
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
      });
    },
    [],
  );

  return (
    <header className={_clsx("w-full hidden h-[50px] md:flex justify-center", styles.header)}>
      <nav className="w-[calc(100%-40px)] lg:w-[calc(80%-40px)] flex justify-between items-center">
        <h1 className={_clsx(styles.text, CabinText.className, "text-[18px]")} onClick={handleScroll("section_one")}>
          Home
        </h1>
        <h1 className={_clsx(styles.text, CabinText.className, "text-[18px]")} onClick={handleScroll("section_two")}>
          Story of Us
        </h1>
        <h1 className={_clsx(styles.text, CabinText.className, "text-[18px]")} onClick={handleScroll("section_three")}>
          About Us
        </h1>
        <h1 className={_clsx(styles.text, CabinText.className, "text-[18px]")} onClick={handleScroll("section_four")}>
          Wedding-day
        </h1>
        <h1 className={_clsx(styles.text, CabinText.className, "text-[18px]")} onClick={handleScroll("section_five")}>
          Wedding Gift
        </h1>
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
