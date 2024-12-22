const getOrdersSum = function (sum, product) {
  return product.amount + sum;
};

const isAmountLowerThanAverage = function (orders) {
  const average = orders.reduce(getOrdersSum, 0) / orders.length;

  return function (order) {
    return order.amount > average;
  };
};

const filterHighValueOrders = function (orders) {
  return orders.filter(isAmountLowerThanAverage(orders));
};

console.log(filterHighValueOrders([]));
console.log(filterHighValueOrders([{ orderId: 1, amount: 20 }, { orderId: 2, amount: 50 }, { orderId: 3, amount: 10 }]));