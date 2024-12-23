const charCodesOf = function (strings) {
  return strings.map(function (string) {
    return string.charCodeAt();
  });
};

console.log(charCodesOf([]));
console.log(charCodesOf(["a", "b", "c"]));
