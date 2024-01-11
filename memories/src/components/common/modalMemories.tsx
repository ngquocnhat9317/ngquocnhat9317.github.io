import React, { memo, useCallback } from "react";
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

  return (
    <Modal
      open={isOpen}
      width={"calc(100% - 20px)"}
      classNames={{
        content: styles.modal_content ?? "",
        body: styles.modal_body ?? "",
      }}
      onCancel={closeHandler}
      footer={null}
      centered
    >
      <ContentWrapper condition={!isUndefined(imageItem)}>
        <div className={styles.modal_wrapper_image}>
          <ImageKit path={imageItem?.path || ""} alt={imageItem?.label || ""} />
        </div>
        <p className={CrimsonText.className}>{imageItem?.context || ""}</p>
      </ContentWrapper>
    </Modal>
  );
});

ModalMemories.displayName = "ModalMemories";

export default ModalMemories;
