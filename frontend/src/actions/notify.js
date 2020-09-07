import axios from "axios";

import { ENABLE_NOTIFY, DISABLE_NOTIFY, CREATE_MESSAGE } from "./types";

// Enable notify
export const enableNotify = (notify) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ notify });

  axios
    .post("/api/auth/user", body, config)
    .then((res) => {
      dispatch({
        type: ENABLE_NOTIFY,
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

// Disable notify
export const disableNotify = (notify) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ notify });

  axios
    .post("/api/auth/user", body, config)
    .then((res) => {
      dispatch({
        type: DISABLE_NOTIFY,
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
