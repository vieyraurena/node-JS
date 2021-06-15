const fs = require('fs');

fs.writeFile('list.txt', 'Nombre, Apellido, Edad\n Oliver, Brown, 20\n Jack, Murphy, 35\n Charlie, Rodriguez, 38\n George, Smith, 22\n James, Anderson, 23\n William, Walsh, 25', function (err, data) {
  if (err)
    return console.log(err)
  console.log('Archivo creado y salvado')
})