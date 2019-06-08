import types from '../actions/action-types';

export const INITIAL_STATE = {
  home: {},  
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_HOME:
      const home = action.payload;
      return { ...state, ...home};

    default:
      return state;
  }
};

export default reducer;
