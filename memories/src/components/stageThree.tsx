import React, { memo } from "react";

type Props = {
  changePositionHandle: (_value: number) => void;
};

function StageThree({ changePositionHandle }: Readonly<Props>) {
  return <h1 onClick={() => changePositionHandle(1)}>state three</h1>;
}

export default memo(StageThree);