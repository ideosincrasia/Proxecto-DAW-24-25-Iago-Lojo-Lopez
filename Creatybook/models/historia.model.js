const mongoose = require('mongoose');

const HistoriaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  decisiones: [{ type: String }]
});

module.exports = mongoose.model('HistoriaInteractiva', HistoriaSchema);