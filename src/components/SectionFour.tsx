import { memo, useCallback, useState } from "react";

import { CrimsonText, CabinText, AlexBrushText } from "@/fonts";
import styles from "@/styles/SectionFour.module.scss";
import { _clsx } from "@/utilities/common";
import { HEADER } from "@/utilities/constant";

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
        styles.section,
      )}
      id={HEADER.section_4.id}
    >
      <div className="h-[90%] md:h-[80%] w-[90%] bg-[#fcf8f7] rounded-lg flex items-center flex-col">
        <div className="flex justify-around items-center mt-[10px] pb-[3px] relative">
          <h3
            className={_clsx("mr-[20px] w-[110px] text-[20px] text-center", styles.text_header, CabinText.className)}
            onClick={chooseLeft}
          >
            Tiệc nhà gái
          </h3>
          <h3
            className={_clsx("w-[110px] text-[20px] text-center", styles.text_header, CabinText.className)}
            onClick={chooseRight}
          >
            Tiệc nhà trai
          </h3>
          <div
            className={_clsx(
              "absolute w-[110px] h-[3px] bottom-0 bg-[#846860]",
              isLeft ? "left-0" : "left-[calc(100%-110px)]",
              styles.bottom_stick,
            )}
          />
        </div>
        <div className="mt-[40px]">
          <h3 className={_clsx(CrimsonText.className, "text-[18px] text-center")}>
            <b>Trân trọng kính mời:</b>
          </h3>
          <h3 className={_clsx(CrimsonText.className, "text-[16px] text-center")}>Ông/Bà Cô/Chú Anh/Chị/Em</h3>
          <h3 className={_clsx(CrimsonText.className, "text-[18px] text-center mt-[10px] px-[5px]")}>
            Đến tham dự bữa tiệc chung vui cùng gia đình chúng tôi tại:
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col h-[180px] md:h-[130px]">
          <h2
            className={_clsx(
              "text-center content-center text-[40px] mx-[20px] h-[120px] md:h-[70px]",
              AlexBrushText.className,
              styles.text_address,
            )}
          >
            {isLeft ? "Tư gia nữ" : "Nhà Hàng Tiệc Cưới Phì Lũ"}
          </h2>
          <h3 className={_clsx(CrimsonText.className, "mx-[20px] text-center")}>
            {isLeft
              ? "Tổ 1, Hoà Lâm, Duy Trung, Duy Xuyên, Quảng Nam"
              : "Đ. 2 Tháng 9, Hoà Cường Bắc, Hải Châu, Đà Nẵng"}
          </h3>
        </div>
        <h2 className={_clsx(CrimsonText.className, "text-[20px] text-center leading-[0.8] mt-[50px] md:mt-[20px]")}>
          Vào lúc {isLeft ? "10:30 Sáng" : "11:00 Sáng"}
        </h2>
        <div
          className={_clsx(
            "mt-[10px] py-[5px] px-[9px]",
            "border-2 border-solid border-[#846860] rounded-lg",
            "w-[110px] h-[110px]",
            "flex justify-around flex-col",
          )}
        >
          <h3
            className={_clsx(
              CrimsonText.className,
              styles.wedding_date,
              "text-[25px] text-center leading-[0.9] w-[92px] mr-[10px]",
            )}
          >
            {isLeft ? "Thứ bảy" : "Chủ nhật"}
          </h3>
          <h2 className={_clsx(CrimsonText.className, styles.wedding_date, "text-[70px] text-center leading-[0.8]")}>
            {isLeft ? "25" : "26"}
          </h2>
          <h3 className={_clsx(CrimsonText.className, styles.wedding_date, "text-[23px] text-center leading-[0.9]")}>
            05 / 2024
          </h3>
        </div>
      </div>
    </section>
  );
});

SectionFour.displayName = "SectionFour";

export default SectionFour;
