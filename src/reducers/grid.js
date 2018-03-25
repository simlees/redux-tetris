
import * as ActionTypes from '../constants/actionTypes';
import { getEmptyGrid } from '../utils/gridUtils';

export default function grid(state = getEmptyGrid(), action) {
  switch (action.type) {
    case ActionTypes.HARD_DROP: {
      const { blocks, currentType } = action;
      return state.withMutations(grid => {
        blocks.forEach(block => {
          grid.setIn([block.get(0), block.get(1), 'value'], currentType);
        });
      });
    }
    default:
      return state
  }
}
