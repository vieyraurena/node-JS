console.log('process.argv', process.argv)
let amount = process.argv.slice(2);

const total = require('./weight')
total.CalculateWeight(amount);