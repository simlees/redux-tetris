import * as ActionTypes from '../constants/actionTypes';
import { getDropAffordanceBlocks } from '../selectors/grid';
import { getRandomType } from '../utils/tetrominoUtils';

export const moveLeft = () => ({ type: ActionTypes.MOVE_LEFT });
export const moveRight = () => ({ type: ActionTypes.MOVE_RIGHT });
export const rotateLeft = () => ({ type: ActionTypes.ROTATE_LEFT });
export const rotateRight = () => ({ type: ActionTypes.ROTATE_RIGHT });
export const softDrop = () => ({ type: ActionTypes.SOFT_DROP });
export const hardDrop = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: ActionTypes.HARD_DROP,
    currentType: state.tetromino.get('currentType'),
    nextType: state.tetromino.get('nextType'),
    nextNextType: getRandomType(),
    currentType: state.tetromino.get('currentType'),
    blocks: getDropAffordanceBlocks(state)
  });
};
export const hold = () => ({ type: ActionTypes.HOLD });
export const pause = () => ({ type: ActionTypes.PAUSE });