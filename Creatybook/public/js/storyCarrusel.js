document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar elementos clave
  const track    = document.querySelector('.carousel-track');
  const items    = Array.from(track.children);
  const btnPrev  = document.querySelector('.carousel-arrow.prev');
  const btnNext  = document.querySelector('.carousel-arrow.next');

  // Calcular ancho de tarjeta
  const itemWidth = items[0].getBoundingClientRect().width;

  // Inicializar índice actual
  let currentIndex = 0;

  // Función para actualizar la posición y la clase active
  function updateCarousel() {
    // Mover la pista
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Alternar clase .active
    items.forEach((item, i) => {
      item.classList.toggle('active', i === currentIndex);
    });
  }

  // Asociar clic a flecha siguiente
  btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;  // Hacerlo cíclico
    updateCarousel();
  });

  // Asociar clic a flecha anterior
  btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  // Iniciar carrusel
  updateCarousel();
});
