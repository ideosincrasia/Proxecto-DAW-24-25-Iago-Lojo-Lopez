const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true },
  fechaCompra: { type: Date, default: Date.now },
  precioPagado: { type: Number, required: true }
});

module.exports = mongoose.model('Compra', CompraSchema);