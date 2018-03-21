import { combineReducers } from 'redux';
import grid from './grid';
import tetromino from './tetromino';
import keyMapping from './keyMapping';

const rootReducer = combineReducers({
  grid,
  tetromino,
  keyMapping,
});

export default rootReducer;
