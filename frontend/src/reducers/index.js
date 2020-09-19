import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import notify from "./notify";
import task from "./task";

export default combineReducers({
  errors,
  messages,
  auth,
  notify,
  task,
});
