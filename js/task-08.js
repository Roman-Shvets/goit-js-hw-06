const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

const {elements: {email, password}} = event.currentTarget;

if (email.value === "" || password.value === "") {
return alert("Поля форми повинні бути заповнені");
}

console.log(`Email: ${email.value}, Password: ${password.value}`);
event.currentTarget.reset();    
   
}
