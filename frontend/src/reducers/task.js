import { ADD_TASK } from "../actions/types";

const initialState = {
  task: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: [...state.task, action.payload],
      };
    default:
      return state;
  }
}
