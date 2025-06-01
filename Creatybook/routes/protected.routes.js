const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middlewares/sesionCheck');

// Aplicar el middleware a todas las rutas de este router:
router.use(ensureAuthenticated);

// Ahora todas las rutas definidas aquí SON privadas:
router.get('/panel', (req, res) => {
  res.render('panel', { titulo: 'Panel de Usuario' });
});

router.get('/historia', async (req, res) => {
  res.render('historia', { titulo: 'Aventura Interactiva' });
});

module.exports = router;