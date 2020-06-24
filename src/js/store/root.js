import { combineReducers } from "redux";
import auth from "./auth";
import quizz from "./quizz";
import session from "./session";

const createRootReducer = combineReducers({
  auth,
  quizz,
  session
});

export default createRootReducer;
