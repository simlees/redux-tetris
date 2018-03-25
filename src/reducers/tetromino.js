import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/actionTypes';
import gameConfig from '../config/game';

const initialState = fromJS({
  currentType: null,
  position: [null, null], // Bottom left of tetromino bounding box
  rotation: 0, // 0, 1, 2, 3 for default, 90 degrees clockwise, 180 etc
  nextType: null
});

export default function tetromino(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INITIALISE_GAME:
    case ActionTypes.HARD_DROP: {
      const { nextType, nextNextType } = action;
      return state.merge({
        currentType: nextType,
        nextType: nextNextType,
        rotation: 0,
        position: [
          gameConfig.gridWidth / 2 - 2,
          gameConfig.gridHeight - 4
        ]
      });
    }
    case ActionTypes.TICK:
    case ActionTypes.SOFT_DROP: {
      return state.updateIn(['position', 1], position => position - 1);
    }
    case ActionTypes.MOVE_LEFT: {
      return state.updateIn(['position', 0], position => position - 1);
    }
    case ActionTypes.MOVE_RIGHT: {
      return state.updateIn(['position', 0], position => position + 1);
    }
    case ActionTypes.ROTATE_LEFT: {
      return state.update('rotation', rotation => (rotation + 3) % 4);
    }
    case ActionTypes.ROTATE_RIGHT: {
      return state.update('rotation', rotation => (rotation + 1) % 4);
    }
    default:
      return state
  }
}
