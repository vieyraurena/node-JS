const http = require('http')
const url = require('url')


// Mi computadora se vuelve un servidor
const hostname = 'localhost' /* ó 127.0.0.1:7000 */
const port = 3000


//  res es lo que le devolvemos al usuario
const server = http.createServer((req, res) => {
  // lee los parametros que hay en la url 
  const pathUrl = url.parse(req.url, true)
  // console.log('Nombre es', pathUrl.query.nombre)

  res.statusCode = 200
  res.setHeader('content-type', 'text/html; charset=utf-8' )
  res.write(`¡${pathUrl.query.text}${pathUrl.query.nombre}!`)
  res.end()
})


// Acá se escuchan y se ejecuta en cambio en el anterior ejemplo sin ser escuchado igual lo ejecuta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})