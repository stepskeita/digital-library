import {
  BOOKS_CATALOG_ERROR,
  BOOKS_CATALOG_LOADING,
  BOOKS_CATALOG_RESET,
  BOOKS_CATALOG_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_RESET,
  GET_BOOKS_SUCCESS,
  GET_BOOK_ERROR,
  GET_BOOK_LOADING,
  GET_BOOK_RESET,
  GET_BOOK_SUCCESS,
  GET_SEARCH_TEXT,
  RESET_SEARCH_TEXT,
  SEARCH_BOOK_ERROR,
  SEARCH_BOOK_LOADING,
  SEARCH_BOOK_RESET,
  SEARCH_BOOK_SUCCESS,
  SET_SEARCH_TEXT,
  UPLOAD_BOOK_ERROR,
  UPLOAD_BOOK_LOADING,
  UPLOAD_BOOK_RESET,
  UPLOAD_BOOK_SUCCESS,
} from "./types/bookTypes";

export const uploadBookReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_BOOK_LOADING:
      return { loading: true };
    case UPLOAD_BOOK_SUCCESS:
      return { book: action.payload };
    case UPLOAD_BOOK_ERROR:
      return { error: action.payload };
    case UPLOAD_BOOK_RESET:
      return {};
    default:
      return state;
  }
};

export const getBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING:
      return { loading: true };
    case GET_BOOKS_SUCCESS:
      return { ...action.payload };
    case GET_BOOKS_ERROR:
      return {
        error: action.payload,
      };
    case GET_BOOKS_RESET:
      return {};
    default:
      return state;
  }
};

export const getBookReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOK_LOADING:
      return { loading: true };
    case GET_BOOK_SUCCESS:
      return { book: action.payload };
    case GET_BOOK_ERROR:
      return {
        error: action.payload,
      };
    case GET_BOOK_RESET:
      return {};
    default:
      return state;
  }
};

export const searchTextReducer = (state = { searchText: "" }, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { searchText: action.payload };
    case GET_SEARCH_TEXT:
      return { searchText: state.searchText };
    case RESET_SEARCH_TEXT:
      return {
        searchText: "",
      };
    default:
      return state;
  }
};

export const searchBookReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_BOOK_LOADING:
      return { loading: true };
    case SEARCH_BOOK_SUCCESS:
      return { ...action.payload };
    case SEARCH_BOOK_ERROR:
      return { error: action.payload };
    case SEARCH_BOOK_RESET:
      return {};
    default:
      return state;
  }
};

export const bookCatalogReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKS_CATALOG_LOADING:
      return { loading: true };
    case BOOKS_CATALOG_SUCCESS:
      return { catalog: action.payload };
    case BOOKS_CATALOG_ERROR:
      return { error: action.payload };
    case BOOKS_CATALOG_RESET:
      return {};
    default:
      return state;
  }
};
