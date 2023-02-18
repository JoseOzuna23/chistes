const Bromas = require('../models/jokes.models')

const obtenerBromas = (req, res)=>{
    Bromas.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const crearBromas =  (req, res)=>{
    Bromas.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
const editarBromas = (req, res)=>{
    Bromas.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarBromas = (req, res)=>{
    Bromas.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = {
    obtenerBromas,
    crearBromas,
    editarBromas,
    eliminarBromas
}