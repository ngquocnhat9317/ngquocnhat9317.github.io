import { ReactNode, memo } from "react";

import { CarattereText } from "@/fonts";
import styles from "@/styles/SectionThree.module.scss";
import { _clsx } from "@/utilities/common";

type StoryTextProps = {
  children: ReactNode;
};

const StoryText = memo(({ children }: StoryTextProps) => {
  return (
    <p
      className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className, styles.story_text)}
    >
      {children}
    </p>
  );
});

StoryText.displayName = "StoryText";

export default StoryText;
