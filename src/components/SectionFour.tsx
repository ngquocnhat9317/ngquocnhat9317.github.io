import { memo, useCallback, useState } from "react";

import { CrimsonText, CabinText } from "@/fonts";
import styles from "@/styles/SectionFour.module.scss";
import { _clsx } from "@/utilities/common";

const SectionFour = memo(() => {
  const [isLeft, setIsLeft] = useState<boolean>(true);

  const chooseLeft = useCallback(() => {
    setIsLeft(true);
  }, []);

  const chooseRight = useCallback(() => {
    setIsLeft(false);
  }, []);

  return (
    <section
      className={_clsx(
        "h-full snap-always snap-center box-border w-full lg:w-4/5",
        "flex justify-center items-center",
        "mx-auto bg-[#edd6c2]",
      )}
      id="section_four"
    >
      <div className="h-[90%] md:h-[80%] w-[90%] bg-[#fcf8f7] rounded-lg flex items-center flex-col">
        <div className="flex justify-around items-center mt-[10px] pb-[3px] relative">
          <h3
            className={_clsx("mr-[20px] w-[70px] text-[20px] text-center", styles.text_header, CabinText.className)}
            onClick={chooseLeft}
          >
            Tiệc gái
          </h3>
          <h3
            className={_clsx("w-[70px] text-[20px] text-center", styles.text_header, CabinText.className)}
            onClick={chooseRight}
          >
            Tiệc trai
          </h3>
          <div
            className={_clsx(
              "absolute w-[70px] h-[3px] bottom-0 bg-[#846860]",
              isLeft ? "left-0" : "left-[calc(100%-70px)]",
              styles.bottom_stick,
            )}
          />
        </div>
        <div className="mt-[40px]">
          <h3 className={_clsx(CrimsonText.className, "text-[18px] text-center")}>
            <b>Trân trọng kính mời:</b>
          </h3>
          <h3 className={_clsx(CrimsonText.className, "text-[16px] text-center")}>Ông/Bà Cô/Chú Anh/Chị/Em</h3>
          <h3 className={_clsx(CrimsonText.className, "text-[18px] text-center mt-[5px]")}>
            Đến tham dự bữa tiệc chung vui cùng gia đình chúng tôi
          </h3>
        </div>
        <div className="mt-[100px] py-[5px] px-[9px] border-2 border-solid border-[black] rounded-lg">
          <h3 className={_clsx(CrimsonText.className, "text-[25px] text-center leading-[0.9] w-[92px]")}>
            {isLeft ? "Thứ bảy" : "Chủ nhật"}
          </h3>
          <h2 className={_clsx(CrimsonText.className, "text-[70px] text-center leading-[0.8]")}>
            {isLeft ? "25" : "26"}
          </h2>
          <h3 className={_clsx(CrimsonText.className, "text-[23px] text-center leading-[0.9]")}>05 / 2024</h3>
        </div>
      </div>
    </section>
  );
});

SectionFour.displayName = "SectionFour";

export default SectionFour;
