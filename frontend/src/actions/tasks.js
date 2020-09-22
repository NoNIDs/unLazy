import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { ADD_TASK, GET_TASKS, DELETE_TASK } from "./types";

// CREATE TASK
export const createTask = (taskObj) => (dispatch, getState) => {
  axios
    .post("/api/task/", taskObj, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addTask: "Add new task" }));
      dispatch({
        type: ADD_TASK,
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
      dispatch(createMessage({ deleteTask: "Delete task" }));
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
export const getTasks = () => (dispatch, getState) => {
  axios
    .get("/api/task/", tokenConfig(getState))
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
