import { createSelector } from 'reselect';
import {
  getTetrominoBlocksOnGrid
} from './tetrominoes';
import gameConfig from '../config/game';
import { getEmptyGrid } from '../utils/gridUtils';

const emptyGrid = getEmptyGrid();

export const getGridWithActiveTetromino = createSelector(
  [
    state => state.grid,
    state => getTetrominoBlocksOnGrid(state),
    state => state.tetromino.get('currentType')
  ],
  (gridWithoutActiveTetromino, activeTetrominoBlocks, type) => {
    return gridWithoutActiveTetromino.withMutations(grid => {
      activeTetrominoBlocks.forEach(block => {
        grid.setIn([block.get(0), block.get(1), 'value'], type);
      });
    });
  }
)

const squareIsInRange = (x, y) => 
  x >= 0 && x < gameConfig.gridWidth &&
  y >= 0 && y < gameConfig.gridHeight

export const squareIsVacant = createSelector(
  [
    state => state.grid,
    (state, x, y) => x,
    (state, x, y) => y,
  ],
  (grid, x, y) => grid.getIn([x, y, 'value']) === null && squareIsInRange(x, y)
)

export const getDropAffordanceBlocks = createSelector(
  [
    state => getTetrominoBlocksOnGrid(state),
    state => state
  ],
  (blocks, state) => {
    let lowestAffordance = blocks;
    for (let i = 0; i < 25; i++) {
    // while (true) {
      if (blocks.find(block => !squareIsVacant(state, block.get(0), block.get(1)))) {
        return lowestAffordance;
      }
      lowestAffordance = blocks;
      blocks = blocks.map(block => {
        return block.update(1, value => value - 1);
      });

      if (i === 24) {
        console.log('completely broken');
        // return fromJS([]);
      }
    }
  }
)

export const getRenderedGrid = createSelector(
  [
    getGridWithActiveTetromino,
    getDropAffordanceBlocks
  ],
  (grid, affordanceBlocks) => {
    return grid.withMutations(g => {
      affordanceBlocks.forEach(block => {
        g.updateIn(
          [block.get(0), block.get(1), 'value'],
          value => value || 'affordance'
        );
      });
    });
  }
)

export const getRenderedGridIfReady = state => {
  if (state.game.get('ready')) {
    return getRenderedGrid(state);
  } else {
    return emptyGrid;
  }
}

