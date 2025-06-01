const express = require('express');
const router = express.Router();

// Rutas
// Creamos la ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

// Creamos la ruta para la página de libros. Un poco redundante, pero bueno
// Por ahora sin funcionalidad, solo de ejemplo para la ruta de libros, dado que no funciona el renderizado de la vista. Funciona, pero no se ve el layout.
router.get('/libros', (req, res) => {
  res.render('libros', { titulo: 'Libros' });
});

module.exports = router;