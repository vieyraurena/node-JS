let total = 0

function positiveValue(num) {
  let media = 0
  for(let i = 0; i < num.length; i++) {
    if(Math.sign(Number(num[i])) === 1) {
      media += Number(num[i]) 
    }
  }
  total = media / num.length
  return total 
}

function negativeValue(num) {
  let media = 0
  for(let i = 0; i < num.length; i++) {
    if(Math.sign(Number(num[i])) === -1) {
      media += Number(num[i]) 
    }
  }
  total = media / num.length
  return total
}

exports.CalculateMedia = function(numeros) {
  console.log(positiveValue(numeros))
  console.log(negativeValue(numeros))
}