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

const submitRegister = document.getElementById('submit-register');


const validarNombre = () => {
  const nameValue = nameRegister.value.trim();
  if (nameValue === '') {
    errorNameRegister.textContent = 'Ingrese su nombre';
    errorNameRegister.classList.remove('hidden');
    nameRegister.classList.add('input-error');
    return false
  } else {
    errorNameRegister.classList.add('hidden');
    errorNameRegister.textContent = '';
    nameRegister.classList.remove('input-error');
    return true
  }
};


const validarEmail = () => {
  const emailValue = emailRegister.value.trim();
  if (emailValue === '') {
    errorEmailRegister.textContent = 'Ingrese su email';
    errorEmailRegister.classList.remove('hidden');
    emailRegister.classList.add('input-error');
    return false
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorEmailRegister.textContent = 'Ingrese un email válido';
    errorEmailRegister.classList.remove('hidden');
    emailRegister.classList.add('input-error');
    return false
  } else {
    errorEmailRegister.classList.add('hidden');
    errorEmailRegister.textContent = '';
    emailRegister.classList.remove('input-error');
    return true
  }
};


const validarTelefono = () => {
  const telValue = telRegister.value.trim();
  if (telValue === '') {
    errorTelRegister.textContent = 'Ingrese su teléfono';
    errorTelRegister.classList.remove('hidden');
    telRegister.classList.add('input-error');
    return false
  } else if (telValue.length < 10) {
    errorTelRegister.textContent = 'El teléfono debe tener 10 números';
    errorTelRegister.classList.remove('hidden');
    telRegister.classList.add('input-error');
    return false
  } else {
    errorTelRegister.classList.add('hidden');
    errorTelRegister.textContent = '';
    telRegister.classList.remove('input-error');
    return true
  }
};


const validarPassword = () => {
  const passwordValue = passwordRegister.value.trim();
  if (passwordValue === '') {
    errorPasswordRegister.textContent = 'Ingrese una contraseña';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
    return false
  } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
    errorPasswordRegister.textContent = 'La contraseña debe tener caracteres especiales';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
    return false
  } else if (passwordValue.length < 8) {
    errorPasswordRegister.textContent = 'La contraseña debe tener un mínimo de 8 caracteres';
    errorPasswordRegister.classList.remove('hidden');
    passwordRegister.classList.add('input-error');
    return false
  } else {
    errorPasswordRegister.classList.add('hidden');
    errorPasswordRegister.textContent = '';
    passwordRegister.classList.remove('input-error');
    return true
  }
};


const validarRepeatPassword = () => {
  const repeatValue = repeatRegister.value.trim();
  const passwordValue = passwordRegister.value.trim();
  if (repeatValue === '') {
    errorRepeatRegister.textContent = 'Vuelva a ingresar la contraseña';
    errorRepeatRegister.classList.remove('hidden');
    repeatRegister.classList.add('input-error');
    return false
  } else if (repeatValue !== passwordValue) {
    errorRepeatRegister.textContent = 'Las contraseñas deben coincidir';
    errorRepeatRegister.classList.remove('hidden');
    repeatRegister.classList.add('input-error');
    return false
  } else {
    errorRepeatRegister.classList.add('hidden');
    errorRepeatRegister.textContent = '';
    repeatRegister.classList.remove('input-error');
    return true
  }
};


  const actualizarEstadoBoton = () => {
    if (validarNombre() && validarEmail() && validarTelefono() && validarPassword() && validarRepeatPassword()) {
      submitRegister.disabled = false;
    } else {
      submitRegister.disabled = true;
    }
  };
  
  nameRegister.addEventListener('input', () => {
    validarNombre();
    actualizarEstadoBoton();
  });
  
  emailRegister.addEventListener('input', () => {
    validarEmail();
    actualizarEstadoBoton();
  });
  
  telRegister.addEventListener('input', () => {
    validarTelefono();
    actualizarEstadoBoton();
  });
  
  passwordRegister.addEventListener('input', () => {
    validarPassword();
    actualizarEstadoBoton();
  });
  
  repeatRegister.addEventListener('input', () => {
    validarRepeatPassword();
    actualizarEstadoBoton();
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    submitRegister.disabled = true;
  });
  
  document.getElementById('form-registro').addEventListener('submit', (event) => {
    event.preventDefault();
    if (validarNombre() && validarEmail() && validarTelefono() && validarPassword() && validarRepeatPassword()) {
      alert('Se envió un email de confirmación, revise su correo electrónico.');
    }
  });

