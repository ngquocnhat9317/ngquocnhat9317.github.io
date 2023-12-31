import React, { memo } from "react";
import Image from "next/image";

import styles from "@/styles/stageTwo.module.scss";
import { _clx } from "@/utils/common";

const StageTwo = memo(() => {
  return (
    <div className={_clx(styles.wrapper_content)}>
      <div className={styles.content}>
        {Array(30)
          .fill(null)
          .map((_, index) => index)
          .map((index) => (
            <div key={index} className={styles.wrapper_image}>
              <Image
                src={`/images/sample_${(index % 4) + 1}.jpeg`}
                alt=''
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
});

StageTwo.displayName = "StageTwo";

export default StageTwo;
