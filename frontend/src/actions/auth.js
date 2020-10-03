import axios from "axios";
import { returnErrors, createMessage, clearError } from "./messages";
import { createStatistic, getStatistic } from "./statistic";
import { getTasks } from "./tasks";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CHANGE_USERNAME,
  CHANGE_USERNAME_FAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      dispatch(getTasks());
      dispatch(getStatistic());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// CHANGE USER NAME
export const changeUsername = (username) => (dispatch, getState) => {
  // Request Body
  const body = JSON.stringify({ username });

  axios
    .put("/api/auth/user", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_USERNAME,
        payload: res.data,
      });
      dispatch(
        createMessage({ changeUsername: "Username was changed successfully" })
      );
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CHANGE_USERNAME_FAIL,
      });
    });
};

// CHANGE USER PASSWORD
export const changePassword = (old_password, new_password) => (
  dispatch,
  getState
) => {
  // Request Body
  const body = JSON.stringify({ old_password, new_password });

  axios
    .put("/api/auth/user/change_password", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_PASSWORD,
        payload: res.data,
      });
      dispatch(
        createMessage({ changePassword: "Password was changed successfully" })
      );
      dispatch(clearError());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(getTasks());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => (
  dispatch,
  getState
) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(createStatistic());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper func
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
