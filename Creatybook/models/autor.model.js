// Modelo de Autor
const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Referencia al modelo de Usuario, Clave foránea
  biografia: { type: String },
  redes: [{ type: String }]
});

module.exports = mongoose.model('Autor', AutorSchema);