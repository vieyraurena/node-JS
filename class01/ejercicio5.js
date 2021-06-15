// Desarrolle un programa que le permita leer dos números entero y muestre 
// la división del primer número entre el segundo.Recordar que la división entre 0 da un error.

console.log('process.argv', process.argv);

let myArgv = process.argv.slice(2);
console.log('MyArgv', myArgv)

let number1 = Number(myArgv[0]);
let number2 = Number(myArgv[1]);

function validation(a, b) {
  if (a === 0 || b === 0) {
    return 'Error, ingresa un numero entero positivo';
  } else {
    let operation = number1 / number2;
     return `El resultado es  ${operation}`;
  }
}

console.log(`${validation(number1, number2)}`);