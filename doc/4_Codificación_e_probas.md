# FASE DE CODIFICACIÓN E PROBAS

- [FASE DE CODIFICACIÓN E PROBAS](#fase-de-codificación-e-probas)
  - [1- Codificación](#1--codificación)
  - [2- Prototipos](#2--prototipos)
  - [3- Innovación](#3--innovación)
  - [4- Probas](#4--probas)

> Este documento explica como se debe realizar a fase de codificación e probas.

## 1- Codificación

La mayoría de los errores encontrados a lo largo del diseño están incluidos en los comentarios del mísmo código.

Algunos encontrados pueden citarse aquí:

- Un gran error enfrentado fué el código propio de inkly.js, su documentación no es la mejor escrita y además, tiene varias versiones lo que produce que la página sea dificil de diseñar, añadido a esto hay otro problema acarreado.

- Ink.js te guarda el progreso en un JSON en forma de String, que es el que se guarda en la base de datos, este Json, al ser transpasado a la base de datos y luego de nuevo al programa cuando carga el progreso, tiene que corresgirse algunos cambios dado que la base de datos añade caracteres para guardar el JSON. Tardé en darme cuenta de esto.

- Además encontramos problemas con el diseño propuesto en movil, dado que aunque en dispositivos pequeños podría quedar bien tenía fallos a optimizarlo a vista de escritorio.

- Más recientemente en la etapa de desarroyo, tambien tuvimos problemas con la subida de imagenes y su carga en la base de datos, al final optamos por subirlas a la zona de archivos estáticos y guardar unicamente la URL dentro de la base de datos.

## 2- Prototipos

A continuación se adjunta el link al prototipo en figma, dentro del mismo archivo que se usa para el apartado de diseño.

[Prototipo Creatybook](https://www.figma.com/proto/hycIRuFIyNZrk2KMTfJNzu/CreatyBook?node-id=1-2&t=RimcIFeCVYarEmN3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2)

## 3- Innovación

En este caso, nos embarcamos a utilizar Node.js con Ejs, Si bien es cierto que Node es un tema tratado en el ciclo, es un tema que se trata por encima y no profundizando en su funcionamiento como servidor para una página web.

Dentro de Node, tambien se utilizaron varias librerías, en este caso especial atención a Ejs para tramitar las vistas de la aplicación. Además de varias otras como Bycryp para la encriptación de las contraseñas en la base de datos... etc.

Además tambien estuvimos probando la base de datos de Mongo, dado que aunque la utilizara con anterioridad a lo largo proyectos propios nunca tuve que hacer un set de un cluster propio para Mongo.

Por último como es evidente, trabajar con Inkly ha sido algo completamente nuevo comparado con el ciclo, no solo por ser una librería que no miramos en el diclo, si no además por ser una librería que trae y requiere de su propio tipo de archivo (los .ink) para crear el script de las historias interactivas.

## 4- Probas

Las primeras pruebas del programa fueron a nivel de login, donde al principio se permitian emails invalidos. Estos nos querirío primero mirar como poder enviar los errores para fuera del Post a la api. Sumado a este problema, cuando solucionamos esto con el uso del método res.status() tambien se añadieron otras comprobaciones.

La historia dió bastantes problemas, primeramente a la hora de lanzar el programa de inklekate (la librería en node para cambiar de archivos .ink al json que utiliza la ink.js a nivel Web) los parametros defaults no servian y tuve que buscar la solución, en otras versiones del programa. Posterior a esto, al lanzarlo funcional porfin, encontramos el problema de que la version del archivo ink estaba desactualizada y había etiquetas que a día de hoy no se utilizaban, así que investigamos cuales eran, cambiando todas las etiquetas deprecated por etiquetas funcionales. Despues de esto y cuando ya lo pusimos a funcionar en la página, tuvimos tambien el error descrito arriba, que el paso de Ejs a js cambiaba algunos caracteres en particular (\n) por lo que tuvimos que asegurarnos de que los escapara, tardamos en descubrirlo pero era por utiliza <%- en vez de <%= y eso hacía que los strings se rompieran con facilidad al cambiar el formato. Despues la base de datos añadía comillas al principio y al final del String y tambien tuvimos que añadirle la excepción para comprobar que funcionaba.

[**<-Anterior**](../README.md)
