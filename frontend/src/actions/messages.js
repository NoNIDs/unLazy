import { CLEAR_ERROR, CREATE_MESSAGE, GET_ERRORS } from "./types";

//CREATE MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};

// CLEAR ERROR
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
