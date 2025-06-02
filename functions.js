function scrollToSection(event, className) {
        event.preventDefault();
        const section = document.querySelector('.' + className);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('modoBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '💜';
    } else {
        btn.textContent = '🩷';
    }
}

window.onload = function() {
    const btn = document.getElementById('modoBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '💜';
    } else {
        btn.textContent = '🩷';
    }
};