import { configureStore } from "@reduxjs/toolkit";
import illustrationReducer from "./illustrationSlice";

export const store = configureStore({
  reducer: {
    illustrations: illustrationReducer,
  },
});
