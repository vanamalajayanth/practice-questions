const isPassed = function (subject) {
  return subject.passed;
};

const areAllSubjectsPassed = function (student) {
  return student.subjects.every(isPassed);
};

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(areAllSubjectsPassed);
};
console.log(filterStudentsWithAllSubjectsPassed([]));
console.log(filterStudentsWithAllSubjectsPassed([{ name: "John", subjects: [{ name: "Math", passed: true }, { name: "Science", passed: true }] }, { name: "Jane", subjects: [{ name: "Math", passed: false }, { name: "Science", passed: true }] }]));