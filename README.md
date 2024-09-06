# Proyecto Libreta de Contactos

Este proyecto es una aplicación de *Libreta de Contactos* que permite realizar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de contactos. Está compuesto por un *backend* que expone una API REST y un *frontend* construido en Angular para interactuar con la API.

## Contenido

- [Requisitos](#requisitos)
- [Configuración del Backend (API)](#configuración-del-backend-api)
- [Configuración del Frontend (Angular)](#configuración-del-frontend-angular)
- [Funcionalidades](#funcionalidades)
- [Dependencias](#dependencias)

---

## Requisitos

Asegúrate de tener instalados los siguientes componentes en tu entorno local:

- [Node.js](https://nodejs.org) v14 o superior
- [npm](https://www.npmjs.com/) (Generalmente viene con Node.js)
- [Angular CLI](https://angular.io/cli) (npm install -g @angular/cli)

---

## Configuración del Backend (API)

El backend está implementado utilizando *Node.js* y *Express*. Sigue los pasos a continuación para configurarlo y ejecutarlo.

### 1. Instalación de dependencias

Navega al directorio del backend (donde se encuentra el archivo server.js) e instala las dependencias:

```bash
npm install

2. Ejecutar el servidor

Una vez instaladas las dependencias, puedes iniciar el servidor:

bash

node server.js

El servidor estará corriendo en http://localhost:3000 por defecto.
3. Endpoints del API

La API ofrece las siguientes rutas para gestionar los contactos:

    GET /contactos: Obtiene la lista de todos los contactos.
    GET /contactos/
    : Obtiene un contacto por su ID.
    POST /contactos: Crea un nuevo contacto.
    PUT /contactos/
    : Actualiza un contacto por su ID.
    DELETE /contactos/
    : Elimina un contacto por su ID.

Configuración del Frontend (Angular)

El frontend está desarrollado en Angular. A continuación se explican los pasos para configurarlo y ejecutarlo.
1. Instalación de dependencias

Navega al directorio del frontend (donde se encuentra el archivo angular.json) e instala las dependencias necesarias con:

bash

npm install

2. Ejecutar la aplicación Angular

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo de Angular con:

bash

ng serve

La aplicación se ejecutará en http://localhost:4200.
3. Interacción con el Backend

La aplicación Angular se comunica con el backend a través de las siguientes funcionalidades:

    Listar contactos: Muestra la lista completa de contactos en la pantalla.
    Crear contacto: Permite agregar un nuevo contacto.
    Editar contacto: Permite seleccionar un contacto existente, editar sus datos y guardarlos.
    Eliminar contacto: Permite eliminar un contacto específico.

Funcionalidades
1. Backend (API)

    GET /contactos: Devuelve todos los contactos.
    GET /contactos/<id>
    : Devuelve un contacto específico según el ID.
    POST /contactos: Permite crear un nuevo contacto proporcionando nombres, apellidos, correo, telefono, celular, y direccion.
    PUT /contactos/
    : Actualiza un contacto existente.
    DELETE /contactos/
    : Elimina un contacto por su ID.

2. Frontend (Angular)

    Listar contactos: La aplicación Angular muestra todos los contactos obtenidos del backend.
    Crear contacto: El usuario puede ingresar los datos de un nuevo contacto y agregarlo a la lista.
    Editar contacto: El usuario puede seleccionar un contacto existente, modificar sus datos y guardarlos.
    Eliminar contacto: Permite eliminar un contacto existente desde la interfaz.

Dependencias
Backend (Node.js + Express)

    express: Framework para crear el servidor HTTP.
    cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
    body-parser: Middleware para parsear los datos del cuerpo de las solicitudes HTTP.

Frontend (Angular)

    @angular/core: Paquete central de Angular.
    @angular/forms: Módulo para manejar formularios y ngModel.
    @angular/http: Módulo HTTP para interactuar con APIs REST.
    rxjs: Librería para manejar eventos asincrónicos.

Cómo funciona la aplicación

    Backend: El servidor Node.js expone una API REST que maneja la creación, lectura, actualización y eliminación de contactos. Los datos se mantienen en memoria en un array en lugar de una base de datos, lo que simplifica el desarrollo y las pruebas locales.

    Frontend: La interfaz gráfica de usuario construida en Angular interactúa con el backend a través de llamadas HTTP. El frontend permite al usuario visualizar la lista de contactos, agregar nuevos, editar los existentes y eliminarlos.

Autor

Desarrollado por Diego Suarez.
