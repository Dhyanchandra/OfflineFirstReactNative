import productsData from '../asset/products.json'; 

export default class ProductListViewModel {
  constructor() {
    this.allProducts = this.generateProducts(100000); 
  }

  generateProducts(count) {
    // return productsData;
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        id: i,
        title: `Product ${i}`,
        price: i,
        image: 'https://picsum.photos/536/354',
      });
    }
    return products;
  }

  fetchProducts(offset = 0, limit = 20) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.allProducts.slice(offset, offset + limit));
      }, 300);
    });
  }
}
