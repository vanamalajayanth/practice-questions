const truthValuesOf = function (numbers) {
  return numbers.map(function (number) {
    return number <= 0 ? false : true;
  });
};

console.log(truthValuesOf([]));
console.log(truthValuesOf([0, 1, 2, 3]));