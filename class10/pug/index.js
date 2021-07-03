const express = require('express');
const app = express();
const path = require('path'); //selecciona path de la url

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about', {title:'About', message:'Estás viendo la página de about'});
})

app.listen(3501);