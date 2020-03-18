window.addEventListener('DOMContentLoaded', e => {
  // let str = 'hello';
  // let res = '';
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  // }
  const user = [
    {
      name: 'denis',
      age: 30
    },
    {
      name: 'oleg',
      age: 34
    },
    {
      name: 'sveta',
      age: 14
    }
  ];
  // const userObj = {};
  // for (let i = 0; i < user.length; i++) {
  //   const item = user[i];
  //   console.log('item: ', item);
  //   console.log('user[i]: ', user[i].name);
  //   userObj[user[i].name] = user[i];
  //   //body
  // }
  // console.log('userObj: ', userObj);
  // const user = {
  //   name: 'Denis',
  //   age: 30
  // };
  // for (const key in user) {
  //   if (user.hasOwnProperty(key)) {
  //     const element = user[key];
  //     console.log(element);
  //   }
  // }

  // for (const iterator of user) {
  //   console.log(iterator);
  // }

  let str = 'i am in the easycode',
    strNew = '';
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    strNew += item.toUpperCase();
  }
  console.log('strNew: ', strNew);
  str = 'tseb eht ma i';
  strNew = '';
  for (i = str.length - 1; i >= 0; i--) {
    strNew += str[i];
  }
  console.log('strNew: ', strNew);
  let fact = 1;

  for (let i = 1; i < 10; i++) {
    fact *= i;
  }
  console.log('fact: ', fact);

  str = 'JavaScript is a pretty good language';
  strNew = '';
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (i > 0 && str[i - 1] === ' ') {
      strNew += item.toUpperCase();
      continue;
    }
    strNew += item;
  }
  console.log('strNew: ', strNew);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  for (const iterator of arr) {
    if (iterator % 2 !== 0) {
      console.log('iterator: ', iterator);
    }
  }
  let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
  };
  for (const key in list) {
    if (typeof list[key] === 'string') {
      list[key] = list[key].toUpperCase();
    }
  }
  console.log(list);
});
