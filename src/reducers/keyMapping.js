import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/actionTypes';
import defaultKeyMapping from '../config/defaultKeyMapping';

export default function keyMapping(state = fromJS(defaultKeyMapping), action) {
  switch (action.type) {
    default:
      return state
  }
}
