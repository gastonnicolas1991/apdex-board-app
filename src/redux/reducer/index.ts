import { combineReducers } from "@reduxjs/toolkit";
import appsByHost from "../slices/appsByHost";

const reducer = combineReducers({
  appsByHost,
});

export default reducer;
