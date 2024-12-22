const uppercaseOf = function (strings) {
  return strings.map(function (string) {
    return string.toUpperCase();
  });
};
console.log(uppercaseOf([]));
console.log(uppercaseOf(["hello", "world"]));