import { createStore } from "redux";
import { reducer, initialState } from "./state";

export const store = createStore(reducer, initialState);
