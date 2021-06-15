// Desarrollo un programa que dado 
// tres números enteros calculeel promedio de esos tres números.(Usar funciones)

console.log('process.argv', process.argv)

let myArgv = process.argv.slice(2)
console.log('MyArgv', myArgv)

let number1 = Number(myArgv[0]);
let number2 = Number(myArgv[1]);
let number3 = Number(myArgv[2]);

function average (a,b, c) {
  let operation = (a + b + c) / 3;
  return operation;
}

console.log(`El resultado es ${average(number1, number2, number3)}`);