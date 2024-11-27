const nameRegister = document.getElementById('name-register')
const emailRegister = document.getElementById('email-register')
const telRegister = document.getElementById('tel-register')
const passwordRegister = document.getElementById('password-register')
const repeatRegister = document.getElementById('repeat-register')
const errorNameRegister = document.getElementById('error-name-register')
const errorEmailRegister = document.getElementById('error-email-register')
const errorTelRegister = document.getElementById('error-tel-register')
const errorPasswordRegister = document.getElementById('error-password-register')
const errorRepeatRegister = document.getElementById('error-repeat-register')

const formRegistro = document.getElementById('form-registro');
formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameRegister.value === ''){
        errorNameRegister.textContent = 'Ingrese su nombre'
        errorNameRegister.classList.remove('hidden');
        errorNameRegister.classList.add('error-text');
        nameRegister.classList.add('input-error'); 
    } else{
        errorNameRegister.classList.add('hidden');
        nameRegister.classList.remove('input-error')
    }

    if(emailRegister.value === '') {
        errorEmailRegister.textContent = 'Ingrese su email'
        errorEmailRegister.classList.remove('hidden');
        errorEmailRegister.classList.add('error-text');
        emailRegister.classList.add('input-error'); 
    } else if(!/\S+@\S+\.\S+/.test(emailRegister.value)){
        errorEmailRegister.textContent = 'Ingrese un email válido'
        errorEmailRegister.classList.remove('hidden');
        errorEmailRegister.classList.add('error-text');
        emailRegister.classList.add('input-error'); 
    }else{
        errorEmailRegister.classList.add('hidden');
        emailRegister.classList.remove('input-error')
    }

    if(telRegister.value === '') {
        errorTelRegister.textContent = 'Ingrese su teléfono'
        errorTelRegister.classList.remove('hidden');
        errorTelRegister.classList.add('error-text');
        telRegister.classList.add('input-error'); 
    } else if(telRegister.value.length<10){
        errorTelRegister.textContent = 'El teléfono debe tener 10 números'
        errorTelRegister.classList.remove('hidden');
        errorTelRegister.classList.add('error-text');
        telRegister.classList.add('input-error'); 
    } else{
        errorTelRegister.classList.add('hidden');
        telRegister.classList.remove('input-error')
    }

    if(passwordRegister.value === '') {
        errorPasswordRegister.textContent = 'Ingrese una contraseña'
        errorPasswordRegister.classList.remove('hidden');
        errorPasswordRegister.classList.add('error-text');
        passwordRegister.classList.add('input-error'); 
    } else if(!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordRegister.value)){
        errorPasswordRegister.textContent = 'La contraseña debe tener caracteres especiales'
        errorPasswordRegister.classList.remove('hidden');
        errorPasswordRegister.classList.add('error-text');
        passwordRegister.classList.add('input-error'); 
    }else if(passwordRegister.value.length<8){
        errorPasswordRegister.textContent = 'La contraseña debe tener un mínimo de 8 caracteres'
        errorPasswordRegister.classList.remove('hidden');
        errorPasswordRegister.classList.add('error-text');
        passwordRegister.classList.add('input-error'); 
    } else{
        errorPasswordRegister.classList.add('hidden');
        passwordRegister.classList.remove('input-error')
    }

    if(repeatRegister.value === '') {
        errorRepeatRegister.textContent = 'Vuelva a ingresar la contraseña'
        errorRepeatRegister.classList.remove('hidden');
        errorRepeatRegister.classList.add('error-text');
        repeatRegister.classList.add('input-error'); 
    } else if(repeatRegister.value != passwordRegister){
        errorRepeatRegister.textContent = 'Las contraseñas deben coincidir'
        errorRepeatRegister.classList.remove('hidden');
        errorRepeatRegister.classList.add('error-text');
        repeatRegister.classList.add('input-error'); 
    } else{
        errorRepeatRegister.classList.add('hidden');
        repeatRegister.classList.remove('input-error')
    }
});