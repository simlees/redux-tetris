import {
  INITIALISE_GAME,
  TICK
} from '../constants/actionTypes';
import { getRandomType } from '../utils/tetrominoUtils';


export const initialiseGame = () => ({
  type: INITIALISE_GAME,
  nextType: getRandomType(),
  nextNextType: getRandomType()
});

export const tick = () => ({ type: TICK });
