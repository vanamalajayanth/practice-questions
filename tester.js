const isAgeGreaterThanLimit = function (limit) {
  return function (personDetails) {
    return personDetails.age > limit;
  };
};

const filterAdults = function (people) {
  return people.filter(isAgeGreaterThanLimit(30));
};

console.log(filterAdults([]));
console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));