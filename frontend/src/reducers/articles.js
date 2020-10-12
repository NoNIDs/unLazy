import { GET_ARTICLES, GET_CURRENT_ARTICLE } from "../actions/types";

const initialState = {
  articles: [],
  current: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_CURRENT_ARTICLE:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
