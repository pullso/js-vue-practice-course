window.addEventListener('DOMContentLoaded', e => {
  let obj1 = {
    name: 'Vasya',
    info: {
      skils: ['html', 'css']
    }
  };
  let obj2 = {
    age: 25
  };
  //поверхостное копирование
  let newObj = Object.assign(obj1, obj2);
  console.log('newObj', newObj);
  console.log('obj1: ', obj1);
  let newObj2 = Object.assign({}, obj1);
  console.log('newObj2', newObj2);

  //глубое копирование
  let newJsonObj = JSON.parse(JSON.stringify(obj1));
  console.log('newJsonObj: ', newJsonObj);

  //все ключи объекта
  let keys = Object.keys(obj1);
  console.log('keys: ', keys);
  //все значения внутри объекта
  let values = Object.values(obj1);
  console.log('values', values);
  //Объект превращается в массив
  let entries = Object.entries(obj1);
  console.log('entries', entries);

  //превращает массивы в 1 объект
  let fromEntries = Object.fromEntries([
    ['a', 'value'],
    ['b', 'value2']
  ]);
  console.log('fromEntries: ', fromEntries);

  //==== end DOMContentLoaded ====
});
