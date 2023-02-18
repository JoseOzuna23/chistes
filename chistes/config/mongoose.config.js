const mongoose = require ('mongoose')

mongoose.set('strictQuery', true)

//mongoose.connect('mongodb://127.0.0.1:27017/chiste', ()=>{
//console.log('Conectado a MongoDB')
//})

mongoose.connect('mongodb://127.0.0.1:27017/chiste', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conexion Exitosa'))
    .catch(err => console.log('No Conectado ', err));