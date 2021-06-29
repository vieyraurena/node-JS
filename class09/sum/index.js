const http = require('http')
const url = require('url')
const operation = require('./operation')

const hostname = 'localhost' 
const port = 3000

const server = http.createServer((req, res) => {
  const pathUrl = url.parse(req.url, true)
  res.statusCode = 200
  res.setHeader('content-type', 'text/plain' )
  res.write(`El total es: ${operation.Sumar(pathUrl.query.a, pathUrl.query.b)}`)
  res.end()
})

// Acá se escuchan y se ejecuta en cambio en el anterior ejemplo sin ser escuchado igual lo ejecuta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})