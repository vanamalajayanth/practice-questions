const getDomains = function (string) {
  const startIndex = string.indexOf("@");
  return string.slice(startIndex + 1);
};

const domainNamesOf = function (emails) {
  return emails.map(getDomains);
};

console.log(domainNamesOf([]));
console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));
