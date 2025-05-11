const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  autorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor', required: true },
  precio: { type: Number, required: true },
  portadaUrl: { type: String },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  fechaPublicacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Libro', LibroSchema);