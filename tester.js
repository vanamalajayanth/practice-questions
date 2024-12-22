const filterActiveUsers = function (users) {
  return users.filter(function (user) {
    return user.active;
  });
};

console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));