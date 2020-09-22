import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { ENABLE_NOTIFY, DISABLE_NOTIFY } from "./types";

// Enable notify
export const enableNotify = (notify) => (dispatch, getState) => {
  // Request Body
  const body = JSON.stringify({ notify });

  axios
    .put("/api/auth/user", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ notifyEnable: "Notifications enabled" }));
      dispatch({
        type: ENABLE_NOTIFY,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Disable notify
export const disableNotify = (notify) => (dispatch, getState) => {
  // Request Body
  const body = JSON.stringify({ notify });

  axios
    .put("/api/auth/user", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ notifyDisable: "Notifications disabled" }));
      dispatch({
        type: DISABLE_NOTIFY,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
