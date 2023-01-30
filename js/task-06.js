const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputFocus(event) {
    inputEl.classList.remove('valid', 'invalid');
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.add('valid');
    }
    else inputEl.classList.add('invalid');
}