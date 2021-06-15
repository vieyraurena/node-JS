// Desarrolle un programaque permita leer tres valores y almacenarlos en las variables A, B y C respectivamente. 
// El algoritmo debe determinar cual es el mayor.

console.log('process.argv', process.argv)

let myArgv = process.argv.slice(2)
console.log('MyArgv', myArgv)

let number1 = Number(myArgv[0]);
let number2 = Number(myArgv[1]);
let number3 = Number(myArgv[2]);

function ar (a, b, c) {
  let resultado = Math.max(a, b, c)
  return resultado;
}

console.log(`el resultado es ${ar(number1, number2, number3)}`)