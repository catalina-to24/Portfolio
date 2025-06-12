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

let pantalla = document.getElementById('pantalla');
        let operacion = '';
        let resultadoMostrado = false;

        function agregarNumero(num) {
            if (pantalla.value === '0' || resultadoMostrado) {
                pantalla.value = num;
                resultadoMostrado = false;
            } else {
                pantalla.value += num;
            }
            operacion = pantalla.value;
        }

        function agregarOperador(op) {
            if (pantalla.value === '' && op !== '-') return;
            if (/[+\-*/%]$/.test(pantalla.value)) {
                pantalla.value = pantalla.value.slice(0, -1) + op;
            } else {
                pantalla.value += op;
            }
            resultadoMostrado = false;
            operacion = pantalla.value;
        }

        function agregarPunto() {
            let partes = pantalla.value.split(/[+\-*/%]/);
            let ultimaParte = partes[partes.length - 1];
            if (!ultimaParte.includes('.')) {
                pantalla.value += '.';
                operacion = pantalla.value;
            }
        }

        function borrarTodo() {
            pantalla.value = '0';
            operacion = '';
        }

        function borrarUltimo() {
            if (pantalla.value.length > 1) {
                pantalla.value = pantalla.value.slice(0, -1);
            } else {
                pantalla.value = '0';
            }
            operacion = pantalla.value;
        }

        function calcularResultado() {
            try {
                let cuenta = pantalla.value.replace(/÷/g, '/').replace(/×/g, '*');
                let resultado = eval(cuenta);
                pantalla.value = resultado;
                resultadoMostrado = true;
            } catch {
                pantalla.value = 'Error';
                resultadoMostrado = true;
            }
        }

        // Galería Lightbox JS
        const galeriaItems = document.querySelectorAll('.galeria-item img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        let currentImg = 0;

        function showLightbox(index) {
            currentImg = index;
            lightboxImg.src = galeriaItems[currentImg].src;
            lightboxImg.alt = galeriaItems[currentImg].alt;
            lightbox.classList.add('active');
        }

        galeriaItems.forEach((img, idx) => {
            img.addEventListener('click', () => showLightbox(idx));
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
        }

        function showPrev() {
            currentImg = (currentImg - 1 + galeriaItems.length) % galeriaItems.length;
            showLightbox(currentImg);
        }

        function showNext() {
            currentImg = (currentImg + 1) % galeriaItems.length;
            showLightbox(currentImg);
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrev);
        lightboxNext.addEventListener('click', showNext);

        // Cerrar con fondo o tecla ESC
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });

         function playSound(id) {
            const audio = document.getElementById(id);
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        }
        