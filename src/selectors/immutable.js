export const getKeyByValue = (map, value) => {
  const entry = map.findEntry(currValue => value === currValue);
  return entry && entry[0];
}