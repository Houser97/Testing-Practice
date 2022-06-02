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

test("Calculator", () => {
  expect(index.calculator.add(1, 5)).toBe(6);
});

test("Calculator", () => {
  expect(index.calculator.sub(1, 5)).toBe(-4);
});

test("Calculator", () => {
  expect(index.calculator.multiply(5, 5)).toBe(25);
});

test("Calculator", () => {
  expect(index.calculator.multiply(5, -5)).toBe(-25);
});

test("Calculator", () => {
  expect(index.calculator.divide(1, 0)).toBe("error");
});

test("Calculator", () => {
  expect(index.calculator.divide(50, 5)).toBe(10);
});

test("ceasarCipher", () => {
  expect(index.ceasarCipher("houser", 1)).toBe("ipvtfs");
});

test("ceasarCipher, check commas and spaces", () => {
  expect(index.ceasarCipher("houser is, cool", 1)).toBe("ipvtfs jt, dppm");
});

test("ceasarCipher check capital letters", () => {
  expect(index.ceasarCipher("houser Is, cool", 1)).toBe("ipvtfs Jt, dppm");
});

test("ceasarCipher check z letter to reset", () => {
  expect(index.ceasarCipher("z", -2)).toBe("x");
});

test("ceasarCipher check z capital letter to reset", () => {
  expect(index.ceasarCipher("Z", 5)).toBe("E");
});

test("ceasarCipher check a capital letter to reset", () => {
  expect(index.ceasarCipher("A", -5)).toBe("V");
});

test("ceasarCipher check a  letter to reset", () => {
  expect(index.ceasarCipher("a", -4)).toBe("w");
});

test("ceasarCipher check punctuation", () => {
  expect(index.ceasarCipher("HouSer, is; cooL", 1)).toBe("IpvTfs, jt; dppM");
});
