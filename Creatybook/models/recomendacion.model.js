const mongoose = require('mongoose');

const RecomendacionSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true},
  libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro'},
  motivo: { type: String }
});

module.exports = mongoose.model('Recomendacion', RecomendacionSchema);
