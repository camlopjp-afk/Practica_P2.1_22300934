(function() {
    // Menú móvil toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en cualquier enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Si se hace clic fuera del menú en móvil, cerrarlo
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
                    navLinks.classList.remove('active');
                }
            }
        });
    }

    // Manejo del formulario de contacto
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre') ? document.getElementById('nombre').value.trim() : '';
            const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
            const mensaje = form.querySelector('textarea') ? form.querySelector('textarea').value.trim() : '';
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos.');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Ingresa un correo electrónico válido.');
                return;
            }
            alert(`✨ ¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos pronto.`);
            form.reset();
        });
    }
})();
