import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";

import { _clx } from "@/utils/common";
import { setState } from "@/utils/reduxConfig";
import styles from "@/styles/stateOne.module.scss";
import { CrimsonText, DancingText } from "@/fonts/configFont";
import useIsIOSDevice from "@/hooks/isIOSDevice";

function StateOne(): JSX.Element {
  const [nextAble, setNextAble] = useState<boolean>(false);
  const [{ first, second, bottom }, api] = useSpring(
    () => ({
      from: { first: 1, second: 0, bottom: 0 },
      config: { duration: 2000 },
    }),
    [],
  );
  const dispatch = useDispatch();

  const { isIPhone, isIPad, isSafari } = useIsIOSDevice();

  const isSafariIOS = useMemo(
    () => (isIPhone || isIPad) && isSafari,
    [isIPhone, isIPad, isSafari],
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
    if (nextAble) dispatch(setState(2));
  }, [restFunction, nextAble, api, dispatch]);

  return (
    <div
      className={_clx(styles.wrapper_content, isSafariIOS && styles.is_os)}
      onClick={clickHandle}
    >
      <animated.h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_first,
        )}
        style={{ opacity: first }}
      >
        Xin chào cục ngáo của tui.
      </animated.h1>
      <animated.h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_second,
        )}
        style={{ opacity: second }}
      >
        Em đã sẳn sàng khám phá chưa nào?
      </animated.h1>
      <animated.p
        className={_clx(CrimsonText.className, styles.continue_text)}
        style={{ opacity: bottom }}
      >
        Nhấn bất kỳ để đi đến trang tiếp nhé
      </animated.p>
    </div>
  );
}

export default StateOne;
