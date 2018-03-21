import { createSelector } from 'reselect';
import tetrominoes from './../constants/tetrominoes';
import { squareIsVacant } from './grid';

export const getRotatedTetrominoBlocks = createSelector(
  [
    state => state.tetromino.get('currentType'),
    state => state.tetromino.get('rotation')
  ],
  (currentType, rotation) => {
    if (!currentType) {
      return [];
    }
    const { blocks, rotationalCenter } = tetrominoes[currentType];
    if (rotation === 0) {
      return blocks;
    }
    return blocks.map(([x, y]) => {
      x -= rotationalCenter[0];
      y -= rotationalCenter[1];
      for (let i = 0; i < rotation; i++) {
        [x, y] = [y, -x];
      }
      x += rotationalCenter[0];
      y += rotationalCenter[1];
      return [x, y];
    });
  }
)

export const getDropAffordanceBlocks = createSelector(
  [
    state => getRotatedTetrominoBlocks(state),
    state => state.tetromino.get('position'),
    state => state.grid
  ],
  (blocks, position, grid) => {
    let lowestAffordance = blocks;
    while (true) {
      if (blocks.some(block => !squareIsVacant(grid, ...block))) {
        return lowestAffordance;
      }
      lowestAffordance = blocks.map(block => {
        block[1] -= 1;
        return block;
      });
    }
  }

)
