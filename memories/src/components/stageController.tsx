import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import StageOne from "@/components/stageOne";
import StageTwo from "@/components/stageTwo";
import StageThree from "@/components/stageThree";
import ChangeButton from "@/components/changeButton";

import styles from "@/styles/stageController.module.scss";
import { _clx } from "@/utils/common";
import { useWindowHeight } from "@react-hook/window-size";
import { animated, useSpring, config } from "@react-spring/web";
import { ReducerStore, setStage } from "@/utils/reduxConfig";

function StateController() {
  const localStage: number = useSelector(
    ({ stage }: ReducerStore) => stage.localStage
  );

  const dispatch = useDispatch();
  const height = useWindowHeight();
  const [
    { position1, position2, position3, opacity1, opacity2, opacity3 },
    api,
  ] = useSpring(() => {
    return {
      from: {
        position1: `${0 - (localStage - 1) * 100}%`,
        position2: `${100 - (localStage - 1) * 100}%`,
        position3: `${200 - (localStage - 1) * 100}%`,
        opacity1: localStage === 1 ? 1 : 0,
        opacity2: localStage === 2 ? 1 : 0,
        opacity3: localStage === 3 ? 1 : 0,
      },
      config: { duration: 600, ...config.wobbly },
    };
  }, [localStage]);

  const changePosition = useCallback(
    (value: number) => {
      api.start({
        to: {
          position1: `${0 - (value - 1) * 100}%`,
          position2: `${100 - (value - 1) * 100}%`,
          position3: `${200 - (value - 1) * 100}%`,
        },
      });
      api.start({
        to: {
          opacity1: value === 1 ? 1 : 0,
          opacity2: value === 2 ? 1 : 0,
          opacity3: value === 3 ? 1 : 0,
        },
        config: {
          duration: 300,
        },
        onRest: () => {
          dispatch(setStage(value));
        },
      });
    },
    [api, dispatch]
  );

  const backPosition = useCallback(
    (value: number) => {
      const new_value = value > 1 ? value - 1 : 1;
      changePosition(new_value);
    },
    [changePosition]
  );

  const nextPosition = useCallback(
    (value: number) => {
      const new_value = value < 3 ? value + 1 : 3;
      changePosition(new_value);
    },
    [changePosition]
  );

  return (
    <main className={styles.main} style={{ height: height || "100%" }}>
      <ChangeButton
        changePositionHandle={changePosition}
        nextPositionHandle={nextPosition}
        backPositionHandle={backPosition}
      />
      <animated.div
        className={_clx(styles.content, styles.content_one)}
        style={{ top: position1, opacity: opacity1 }}
      >
        <StageOne changePositionHandle={changePosition} />
      </animated.div>
      <animated.div
        className={_clx(styles.content, styles.content_two)}
        style={{ top: position2, opacity: opacity2 }}
      >
        <StageTwo changePositionHandle={changePosition} />
      </animated.div>
      <animated.div
        className={_clx(styles.content, styles.content_two)}
        style={{ top: position3, opacity: opacity3 }}
      >
        <StageThree changePositionHandle={changePosition} />
      </animated.div>
    </main>
  );
}

export default StateController;
