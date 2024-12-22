const isProfileComplete = function (userDetails) {
  return !userDetails.profileComplete;
};

const filterIncompleteProfiles = function (users) {
  return users.filter(isProfileComplete);
};

console.log(filterIncompleteProfiles([]));
console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));