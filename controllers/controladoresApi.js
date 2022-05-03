const ContenedorArchivo = require('../assets/contenedorArchivo.js');
const contenedor = new ContenedorArchivo('./controllers/productos.txt')

const controladoresApi = {

    productos : async (req, res) => {
        const prod = await contenedor.getAll()
        res.send(JSON.stringify(prod, null, 4))
    },

    productoRandom : async (req,res) => {
        const producto = await contenedor.getById()
    }
    
}

module.exports = controladoresApi;