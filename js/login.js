const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const errorEmailLogin = document.getElementById('error-email');
const errorPasswordLogin = document.getElementById('error-password');

 

const validarEmail = () => {
  const emailValue = emailLogin.value.trim(); 
  if (emailValue === '') {
    errorEmailLogin.textContent = 'Ingrese su email';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailLogin.textContent = 'Ingrese un email válido';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
  } else {
    errorEmailLogin.classList.add('hidden'); 
    errorEmailLogin.textContent = ''; 
    emailLogin.classList.remove('input-error'); 
  }
};
 

const validarPassword = () => {
  const passwordValue = passwordLogin.value.trim();
  if (passwordValue === '') {
    errorPasswordLogin.textContent = 'Ingrese su contraseña';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
  } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
    errorPasswordLogin.textContent = 'La contraseña debe tener caracteres especiales';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
  } else if (passwordValue.length < 8) {
    errorPasswordLogin.textContent = 'La contraseña debe tener un mínimo de 8 caracteres';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
  } else {
    errorPasswordLogin.classList.add('hidden'); 
    errorPasswordLogin.textContent = ''; 
    passwordLogin.classList.remove('input-error'); 
  }
};


document.getElementById('form-login').addEventListener('submit', (event) => {
  event.preventDefault();
  validarEmail();
  validarPassword();
 

  if (
    errorEmailLogin.classList.contains('hidden') &&
    errorPasswordLogin.classList.contains('hidden')
  ) {
    alert('¡Formulario enviado con éxito!');
  }
});
 

emailLogin.addEventListener('input', validarEmail);
passwordLogin.addEventListener('input', validarPassword);