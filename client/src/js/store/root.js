import { combineReducers } from "redux";

import books from './books'
import header from './header'

const createRootReducer = combineReducers({
  books,
  header
});

export default createRootReducer;
