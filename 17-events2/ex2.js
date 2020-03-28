const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
  //! чтобы не сработало на родителе событие
  //e.stopPropagation();
  console.log('click btn');
});

wrap.addEventListener(
  'click',
  e => {
    // e.stopPropagation();
    console.log('click wrap');
  },
  true
);

document.body.addEventListener(
  'click',
  e => {
    console.log('click body');
  },
  { capture: true }
);

wrap.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click wrap');
});

document.body.addEventListener('click', e => {
  console.log('click body');
});
