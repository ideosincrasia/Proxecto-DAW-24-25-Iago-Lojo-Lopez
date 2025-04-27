# FASE DE DESEÑO

- [FASE DE DESEÑO](#fase-de-deseño)
  - [1- Diagrama da arquitectura](#1--diagrama-da-arquitectura)
  - [2- Casos de uso](#2--casos-de-uso)
  - [3- Diagrama de Base de Datos](#3--diagrama-de-base-de-datos)
  - [4- Deseño de interface de usuarios](#4--deseño-de-interface-de-usuarios)

> *EXPLICACIÓN:* Este documento inclúe os diferentes diagramas, esquemas e deseños que axuden a describir mellor Creatybook detallando os seus compoñentes, funcionalidades, bases de datos e interface.

## 1- Diagrama da arquitectura

[Diagrama de Arquitectura](./img/diagrama_arqu.png)

## 2- Casos de uso

| Caso                                | Actor          | Descripción                                                                                                            |
|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------|
| Registrarse                         | Usu Anónimo    | Un usuario quiere crear una cuenta, aportando los dados necesarios                                                     |
| Iniciar Sesion                      | Usu Anónimo    | Un usuario quiere acceder a su cuenta con sus credenciales                                                             |
| Navegar por el catálogo             | Usu (Todos)    | Un usuario explora el catálogo de libros disponibles en el market place.                                               |
| Leer y interactura con la narrativa | Usu Registrado | Un usuario inicia la narrativa y interactua con ella, recopilando datos para posteriores sugerencias                   |
| Añadir Libros al Carrito            | Usu Registrado | Un usuario seleccioná y añade libros a su carrito para su compra.                                                      |
| Comprar libros                      | Usu Registrado | Un usuario realizá el pago de los libros en su carrito, además de visualizar el contenido de este.                     |
| Descargar libros comprados          | Usu Registrado | Un usuario utiliza sus libros adquiridos a traves de la página.                                                        |
| Consultar historial compras         | Usu Registrado | Un usuario accede a sus facturas anteriores y sus registros de compra                                                  |
| Gestionar perfil                    | Usu Registrado | Un usuario cambia sus datos personales dentro del perfil o solicita un cambio de contraseña /correo                    |
| Subir un libro                      | Autor          | Un autor sube su obra para su venta en la página.                                                                      |
| Gestionar libros                    | Autor          | Un autor modifica o retira sus productos expuestos en la página                                                        |
| Gestion de página                   | Administrador  | Un administrador revisa la actividad de la página, gestiona los libros, nuevos productos y supervisa las transacciones |

## 3- Diagrama de Base de Datos

[Diagrama de la base de datos](./img/diagrama_bd.png)

## 4- Deseño de interface de usuarios

[Diseño en Figma, aun pendiente de desarroyo, ciertas partes del programa, mientras desde el equipo leemos la documentacion de Ink.js](https://www.figma.com/design/hycIRuFIyNZrk2KMTfJNzu/Untitled?node-id=0-1&p=f&t=AbEN9U05hYwveHru-0)

[**<-Anterior**](../../README.md)