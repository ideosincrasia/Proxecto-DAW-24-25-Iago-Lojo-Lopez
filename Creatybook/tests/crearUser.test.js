const Usuario = require('./models/usuario.model');

// Llamada a la creación de un usuario de ejemplo a partir del modelo
async function crearUsuarioDeEjemplo() {
  const nuevo = new Usuario({
    nombre: 'Ejemplo',
    email: 'ejemplo@correo.com',
    contraseña: '123456'
  });

  await nuevo.save();
}


// Llamada interna, para lanzar la función.
crearUsuarioDeEjemplo()
  .then(() => console.log('Usuario creado'))
  .catch((err) => console.error('Error creando usuario:', err))
  .finally(() => mongoose.connection.close());