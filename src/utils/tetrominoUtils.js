
import tetrominoes from '../constants/tetrominoes';

export function getRandomType() {
  const types = Object.keys(tetrominoes);
  return types[ types.length * Math.random() << 0];
}