import { ADD_TASK, DELETE_TASK, GET_TASKS } from "../actions/types";

const initialState = {
  tasks: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.task_id !== action.payload),
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}
