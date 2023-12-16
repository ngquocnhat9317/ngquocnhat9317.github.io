import { configureStore, createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "./common";

export type Stage = {
  stage: number;
  localStage: number
};

const stageSlide = createSlice({
  name: "state",
  initialState: {
    stage: 1,
    localStage: 0,
  } as Stage,
  reducers: {
    setStage: (state, action) => {
      setLocalStorage("STAGE", { "stage": action.payload as number });
      return { ...state, stage: action.payload as number };
    },
    backStage: (state) => {
      if (state.stage > 1) {
        setLocalStorage("STAGE", { "stage": state.stage - 1 });
        return { ...state, stage: state.stage - 1 };
      }
    },
    nextStage: (state) => {
      if (state.stage < 3) {
        setLocalStorage("STAGE", { "stage": state.stage + 1 });
        return { ...state, stage: state.stage + 1 };
      }
    },
    setLocalStage: (state, action) => {
      return { ...state, localStage: action.payload as number };
    },
  },
});

export const { setStage, backStage, setLocalStage } = stageSlide.actions;

export type ReducerStore = {
  stage: Stage
}

export default configureStore({
  reducer: {
    stage: stageSlide.reducer,
  },
});
