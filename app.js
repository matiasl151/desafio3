const express = require('express');
const controladoresApi = require('./controllers/controladoresApi');
const controladoresWeb = require('./controllers/controladoresWeb');
const app = express();
const PORT = 8080;

app.get('/', controladoresWeb.root);
app.get('/inicio', controladoresWeb.inicio);
app.get('/productos', controladoresApi.productos);
app.get('/productoRandom', controladoresApi.productoRandom);


const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => {console.log(error.message)});