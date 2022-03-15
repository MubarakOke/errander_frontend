import * as type from "../actionCreators/signin/signinTypes";

const INITIAL_STATE = {
  token: 63737737,
  id: 1,
  user: {},
};

const signinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.signinType:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default signinReducer;
