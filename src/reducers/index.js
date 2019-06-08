import { combineReducers } from 'redux';
import home from './homeReducer';

const app = combineReducers({
  home,
});

export default app;
