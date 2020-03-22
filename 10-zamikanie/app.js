function getFullName(firstName, lastName) {
  console.log(firstName, lastName);
  return function() {
    return `${firstName} ${lastName}`;
  };
}
const getname = getFullName('PAvel', 'Dubitskiy');
// console.log('getname: ', getname());

function updateValue(val) {
  let x = val;
  return function(num = 0) {
    //body
    return (x += num);
  };
}

const updateVal = updateValue(2);
// console.log(updateVal(1));
// console.log(updateVal(4));
function checkCred() {
  const login = 'test';
  const pass = 'somePassword';
  return {
    checkLogin(value) {
      return login === value;
    },
    checkPass(value) {
      return pass === value;
    }
  };
}
const check = checkCred();
// console.log(check.checkLogin('test'));
function clousureExample() {
  const arrOfFunc = [];
  let value = '';
  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  console.log(arrOfFunc);
  return arrOfFunc;
}

// const res = clousureExample();
// res[0]();
// res[6]();

/**
 ** homework
 */
function minus(a) {
  let b = a;
  if (!a) b = 0;

  return function(a) {
    if (!a) a = 0;
    b -= a;
    return b;
  };
}
console.log(minus(10)(7));

function multiplyMaker(a) {
  let b = a;
  return function(a) {
    b = b * a;
    return b;
  };
}

const multiply = multiplyMaker(2);
// 4 (2 * 2)
// console.log('multiply(2): ', multiply(2));

// // 4 (4 * 1)
// console.log('multiply(1)', multiply(1));

// // 12 (4 * 3)
// console.log('multiply(3): ', multiply(3));

// // 120 (12 * 10)
// console.log('multiply(10) : ', multiply(10));

const module = (function() {
  let strIn = '';
  function setStr(str) {
    if (!str) strIn = '';
    if (typeof str === 'number') strIn = String(str);
    strIn = str;
    return strIn;
  }
  function getStr() {
    return strIn;
  }
  function getLenght() {
    return strIn.length;
  }

  return {
    setStr: setStr,
    getStr: getStr,
    getLenght: getLenght
  };
})();

// console.log(module.setStr('abcde'));
// console.log(module.getStr());
// console.log(module.getLenght());

const calc = (function() {
  let num = 0;
  function setNum(a) {
    num = a;
    return num;
  }
  function addNum(add) {
    num += add;
    return num;
  }
  function multiplyNum(mult) {
    num *= mult;
    return num;
  }
  function getNum() {
    return num;
  }
  return {
    setNum: setNum,
    addNum: addNum,
    multiplyNum: multiplyNum,
    getNum: getNum
  };
})();

console.log(calc.setNum(5));
console.log(calc.addNum(5));
console.log(calc.multiplyNum(2));
console.log(calc.getNum());
