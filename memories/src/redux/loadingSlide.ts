import { createSlice } from "@reduxjs/toolkit";

export type Loading = {
  queue: Array<string>;
  current: string | null;
};

const loadingSlide = createSlice({
  name: "loading",
  initialState: {
    queue: [],
    current: null,
  } as Loading,
  reducers: {
    addQueue: (state, action) => {
      if (state.current === null) {
        state.current = action.payload;
      } else {
        state.queue = [...state.queue, action.payload as string];
      }
    },
    removeQueue: (state, action) => {
      const payload = action.payload;
      if (state.current === payload) {
        const next = state.queue.shift();
        state.current = next || null;
      } else {
        state.queue = state.queue.filter((item) => item !== payload);
      }
    },
  },
});

export const { addQueue, removeQueue } = loadingSlide.actions;
export default loadingSlide.reducer;
