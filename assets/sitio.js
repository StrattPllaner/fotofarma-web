// Pequeños detalles del sitio: aparición al desplazar e índice que sigue la lectura.
(() => {
  const revelables = document.querySelectorAll('.revela');
  if ('IntersectionObserver' in window && revelables.length) {
    const ojo = new IntersectionObserver((entradas) => {
      entradas.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        ojo.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    revelables.forEach(el => ojo.observe(el));
  } else {
    revelables.forEach(el => el.classList.add('visible'));
  }

  // Índice del plan: marca la sección que se está leyendo
  const enlaces = [...document.querySelectorAll('.indice a')];
  if (!enlaces.length) return;
  const secciones = enlaces
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const marcar = () => {
    const y = window.scrollY + 140;
    let activa = secciones[0];
    for (const s of secciones) if (s.offsetTop <= y) activa = s;
    enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === `#${activa.id}`));
  };
  marcar();
  let pedido = false;
  window.addEventListener('scroll', () => {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(() => { marcar(); pedido = false; });
  }, { passive: true });
})();
