const getSum = function (sum, product) {
  return product.price + sum;
};

const isPriceLowerThanAverage = function (products) {
  const average = products.reduce(getSum, 0) / products.length;

  return function (product) {
    return product.price < average;
  };
};

const filterBelowAveragePrice = function (products) {
  return products.filter(isPriceLowerThanAverage(products));
};

console.log(filterBelowAveragePrice([]));
console.log(filterBelowAveragePrice([{ name: "item1", price: 10 }, { name: "item2", price: 20 }, { name: "item3", price: 5 }]));