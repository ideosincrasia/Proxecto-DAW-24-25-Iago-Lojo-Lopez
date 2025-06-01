
// Middleware para verificar si el usuario está autenticado
function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.usuarioId) {
    // Si existe usuarioId en sesión, continuar a la siguiente función
    return next();
  }
  // Si no está autenticado, redirigir al index
  return res.redirect('/');
}

module.exports = ensureAuthenticated;