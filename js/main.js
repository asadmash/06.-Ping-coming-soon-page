const email = document.querySelector('#email');
const submit = document.querySelector('button');

function mailValidation() {
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Please provide a valid email address')
    } else {
        setSuccessFor(email);
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    mailValidation();
})

function setErrorFor(input, msg) {
const inputField = input.parentElement;
const small = inputField.querySelector('small');
small.innerText = msg;
small.style.visibility = 'visible';
inputField.className = 'input-field error'
}

function setSuccessFor(input, msg) {
    const inputField = input.parentElement;
    inputField.className = 'input-field success';
}

function isEmail(email) {
    return email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
}