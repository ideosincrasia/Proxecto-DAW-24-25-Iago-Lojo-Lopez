const multer    = require('multer');

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

module.exports = ensureAuthenticated;