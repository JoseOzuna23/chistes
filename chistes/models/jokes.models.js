const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaJoke = mongoose.Schema({
    nombre:String,    
    developer: Boolean
})

const Bromas = mongoose.model('Bromas', SchemaJoke)
module.exports = Bromas