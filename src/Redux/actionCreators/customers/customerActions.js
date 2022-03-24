import * as type from "./customerType";

export const CustomerSignupAction = (a) => ({
  type: type.signupType,
  payload: a,
});
