import React, { memo } from "react";
import styles from "@/styles/loading.module.scss";

const Loading =memo(() => {
  return <div className={styles.loading_background}>
    <img src="/images/loading.svg" alt="" />
  </div>;
})

export default Loading
