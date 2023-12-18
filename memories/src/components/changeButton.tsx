import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDrag } from "@use-gesture/react";
import { a, useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

import styles from "@/styles/changeButton.module.scss";

type Props = {
  changePositionHandle: (_value: number) => void;
  nextPositionHandle: (_value: number) => void;
  backPositionHandle: (_value: number) => void;
};

type PosibleChange = {
  max: number;
  isPositive: boolean | null;
};

const MAX_Y = 10;

const ChangeButton = memo(({
  changePositionHandle,
  nextPositionHandle,
  backPositionHandle,
}: Readonly<Props>): JSX.Element => {
  const [isChange, setIsChange] = useState<boolean>(false);
  const stage = useSelector(({ stage }) => stage.stage);
  const isPosibleChange = useRef<PosibleChange>({
    max: 0,
    isPositive: null,
  });
  const [{ y1, y2, y3, scale1, scale2, scale3 }, api] = useSpring(() => ({
    from: { y1: 0, y2: 0, y3: 0, scale1: 1, scale2: 1, scale3: 1 },
  }));

  const getY = (active: boolean, y: number) => {
    if (!active) return 0;
    if (Math.abs(y) > MAX_Y && y < 0) return -MAX_Y;
    if (Math.abs(y) > MAX_Y && y > 0) return MAX_Y;
    return y;
  };

  const debounceFuntion = useMemo(
    () =>
      debounce((ispositive: boolean) => {
        if (ispositive) nextPositionHandle(stage);
        if (!ispositive) backPositionHandle(stage);
        isPosibleChange.current.isPositive = null;
        isPosibleChange.current.max = 0;
        setIsChange(false);
      }, 100),
    [nextPositionHandle, backPositionHandle, stage],
  );

  const bind = useDrag(({ active, movement: [_, y], target }) => {
    const i = parseInt((target as HTMLElement).id.replace("button_", ""));

    if (i === stage) {
      api.start({
        to: {
          [`y${i}`]: getY(active, y),
          [`scale${i}`]: active ? 1.1 : 1,
        },
      });

      isPosibleChange.current.max =
        Math.abs(y) > isPosibleChange.current.max
          ? Math.abs(y)
          : isPosibleChange.current.max;
      if (isPosibleChange.current.isPositive === null && y > 0)
        isPosibleChange.current.isPositive = true;
      if (isPosibleChange.current.isPositive === null && y < 0)
        isPosibleChange.current.isPositive = false;

      if (
        !active &&
        !isChange &&
        isPosibleChange.current.max > 10 &&
        typeof isPosibleChange.current.isPositive === "boolean"
      ) {
        setIsChange(true);
      }
    }
  });

  useEffect(() => {
    if (isChange && typeof isPosibleChange.current.isPositive === "boolean") {
      debounceFuntion(isPosibleChange.current.isPositive);
    }
  }, [debounceFuntion, isChange]);

  const changePosition = useCallback(
    (value: number) => () => {
      if (value !== stage) changePositionHandle(value);
    },
    [changePositionHandle, stage],
  );

  return (
    <div className={styles.wrapper_button}>
      <a.button
        {...bind()}
        id='button_1'
        className={styles.button}
        onClick={changePosition(1)}
        style={{
          y: y1,
          scale: scale1,
        }}
      />
      <a.button
        {...bind()}
        id='button_2'
        className={styles.button}
        onClick={changePosition(2)}
        style={{
          y: y2,
          scale: scale2,
        }}
      />
      <a.button
        {...bind()}
        id='button_3'
        className={styles.button}
        onClick={changePosition(3)}
        style={{
          y: y3,
          scale: scale3,
        }}
      />
    </div>
  );
});

ChangeButton.displayName = "ChangeButton";

export default ChangeButton;
