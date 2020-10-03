import {
  COMPLETE_TASK,
  CREATE_STATISTIC_FAIL,
  CREATE_STATISTIC,
  GET_STATISTIC,
} from "../actions/types";

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
        completeTasks: action.payload.countCompletedTasks,
        pointsLevel: action.payload.pointsLevel,
      };
    case GET_STATISTIC:
      return {
        ...state,
        completeTasks: action.payload.countCompletedTasks,
        failedTasks: action.payload.countFailedTasks,
        pointsLevel: action.payload.pointsLevel,
      };
    case CREATE_STATISTIC:
      return {
        ...state,
        completeTasks: action.payload.countCompletedTasks,
        failedTasks: action.payload.countFailedTasks,
        pointsLevel: action.payload.pointsLevel,
      };
    case CREATE_STATISTIC_FAIL:
    default:
      return state;
  }
}
