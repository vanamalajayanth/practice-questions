const doubleLetters = function (string) {
  return string.split('').map(function (letter) {
    return letter.repeat(2);
  }).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetters);
};

console.log(doubleLettersOf([]));
console.log(doubleLettersOf(["hello", "world"]));