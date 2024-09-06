const { Client } = require('pg');

// Configuración de la conexión a PostgreSQL
const client = new Client({
    user: 'diegopc',
    host: 'localhost',
    database: 'libreta_contactos',  // Debes usar la base de datos creada previamente
    password: '1234',
    port: 5432,
});

// Crear tablas
const createTables = `
  CREATE TABLE contactos (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    correo VARCHAR(100),
    telefono VARCHAR(15),
    celular VARCHAR(15),
    direccion VARCHAR(150)
  );
`;

client.connect()
    .then(() => console.log('Conectado a la base de datos libreta_contactos'))
    .then(() => client.query(createTables))
    .then(() => console.log('Tabla "contactos" creada'))
    .catch(err => console.error('Error al crear la tabla', err))
    .finally(() => client.end());
