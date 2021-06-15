const fs = require('fs');
const path = process.cwd();
const change = '/\r?\n/';
let array = fs.readFileSync(`${path}/disney_movies.txt`).toString().split(change);

function objectList(newArr){
  const obj = {
    'title' : newArr[0],
    'year' : newArr[1],
    'gener' : newArr[2]
  }
  print(obj)
}

function print(obj){
  console.log(`Película: ${obj.title}`);
  console.log(`Año: ${obj.year}`);
  console.log(`Género: ${obj.gener}\n`);
}

function lineArray() {
  for(let i = 0; i < array.length; i++) {
    let arg = array[i].split('\r\n')
    for(let f = 0; f < arg.length; f++) {
      let newArr = arg[f].split(';',3);

      objectList(newArr)
    }
  }
}

lineArray();

