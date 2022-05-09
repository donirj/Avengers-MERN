//1 importaciones
const mongoose = require("mongoose")

//2 schema
const characterSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    }, 
    pictureUrl: {
        type: String,
        required: true
    }, 
    aka: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

//3 modelo
const Character = mongoose.model("Character", characterSchema)

//4 exportacion
module.exports = Character