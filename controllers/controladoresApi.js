const ContenedorArchivo = require('../assets/contenedorArchivo.js');
const contenedor = new ContenedorArchivo('../assets/productos.txt')

const controladoresApi = {

    productos : async (req, res) => {
        await res.json(contenedor.getAll());
    },
    // productosRandom: (res, req) => {
    //     res.json(contenedorArchivos.getAll());
    // }
}

module.exports = controladoresApi;