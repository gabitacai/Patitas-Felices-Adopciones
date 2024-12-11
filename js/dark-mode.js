const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const root = document.documentElement;

function updateMode(isDarkMode) {
    if (isDarkMode) {
        root.classList.add('dark-mode');
    } else {
        root.classList.remove('dark-mode');
    }
}

const savedMode = localStorage.getItem('darkMode');


if (savedMode === 'true') {
    toggleSwitch.checked = true;
    updateMode(true);
} else {
    toggleSwitch.checked = false;
    updateMode(false);
}


toggleSwitch.addEventListener('change', function () {
    const isDarkMode = toggleSwitch.checked;
    localStorage.setItem('darkMode', isDarkMode); 
    updateMode(isDarkMode); 
});