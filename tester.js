const isUserActive = function (userDetails) {
  return userDetails.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isUserActive);
};

console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));