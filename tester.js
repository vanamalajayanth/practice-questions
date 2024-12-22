const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) {
    return !boolean;
  });
};

console.log(negatedBooleansOf([]));
console.log(negatedBooleansOf([true, false, true]));