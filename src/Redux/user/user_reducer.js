import { userType } from "./user_type";

const INITIAL_STATE = {
  color: "red",
  number: 1,
  content: "sjflksd;jklfjklwsjd;fj",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
