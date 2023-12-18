import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default appStore;
