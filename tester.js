const isWordGreaterThanLimit = function (limit) {
  return function (string) {
    return string.length > limit;
  };
};

const filterLongWords = function (words) {
  return words.filter(isWordGreaterThanLimit(5));
};

console.log(filterLongWords([]));
console.log(filterLongWords(['apple']));
console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));
console.log(filterLongWords(["apple", "banana", "kiwi", "grape", 'papaya', 'pine apple']));