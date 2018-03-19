import { fromJS } from 'immutable';
import { getRotatedTetrominoBlocks } from '../../selectors/tetronimoes';

const getState = (type, rotation) => ({
  tetrominoes: fromJS({
    currentType: type,
    rotation: rotation
  })
});

describe('getRotatedTetrominoBlocks', () => {
  it('correctly transforms blocks with a block center', () => {
    const state = getState('J', 1);
    const blocks = getRotatedTetrominoBlocks(state);
    expect(blocks).toEqual([
      [2, 3],
      [1, 3],
      [1, 2],
      [1, 1],
    ]);
  });
  it('correctly transforms blocks with an offset center', () => {
    const state = getState('I', 1);
    const blocks = getRotatedTetrominoBlocks(state);
    expect(blocks).toEqual([
      [2, 3],
      [2, 2],
      [2, 1],
      [2, 0],
    ]);
  });
});

