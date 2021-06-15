// require importa un módulo fs de node
// file sistem nos permite escribir

const fs = require('fs')

//permite obtener la ruta actual
let path =process.cwd();
console.log(path)

const user = {
  "id":1,
  "name":"Vieyra",
  "age":28
}

const data = JSON.stringify(user);

// fs.writeFile(`${path}/holamundo.json`, data, function(err, data) {
//   if(err) 
//     return console.error(err)
  
//   console.log("Archivos creado y salvado")
// });

// sobreescribe
fs.writeFile(`${path}/holamundo.txt`, 'hola Mundo', function(err, data) {
  if(err) 
    return console.error(err)
  
  console.log("Archivos creado y salvado")
});


// // agrega mas lineas al archivo
// fs.appendFile(`${path}/holamundo.txt`, 'soy \n y Vieyra', function(err, data) {
//   if(err) 
//     return console.error(err)
  
//   console.log("Se actualizado el archivo")
// });

// leer archivo
//  da error sino exirte el archivo con writeFile
fs.readFile(`${path}/holamundo.txt`, 'utf8', function(err, data) {
  if(err) 
    return console.error(err)
  console.log(JSON.stringify(data))
  console.log(data)
})

// Abrir archivo
// fs.open(`${path}/nuevoarchivo.txt`, 'w', function(err, fd) {
//   if(err) 
//     return console.error(err)

//     fs.write(fd, 'ESta es mi primera línea', 'utf8', function(err){
//       if(err) 
//         return console.error(err)
//     })
// })

// Borrar un archivo
// fs.unlink(`${path}/nuevoarchivo.txt`, function(err) {
//   if(err) 
//     return console.error(err)

//     console.log('Se ha eliminado el archivo')
// })