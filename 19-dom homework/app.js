// const head = document.querySelector('head');
// const body = document.querySelector('body');
// const firstDiv = body.querySelector('div');

// console.log('head', head);
// console.log('body: ', body);
// body.childNodes.forEach(item => {
//   if (item.nodeName === '#text') return;
//   console.log(item);
// });
// console.log('firstDiv: ', firstDiv);
// firstDiv.childNodes.forEach(item => {
//   if (
//     item.nodeName === '#text' ||
//     item === firstDiv.firstElementChild ||
//     item === firstDiv.lastElementChild
//   )
//     return;
//   console.log(item);
// });

// function isParent(parent, child) {
//   return parent === child.parentElement;
// }

function isParent(parent, child) {
  let curentParent = child.parentElement;
  let isParent = false;
  while (curentParent) {
    isParent = parent === curentParent;
    if (isParent) {
      curentParent = null;
    } else {
      curentParent = curentParent.parentElement;
    }
  }

  return isParent;
}

// console.log(
//   isParent(document.body.children[0], document.querySelector('mark'))
// );

const hrefs = document.querySelectorAll('a');
const links = [];

hrefs.forEach(item => {
  if (isParent(document.querySelector('ul'), item)) {
    links.push(item.textContent);
    console.log(item.textContent);
  }
});
console.log('links: ', links);

const ul = document.querySelector('ul');
ul.classList.add('list');
document.querySelectorAll('a').forEach(link => {
  link.classList.add('custom-link');
});
const listLi = document.querySelectorAll('li');
for (let i = 0; i < listLi.length; i++) {
  if ((i + 1) % 2 === 0) continue;
  listLi[i].classList.add('item');
  console.log(i, listLi.length);
}
const ulA = document.querySelector('ul~a');
ulA.setAttribute('id', 'link');
ul.querySelectorAll('li').forEach(li => {
  li.insertAdjacentElement('beforebegin', 'strong');
});
// console.log(ul.nextElementSibling, ul.previousElementSibling);

// const p = document.querySelector('p');
// const [...childNodes] = p.childNodes;
// childNodes.forEach(node => {
//   if (node.nodeType === 3) {
//     node.textContent = '-text-';
//   }
// });
// function getNodeInfo(node) {
//   return {
//     name: node.nodeName,
//     type: node.nodeType,
//     length: node.children.length
//   };
//   //body
// }
// console.log(getNodeInfo(p));
