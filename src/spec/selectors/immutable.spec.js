import { fromJS } from 'immutable';
import { getKeyByValue } from '../../selectors/immutable';

const map = fromJS({
  a: 1,
  b: 2
});

describe('getKeyByValue', () => {
  it('returns key by value', () => {
    const key = getKeyByValue(map, 1);
    expect(key).toBe('a');
  });
  it('returns no key when value is not in map', () => {
    const key = getKeyByValue(map, 3);
    expect(key).toBe(undefined);
  });
});

