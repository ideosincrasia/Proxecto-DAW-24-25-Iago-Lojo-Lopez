// routes/api.routes.js
const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario.model");
const ensureAuth = require("../middlewares/sesionCheck");

// POST /api/register
router.post("/register", async (req, res) => {
  const { nombre, email, contraseña, confirmar } = req.body;
  const errores = [];

  if (contraseña !== confirmar) {
    errores.push("Las contraseñas no coinciden");
  }
  if (!nombre || !email || !contraseña) {
    errores.push("Todos los campos son obligatorios");
  }
  if (errores.length) {
    return res.status(400).json({ errores });
  }

  try {
    if (await Usuario.findOne({ email })) {
      return res.status(400).json({ errores: ["Email ya registrado"] });
    }
    const u = new Usuario({ nombre, email, contraseña });
    await u.save();

    // iniciar sesión automáticamente:
    req.session.usuarioId = u._id;
    req.session.nombre = u.nombre;
    console.log('Progreso historia:', u.progresoHistoria);
    req.session.historia  = u.progresoHistoria.rawState || null;
    req.session.fechaÚltima = u.progresoHistoria.fechaÚltima || null;

    return res.json({ éxito: true });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errores: ["Error interno, inténtalo más tarde"] });
  }
});

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  // Validación básica
  if (!email || !contraseña) {
    return res.status(400).json({ error: 'Debes indicar email y contraseña' });
  }

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await usuario.compararContraseña(contraseña))) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    // Guardar sesión
    req.session.usuarioId = usuario._id;
    req.session.nombre    = usuario.nombre;
    console.log('Progreso historia:', usuario.progresoHistoria.rawState);
    req.session.historia  = usuario.progresoHistoria.rawState || null;
    req.session.fechaÚltima = usuario.progresoHistoria.fechaÚltimaActualización || null;

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error interno, inténtalo más tarde' });
  }
});

// POST /api/guardarProgreso
router.post('/guardarProgreso', ensureAuth , async (req, res) => {
  console.log('Guardando progreso de historia para el usuario:', req.session.usuarioId);
  const { inkState } = req.body;
  if (!inkState) {
    return res.status(400).json({ ok: false, error: 'Falta inkState' });
  }
  try {
    await Usuario.findByIdAndUpdate(req.session.usuarioId, {
      'progresoHistoria.rawState': inkState,
      'progresoHistoria.fechaÚltima': new Date()
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error('Error guardando progreso en BD:', err);
    return res.status(500).json({ ok: false, error: 'Error interno' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
