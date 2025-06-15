# FASE DE IMPLANTACIÓN

- [FASE DE IMPLANTACIÓN](#fase-de-implantación)
  - [1- Manual técnico](#1--manual-técnico)
    - [1.1- Instalación](#11--instalación)
    - [1.2- Administración do sistema](#12--administración-do-sistema)
  - [2- Manual de usuario](#2--manual-de-usuario)
  - [3- Melloras futuras](#3--melloras-futuras)

## 1- Manual técnico

### 1.1- Instalación

Para la implementación del programa primeramente marcamos estos requerimientos de hardware:

- Equipo local (Requerimiento en caso de que se lance dentro de un equipo local) : 
  - Procesador: Intel 5i o Equivalente.
  - RAM: 2 GB.
  - Espacio en Disco: 300MB (Espacio reservado para imagenes.)

El equipo debe tener instalado docker y Node.js (v18 o superior), además de una navegador y evidentemente conexíon a internet:

A continuación añadiremos el proceso para desplegar la web en un servidor linux como el expuesto en apartado sobre el hardware del proyecto.

- Clonaremos el repositorio.
- Prepararemos el entorno añadiendo en .env nuestras variables, en este caso estas variables son la id unica de la applicación y además tambien la conexciona a base de datos dada.
- Iniciaremos la aplicacion (docker compose up --build) para utilizar el docker dado para lanzar la aplicación en el equipo.
- Dentro del navegador podremos acceder a ella con Localhost:3000

Con esto la aplicación estaría funcionando, en este caso la base de datos utilizada es exclusivamente Mongobd además, para conectarse desde un equipo externo se tendrá que usar la Ip del equipo a excepción de si se coloca un dominion como una aplicación como Ngix.

### 1.2- Administración do sistema

En este caso tendremos varias medidas de control:

- Copias de seguridad de la App: Para garantizar el correcto funcionamiento de la misma deberían hacerse copias semanalmente, si el equipo servidor es Linux, se puede colocar en el Crom un comando Tar para copiar los archivos (tar -czf backup-$(date +%F).tar.gz /ruta/a/CreatyBook).

- En el caso de la base de datos, esta opción esta displonible desde Atlas Mongo, añadiendo las copias al Cluster.

En el caso de la gention de los usuarios, actualmente, se tendrá que realizar a apartir de las base de datos, Mongo Compas es recomendable, en un futuro los administradores tendrán acceso a estes apartados dentro de sus respectivos paneles dentro de la aplicación.

En caso de cualquier acceso no autorizado, tenemos en Node una librería encargada de los logs, además Mongo tiene un registro de loas accesos dentro de su cluster, lo cual permite ver cualquier acceso indevido a la base de datos.

## 2- Manual de usuario

En este caso, los usuario navegaran libre mente por la aplicación, los único procesos importantes de mención son algunos como el registro o inicio de sesión:

- Inicio de sesión: Una vez se accede a la web, para iniciar sesión (si no se carga automáticamente) se debe utilizar el botón de arriba a la derecha para introducir sus datos, actualmente los usuarios no registrados no pueden ver cosas como las historias, así que deberán registrarse.

- Registrarse: En caso de no tener cuenta, deberá realizarse un registro, donde con un email único y un nombre además de una contraseña, se deberá crear una sesión.

Para completar el perfíl, los usuarios podran acceder a su cuenta dandole al boton de mi cuenta que ser revela en el sitio del boton de loguearse, ahí dentro podrán editar cosas como su imagen de perfíl, que luego se mostrará a lo largo de la página.

Una vez registrados los usuarios tienen acceso a más partes de la página, permitiendoles acceder a las historias, actualmente solamente una está disponible, en un futuro habra más de ellas disponibles.

Seleccionando nueva partida los usuarios empezaran la historia seleccionada desde el principio, mientras que utilizando el boton de continuar, se cargará su proceso en la historia, este proceso se carga automáticamente, es decir, si un usuario accede al link de la historia sin pasar por el botond e continuar o nueva partida, se dará por caso la carga de la historia.

Además, añadido a lo anterior en caso de darle a continuar y no tener progreso, se comenzará desde el principio de la historia.

## 3- Melloras futuras

Hay bastantes cosas que implementear, aparte de hacer la página mas vistosa, me gustáría añadir la posibilidad de recuperación de cuentas.

Añadido a esto, habría varios sistemas que terminar de pulir, como los botones de las historias y tambien hacer las historias con un UI más llamativa y fantasiosa.

En cuanto a sistemas internos, me gustaría cargar los documentos como una parte de un Layout.ejs, aunque no fui capaz de implementarlo para esta versión, estaría interesante hacerlo funcionar a futuro, para tener así la página con una estrucutra clara.

[**<-Anterior**](../README.md)
