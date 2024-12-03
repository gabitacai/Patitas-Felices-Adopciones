const nameAdopt = document.getElementById('name-adopt');
const lastNameAdopt = document.getElementById('lastname-adopt');
const selectAdopt = document.getElementById('adopciones');
const emailAdopt = document.getElementById('email-adopt');

const errorNameAdopt = document.getElementById('error-name-adopt');
const errorLastnameAdopt = document.getElementById('error-lastname-adopt');
const errorSelectAdopt = document.getElementById('error-adopciones');
const errorEmailAdopt = document.getElementById('error-email-adopt');

const submitForm = document.getElementById('submit-form');


const validarNombre = () => {
  const nameValue = nameAdopt.value.trim();
  if (nameValue === '') {
    errorNameAdopt.textContent = 'Ingrese su nombre';
    errorNameAdopt.classList.remove('hidden');
    nameAdopt.classList.add('input-error');
    return false
  } else {
    errorNameAdopt.classList.add('hidden');
    errorNameAdopt.textContent = '';
    nameAdopt.classList.remove('input-error');
    return true
  }
};


const validarApellido = () => {
  const lastNameValue = lastNameAdopt.value.trim();
  if (lastNameValue === '') {
    errorLastnameAdopt.textContent = 'Ingrese su apellido';
    errorLastnameAdopt.classList.remove('hidden');
    lastNameAdopt.classList.add('input-error');
    return false
  } else {
    errorLastnameAdopt.classList.add('hidden');
    errorLastnameAdopt.textContent = '';
    lastNameAdopt.classList.remove('input-error');
    return true
  }
};


const validarSeleccion = () => {
  const selectValue = selectAdopt.value;
  if (selectValue === 'vacio') {
    errorSelectAdopt.textContent = 'Debe seleccionar una opción';
    errorSelectAdopt.classList.remove('hidden');
    selectAdopt.classList.add('input-error');
    return false
  } else {
    errorSelectAdopt.classList.add('hidden');
    errorSelectAdopt.textContent = '';
    selectAdopt.classList.remove('input-error');
    return true
  }
};


const validarEmail = () => {
  const emailValue = emailAdopt.value.trim();
  if (emailValue === '') {
    errorEmailAdopt.textContent = 'Ingrese su email';
    errorEmailAdopt.classList.remove('hidden');
    emailAdopt.classList.add('input-error');
    return false
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailAdopt.textContent = 'Ingrese un email válido';
    errorEmailAdopt.classList.remove('hidden');
    emailAdopt.classList.add('input-error');
    return false
  } else {
    errorEmailAdopt.classList.add('hidden');
    errorEmailAdopt.textContent = '';
    emailAdopt.classList.remove('input-error');
    return true
  }
};


const actualizarEstadoBoton = () => {
  if (validarNombre() && validarApellido() && validarSeleccion() && validarEmail()) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
};

nameAdopt.addEventListener('input', () => {
  validarNombre();
  actualizarEstadoBoton();
});

lastNameAdopt.addEventListener('input', () => {
  validarApellido();
  actualizarEstadoBoton();
});

selectAdopt.addEventListener('input', () => {
  validarSeleccion();
  actualizarEstadoBoton();
});

emailAdopt.addEventListener('input', () => {
  validarEmail();
  actualizarEstadoBoton();
});



document.addEventListener('DOMContentLoaded', () => {
  submitForm.disabled = true;
});

document.getElementById('form-adopciones').addEventListener('submit', (event) => {
  event.preventDefault();
  if (validarNombre() && validarApellido() && validarSeleccion() && validarEmail()) {
    alert('¡Formulario enviado con éxito!');
  }
});
