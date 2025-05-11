const express = require('express');
const router = express.Router();

// Función para renderizar con layout.
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

// Función para renderizar vistas con layout
// Recibe el nombre de la vista y los datos a renderizar
// Devuelve el HTML renderizado
// Otra documentacion de MMMMMierda... Ya lo haré funcionar... cuando entienda bien como funciona el tema de los layouts y las vistas.
async function renderConLayout(nombreVista, datos = {}) {
  try {
    const vistaPath = path.join(__dirname, '..', 'views', `${nombreVista}.ejs`);
    const layoutPath = path.join(__dirname, '..', 'views', 'layout.ejs');

    const cuerpo = await ejs.renderFile(vistaPath, datos, { async: true });

    const htmlFinal = await ejs.renderFile(layoutPath, { ...datos, body: cuerpo }, { async: true });

    return htmlFinal;
  } catch (error) {
    console.error('Error al renderizar la vista:', error.message);
    return `<h1>Error al renderizar: ${error.message}</h1>`;
  }
  // Segun entiendo, cuando llamo al layout, le paso el body con el contenido de la vista, y el layout lo renderiza con el contenido del body.
  // En cambio no lo lee, puede que por algun parse de Js... tendré que mirarlo.
  // Supongo que muchos console.log sirven...
}

// Rutas
// Creamos la ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('layout', { titulo: 'Inicio' });
});

// Creamos la ruta para la página de libros. Un poco redundante, pero bueno
// Por ahora sin funcionalidad, solo de ejemplo para la ruta de libros, dado que no funciona el renderizado de la vista. Funciona, pero no se ve el layout.
router.get('/libros', (req, res) => {
  res.render('libros', { titulo: 'Libros' });
});

module.exports = router;