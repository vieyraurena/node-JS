// el maneja la estructura de la base de datos de user

const mongoose = require('mongoose');
// permite crear la estructura de los usuarios
const Schema = mongoose.Schema;


// definimos la estructura de las colecciones (el esqueleto)
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, {versionKey: false})

const User = mongoose.model('User', userSchema)
module.exports = User;