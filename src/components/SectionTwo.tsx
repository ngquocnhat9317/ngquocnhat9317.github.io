import { memo } from "react";

import section_text from "@/content/section_text";
import { CrimsonText } from "@/fonts";
import styles from "@/styles/SectionTwo.module.scss";
import { _clsx } from "@/utilities/common";
import { HEADER } from "@/utilities/constant";

const SectionTwo = memo(() => {
  return (
    <section
      className={_clsx(
        "h-full snap-always snap-center box-border w-full flex justify-center items-center mx-auto",
        styles.section_two_background,
      )}
      id={HEADER.section_2.id}
    >
      <div className="h-[90%] md:h-[80%] w-[90%] rounded-lg bg-[#fcf8f770] flex flex-col justify-around">
        <div
          className={_clsx(
            "h-[35%] md:h-[40%] w-[calc(100%-40px)] md:w-[60%]",
            "bg-white",
            "ml-[20px] md:ml-[40px]",
            "rounded-lg rounded-tl-[80px]",
            "shadow-[0px_0px_0px_5px_#fcdbd9]",
            "flex",
          )}
        >
          <img className="aspect-square h-[160px] rounded-full" src="images/him.jpg" alt="" />
          <p className={_clsx("m-[10px]", CrimsonText.className, styles.about_text)}>{section_text.about_him}</p>
        </div>
        <div
          className={_clsx(
            "h-[35%] md:h-[40%] w-[calc(100%-40px)] md:w-[60%]",
            "bg-white",
            "ml-auto mr-[20px]",
            "rounded-lg rounded-tr-[80px]",
            "shadow-[0px_0px_0px_5px_#fcdbd9]",
            "flex",
          )}
        >
          <p className={_clsx("m-[10px]", CrimsonText.className, styles.about_text)}>{section_text.about_her}</p>
          <img className="aspect-square h-[160px] rounded-full ml-auto" src="images/her.jpg" alt="" />
        </div>
      </div>
    </section>
  );
});

SectionTwo.displayName = "SectionTwo";

export default SectionTwo;
