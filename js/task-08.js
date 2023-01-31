const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

const {elements: {email, password}} = event.currentTarget;

if (email.value === "" || password.value === "") {
return alert("Поля форми повинні бути заповнені");
}

console.log("Об'єкт із введеними даними:", event);
console.log("Email:", event.currentTarget.elements.email.value);
console.log("Password:", event.currentTarget.elements.password.value);

event.currentTarget.reset();
}
