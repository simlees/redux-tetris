import { Map, List, fromJS } from 'immutable';
import * as ActionTypes from '../constants/actionTypes';
import gameConfig from '../config/game';

function getInitialState() {
  const grid = [];
  for (let i = 0; i < gameConfig.gridHeight; i++) {
    const row = [];
    for (let j = 0; j < gameConfig.gridWidth; j++) {
      row.push({ value: null });
    }
    grid.push(row);
  }
  grid[0][4].value = 'L';
  grid[1][4].value = 'L';
  grid[2][4].value = 'L';
  grid[3][4].value = 'L';
  return fromJS(grid);
}

export default function grid(state = getInitialState(), action) {
  switch (action.type) {
    default:
      return state
  }
}
