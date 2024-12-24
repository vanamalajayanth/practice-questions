const extractNames = function (objects) {
  return objects.map((object) => object.name);
};

console.log(extractNames([]));
console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));
