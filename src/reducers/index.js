import { combineReducers } from 'redux';
import grid from './grid';
import tetromino from './tetromino';
import keyMapping from './keyMapping';
import game from './game';

const rootReducer = combineReducers({
  grid,
  tetromino,
  keyMapping,
  game,
});

export default rootReducer;
