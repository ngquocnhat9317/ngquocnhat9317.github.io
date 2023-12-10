import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import StateOne from "@/components/stateOne";
import StateTwo from "@/components/stateTwo";

import styles from "@/styles/stateController.module.scss";

function StateController() {
  const value = useSelector(({ state }) => state.value);

  const DisplayStateMemo = useMemo(() => {
    if (value === 1) return <StateOne />;
    if (value === 2) return <StateTwo />;
    return <></>;
  }, [value]);

  return <main className={styles.main}>{DisplayStateMemo}</main>;
}

export default StateController;
