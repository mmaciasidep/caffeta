// ==========================================================================
// CAFETÁ — main.js
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* --- Menú de navegación móvil --- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const abierto = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    // Cierra el menú al hacer clic en un enlace (móvil)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Paginación del blog (demo) --- */
  const paginationButtons = document.querySelectorAll('.blog-pagination button');
  paginationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* --- Formulario de contacto --- */
  const form = document.querySelector('.contact-form');
  if (form) {
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nombre || !email || !mensaje) {
        status.textContent = 'Por favor completa los campos obligatorios.';
        status.style.color = '#c0392b';
        return;
      }

      if (!emailValido) {
        status.textContent = 'Ingresa un correo electrónico válido.';
        status.style.color = '#c0392b';
        return;
      }

      // Aquí se integraría el envío real (fetch a un backend, EmailJS, etc.)
      status.textContent = `¡Gracias, ${nombre}! Hemos recibido tu mensaje y te contactaremos pronto.`;
      status.style.color = '#E8791C';
      form.reset();
    });
  }

});
