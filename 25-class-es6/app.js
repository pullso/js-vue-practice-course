const str = new String('str');

function Product(brand, price, discount) {
  //1. Создается новый объект
  //2. На новый объекь устанавливается ссылка THIS
  //3. возращает этот объект
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const methodName = 'setPrice';
//ES6
class ProductES {
  constructor(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  }
  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }
  [methodName](newPrice) {
    this.price = newPrice;
  }
  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductES('samsung', 200, 10);
console.log('newProduct: ', newProduct);
console.log(ProductES.plus(1, 2));
