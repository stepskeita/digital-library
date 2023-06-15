import axios from "axios";

import {
  BOOKS_CATALOG_ERROR,
  BOOKS_CATALOG_LOADING,
  BOOKS_CATALOG_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOK_ERROR,
  GET_BOOK_LOADING,
  GET_BOOK_SUCCESS,
  SEARCH_BOOK_ERROR,
  SEARCH_BOOK_LOADING,
  SEARCH_BOOK_SUCCESS,
  UPLOAD_BOOK_ERROR,
  UPLOAD_BOOK_LOADING,
  UPLOAD_BOOK_SUCCESS,
} from "../reducers/types/bookTypes";
import { backendApiUrl } from "../constants/url";

export const uploadBook = (details) => async (dispatch) => {
  try {
    dispatch({
      type: UPLOAD_BOOK_LOADING,
    });
    const formData = new FormData();

    const newDetails = { ...details };
    delete newDetails.bookFile;
    delete newDetails.coverImage;

    formData.append("bookFile", details.bookFile);
    formData.append("coverImage", details.coverImage);
    formData.append("details", JSON.stringify(newDetails));

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${backendApiUrl}/book`,
      formData,
      config
    );

    dispatch({
      type: UPLOAD_BOOK_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    const message = "cannot search books at the moment";
    dispatch({
      type: UPLOAD_BOOK_ERROR,
      payload: message,
    });
  }
};

export const getBooks =
  (url = `${backendApiUrl}/book`) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_BOOKS_LOADING,
      });
      const { data } = await axios.get(url);
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: data.msg,
      });
    } catch (err) {
      const message = "cannot get books at the moment";
      dispatch({
        type: GET_BOOKS_ERROR,
        payload: message,
      });
    }
  };

export const getBook = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_BOOK_LOADING,
    });
    const { data } = await axios.get(`${backendApiUrl}/book/${id}`);
    dispatch({
      type: GET_BOOK_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    const message = "cannot get book at the moment";
    dispatch({
      type: GET_BOOK_ERROR,
      payload: message,
    });
  }
};

export const searchBook =
  (page = 1) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SEARCH_BOOK_LOADING,
      });
      const {
        searchText: { searchText },
      } = getState();

      const { data } = await axios.get(
        `${backendApiUrl}/book?search=${searchText}&page=${page}`
      );
      dispatch({
        type: SEARCH_BOOK_SUCCESS,
        payload: data.msg,
      });
    } catch (err) {
      const message = "cannot search books at the moment";
      dispatch({
        type: SEARCH_BOOK_ERROR,
        payload: message,
      });
    }
  };

export const getCatalog = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOKS_CATALOG_LOADING,
    });

    const { data } = await axios.get(`${backendApiUrl}/book/catalog`);

    dispatch({
      type: BOOKS_CATALOG_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    const message = "cannot get books catalog at the moment";
    dispatch({
      type: BOOKS_CATALOG_ERROR,
      payload: message,
    });
  }
};
