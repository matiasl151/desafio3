const { controladoresApi } = require('./controllers/controladoresApi.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/productos', controladoresApi.productos);


const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})
server.on('error', error => {console.log(error.message)})