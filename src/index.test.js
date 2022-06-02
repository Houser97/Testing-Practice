const index = require("./index");

test("String with first letter capitalized", () => {
  expect(index.capitalize("houser")).toBe("Houser");
});

test("String with first letter capitalized", () => {
  expect(index.capitalize(2)).toBe("error, input invalid");
});

test("Reverse String", () => {
  expect(index.reverseString("houser")).toBe("resuoh");
});

test("Reverse String", () => {
  expect(index.reverseString("houser is handsome")).toBe("emosdnah si resuoh");
});

test("Reverse String", () => {
  expect(index.reverseString("houser is 2 handsome")).toBe("emosdnah 2 si resuoh");
});

test("Reverse String", () => {
  expect(index.reverseString(345)).toBe("543");
});
