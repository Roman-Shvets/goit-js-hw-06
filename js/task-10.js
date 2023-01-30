function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divEl = document.querySelector('#boxes');
const elements = [];
let divNumber = 0;

createBtnEl.addEventListener('click', onCreateCollection);
destroyBtnEl.addEventListener('click', onDestroyCollection);
inputEl.addEventListener('input', onInputChange);

function onCreateCollection(event) {
 createBoxes(divNumber);
}

function onDestroyCollection(event) { 
  destroyBoxes();
}

function onInputChange(event) {
  divNumber = event.currentTarget.value;
}

function createBoxes(amount) {
  let divWidth = 30;
  let divHight = 30;
 

  for (let i = 0; i < amount; i += 1) {
    const newDivEl = document.createElement('div');
    newDivEl.style.width = `${divWidth}px`;
    newDivEl.style.height = `${divHight}px`; 
    newDivEl.style.backgroundColor = getRandomHexColor();
    
    elements.push(newDivEl);
    divWidth += 10;
    divHight += 10;
  }
  divEl.append(...elements);
}

function destroyBoxes() {
  divEl.innerHTML = '';
  inputEl.value = '';
  elements.splice(0, elements.length);
}