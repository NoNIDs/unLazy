import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { ADD_TASK, CREATE_MESSAGE } from "./types";

// CREATE TASK
export const createTask = (taskObj) => (dispatch, getState) => {
  axios
    .post("/api/task/", taskObj, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ createTask: "Create new task" }));
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CREATE_MESSAGE,
      });
    });
};
