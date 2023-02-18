const express = require('express')
const app = express()
const PORT = 8000
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./config/mongoose.config')

const RutasBromas = require('./routes/jokes.routes')
RutasBromas(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})