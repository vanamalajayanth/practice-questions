const isScoreGreaterThanStandard = function (standard) {
  return function (studentDetails) {
    return studentDetails.grade > standard;
  };
};

const filterHighGrades = function (students) {
  return students.filter(isScoreGreaterThanStandard(80));
};
console.log(filterHighGrades([]));
console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));