window.addEventListener('DOMContentLoaded', e => {
  // function getPrice(currency = '$') {
  //   console.log(currency + this.price);
  //   return this;
  // }

  // const prod = {
  //   name: 'intel',
  //   price: 100,
  //   getPrice,
  //   getName() {
  //     console.log(this.name);
  //   },
  //   info: {
  //     infromation: ['2,3gh'],
  //     getInfo: function() {
  //       console.log(this);
  //     }
  //   }
  // };
  // prod.getPrice();
  // prod.getName();

  // const prod2 = {
  //   name: 'AMD',
  //   price: 50,
  //   getPrice
  // };

  // //prod2.getPrice();

  // prod2.getName = prod.getName;
  // console.log(prod2.getName);
  // prod2.getName();

  // let str = 'hello world';
  // const revStr = str
  //   .split('')
  //   .reverse()
  //   .join('');

  // function getName() {
  //   console.log(this.name);
  //   return this;
  // }
  // // console.log('revStr: ', revStr);
  // const prod3 = {
  //   name: 'Intel',
  //   price: 120,
  //   getPrice
  //   // getName
  // };

  // prod3.getName().getPrice();

  //getPrice.apply(prod3, ['*']);'
  // setTimeout(prod3.getPrice, 1000);

  // const getPriceBind = prod.getPrice.bind(prod3, '*');
  // console.log('getPriceBind: ', getPriceBind);

  // setTimeout(getPriceBind, 1000);

  /**
   * *HOMEWORK
   */
  const rectangle = {
    width: 43,
    height: 32,
    getSquare() {
      return this.width * this.height;
    }
  };
  console.log(rectangle.getSquare());

  const price = {
    price: 10,
    discount: '15%',
    getPrice() {
      return this.price;
    },
    getPriceWithDisccount() {
      let dis = +this.discount.slice(0, -1) / 100;
      return this.price - dis * this.price;
    }
  };

  console.log(price.getPrice());
  console.log(price.getPriceWithDisccount());

  const obj = {
    height: 10,
    incHeight() {
      return this.height + 1;
    }
  };
  console.log(obj.incHeight());

  const numerator = {
    value: 1,
    double() {
      this.value *= 2;
      return this;
    },
    plusOne() {
      this.value += 1;
      return this;
    },
    minusOne() {
      this.value -= 1;
      return this;
    }
  };

  console.log(
    numerator
      .double()
      .plusOne()
      .plusOne()
      .minusOne()
  );

  const products = {
    price: 24,
    counts: 50,
    getTotalPrice() {
      return this.price * this.counts;
    }
  };
  const products2 = {
    price: 24,
    counts: 542
  };
  let test = products.getTotalPrice.call(products2);

  console.log(products.getTotalPrice(), test);

  let sizes = { width: 5, height: 10 },
    getSquare = function() {
      return this.width * this.height;
    };
  console.log(getSquare.call(sizes));

  let element = {
    height: 25,

    getHeight: function() {
      return this.height;
    }
  };

  let getElementHeight = element.getHeight.bind(element);
  console.log(getElementHeight());

  //==== end DOMContentLoaded ====
});
