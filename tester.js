const isProductInStock = function (productDetails) {
  return productDetails.inStock;
};

const filterInStockProducts = function (products) {
  return products.filter(isProductInStock);
};

console.log(filterInStockProducts([]));
console.log(filterInStockProducts([{ product: "apple", inStock: true }, { product: "banana", inStock: false }]));