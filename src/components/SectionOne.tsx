import { GreatVibes, CrimsonText } from "@/fonts/index";
import styles from "@/styles/SectionOne.module.scss";
import { _clsx } from "@/utilities/common";

function SectionOne() {
  return (
    <section className="h-full snap-always snap-center box-border w-full lg:w-4/5 flex justify-center mx-auto">
      <div className="hidden md:w-1/2 md:flex justify-center">
        <article
          className={_clsx(
            "text-neutral-900 w-3/4 h-[210px] mt-[220px]",
            "flex justify-center items-center flex-col rounded-lg",
          )}
        >
          <h1 className={_clsx("text-[36px]", GreatVibes.className)}>Quốc Nhật</h1>
          <h1 className={_clsx("text-[28px]", GreatVibes.className)}>&</h1>
          <h1 className={_clsx("text-[36px]", GreatVibes.className)}>Thuỳ Trang</h1>
          <div className={_clsx("mt-[10px] flex justify-center items-center", CrimsonText.className)}>
            <div className={_clsx(styles.stick, "mr-[5px]")} />
            26 tháng 5 2024
            <div className={_clsx(styles.stick, "ml-[5px]")} />
          </div>
        </article>
      </div>
      <div className={_clsx("h-full w-full md:w-1/2 flex justify-center items-center", styles.welcome_background)}>
        <article
          className={_clsx(
            "bg-[#f7ececbb] text-neutral-900",
            "w-3/4 h-[180px] mt-[220px]",
            "flex justify-center items-center flex-col rounded-lg md:hidden",
          )}
        >
          <h1 className={_clsx("text-[22px] ", GreatVibes.className)}>Quốc Nhật & Thuỳ Trang</h1>
          <div className={_clsx("mt-[20px] flex justify-center items-center", CrimsonText.className)}>
            <div className={_clsx(styles.stick, "mr-[5px]")} />
            26 tháng 5 2024
            <div className={_clsx(styles.stick, "ml-[5px]")} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionOne;
