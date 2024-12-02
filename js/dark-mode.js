const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', function () {
    const isDarkMode = toggleSwitch.checked;
    const root = document.documentElement;

    if (isDarkMode) {
        root.classList.add('dark-mode');
    } else {
        root.classList.remove('dark-mode');
    }
});
