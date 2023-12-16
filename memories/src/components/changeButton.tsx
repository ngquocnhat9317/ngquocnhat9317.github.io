import React, { memo, useCallback } from "react";
import styles from "@/styles/changeButton.module.scss";

type Props = {
    changePositionHandle: (_value: number) => void;
  };

const LIST_BUTTON: number[] = [1, 2, 3];

function ChangeButton({ changePositionHandle }: Readonly<Props>): JSX.Element {
  const changePosition = useCallback((value: number) => () => {
    changePositionHandle(value);
  }, [changePositionHandle]);

  return <div className={styles.wrapper_button}>
    {LIST_BUTTON.map((index) => <button key={index} className={styles.button} onClick={changePosition(index)} />)}
  </div>;
}

export default memo(ChangeButton);
