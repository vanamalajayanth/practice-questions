const doubleLettersOf = function (strings) {
  return strings.map(function (string) {
    return string.split('').map(function (string) {
      return string.repeat(2);
    }).join('');
  });
};

console.log(doubleLettersOf([]));
console.log(doubleLettersOf(["hello", "world"]));