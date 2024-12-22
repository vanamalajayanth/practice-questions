const isNumberGreaterThanLimit = function (limit) {
  return function (number) {
    return number > limit;
  };
};

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isNumberGreaterThanLimit(10));
};

console.log(filterNumbersGreaterThanTen([]));
console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));