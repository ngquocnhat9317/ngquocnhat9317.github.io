import React, { memo, useCallback, useMemo } from "react";
import { Modal } from "antd";
import { isUndefined } from "lodash";

import ImageKit from "@/components/common/customImage";
import ContentWrapper from "@/components/common/contentWrapper";
import { PageContent } from "@/services/getPageContent";
import { CrimsonText } from "@/fonts/configFont";
import styles from "@/styles/modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  imageItem?: PageContent;
  closeHandle: () => void;
};

const ModalMemories = memo(({ isOpen, imageItem, closeHandle }: ModalProps) => {
  const closeHandler = useCallback(() => {
    closeHandle();
  }, [closeHandle]);

  const timeMemo = useMemo(() => {
    if (imageItem?.path) {
      return imageItem.path.substring(0, 10).replaceAll("-", "/");
    }
    return "";
  }, [imageItem?.path]);

  return (
    <Modal
      open={isOpen}
      width={"70%"}
      classNames={{
        content: styles.modal_content ?? "",
        body: styles.modal_body ?? "",
      }}
      wrapClassName={styles.modal_wrapper}
      onCancel={closeHandler}
      footer={null}
      centered
      destroyOnClose
    >
      <ContentWrapper condition={!isUndefined(imageItem)}>
        <div className={styles.modal_wrapper_image}>
          <ImageKit
            path={imageItem?.path || ""}
            alt={imageItem?.label || ""}
            quality={100}
          />
        </div>
        <div className={styles.modal_context}>
          <h2 className={CrimsonText.className}>{imageItem?.label || ""}</h2>
          <p className={CrimsonText.className}>{timeMemo}</p>
          <p className={CrimsonText.className}>{imageItem?.context || ""}</p>
        </div>
      </ContentWrapper>
    </Modal>
  );
});

ModalMemories.displayName = "ModalMemories";

export default ModalMemories;
