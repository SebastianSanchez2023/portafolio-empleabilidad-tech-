/**
 * ============================================================================
 * INTERACTIVIDAD DEL PORTAFOLIO DIGITAL - SEBASTIÁN SÁNCHEZ
 * Navegación dinámica, ScrollSpy, copiado rápido y efectos interactivos
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. ScrollSpy para actualizar el link activo en la barra de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    // 2. Copiar correo al portapapeles con toast
    const copyEmailButtons = document.querySelectorAll('.btn-copy-email');
    copyEmailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'seba.sanchez@example.com';
            navigator.clipboard.writeText(email).then(() => {
                showToast('¡Correo electrónico copiado al portapapeles!');
            }).catch(() => {
                showToast('Correo: seba.sanchez@example.com');
            });
        });
    });

    // 3. Sistema de Toast Notifications
    function showToast(message) {
        let toast = document.getElementById('portfolio-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'portfolio-toast';
            toast.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: rgba(15, 23, 42, 0.95);
                color: #38bdf8;
                border: 1px solid rgba(56, 189, 248, 0.4);
                padding: 0.85rem 1.4rem;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                font-size: 0.9rem;
                font-weight: 600;
                z-index: 9999;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(15px);
            `;
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
        }, 3000);
    }
});
