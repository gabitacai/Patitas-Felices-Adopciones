const nameAdopt = document.getElementById('name-adopt')
const lastNameAdopt = document.getElementById('lastname-adopt')
const selectAdopt = document.getElementById('adopciones')
const emailAdopt = document.getElementById('email-adopt')

const errorNameAdopt = document.getElementById('error-name-adopt')
const errorLastnameAdopt = document.getElementById('error-lastname-adopt')
const errorSelectAdopt = document.getElementById('error-adopciones')
const errorEmailAdopt = document.getElementById('error-email-adopt')


document.getElementById('form-adopciones').addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameAdopt.value === ''){
        errorNameAdopt.textContent = 'Ingrese su nombre'
        errorNameAdopt.classList.remove('hidden');
        errorNameAdopt.classList.add('error-text');
        nameAdopt.classList.add('input-error'); 
    } else{
        errorNameAdopt.classList.add('hidden');
        nameAdopt.classList.remove('input-error')
    }

    if(lastNameAdopt.value === ''){
        errorLastnameAdopt.textContent = 'Ingrese su apellido'
        errorLastnameAdopt.classList.remove('hidden');
        errorLastnameAdopt.classList.add('error-text');
        lastNameAdopt.classList.add('input-error'); 
    } else{
        errorLastnameAdopt.classList.add('hidden');
        lastNameAdopt.classList.remove('input-error')
    }

    if(selectAdopt.value === 'vacio'){
        errorSelectAdopt.textContent = 'Debe seleccionar una opción'
        errorSelectAdopt.classList.remove('hidden');
        errorSelectAdopt.classList.add('error-text');
        selectAdopt.classList.add('input-error'); 
    } else{
        errorSelectAdopt.classList.add('hidden');
        selectAdopt.classList.remove('input-error')
    }


    if(emailAdopt.value === '') {
        errorEmailAdopt.textContent = 'Ingrese su email'
        errorEmailAdopt.classList.remove('hidden');
        errorEmailAdopt.classList.add('error-text');
        emailAdopt.classList.add('input-error'); 
    } else if(!/\S+@\S+\.\S+/.test(emailLogin.value)){
        errorEmailAdopt.textContent = 'Ingrese un email válido'
        errorEmailAdopt.classList.remove('hidden');
        errorEmailAdopt.classList.add('error-text');
        emailAdopt.classList.add('input-error'); 
    }else{
        errorEmailAdopt.classList.add('hidden');
        emailAdopt.classList.remove('input-error')
    }












});
