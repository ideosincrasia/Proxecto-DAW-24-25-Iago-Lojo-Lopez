# Requerimientos do sistema

- [Requerimientos do sistema](#requerimientos-do-sistema)
  - [1- Descrición Xeral](#1--descrición-xeral)
  - [2- Funcionalidades](#2--funcionalidades)
  - [3- Tipos de usuarios](#3--tipos-de-usuarios)
  - [4- Contorno operacional](#4--contorno-operacional)
  - [5- Normativa](#5--normativa)
  - [6- Melloras futuras](#6--melloras-futuras)

## 1- Descrición Xeral

Crear una página web interactiva llamada CreatyBook, que sirva de soporte para la venta libros digitales, enfocada en elementos de rolplay así como material del mismo. Nos centraremos en escritores mas índies y con menos recursos, dandoles un soporte rápido, bonito y más agradable donde vender sus 

## 2- Funcionalidades

- Usuarios Visitantes (Sin registrar / Anónimos)

| Acción                      | Descripción                                                  |
|-----------------------------|--------------------------------------------------------------|
| Navegación libre            | Navegar por la historia sin registro ninguno.                |
| Consulta de libros          | Visualizar sinopsis, valoraciones y categorías.              |
| Buscar contenido            | Filtrar y buscar en el catalogo por nombre, autor o género.  |
| Vista de contenido gratuito | Acceso a fragmentos de los libros sin necesidad de registro. |
| Recomendaciones básicas     | Presentacion de libros destacados en la página principal.    |
| Registro                    | Creación de una cuenta como lector o autor                   |
| Autentificarse              | Acceder a su cuenta de usuario como lector o autor           |

- Usuarios Registrados (Lectores)

| Acción                         | Descripción                                                                             |
|--------------------------------|-----------------------------------------------------------------------------------------|
| Gestión del perfil             | Edicción de datos personales y preferencias de género (de lectura).                     |
| Continuanción Narrativa        | Guardado y recuperación del proceso dentro de historias interactivas.                   |
| Compra de libros               | Compra de libros digitales mediante el sistema de pago.                                 |
| Lectura Digital                | Lectura online o descarga del libro en formatos compatibles.                            |
| Valoración de libros           | Publicación de puntuacións.                                                             |
| Recomendaciones personalizadas | Recepción de recomendaciones basadas en el comportamiento y las preferencias mostradas. |
| Participacion en la comunidad  | Acceso a foros, clubs y eventos digitales de lectura.                                   |
|                                |                                                                                         |

- Usuarios Registrados (Autores)

| Acción                    | Descripción                                                              |
|---------------------------|--------------------------------------------------------------------------|
| Gestión del perfil        | Edicion de la  página de autor y datos asociados                         |
| Alta de contenido         | Subida de libros, capítulos o material adicional.                        |
| Modificación de contenido | Edición de títulos, sinopses o imagenes.                                 |
| Estadisticas de venta     | Consulta de los datos sobre visitas, compras y lecturas de su contenido. |
| Gestion de ingresos       | Consulta datos sobre ingresos generados y solicitudes de cobro.          |
| Comunicación con lectores | Reponder a comentarios y gestionar las valoraciones.                     |
| Participación en eventos  | Presentacion a concursos, restos o campañas editoriales.                 |
| Gestión de derechos       | Seleccion de licencia para su contenído.                                 |

- Administradores

| Acción                    | Descripción                                                |
|---------------------------|------------------------------------------------------------|
| Moderación del contenido  | Revisión y validación de libros y contenido.               |
| Gestion de usuarios       | Control y edición de perfiles de autores y lectores.       |
| Publicación de novedades  | Creación de articulos, convocatorios e anuncios.           |
| Analisis de la actividad  | Consulta de estadisticas globales de uso de la plataforma. |
| Soporte técnico           | Gestión de incidencias y consultas de los usuarios.        |
| Organización del catalogo | Organizar y promocionar los libros de la página.           |
| Gestion de pagos          | Control del flujo económico y pago a autores.              |

## 3- Tipos de usuarios

Aqui veremos los diferentes usuarios:

- Usuario anónimo: no necesita registro, acceso limitado al contenido interactivo.
- Usuario registrado: Acceso al contenido interactivo, acceso a la adquisicion de libros.
- Usuario limitado: Aquellos usuarios sancionados por los administradores que tiene acceso restringido a la comunidad devido a mal comportamiento. Normalmente de forma temporal.
- Usuario autor: Tiene los mismo derechos que el registrado pero acceso al apartado para autores.
- Administrador: Se encarga de administrar la página y el contenido en ella, a posterior puede que su rol se divida en dos o varios. Se encarga de tramitar los pagos a los autores.

## 4- Contorno operacional

En este caso el usuario necesitará acceso a un equipo informático (pc o movil) con accesso a internet, desde ahí la página se creará completamente accesible. Para las operaciones de autores  y administradores, se recomienda un ordenador, aunque será accesible desde movil.

## 5- Normativa

En este caso tendremos varias leyes a tener en cuenta durante el desarroyo:

- Reglamento general de protección de Datos (RGPD/GDPR):

Esta ley nos exige la correcta gestión de datos personales de forma segura y legal, además de pedir consentimiento explícito antes de recoger o usar los datos.
Además nos exige informar al usuario de qué datos recogemos y para que los usamos o con quien los vamos a compartir.
En caso de que el usuario quiera tambien debe seer capaz de acceder, corregir o eliminar sus datos guardados fácilmente y sin complicaciones.

Para cumplir con estos requisitos debemos mostrar un aviso de Política de privacidad en la web, accesible siempre, por ejemeplo en el pie de la página o al final de un menú.
Además tambien debemos pedir consentimiento explícito antes de recoger información dentro de formularios o otros métodos. Además esta información adquirida tiene que ser tratada de forma segura, por lo que debería cifrarse la informacion dentro de la base de datos.
Por último, tendremos que nombrar un responsable de tratamiento de datos, en este caso sería la propia empresa. Esto se indica en la política de privacidad.

- Ley de servicios de la sociedad de la Información y del Comercio electrónico (LSSI-CE)
    - Vigente en la zona española sobre sitios web con actividad económica y publicitaria

En este caso, para evitar estafas y otros problemas de internet, se nos obliga a identificarnos claramente, con CIF, domicilio, email... etc
Además se nos obliga a dejar claro los servicios quie ofrecemos y las condiciones de estos servicios o productos.
Además y unido a otras leyes, tambien tenemos que pedir consentimiento aprar el uso de cookies que no sean necesarias de forma estricta, entre estas cookies se encuentran por ejemplo las de publicidad o analíticas.

Para cumplir esta legislación debemos dejar visibles los datos de la empresa, ya sean indicandolos en algun sitio o añadiendolos dentro del aviso legal, y evidentemente dejar estos visibles en todo momento. 
Para el trato de Cookies, se añadirá un Modal o un banner pidieron de forma sencilla y clara consentimiento del usuario para el uso de cookies. Además en este apartado se añadirá diferentes campos para las cookies y así que el usuario pueda aceptar, rechazar o configurar las cookies que desea.

- Ley General para la Defensa de los Consumidores y Usuarios

Este caso, la ley es parecida a la del comercio electrónico pero mas general, protegiendo más a los compradores y consumidores.

La ley nos exige que nuestros productos y servicios tengan información clara y completa sobre los productos antes de realizar su compra. Además debemos respetar el derecho de desistimiento, informando a los usuarios de su existencia. Añadido a esta última parte tendremos que informar en caso de que este derecho se pierda, y pedir confirmacion a los usuarios. Por último tiene que añadirse un canal de atención al cliente donde los clientes puedan resolver sus dudas y pedir ayuda.

Para cumplir la ley, en este caso tendremos que mostrar toda la informacion de los libros y contenido que se vá consumir. Añadido a esta información que aparece en la ficha de cada libro, tambien deberemos incluir más adelante en el proceso de venta, unas politicas de compra, envio (en caso de que algún momento se trabaje en físico) o descarga.
Unido a los productos tambien se añadiremos una verificación sobre el derecho de desistimiento, haciendo que el usuario sea consciente de la perdida de este derecho una vez descarga el contenido.


- Ley de Propiedad Intelectual

En este caso tendremos en cuenta tambien la Ley de Propiedad Intelectual, en este caso, está ley protegete los derechos de autor sobre las obras de los artistas.

Para cumplir está ley, tendremos que firma contratos de venta con los autores de los cuales publiquemos libros, además debemos respetar los derechos de los autores sobre sus libros y sus creaciones. Esta parte irá incluida en los contratos con ellos. Además tembien tendremos en los productos un enlace a más contenido del autor, informando así claramente quien es el creador de la obra.

En este caso darémos los autores un contrato de Adhesión, y cuando el autor quiera vender en nuestra plataforma, tendra que aceptar un contrato donde, se declara que es el titular de los derechos de autor, y donde se nos dá autorización expresa para vender su libro.
Además sobre el contenido del blog y del resto de la página pondremos un formulario de reporte a manos de los usuarios, para que en caso de que se visualize contenido no autorizado estes puedan comunicarlo.
Por último en la ficha de cada libro añadiremos un aviso conforme los derechos estan reservados al autor y por tanto se prohibe la reproducción sin permiso de sus autores.

En este caso la responsabilidad cae sobre nosotros siempre y cuando no hagamos cumplir las leyes en nuestra página, permitiendo contenido pirateado o similares. Tambien hay que mencionar que en el caso de que el contenido sea subido por usuarios, la responsabilidad cae sobre ellos, mientras nosotros condenemos y baneemos este contenido en la mayor medida posible dentro de nuestras capacidades.

- Otras consideraciones
Aparte de la LSSI-CE vigente en españa tambien podríamos tener en cuenta la Directiva de comercio electronico UE vigente por toda la unión europea y regula la venta digital.

Además tendremo que diseñar la web en consideración de la Normativa de accesibilidad web (WCAG .2.1) para poder acceder a las ayudas publicas para contenido cultural.

## 6- Melloras futuras

Según la aplicación crezca se deberian desarroyar nuevos roles para encargarse de las tareas administrativas, como moderadores, encargados de la comunidad o editores, encargados de la calidad de los libros subidos a la página.

Además de tambien estudiar la escalabilidad a un entorno más global a futuro.

[**<-Anterior**](../README.md)