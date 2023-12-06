import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { _clx } from "@/utils/common";
import { setState } from "@/utils/reduxConfig";
import styles from "@/styles/stateOne.module.scss";
import { CrimsonText, DancingText } from "@/fonts/configFont";

function StateOne(): JSX.Element {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [nextAble, setNextAble] = useState<boolean>(false);
  const dispatch = useDispatch();

  const clickHandle = useCallback(() => {
    if (isFirst) {
      setIsFirst(false);
    } else if (!isFirst && nextAble) {
      dispatch(setState(2));
    }
  }, [isFirst, nextAble, dispatch]);

  useEffect(() => {
    let timeout: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (!isFirst) timeout = setTimeout(() => setNextAble(true), 3000);
    return () => timeout && clearTimeout(timeout);
  }, [isFirst]);

  return (
    <div className={_clx(styles.wrapper_content)} onClick={clickHandle}>
      <h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_first,
          isFirst && styles.active,
        )}
      >
        Xin chào cục ngáo của tui.
      </h1>
      <h1
        className={_clx(
          DancingText.className,
          styles.home_text,
          styles.home_text_second,
          !isFirst && styles.active,
        )}
      >
          Em đã sẳn sàng khám phá chưa nào?
      </h1>
      <p
        className={_clx(
          CrimsonText.className,
          styles.continue_text,
          nextAble && styles.active,
        )}
      >
        Nhấn bất kỳ để đi đến trang tiếp nhé
      </p>
    </div>
  );
}

export default StateOne;
