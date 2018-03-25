import { fromJS } from 'immutable';
import gameConfig from '../config/game';

export function getEmptyGrid() {
  const grid = [];
  for (let i = 0; i < gameConfig.gridWidth; i++) {
    const column = [];
    for (let j = 0; j < gameConfig.gridHeight; j++) {
      column.push({ value: null });
    }
    grid.push(column);
  }
  // grid[1][0].value = 'I';
  // grid[2][0].value = 'O';
  // grid[3][0].value = 'T';
  // grid[4][0].value = 'S';
  // grid[4][1].value = 'S';
  // grid[5][0].value = 'Z';
  // grid[6][0].value = 'J';
  // grid[7][0].value = 'L';
  return fromJS(grid);
}