import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";

import LoginComponent from "@/components/loginComponent";
import Loading from "@/components/common/loading";
import AudioWrapper from "@/components/common/audioWrapper";
import useCheckAuth from "@/hooks/checkAuth";
import { setLocalStage, setStage } from "@/redux/stageSlide";
import Waiting from "@/components/common/waiting";

const StateController = dynamic(() => import("@/components/stageController"), {
  loading: () => <Loading id='index' />,
});

type LoginState = "waiting" | "unauthenticated" | "authenticated";

export default function Home() {
  const [localStageIndex, setLocalStageIndex] = useState<number>(0);
  const [isItTime, setIsItTime] = useState<boolean>(new Date() >= new Date("1/18/2024"));
  const { isAuth: auth, isVerifying, triggerVerify } = useCheckAuth();

  const loginState = useMemo<LoginState>(() => {
    if (auth) return "authenticated";
    if (!auth && !isVerifying) return "unauthenticated";
    return "waiting";
  }, [auth, isVerifying]);

  const dispatch = useDispatch();

  const ContentMemo = useMemo(() => {
    if (!isItTime) return <Waiting />;
    if (loginState === "unauthenticated") return <LoginComponent triggerVerifyFunction={triggerVerify} />;
    if (loginState === "authenticated" &&localStageIndex !== 0) return <StateController />;
    return <Loading id='login' />;
  }, [loginState, localStageIndex, triggerVerify, isItTime]);

  useEffect(() => {
    setLocalStageIndex(1);
    dispatch(setLocalStage(1));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const birthday = new Date("1/18/2024");
      if (current >= birthday) {
        setIsItTime(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <AudioWrapper>
        {ContentMemo}
      </AudioWrapper>
    </>
  );
}
