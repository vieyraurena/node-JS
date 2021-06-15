const colors = require('colors/safe')

const args = process.argv.slice(2);
const [name = 'Amigo'] = args;
// sería iguala la linea 4
// const name = args[0]

const hour = new Date().getHours();

if(hour >= 6 && hour < 12) {
  console.log(colors.green(`Buenos días ${name}`))
} else if(hour >+ 12 && hour < 18) {
  console.log(colors.rainbow(`Buenas tardes ${name}`))
} else {
  console.log(colors.cyan(`Buenas noches ${name}`))
}