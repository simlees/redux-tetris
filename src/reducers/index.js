import { combineReducers } from 'redux';
import grid from './grid';
import tetronimoes from './tetronimoes';
import keyMapping from './keyMapping';

const rootReducer = combineReducers({
  grid,
  tetronimoes,
  keyMapping,
});

export default rootReducer;
