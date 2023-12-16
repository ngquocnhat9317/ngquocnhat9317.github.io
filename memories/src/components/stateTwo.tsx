import React from "react";

type Props = {
  changePositionHandle: (_value: number) => void;
};

function StateTwo({ changePositionHandle }: Readonly<Props>) {
  return <h1 onClick={() => changePositionHandle(1)}>state two</h1>;
}

export default StateTwo;