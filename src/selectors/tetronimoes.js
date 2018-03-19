import { createSelector } from 'reselect';
import tetrominoes from './../constants/tetrominoes';

export const getRotatedTetrominoBlocks = createSelector(
  [
    state => state.tetrominoes.get('currentType'),
    state => state.tetrominoes.get('rotation')
  ],
  (currentType, rotation) => {
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
