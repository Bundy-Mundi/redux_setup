import { LOGIN, LOGOUT } from "../_actions/_userActions";
import { createReducer } from "@reduxjs/toolkit";

// Return a new state, or just mutate it, don't return it.
export const INITIAL_STATE_USER = {
  isAuth: false,
  firstName: null,
  lastName: null,
  username: null,
  email: null,
  emailSecret: null,
  isVerified: false,
  token: null,
  tokens: [],
  image:null
}
export default createReducer(INITIAL_STATE_USER, {
  [LOGIN]: (state, action) => {
    return {...state, ...action.payload.user};
  },
  [LOGOUT]: (state, action) => {
    return INITIAL_STATE_USER;
  },
});
