console.log('process.argv', process.argv)
let numbers = process.argv.slice(2);

const total = require('./cilindro')
console.log(total.Volumen(numbers));