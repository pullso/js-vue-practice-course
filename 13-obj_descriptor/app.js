window.addEventListener('DOMContentLoaded', e => {
  const car = {
    brand: 'Audi',
    year: 2019,
    get age() {
      return `Машина ${this.brand} выпущена в ${this.year} году`;
    },
    set age(val) {
      this.year = val;
    }
  };

  // Object.defineProperty(car, 'age', {
  //   //configurable: false //нельзя удалить данное свойство и редактировать, но можно перезаписать
  //   //enumerable: false //ненумерует свойство, делает его неперебираемым,
  //   //writable: false //запрещает запись внутрь свойства
  //   get: function() {
  //     return `Машина ${this.brand} выпущена в ${this.year} году`;
  //   }
  // });
  car.age = 2020;
  console.log(car.age);

  Object.defineProperty(window, 'globalVar', {
    set: function(value) {
      console.log(value);
      debugger;
    }
  });

  function foo() {
    globalVar = 10;
  }
  foo();
  //==== end DOMContentLoaded ====
});
