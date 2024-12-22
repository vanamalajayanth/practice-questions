const getRatingsSum = function (sum, book) {
  return sum + book.rating;
};

const isRatingGreaterThanAverage = function (books) {
  const average = books.reduce(getRatingsSum, 0) / books.length;

  return function (book) {
    return book.rating > average;
  };
};

const filterTopRatedBooks = function (books) {
  return books.filter(isRatingGreaterThanAverage(books));
};

console.log(filterTopRatedBooks([]));
console.log(filterTopRatedBooks([{ title: "Book 1", rating: 4 }, { title: "Book 2", rating: 5 }, { title: "Book 3", rating: 3 }]));