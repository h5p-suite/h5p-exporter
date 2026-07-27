/* ==========================================================================
   H5P Suite - Documentação de Plugin (JS Functionality)
   Theme Toggle & Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

function initThemeToggle() {
    const STORAGE_KEY = 'h5p-suite-theme';
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(nextTheme);
            localStorage.setItem(STORAGE_KEY, nextTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        if (themeToggleBtn) {
            const iconSpan = themeToggleBtn.querySelector('.theme-toggle-icon');
            const textSpan = themeToggleBtn.querySelector('.theme-toggle-text');

            if (theme === 'dark') {
                if (iconSpan) iconSpan.textContent = '☀️';
                if (textSpan) textSpan.textContent = 'Modo Claro';
                themeToggleBtn.setAttribute('aria-label', 'Alternar para Modo Claro');
            } else {
                if (iconSpan) iconSpan.textContent = '🌙';
                if (textSpan) textSpan.textContent = 'Modo Escuro';
                themeToggleBtn.setAttribute('aria-label', 'Alternar para Modo Escuro');
            }
        }
    }
}
