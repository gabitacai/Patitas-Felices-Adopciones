const nameAdopt = document.getElementById('name-adopt');
const lastNameAdopt = document.getElementById('lastname-adopt');
const selectAdopt = document.getElementById('adopciones');
const emailAdopt = document.getElementById('email-adopt');

const errorNameAdopt = document.getElementById('error-name-adopt');
const errorLastnameAdopt = document.getElementById('error-lastname-adopt');
const errorSelectAdopt = document.getElementById('error-adopciones');
const errorEmailAdopt = document.getElementById('error-email-adopt');

// Validar nombre
const validarNombre = () => {
  const nameValue = nameAdopt.value.trim();
  if (nameValue === '') {
    errorNameAdopt.textContent = 'Ingrese su nombre';
    errorNameAdopt.classList.remove('hidden');
    nameAdopt.classList.add('input-error');
  } else {
    errorNameAdopt.classList.add('hidden');
    errorNameAdopt.textContent = '';
    nameAdopt.classList.remove('input-error');
  }
};

// Validar apellido
const validarApellido = () => {
  const lastNameValue = lastNameAdopt.value.trim();
  if (lastNameValue === '') {
    errorLastnameAdopt.textContent = 'Ingrese su apellido';
    errorLastnameAdopt.classList.remove('hidden');
    lastNameAdopt.classList.add('input-error');
  } else {
    errorLastnameAdopt.classList.add('hidden');
    errorLastnameAdopt.textContent = '';
    lastNameAdopt.classList.remove('input-error');
  }
};

// Validar selección
const validarSeleccion = () => {
  const selectValue = selectAdopt.value;
  if (selectValue === 'vacio') {
    errorSelectAdopt.textContent = 'Debe seleccionar una opción';
    errorSelectAdopt.classList.remove('hidden');
    selectAdopt.classList.add('input-error');
  } else {
    errorSelectAdopt.classList.add('hidden');
    errorSelectAdopt.textContent = '';
    selectAdopt.classList.remove('input-error');
  }
};

// Validar email
const validarEmail = () => {
  const emailValue = emailAdopt.value.trim();
  if (emailValue === '') {
    errorEmailAdopt.textContent = 'Ingrese su email';
    errorEmailAdopt.classList.remove('hidden');
    emailAdopt.classList.add('input-error');
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailAdopt.textContent = 'Ingrese un email válido';
    errorEmailAdopt.classList.remove('hidden');
    emailAdopt.classList.add('input-error');
  } else {
    errorEmailAdopt.classList.add('hidden');
    errorEmailAdopt.textContent = '';
    emailAdopt.classList.remove('input-error');
  }
};

// Validación al enviar el formulario
document.getElementById('form-adopciones').addEventListener('submit', (event) => {
  event.preventDefault();
  validarNombre();
  validarApellido();
  validarSeleccion();
  validarEmail();

  // Verifica si no hay errores visibles antes de enviar
  if (
    errorNameAdopt.classList.contains('hidden') &&
    errorLastnameAdopt.classList.contains('hidden') &&
    errorSelectAdopt.classList.contains('hidden') &&
    errorEmailAdopt.classList.contains('hidden')
  ) {
    alert('¡Formulario enviado con éxito!');
  }
});

// Validación en tiempo real
nameAdopt.addEventListener('input', validarNombre);
lastNameAdopt.addEventListener('input', validarApellido);
selectAdopt.addEventListener('change', validarSeleccion);
emailAdopt.addEventListener('input', validarEmail);