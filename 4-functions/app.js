window.addEventListener('DOMContentLoaded', e => {
  //** Declaration */
  // function sayHello(firstName, lastName) {
  //   console.log(firstName, lastName);
  //   console.log('hello world');
  //   return `hello ${firstName} ${lastName}`;
  // }
  // let res = sayHello('Petya', 'Ivanov');
  // console.log('res: ', res);
  // let x = 10;
  // function foo(x) {
  //   x = 20;
  //   console.log(x);
  //   return x;
  // }
  // foo();
  // console.log(x);
  // const user = {
  //   name: 'Denis',
  //   age: 26
  // };
  // function getObj(obj) {
  //   obj.name = 'Den';
  // }
  // getObj(user);
  // console.log('obj: ', obj);
  //** Expression */
  // const square = function(x) {
  //   return x * x;
  // };
  // console.log('square: ', square(4));
  // (function(msg) {
  //   console.log(msg);
  // })('hello World');
  // function multiply() {
  //   let ret = 1;
  //   if (!arguments[0]) return 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     const item = arguments[i];
  //     console.log('item: ', item, ret);
  //     ret *= item;
  //   }
  //   //console.log(arguments);
  //   return ret;
  // }
  // console.log(multiply(2, 4, 5, 6), multiply());
  // clgmultiply();
  function reverseString(str) {
    str = String(str);
    strNew = '';
    for (i = str.length - 1; i >= 0; i--) {
      strNew += str[i];
    }
    return strNew;
  }
  // console.log(
  //   reverseString('test'),
  //   reverseString(''),
  //   reverseString(null),
  //   reverseString(undefined),
  //   reverseString()
  // );

  function getCodeStringFromText(str) {
    str = String(str);
    let strNew = '';
    for (let i = 0; i < str.length; i++) {
      strNew += str[i].charCodeAt() + ' ';
    }

    return strNew.trim();
  }

  // console.log(getCodeStringFromText('hello'));

  function guessTheNumber(num) {
    if (num < 0 || num > 10)
      return new Error('Please provide number in range 0-10');
    if (isNaN(num)) return new Error('Please provide a valid number');
    let rand = Math.round(Math.random() * 10 + 1);
    if (rand === num) {
      return 'YOU WIN';
    } else {
      return `You are lose, your Number is ${num}, the random number is ${rand}`;
    }
  }
  console.log(guessTheNumber(5));

  //==== end DOMContentLoaded ====
});
