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

module.exports = { capitalize, reverseString };
