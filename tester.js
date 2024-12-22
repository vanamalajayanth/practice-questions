const isMonthMatching = function (currentMonth) {
  return function (person) {
    const givenMonth = +(person.birthDate.slice(5, 7));

    return currentMonth === givenMonth;
  };
};

const filterBirthdaysThisMonth = function (people) {
  return people.filter(isMonthMatching(12));
};

console.log(filterBirthdaysThisMonth([]));
console.log(filterBirthdaysThisMonth([{ name: "Alice", birthDate: "2024-12-01" }, { name: "Bob", birthDate: "2024-11-01" }]));