import styles from "@/styles/SectionTwo.module.scss";
import { _clsx } from "@/utilities/common";
import SectionTwoWrapperContent from "./atomic/SectionTwoWrapperContent";
import { useCallback, useEffect, useMemo, useState } from "react";
import section_one from "@/content/section_one";
import { AlexBrushText, CarattereText, CrimsonText } from "@/fonts";
import ImagesSlide from "@/components/atomic/ImagesSlide";

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

  const [minIndex, maxIndex] = useMemo(() => [0, 8], []);

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
    <section
      className={_clsx(
        "h-full snap-always snap-center box-border w-full flex justify-center mx-auto",
        styles.section_two_background,
      )}
    >
      <div className="h-full w-full sm:w-[90%] md:w-4/5 flex justify-center items-center flex-col">
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
        <div
          className={_clsx(
            "w-[calc(100%-20px)] md:w-[95%] h-[80%] p-[10px]",
            "overflow-hidden relative",
            "bg-[#fcf8f7ed] rounded-lg shadow-md",
          )}
        >
          <SectionTwoWrapperContent index={0} currentIndex={currentIndex}>
            <>
              <img
                className="w-[90%] max-w-[350px] aspect-square rounded-md mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0"
                src="images/IMG_20200218_093753.jpg"
                alt=""
              />
              <p
                className={_clsx(
                  "text-center text-[22px] sm:text-[26px] md:text-[30px] mx-[20px]",
                  CarattereText.className,
                )}
              >
                {section_one.text_1}
              </p>
            </>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={1} currentIndex={currentIndex}>
            <>
              <img
                className="w-[90%] max-w-[350px] aspect-square rounded-md mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0"
                src="images/IMG_20200222_155127.jpg"
                alt=""
              />
              <p
                className={_clsx(
                  "text-center text-[22px] sm:text-[26px] md:text-[30px] mx-[20px]",
                  CarattereText.className,
                )}
              >
                {section_one.text_2}
              </p>
            </>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={2} currentIndex={currentIndex}>
            <>
              <ImagesSlide />
              <p
                className={_clsx(
                  "text-center text-[22px] sm:text-[26px] md:text-[30px] mx-[20px]",
                  CarattereText.className,
                )}
              >
                {section_one.text_3}
              </p>
            </>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={3} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_4}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={4} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_5}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={5} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_6}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={6} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_7}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={7} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_8}
            </p>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={8} currentIndex={currentIndex}>
            <p className={_clsx("text-center text-[24px] md:text-[30px] mx-[20px]", CarattereText.className)}>
              {section_one.text_9}
            </p>
          </SectionTwoWrapperContent>
          <div className="absolute bottom-[5px] md:bottom-[10px] left-[50%] translate-x-[-50%] w-[calc(100%-30px)]">
            <p
              className={_clsx(
                "text-[14px] md:text-[20px] text-center",
                CrimsonText.className,
                styles.guideline_text,
                !isFirst && "hidden",
              )}
            >
              {section_one.guideline}
            </p>
            {currentIndex === maxIndex && (
              <p
                className={_clsx(
                  "text-[25px] md:text-[30px] text-center",
                  AlexBrushText.className,
                  styles.guideline_text,
                )}
              >
                Fin
              </p>
            )}
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
