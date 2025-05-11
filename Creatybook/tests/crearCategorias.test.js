const Categoria = require('../models/categoria.model');

async function crearCategoriasBase() {
  const categorias = [
    { nombre: 'Fantasía', descripcion: 'Magia, mundos imaginarios, héroes y criaturas místicas.' },
    { nombre: 'Ciencia Ficción', descripcion: 'Futuro, tecnología, viajes espaciales y universos alternativos.' }, // Mi favorita hehe
    { nombre: 'Terror', descripcion: 'Historias que causan miedo, suspense o angustia.' }, // Me segunda favorita hehe
    { nombre: 'Romance', descripcion: 'Relaciones amorosas, emociones y dramas personales.' }, // Meh... Not hehe
    { nombre: 'Aventura', descripcion: 'Viajes épicos, acción, descubrimientos y desafíos.' },
    { nombre: 'Misterio', descripcion: 'Enigmas por resolver, detectives y secretos ocultos.' }
  ];

  for (const cat of categorias) {
    const existe = await Categoria.findOne({ nombre: cat.nombre });
    if (!existe) {
      await Categoria.create(cat);
      console.log(`Categoría creada: ${cat.nombre}`);
    } else {
      console.log(`Categoría ya existe: ${cat.nombre}`);
    }
  }
}

module.exports = crearCategoriasBase;

// Llamada externa, para lanzar la función
const crearCategoriasBase = require('./tests/crearCategorias.test');
await crearCategoriasBase();