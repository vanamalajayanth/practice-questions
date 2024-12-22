const firstCharactersOf = function (strings) {
  return strings.map(function (string) {
    return string[0];
  });
};

console.log(firstCharactersOf([]));
console.log(firstCharactersOf(["apple", "banana", "kiwi"]));