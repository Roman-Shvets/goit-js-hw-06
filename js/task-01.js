const ulEl = document.querySelector('#categories');

console.log('Number of categories:', ulEl.children.length);
console.log('');

for (let i = 0; i < ulEl.children.length; i += 1) {
console.log('Category:', ulEl.children[i].firstElementChild.textContent);
console.log('Elements:', ulEl.children[i].lastElementChild.children.length);
console.log('');
}