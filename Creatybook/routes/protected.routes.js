const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middlewares/sesionCheck');

// Importamos el modelo de Usuario para acceder a la base de datos
const Usuario = require('../models/usuario.model');

// Aplicar el middleware a todas las rutas de este router:
router.use(ensureAuthenticated);

// Ruta para el panel de usuario
router.get('/panel',  async (req, res) => { 
    try {
      // Leer el ID de la sesión
      const userId = req.session.usuarioId;
      // Buscar al usuario en la base de datos
      const user = await Usuario.findById(userId).lean();
      if (!user) {
        // Si no existe (p. ej. borrado), destruir sesión y redirigir, seguramente para algo futuro
        req.session.destroy(() => res.redirect('/'));
        return;
      }
      // Renderizar la vista pasándole el objeto user
      res.render('panel', {
        titulo: 'Panel de Usuario',
        user
      });
    } catch (err) {
      console.error('Error cargando panel de usuario:', err);
      res.status(500).send('Error interno, inténtalo más tarde');
    }
  }
);

module.exports = router;

router.get('/historia-menu', (req, res) => {
const stories = [
  { title: 'Historia 1', description: 'Embárcate en un viaje épico…', imageUrl: '/img/album/story1.jpg' },
  { title: 'Historia 2', description: 'Descubre las ruinas olvidadas…', imageUrl: '/img/album/story2.jpg' },
  { title: 'Historia 3', description: 'Enfréntate a enigmas submarinos…', imageUrl: '/img/album/story3.jpg' },
];
res.render('historia-menu', { titulo: 'Tu Aventura', stories });

});

router.get('/historia', async (req, res) => {
  res.render('historia', { titulo: 'Aventura Interactiva' });
});

module.exports = router;