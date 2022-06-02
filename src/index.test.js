const index = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(index.sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(index.sub(1, 2)).toBe(-1);
});
