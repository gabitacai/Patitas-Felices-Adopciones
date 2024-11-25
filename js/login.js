document.getElementById('submit').addEventListener('click', () => {
  const inputs = document.querySelectorAll('#form-login input'); // Selecciona todos los inputs del formulario
  inputs.forEach((input) => {
      const errorSpan = document.getElementById(`error-${input.name}`); // Busca el span de error correspondiente al input por su atributo "name"

      if (input.value.trim() === '') {
          // Si el input está vacío, muestra el error y aplica el estilo
          errorSpan.classList.remove('hidden');
          errorSpan.classList.add('error-text');
          input.classList.add('input-error'); // Marca el input con un borde de error
      } else {
          // Si el input tiene valor, oculta el error y elimina el estilo
          errorSpan.classList.add('hidden');
          errorSpan.classList.remove('error-text');
          input.classList.remove('input-error');
      }
  });
});