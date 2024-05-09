import { _clsx } from "@/utilities/common";
import styles from "@/styles/ImagesSlide.module.scss";

function ImagesSlide() {
  return (
    <div className="w-[90%] max-w-[350px] mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0">
      <div className="pb-[100%] relative">
        <img
          src="images/slide_1.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_1)}
        />
        <img
          src="images/slide_2.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_2)}
        />
        <img
          src="images/slide_3.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_3)}
        />
        <img
          src="images/slide_4.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_4)}
        />
        <img
          src="images/slide_5.jpg"
          alt=""
          className={_clsx("aspect-square rounded-md absolute top-0 left-0", styles.animation, styles.animation_5)}
        />
      </div>
    </div>
  );
}

export default ImagesSlide;
