const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	type:'application/x-www-form-urlencoded',
	extended: true,
}))

// '/' url actual
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html')); //dirname me va a dar la dirección actual y luego muestra el index
})

// después de la barra /about iriamos a otra ruta del index
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/about.html')); //dirname me va a dar la dirección actual y luego muestra el index
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('holaMundo...');
})

app.listen(3501);