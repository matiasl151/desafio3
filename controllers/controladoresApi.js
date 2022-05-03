const ContenedorArchivo = require('../assets/contenedorArchivo.js');

const contenedor = new ContenedorArchivo('../assets/productos.txt')

const controladoresApi = {

    productos : (res, req) => {
        res.json(contenedor.getAll());
    },
    // productosRandom: (res, req) => {
    //     res.json(contenedorArchivos.getAll());
    // }
}

console.log(contenedor.getAll());


module.exports = controladoresApi;