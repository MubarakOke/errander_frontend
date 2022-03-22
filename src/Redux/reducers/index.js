import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import CustomerSignupReducer from "./customerReducer"
import OrderReducer from "./orderReducer";


export default combineReducers({
  signIn: signinReducer,
  customer: CustomerSignupReducer,
  orders: OrderReducer,
});
