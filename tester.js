const squaresOf = function (numbers) {
  return numbers.map(function (number) {
    return number ** 2;
  });
};

console.log(squaresOf([]));
console.log(squaresOf([1, 2, 3]));