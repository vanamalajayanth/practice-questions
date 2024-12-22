const arePagesMoreThanStandard = function (standard) {
  return function (bookDetails) {
    return bookDetails.pages > standard;
  };
};

const filterLongBooks = function (books) {
  return books.filter(arePagesMoreThanStandard(200));
};

console.log(filterLongBooks([]));
console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));