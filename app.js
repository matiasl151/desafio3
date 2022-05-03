const express = require('express');
const controladoresApi = require('./controllers/controladoresApi');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Inicio')
})

app.get('/productos', controladoresApi.productos)


const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})
server.on('error', error => {console.log(error.message)})