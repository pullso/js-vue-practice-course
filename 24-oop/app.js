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

// const apple = new Product('apple', 100, 15);
// console.log('apple: ', apple, apple.getPriceWithDiscount());
// apple.setPrice(244);
// console.log('apple: ', apple, apple.getPriceWithDiscount());
// const samsung = new Product('samsung', 120, 30);
// console.log('samsung: ', samsung, samsung.getPriceWithDiscount());

//* Object.create

const protoForObj = {
  sayHello() {
    return 'hello world';
  },
};

const obj = Object.create(protoForObj, {
  firstName: { value: 'Pavel' },
});
console.log('obj: ', obj, obj.sayHello());

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};
const user = new User('Pavel', 'Dubitskiy');

// customer

function Customer(firstName, lastName, membership) {
  User.apply(this, arguments);
  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer('Pavel', 'Egorov', 'basic');
// console.log('customer: ', customer.getMembership());

//* HOMEWORK

function Planet(name) {
  this.name = name;
  this.getName = function () {
    return 'Planet name is ' + this.name;
  };
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.apply(this, arguments);
  this.satelliteName = satelliteName;
  this.getName = function () {
    return `Planet name is ${this.name}. The satellite is ${satelliteName}`;
  };
}

const earth = new PlanetWithSatellite('earth', 'moon');
//console.log('earth: ', earth.getName());

function Building(name, floors) {
  this.name = name;
  this.floors = floors;
  this.getFloors = function () {
    return `Количество этажей ${this.floors}`;
  };
  this.setFloors = function (floors) {
    this.floors = floors;
  };
}

// const house = new Building('house', 42);
// console.log('house: ', house);

function TownHouse(name, floors, flats) {
  Building.apply(this, arguments);
  this.flats = flats;
  this.getFloors = function () {
    return {
      floors: this.floors,
      countFlats: this.flats * this.floors,
    };
  };
}
function ShopHouse(name, floors, shops) {
  Building.apply(this, arguments);
  this.shops = shops;
  this.getFloors = function () {
    return {
      floors: this.floors,
      countShops: this.floors * this.shops,
    };
  };
}

// const house2 = new TownHouse('housePeople', 4, 2);
// console.log('house2: ', house2.getFloors());
// const house3 = new ShopHouse('shopHouse', 42, 2);
// console.log('house3: ', house3.getFloors());

function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getInfo = function () {
  return `${this.name}: ${this.price}`;
};

const officeFurniture = new Furniture('table', 24);
officeFurniture.phoneSpace = true;

officeFurniture.getInfo = function () {
  return `${this.name}: ${this.price} ${this.phoneSpace}`;
};
// console.log('officeFurniture: ', officeFurniture.getInfo());

const homeFurniture = new Furniture('chair', 25);

homeFurniture.discount = 24;
homeFurniture.getInfo = function () {
  return `${this.name}: ${this.price} ${this.discount}`;
};
// console.log('homeFurniture: ', homeFurniture.getInfo());
