const btn = document.querySelector('button');
// btn.onclick = function() {
//   console.log('click');
//   return;
// };

// btn.addEventListener('click', e => {
//   console.log('click2', e);
// });

// const clickHandler = e => {
//   console.log(this);
//   e.preventDefault();
//   console.log('click');
// };
// const link = document.querySelector('a');
// link.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log(this);
// });
const container = document.querySelector('.container');
btn.addEventListener('click', e => {
  const div = document.createElement('div');
  div.textContent = Math.random();
  const nestedBtn = document.createElement('button');
  nestedBtn.textContent = 'BUTTON';
  div.appendChild(nestedBtn);
  container.appendChild(div);
});
container.addEventListener('click', e => {
  console.dir(e.target);
  if (e.target.tagName === 'BUTTON') console.log('button clicked');
});

// link.removeEventListener('click', clickHandler);
