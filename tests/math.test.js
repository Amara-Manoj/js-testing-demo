const { add, divide } = require('../src/math');
test('adds numbers correctly', () => { expect(add(2, 3)).toBe(5); });
test('division works correctly', () => { expect(divide(6, 3)).toBe(2); });
test('throws error on division by zero', () => {
  expect(() => divide(5, 0)).toThrow("Division by zero not allowed");
});
