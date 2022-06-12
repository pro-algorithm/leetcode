const minOperations = require("./index");

test("example 1", () => {
  expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2);
});

test("example 2", () => {
  expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1);
});

test("example 3", () => {
  expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5);
});
