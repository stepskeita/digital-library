import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {
  bookCatalogReducer,
  getBookReducer,
  getBooksReducer,
  searchBookReducer,
  searchTextReducer,
  uploadBookReducer,
} from "./reducers/bookReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const middleware = [thunk];
const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducers = combineReducers({
  searchBook: searchBookReducer,
  searchText: searchTextReducer,
  booksCatalog: bookCatalogReducer,
  uploadBook: uploadBookReducer,
  getBooks: getBooksReducer,
  getBook: getBookReducer,
  userRegister: registerUserReducer,
  userLogin: loginUserReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
