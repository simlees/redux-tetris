import { createSelector } from 'reselect';
import { getRotatedTetrominoBlocks } from './tetrominoes';
import gameConfig from '../config/game';

export const getGridWithActiveTetromino = createSelector(
  [
    state => state.grid,
    state => getRotatedTetrominoBlocks(state),
    state => state.tetromino.get('position'),
    state => state.tetromino.get('currentType')
  ],
  (gridWithoutActiveTetromino, activeTetrominoBlocks, position, type) => {
    return gridWithoutActiveTetromino.withMutations(grid => {
      activeTetrominoBlocks.forEach(block => {
        const x = block[0] + position.get('0');
        const y = block[1] + position.get('1');
        grid.setIn([x, y, 'value'], type);
      });
    });
  }
)

export const squareIsVacant = createSelector(
  [
    state => state.grid,
    (state, x, y) => x,
    (state, x, y) => y,
  ],
  (grid, x, y) => grid.getIn([x, y, 'value']) === null
)

// export const getHighestGridBlock = createSelector(
//   [state => state.grid],
//   grid => {
//     for (let y = 0;  y < gameConfig.gridHeight;  y++) {
//       grid.forEach(column => {
//         if (column.getIn([y, 'value']) !== null) {
//           continue;
//         }
//       })
//     }
//   }
// )

// export const getRenderedGrid = createSelector(

// )