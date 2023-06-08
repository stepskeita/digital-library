import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {
  searchBookReducer,
  searchTextReducer,
} from "./reducers/generalReducer";

const middleware = [thunk];
const initialState = {};
const reducers = combineReducers({
  searchBook: searchBookReducer,
  searchText: searchTextReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
