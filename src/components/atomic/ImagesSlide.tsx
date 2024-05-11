import Image from "next/image";

import styles from "@/styles/ImagesSlide.module.scss";
import { _clsx } from "@/utilities/common";
import { BLUR_URL } from "@/utilities/constant";

function ImagesSlide() {
  return (
    <div className="w-[90%] max-w-[320px] mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0">
      <div className="pb-[100%] relative">
        <Image
          src="images/slide_1.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_1)}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <Image
          src="images/slide_2.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_2)}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <Image
          src="images/slide_3.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_3)}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <Image
          src="images/slide_4.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_4)}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <Image
          src="images/slide_5.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_5)}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
      </div>
    </div>
  );
}

export default ImagesSlide;
