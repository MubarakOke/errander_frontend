import { userType } from "./user_type";

export const userAction = (a) => ({
  type: userType,
  payload: a,
});
