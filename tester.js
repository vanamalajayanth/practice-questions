const reversedStringsOf = function (strings) {
  return strings.map(function (string) {
    return string.split('').reverse().join('');
  });
};

console.log(reversedStringsOf([]));
console.log(reversedStringsOf(["hello", "world"]));