import { memo, useCallback, useEffect, useState } from "react";

import { CabinText } from "@/fonts";
import stylesHeader from "@/styles/Header.module.scss";
import stylesLayout from "@/styles/Layout.module.scss";
import { _clsx } from "@/utilities/common";
import { HEADER } from "@/utilities/constant";

type SideBarProps = {
  toggle: boolean;
  setToggle: (_data: boolean) => void;
};

const SideBar = memo(({ toggle, setToggle }: SideBarProps) => {
  const [insideToggle, setInsideToggle] = useState<boolean>(false);

  useEffect(() => {
    setInsideToggle(toggle);
  }, [toggle]);

  const handleScroll = useCallback(
    (id: string) => () => {
      setToggle(false);
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
      });
    },
    [setToggle],
  );

  return (
    <aside
      className={_clsx(
        "absolute md:hidden top-0 w-full h-full",
        stylesHeader.aside,
        insideToggle && stylesHeader.aside_show,
      )}
    >
      <div className="w-full h-full flex justify-around flex-col relative">
        <button
          type="button"
          className={_clsx(
            "absolute top-[15px] left-[15px]",
            "w-[20px] h-[20px]",
            "opacity-70 md:opacity-50 md:hover:opacity-70",
            stylesLayout.icon,
            stylesLayout.icon_close,
          )}
          onClick={() => setToggle(false)}
        />
        {Object.values(HEADER).map(({ label, id }) => (
          <h1
            key={id}
            className={_clsx(stylesHeader.text, CabinText.className, "text-[18px] text-center")}
            onClick={handleScroll(id)}
          >
            {label}
          </h1>
        ))}
      </div>
    </aside>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
