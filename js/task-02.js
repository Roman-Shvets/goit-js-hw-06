const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {

    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredients[i];
    elements.push(liEl);
}

ulEl.append(...elements);


