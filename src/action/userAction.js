import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
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

export const registerUser = (details) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REGISTER_USER_LOADING,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${backendApiUrl}/user/register`,
      details,
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    const message = err.response.data.msg || "cannot register at the moment";
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT_USER });
};
