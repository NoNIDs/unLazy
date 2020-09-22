import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { deleteTask } from "./tasks";

import { COMPLETE_TASK, GET_STATISTIC } from "./types";

// COMPLETE COUNT TASKS
export const setCompleteTask = (id, completeTasks) => (dispatch, getState) => {
  // Request Body
  const body = JSON.stringify({ countCompletedTasks: completeTasks + 1 });

  //setComplete count for user
  axios
    .put("/api/statistic/", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ completeTasks: "Task complete!" }));
      dispatch({
        type: COMPLETE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });

  // delete task(id)
  deleteTask(id);
};

// GET STATISTIC USER
export const getStatistic = () => (dispatch, getState) => {
  axios
    .get("/api/statistic/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_STATISTIC,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.repsonse.status));
    });
};
