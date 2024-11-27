const emailLogin = document.getElementById('email-login')
const passwordLogin = document.getElementById('password-login')
const errorEmailLogin = document.getElementById('error-email')
const errorPasswordLogin = document.getElementById('error-password')



document.getElementById('form-login').addEventListener('submit', (event) => {
    event.preventDefault();

    if(emailLogin.value === '') {
        errorEmailLogin.textContent = 'Ingrese su email'
        errorEmailLogin.classList.remove('hidden');
        errorEmailLogin.classList.add('error-text');
        emailLogin.classList.add('input-error'); 
    } else if(!/\S+@\S+\.\S+/.test(emailLogin.value)){
        errorEmailLogin.textContent = 'Ingrese un email válido'
        errorEmailLogin.classList.remove('hidden');
        errorEmailLogin.classList.add('error-text');
        emailLogin.classList.add('input-error'); 
    }else{
        errorEmailLogin.classList.add('hidden');
        emailLogin.classList.remove('input-error')
    }

    if(passwordLogin.value === '') {
        errorPasswordLogin.textContent = 'Ingrese su contraseña'
        errorPasswordLogin.classList.remove('hidden');
        errorPasswordLogin.classList.add('error-text');
        passwordLogin.classList.add('input-error'); 
    } else if(!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordLogin.value)){
        errorPasswordLogin.textContent = 'La contraseña debe tener caracteres especiales'
        errorPasswordLogin.classList.remove('hidden');
        errorPasswordLogin.classList.add('error-text');
        passwordLogin.classList.add('input-error'); 
    }else if(passwordLogin.value.length<8){
        errorPasswordLogin.textContent = 'La contraseña debe tener un mínimo de 8 caracteres'
        errorPasswordLogin.classList.remove('hidden');
        errorPasswordLogin.classList.add('error-text');
        passwordLogin.classList.add('input-error'); 
    } else{
        errorPasswordLogin.classList.add('hidden');
        passwordLogin.classList.remove('input-error')
    }
 });

