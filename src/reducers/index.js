import types from "../actions/action-types";

export const initialState = {
  home: {},
  skills: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HOME:
      const home = action.payload;
      return { ...state, home: home };
    case types.FETCH_SKILLS:
      const skills = action.payload;
      return { ...state, skills: skills };

    default:
      return state;
  }
};

export default reducer;
