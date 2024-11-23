document.getElementById('submit').addEventListener('click', () => {
    const inputs = document.querySelectorAll('#form-login input'); // Selecciona todos los inputs del formulario
    let resultado = '';
    console.log(inputs);

    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
           const span = document.getElementById('error-email')
           span.classList.remove('hidden')
           span.classList.add('span')
         console.log(input.classList);
          input.classList.add('input-error');
          resultado += `El input ${index + 1} está vacío.<br>`;
          console.log(input.classList);
          console.log(resultado);
        } else {
          // Si el input tiene valor, elimina la clase de error
          input.classList.remove('input-error');
          resultado += `El input ${index + 1} tiene valor: ${input.value}<br>`;
        }
      });
  });