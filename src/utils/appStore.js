import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default appStore;
