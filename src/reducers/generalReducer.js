import {
  BOOKS_CATALOG_ERROR,
  BOOKS_CATALOG_LOADING,
  BOOKS_CATALOG_RESET,
  BOOKS_CATALOG_SUCCESS,
  GET_SEARCH_TEXT,
  RESET_SEARCH_TEXT,
  SEARCH_BOOK_ERROR,
  SEARCH_BOOK_LOADING,
  SEARCH_BOOK_RESET,
  SEARCH_BOOK_SUCCESS,
  SET_SEARCH_TEXT,
} from "./types/generalTypes";

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
      return { books: action.payload };
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
