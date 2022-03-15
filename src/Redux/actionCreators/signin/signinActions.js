import * as type from "./customerType";

export const SignInAction = (a) => ({
  type: type.signinType,
  payload: a,
});
