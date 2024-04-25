import styles from "@/styles/SectionTwo.module.scss";
import { _clsx } from "@/utilities/common";

function SectionThree() {
  return (
    <section className="h-full snap-always snap-center box-border w-full lg:w-4/5 flex justify-center mx-auto">
      <div className={_clsx("w-full h-full bg-[url(../../public/svg/path2.svg)] bg-cover md:bg-[url(../../public/svg/path1.svg)] md:bg-contain", styles.path_image, styles.path_rotate)} />
    </section>
  );
}

export default SectionThree;
