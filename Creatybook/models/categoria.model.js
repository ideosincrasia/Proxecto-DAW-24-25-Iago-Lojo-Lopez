const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  icono: { type: String } // URL o nombre de icono opcional, a valorar posteriormente
});

module.exports = mongoose.model('Categoria', CategoriaSchema);