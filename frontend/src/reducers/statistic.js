import { COMPLETE_TASK, GET_STATISTIC } from "../actions/types";

const initialState = {
  completeTasks: 0,
  failedTasks: 0,
  pointsLevel: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TASK:
      return {
        ...state,
        completeTasks: action.payload,
      };
    case GET_STATISTIC:
      return action.payload;
    default:
      return state;
  }
}
