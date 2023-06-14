import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../reducers/types/userTypes";
import { backendApiUrl } from "../constants/url";

export const loginUser = (details) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_LOADING,
    });

    const { data } = await axios.post(`${backendApiUrl}/user/login`, details);
    localStorage.setItem("userInfo", JSON.stringify(data.msg));
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    const message = err.response.data.msg || "cannot login at the moment";
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
