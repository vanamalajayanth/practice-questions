const filterInStockProducts = function (products) {
  return products.filter(function isProductInStock(product) {
    return product.inStock;
  });
};

console.log(filterInStockProducts([]));
console.log(filterInStockProducts([{ product: "apple", inStock: true }, { product: "banana", inStock: false }]));