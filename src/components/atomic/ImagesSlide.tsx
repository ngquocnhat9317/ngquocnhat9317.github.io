import Image from "next/image";
import { memo } from "react";

import styles from "@/styles/ImagesSlide.module.scss";
import { _clsx } from "@/utilities/common";
import { BLUR_URL } from "@/utilities/constant";

type ImagesSlideProps = {
  listImages: [string, string, string, string, string];
};

const ImagesSlide = memo(({ listImages }: Readonly<ImagesSlideProps>) => {
  return (
    <div className="w-[90%] max-w-[320px] mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0">
      <div className="pb-[100%] relative">
        <Image
          src={listImages[0]}
          alt=""
          className={_clsx(
            "aspect-square rounded-md absolute top-0 left-0 bg-[white]",
            styles.animation,
            styles.animation_1,
          )}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={listImages[1]}
          alt=""
          className={_clsx(
            "aspect-square rounded-md absolute top-0 left-0 bg-[white]",
            styles.animation,
            styles.animation_2,
          )}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={listImages[2]}
          alt=""
          className={_clsx(
            "aspect-square rounded-md absolute top-0 left-0 bg-[white]",
            styles.animation,
            styles.animation_3,
          )}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={listImages[3]}
          alt=""
          className={_clsx(
            "aspect-square rounded-md absolute top-0 left-0 bg-[white]",
            styles.animation,
            styles.animation_4,
          )}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={listImages[4]}
          alt=""
          className={_clsx(
            "aspect-square rounded-md absolute top-0 left-0 bg-[white]",
            styles.animation,
            styles.animation_5,
          )}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
});

ImagesSlide.displayName = "ImagesSlide";

export default ImagesSlide;
