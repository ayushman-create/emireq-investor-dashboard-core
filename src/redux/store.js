import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers/loaderSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export const dispatch = store.dispatch;