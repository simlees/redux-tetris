import { fromJS } from 'immutable';
import defaultKeyMapping from '../config/defaultKeyMapping';
import { getEmptyGrid } from '../utils/gridUtils';

export const getTetromino = overrides => fromJS({
  currentType: 'J',
  position: [4, 12],
  rotation: 0,
  nextType: 'L',
  ...overrides
});

export const getState = overrides => ({
  grid: getEmptyGrid(),
  tetromino: getTetromino(),
  keyMapping: fromJS(defaultKeyMapping),
  ...overrides
});