// Funciones para manejar el modal de autenticación
document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const modalAuth     = document.getElementById('modal-auth');
  const loginScreen   = document.getElementById('auth-login');
  const registerScreen= document.getElementById('auth-register');
  const btnCerrar     = modalAuth.querySelector('#modal-close');

  // Abre el modal en modo 'login' o 'register'
  window.abrirModal = (tipo = 'login') => {
    modalAuth.classList.remove('hidden');
    if (tipo === 'register') {
      loginScreen.classList.add('hidden');
      registerScreen.classList.remove('hidden');
    } else {
      registerScreen.classList.add('hidden');
      loginScreen.classList.remove('hidden');
    }
  };

  // Cierra el modal y resetea a 'login'
  window.cerrarModal = () => {
    modalAuth.classList.add('hidden');
    registerScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
  };

  // Muestra la pantalla de registro
  window.mostrarRegistro = () => {
    loginScreen.classList.add('hidden');
    registerScreen.classList.remove('hidden');
  };

  // Muestra la pantalla de login
  window.mostrarLogin = () => {
    registerScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
  };

  // Eventos
  btnCerrar.addEventListener('click', cerrarModal);
  // Cerrar al hacer click fuera de la caja .modal
  modalAuth.addEventListener('click', e => {
    if (e.target === modalAuth) cerrarModal();
  });
});

// Registrar el evento de envío del formulario de registro
document.addEventListener('DOMContentLoaded', () => {
  const formReg   = document.getElementById('form-register');
  const errBox    = document.getElementById('register-errors');

  formReg.addEventListener('submit', async e => {
    e.preventDefault();
    errBox.textContent = ''; // limpiar

    // Recoger datos
    const data = {
      nombre:      formReg.nombre.value.trim(),
      email:       formReg.email.value.trim(),
      contraseña:  formReg.contraseña.value,
      confirmar:   formReg.confirmar.value
    };

    // Validación cliente básica
    if (data.contraseña !== data.confirmar) {
      return errBox.textContent = 'Las contraseñas no coinciden';
    }

    try {
      const res = await fetch('/api/register', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data)
      });
      const json = await res.json();

      if (!res.ok) {
        // Mostrar todos los errores
        errBox.innerHTML = json.errores.map(e => `<div>• ${e}</div>`).join('');
      } else {
        // Registro ok: recarga header o cierra modal y notifica
        cerrarModal();
        location.reload(); 
      }
    } catch(err) {
      errBox.textContent = 'Error de red, inténtalo de nuevo';
      console.error(err);
    }
  });
});

// Registrar el evento de envío del formulario de login
document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('form-login');
  const errLogin  = document.getElementById('login-errors');

  formLogin.addEventListener('submit', async e => {
    e.preventDefault();
    errLogin.textContent = ''; // limpiar mensajes previos

    console.log(formLogin);

    const data = {
      email:      formLogin.email.value.trim(),
      contraseña: formLogin.contraseña.value
    };

    // Validación cliente
    if (!data.email || !data.contraseña) {
      return errLogin.textContent = 'Por favor completa ambos campos';
    }

    try {
      const res  = await fetch('/api/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data)
      });
      const json = await res.json();

      console.log(json);

      if (!res.ok) {
        // mostrar el error que venga del servidor
        errLogin.textContent = json.error || 'Error desconocido';
      } else {
        // éxito, cerrar modal y recargamos header
        cerrarModal();
        location.reload(); // recarga para mostrar estado “logueado”
      }
    } catch (err) {
      console.error(err);
      errLogin.textContent = 'Error de red, inténtalo más tarde';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const activeTab = document.querySelector('.main-nav .tab.active');
  if (!activeTab) return;

  // Eliminar puntos antiguos
  activeTab.querySelectorAll('.dot').forEach(dot => dot.remove());

  // Crear array de posiciones equiespaciadas
  const count = 5;
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push(10 + (i * (80 / (count - 1))));
  }

  // Mezclar posiciones para que suban saltados
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Crear puntitos con delays aleatorios
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.left = `${positions[i]}%`;

    // Asignar delay aleatorio entre 0 y 2s
    const delay = (Math.random() * 2).toFixed(2);
    dot.style.setProperty('--delay', `${delay}s`);

    activeTab.appendChild(dot);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Obtener la pista del carrusel
  const track      = document.querySelector('.carousel-track-container');
  // Obtener todas las diapositivas
  const slides     = Array.from(track.children);
  // Obtener botones de navegación
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  // Calcular ancho de cada diapositiva
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Posicionar cada slide en su sitio
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  // Inicializar índice actual
  let currentIndex = 0;

  // Función para mover a la diapositiva targetIndex
  function moveToSlide(targetIndex) {
    track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
    currentIndex = targetIndex;
  }

  // Añadir evento al botón siguiente
  nextButton.addEventListener('click', () => {
    // Calcular índice siguiente con bucle
    const targetIndex = (currentIndex + 1) % slides.length;
    moveToSlide(targetIndex);
  });

  // Añadir evento al botón anterior
  prevButton.addEventListener('click', () => {
    // Calcular índice anterior con bucle
    const targetIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(targetIndex);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias
  const toggleBtn = document.getElementById('toggleFixedMenu');
  const dropdown  = document.getElementById('fixedDropdown');

  // Función para alternar visibilidad del menú
  function toggleMenu() {
    if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden');
    } else {
      dropdown.classList.add('hidden');
    }
  }

  // Asociar clic al botón
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar que el clic burbujee y cierre el menú inmediatamente
      toggleMenu();
    });
  }

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (e) => {
    const fixedIcon = document.querySelector('.fixed-icon');
    if (fixedIcon && !fixedIcon.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
});