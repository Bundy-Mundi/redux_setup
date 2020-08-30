import { combineReducers } from "@reduxjs/toolkit";
import _userReducer from "./_reducers/_userReducer";
import _styleReducer from "./_reducers/_styleReducer";

export default combineReducers({
  user: _userReducer,
  style: _styleReducer,
  mobileMenu: _mobileMenuReducer,
  menu: _menuReducer
});