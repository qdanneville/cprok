import { combineReducers } from "redux";

import books from './books'

const createRootReducer = combineReducers({
  books
});

export default createRootReducer;
