import React, { memo, useCallback, useState } from "react";
import ImageKit from "@/components/common/customImage";
import isUndefined from "lodash/isUndefined";

import ModalMemories from "@/components/common/modalMemories";
import { _clx } from "@/utils/common";
import { CONTENT } from "@/utils/const";
import { PageContent } from "@/services/getPageContent";
import styles from "@/styles/stageTwo.module.scss";

const StageTwo = memo(() => {
  const [imageItem, setImageItem] = useState<PageContent | undefined>(
    undefined,
  );

  const chooseImageHandle = useCallback(
    (image?: PageContent) => () => {
      if (image) {
        setImageItem(image);
        return;
      }

      setImageItem(undefined);
    },
    [],
  );


  return (
    <div className={_clx(styles.wrapper_content)}>
      <div className={styles.content}>
        {CONTENT.page_two.map((image) => (
          <div
            key={image.id}
            className={styles.wrapper_image}
            onClick={chooseImageHandle(image)}
          >
            <ImageKit path={image.path} alt={image.label} />
          </div>
        ))}
      </div>
      <ModalMemories isOpen={!isUndefined(imageItem)} imageItem={imageItem} closeHandle={chooseImageHandle(undefined)} />
    </div>
  );
});

StageTwo.displayName = "StageTwo";

export default StageTwo;
