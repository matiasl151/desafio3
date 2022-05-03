const ContenedorArchivo = require('../assets/contenedorArchivo.js');
const contenedor = new ContenedorArchivo('./controllers/productos.txt')

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const controladoresApi = {

    productos : async (req, res) => {
        const prod = await contenedor.getAll()
        res.json(prod)
    },

    productoRandom : async (req,res) => {
        const producto = await contenedor.getById(randomInt(1,3))
        res.json(producto)
    }
    
}


module.exports = controladoresApi;