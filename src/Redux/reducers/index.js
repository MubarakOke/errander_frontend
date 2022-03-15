import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
export default combineReducers({
  signIn: signinReducer,
});
