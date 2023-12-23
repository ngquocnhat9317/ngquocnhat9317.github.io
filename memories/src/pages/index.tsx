import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useDispatch } from "react-redux";

import LoginComponent from "@/components/loginComponent";
import Loading from "@/components/common/loading";
import useCheckAuth from "@/hooks/checkAuth";
import { getLocalStorage } from "@/utils/common";
import { setLocalStage, setStage } from "@/redux/stageSlide";

const StateController = dynamic(() => import("@/components/stageController"), {
  loading: () => <Loading id='index' />,
});

export default function Home() {
  const [localStageIndex, setLocalStageIndex] = useState<number>(0);
  const auth = useCheckAuth();
  const dispatch = useDispatch();

  const ContentMemo = useMemo(() => {
    if (!auth) return <LoginComponent />;
    if (localStageIndex !== 0) return <StateController />;
    return null;
  }, [auth, localStageIndex]);

  useEffect(() => {
    if (window !== undefined) {
      const store = getLocalStorage("STAGE");
      if (store) {
        const stage: number = getLocalStorage("STAGE")["stage"];
        setLocalStageIndex(stage || 1);
        dispatch(setLocalStage(stage || 1));
      } else {
        setLocalStageIndex(1);
        dispatch(setLocalStage(1));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStageIndex !== 0) dispatch(setStage(localStageIndex));
  }, [dispatch, localStageIndex]);

  return (
    <>
      <Head>
        <title>Memories</title>
        <meta
          name='description'
          content='Đây là nơi chưa kỹ niệm giữa Quắc Tô và Ngáo Ngơ'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {ContentMemo}
    </>
  );
}
