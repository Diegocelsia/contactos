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
```
### 2. Ejecutar el servidor

Una vez instaladas las dependencias, puedes iniciar el servidor:

```bash
node server.js
```


El servidor estará corriendo en http://localhost:3000 por defecto.

### 3. Endpoints del API

La API ofrece las siguientes rutas para gestionar los contactos:

    GET /contactos: Obtiene la lista de todos los contactos.
    GET /contactos/
    : Obtiene un contacto por su ID.
    POST /contactos: Crea un nuevo contacto.
    PUT /contactos/
    : Actualiza un contacto por su ID.
    DELETE /contactos/
    : Elimina un contacto por su ID.

## Configuración del Frontend (Angular)

El frontend está desarrollado en Angular. A continuación se explican los pasos para configurarlo y ejecutarlo.
### 1. Instalación de dependencias

Navega al directorio del frontend (donde se encuentra el archivo angular.json) e instala las dependencias necesarias con:

bash

```bash
npm install
```

### 2. Ejecutar la aplicación Angular

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo de Angular con:

```bash
ng serve
```
La aplicación se ejecutará en http://localhost:4200.

### 3. Interacción con el Backend

La aplicación Angular se comunica con el backend a través de las siguientes funcionalidades:

    Cada una de estas funcionalidades es independiente una de la otra (haciendo referencia a la funcionalidad correspondiente).

        Eliminar contacto: Permite eliminar un contacto específico.
    
        Editar contacto: Permite seleccionar un contacto existente, editar sus datos y guardarlos.

        Buscar contacto por iD: Permite buscar el contacto por el ID.
    
        Listar contactos: Muestra la lista completa de contactos en la pantalla.   
                    

## Funcionalidades
### 1. Backend (API)

    GET /contactos: Devuelve todos los contactos.
    GET /contactos/<id>
    : Devuelve un contacto específico según el ID.
    POST /contactos: Permite crear un nuevo contacto proporcionando nombres, apellidos, correo, telefono, celular, y direccion.
    PUT /contactos/
    : Actualiza un contacto existente.
    DELETE /contactos/
    : Elimina un contacto por su ID.


### 2. Frontend (Angular)

La aplicación Angular se comunica con el backend a través de las siguientes funcionalidades, cada una independiente de las demás:

    Eliminar contacto: Permite eliminar un contacto específico.
        En la sección de eliminar contactos, se muestra la lista completa de contactos con un botón "Eliminar" al lado derecho de cada uno.
        Al hacer clic en "Eliminar", el contacto es removido de la lista.

    Editar contacto: Permite modificar los datos de un contacto existente.
        En la sección de editar contactos, se muestra la lista completa de contactos con un botón "Editar" al lado derecho de cada uno.
        Al hacer clic en "Editar", la interfaz cambia para mostrar los campos editables del contacto seleccionado.
        La nueva interfaz incluye dos botones funcionales: "Guardar cambios" y "Cancelar", que permiten al usuario guardar las modificaciones o descartarlas según requiera.

    Buscar contacto por ID: Permite buscar un contacto específico utilizando su ID.
        Al ingresar un ID y hacer clic en el botón "Buscar", se muestran los detalles del contacto, incluyendo nombre, apellido, correo electrónico, teléfono, celular y dirección.

    Agregar contacto: Permite añadir un nuevo contacto.
        El usuario puede ingresar la información correspondiente al contacto a registrar, solicitando nombres, apellidos, correo electrónico, teléfono, celular y dirección.
        Al lado izquierdo aparece el botón "Agregar contacto" para confirmar la acción.

    Listar contactos: Muestra en pantalla la lista completa de contactos registrados en la base de datos.

## Dependencias
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
