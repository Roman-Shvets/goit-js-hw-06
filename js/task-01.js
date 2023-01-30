const ulEl = document.querySelectorAll('li.item');
console.log('Number of categories:', ulEl.length);
const h2El = document.querySelectorAll('h2');
for (let i = 0; i < h2El.length; i += 1) {
    console.log('Category:', h2El[i].textContent);
    console.log('Elements:', ulEl[i].querySelectorAll('li').length);
}