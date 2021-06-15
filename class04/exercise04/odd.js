exports.Calculate = function impar(num) {
  let odds = []
  for(let i = 0; i < num; i++){
    if(i % 2 == 1) {
      odds.push(i)
    }
  }
  console.log(odds)
}

// exports.Calculate = function(result) {
//   console.log(impar(result))
// }