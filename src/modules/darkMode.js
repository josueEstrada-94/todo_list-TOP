// darkMode.js

// Dark Mode Module
const darkModeModule = (() => {
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('#dark-mode-icon');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', null);
    }

    const toggleDarkMode = () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    const initDarkMode = () => {
        if (darkMode === 'enabled') {
            enableDarkMode();
        }

        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Public API
    return {
        init: initDarkMode,
    };
})();

export default darkModeModule;
