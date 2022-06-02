function capitalize(a) {
  if (typeof a !== "string") {
    return "error, input invalid";
  }
  const firstLetter = a.substr(0, 1).toUpperCase();
  const remaining = a.substr(1);

  return firstLetter + remaining;
}

function reverseString(a) {
  const array = String(a);
  const arrayLetters = array.split("");
  let result = "";
  for (let i = arrayLetters.length - 1; i >= 0; i -= 1) {
    result += arrayLetters[i];
  }
  return result;
}

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) return "error";
    return a / b;
  };

  return {
    add, sub, multiply, divide,
  };
})();

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function resetCountABC(numberLetter) {
  if (numberLetter > 26) return numberLetter - 26;
  if (numberLetter < 1) return numberLetter + 26;
  return numberLetter;
}

function upperLetter(letter, shift, abc) {
  let lowerLetter = letter.toLowerCase();
  let numberLetter = "";
  numberLetter = parseInt(abc[lowerLetter], 10);
  numberLetter += shift;
  numberLetter = resetCountABC(numberLetter);
  numberLetter = String(numberLetter);
  lowerLetter = String(getKeyByValue(abc, numberLetter));
  return lowerLetter.toUpperCase();
}

function ceasarCipher(string, shift) {
  const array = String(string);
  const arrayLetters = array.split("");
  const abc = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26",
  };

  let result = "";

  for (let i = 0; i < arrayLetters.length; i += 1) {
    const currentLetter = arrayLetters[i];
    let numberLetter = "";
    if (currentLetter === currentLetter.toUpperCase()
    && currentLetter !== currentLetter.toLowerCase()) {
      result += upperLetter(currentLetter, shift, abc);
    } else if (currentLetter in abc) {
      numberLetter = parseInt(abc[currentLetter], 10);
      numberLetter += shift;
      numberLetter = resetCountABC(numberLetter);
      numberLetter = String(numberLetter);
      result += String(getKeyByValue(abc, numberLetter));
    } else {
      result += currentLetter;
    }
  }

  return result;
}

module.exports = {
  capitalize, reverseString, calculator, ceasarCipher,
};
