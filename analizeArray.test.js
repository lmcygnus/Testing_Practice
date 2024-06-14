import analizeArray from './analizeArray';

test('analize Array', () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('analize Array', () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('analize Array', () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('analize Array', () => {
    expect(analizeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
