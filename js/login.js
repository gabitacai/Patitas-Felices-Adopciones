const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const errorEmailLogin = document.getElementById('error-email');
const errorPasswordLogin = document.getElementById('error-password');
const submitLogin = document.getElementById('submit-login');

const validarEmail = () => {
  const emailValue = emailLogin.value.trim();
  if (emailValue === '') {
    errorEmailLogin.textContent = 'Ingrese su email';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
    return false;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailLogin.textContent = 'Ingrese un email válido';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
    return false;
  } else {
    errorEmailLogin.classList.add('hidden');
    errorEmailLogin.textContent = '';
    emailLogin.classList.remove('input-error');
    return true;
  }
};

const validarPassword = () => {
  const passwordValue = passwordLogin.value.trim();
  if (passwordValue === '') {
    errorPasswordLogin.textContent = 'Ingrese su contraseña';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
    return false;
  } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
    errorPasswordLogin.textContent =
      'La contraseña debe tener caracteres especiales';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
    return false;
  } else if (passwordValue.length < 8) {
    errorPasswordLogin.textContent =
      'La contraseña debe tener un mínimo de 8 caracteres';
    errorPasswordLogin.classList.remove('hidden');
    passwordLogin.classList.add('input-error');
    return false;
  } else {
    errorPasswordLogin.classList.add('hidden');
    errorPasswordLogin.textContent = '';
    passwordLogin.classList.remove('input-error');
    return true;
  }
};

const actualizarEstadoBoton = () => {
  if (validarEmail() && validarPassword()) {
    submitLogin.disabled = false;
  } else {
    submitLogin.disabled = true;
  }
};

emailLogin.addEventListener('input', () => {
  validarEmail();
  actualizarEstadoBoton();
});

passwordLogin.addEventListener('input', () => {
  validarPassword();
  actualizarEstadoBoton();
});

document.addEventListener('DOMContentLoaded', () => {
  submitLogin.disabled = true;
});

document.getElementById('form-login').addEventListener('submit', (event) => {
  event.preventDefault();
  if (validarEmail() && validarPassword()) {
    alert('¡Formulario enviado con éxito!');
  }
});
