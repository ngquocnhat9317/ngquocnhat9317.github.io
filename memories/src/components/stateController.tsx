import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import StateOne from "@/components/stateOne";
import StateTwo from "@/components/stateTwo";
import ChangeButton from "@/components/changeButton";

import styles from "@/styles/stateController.module.scss";
import { _clx } from "@/utils/common";
import { useWindowHeight } from "@react-hook/window-size";
import { animated, useSpring, config } from "@react-spring/web";
import { ReducerStore, setStage } from "@/utils/reduxConfig";


function StateController() {
  const localStage: number = useSelector(({ stage }: ReducerStore) => stage.localStage);
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
    [api, dispatch],
  );

  return (
    <main className={styles.main} style={{ height: height || "100%" }}>
      <ChangeButton changePositionHandle={changePosition} />
      <animated.div
        className={_clx(styles.content, styles.content_one)}
        style={{ top: position1, opacity: opacity1 }}
      >
        <StateOne changePositionHandle={changePosition} />
      </animated.div>
      <animated.div
        className={_clx(styles.content, styles.content_two)}
        style={{ top: position2, opacity: opacity2 }}
      >
        <StateTwo changePositionHandle={changePosition} />
      </animated.div>
      <animated.div
        className={_clx(styles.content, styles.content_two)}
        style={{ top: position3, opacity: opacity3 }}
      />
    </main>
  );
}

export default StateController;
