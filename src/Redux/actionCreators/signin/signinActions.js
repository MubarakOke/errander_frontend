import * as type from "./signinTypes";

export const SignInAction = (a) => (
  {
  type: type.signinType,
  payload: a,
});
 