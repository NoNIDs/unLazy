import { ENABLE_NOTIFY, DISABLE_NOTIFY } from "../actions/types";

const initialState = {
  notify: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ENABLE_NOTIFY:
      return {
        notify: action.payload.notify,
      };
    case DISABLE_NOTIFY:
      return {
        notify: action.payload.notify,
      };
    default:
      return state;
  }
}
