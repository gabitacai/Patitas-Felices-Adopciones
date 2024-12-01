const nameRegister = document.getElementById('name-register');
const emailRegister = document.getElementById('email-register');
const telRegister = document.getElementById('tel-register');
const passwordRegister = document.getElementById('password-register');
const repeatRegister = document.getElementById('repeat-register');
const errorNameRegister = document.getElementById('error-name-register');
const errorEmailRegister = document.getElementById('error-email-register');
const errorTelRegister = document.getElementById('error-tel-register');
const errorPasswordRegister = document.getElementById('error-password-register');
const errorRepeatRegister = document.getElementById('error-repeat-register');


const validarNombre = () => {
  const nameValue = nameRegister.value.trim();
  if (nameValue === '') {
    errorNameRegister.textContent = 'Ingrese su nombre';
    errorNameRegister.classList.remove('hidden');
    nameRegister.classList.add('input-error');
  } else {
    errorNameRegister.classList.add('hidden');
    errorNameRegister.textContent = '';
    nameRegister.classList.remove('input-error');
  }
};


const validarEmail = () => {
  const emailValue = emailRegister.value.trim();
  if (emailValue === '') {
    errorEmailRegister.textContent = 'Ingrese su email';
    errorEmailRegister.classList.remove('hidden');
    emailRegister.classList.add('input-error');
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailRegister.textContent = 'Ingrese un email válido';
    errorEmailRegister.classList.remove('hidden');
    emailRegister.classList.add('input-error');
  } else {
    errorEmailRegister.classList.add('hidden');
    errorEmailRegister.textContent = '';
    emailRegister.classList.remove('input-error');
  }
};


const validarTelefono = () => {
  const telValue = telRegister.value.trim();
  if (telValue === '') {
    errorTelRegister.textContent = 'Ingrese su teléfono';
    errorTelRegister.classList.remove('hidden');
    telRegister.classList.add('input-error');
  } else if (telValue.length < 10) {
    errorTelRegister.textContent = 'El teléfono debe tener 10 números';
    errorTelRegister.classList.remove('hidden');
    telRegister.classList.add('input-error');
  } else {
    errorTelRegister.classList.add('hidden');
    errorTelRegister.textContent = '';
    telRegister.classList.remove('input-error');
  }
};


const validarPassword = () => {
  const passwordValue = passwordRegister.value.trim();
  if (passwordValue === '') {
    errorPasswordRegister.textContent = 'Ingrese una contraseña';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
  } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
    errorPasswordRegister.textContent = 'La contraseña debe tener caracteres especiales';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
  } else if (passwordValue.length < 8) {
    errorPasswordRegister.textContent = 'La contraseña debe tener un mínimo de 8 caracteres';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
  } else {
    errorPasswordRegister.classList.add('hidden');
    errorPasswordRegister.textContent = '';
    passwordRegister.classList.remove('input-error');
  }
};


const validarRepeatPassword = () => {
  const repeatValue = repeatRegister.value.trim();
  const passwordValue = passwordRegister.value.trim();
  if (repeatValue === '') {
    errorRepeatRegister.textContent = 'Vuelva a ingresar la contraseña';
    errorRepeatRegister.classList.remove('hidden');
    repeatRegister.classList.add('input-error');
  } else if (repeatValue !== passwordValue) {
    errorRepeatRegister.textContent = 'Las contraseñas deben coincidir';
    errorRepeatRegister.classList.remove('hidden');
    repeatRegister.classList.add('input-error');
  } else {
    errorRepeatRegister.classList.add('hidden');
    errorRepeatRegister.textContent = '';
    repeatRegister.classList.remove('input-error');
  }
};

document.getElementById('form-registro').addEventListener('submit', (event) => {
  event.preventDefault();
  validarNombre();
  validarEmail();
  validarTelefono();
  validarPassword();
  validarRepeatPassword();

  
  if (
    errorNameRegister.classList.contains('hidden') &&
    errorEmailRegister.classList.contains('hidden') &&
    errorTelRegister.classList.contains('hidden') &&
    errorPasswordRegister.classList.contains('hidden') &&
    errorRepeatRegister.classList.contains('hidden')
  ) {
    alert('¡Formulario enviado con éxito!');
  }
});


nameRegister.addEventListener('input', validarNombre);
emailRegister.addEventListener('input', validarEmail);
telRegister.addEventListener('input', validarTelefono);
passwordRegister.addEventListener('input', validarPassword);
repeatRegister.addEventListener('input', validarRepeatPassword);


