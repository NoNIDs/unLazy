import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  COMPLETE_TASK,
  GET_STATISTIC,
  CREATE_STATISTIC,
  CREATE_STATISTIC_FAIL,
} from "./types";

// COMPLETE COUNT TASKS
export const setCompleteTask = (completeTasks, pointsLevel) => (
  dispatch,
  getState
) => {
  // Request Body
  const body = JSON.stringify({
    countCompletedTasks: completeTasks + 1,
    pointsLevel: pointsLevel + 100,
  });

  //setComplete count for user
  axios
    .put("/api/statistic", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ completeTask: "Task complete!" }));
      dispatch({
        type: COMPLETE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// CREATE STATISTIC FOR NEW USER
export const createStatistic = () => (dispatch, getState) => {
  //initial values for new user
  const body = JSON.stringify({
    pointsLevel: 0,
    countCompletedTasks: 0,
    countFailedTasks: 0,
  });

  axios
    .post("/api/statistic/create", body, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: CREATE_STATISTIC,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CREATE_STATISTIC_FAIL,
      });
    });
};

// GET STATISTIC USER
export const getStatistic = () => (dispatch, getState) => {
  axios
    .get("/api/statistic", tokenConfig(getState))
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
