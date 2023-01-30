let counterValue = 0;
const valueEl = document.querySelector('#value');
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

incrBtn.addEventListener('click', () => {
counterValue += 1;
valueEl.textContent = counterValue;
});

decrBtn.addEventListener('click', () => {
counterValue -= 1;
valueEl.textContent =counterValue;
});
