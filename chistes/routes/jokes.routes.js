const ControladorBromas = require('../controllers/jokes.controllers')
module.exports = (app) =>{
    app.get('/api/obtenerbroma', ControladorBromas.obtenerBromas) 
    app.post('/api/crearbroma', ControladorBromas.crearBromas) 
   app.put('/api/editarbromas/:id', ControladorBromas.editarBromas)
    app.delete('/api/borrarbroma/:id', ControladorBromas.eliminarBromas)
}