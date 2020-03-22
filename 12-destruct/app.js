window.addEventListener('DOMContentLoaded', e => {
  // const user = {
  //   firstName: 'Pavel',
  //   lastName: 'Dubitskiy',
  //   age: 25,
  //   info: {
  //     skills: ['html', 'css'],
  //     work: 'easyCode'
  //   }
  // };
  // // const firstName = user.firstName;
  // // console.log('firstName', firstName);
  // // const lastName = user.lastName;
  // // console.log('lastName', lastName);
  // const { firstName: name, lastName: lName, age: years = 30 } = user;
  // console.log('age', years);
  // console.log('lastName', lName);
  // console.log('firtsName', name);
  // const {
  //   info: { work, skills }
  // } = user;
  // console.log('work', work);
  // console.log('skills', skills);
  // const colors = ['white', 'red', 'black', '#24242'];
  // const [w, r, b, green = 'green'] = colors;
  // console.log(w, r, b, green);
  // const names = ['denis', 'pavel', 'petya'];
  // const [, name2, name3] = names;
  // console.log('name2: ', name2);
  // const [name1, ...otherNames] = names;
  // console.log('otherNames: ', otherNames);
  // const nestedArr = ['hello world', ['key', 'value']];
  // const [, [key, value]] = nestedArr;
  // console.log('value', value);
  // console.log('key', key);
  // //копирование Массива
  // //const [...newNames] = names;
  // const newNames = [...names];
  // console.log(...newNames);
  // //Склейка массивов
  // const colorNames = [...colors, ...names];
  // console.log('colorNames', colorNames);
  // const newUser = { ...user, age: 35 };
  // //поверхостное копирование
  // console.log('newUser: ', newUser);

  // const {
  //   info: {
  //     skills: [html, css]
  //   }
  // } = newUser;
  // console.log('newUser: ', newUser, html, css);
  // function myPerson({
  //   firstName = '&',
  //   lastName = '&',
  //   info: { skills } = {}
  // } = {}) {
  //   console.log('myPerson -> firstName', firstName, lastName, skills);
  //   //body
  //   return;
  // }
  // //myPerson(user);
  // function foo(x, y, ...others) {
  //   const [...args] = arguments;
  //   console.log(args);
  //   console.log(others);

  //   return;
  // }
  // const numbers = [1, 4, 5, 2, 4, 12, 3];

  // //foo(1, 2, 4, 5, 6);
  // foo(...numbers);

  const objReturn = (a, ...others) => {
    //body
    return {
      first: a,
      other: others
    };
  };
  console.log(objReturn('a', 'b', 'c', 'd'));

  function getInfo({
    name = 'Unknow',
    info: {
      employees: [],
      partners: [firstPartners, secondPartners, ...others]
    }
  }) {
    //body
    console.log(name, firstPartners, secondPartners);
  }

  const organisation = {
    name: 'Google',

    info: {
      employees: ['Vlad', 'Olga'],
      partners: ['Microsoft', 'Facebook', 'Xing']
    }
  };
  getInfo(organisation);
  //==== end DOMContentLoaded ====
});
