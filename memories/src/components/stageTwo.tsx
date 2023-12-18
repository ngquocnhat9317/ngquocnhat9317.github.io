import React, { memo } from "react";

import styles from "@/styles/stageTwo.module.scss";
import { _clx } from "@/utils/common";

type Props = {
  changePositionHandle: (_value: number) => void;
};

const StageTwo = memo(({ changePositionHandle }: Readonly<Props>) => {
  return (
    <div className={_clx(styles.wrapper_content)}>
      <div></div>
    </div>
  );
});

export default StageTwo;
