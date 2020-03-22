window.addEventListener('DOMContentLoaded', e => {
  //**  Функции высшего порядка */
  // const arr = ['denis', 'ivan', 'maks', 'pavel'];
  /**
   * ! Плохая практика
   */
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i].length);
  // }
  // console.log('newArr: ', newArr);
  // let newArr2 = [];
  // for (let i = 0; i < arr.length; i++) {
  //   newArr2.push(arr[i].toUpperCase());
  // }
  // console.log('newArr2: ', newArr2);
  /**
   * * С функцией высшего порядка
   */
  // const names = ['denis', 'ivan', 'maks', 'pavel'];
  // function mapArray(arr, fn) {
  //   const res = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     res.push(fn(arr[i]));
  //   }
  //   return res;
  // }
  // function nameLenght(el) {
  //   console.log(el);
  //   return el.length;
  // }
  // function nameToUpperCase(el) {
  //   return el.toUpperCase();
  // }
  // const result = mapArray(names, nameLenght);
  // // console.log('result: ', result);
  // const result2 = mapArray(names, nameToUpperCase);
  // // console.log('result2: ', result2);
  // function greeting(firstName) {
  //   return function(lastName) {
  //     return `hello ${firstName} ${lastName}`;
  //   };
  // }
  // const testGreeting = greeting('Pavel');
  // console.log('testGreeting: ', testGreeting);
  // // const fullName = testGreeting('Dubitskiy');
  // // console.log('fullName: ', fullName);
  // const fullName = greeting('Pavel')('Dubitskiy');
  // console.log('fullName: ', fullName);
  // function question(job) {
  //   const jobDictionary = {
  //     developer: 'что такое JavaScript',
  //     teacher: 'какой предмет вы преподаете'
  //   };
  //   return function(name) {
  //     return `${name}, ${jobDictionary[job]}?`;
  //   };
  // }
  // const developerQuestion = question('developer');
  // console.log('developerQuestion: ', developerQuestion('Denis'));
  // const teacherQuestion = question('teacher');
  // console.log('teacherQuestion: ', teacherQuestion);
  /**
   * * HomeWork
   */

  function firstFunc(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res += fn(arr[i]);
    }

    return `New value: ${res}`;
  }

  function handler1(el) {
    el = el.split('');
    el[0] = el[0].toUpperCase();
    return el.join('');
  }

  console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

  function handler2(el) {
    return `${el * 10}, `;
  }

  console.log(firstFunc([10, 20, 30], handler2));

  function handler3(el) {
    return `${el.name} is ${el.age}, `;
  }

  console.log(
    firstFunc(
      [
        { age: 45, name: 'Jhon' },
        { age: 20, name: 'Aaron' }
      ],
      handler3
    )
  );

  function handler4(el) {
    el = el
      .split('')
      .reverse()
      .join('');
    return `${el}, `;
  }

  console.log(firstFunc(['abs', '123'], handler4));

  function every(arr, fn) {
    if (!Array.isArray(arr) || typeof fn !== 'function')
      return new Error('fail');

    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr)) {
        return false;
      }
    }

    return true;
  }
  function checkArrEl(el, i, arr) {
    if (el > 5) return true;
    else return false;
  }

  console.log(
    every([1, 2, '3'], function(el) {
      return typeof el === 'number';
    })
  );
  //==== end DOMContentLoaded ====
});
