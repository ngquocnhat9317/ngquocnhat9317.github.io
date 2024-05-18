import { ReactNode, memo, useMemo } from "react";

import styles from "@/styles/SectionThree.module.scss";
import { _clsx } from "@/utilities/common";

type Props = {
  index: number;
  currentIndex: number;
  children: ReactNode;
};

const SectionTwoWrapperContent = memo(({ index, currentIndex, ...props }: Readonly<Props>) => {
  const isShow = useMemo(() => {
    if (currentIndex >= index - 1 && currentIndex <= index + 1) return true;
    return false;
  }, [index, currentIndex]);

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
      {isShow ? props.children : null}
    </div>
  );
});

SectionTwoWrapperContent.displayName = "SectionTwoWrapperContent";

export default SectionTwoWrapperContent;
