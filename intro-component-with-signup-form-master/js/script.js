const button = document.getElementById('button')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

const labelFname = document.getElementById('label-fname')
const labelLname = document.getElementById('label-lname')
const labelEmail = document.getElementById('label-email')
const labelPassword = document.getElementById('label-password')

button.addEventListener('click', function() {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(fname.value)){
        labelFname.classList.add('label-none')
        fname.classList.remove('input-error')
    }else{
        fname.classList.add('input-error')
        labelFname.classList.remove('label-none')
    }

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(lname.value)){
        labelLname.classList.add('label-none')
        lname.classList.remove('input-error')
    }else{
        lname.classList.add('input-error')
        labelLname.classList.remove('label-none')
    }

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        labelEmail.classList.add('label-none')
        email.classList.remove('input-error')
        email.classList.remove('email-error')
        email.placeholder='Email Address'
    }else{
        email.classList.add('input-error')
        labelEmail.classList.remove('label-none')
        email.classList.add('email-error')
        email.placeholder='email@example/com'
    }

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(password.value)){
        labelPassword.classList.add('label-none')
        password.classList.remove('input-error')
    }else{
        password.classList.add('input-error')
        labelPassword.classList.remove('label-none')
    }

    
})