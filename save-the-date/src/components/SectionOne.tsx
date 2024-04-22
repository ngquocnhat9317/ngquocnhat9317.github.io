import { _clsx } from "@/utilities/common";
import styles from "@/styles/SectionOne.module.scss";
import { GreatVibes, CrimsonText } from "@/fonts/index";

function SectionOne() {
  return (
    <section className='h-full snap-always snap-center box-border'>
      <div className={_clsx("h-full flex justify-center items-center", styles.welcome_background)}>
        <article className='bg-[#f7ececbb] w-3/4 h-[180px] mt-[220px] flex justify-center items-center flex-col rounded-lg'>
          <h1 className={_clsx("text-[22px]", GreatVibes.className)}>Quốc Nhật & Thuỳ Trang</h1>
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