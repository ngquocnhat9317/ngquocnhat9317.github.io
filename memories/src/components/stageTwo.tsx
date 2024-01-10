import React, { memo } from "react";

import ImageKit from "@/components/common/customImage";

import styles from "@/styles/stageTwo.module.scss";
import { _clx } from "@/utils/common";
import { CONTENT } from "@/utils/const";

const StageTwo = memo(() => {
  return (
    <div className={_clx(styles.wrapper_content)}>
      <div className={styles.content}>
        {CONTENT.page_two
          .map((image, index) => (
            <div key={index} className={styles.wrapper_image}>
              <ImageKit
                src={image.url}
                alt={image.label}
                width={100}
                height={100}
              />
            </div>
          ))}
      </div>
    </div>
  );
});

StageTwo.displayName = "StageTwo";

export default StageTwo;
