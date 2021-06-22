let exist = false

function response() {
  let msj = ''
  if(exist === true) {
    msj = 'La fruta si se encuentra'
    return msj
  } else {
    msj = 'La fruta no se encuentra'
    return msj
  }
}

function arr(fruit) {
  const fruitList = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango']
  for(let i = 0; i < fruitList.length; i++) {
    if(fruitList[i] === fruit) {
      exist = true
    }
  }
  return response()

}

exports.Find = function(fruit) {
  console.log(arr(fruit.toString()))
}