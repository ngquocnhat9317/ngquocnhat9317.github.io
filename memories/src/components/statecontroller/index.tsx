import React, { Suspense, lazy, useMemo } from "react";
import { useSelector } from "react-redux";

import StateOne from '@/components/stateone';
import StateTwo from '@/components/statetwo';

import styles from "@/styles/stateController.module.css";

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
