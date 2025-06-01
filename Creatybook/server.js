//Dependencias
const express = require('express'); // Framework para crear el servidor
const session = require('express-session'); // Para manejar sesiones de usuario
const apiRoutes = require('./routes/api.routes'); // Importamos las rutas de la API
const rutasPaginas = require('./routes/paginas.routes'); // Importamos las rutas de las páginas
const protectedRoutes = require('./routes/protected.routes'); // Importamos las rutas protegidas
const mongoose = require('mongoose'); // Mongoose para manejar la base de datos MongoDB
const cors = require('cors'); // Para permitir CORS (Cross-Origin Resource Sharing)
const morgan = require('morgan'); // Logger para ver las peticiones en la consola
require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env

// Inizalizamos la app, servidor
const app = express();

//Middleware
app.use(cors()); // Activamos CORS en todos los orignes
app.use(express.json()); // Parse automaticamante el body de las peticiones a JSON
app.use(morgan('dev')); // Logger para ver las peticiones en la consola
app.use(express.static('public')); // Servimos los archivos estáticos de la carpeta public

// Creamos el middleware para las rutas
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

// Configuramos la sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Exponemos la sesión a las vistas
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Middleware para establecer la ruta actual en res.locals.path
app.use((req, res, next) => {
  res.locals.path = req.path;  
  next();                      
});

// Creamos la Conexión a la base de datos
// console.log(process.env.MONGO_URI); //Por que cño no funciona? Fallo mío hehe.
mongoose.connect(process.env.MONGO_URI, {})
.then(() => console.log('MongoDB conectado'))
.catch((err) => console.error('MongontDB no furriula:', err));

// Importamos las rutas. Anote a futuro... Si metes otras rutas, no olvides añadirlas aquí o eliminar las antiguas... causa muchos problemas.
app.use('/api', apiRoutes); // Rutas de la API
app.use('/', rutasPaginas);  // Rutas de las páginas
app.use('/', protectedRoutes); // Rutas protegidas

//Creamos el servidor, y escuchamos en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor oyendolo todo en http://localhost:${PORT}`);
});

// Por favor funciona...