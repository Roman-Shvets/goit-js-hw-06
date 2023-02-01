const formEl = document.querySelector('.login-form');
const formData = { email:'', password:'' };

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();
const {elements: {email, password}} = event.currentTarget;

if (email.value === "" || password.value === "") {
return alert("Поля форми повинні бути заповнені");
}

formData.email = event.currentTarget.elements.email.value;
formData.password = event.currentTarget.elements.password.value;

console.log(formData);
    
event.currentTarget.reset();
}
