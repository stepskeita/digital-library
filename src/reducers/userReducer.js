import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_RESET,
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

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_LOADING:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return { success: true };
    case REGISTER_USER_ERROR:
      return { error: action.payload };
    case REGISTER_USER_RESET:
      return {};
    default:
      return state;
  }
};
