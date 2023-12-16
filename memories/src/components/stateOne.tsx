import React, { useCallback, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { _clx } from "@/utils/common";
import { CrimsonText, DancingText } from "@/fonts/configFont";
import styles from "@/styles/stateOne.module.scss";
import { CONTENT } from "@/utils/const";

type Props = {
  changePositionHandle: (_value: number) => void;
};

function StateOne({ changePositionHandle }: Readonly<Props>): JSX.Element {
  const [nextAble, setNextAble] = useState<boolean>(false);
  const [{ first, second, bottom }, api] = useSpring(
    () => ({
      from: { first: 1, second: 0, bottom: 0 },
      config: { duration: 2000 },
    }),
    [],
  );

  const restFunction = useCallback(() => {
    api.start({ second: 1 });
    api.start({
      to: { bottom: 1 },
      delay: 1000,
      config: { duration: 1000 },
      onRest() {
        setNextAble(true);
      },
    });
  }, [api]);

  const clickHandle = useCallback(() => {
    api.start({
      to: { first: 0 },
      onRest: restFunction,
    });
    if (nextAble) {
      changePositionHandle(2);
    }
  }, [restFunction, nextAble, api, changePositionHandle]);

  return (
    <div
      className={_clx(styles.wrapper_content)}
      onClick={clickHandle}
      onKeyDown={clickHandle}
    >
      <animated.h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_first,
        )}
        style={{ opacity: first }}
      >
        {CONTENT.page_one.welcome_first}
      </animated.h1>
      <animated.h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_second,
        )}
        style={{ opacity: second }}
      >
        {CONTENT.page_one.welcome_second}
      </animated.h1>
      <animated.p
        className={_clx(CrimsonText.className, styles.continue_text)}
        style={{ opacity: bottom }}
      >
        {CONTENT.page_one.next}
      </animated.p>
    </div>
  );
}

export default StateOne;
