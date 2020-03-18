window.addEventListener('DOMContentLoaded', e => {
  // let value = 'hidden';
  // value === 'hidden' ? (value = 'visible') : (value = 'hidden');
  // value = 3;
  // if (value === 0) {
  //   value = 1;
  // } else if (value < 0) {
  //   value = 'less then zero';
  // } else {
  //   value *= 10;
  // }
  // console.log('value: ', value);
  // let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
  // if (car.age > 5) {
  //   console.log('Need Repair');
  //   car['needRepair'] = true;
  // } else {
  //   car['needRepair'] = false;
  // }
  // console.log('car: ', car);
  // let product = {
  //   name: 'Яблоко',
  //   price: '10$'
  // };
  // let min = 10; // минимальная цена
  // let max = 20; // максимальная цена
  // if (parseInt(product.price) >= min || parseInt(product.price) === max) {
  //   console.log('product.price: ', product.price);
  // } else {
  //   console.log('товаров не найдено');
  // }
  //* Switch homework  */

  let a = 'block';
  switch (a) {
    case 'block':
      console.log('block');
      break;
    case 'none':
      console.log('none');
      break;
    case 'inline':
      console.log('inline');
    default:
      console.log('other');
      break;
  }
  let b = 'hidden';
  b = b === 'hidden' ? 'visible' : 'hidden';
  console.log('b: ', b);

  let c = 1;
  c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
  console.log('c: ', c);

  //==== end DOMContentLoaded ====
});
