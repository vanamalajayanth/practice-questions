const lengthsOf = function (strings) {
  return strings.map(function (string) {
    return string.length;
  });
};

console.log(lengthsOf([]));
console.log(lengthsOf(["apple", "banana", "kiwi"]));