import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { ADD_TASK, GET_TASKS, DELETE_TASK, CHANGE_TASK } from "./types";

// CREATE TASK
export const createTask = (taskObj) => (dispatch, getState) => {
  axios
    .post("/api/task/", taskObj, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addTask: "Added new task" }));
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// CHANGE TASK
export const changeTask = (id, task) => (dispatch, getState) => {
  axios
    .put(`/api/task/${id}/`, task, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ changeTask: "Task was changed successfully" }));
      dispatch({
        type: CHANGE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// DELETE TASK
export const deleteTask = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/task/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteTask: "Deleted task" }));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// GET TASKS
export const getTasks = (params) => (dispatch, getState) => {
  const queryparams = params ? `?sort=${params}` : "";

  axios
    .get(`/api/task/${queryparams}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
