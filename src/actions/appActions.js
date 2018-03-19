import {
  INITIALISE_GAME
} from '../constants/actionTypes';
import tetrominoes from '../constants/tetrominoes';

function getRandomType() {
  const types = Object.keys(tetrominoes);
  return types[ types.length * Math.random() << 0];
}

export const initialiseGame = () => ({
  type: INITIALISE_GAME,
  tetronimo: getRandomType(),
  nextTetronimo: getRandomType()
});