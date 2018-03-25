import { fromJS } from 'immutable';
import {
  getRotatedTetrominoBlocks
} from '../../selectors/tetrominoes';
import { getState } from '../utils';

const getTState = (type, rotation) => ({
  tetromino: fromJS({
    currentType: type,
    rotation: rotation
  })
});

describe('getRotatedTetrominoBlocks', () => {
  it('transforms blocks with a block center', () => {
    const state = getTState('J', 1);
    const blocks = getRotatedTetrominoBlocks(state);
    expect(blocks.toJS()).toEqual([
      [2, 3],
      [1, 3],
      [1, 2],
      [1, 1],
    ]);
  });
  it('transforms blocks with an offset center', () => {
    const state = getTState('I', 1);
    const blocks = getRotatedTetrominoBlocks(state);
    expect(blocks.toJS()).toEqual([
      [2, 3],
      [2, 2],
      [2, 1],
      [2, 0],
    ]);
    const state2 = getTState('I', 2);
    const blocks2 = getRotatedTetrominoBlocks(state2);
    expect(blocks2.toJS()).toEqual([
      [3, 1],
      [2, 1],
      [1, 1],
      [0, 1],
    ]);
  });
});

