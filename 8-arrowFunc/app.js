const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);
console.log(plusRes);

const single = (x = 1) => x * 2;
console.log(single(2));

const moreAction = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

const returnObj = (str = '') => ({
  value: str,
  lenght: str.length
});

function plusFoo(x, y) {
  //console.log(arguments);
  return x + y;
}

plusFoo(1, 2, 3, 'hello');

const obj = {
  firstName: 'Denis',
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    //this.getAgeArrow = () => console.log(this);
    //setTimeout(() => console.log(this));
  }
};

//obj.getAge();
// obj.getAgeArrow();

const sum = (...props) => {
  const params = props;
  console.log('props: ', params.length);

  if (params.length === 0) return 0;

  return params.reduce((prev, next) => prev + next);
};

sum(1, 2, 3, 4); // 10
console.log('sum: ', sum(1, 2, 3, 4));

sum();
console.log('sum: ', sum()); // 0

const convertToObject = num => {
  const obj = {
    value: num,
    isOdd: Boolean(num % 2)
  };

  return obj;
};
console.log(convertToObject(5));
