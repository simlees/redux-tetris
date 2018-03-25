import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import tetrominoes from './../constants/tetrominoes';
import { squareIsVacant } from './grid';

export const getRotatedTetrominoBlocks = createSelector(
  [
    state => state.tetromino.get('currentType'),
    state => state.tetromino.get('rotation')
  ],
  (currentType, rotation) => {
    const { blocks, rotationalCenter } = tetrominoes[currentType];
    if (rotation === 0) {
      return fromJS(blocks);
    }
    return fromJS(blocks.map(([x, y]) => {
      x -= rotationalCenter[0];
      y -= rotationalCenter[1];
      for (let i = 0; i < rotation; i++) {
        [x, y] = [y, -x];
      }
      x += rotationalCenter[0];
      y += rotationalCenter[1];
      return [x, y];
    }));
  }
);

export const getTetrominoBlocksOnGrid = createSelector(
  [
    getRotatedTetrominoBlocks,
    state => state.tetromino.get('position')
  ],
  (blocks, position) => blocks.map(block => fromJS([
    block.get(0) + position.get(0),
    block.get(1) + position.get(1)
  ]))
);

