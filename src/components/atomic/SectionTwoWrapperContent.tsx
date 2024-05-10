import { ReactNode, useMemo } from "react";

import styles from "@/styles/SectionTwo.module.scss";
import { _clsx } from "@/utilities/common";

type Props = {
  index: number;
  currentIndex: number;
  children: ReactNode;
};

function SectionTwoWrapperContent({ index, currentIndex, ...props }: Readonly<Props>) {
  const topCss: string = useMemo(() => {
    if (index > currentIndex) return "top-[100%] opacity-0";
    if (index < currentIndex) return "top-[-100%] opacity-0";
    return "top-0 opacity-100";
  }, [index, currentIndex]);

  return (
    <div
      className={_clsx(
        "absolute h-[calc(100%-20px)] w-[calc(100%-20px)]",
        "m-[10px] flex justify-center items-center",
        "flex-col lg:flex-row px-0 lg:px-[20px]",
        topCss,
        styles.wrapper_content,
      )}
    >
      {props.children}
    </div>
  );
}

export default SectionTwoWrapperContent;
