const nonConstructibleChange = require('../algorithms/nonConstructibleChange');

test('Case 1 / Empty array.', () => {
  const coins = [];
  expect(nonConstructibleChange(coins)).toEqual(1);
});

test('Case 2 / Single coin.', () => {
  const coins = [8];
  expect(nonConstructibleChange(coins)).toEqual(9);
});

test('Case 3 / Multiple coins.', () => {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  expect(nonConstructibleChange(coins)).toEqual(20);
});

test('Case 4 / Duplicate coins.', () => {
    const coins = [1, 1, 2, 2, 3, 3];
    expect(nonConstructibleChange(coins)).toEqual(13);
});