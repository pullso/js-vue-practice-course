import { conf as c, foo } from './module1';
// import * as mod1 from './module1';
// console.log(mod1.conf);
// mod1.foo();

import Product from './module2';
console.log(new Product('Apple'));
console.log(c);

//инкапсуляция - организаця приватности данных внутри программы. разделение на уровни доступа.
