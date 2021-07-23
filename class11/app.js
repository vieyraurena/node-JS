require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
// llamamos a router dentro de app.js
const userRoute = require('./routes/user.route')
// app levanta el puerto
const app = express();
// carga las variables de ambiente

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

// conexion a la base de datos
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
// on es un evento
db.on('error',error =>{
    console.log(error)
});
// once cuando la conexion esta abierta
db.once('open', () => {
    console.log('connection to db established')
})

// traemos en body la recibe como json
app.use(express.json());

// reconoce los request si son strings o arrays, middlewords, valida la inforamcion que le estamos pasando a nuestro backend
app.use(express.urlencoded({
    // x-www son formatos ya sea imagenes/pdf....
    type:'aplication/x-www-form-urlcoded',
    extended: true,
}))


app.use('/', userRoute);

// le decimos que si no la encuentra pase esto
// * cualquier path que no sea el de arriba eso significa el *
app.use('*', (req, res) => {
    // enviele al usuario este error 404 page not found
    res.status(404)
    res.send("Path cannnot found")
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on ${HOSTNAME}:${PORT}`);
})