import types from "./action-types";

export const fetchHome = () => dispatch => {
  fetch(`data/home.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_HOME,
        payload: response
      });
    });
};

export const fetchSkills = () => dispatch => {
  fetch(`data/skills.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_SKILLS,
        payload: response
      });
    });
};
