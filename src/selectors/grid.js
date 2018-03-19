import { createSelector } from 'reselect';

export const getGridWithActiveTetronimo = createSelector(
  [
    state => state.tetronimoes,
    state => state.grid
  ]
)