import axios from "axios";
import { tokenConfig } from "./auth";

import { returnErrors } from "./messages";

import { GET_RATING_USERS } from "./types";

// GET USERS FOR RATING PAGE
export const getUsers = (limit) => (dispatch, getState) => {
  const queryparams = limit ? `?limit=${limit}` : "";

  axios
    .get(`api/rating/${queryparams}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_RATING_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
