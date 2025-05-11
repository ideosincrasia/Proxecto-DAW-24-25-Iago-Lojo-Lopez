// Middleware para comprobar si el usuario está logueado
function comprobarSesion(req, res, next) {
  if (req.session && req.session.usuarioId) {
    next(); // Usuario logueado
  } else {
    res.redirect('/login'); // Redirigir si no hay sesión
  }
}

// Hay que investigarlo, por que esto proteje las rutas protegidas... pero no me permite mostrarlo en el layout.
// Si no hay sesion, redirige a la pagina de login. Quizás se pueda guardar como una variable en el layout... o algo así.
// Un Stackoverflow dice que se puede guardar en el req, pero no lo he probado. Pendiente de investigar.


//app.use((req, res, next) => {
//  res.locals.session = req.session;
//  next();
//});



module.exports = comprobarSesion;