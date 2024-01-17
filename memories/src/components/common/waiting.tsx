import React, { memo } from "react";
import { DancingText } from "@/fonts/configFont";
import { _clx } from "@/utils/common";


const Waiting = memo(() => {
  return (
    <div className={_clx(DancingText.className, "waiting")}>
      <h1>Đợi xíu nhaaa...</h1>
    </div>
  );
});

Waiting.displayName = "Waiting";
export default Waiting;
