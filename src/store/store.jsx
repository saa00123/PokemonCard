import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/cardSlice";

const store = configureStore({
  reducer: {
    card: rootReducer,
  },
});

export default store;
