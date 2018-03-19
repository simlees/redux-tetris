import { combineReducers } from 'redux';
import grid from './grid';
import keyMapping from './keyMapping';

const rootReducer = combineReducers({
  grid,
  keyMapping,
});

export default rootReducer;
