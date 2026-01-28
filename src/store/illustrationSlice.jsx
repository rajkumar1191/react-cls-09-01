import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  illustrations: [],
};

const illustrationSlice = createSlice({
  name: "illustrations",
  initialState,
  reducers: {
    addIllustration: (state, action) => {
      state.illustrations.push(action.payload);
    },
  },
});

export const { addIllustration } = illustrationSlice.actions;
export default illustrationSlice.reducer;
