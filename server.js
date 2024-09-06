const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const cors = require('cors');


const app = express();
app.use(bodyParser.json()); 

app.use(cors());


const client = new Client({
    user: 'diegopc',
    host: 'localhost',
    database: 'libreta_contactos',
    password: '1234',
    port: 5432,
});


client.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('Error de conexión a PostgreSQL', err));


app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Libreta de Contactos');
});


app.post('/contactos', async (req, res) => {
    const { nombres, apellidos, correo, telefono, celular, direccion } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO contactos (nombres, apellidos, correo, telefono, celular, direccion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nombres, apellidos, correo, telefono, celular, direccion]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear el contacto' });
    }
});

app.get('/contactos', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM contactos');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los contactos' });
    }
});


app.get('/contactos/:id', async (req, res) => {
    const { id } = req.params;
    console.log('ID recibido en el backend:', id);
    try {
        const result = await client.query('SELECT * FROM contactos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener el contacto' });
    }
});


app.put('/contactos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, correo, telefono, celular, direccion } = req.body;
    try {
        const result = await client.query(
            'UPDATE contactos SET nombres = $1, apellidos = $2, correo = $3, telefono = $4, celular = $5, direccion = $6 WHERE id = $7 RETURNING *',
            [nombres, apellidos, correo, telefono, celular, direccion, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar el contacto' });
    }
});


app.delete('/contactos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM contactos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.status(200).json({ message: 'Contacto eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar el contacto' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
