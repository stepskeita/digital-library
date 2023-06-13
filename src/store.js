import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {
  bookCatalogReducer,
  searchBookReducer,
  searchTextReducer,
  uploadBookReducer,
} from "./reducers/bookReducer";
import { loginUserReducer } from "./reducers/userReducer";

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
  userLogin: loginUserReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
