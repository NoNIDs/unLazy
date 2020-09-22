import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import notify from "./notify";
import tasks from "./tasks";
import statistic from "./statistic";

export default combineReducers({
  errors,
  messages,
  auth,
  notify,
  tasks,
  statistic,
});
