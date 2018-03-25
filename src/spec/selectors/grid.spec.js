import {
  getDropAffordanceBlocks,
  getRenderedGrid,
} from '../../selectors/grid';
import { getState } from '../utils';


describe('getDropAffordanceBlocks', () => {
  it('returns affordance for empty grid', () => {
    const state = getState();
    const blocks = getDropAffordanceBlocks(state);
    expect(blocks.toJS()).toEqual([
      [4, 1],
      [4, 0],
      [5, 0],
      [6, 0],
    ]);
  });
});

describe('getRenderedGrid', () => {
  it('renders grid with active tetromino and affordance', () => {
    const state = getState();
  });
});