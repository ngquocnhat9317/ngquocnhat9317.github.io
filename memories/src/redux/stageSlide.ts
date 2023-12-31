import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../utils/common";

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
      if (state.stage >= 1) {
        setLocalStorage("STAGE", { "stage": state.stage - 1 });
        return { ...state, stage: state.stage - 1 };
      }
    },
    nextStage: (state) => {
      if (state.stage <= 2) {
        setLocalStorage("STAGE", { "stage": state.stage + 1 });
        return { ...state, stage: state.stage + 1 };
      }
    },
    setLocalStage: (state, action) => {
      return { ...state, localStage: action.payload as number };
    },
  },
});

export const { setStage, backStage, nextStage, setLocalStage } = stageSlide.actions;
export default stageSlide.reducer;
