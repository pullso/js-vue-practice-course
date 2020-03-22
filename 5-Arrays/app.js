window.addEventListener('DOMContentLoaded', e => {
  //** Базовые методы массиво */
  // const numArr = [2, 42, 512, 123, 44, 34];
  // let value;
  // value = numArr.length;
  // value = Array.isArray(numArr);
  // value = numArr[2];
  // numArr[2] = 42;
  // value = numArr.indexOf(42);
  // value = numArr.push(100);
  // value = numArr.pop();
  // value = numArr.unshift(24);
  // value = numArr.shift();
  // value = numArr.slice(0, 2);
  // value = numArr.splice(1, 0, 'One', 'two');
  // value = numArr.reverse();
  // value = numArr.concat(1, 2);
  // value = numArr.join('');
  // value = 'hello world'.split();
  // value = 'hello world'.split('');
  // console.log(value, numArr);
  //**ДЗ */
  function getArray(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }
    console.log(arr);
    return arr;
  }
  // getArray(10);
  function doubleArray(arr) {
    arr = arr.concat(arr);
    console.log('arr: ', arr);
    return arr;
  }
  doubleArray([1, 2, 3]);

  function changeCollection() {
    if (!arguments.length) return false;
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].shift();
      }
      //console.log(arguments[i]);
    }
    return arguments;
  }

  // console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));

  const users = [
    {
      _id: '5e36b779dc76fe3db02adc32',
      balance: '$1,955.65',
      picture: 'http://placehold.it/32x32',
      age: 33,
      name: 'Berg Zimmerman',
      gender: 'male'
    },
    {
      _id: '5e36b779d117774176f90e0b',
      balance: '$3,776.14',
      picture: 'http://placehold.it/32x32',
      age: 37,
      name: 'Deann Winters',
      gender: 'female'
    },
    {
      _id: '5e36b779daf6e455ec54cf45',
      balance: '$3,424.84',
      picture: 'http://placehold.it/32x32',
      age: 36,
      name: 'Kari Waters',
      gender: 'female'
    }
  ];

  function filterUsers(arr, key, value) {
    if (!Array.isArray(arr))
      return new Error('The first argument should be an array');
    if (typeof key !== 'string' || key === '')
      return new Error('The key should be a valid string');
    if (value === undefined || value === null)
      return new Error('The value should be a valid value.');

    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item[key] === value) ret.push(item);
    }
    return ret;
  }

  console.log(filterUsers(users, 'age', 36));
  //==== end DOMContentLoaded ====
});
