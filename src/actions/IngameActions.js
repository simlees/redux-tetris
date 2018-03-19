import * as ActionTypes from '../constants/actionTypes';

export const moveLeft = () => ({ type: ActionTypes.MOVE_LEFT });
export const moveRight = () => ({ type: ActionTypes.MOVE_RIGHT });
export const rotateLeft = () => ({ type: ActionTypes.ROTATE_LEFT });
export const rotateRight = () => ({ type: ActionTypes.ROTATE_RIGHT });
export const softDrop = () => ({ type: ActionTypes.SOFT_DROP });
export const hardDrop = () => ({ type: ActionTypes.HARD_DROP });
export const hold = () => ({ type: ActionTypes.HOLD });
export const pause = () => ({ type: ActionTypes.PAUSE });