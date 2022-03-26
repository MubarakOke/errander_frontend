import * as type from "./signinTypes";
import axios from "axios";

export const SignInAction = (navigate, formData) => {
  return async (dispatch) => {
    try {
      await axios
        .post("https://errander.herokuapp.com/account/auth/", formData)
        .then((res) => dispatch({ type: type.signinType, payload: res }))
        .then((res) => console.log(res));
      navigate("/customer/home/order");
    } catch (error) {
      console.log(error);
    }
  };
};
