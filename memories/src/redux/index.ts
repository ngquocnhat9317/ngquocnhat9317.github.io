import { configureStore } from "@reduxjs/toolkit";
import stageSlide, { Stage } from "@/redux/stageSlide";
import loadingSlide, { Loading } from "@/redux/loadingSlide";

export type ReducerStore = {
  stage: Stage;
  loading: Loading;
};

const store = configureStore({
  reducer: {
    stage: stageSlide,
    loading: loadingSlide,
  },
});

export default store;
