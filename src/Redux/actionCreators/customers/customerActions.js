import * as type from "./customerType";
import axios from "axios";

export const CustomerSignupAction = (navigate, formData) => {
  return async (dispatch) => {
    console.log(formData)
    try {
      await axios
        .post("https://errander.herokuapp.com/api/customer/", formData)
        .then((res) => dispatch({ type: type.signupType, payload: res }))
        .then((res) => console.log(res));
      navigate("/customer/home/order");
    } catch (error) {
      console.log(error);
    }
  };
};
