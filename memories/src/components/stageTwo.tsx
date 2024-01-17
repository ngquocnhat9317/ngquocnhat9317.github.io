import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import ImageKit from "@/components/common/customImage";
import { useSelector } from "react-redux";
import { debounce, isUndefined } from "lodash";

import ModalMemories from "@/components/common/modalMemories";
import { _clx } from "@/utils/common";
import { CONTENT } from "@/utils/const";
import { PageContent, getPageContentRequest } from "@/services/getPageContent";
import styles from "@/styles/stageTwo.module.scss";

const StageTwo = memo(() => {
  const [imageItem, setImageItem] = useState<PageContent | undefined>(
    undefined,
  );
  const [listImageItems, setListImageItems] = useState<PageContent[]>([]);
  const stage = useSelector(({ stage }) => stage.stage);

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

  const getContext = useCallback(async () => {
    if (CONTENT.page_two) {
      setListImageItems(CONTENT.page_two);
      return;
    }
    const res = await getPageContentRequest();
    setListImageItems(res.result);
  }, []);

  const slowShow = useMemo(() => {
    return debounce(() => {
      let i = 1;
      const interval = setInterval(() => {
        const item = document.getElementById(`item_${i}`);
        item?.classList.add(styles.show_content);
        i++;

        if (i > listImageItems.length) {
          clearInterval(interval);
        }
      }, 500);
    }, 100);
  }, [listImageItems]);

  const hiddenImage = useCallback(() => {
    listImageItems.forEach((_, i) => {
      const item = document.getElementById(`item_${i + 1}`);
      item?.classList.remove(styles.show_content);
    });
  }, [listImageItems]);

  useEffect(() => {
    getContext();
  }, [getContext]);

  useEffect(() => {
    if (stage === 2) slowShow();
    else hiddenImage();
  }, [stage, slowShow, hiddenImage]);

  return (
    <div className={_clx(styles.wrapper_content)}>
      <div className={styles.content}>
        {listImageItems.map((image, index) => (
          <div
            key={image.id}
            id={`item_${index + 1}`}
            className={styles.wrapper_image}
            onClick={chooseImageHandle(image)}
          >
            <ImageKit path={image.path} alt={image.label} />
          </div>
        ))}
      </div>
      <ModalMemories
        isOpen={!isUndefined(imageItem)}
        imageItem={imageItem}
        closeHandle={chooseImageHandle()}
      />
    </div>
  );
});

StageTwo.displayName = "StageTwo";

export default StageTwo;
