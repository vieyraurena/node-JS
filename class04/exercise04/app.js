console.log('process.argv', process.argv)
let num = process.argv.slice(2);

const total = require('./odd')
total.Calculate(num);