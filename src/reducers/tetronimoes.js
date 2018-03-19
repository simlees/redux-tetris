import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/actionTypes';
import gameConfig from '../config/game';

const initialState = fromJS({
  currentType: null,
  position: [null, null], // Bottom left of tetromino bounding box
  rotation: 0, // 0, 1, 2, 3 for default, 90 degrees clockwise, 180 etc
  nextType: null
});

export default function tetronimoes(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INITIALISE_GAME: {
      const { tetronimo, nextTetronimo } = action;
      return state.merge({
        currentType: tetronimo,
        nextType: nextTetronimo,
        rotation: 0,
        position: [
          gameConfig.gridHeight - 5,
          gameConfig.gridWidth / 2 - 2
        ]
      });
    }
    default:
      return state
  }
}
