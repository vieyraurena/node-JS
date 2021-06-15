// Desarrolle un algoritmo que le permita leerun número entero y determine si es negativo.

console.log('process.argv', process.argv)

let myArgv = process.argv.slice(2)
console.log('MyArgv', myArgv)

let number1 = Number(myArgv[0]);

function validation (a) {
  if (a < 0) {
    return `El número es negativo`;
  } else {
    return `El número es positivo`;
  }
}

console.log(`${validation(number1)}`)