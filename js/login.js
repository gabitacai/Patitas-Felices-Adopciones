document.getElementById('submit').addEventListener('click', () => {
  const inputs = document.querySelectorAll('#form-login input'); 
  inputs.forEach((input) => {
      const errorSpan = document.getElementById(`error-${input.name}`);

      if (input.value.trim() === '') {
          
          errorSpan.classList.remove('hidden');
          errorSpan.classList.add('error-text');
          input.classList.add('input-error'); 
      } else {
          
          errorSpan.classList.add('hidden');
          errorSpan.classList.remove('error-text');
          input.classList.remove('input-error');
      }
  });
});