import {
  INITIALISE_GAME,
  TICK
} from '../constants/actionTypes';
import tetrominoes from '../constants/tetrominoes';

function getRandomType() {
  const types = Object.keys(tetrominoes);
  return types[ types.length * Math.random() << 0];
}

export const initialiseGame = () => ({
  type: INITIALISE_GAME,
  tetromino: getRandomType(),
  nextTetromino: getRandomType()
});

export const tick = () => ({ type: TICK });
