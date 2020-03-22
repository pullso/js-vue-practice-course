window.addEventListener('DOMContentLoaded', e => {
  //forEach
  //filter
  //map - возращает новый массив
  //reduce
  //some/every
  //sort
  //find
  const users = [
    {
      _id: '5cdce6ce338171bb473d2855',
      index: 0,
      isActive: false,
      balance: 2397.64,
      age: 39,
      name: 'Lucile Finley',
      gender: 'female',
      company: 'ZOXY',
      email: 'lucilefinley@zoxy.com',
      phone: '+1 (842) 566-3328',
      registered: '2015-07-12T09:39:03 -03:00'
    },
    {
      _id: '5cdce6ce0aa8d071fa4f4cc5',
      index: 1,
      isActive: true,
      balance: 2608.48,
      age: 33,
      name: 'Woodward Grimes',
      gender: 'male',
      company: 'FORTEAN',
      email: 'woodwardgrimes@fortean.com',
      phone: '+1 (960) 436-3138',
      registered: '2014-09-08T03:24:39 -03:00'
    },
    {
      _id: '5cdce6ce103de120d32d6fe4',
      index: 2,
      isActive: true,
      balance: 1699.99,
      age: 25,
      name: 'Robinson Coleman',
      gender: 'male',
      company: 'GENMOM',
      email: 'robinsoncoleman@genmom.com',
      phone: '+1 (852) 543-3171',
      registered: '2019-04-23T08:24:58 -03:00'
    },
    {
      _id: '5cdce6cebada7a418d8ccb3d',
      index: 3,
      isActive: true,
      balance: 2621.84,
      age: 25,
      name: 'Austin Benton',
      gender: 'male',
      company: 'ZILIDIUM',
      email: 'austinbenton@zilidium.com',
      phone: '+1 (977) 573-2627',
      registered: '2016-08-02T10:08:24 -03:00'
    },
    {
      _id: '5cdce6ced81fe99596d9cef5',
      index: 4,
      isActive: true,
      balance: 1297.31,
      age: 37,
      name: 'Casandra Stout',
      gender: 'female',
      company: 'ANACHO',
      email: 'casandrastout@anacho.com',
      phone: '+1 (929) 465-3804',
      registered: '2018-04-14T11:27:26 -03:00'
    },
    {
      _id: '5cdce6ce6c3ae6c4d6f39e88',
      index: 5,
      isActive: false,
      balance: 2165.49,
      age: 20,
      name: 'Valencia Carrillo',
      gender: 'male',
      company: 'XEREX',
      email: 'valenciacarrillo@xerex.com',
      phone: '+1 (977) 522-3378',
      registered: '2014-02-14T11:45:27 -02:00'
    }
  ];

  //forEach
  // users.forEach(user, i, arr => {
  //   console.log(user);
  // });

  /**
   * *filter
   */
  const userLess30 = users.filter((user, i, arr) => user.age < 30);
  // console.log('userLess30: ', userLess30);
  const activeUsers = users.filter((user, i, arr) => user.isActive);
  // console.log('activeUsers: ', activeUsers);
  /**
   *  *Map
   */

  const userName = users.map(user => {
    return { name: user.name, age: user.age };
  });
  //console.log('userName: ', userName);

  /**
   * *Reduce
   */
  const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
  // console.log('totalBalance: ', totalBalance);
  const userObj = users.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
    //body
  }, {});
  //console.log('userObj: ', userObj);
  /**
   * *Some/Every
   */
  const isMale = users.some(user => user.gender === 'male');
  // console.log('isMale: ', isMale);
  const isAllMale = users.every(user => user.gender === 'male');
  // console.log('isAllMale: ', isAllMale);
  const isAll18 = users.every(user => user.age > 18);
  // console.log('isAll18: ', isAll18);
  /**
   * *find
   */
  const user = users.find(user => user.name === 'Valencia Carrillo');
  // console.log('user: ', user);
  /**
   * * sort
   * !изменяет исходный массив!!!
   */
  const strArr = ['Denis', 'Pavel', 'Anna'];
  strArr.sort();
  const numArr = [10, 6, 44, 32];
  numArr.sort((prev, next) => prev - next);
  users.sort((prev, next) => prev.age - next.age);
  // console.log('users: ', users);
  // console.log('numArr: ', numArr);
  // console.log('strArr: ', strArr);
  const arr = [1, 2, 3, 5, 8, 9, 10];
  const newArr = arr.map(num => {
    let odd = num % 2 !== 0 ? true : false;
    return {
      digit: num,
      odd: odd
    };
  });
  //console.log('newArr: ', newArr);
  const arr2 = [12, 4, 50, 1, 0, 18, 40];
  const isZero = arr2.some(num => num === 0, 0);
  // console.log('isZero: ', isZero);
  const str = ['yes', 'hello', 'no', 'easycode', 'what'];
  const isMore3 = str.some(word => word.lenth > 3, 0);
  // console.log('isMore3: ', isMore3);
  const unsortStr = [
    { char: 'a', index: 12 },
    { char: 'w', index: 8 },
    { char: 'Y', index: 10 },
    { char: 'p', index: 3 },
    { char: 'p', index: 2 },

    { char: 'N', index: 6 },
    { char: ' ', index: 5 },
    { char: 'y', index: 4 },
    { char: 'r', index: 13 },
    { char: 'H', index: 0 },

    { char: 'e', index: 11 },
    { char: 'a', index: 1 },
    { char: ' ', index: 9 },
    { char: '!', index: 14 },
    { char: 'e', index: 7 }
  ];

  function sortStr(str) {
    const newStr = str.sort((prev, next) => prev.index - next.index);
    let result = '';
    newStr.forEach(item => {
      result += item.char;
    });
    //console.log(result);

    return result;
  }
  //console.log(sortStr(unsortStr));

  const sortArr = [[14, 45], [1], ['a', 'c', 'd']];
  // console.log(sortArr.sort((prev, next) => prev.length - next.length));
  const compArr = [
    { cpu: 'intel', info: { cores: 2, сache: 3 } },
    { cpu: 'intel', info: { cores: 4, сache: 4 } },
    { cpu: 'amd', info: { cores: 1, сache: 1 } },
    { cpu: 'intel', info: { cores: 3, сache: 2 } },
    { cpu: 'amd', info: { cores: 4, сache: 2 } }
  ];
  // console.log(compArr.sort((prev, next) => prev.info.cores - next.info.cores));

  let products = [
    { title: 'prod1', price: 5.2 },
    { title: 'prod2', price: 0.18 },

    { title: 'prod3', price: 15 },
    { title: 'prod4', price: 25 },

    { title: 'prod5', price: 18.9 },
    { title: 'prod6', price: 8 },

    { title: 'prod7', price: 19 },
    { title: 'prod8', price: 63 }
  ];
  function filterCollection(arr, min, max) {
    return arr
      .filter(prod => prod.price >= min && prod.price <= max)
      .sort((prev, next) => prev - next);
  }
  console.log(filterCollection(products, 15, 30));
  //==== end DOMContentLoaded ====
});
