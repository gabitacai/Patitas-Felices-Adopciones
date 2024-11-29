const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const errorEmailLogin = document.getElementById('error-email');
const errorPasswordLogin = document.getElementById('error-password');
 
// Validar el email
const validarEmail = () => {
  const emailValue = emailLogin.value.trim(); // Eliminamos espacios extras
  if (emailValue === '') {
    errorEmailLogin.textContent = 'Ingrese su email';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailLogin.textContent = 'Ingrese un email válido';
    errorEmailLogin.classList.remove('hidden');
    emailLogin.classList.add('input-error');
  } else {
    errorEmailLogin.classList.add('hidden'); // Oculta el error
    errorEmailLogin.textContent = ''; // Limpia cualquier texto previo
    emailLogin.classList.remove('input-error'); // Remueve la clase de error
  }
};
 
// Validar la contraseña
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
    errorPasswordLogin.classList.add('hidden'); // Oculta el error
    errorPasswordLogin.textContent = ''; // Limpia cualquier texto previo
    passwordLogin.classList.remove('input-error'); // Remueve la clase de error
  }
};
 
// Validación al enviar el formulario
document.getElementById('form-login').addEventListener('submit', (event) => {
  event.preventDefault();
  validarEmail();
  validarPassword();
 
  // Si no hay errores visibles, muestra éxito
  if (
    errorEmailLogin.classList.contains('hidden') &&
    errorPasswordLogin.classList.contains('hidden')
  ) {
    alert('¡Formulario enviado con éxito!');
  }
});
 
// Validación en tiempo real para el campo email
emailLogin.addEventListener('input', validarEmail);
 
// Validación en tiempo real para el campo contraseña
passwordLogin.addEventListener('input', validarPassword);