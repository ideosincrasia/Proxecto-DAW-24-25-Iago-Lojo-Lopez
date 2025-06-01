// Llamada a mongoose
const mongoose = require('mongoose');
// Necesitamos bcrypt para cifrar la contraseña
const bcrypt = require('bcrypt');

// Creamos el esquema para el usuario
const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, // Nombre del usuario
  email: { type: String, required: true, unique: true }, // Email del usuario
  contraseña: { type: String, required: true }, // Contraseña del usuario
  fechaRegistro: { type: Date, default: Date.now }, // Fecha de registro
  progresoHistoria: {
    rawState: { type: String, default: '' }, // Aquí guardamos el JSON de Ink
    fechaÚltimaActualización: { type: Date, default: Date.now }
  }
});

// Middleware para cifrar la contraseña antes de guardar el usuario
// Se ejecuta antes de guardar el usuario en la base de datos y quizás debería moverse a un controlador
// Pero me llevó 4 horas hacerlo funcionar y no quiero tocarlo...
UsuarioSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next(); // solo si cambia
  try {
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
// Por que leches es tan complicado de leer la pu** documentación de bcrypt
UsuarioSchema.methods.compararContraseña = async function (intento) {
  return await bcrypt.compare(intento, this.contraseña);
};

// Devolvemos el modelo de usuario
module.exports = mongoose.model('Usuario', UsuarioSchema);