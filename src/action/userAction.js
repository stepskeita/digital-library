import { users } from "../constants/userData";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../reducers/types/userTypes";

export const loginUser = (details) => (dispatch, getState) => {
  try {
    dispatch({
      type: LOGIN_USER_LOADING,
    });
    const user = users.find((user) => user.email === details.email);
    if (user) {
      if (user.password !== details.password)
        throw {
          response: {
            data: "Incorrect password",
          },
        };
      else {
        localStorage.setItem("userInfo", JSON.stringify(user));
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user,
        });
      }
    } else {
      throw {
        response: {
          data: "Incorrect email",
        },
      };
    }
  } catch (err) {
    const message = err.response.data || "cannot login at the moment";
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT_USER });
};
