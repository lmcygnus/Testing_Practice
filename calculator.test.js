import calculator from './calculator';

test('calculator', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('calculator', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('calculator', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('calculator', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
