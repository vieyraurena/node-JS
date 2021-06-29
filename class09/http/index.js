const http = require('http')

// 200 siginifica que todo esta bien
// 201 fue creado
// 204 No hay contenido

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
  res.write('¡hola Mundo!')
  res.end()
})


// puerto 5000 o 7000
server.listen(5000)
console.log('Node.js listening on port 5000')