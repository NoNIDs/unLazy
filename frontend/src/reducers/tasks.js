import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS,
  CHANGE_TASK,
} from "../actions/types";

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
    case CHANGE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => {
          if (el.task_id === action.payload.task_id) return action.payload;
          return el;
        }),
      };
    case DELETE_TASK:
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
