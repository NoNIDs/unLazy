import axios from "axios";

import { returnErrors } from "./messages";

import { GET_ARTICLES, GET_CURRENT_ARTICLE } from "./types";

// GET ARTICLES
export const getArticles = () => (dispatch) => {
  axios
    .get("/api/articles")
    .then((res) =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET ARTICLE BY ID
export const getArticleById = (id) => (dispatch) => {
  console.log(id);
  axios
    .get(`/api/articles/${id || ""}`)
    .then((res) =>
      dispatch({
        type: GET_CURRENT_ARTICLE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
