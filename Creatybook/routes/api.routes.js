// routes/api.routes.js
const express = require("express");
const router = express.Router();
const path      = require('path');
const multer    = require('multer');
const Usuario = require("../models/usuario.model");
const ensureAuth = require("../middlewares/sesionCheck");

// Configurar Multer para subir avatares a /public/img/avatars
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../public/img/avatars'));
  },
  filename(req, file, cb) {
    // Usar el ID de sesión + extensión original
    const ext = path.extname(file.originalname);
    cb(null, `${req.session.usuarioId}${ext}`);
  }
});
const upload = multer({ storage });

// POST /api/register
router.post("/register", async (req, res) => {
  const { nombre, email, contraseña, confirmar } = req.body;
  const errores = [];

  if (contraseña !== confirmar) {
    errores.push("Las contraseñas no coinciden");
  }

  if (!nombre || !email || !contraseña) {
    errores.push("Todos los campos son obligatorios");
  } else {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      errores.push("El email no tiene un formato válido");
    }
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

    req.session.usuarioId = u._id;
    req.session.nombre = u.nombre;
    console.log('Progreso historia:', u.progresoHistoria);
    req.session.historia  = u.progresoHistoria.rawState || null;
    req.session.fechaÚltima = u.progresoHistoria.fechaÚltima || null;
    req.session.avatarUrl = u.avatarUrl || '/img/avatar/default.png';

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
    req.session.avatarUrl = usuario.avatarUrl || '/img/avatar/default.png';

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
    req.session.historia = inkState; // Actualizar el estado en la sesión
    return res.json({ ok: true });
  } catch (err) {
    console.error('Error guardando progreso en BD:', err);
    return res.status(500).json({ ok: false, error: 'Error interno' });
  }
});

router.get('/reset-new',ensureAuth , async (req, res) => {
  await Usuario.findByIdAndUpdate(req.session.usuarioId, {
    'progresoHistoria.rawState': '',
    'progresoHistoria.fechaÚltima': new Date()
  });
  req.session.historia = ''; // Actualizar el estado en la sesión
  // Recargar la página de la historia desde cero
  res.redirect('/historia');
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// POST — actualizar datos de usuario
router.post(
  '/update-perfil',
  ensureAuth,
  upload.single('avatar'),
  async (req, res) => {
    try {
      const { nombre, email } = req.body;
      const updates = { nombre, email };

      // Si subió un archivo, añadir la URL al update
      if (req.file) {
        updates.avatarUrl = `/img/avatars/${req.file.filename}`;
      }

      // Actualizar en BD
      await Usuario.findByIdAndUpdate(
        req.session.usuarioId,
        updates,
        { new: true }
      );

      // Actualizar la sesión
      req.session.nombre    = updates.nombre;
      req.session.avatarUrl = updates.avatarUrl || '/img/avatar/default.png';

      // Redirigir de nuevo al panel
      res.redirect('/panel');
    } catch (err) {
      console.error('Error actualizando perfil:', err);
      res.status(500).send('No se pudo actualizar el perfil. Inténtalo más tarde.');
    }
  }
);

module.exports = router;
