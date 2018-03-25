import { fromJS } from 'immutable';
import {
  INITIALISE_GAME,
  PAUSE
} from '../constants/actionTypes';

const initialState = fromJS({
  ready: false,
  paused: false
});

export default function grid(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_GAME: {
      return state.set('ready', true);
    }
    default:
      return state
  }
}
