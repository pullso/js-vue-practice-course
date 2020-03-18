window.addEventListener('DOMContentLoaded', e => {
  //** Числа
  // let value;
  // value = Math.PI.toFixed(2);
  // console.log('value: ', value);
  // let value2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
  // value2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
  // console.log('value2: ', value2);
  // value = Math.random().toFixed(2);
  // value = Math.random().toFixed(3) * 10;
  // console.log('value: ', value);
  // let value3 = parseFloat((0.6 + 0.7).toFixed(1));
  // console.log('value3: ', value3);
  // let val4 = parseInt('100$');
  // console.log('val4: ', val4);
  //** Строки
  // const firstName = 'Denis';
  // const lastName = 'Mescheryakov';
  // const age = 26;
  // const str = 'Hello my name is Denis';
  // let value;
  // value = firstName + lastName;
  // value = firstName + ' ' + lastName;
  // value += ' I am ' + age;
  // value = firstName.length;
  // value = firstName[2];
  // value = lastName[lastName.length - 1];
  // value = lastName.toUpperCase();
  // value = firstName.concat(' ', lastName);
  // value = str.indexOf('my');
  // value = str.includes('my');
  // value = str.slice(0, 5);
  // value = str.replace('Denis', 'Pavel');
  // console.log('value: ', value);
  // //** Шаблонные строки
  // const firstName = 'Denis';
  // const lastName = 'Mescheryakov';
  // const age = 26;
  // let str = `
  // <ul>
  //   <li>${firstName}</li>
  //   <li>${lastName}</li>
  //   <li>${age}</li>
  //   <li>${Math.random()}</li>
  // </ul>
  // `;
  // document.body.innerHTML = str;
  //** ДЗ на строки */
  // let string = 'some test string';
  // console.log(string[0], string[string.length - 1]);
  // console.log(string[0].toUpperCase(), string[string.length - 1].toUpperCase());
  // console.log(string.indexOf('string'));
  // console.log(string.indexOf(' ', string.indexOf(' ') + 1));
  // console.log(string.slice(4, 9));
  // let str = string.slice(0, -6);
  // console.log('str: ', str);
  // let a = 20,
  //   b = 16,
  //   c;
  // c = `${a}${b}`;
  // console.log('c: ', c);
  //** Объекты */
  // const user = {
  //   firstName: 'Denis',
  //   age: 30,
  //   isAdmin: true,
  //   email: 'test@test.com',
  //   'user-adress': {
  //     city: 'Kharkiv'
  //   },
  //   skills: ['html', 'css', 'js']
  // };
  // let prop = 'skills';
  // let value = user.age;
  // value = user['isAdmin'];
  // value = user['user-adress'];
  // value = user['user-adress']['city'];
  // value = user['user-adress'].city;
  // value = user[prop];
  // value = user[prop][0];
  // user.firstName = 'Pavel';
  // value = user.firstName;
  // user.info = 'some info';
  // value = user['info'];
  // user['user-adress'].city = 'Moscow';
  // user['user-adress'].coutry = 'Russia';
  // value = user;
  // console.log('value: ', value);
  //**ДЗ объекты */
  const obj = {
    product: 'iphone'
  };
  obj.price = 1000;
  obj['currenty'] = 'dollar';
  obj.details = {};
  obj.details.model = 'X';
  obj['details']['color'] = 'black';
  console.log('obj: ', obj);

  //==== end DOMContentLoaded ====
});
