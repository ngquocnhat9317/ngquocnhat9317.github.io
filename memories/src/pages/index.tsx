import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import Head from "next/head";

import { setLocalStage, setStage } from "@/redux/stageSlide";
import { getLocalStorage } from "@/utils/common";
import Loading from "@/components/common/loading";
import { verifyAccountRequest } from "@/services/login";
import axios from "axios";

const StateController = dynamic(() => import("@/components/stageController"), {
  loading: () => <Loading id="index" />,
  ssr: true,
});

type IndexProps = {
  auth: boolean;
};

export default function Home({ auth }: Readonly<IndexProps>) {
  const [localStageIndex, setLocalStageIndex] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://api.ipify.org/?format=json")
    .then(response => response.data)
    .then(res => {
      verifyAccountRequest({ ip: res.ip ?? "" });
    })
    .catch(error => console.log(error))
  }, [])

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
          name="description"
          content="Đây là nơi chưa kỹ niệm giữa Quắc Tô và Ngáo Ngơ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {localStageIndex !== 0 ? <StateController /> : null}
    </>
  );
}
