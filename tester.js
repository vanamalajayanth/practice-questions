const filterEvenNumbers = function (numbers) {
  return numbers.filter(function (number) {
    return (number & 1) === 0;
  });
};
console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers([1]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 7, 8, 4, 5, 2, 3]));