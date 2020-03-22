const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
//console.dir(div.parentElement);
//console.log(Array.from(titles));
//console.log([...titles]);
const link = div.querySelector('.link');
//console.log('link', link);
div.classList.add('article', 'cast');
//console.log(div.classList);
div.classList.remove('article');
// console.log(div.classList);
// console.log(div.classList.contains('cast'));
// console.log(div.className);
// console.log(link.href);

div.setAttribute('id', 'myID');
// console.log(div);
// console.log(div.getAttribute('id'));
// console.log(div.dataset);
// console.log(div.dataset.myattr);
//* Манипуляция DOM

const title = document.querySelector('h1');
console.log('title', title);
// title.innerHTML += '<span>123</span>';
// // title.textContent = '12431';
// // title.insertAdjacentHTML('beforebegin', '<h2>title h2 </h2>');
// // title.insertAdjacentElement('afterbegin', '<div>fazx</div>');
// const span = document.querySelector('span');
// console.log('span', span);
// title.innerHTML += '<span>12331span2</span>';
//! INNERHTML удаляет предыдущие элементы и ссылки использовать с осторожностью
// span.textContent = 'asrwba';
//* Создание элемента
const span = document.createElement('span');
//элемент создан но еще не вставлен в DOM
console.log('span', span);
span.textContent = 'NEW SPAN';
span.classList.add('active');
title.appendChild(span);
div.appendChild(span);
//!  спан переместился вниз потому что дом узлы могут быть только в 1 экземпляре

//* Лучше сначала сделать фрагмент разметки, а потом уже его привязывать в DOM

const fragment = document.createDocumentFragment();
const colors = ['white', 'black', 'red'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

//* удаление элементов
// title.remove();
// title.parentElement.removeChild(title);
