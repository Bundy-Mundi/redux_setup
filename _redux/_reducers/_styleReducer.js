import tailwind from "../../styles/tailwind";
import { createReducer } from "@reduxjs/toolkit";

// Return a new state, or just mutate it, don't return it.
export const INITIAL_STATE_STYLE = {
  tailwind,
  theme:{}
};

export default createReducer(INITIAL_STATE_STYLE, {})