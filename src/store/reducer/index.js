import { combineReducers } from "redux";
import { loadingBarReducer as loading } from "react-redux-loading";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  authedUser,
  questions,
  users,
  loading,
});
