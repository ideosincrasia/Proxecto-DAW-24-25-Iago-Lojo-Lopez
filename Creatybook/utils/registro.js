const Usuario = require('../models/usuario.model');

async function registrarUsuario({ nombre, email, contraseña }) {
  // Verifica si el email ya está registrado
  const existente = await Usuario.findOne({ email });
  if (existente) throw new Error('Ya existe un usuario con ese correo');

  // Crear y guardar el nuevo usuario
  const nuevoUsuario = new Usuario({ nombre, email, contraseña });
  await nuevoUsuario.save();

  return nuevoUsuario;
}

module.exports = {
  registrarUsuario
};