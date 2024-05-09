import styles from "@/styles/SectionTwo.module.scss";
import { _clsx } from "@/utilities/common";
import SectionTwoWrapperContent from "./atomic/SectionTwoWrapperContent";
import { useCallback, useEffect, useMemo, useState } from "react";
import section_one from "@/content/section_one";
import { CarattereText, CrimsonText } from "@/fonts";

type ButtonAnimation = {
  top: boolean;
  bottom: boolean;
};

function SectionTwo() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [buttonAnimation, setButtonAnimation] = useState<ButtonAnimation>({
    top: false,
    bottom: false,
  });

  const [minIndex, maxIndex] = useMemo(() => [0, 3], []);

  const pressNext = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setIsFirst(false);
    }

    setButtonAnimation((state: ButtonAnimation) => ({
      ...state,
      bottom: true,
    }));
  }, [maxIndex, currentIndex]);

  const pressPrevious = useCallback(() => {
    if (currentIndex > minIndex) setCurrentIndex(currentIndex - 1);

    setButtonAnimation((state: ButtonAnimation) => ({
      ...state,
      top: true,
    }));
  }, [minIndex, currentIndex]);

  useEffect(() => {
    if (buttonAnimation.bottom) {
      setTimeout(
        () =>
          setButtonAnimation((state: ButtonAnimation) => ({
            ...state,
            bottom: false,
          })),
        1000,
      );
    }
    if (buttonAnimation.top) {
      setTimeout(
        () =>
          setButtonAnimation((state: ButtonAnimation) => ({
            ...state,
            top: false,
          })),
        1000,
      );
    }
  }, [buttonAnimation]);

  return (
    <section className="h-full snap-always snap-center box-border w-full lg:w-4/5 flex justify-center mx-auto">
      <div className="h-full w-full flex justify-center items-center flex-col">
        <button
          type="button"
          className={_clsx(
            "h-[50px]",
            styles.button,
            styles.button_top,
            buttonAnimation.top && styles.button_top_animation,
          )}
          onClick={pressPrevious}
        />
        <div className="w-full md:w-[95%] h-[80%] p-[10px] overflow-hidden relative">
          <SectionTwoWrapperContent index={0} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_1}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={1} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_2}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={2} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_2}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={3} currentIndex={currentIndex}>
            <p>4</p>
          </SectionTwoWrapperContent>
          <div className="absolute bottom-[25px] left-[50%] translate-x-[-50%]">
            <p
              className={_clsx(
                "text-[18px] text-center",
                CrimsonText.className,
                styles.guideline_text,
                !isFirst && "hidden",
              )}
            >
              {section_one.guideline}
            </p>
          </div>
        </div>
        <button
          type="button"
          className={_clsx(
            "h-[50px]",
            styles.button,
            styles.button_bottom,
            buttonAnimation.bottom && styles.button_bottom_animation,
          )}
          onClick={pressNext}
        />
      </div>
    </section>
  );
}

export default SectionTwo;
