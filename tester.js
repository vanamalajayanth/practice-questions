const filterIncompleteProfiles = function (users) {
  return users.filter(function isProfileComplete(user) {
    return !user.profileComplete;
  });
};

console.log(filterIncompleteProfiles([]));
console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));
