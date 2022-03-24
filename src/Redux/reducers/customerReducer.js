import * as type from "../actionCreators/customers/customerType";

const INITIAL_STATE = {
  id: 1,
  user: {
    first_name: "mamaba",
    last_name: "black",
    email: "blinks444@gmail.com",
    phone: "080676867",
    user_type: "Customer",
    is_admin: false,
  },
  picture: null,
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ 3NjA0NjA1LCJpYXQiOjE2NDc1MTgyMDUsImp0aSI6ImJjOTQ2ZWRkMGVmYzRhOGE5ZDYyY2I0YmRiMDQ0NzE4IiwidXNlcl9pZCI6ImJsaW5rczQ0NEBnbWFpbC5jb20ifQ.mcAJCIM5KFFH6jbsWBC_NsKfVuoV5xFYtyUNYftM4Xw",
};

const CustomerSignupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.signupType:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default CustomerSignupReducer;
