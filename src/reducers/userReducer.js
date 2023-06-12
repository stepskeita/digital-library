import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
} from "./types/userTypes";

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_LOADING:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { userInfo: action.payload };
    case LOGIN_USER_ERROR:
      return { error: action.payload };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
