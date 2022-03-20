import * as type from "./customerType";

export const CustomerSignupAction = (a) => ({
  type: type.signupType,
  payload: a,
});

export const CustomerSigninAction = (a) => ({
  type: type.signinType,
  payload: a,
});







