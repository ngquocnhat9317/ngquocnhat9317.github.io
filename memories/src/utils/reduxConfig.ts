import { configureStore, createSlice } from "@reduxjs/toolkit";

export type State = {
  value: number;
};

const stateSlide = createSlice({
  name: "state",
  initialState: {
    value: 1,
  } as State,
  reducers: {
    setState: (state, action) => {
      state.value = action.payload as number;
    },
    backState: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});

export const { setState, backState } = stateSlide.actions;

export default configureStore({
  reducer: {
    state: stateSlide.reducer,
  },
});
