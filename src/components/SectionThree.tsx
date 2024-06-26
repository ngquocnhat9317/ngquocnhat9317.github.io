import { memo, useCallback, useEffect, useMemo, useState } from "react";

import ImagesSlide from "@/components/atomic/ImagesSlide";
import Points from "@/components/atomic/Points";
import SectionTwoWrapperContent from "@/components/atomic/SectionTwoWrapperContent";
import StoryImage from "@/components/atomic/StoryImage";
import StoryText from "@/components/atomic/StoryText";
import section_text from "@/content/section_text";
import { AlexBrushText, CrimsonText } from "@/fonts";
import styles from "@/styles/SectionThree.module.scss";
import { _clsx } from "@/utilities/common";
import { HEADER } from "@/utilities/constant";

type ButtonAnimation = {
  top: boolean;
  bottom: boolean;
};

const SectionThree = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [clickAble, setClickAble] = useState<boolean>(true);
  const [buttonAnimation, setButtonAnimation] = useState<ButtonAnimation>({
    top: false,
    bottom: false,
  });

  const [minIndex, maxIndex] = useMemo(() => [0, 10], []);

  const pressNext = useCallback(() => {
    if (clickAble) {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
        setIsFirst(false);
      }

      setClickAble(false);

      setButtonAnimation((state: ButtonAnimation) => ({
        ...state,
        bottom: true,
      }));
    }
  }, [maxIndex, currentIndex, clickAble]);

  const pressPrevious = useCallback(() => {
    if (clickAble) {
      if (currentIndex > minIndex) setCurrentIndex(currentIndex - 1);

      setClickAble(false);

      setButtonAnimation((state: ButtonAnimation) => ({
        ...state,
        top: true,
      }));
    }
  }, [minIndex, currentIndex, clickAble]);

  useEffect(() => {
    let bottomTimeout: NodeJS.Timeout | undefined = undefined;
    let topTimeout: NodeJS.Timeout | undefined = undefined;
    if (buttonAnimation.bottom) {
      bottomTimeout = setTimeout(
        () =>
          setButtonAnimation((state: ButtonAnimation) => ({
            ...state,
            bottom: false,
          })),
        1000,
      );
    }
    if (buttonAnimation.top) {
      topTimeout = setTimeout(
        () =>
          setButtonAnimation((state: ButtonAnimation) => ({
            ...state,
            top: false,
          })),
        1000,
      );
    }
    return () => {
      clearTimeout(bottomTimeout);
      clearTimeout(topTimeout);
    };
  }, [buttonAnimation]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined;
    if (!clickAble) {
      timeout = setTimeout(() => setClickAble(true), 1500);
    }

    return () => clearTimeout(timeout);
  }, [clickAble]);

  return (
    <section
      className={_clsx(
        "h-full snap-always snap-center box-border w-full flex justify-center mx-auto",
        styles.section_three_background,
      )}
      id={HEADER.section_3.id}
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
          <Points index={currentIndex} maxIndex={maxIndex} />
          <SectionTwoWrapperContent index={0} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_1.jpg" />
            <StoryText>{section_text.text_1}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={1} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_2.jpg" />
            <StoryText>{section_text.text_2}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={2} currentIndex={currentIndex}>
            <ImagesSlide
              listImages={[
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/slide_1.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/slide_2.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/slide_3.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/slide_4.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/slide_5.jpg",
              ]}
            />
            <StoryText>{section_text.text_3}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={3} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_4.jpg" />
            <StoryText>{section_text.text_4}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={4} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_5.jpg" />
            <StoryText>{section_text.text_5}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={5} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_6.jpeg" />
            <StoryText>{section_text.text_6}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={6} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_7.jpg" />
            <StoryText>{section_text.text_7}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={7} currentIndex={currentIndex}>
            <ImagesSlide
              listImages={[
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_8_1.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_8_2.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_8_3.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_8_4.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_8_5.jpg",
              ]}
            />
            <StoryText>{section_text.text_8}</StoryText>
          </SectionTwoWrapperContent>

          <SectionTwoWrapperContent index={8} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_9.jpg" />
            <StoryText>{section_text.text_9}</StoryText>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={9} currentIndex={currentIndex}>
            <StoryImage src="https://ik.imagekit.io/ngquocnhat9317/tr:q-70/save_the_date/images/story_add.jpg" />
            <StoryText>{section_text.text_10}</StoryText>
          </SectionTwoWrapperContent>
          <SectionTwoWrapperContent index={10} currentIndex={currentIndex}>
            <ImagesSlide
              listImages={[
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-50/save_the_date/images/story_10_1.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-50/save_the_date/images/story_10_2.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-50/save_the_date/images/story_10_3.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-50/save_the_date/images/story_10_4.jpg",
                "https://ik.imagekit.io/ngquocnhat9317/tr:q-50/save_the_date/images/story_10_5.jpg",
              ]}
            />
            <StoryText>{section_text.text_11}</StoryText>
          </SectionTwoWrapperContent>

          <div className="absolute bottom-[5px] md:bottom-[10px] left-[50%] translate-x-[-50%] w-[calc(100%-30px)]">
            <p
              className={_clsx(
                "text-[14px] md:text-[17px] text-center",
                CrimsonText.className,
                styles.guideline_text,
                !isFirst && "hidden",
              )}
            >
              {section_text.guideline}
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
});

SectionThree.displayName = "SectionThree";

export default SectionThree;
