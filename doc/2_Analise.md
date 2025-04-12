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
    - Afecta a toda Europa en al ambito de recogida de datos y uso de los mismos.

| Exigencia                    | Aplicación                                                                                                                                   |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Consentimiento Expreso       | Debemos informar y obtener permiso antes de recoger datos personales (Registros, cookies, preferencias)                                      |
| Derechos del usuario         | El usuario debe poder ver, modificar o eliminar sus datos personales en todo momento.                                                        |
| Politica de privacidad clara | Debe estar visible en todas las partes de la web y explicar como se usaran los datos.                                                        |
| Contrato con terceros        | En nuestro caso al usar Stripe, o incluso si queremos implementa google analitics, necesitamos contratos que regulen el tratamiento de datos |

- Ley de servicios de la sociedad de la Información y del Comercio electrónico (LSSI-CE)
    - Vigente en la zona española sobre sitios web con actividad económica y publicitaria

| Exigencias                | Aplicación                                                                                                                 |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Informacion legal visible | Aviso legal, política de cookies y privacidad siempre visibles.                                                            |
| Consentimiento de cookies | Explicas que cookies y donde se usan para obtener consentimiento del usuario                                               |
| Comunicación comercial    | Los email promocionales y notificaciones de anuncios y promociones, deben identificarse como tal y permitir darse de baja. |
| Identificación titular    | La web debe mostrar quien es el responsable de forma clara y concisa (Nombre, CIF, direción, contacto)                     |

- Ley General para la Defensa de los Consumidores y Usuarios
    - Vigente es españa afecta a la venta de producto digitales.

| Exigencias                      | Aplicación                                                                                                           |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Información previa en la compra | Debe indicarse precio, impuestos, características y condiciones antes del pago.                                      |
| Política de devolución clara    | Aunque los ebooks no tengan derecho de desistimiento (Devolución) esto debe indicarse claramente y de forma expresa. |
| Facturación                     | Debemos tener una parte donde los usuario y autores puedan ver sus facturas o comprobantes de compra válidos.        |
|                                 |                                                                                                                      |

- Ley de Propiedad Intelectual
    - Vigente en España, y afecta a los libros y contenido subido por los autores a nuestra web.

| Exigencias                  | Aplicación                                                                                                          |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|
| Derechos de autor           | Debemos asegurarnos de que el autor mantiene los derechos sobre el contenido que sube.                              |
| Licencias de uso            | Podemos incluir contenido con licencias abiertas (Creative Commons, por ejemplo) pero deben indicarse claramente.   |
| Protección contra el plagio | Debemos vigilar y establecer un protocolo para actuar ante el contenido plagiado o reclamado dentro de nuestra web. |

Aparte de la LSSI-CE vigente en españa tambien podríamos tener en cuenta la Directiva de comercio electronico UE vigente por toda la unión europea y regula la venta digital.

Además tendremo que diseñar la web en consideración de la Normativa de accesibilidad web (WCAG .2.1) para poder acceder a las ayudas publicas para contenido cultural.

## 6- Melloras futuras

Según la aplicación crezca se deberian desarroyar nuevos roles para encargarse de las tareas administrativas, como moderadores, encargados de la comunidad o editores, encargados de la calidad de los libros subidos a la página.

Además de tambien estudiar la escalabilidad a un entorno más global a futuro.

[**<-Anterior**](../../README.md)