//Dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Inizalizamos la app, servidor
const app = express();

//Middleware
app.use(cors()); // Activamos CORS en todos los orignes
app.use(express.json()); // Parse automaticamante el body de las peticiones a JSON
app.use(morgan('dev')); // Logger para ver las peticiones en la consola

// Creamos el middleware para las rutas
app.set('view engine', 'ejs');
app.set('views', './views');

// Creamos la Conexión a la base de datos
// console.log(process.env.MONGO_URI); //Por que cño no funciona? Fallo mío hehe.
mongoose.connect(process.env.MONGO_URI, {})
.then(() => console.log('MongoDB conectado'))
.catch((err) => console.error('MongontDB no furriula:', err));

// Importamos las rutas. Anote a futuro... Si metes otras rutas, no olvides añadirlas aquí o eliminar las antiguas... causa muchos problemas.
const rutasPaginas = require('./routes/paginas.routes');
app.use('/', rutasPaginas);


//Creamos el servidor, y escuchamos en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor oyendolo todo en http://localhost:${PORT}`);
});

// Por favor funciona...