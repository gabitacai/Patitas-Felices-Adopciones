const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const root = document.documentElement;

// Función para activar o desactivar el modo oscuro
function updateMode(isDarkMode) {
    if (isDarkMode) {
        root.classList.add('dark-mode');
    } else {
        root.classList.remove('dark-mode');
    }
}

// Verificar si hay un valor guardado en localStorage
const savedMode = localStorage.getItem('darkMode');

// Si hay un valor guardado, aplicar el modo correspondiente
if (savedMode === 'true') {
    toggleSwitch.checked = true;
    updateMode(true);
} else {
    toggleSwitch.checked = false;
    updateMode(false);
}

// Agregar un evento para cambiar el estado cuando se activa o desactiva el interruptor
toggleSwitch.addEventListener('change', function () {
    const isDarkMode = toggleSwitch.checked;
    localStorage.setItem('darkMode', isDarkMode); // Guardar el estado en localStorage
    updateMode(isDarkMode); // Cambiar el modo según el estado
});