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

export const fetchBrands = () => dispatch => {
  fetch(`data/brands.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_BRANDS,
        payload: response
      });
    });
};

export const fetchPortfolio = () => dispatch => {
  fetch(`data/portfolio.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_PORTFOLIO,
        payload: response
      });
    });
};

export const fetchContact = () => dispatch => {
  fetch(`data/contact.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_CONTACT,
        payload: response
      });
    });
};
